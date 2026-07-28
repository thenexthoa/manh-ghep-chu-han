const OPEN_UPDATE_EVENT =
  "manh-ghep-chu-han:open-updates";

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      <path d="M5 14l.7 1.8 1.8.7-1.8.7L5 19l-.7-1.8-1.8-.7 1.8-.7L5 14Z" />
    </svg>
  );
}

function UpdateFloatingButton() {
  function openUpdates() {
    window.dispatchEvent(
      new Event(OPEN_UPDATE_EVENT)
    );
  }

  return (
    <button
      type="button"
      onClick={openUpdates}
      className="group fixed bottom-5 right-4 z-[90] flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-red-600 text-white shadow-xl transition hover:-translate-y-1 hover:scale-105 hover:bg-red-700 active:scale-95 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
      aria-label="Xem nội dung cập nhật mới"
    >
      <SparkleIcon />

      <span className="absolute -right-1 -top-2 rounded-full bg-amber-400 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-slate-900 shadow-md">
        Mới
      </span>

      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl bg-slate-900 px-3 py-2 text-xs font-bold text-white shadow-lg group-hover:block">
        Có gì mới?
      </span>
    </button>
  );
}

export default UpdateFloatingButton;