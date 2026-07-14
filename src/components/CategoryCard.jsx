import { Link } from "react-router-dom";

import {
  IconFamily,
  IconFlag,
  IconPalette,
  IconPaw,
} from "./icons";

import {
  getColor,
} from "../services/database";

const categoryStyles = {
  animals: {
    label: "Nhóm Động Vật",
    subtitle:
      "Gặp gỡ những người bạn nhỏ",
    accent: "#dc2626",
    pale: "#fee2e2",
    badge: "#fef2f2",
    icon: IconPaw,
  },

  family: {
    label: "Nhóm Gia Đình",
    subtitle:
      "Những câu chuyện về người thân",
    accent: "#4f46e5",
    pale: "#e0e7ff",
    badge: "#eef2ff",
    icon: IconFamily,
  },

  surnames: {
    label: "Nhóm Trăm Họ",
    subtitle:
      "Cội nguồn tổ tiên chúng mình",
    accent: "#059669",
    pale: "#d1fae5",
    badge: "#ecfdf5",
    icon: IconFlag,
  },

  colors: {
    label: "Màu Sắc & Cội Nguồn",
    subtitle:
      "Khám phá thế giới rực rỡ",
    accent: "#0891b2",
    pale: "#cffafe",
    badge: "#ecfeff",
    icon: IconPalette,
  },
};

function ChevronIcon({ isOpen }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 transition-transform duration-300 ${
        isOpen ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CategoryCard({
  category,
  sets,
  isOpen,
  onToggle,
}) {
  const fallbackStyle = {
    label: `Nhóm ${
      category.name_vi || ""
    }`,

    subtitle:
      category.description ||
      "Khám phá những mảnh ghép chữ Hán",

    accent: getColor(
      category.themeColor
    ),

    pale: "#f1f5f9",
    badge: "#f8fafc",
    icon: IconPaw,
  };

  const style =
    categoryStyles[
      category.categoryId
    ] || fallbackStyle;

  const CategoryIcon = style.icon;
  const hasSets = sets.length > 0;

  const contentId = `category-content-${category.categoryId}`;

  return (
    <section
      className={`overflow-hidden rounded-[30px] border bg-white/55 backdrop-blur-sm transition-all duration-300 ${
        isOpen
          ? "border-slate-200 shadow-lg"
          : "border-slate-100 shadow-sm"
      }`}
    >
      {/* THANH TIÊU ĐỀ THU GỌN */}
      <button
        type="button"
        onClick={onToggle}
        disabled={!hasSets}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className={`flex w-full items-center justify-between gap-3 p-4 text-left transition-all duration-300 sm:p-5 ${
          hasSets
            ? "cursor-pointer hover:bg-white/80 active:scale-[0.995]"
            : "cursor-default"
        }`}
        style={{
          backgroundColor: isOpen
            ? style.badge
            : "transparent",
        }}
      >
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-inner sm:h-14 sm:w-14"
            style={{
              backgroundColor:
                style.pale,
              color: style.accent,
            }}
          >
            <CategoryIcon />
          </div>

          <div className="min-w-0">
            <h3
              className="truncate text-sm font-black uppercase tracking-tight sm:text-lg"
              style={{
                color: style.accent,
              }}
            >
              {style.label}
            </h3>

            <p className="mt-0.5 truncate text-[10px] font-bold text-slate-400 sm:text-xs">
              {style.subtitle}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <span
            className="whitespace-nowrap rounded-full px-2.5 py-1 text-[8px] font-black uppercase tracking-wider sm:px-3 sm:text-[10px]"
            style={{
              backgroundColor:
                style.badge,
              color: style.accent,
            }}
          >
            {hasSets
              ? `${sets.length} bộ chữ`
              : "Đang cập nhật"}
          </span>

          {hasSets && (
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition-colors"
              style={{
                color: style.accent,
              }}
            >
              <ChevronIcon
                isOpen={isOpen}
              />
            </span>
          )}
        </div>
      </button>

      {/* NỘI DUNG CHỈ HIỂN THỊ KHI MỞ */}
      {isOpen && hasSets && (
        <div
          id={contentId}
          className="animate-snap border-t border-slate-100 px-4 pb-5 pt-5 sm:px-5 sm:pb-6"
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {sets.map((set) => {
              const color = getColor(
                set.themeColor
              );

              const core =
                set.core ||
                set.characters?.find(
                  (character) =>
                    character.role ===
                    "core"
                );

              return (
                <Link
                  key={set.setId}
                  to={`/set/${set.setId}`}
                  className="relative overflow-hidden rounded-[30px] border-b-8 border-black/10 p-5 text-white shadow-lg transition-all hover:-translate-y-1 hover:scale-[1.03] active:scale-95 sm:rounded-[35px] sm:p-6"
                  style={{
                    backgroundColor:
                      color,
                  }}
                  aria-label={`Mở ${set.name}`}
                >
                  <div className="absolute -bottom-10 -right-8 h-28 w-28 rounded-full bg-white/10" />

                  <div className="absolute -left-8 -top-10 h-24 w-24 rounded-full bg-black/5" />

                  <div className="relative z-10 flex min-h-[145px] flex-col items-center justify-center space-y-2 text-center">
                    <span className="text-[9px] font-bold uppercase tracking-widest opacity-80 sm:text-[10px]">
                      {set.name}
                    </span>

                    <span
                      className="text-6xl font-black leading-none drop-shadow-sm sm:text-7xl"
                      style={{
                        fontFamily:
                          '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
                      }}
                    >
                      {core?.hanzi ||
                        "?"}
                    </span>

                    <span className="rounded-full bg-black/10 px-3 py-1 text-xs font-black">
                      {core?.pinyin ||
                        "Đang cập nhật"}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default CategoryCard;