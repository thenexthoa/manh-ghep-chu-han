import {
  useMemo,
  useState,
} from "react";

import CategoryCard from "./CategoryCard";

import {
  CURRENT_RELEASE,
} from "../data/changelog";

import {
  categories,
  getSetsByCategory,
} from "../services/database";

function normalizeText(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim();
}

function isNewCategory(category) {
  return CURRENT_RELEASE.updates.some(
    (update) => {
      if (
        !update.isNew ||
        !update.targetCategoryName
      ) {
        return false;
      }

      const target =
        normalizeText(
          update.targetCategoryName
        );

      const categoryNames = [
        category.name_vi,
        category.name,
        category.title,
      ];

      return categoryNames.some(
        (name) =>
          normalizeText(name) ===
          target
      );
    }
  );
}

function CategoryGrid() {
  const categoryItems = useMemo(() => {
    const sortedCategories = [
      ...categories,
    ].sort(
      (a, b) =>
        Number(a.sortOrder || 0) -
        Number(b.sortOrder || 0)
    );

    return sortedCategories.map(
      (category) => ({
        category,

        sets: getSetsByCategory(
          category.categoryId
        ),

        isNew:
          isNewCategory(category),
      })
    );
  }, []);

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
        ({
          category,
          sets,
          isNew,
        }) => (
          <CategoryCard
            key={category.categoryId}
            category={category}
            sets={sets}
            isNew={isNew}
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