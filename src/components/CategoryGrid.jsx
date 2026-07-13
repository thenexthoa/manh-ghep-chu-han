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

  return (
    <div className="space-y-12">
      {sortedCategories.map((category) => (
        <CategoryCard
          key={category.categoryId}
          category={category}
          sets={getSetsByCategory(
            category.categoryId
          )}
        />
      ))}
    </div>
  );
}

export default CategoryGrid;