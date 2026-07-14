import { useState } from "react";

import CategoryCard from "./CategoryCard";

import {
  categories,
  getSetsByCategory,
} from "../services/database";

function CategoryGrid() {
  const sortedCategories = [...categories].sort(
    (a, b) =>
      Number(a.sortOrder || 0) -
      Number(b.sortOrder || 0)
  );

  const categoryItems = sortedCategories.map(
    (category) => ({
      category,
      sets: getSetsByCategory(
        category.categoryId
      ),
    })
  );

  /*
   * Khi mở trang:
   * - Tự mở nhóm đầu tiên có dữ liệu.
   * - Hiện tại thường là nhóm Động vật.
   */
  const defaultOpenCategoryId =
    categoryItems.find(
      (item) => item.sets.length > 0
    )?.category.categoryId || null;

  const [
    openCategoryId,
    setOpenCategoryId,
  ] = useState(defaultOpenCategoryId);

  function toggleCategory(
    categoryId,
    hasSets
  ) {
    /*
     * Nhóm chưa có dữ liệu chỉ hiển thị
     * “Đang cập nhật”, không mở vùng trống.
     */
    if (!hasSets) {
      return;
    }

    setOpenCategoryId(
      (currentCategoryId) =>
        currentCategoryId === categoryId
          ? null
          : categoryId
    );
  }

  return (
    <div className="space-y-4 sm:space-y-5">
      {categoryItems.map(
        ({ category, sets }) => (
          <CategoryCard
            key={category.categoryId}
            category={category}
            sets={sets}
            isOpen={
              openCategoryId ===
              category.categoryId
            }
            onToggle={() =>
              toggleCategory(
                category.categoryId,
                sets.length > 0
              )
            }
          />
        )
      )}
    </div>
  );
}

export default CategoryGrid;