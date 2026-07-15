import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import MethodSteps from "../components/method/MethodSteps";
import PuzzlePieceIcon from "../components/PuzzlePieceIcon";

const slideIds = [
  "hero",
  "story",
  "philosophy",
  "liushu",
  "difference",
  "family",
  "data",
  "steps",
  "memory",
  "cta",
];

const qingFamily = [
  {
    radical: "氵",
    result: "清",
    pinyin: "qīng",
    word: "清楚",
    wordPinyin: "qīngchu",
    meaning: "rõ ràng",
  },
  {
    radical: "日",
    result: "晴",
    pinyin: "qíng",
    word: "晴天",
    wordPinyin: "qíngtiān",
    meaning: "trời nắng",
  },
  {
    radical: "讠",
    result: "请",
    pinyin: "qǐng",
    word: "请问",
    wordPinyin: "qǐngwèn",
    meaning: "xin hỏi",
  },
  {
    radical: "忄",
    result: "情",
    pinyin: "qíng",
    word: "心情",
    wordPinyin: "xīnqíng",
    meaning: "tâm trạng",
  },
  {
    radical: "目",
    result: "睛",
    pinyin: "jīng",
    word: "眼睛",
    wordPinyin: "yǎnjing",
    meaning: "mắt",
  },
  {
    radical: "米",
    result: "精",
    pinyin: "jīng",
    word: "精神",
    wordPinyin: "jīngshén",
    meaning: "tinh thần",
  },
];

const liushuItems = [
  {
    hanzi: "象形",
    title: "Tượng hình",
    description:
      "Gợi hình dáng của sự vật.",
  },
  {
    hanzi: "指事",
    title: "Chỉ sự",
    description:
      "Dùng dấu hiệu để biểu thị ý niệm.",
  },
  {
    hanzi: "会意",
    title: "Hội ý",
    description:
      "Kết hợp thành phần để gợi nghĩa.",
  },
  {
    hanzi: "形声",
    title: "Hình thanh",
    description:
      "Kết hợp thành phần gợi nghĩa và gợi âm.",
  },
  {
    hanzi: "转注",
    title: "Chuyển chú",
    description:
      "Quan hệ phát triển giữa các chữ.",
  },
  {
    hanzi: "假借",
    title: "Giả tá",
    description:
      "Mượn chữ có sẵn để biểu thị nghĩa khác.",
  },
];

