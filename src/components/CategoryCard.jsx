import { Link } from "react-router-dom";

import {
  IconFamily,
  IconFlag,
  IconPalette,
  IconPaw,
} from "./icons";

import { getColor } from "../services/database";

const categoryStyles = {
  animals: {
    label: "Nhóm Động Vật",
    subtitle: "Gặp gỡ những người bạn nhỏ",
    accent: "#dc2626",
    pale: "#fee2e2",
    badge: "#fef2f2",
    icon: IconPaw,
  },

  family: {
    label: "Nhóm Gia Đình",
    subtitle: "Những câu chuyện về người thân",
    accent: "#4f46e5",
    pale: "#e0e7ff",
    badge: "#eef2ff",
    icon: IconFamily,
  },

  surnames: {
    label: "Nhóm Trăm Họ",
    subtitle: "Cội nguồn tổ tiên chúng mình",
    accent: "#059669",
    pale: "#d1fae5",
    badge: "#ecfdf5",
    icon: IconFlag,
  },

  colors: {
    label: "Màu Sắc & Cội Nguồn",
    subtitle: "Khám phá thế giới rực rỡ",
    accent: "#0891b2",
    pale: "#cffafe",
    badge: "#ecfeff",
    icon: IconPalette,
  },
};

function CategoryCard({ category, sets }) {
  const fallbackStyle = {
    label: `Nhóm ${category.name_vi || ""}`,
    subtitle:
      category.description ||
      "Khám phá những mảnh ghép chữ Hán",
    accent: getColor(category.themeColor),
    pale: "#f1f5f9",
    badge: "#f8fafc",
    icon: IconPaw,
  };

  const style =
    categoryStyles[category.categoryId] ||
    fallbackStyle;

  const CategoryIcon = style.icon;

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-3 p-4 rounded-3xl shadow-sm border border-slate-100 bg-white/60 backdrop-blur-sm">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="p-3 rounded-2xl shadow-inner shrink-0"
            style={{
              backgroundColor: style.pale,
              color: style.accent,
            }}
          >
            <CategoryIcon />
          </div>

          <div className="min-w-0">
            <h3
              className="text-base sm:text-lg font-black uppercase tracking-tight"
              style={{ color: style.accent }}
            >
              {style.label}
            </h3>

            <p className="text-[11px] sm:text-xs text-slate-400 font-bold">
              {style.subtitle}
            </p>
          </div>
        </div>

        <span
          className="shrink-0 text-[9px] sm:text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider"
          style={{
            backgroundColor: style.badge,
            color: style.accent,
          }}
        >
          {sets.length} Bộ chữ
        </span>
      </div>

      {sets.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sets.map((set) => {
            const color = getColor(set.themeColor);

            const core =
              set.core ||
              set.characters?.find(
                (character) =>
                  character.role === "core"
              );

            return (
              <Link
                key={set.setId}
                to={`/set/${set.setId}`}
                className="relative overflow-hidden p-5 sm:p-6 rounded-[30px] sm:rounded-[35px] text-white shadow-lg transition-all hover:scale-[1.05] hover:-translate-y-1 active:scale-95 border-b-8 border-black/10"
                style={{ backgroundColor: color }}
                aria-label={`Mở ${set.name}`}
              >
                <div className="absolute -right-8 -bottom-10 w-28 h-28 rounded-full bg-white/10" />

                <div className="absolute -left-8 -top-10 w-24 h-24 rounded-full bg-black/5" />

                <div className="flex flex-col items-center justify-center space-y-2 relative z-10 text-center min-h-[145px]">
                  <span className="text-[9px] sm:text-[10px] font-bold opacity-80 uppercase tracking-widest">
                    {set.name}
                  </span>

                  <span className="text-6xl sm:text-7xl leading-none font-black drop-shadow-sm">
                    {core?.hanzi || "?"}
                  </span>

                  <span className="text-xs font-black bg-black/10 px-3 py-1 rounded-full">
                    {core?.pinyin || "Đang cập nhật"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="rounded-[28px] border-2 border-dashed border-slate-200 bg-white/40 px-6 py-8 text-center">
          <div className="text-3xl mb-2 opacity-60">
            {category.icon || "🧩"}
          </div>

          <p className="text-sm font-black text-slate-400 uppercase tracking-widest">
            Nội dung đang được cập nhật
          </p>
        </div>
      )}
    </section>
  );
}

export default CategoryCard;