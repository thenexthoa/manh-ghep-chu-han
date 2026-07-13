function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M7.2 6C4.3 7.7 3 10.1 3 13.1 3 16 4.6 18 7.1 18c2.1 0 3.9-1.7 3.9-3.9 0-2.1-1.7-3.8-3.8-3.8-.4 0-.8.1-1.1.2.4-1.2 1.3-2.2 2.7-3.1L7.2 6Zm10 0C14.3 7.7 13 10.1 13 13.1c0 2.9 1.6 4.9 4.1 4.9 2.1 0 3.9-1.7 3.9-3.9 0-2.1-1.7-3.8-3.8-3.8-.4 0-.8.1-1.1.2.4-1.2 1.3-2.2 2.7-3.1L17.2 6Z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white/50">
      <div className="mx-auto max-w-4xl px-5 py-6 text-center">
        <p className="text-xs font-bold text-slate-500 sm:text-sm">
          Sản phẩm thuộc bản quyền của The Next Hoa ©
        </p>

        <div className="my-3 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-slate-200" />

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <QuoteIcon />
          </span>

          <span className="h-px w-8 bg-slate-200" />
        </div>

        <p className="animate-breathe-soft mx-auto max-w-2xl text-xs font-semibold italic leading-relaxed text-slate-500 sm:text-sm">
          “Sáng tạo vì tình yêu chữ Hán và vì sự tiến bộ của
          người Việt học tiếng Trung.”
        </p>
      </div>
    </footer>
  );
}

export default Footer;