function ArrowIcon({
  direction = "right",
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 ${
        direction === "left"
          ? "rotate-180"
          : ""
      }`}
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function Method() {
  const containerRef =
    useRef(null);

  const wheelLockRef =
    useRef(false);

  const wheelTimerRef =
    useRef(null);

  const [
    activeSlide,
    setActiveSlide,
  ] = useState(0);

  const slideCount =
    slideIds.length;

  function scrollToSlide(index) {
    const nextIndex = Math.max(
      0,
      Math.min(
        index,
        slideCount - 1
      )
    );

    const container =
      containerRef.current;

    if (!container) {
      return;
    }

    container.scrollTo({
      left:
        container.clientWidth *
        nextIndex,
      behavior: "smooth",
    });

    setActiveSlide(nextIndex);
  }

  function handleWheel(event) {
    if (
      Math.abs(event.deltaY) <
      Math.abs(event.deltaX)
    ) {
      return;
    }

    event.preventDefault();

    if (
      wheelLockRef.current
    ) {
      return;
    }

    wheelLockRef.current = true;

    if (event.deltaY > 0) {
      scrollToSlide(
        activeSlide + 1
      );
    } else {
      scrollToSlide(
        activeSlide - 1
      );
    }

    window.clearTimeout(
      wheelTimerRef.current
    );

    wheelTimerRef.current =
      window.setTimeout(() => {
        wheelLockRef.current =
          false;
      }, 650);
  }

  function handleScroll() {
    const container =
      containerRef.current;

    if (!container) {
      return;
    }

    const nextIndex = Math.round(
      container.scrollLeft /
        Math.max(
          container.clientWidth,
          1
        )
    );

    setActiveSlide(
      Math.max(
        0,
        Math.min(
          nextIndex,
          slideCount - 1
        )
      )
    );
  }

  useEffect(() => {
    function handleKeyDown(
      event
    ) {
      if (
        event.key ===
          "ArrowRight" ||
        event.key === "PageDown"
      ) {
        event.preventDefault();

        scrollToSlide(
          activeSlide + 1
        );
      }

      if (
        event.key ===
          "ArrowLeft" ||
        event.key === "PageUp"
      ) {
        event.preventDefault();

        scrollToSlide(
          activeSlide - 1
        );
      }

      if (event.key === "Home") {
        event.preventDefault();
        scrollToSlide(0);
      }

      if (event.key === "End") {
        event.preventDefault();

        scrollToSlide(
          slideCount - 1
        );
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      window.clearTimeout(
        wheelTimerRef.current
      );
    };
  }, [
    activeSlide,
    slideCount,
  ]);

  const progressWidth = `${
    ((activeSlide + 1) /
      slideCount) *
    100
  }%`;

  return (
    <main className="relative h-[calc(100dvh-72px)] min-h-0 overflow-hidden bg-[#fffaf5] text-slate-700">
      <div
        className="absolute left-0 top-0 z-40 h-1 bg-red-600 transition-[width] duration-300"
        style={{
          width: progressWidth,
        }}
        aria-hidden="true"
      />

      <div
        ref={containerRef}
        onWheel={handleWheel}
        onScroll={handleScroll}
        className="flex h-full min-h-0 snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* 01 — HERO */}
        <section className="relative flex h-full min-h-0 min-w-full snap-start items-start overflow-x-hidden overflow-y-auto bg-[#fffaf5] px-5 pb-20 pt-6 sm:px-8 md:items-center md:overflow-y-hidden md:py-8 lg:px-14">
          <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-red-100 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-red-600 shadow-sm">
                <PuzzlePieceIcon className="h-5 w-5" />
                Web app học chữ Hán
              </div>

              <h1 className="mt-5 text-4xl font-black leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
                Nhìn chữ Hán theo một{" "}
                <span className="text-red-600">
                  góc nhìn khác
                </span>
              </h1>

              <p className="mt-5 text-xl font-black text-slate-600 sm:text-2xl">
                Hiểu trước · Nhớ sau ·
                Rồi mới luyện
              </p>

              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-slate-600 sm:text-lg">
                Mảnh Ghép Chữ Hán giúp
                người Việt học tiếng Trung khám phá cấu
                tạo chữ qua những thành
                phần có liên hệ về âm đọc
                và ý nghĩa.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/set/ma"
                  className="rounded-2xl bg-red-600 px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  Trải nghiệm ngay
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    scrollToSlide(1)
                  }
                  className="rounded-2xl border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-black uppercase tracking-wider text-slate-600"
                >
                  Vì sao có web app này?
                </button>
              </div>

              <p className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                Lăn chuột hoặc vuốt ngang
                để khám phá
              </p>
            </div>

            <div className="rounded-[38px] bg-white/90 p-6 shadow-2xl">
              <p className="text-center text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                Một chữ · Nhiều mảnh ghép
              </p>

              <div className="mt-6 flex items-center justify-center gap-3 sm:gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-pink-100 text-5xl font-black text-pink-600 shadow-lg sm:h-24 sm:w-24 sm:text-6xl">
                  女
                </div>

                <span className="text-3xl font-black text-slate-300">
                  +
                </span>

                <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-red-600 text-5xl font-black text-white shadow-lg sm:h-24 sm:w-24 sm:text-6xl">
                  马
                </div>

                <span className="text-3xl font-black text-slate-300">
                  →
                </span>

                <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border-4 border-red-600 bg-white text-5xl font-black text-red-600 shadow-lg sm:h-24 sm:w-24 sm:text-6xl">
                  妈
                </div>
              </div>

              <div className="mt-6 rounded-3xl bg-slate-50 px-5 py-4 text-center">
                <p className="text-3xl font-black text-red-600">
                  妈妈
                </p>

                <p className="mt-1 font-bold text-slate-500">
                  māma — mẹ
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — CÂU CHUYỆN */}
        <section className="flex h-full min-h-0 min-w-full snap-start items-start overflow-y-auto bg-[#fffaf5] px-5 pb-20 pt-6 sm:px-8 md:items-center md:overflow-y-hidden md:py-8 lg:px-14">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[36px] bg-amber-50 p-7 shadow-xl sm:p-9">
              <p className="text-6xl">☕</p>

              <blockquote className="mt-5 text-2xl font-black leading-relaxed text-slate-700 sm:text-3xl">
                “Sao chữ nào cũng giống
                giống nhau quá cô?”
              </blockquote>

              <p className="mt-5 font-bold leading-7 text-amber-800">
                Một câu hỏi quen thuộc
                của nhiều học viên khi
                bắt đầu tiếp xúc với chữ
                Hán.
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Câu chuyện bắt đầu
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-800 sm:text-4xl">
                Vì sao Hùng xây dựng web
                app này?
              </h2>

              <div className="mt-5 space-y-3 text-base font-semibold leading-8 text-slate-600">
                <p>
                  Có vài lần ngồi làm việc
                  ở quán cà phê, Hùng bắt
                  gặp các bạn trẻ đang học
                  tiếng Trung.
                </p>

                <p>
                  Có bạn viết kín cả trang
                  nhưng không theo bút
                  thuận, giống như đang
                  “vẽ” chữ hơn là viết
                  chữ.
                </p>

                <p>
                  Có bạn cố chép thật
                  nhiều với hy vọng sẽ
                  nhớ. Có học viên nhìn
                  chữ này lại đọc nhầm
                  sang chữ khác vì chúng
                  trông quá giống nhau.
                </p>

                <p className="font-black text-slate-800">
                  Liệu có cách nào giúp
                  người học tiếng Trung nhìn chữ Hán
                  nhẹ nhàng và có logic
                  hơn không?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — TRIẾT LÝ */}
        <section className="flex h-full min-h-0 min-w-full snap-start items-start overflow-y-auto bg-[#fffaf5] px-5 pb-20 pt-6 sm:px-8 md:items-center md:overflow-y-hidden md:py-8 lg:px-14">
          <div className="mx-auto w-full max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Triết lý cốt lõi
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-800 sm:text-4xl">
                Hiểu trước · Nhớ sau ·
                Rồi mới luyện
              </h2>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Hiểu",
                  text:
                    "Nhìn cấu tạo, nhận diện các thành phần và biết mình đang nhìn thấy gì.",
                  color:
                    "#2563eb",
                  background:
                    "#eff6ff",
                },
                {
                  number: "02",
                  title: "Nhớ",
                  text:
                    "Kết nối âm đọc, ý nghĩa, từ thường gặp và câu chuyện hỗ trợ trí nhớ.",
                  color:
                    "#059669",
                  background:
                    "#ecfdf5",
                },
                {
                  number: "03",
                  title: "Luyện",
                  text:
                    "Nghe, đọc, nhận diện, viết đúng bút thuận, ôn tập và sử dụng.",
                  color:
                    "#dc2626",
                  background:
                    "#fef2f2",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="rounded-[32px] p-7 shadow-lg"
                  style={{
                    backgroundColor:
                      item.background,
                  }}
                >
                  <p
                    className="text-5xl font-black opacity-20"
                    style={{
                      color:
                        item.color,
                    }}
                  >
                    {item.number}
                  </p>

                  <h3
                    className="mt-4 text-2xl font-black"
                    style={{
                      color:
                        item.color,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 font-semibold leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-7 max-w-4xl rounded-[28px] bg-white px-6 py-5 text-center text-base font-black leading-8 text-slate-700 shadow-sm">
              Web app không thay thế
              giáo trình hay việc luyện
              viết. Nó giúp việc luyện
              tập có thêm cơ sở, có logic
              và bớt áp lực hơn.
            </p>
          </div>
        </section>

        {/* 04 — LỤC THƯ */}
        <section className="flex h-full min-h-0 min-w-full snap-start items-start overflow-y-auto bg-[#fffaf5] px-5 pb-20 pt-6 sm:px-8 md:items-center md:overflow-y-hidden md:py-8 lg:px-14">
          <div className="mx-auto w-full max-w-6xl rounded-[40px] bg-slate-900 p-7 text-white shadow-2xl sm:p-9 lg:p-11">
            <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
                  Nhìn sơ qua về Lục thư
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                  Chữ Hán không được hình
                  thành hoàn toàn ngẫu
                  nhiên
                </h2>

                <p className="mt-5 font-semibold leading-8 text-slate-300">
                  Lục thư — 六书 mô tả sáu
                  nhóm liên quan đến cấu
                  tạo và cách sử dụng chữ.
                  Web app đặc biệt quan tâm
                  đến chữ hình thanh —
                  形声.
                </p>

                <p className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5 font-bold leading-7 text-amber-200">
                  Mục tiêu không phải dạy
                  toàn bộ Lục thư, mà giúp
                  người học hiểu rằng chữ
                  Hán không chỉ là những
                  hình vẽ cần học thuộc.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {liushuItems.map(
                  (item) => (
                    <article
                      key={item.hanzi}
                      className={`rounded-[24px] border p-4 ${
                        item.hanzi ===
                        "形声"
                          ? "border-amber-300 bg-amber-300/10"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-3xl font-black text-amber-300">
                          {item.hanzi}
                        </span>

                        <span className="text-sm font-black">
                          {item.title}
                        </span>
                      </div>

                      <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">
                        {item.description}
                      </p>
                    </article>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 05 — ĐIỂM KHÁC BIỆT */}
        <section className="flex h-full min-h-0 min-w-full snap-start items-start overflow-y-auto bg-[#fffaf5] px-5 pb-20 pt-6 sm:px-8 md:items-center md:overflow-y-hidden md:py-8 lg:px-14">
          <div className="mx-auto w-full max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
                Điểm khác biệt
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-800 sm:text-4xl">
                Không chỉ nhìn theo bộ
                thủ, mà còn nhìn theo gia
                đình gợi âm
              </h2>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <article className="rounded-[34px] bg-white p-7 shadow-xl">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-500">
                  Cách tiếp cận quen
                  thuộc
                </span>

                <h3 className="mt-5 text-2xl font-black text-slate-800">
                  Bắt đầu từ bộ thủ hoặc
                  chủ đề
                </h3>

                <div className="mt-6 flex items-center gap-5">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-50 text-6xl font-black text-blue-600">
                    氵
                  </div>

                  <p className="text-3xl font-black text-slate-400">
                    河 · 海 · 湖
                  </p>
                </div>
              </article>

              <article className="rounded-[34px] border-2 border-cyan-200 bg-cyan-50 p-7 shadow-xl">
                <span className="rounded-full bg-cyan-600 px-4 py-2 text-xs font-black uppercase tracking-wider text-white">
                  Mảnh Ghép Chữ Hán
                </span>

                <h3 className="mt-5 text-2xl font-black text-slate-800">
                  Bắt đầu từ thành phần
                  gợi âm
                </h3>

                <div className="mt-6 flex items-center gap-5">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-cyan-600 text-6xl font-black text-white">
                    青
                  </div>

                  <p className="text-3xl font-black text-cyan-700">
                    清 · 晴 · 请 · 情
                  </p>
                </div>
              </article>
            </div>

            <div className="mt-7 rounded-[30px] bg-red-600 px-7 py-5 text-center text-white shadow-xl">
              <p className="text-lg font-black">
                Không chỉ hỏi: “Chữ
                này thuộc bộ gì?”
              </p>

              <p className="mt-2 text-2xl font-black">
                Mà còn hỏi: “Chữ này
                thuộc gia đình nào?”
              </p>
            </div>
          </div>
        </section>

        {/* 06 — GIA ĐÌNH 青 */}
        <section className="flex h-full min-h-0 min-w-full snap-start items-start overflow-y-auto bg-[#fffaf5] px-5 pb-20 pt-6 sm:px-8 md:items-center md:overflow-y-hidden md:py-8 lg:px-14">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-8 rounded-[40px] border border-cyan-100 bg-cyan-50 p-7 shadow-xl lg:grid-cols-[0.72fr_1.28fr] lg:p-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
                Một gia đình chữ gợi âm
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-800 sm:text-4xl">
                Từ một chữ 青, mở ra
                nhiều chữ mới
              </h2>

              <p className="mt-5 font-semibold leading-8 text-slate-600">
                Thành phần 青 tạo mối
                liên hệ về âm đọc. Các
                mảnh ghép còn lại giúp
                phân biệt trường nghĩa.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-28 w-28 items-center justify-center rounded-[30px] bg-cyan-600 text-7xl font-black text-white shadow-xl">
                  青
                </div>

                <div>
                  <p className="text-2xl font-black text-cyan-700">
                    qīng
                  </p>

                  <p className="font-bold text-slate-500">
                    thành phần chung
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {qingFamily.map(
                (item) => (
                  <article
                    key={item.result}
                    className="rounded-[24px] bg-white p-4 shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black text-cyan-700">
                        {item.radical}
                      </span>

                      <span className="text-slate-300">
                        +
                      </span>

                      <span className="text-2xl font-black text-cyan-700">
                        青
                      </span>

                      <span className="text-slate-300">
                        →
                      </span>

                      <span className="text-3xl font-black text-slate-800">
                        {item.result}
                      </span>

                      <span className="ml-auto text-sm font-black text-cyan-700">
                        {item.pinyin}
                      </span>
                    </div>

                    <p className="mt-3 rounded-2xl bg-slate-50 px-3 py-2 font-bold text-slate-600">
                      {item.word} ·{" "}
                      {item.wordPinyin} ·{" "}
                      {item.meaning}
                    </p>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* 07 — DỮ LIỆU */}
        <section className="flex h-full min-h-0 min-w-full snap-start items-start overflow-y-auto bg-[#fffaf5] px-5 pb-20 pt-6 sm:px-8 md:items-center md:overflow-y-hidden md:py-8 lg:px-14">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">
                Dữ liệu phía sau web app
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-800 sm:text-4xl">
                Được sưu tập và chuẩn
                hóa thủ công
              </h2>

              <p className="mt-5 font-semibold leading-8 text-slate-600">
                Hùng đã tìm kiếm nhiều
                nguồn nhưng chưa tìm
                thấy một bộ dữ liệu hoàn
                chỉnh, trực quan và phù
                hợp để người học tiếng Trung học
                trực tiếp theo các gia
                đình gợi âm.
              </p>

              <p className="mt-4 font-semibold leading-8 text-slate-600">
                Vì vậy, phần lớn dữ liệu
                được tự sưu tập, đối
                chiếu, phân nhóm và
                chuẩn hóa trong quá
                trình phát triển.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Đọc và đối chiếu tài liệu về cấu tạo chữ Hán",
                "Tìm thành phần gợi âm và các chữ có liên hệ",
                "Nhóm chữ thành những gia đình dễ quan sát",
                "Kiểm tra pinyin, nghĩa và từ thường gặp",
                "Viết câu chuyện hỗ trợ trí nhớ cho người học tiếng Trung",
                "Chuẩn hóa dữ liệu cho web app tương tác",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-violet-50 px-4 py-3 font-bold text-slate-700"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white">
                    ✓
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 08 — FLASHCARD */}
        <section className="flex h-full min-h-0 min-w-full snap-start items-start overflow-y-auto bg-[#fffaf5] px-5 pb-20 pt-6 sm:px-8 md:items-center md:overflow-y-hidden md:py-8 lg:px-14">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-7 text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Cách sử dụng
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-800 sm:text-4xl">
                Học trên web app theo
                sáu bước
              </h2>
            </div>

            <MethodSteps
              onPreviousSection={() =>
                scrollToSlide(
                  activeSlide - 1
                )
              }
              onNextSection={() =>
                scrollToSlide(
                  activeSlide + 1
                )
              }
            />
          </div>
        </section>

        {/* 09 — CÂU CHUYỆN */}
        <section className="flex h-full min-h-0 min-w-full snap-start items-start overflow-y-auto bg-[#fffaf5] px-5 pb-20 pt-6 sm:px-8 md:items-center md:overflow-y-hidden md:py-8 lg:px-14">
          <div className="mx-auto w-full max-w-6xl rounded-[40px] border border-amber-200 bg-amber-50 p-7 shadow-xl sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr]">
              <div className="flex h-28 w-28 items-center justify-center rounded-[32px] bg-amber-400 text-6xl shadow-lg">
                🌉
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-700">
                  Câu chuyện ghi nhớ
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-800 sm:text-4xl">
                  Một chiếc cầu, không
                  phải toàn bộ lịch sử
                  của chữ
                </h2>

                <p className="mt-5 font-semibold leading-8 text-slate-700">
                  Câu chuyện được dùng
                  để nối các thành phần,
                  tạo hình ảnh trong trí
                  nhớ và giúp việc học
                  bớt khô khan.
                </p>

                <p className="mt-4 font-black leading-8 text-amber-900">
                  Đây là công cụ sư phạm,
                  không mặc nhiên là lời
                  giải thích chính thức
                  về ngữ nguyên.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-4 text-center sm:grid-cols-3">
              {[
                "Cấu tạo giúp bạn hiểu chữ",
                "Câu chuyện giúp bạn nhớ chữ",
                "Luyện tập giúp bạn sử dụng chữ",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-white px-5 py-5 font-black text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10 — CTA + FOOTER */}
        <section className="flex h-full min-h-0 min-w-full snap-start flex-col overflow-y-auto bg-[#fffaf5] px-5 pb-20 pt-6 text-slate-700 sm:px-8 md:overflow-y-hidden md:py-7 lg:px-14">
          <div className="flex flex-1 items-center">
            <div className="mx-auto w-full max-w-5xl rounded-[42px] bg-gradient-to-br from-red-600 to-rose-500 px-7 py-10 text-center text-white shadow-2xl sm:px-10 lg:px-14">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white/15">
                <PuzzlePieceIcon className="h-9 w-9" />
              </div>

              <h2 className="mt-6 text-4xl font-black sm:text-5xl">
                Bắt đầu từ một mảnh ghép nhỏ
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base font-bold leading-8 text-red-50 sm:text-lg">
                Nếu bạn từng thấy chữ Hán quá nhiều nét hoặc quá giống nhau,
                hãy thử nhìn chúng như những thành phần có liên hệ.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/set/ma"
                  className="rounded-2xl bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-red-600 shadow-lg transition hover:-translate-y-0.5"
                >
                  Bắt đầu với chữ 马
                </Link>

                <Link
                  to="/"
                  className="rounded-2xl border-2 border-white/50 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-white/20"
                >
                  Khám phá các nhóm chữ
                </Link>
              </div>
            </div>
          </div>

          <footer className="mt-5 border-t border-slate-200 pt-4 text-center text-slate-500">
            <p className="text-sm font-black text-slate-600">
              Sản phẩm thuộc bản quyền của The Next Hoa ©
            </p>

            <div className="mx-auto my-2.5 flex items-center justify-center gap-3 text-slate-300">
              <span className="h-px w-10 bg-slate-200" />
              <span>❝</span>
              <span className="h-px w-10 bg-slate-200" />
            </div>

            <p className="animate-breathe-soft text-sm font-semibold italic leading-6 text-slate-500">
              “Sáng tạo vì tình yêu chữ Hán và vì sự tiến bộ của người Việt
              học tiếng Trung.”
            </p>
          </footer>
        </section>
      </div>

      {/* NÚT ĐIỀU HƯỚNG CHÍNH */}
      <button
        type="button"
        onClick={() =>
          scrollToSlide(
            activeSlide - 1
          )
        }
        disabled={
          activeSlide === 0
        }
        className="absolute left-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-lg transition hover:scale-105 disabled:pointer-events-none disabled:opacity-0 sm:left-5"
        aria-label="Phần trước"
      >
        <ArrowIcon direction="left" />
      </button>

      <button
        type="button"
        onClick={() =>
          scrollToSlide(
            activeSlide + 1
          )
        }
        disabled={
          activeSlide ===
          slideCount - 1
        }
        className="absolute right-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-lg transition hover:scale-105 disabled:pointer-events-none disabled:opacity-0 sm:right-5"
        aria-label="Phần tiếp theo"
      >
        <ArrowIcon />
      </button>

      {/* TIẾN TRÌNH */}
      <div className="absolute bottom-3 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/85 px-3 py-2 shadow-md backdrop-blur">
        {slideIds.map(
          (slideId, index) => (
            <button
              key={slideId}
              type="button"
              onClick={() =>
                scrollToSlide(
                  index
                )
              }
              className={`h-2 rounded-full transition-all ${
                index ===
                activeSlide
                  ? "w-7 bg-red-600"
                  : "w-2 bg-slate-300"
              }`}
              aria-label={`Đi tới phần ${
                index + 1
              }`}
            />
          )
        )}
      </div>

      <div className="absolute right-4 top-4 z-50 rounded-full bg-white/80 px-3 py-1.5 text-xs font-black text-slate-500 shadow-sm backdrop-blur">
        {activeSlide + 1} /{" "}
        {slideCount}
      </div>
    </main>
  );
}

export default Method;
