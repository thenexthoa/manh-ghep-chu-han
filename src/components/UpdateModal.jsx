import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  CURRENT_RELEASE,
  RELEASE_HISTORY,
} from "../data/changelog";

const OPEN_UPDATE_EVENT =
  "manh-ghep-chu-han:open-updates";

const OPEN_CATEGORY_PREVIEW_EVENT =
  "manh-ghep-chu-han:open-category-preview";

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

function UpdateModal() {
  const navigate = useNavigate();

  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  const [
    displayMode,
    setDisplayMode,
  ] = useState("current");

  useEffect(() => {
    const lastSeenVersion =
      window.localStorage.getItem(
        CURRENT_RELEASE.storageKey
      );

    let timerId;

    if (
      lastSeenVersion !==
      CURRENT_RELEASE.version
    ) {
      timerId =
        window.setTimeout(() => {
          setDisplayMode("current");
          setIsOpen(true);
        }, 700);
    }

    function openUpdates() {
      setDisplayMode("history");
      setIsOpen(true);
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener(
      OPEN_UPDATE_EVENT,
      openUpdates
    );

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.clearTimeout(timerId);

      window.removeEventListener(
        OPEN_UPDATE_EVENT,
        openUpdates
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

  function rememberCurrentVersion() {
    window.localStorage.setItem(
      CURRENT_RELEASE.storageKey,
      CURRENT_RELEASE.version
    );
  }

  function closeModal() {
    rememberCurrentVersion();
    setIsOpen(false);
  }

  function openUpdate(update) {
    rememberCurrentVersion();
    setIsOpen(false);

    if (
      update.actionType ===
      "category-preview"
    ) {
      window.setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent(
            OPEN_CATEGORY_PREVIEW_EVENT,
            {
              detail: {
                targetCategoryName:
                  update.targetCategoryName,
              },
            }
          )
        );
      }, 120);

      return;
    }

    if (
      update.actionType === "route" &&
      update.actionPath
    ) {
      navigate(update.actionPath);
    }
  }

  if (!isOpen) {
    return null;
  }

  const releasesToDisplay =
    displayMode === "history"
      ? RELEASE_HISTORY
      : [CURRENT_RELEASE];

  const modalLabel =
    displayMode === "history"
      ? "Lịch sử cập nhật"
      : CURRENT_RELEASE.label;

  const modalTitle =
    displayMode === "history"
      ? "Mảnh Ghép Chữ Hán có gì mới?"
      : CURRENT_RELEASE.title;

  const modalDescription =
    displayMode === "history"
      ? "Xem lại những nội dung và trải nghiệm học tập đã được bổ sung qua từng phiên bản."
      : CURRENT_RELEASE.description;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 p-3 backdrop-blur-sm sm:p-6"
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
        aria-labelledby="update-modal-title"
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[30px] border border-white/60 bg-[#fffdf9] shadow-2xl sm:rounded-[38px]"
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-500 shadow-md transition hover:scale-105 hover:text-slate-800"
          aria-label="Đóng thông báo cập nhật"
        >
          <CloseIcon />
        </button>

        <header className="relative overflow-hidden border-b border-slate-100 px-6 pb-6 pt-8 sm:px-9 sm:pb-8 sm:pt-10">
          <div
            className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full bg-red-100/70"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute right-20 top-24 h-16 w-16 rounded-full bg-amber-100/70"
            aria-hidden="true"
          />

          <div className="relative pr-10">
            <span className="inline-flex rounded-full bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-red-600">
              {modalLabel}
            </span>

            <h2
              id="update-modal-title"
              className="mt-4 text-2xl font-black leading-tight text-slate-800 sm:text-3xl"
            >
              {modalTitle}
            </h2>

            <p className="mt-3 max-w-2xl font-semibold leading-7 text-slate-500">
              {modalDescription}
            </p>
          </div>
        </header>

        <div className="space-y-8 p-5 sm:p-8">
          {releasesToDisplay.map(
            (release) => (
              <section
                key={release.version}
                className="space-y-4"
              >
                {displayMode ===
                  "history" && (
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-red-600">
                        {release.label}
                      </p>

                      <h3 className="mt-1 text-lg font-black text-slate-800">
                        {release.title}
                      </h3>
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">
                      v{release.version}
                    </span>
                  </div>
                )}

                {release.updates.map(
                  (update) => (
                    <article
                      key={`${release.version}-${update.id}`}
                      className="overflow-hidden rounded-[26px] border border-white shadow-lg"
                      style={{
                        backgroundColor:
                          update.background,
                      }}
                    >
                      <div className="p-5 sm:p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-white text-2xl shadow-sm">
                            {update.icon}
                          </div>

                          <div className="min-w-0 flex-1">
                            <p
                              className="text-xs font-black uppercase tracking-[0.16em]"
                              style={{
                                color:
                                  update.accent,
                              }}
                            >
                              {update.type}
                            </p>

                            <h3 className="mt-1 text-xl font-black text-slate-800 sm:text-2xl">
                              {update.title}
                            </h3>

                            <p className="mt-3 font-semibold leading-7 text-slate-600">
                              {
                                update.description
                              }
                            </p>
                          </div>
                        </div>

                        {update.highlights?.length >
                          0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {update.highlights.map(
                              (item) => (
                                <span
                                  key={item}
                                  className="rounded-full bg-white/90 px-3 py-1.5 text-sm font-bold text-slate-600 shadow-sm"
                                >
                                  {item}
                                </span>
                              )
                            )}
                          </div>
                        )}

                        {update.actionLabel && (
                          <button
                            type="button"
                            onClick={() =>
                              openUpdate(
                                update
                              )
                            }
                            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-black text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                            style={{
                              backgroundColor:
                                update.accent,
                            }}
                          >
                            {
                              update.actionLabel
                            }

                            <span
                              className="ml-2"
                              aria-hidden="true"
                            >
                              →
                            </span>
                          </button>
                        )}
                      </div>
                    </article>
                  )
                )}
              </section>
            )
          )}
        </div>

        <footer className="border-t border-slate-100 px-5 py-5 text-center sm:px-8">
          <button
            type="button"
            onClick={closeModal}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-2.5 text-sm font-black text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-900"
          >
            Đã hiểu
          </button>

          <p className="mt-3 text-xs font-semibold text-slate-400">
            Bạn có thể mở lại toàn bộ lịch
            sử bằng nút “Mới” ở góc màn
            hình.
          </p>
        </footer>
      </section>
    </div>
  );
}

export default UpdateModal;