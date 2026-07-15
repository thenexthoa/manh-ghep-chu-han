import {
  useRef,
  useState,
} from "react";

const steps = [
  {
    number: "01",
    title: "Chọn một chữ lõi",
    description:
      "Bắt đầu từ một chữ lõi hoặc thành phần chung để nhìn thấy mối liên hệ giữa nhiều chữ.",
    visual: "青",
    note: "qīng — thành phần chung",
    accent: "#0891b2",
    background: "#ecfeff",
  },
  {
    number: "02",
    title: "Quan sát chữ lõi",
    description:
      "Nhìn mặt chữ, nghe âm đọc và làm quen với hình dạng trước khi thêm một mảnh ghép mới.",
    visual: "青",
    note: "Nhìn · Nghe · Nhận diện",
    accent: "#2563eb",
    background: "#eff6ff",
  },
  {
    number: "03",
    title: "Chọn một mảnh ghép",
    description:
      "Thêm một thành phần gợi nghĩa hoặc một thành phần cấu tạo khác.",
    visual: "氵 + 青",
    note: "Thủy + Thanh",
    accent: "#7c3aed",
    background: "#f5f3ff",
  },
  {
    number: "04",
    title: "Khám phá chữ mới",
    description:
      "Quan sát kết quả ghép, pinyin và nghĩa tiếng Việt của chữ vừa được hình thành.",
    visual: "清",
    note: "qīng — trong, sạch",
    accent: "#059669",
    background: "#ecfdf5",
  },
  {
    number: "05",
    title: "Học từ thường gặp",
    description:
      "Đưa chữ vào một từ thực tế để biết chữ được sử dụng như thế nào.",
    visual: "清楚",
    note: "qīngchu — rõ ràng",
    accent: "#ea580c",
    background: "#fff7ed",
  },
  {
    number: "06",
    title: "Ghi nhớ rồi luyện tập",
    description:
      "Nghe, đọc, nhận diện, viết đúng bút thuận, ôn lại và sử dụng chữ trong ngữ cảnh.",
    visual: "听 · 读 · 写",
    note: "Nghe · Đọc · Viết · Ôn · Dùng",
    accent: "#dc2626",
    background: "#fef2f2",
  },
];

function Chevron({ direction = "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
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

function MethodSteps({
  onPreviousSection,
  onNextSection,
}) {
  const [
    activeStep,
    setActiveStep,
  ] = useState(0);

  const touchStartRef =
    useRef(null);

  const currentStep =
    steps[activeStep];

  function goToStep(nextIndex) {
    if (nextIndex < 0) {
      onPreviousSection?.();
      return;
    }

    if (nextIndex >= steps.length) {
      onNextSection?.();
      return;
    }

    setActiveStep(nextIndex);
  }

  function handleTouchStart(event) {
    const touch =
      event.touches[0];

    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  }

  function handleTouchEnd(event) {
    if (!touchStartRef.current) {
      return;
    }

    const touch =
      event.changedTouches[0];

    const deltaX =
      touch.clientX -
      touchStartRef.current.x;

    const deltaY =
      touch.clientY -
      touchStartRef.current.y;

    touchStartRef.current = null;

    if (
      Math.abs(deltaX) < 45 ||
      Math.abs(deltaX) <
        Math.abs(deltaY)
    ) {
      return;
    }

    if (deltaX < 0) {
      goToStep(activeStep + 1);
    } else {
      goToStep(activeStep - 1);
    }
  }

  return (
    <div
      className="mx-auto w-full max-w-4xl"
      onTouchStart={
        handleTouchStart
      }
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="relative overflow-hidden rounded-[36px] border border-white p-6 shadow-2xl sm:p-9 lg:p-10"
        style={{
          backgroundColor:
            currentStep.background,
        }}
      >
        <div
          className="pointer-events-none absolute -right-8 -top-14 text-[150px] font-black opacity-[0.06]"
          style={{
            color: currentStep.accent,
          }}
          aria-hidden="true"
        >
          {currentStep.number}
        </div>

        <div className="relative grid items-center gap-7 lg:grid-cols-[1fr_0.88fr]">
          <div>
            <span
              className="inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.16em]"
              style={{
                backgroundColor:
                  `${currentStep.accent}18`,
                color:
                  currentStep.accent,
              }}
            >
              Bước {activeStep + 1} /{" "}
              {steps.length}
            </span>

            <h3 className="mt-5 text-3xl font-black leading-tight text-slate-800 sm:text-4xl">
              {currentStep.title}
            </h3>

            <p className="mt-5 text-base font-semibold leading-8 text-slate-600 sm:text-lg">
              {
                currentStep.description
              }
            </p>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.14em] text-slate-400">
              Vuốt thẻ hoặc dùng mũi
              tên để xem bước tiếp theo
            </p>
          </div>

          <div className="flex min-h-[190px] flex-col items-center justify-center rounded-[30px] bg-white/85 px-5 py-7 text-center shadow-lg">
            <div
              className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl"
              style={{
                color:
                  currentStep.accent,
                fontFamily:
                  '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
              }}
            >
              {currentStep.visual}
            </div>

            <p className="mt-4 font-black text-slate-500">
              {currentStep.note}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() =>
            goToStep(
              activeStep - 1
            )
          }
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-800"
          aria-label="Bước trước"
        >
          <Chevron direction="left" />
        </button>

        <div className="flex flex-1 items-center justify-center gap-2">
          {steps.map(
            (step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() =>
                  setActiveStep(
                    index
                  )
                }
                className={`h-2.5 rounded-full transition-all ${
                  index === activeStep
                    ? "w-9"
                    : "w-2.5"
                }`}
                style={{
                  backgroundColor:
                    index ===
                    activeStep
                      ? currentStep.accent
                      : "#cbd5e1",
                }}
                aria-label={`Xem bước ${
                  index + 1
                }`}
              />
            )
          )}
        </div>

        <button
          type="button"
          onClick={() =>
            goToStep(
              activeStep + 1
            )
          }
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-800"
          aria-label="Bước tiếp theo"
        >
          <Chevron />
        </button>
      </div>
    </div>
  );
}

export default MethodSteps;