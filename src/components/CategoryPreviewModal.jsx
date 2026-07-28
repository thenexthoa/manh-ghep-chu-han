import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  categories,
  getColor,
  getSetsByCategory,
} from "../services/database";

const OPEN_CATEGORY_PREVIEW_EVENT =
  "manh-ghep-chu-han:open-category-preview";

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

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CategoryPreviewModal() {
  const [
    targetCategoryName,
    setTargetCategoryName,
  ] = useState("");

  const isOpen =
    Boolean(targetCategoryName);

  const categoryData = useMemo(() => {
    if (!targetCategoryName) {
      return null;
    }

    const normalizedTarget =
      normalizeText(
        targetCategoryName
      );

    const category =
      categories.find((item) => {
        const names = [
          item.name_vi,
          item.name,
          item.title,
          item.categoryId,
        ];

        return names.some(
          (name) =>
            normalizeText(name) ===
            normalizedTarget
        );
      }) ||
      categories.find((item) => {
        const names = [
          item.name_vi,
          item.name,
          item.title,
        ];

        return names.some((name) =>
          normalizeText(name).includes(
            normalizedTarget
          )
        );
      });

    if (!category) {
      return null;
    }

    return {
      category,
      sets: getSetsByCategory(
        category.categoryId
      ),
    };
  }, [targetCategoryName]);

  useEffect(() => {
    function openCategoryPreview(
      event
    ) {
      const name =
        event.detail
          ?.targetCategoryName;

      if (!name) {
        return;
      }

      setTargetCategoryName(name);
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setTargetCategoryName("");
      }
    }

    window.addEventListener(
      OPEN_CATEGORY_PREVIEW_EVENT,
      openCategoryPreview
    );

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        OPEN_CATEGORY_PREVIEW_EVENT,
        openCategoryPreview
      );

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isOpen]);

  function closeModal() {
    setTargetCategoryName("");
  }

  if (!isOpen) {
    return null;
  }

  const category =
    categoryData?.category;

  const sets =
    categoryData?.sets || [];

  const categoryColor = category
    ? getColor(category.themeColor)
    : "#dc2626";

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          closeModal();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="category-preview-title"
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[30px] border border-white/70 bg-[#fffdf9] shadow-2xl sm:rounded-[40px]"
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-500 shadow-md transition hover:scale-105 hover:text-slate-900"
          aria-label="Đóng cửa sổ giới thiệu nhóm"
        >
          <CloseIcon />
        </button>

        <header className="relative overflow-hidden border-b border-slate-100 px-6 pb-7 pt-8 sm:px-10 sm:pb-9 sm:pt-10">
          <div
            className="pointer-events-none absolute -right-10 -top-16 h-52 w-52 rounded-full opacity-15"
            style={{
              backgroundColor:
                categoryColor,
            }}
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute right-36 top-28 h-20 w-20 rounded-full opacity-10"
            style={{
              backgroundColor:
                categoryColor,
            }}
            aria-hidden="true"
          />

          <div className="relative flex items-start gap-4 pr-10 sm:gap-6">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] text-3xl shadow-sm sm:h-20 sm:w-20 sm:text-4xl"
              style={{
                backgroundColor:
                  `${categoryColor}18`,
              }}
            >
              🧭
            </div>

            <div className="min-w-0">
              <span
                className="inline-flex rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] sm:text-xs"
                style={{
                  backgroundColor:
                    `${categoryColor}14`,
                  color:
                    categoryColor,
                }}
              >
                Nhóm mới
              </span>

              <h2
                id="category-preview-title"
                className="mt-3 text-2xl font-black leading-tight text-slate-800 sm:text-4xl"
              >
                {category?.name_vi ||
                  targetCategoryName}
              </h2>

              <p className="mt-3 max-w-2xl font-semibold leading-7 text-slate-500">
                {category?.description ||
                  "Khám phá những bộ chữ Hán mới qua cấu tạo, hình ảnh và câu chuyện dễ nhớ."}
              </p>
            </div>
          </div>
        </header>

        <div className="p-5 sm:p-8">
          {!categoryData && (
            <div className="rounded-[26px] border border-amber-200 bg-amber-50 p-6 text-center">
              <p className="font-black text-amber-800">
                Chưa tìm thấy nhóm trong
                dữ liệu hiện tại.
              </p>

              <p className="mt-2 text-sm font-semibold leading-6 text-amber-700">
                Hãy kiểm tra lại tên nhóm
                trong tab Categories và
                trường targetCategoryName
                trong changelog.js.
              </p>
            </div>
          )}

          {categoryData &&
            sets.length === 0 && (
              <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-7 text-center">
                <div className="text-4xl">
                  🚧
                </div>

                <p className="mt-3 font-black text-slate-700">
                  Nhóm này đang được cập
                  nhật
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-500">
                  Các bộ chữ sẽ sớm xuất
                  hiện tại đây.
                </p>
              </div>
            )}

          {sets.length > 0 && (
            <>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                    Nội dung trong nhóm
                  </p>

                  <h3 className="mt-1 text-xl font-black text-slate-800 sm:text-2xl">
                    {sets.length} bộ chữ
                    đang sẵn sàng
                  </h3>
                </div>

                <span
                  className="rounded-full px-4 py-2 text-xs font-black"
                  style={{
                    backgroundColor:
                      `${categoryColor}12`,
                    color:
                      categoryColor,
                  }}
                >
                  Chọn một bộ để bắt đầu
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {sets.map((set) => {
                  const setColor =
                    getColor(
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
                      onClick={closeModal}
                      className="group relative overflow-hidden rounded-[28px] border-b-8 border-black/10 p-5 text-white shadow-lg transition hover:-translate-y-1 hover:scale-[1.02] active:scale-95 sm:p-6"
                      style={{
                        backgroundColor:
                          setColor,
                      }}
                    >
                      <div className="absolute -bottom-10 -right-8 h-28 w-28 rounded-full bg-white/10" />

                      <div className="absolute -left-8 -top-10 h-24 w-24 rounded-full bg-black/5" />

                      <div className="relative z-10 flex min-h-[175px] flex-col items-center justify-center text-center">
                        <span className="text-[9px] font-black uppercase tracking-widest opacity-80 sm:text-[10px]">
                          {set.name}
                        </span>

                        <span
                          className="mt-3 text-6xl font-black leading-none drop-shadow-sm sm:text-7xl"
                          style={{
                            fontFamily:
                              '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
                          }}
                        >
                          {core?.hanzi ||
                            "?"}
                        </span>

                        <span className="mt-3 rounded-full bg-black/10 px-3 py-1 text-xs font-black">
                          {core?.pinyin ||
                            "Đang cập nhật"}
                        </span>

                        <span className="mt-4 inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider opacity-0 transition group-hover:opacity-100">
                          Bắt đầu học
                          <ArrowIcon />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </>
          )}
        </div>

        <footer className="border-t border-slate-100 px-5 py-5 text-center sm:px-8">
          <button
            type="button"
            onClick={closeModal}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-2.5 text-sm font-black text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-900"
          >
            Quay lại trang chủ
          </button>
        </footer>
      </section>
    </div>
  );
}

export default CategoryPreviewModal;