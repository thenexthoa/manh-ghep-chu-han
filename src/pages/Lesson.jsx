import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  IconLoader,
  IconRefresh,
  IconVolume,
} from "../components/icons";

import Illustration from "../components/Illustration";

import {
  getColor,
  getSetById,
  toOldSetShape,
} from "../services/database";

import {
  cancelSpeech,
  speakText,
} from "../services/tts";

function wait(milliseconds) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });
}

function Lesson() {
  const { setId } = useParams();

  const sourceSet = getSetById(setId);
  const currentSet = toOldSetShape(sourceSet);

  const [learningStep, setLearningStep] =
    useState("cover");

  const [activeExtension, setActiveExtension] =
    useState(null);

  const [showResult, setShowResult] =
    useState(false);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [audioError, setAudioError] =
    useState("");

  const audioSequenceRef = useRef(0);

  /*
   * Ghi nhớ bộ chữ đã tự phát âm.
   * Mỗi bộ chỉ tự phát chữ lõi một lần khi mở trang.
   */
  const autoPlayedSetRef = useRef("");

  useEffect(() => {
    audioSequenceRef.current += 1;
    autoPlayedSetRef.current = "";

    setLearningStep("cover");
    setActiveExtension(null);
    setShowResult(false);
    setIsPlaying(false);
    setAudioError("");

    cancelSpeech();

    return () => {
      audioSequenceRef.current += 1;
      cancelSpeech();
    };
  }, [setId]);

  /*
   * Tự phát chữ lõi sau khi màn bìa xuất hiện.
   *
   * Ví dụ:
   * /set/ma   → 马
   * /set/yang → 羊
   * /set/long → 龙
   */
  useEffect(() => {
    const coreCharacter =
      currentSet?.core?.char;

    if (!coreCharacter) {
      return undefined;
    }

    const autoPlayTimer = window.setTimeout(() => {
      if (
        autoPlayedSetRef.current === setId
      ) {
        return;
      }

      autoPlayedSetRef.current = setId;

      playSingleChinese(coreCharacter);
    }, 650);

    return () => {
      window.clearTimeout(autoPlayTimer);
    };
  }, [setId, currentSet?.core?.char]);

  if (!currentSet) {
    return (
      <main className="mx-auto max-w-md p-6 text-center">
        <div className="rounded-[32px] bg-white p-8 shadow-xl">
          <h1 className="mb-5 text-2xl font-black text-slate-700">
            Không tìm thấy bộ chữ
          </h1>

          <Link
            to="/"
            className="font-bold text-red-600"
          >
            ← Về trang chủ
          </Link>
        </div>
      </main>
    );
  }

  const color = getColor(sourceSet.themeColor);

  async function playChinese(text) {
    const cleanText = String(text || "").trim();

    if (!cleanText) {
      return {
        ok: false,
        reason: "empty-text",
      };
    }

    setAudioError("");

    const result = await speakText({
      text: cleanText,
      language: "zh-CN",
      rate: 0.78,
      pitch: 1,

      onStart: () => {
        setIsPlaying(true);
      },

      onEnd: () => {
        setIsPlaying(false);
      },

      onError: () => {
        setIsPlaying(false);
      },
    });

    if (!result.ok) {
      setIsPlaying(false);

      if (result.reason === "voice-not-found") {
        setAudioError(
          "Thiết bị chưa có giọng đọc tiếng Trung."
        );
      } else if (
        result.reason !== "canceled" &&
        result.reason !== "cancelled" &&
        result.reason !== "interrupted"
      ) {
        setAudioError(
          "Không thể phát âm thanh trên thiết bị này."
        );
      }
    }

    return result;
  }

  async function playSingleChinese(text) {
    audioSequenceRef.current += 1;

    cancelSpeech();
    setIsPlaying(false);

    await playChinese(text);
  }

  async function selectExtension(extension) {
    const sequenceId =
      audioSequenceRef.current + 1;

    audioSequenceRef.current = sequenceId;

    cancelSpeech();

    setIsPlaying(false);
    setAudioError("");
    setActiveExtension(extension);
    setShowResult(true);

    await wait(300);

    if (
      sequenceId !== audioSequenceRef.current
    ) {
      return;
    }

    const characterResult = await playChinese(
      extension.result
    );

    if (
      sequenceId !== audioSequenceRef.current ||
      !characterResult.ok ||
      characterResult.cancelled
    ) {
      return;
    }

    if (!extension.exampleWord) {
      return;
    }

    await wait(350);

    if (
      sequenceId !== audioSequenceRef.current
    ) {
      return;
    }

    await playChinese(
      extension.exampleWord
    );
  }

  function returnToCover() {
    audioSequenceRef.current += 1;

    cancelSpeech();

    setLearningStep("cover");
    setActiveExtension(null);
    setShowResult(false);
    setAudioError("");
    setIsPlaying(false);
  }

  return (
    <main className="mx-auto max-w-7xl p-4 lg:px-8 lg:py-4">
      {learningStep === "cover" ? (
        <div className="mx-auto max-w-md fade-in">
          <div className="mt-2 flex flex-col items-center lg:mt-0">
            <p className="animate-bounce-subtle mb-6 px-4 text-center text-base font-bold leading-relaxed text-slate-700 sm:text-lg lg:mb-4">
              {currentSet.mascot}
            </p>

            <div className="relative mb-8 flex w-full flex-col items-center rounded-[45px] border border-slate-100 bg-white p-6 shadow-2xl lg:mb-5">
              <div
                className="absolute right-6 top-4 z-20 rounded-full px-5 py-1.5 text-lg font-bold shadow-sm"
                style={{
                  backgroundColor: "#facc15",
                  color,
                }}
              >
                {currentSet.core.pinyin}
              </div>

              <button
                type="button"
                onClick={() =>
                  playSingleChinese(
                    currentSet.core.char
                  )
                }
                className="relative flex h-56 w-56 cursor-pointer items-center justify-center rounded-[50px] text-white shadow-lg transition-transform active:scale-95 lg:h-52 lg:w-52"
                style={{
                  backgroundColor: color,
                  fontSize:
                    "clamp(112px, 9vw, 145px)",
                  lineHeight: 1,
                  fontWeight: 700,
                  fontFamily:
                    '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
                }}
                aria-label={`Nghe chữ ${currentSet.core.char}`}
              >
                {currentSet.core.char}

                <span className="absolute bottom-4 right-4 rounded-xl bg-white/20 p-2">
                  {isPlaying ? (
                    <IconLoader size={24} />
                  ) : (
                    <IconVolume size={24} />
                  )}
                </span>
              </button>

              <div className="mt-10 space-y-3 text-center lg:mt-8">
                <h1
                  className="text-3xl font-black uppercase tracking-widest"
                  style={{ color }}
                >
                  {currentSet.title}
                </h1>

                <p className="px-4 text-sm font-bold leading-relaxed text-slate-500">
                  {currentSet.subtitle}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setLearningStep("assemble")
              }
              className="rounded-2xl border-b-8 border-black/10 px-12 py-4 uppercase tracking-widest text-white shadow-xl transition-all hover:translate-y-1 active:translate-y-2 active:shadow-none"
              style={{
                backgroundColor: color,
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: 1.5,
              }}
            >
              Bắt đầu lắp ghép!
            </button>
          </div>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-6xl fade-in lg:flex lg:min-h-[calc(100vh-105px)] lg:items-center">
          <div className="w-full space-y-6 lg:grid lg:grid-cols-[minmax(520px,1.08fr)_minmax(420px,0.92fr)] lg:items-start lg:gap-7 lg:space-y-0">
            {/* CỘT TRÁI */}
            <section className="space-y-4">
              <div className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-[45px] border-2 border-slate-50 bg-white p-6 shadow-xl sm:p-8 lg:min-h-[560px] lg:p-8">
                {!showResult ||
                !activeExtension ? (
                  <div className="z-10 flex flex-col items-center gap-8 fade-in lg:gap-7">
                    <div className="flex items-center gap-4 lg:gap-5">
                      <div className="flex h-24 w-24 items-center justify-center rounded-3xl border-4 border-dashed border-slate-200 bg-slate-50 text-4xl font-bold italic text-slate-300 lg:h-28 lg:w-28 lg:text-5xl">
                        ?
                      </div>

                      <span className="text-4xl font-bold text-slate-200">
                        +
                      </span>

                      <div
                        className="flex h-24 w-24 items-center justify-center rounded-3xl text-white shadow-lg lg:h-28 lg:w-28"
                        style={{
                          backgroundColor: color,
                          fontSize: "70px",
                          lineHeight: 1,
                          fontWeight: 700,
                          fontFamily:
                            '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
                        }}
                      >
                        {currentSet.core.char}
                      </div>
                    </div>

                    <p className="text-center font-bold uppercase tracking-widest text-slate-400">
                      Chọn mảnh ghép bên dưới
                    </p>
                  </div>
                ) : (
                  <div className="animate-snap z-10 flex w-full flex-col items-center">
                    <div className="mb-6 flex items-center gap-6 lg:mb-5">
                      <div
                        className="rounded-2xl border-2 border-slate-100 bg-slate-50 p-5 text-4xl font-black shadow-sm lg:px-6 lg:py-4"
                        style={{ color }}
                      >
                        {activeExtension.radical}
                      </div>

                      <span className="text-3xl font-bold text-slate-200">
                        +
                      </span>

                      <div
                        className="rounded-2xl border-2 border-slate-100 bg-slate-50 p-5 text-4xl font-black shadow-sm lg:px-6 lg:py-4"
                        style={{ color }}
                      >
                        {currentSet.core.char}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        playSingleChinese(
                          activeExtension.result
                        )
                      }
                      className="relative mb-5 flex h-44 w-44 cursor-pointer items-center justify-center rounded-[50px] border-[10px] bg-white shadow-2xl transition-transform active:scale-95 lg:h-52 lg:w-52 lg:rounded-[58px]"
                      style={{
                        borderColor: color,
                        fontSize:
                          "clamp(104px, 8vw, 132px)",
                        lineHeight: 1,
                        fontWeight: 700,
                        fontFamily:
                          '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
                      }}
                      aria-label={`Nghe chữ ${activeExtension.result}`}
                    >
                      {activeExtension.result}

                      <span
                        className="absolute -right-3 -top-3 rounded-full border-4 border-white p-3 text-white shadow-lg"
                        style={{
                          backgroundColor: color,
                        }}
                      >
                        {isPlaying ? (
                          <IconLoader size={20} />
                        ) : (
                          <IconVolume size={20} />
                        )}
                      </span>
                    </button>

                    <div className="rounded-full border bg-white px-6 py-3 text-center shadow-sm sm:px-10 lg:px-9">
                      <div className="flex items-center justify-center gap-3 font-black">
                        <span
                          className="text-xl uppercase tracking-widest sm:text-2xl"
                          style={{ color }}
                        >
                          {activeExtension.hanviet}
                        </span>

                        <span className="h-2 w-2 rounded-full bg-slate-200" />

                        <span
                          className="text-lg sm:text-xl"
                          style={{ color }}
                        >
                          {activeExtension.pinyin}
                        </span>
                      </div>
                    </div>

                    {activeExtension.exampleWord && (
                      <div className="mt-6 w-full max-w-md">
                        <p className="mb-3 text-center text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                          Từ thường gặp
                        </p>

                        <button
                          type="button"
                          onClick={() =>
                            playSingleChinese(
                              activeExtension.exampleWord
                            )
                          }
                          className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 transition-colors hover:bg-slate-100 active:scale-[0.98]"
                          aria-label={`Nghe từ ${activeExtension.exampleWord}`}
                        >
                          <span
                            className="text-4xl font-black"
                            style={{
                              color,
                              fontFamily:
                                '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
                            }}
                          >
                            {activeExtension.exampleWord}
                          </span>

                          <span className="font-bold text-slate-500">
                            {activeExtension.examplePinyin}
                          </span>

                          <span className="text-slate-300">
                            —
                          </span>

                          <span className="font-bold text-slate-700">
                            {activeExtension.exampleMeaning}
                          </span>

                          <span className="text-slate-400">
                            <IconVolume size={18} />
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {audioError && (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm font-bold text-amber-800">
                  {audioError}
                </div>
              )}
            </section>

            {/* CỘT PHẢI */}
            <aside className="space-y-5">
              <div
                className={`grid ${
                  currentSet.extensions.length > 6
                    ? "grid-cols-4"
                    : "grid-cols-3"
                } gap-4`}
              >
                {currentSet.extensions.map(
                  (extension) => {
                    const isActive =
                      activeExtension?.id ===
                      extension.id;

                    return (
                      <button
                        key={extension.id}
                        type="button"
                        onClick={() =>
                          selectExtension(extension)
                        }
                        className={`flex min-h-[105px] flex-col items-center justify-center rounded-[25px] p-4 transition-all ${
                          isActive
                            ? "scale-105 text-white shadow-xl ring-4 ring-white"
                            : "border-b-4 border-slate-100 bg-white text-slate-600 shadow-md hover:border-slate-300 hover:bg-slate-50"
                        }`}
                        style={{
                          backgroundColor: isActive
                            ? color
                            : undefined,
                        }}
                      >
                        <span className="mb-1 text-4xl font-black">
                          {extension.radical}
                        </span>

                        <span className="text-center text-[10px] font-black uppercase tracking-tighter opacity-60">
                          {extension.radicalName}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>

              {showResult && activeExtension ? (
                <div
                  className="relative min-h-[210px] rounded-[34px] border-l-[12px] bg-white p-6 shadow-xl fade-in"
                  style={{
                    borderLeftColor: color,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 rounded-2xl bg-slate-50 p-2 shadow-inner"
                      style={{ color }}
                    >
                      <Illustration
                        id={activeExtension.iconId}
                      />
                    </div>

                    <div className="w-full">
                      <h3
                        className="mb-3 inline-block border-b-2 pb-1 text-lg font-black uppercase tracking-tight"
                        style={{
                          color,
                          borderColor: color,
                        }}
                      >
                        Câu chuyện thú vị:
                      </h3>

                      <p className="text-base font-bold italic leading-relaxed text-slate-700">
                        “{activeExtension.story}”
                      </p>

                      <p className="mt-4 text-xs font-bold text-slate-400">
                        Audio tiếng Việt đang được cập nhật.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex min-h-[210px] items-center justify-center rounded-[34px] border-2 border-dashed border-slate-200 bg-white/40 px-8 text-center">
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-300">
                    Chọn một mảnh ghép để khám phá
                    câu chuyện thú vị
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={returnToCover}
                className="flex w-full items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-slate-200 py-4 text-xs font-bold uppercase tracking-widest text-slate-400 transition-all hover:bg-white hover:text-slate-600"
              >
                <IconRefresh size={18} />
                Quay lại màn hình bìa
              </button>
            </aside>
          </div>
        </div>
      )}
    </main>
  );
}

export default Lesson;