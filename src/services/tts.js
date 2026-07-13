let activeSpeechId = 0;

function getSpeechEngine() {
  if (
    typeof window === "undefined" ||
    !("speechSynthesis" in window)
  ) {
    return null;
  }

  return window.speechSynthesis;
}

function normalizeText(value) {
  return String(value || "").trim();
}

function normalizeLanguage(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function getVoiceLanguage(voice) {
  return normalizeLanguage(voice?.lang);
}

function getVoiceName(voice) {
  return String(voice?.name || "")
    .trim()
    .toLowerCase();
}

function loadVoices(timeout = 3000) {
  const engine = getSpeechEngine();

  if (!engine) {
    return Promise.resolve([]);
  }

  const existingVoices = engine.getVoices();

  if (existingVoices.length > 0) {
    return Promise.resolve(existingVoices);
  }

  return new Promise((resolve) => {
    let completed = false;

    const finish = () => {
      if (completed) {
        return;
      }

      completed = true;

      window.clearInterval(pollTimer);
      window.clearTimeout(timeoutTimer);

      engine.removeEventListener(
        "voiceschanged",
        handleVoicesChanged
      );

      resolve(engine.getVoices());
    };

    const handleVoicesChanged = () => {
      if (engine.getVoices().length > 0) {
        finish();
      }
    };

    const pollTimer = window.setInterval(() => {
      if (engine.getVoices().length > 0) {
        finish();
      }
    }, 150);

    const timeoutTimer = window.setTimeout(
      finish,
      timeout
    );

    engine.addEventListener(
      "voiceschanged",
      handleVoicesChanged
    );
  });
}

function findVietnameseVoice(voices) {
  const exactVoice = voices.find((voice) => {
    const language = getVoiceLanguage(voice);

    return (
      language === "vi-vn" ||
      language === "vi"
    );
  });

  if (exactVoice) {
    return exactVoice;
  }

  const languageVoice = voices.find((voice) =>
    getVoiceLanguage(voice).startsWith("vi")
  );

  if (languageVoice) {
    return languageVoice;
  }

  return (
    voices.find((voice) => {
      const name = getVoiceName(voice);

      return (
        name.includes("vietnamese") ||
        name.includes("vietnam") ||
        name.includes("hoaimy") ||
        name.includes("namminh")
      );
    }) || null
  );
}

function findChineseVoice(voices) {
  const preferredLanguages = [
    "zh-cn",
    "zh-hans",
    "zh-sg",
    "zh-tw",
    "zh-hk",
    "zh",
  ];

  for (const preferredLanguage of preferredLanguages) {
    const matchedVoice = voices.find((voice) =>
      getVoiceLanguage(voice).startsWith(
        preferredLanguage
      )
    );

    if (matchedVoice) {
      return matchedVoice;
    }
  }

  return (
    voices.find((voice) => {
      const name = getVoiceName(voice);

      return (
        name.includes("chinese") ||
        name.includes("mandarin")
      );
    }) || null
  );
}

function findVoice(voices, language) {
  const normalizedLanguage =
    normalizeLanguage(language);

  if (normalizedLanguage.startsWith("vi")) {
    return findVietnameseVoice(voices);
  }

  if (normalizedLanguage.startsWith("zh")) {
    return findChineseVoice(voices);
  }

  return (
    voices.find((voice) =>
      getVoiceLanguage(voice).startsWith(
        normalizedLanguage
      )
    ) || null
  );
}

function isExpectedCancellation(errorName) {
  const normalizedError =
    normalizeLanguage(errorName);

  return [
    "canceled",
    "cancelled",
    "interrupted",
  ].includes(normalizedError);
}

export function cancelSpeech() {
  activeSpeechId += 1;

  const engine = getSpeechEngine();

  if (!engine) {
    return;
  }

  engine.cancel();

  if (engine.paused) {
    engine.resume();
  }
}

export async function speakText({
  text,
  language = "zh-CN",
  rate = 0.85,
  pitch = 1,
  volume = 1,
  onStart,
  onEnd,
  onError,
}) {
  const engine = getSpeechEngine();
  const cleanText = normalizeText(text);

  if (!engine) {
    return {
      ok: false,
      reason: "speech-not-supported",
    };
  }

  if (!cleanText) {
    return {
      ok: false,
      reason: "empty-text",
    };
  }

  /*
   * Mỗi lần phát mới có một mã riêng.
   * Audio cũ bị hủy sẽ không tạo thông báo lỗi giả.
   */
  const speechId = ++activeSpeechId;

  engine.cancel();

  if (engine.paused) {
    engine.resume();
  }

  const voices = await loadVoices();

  /*
   * Trong lúc chờ voice, người dùng có thể đã bấm
   * một audio khác. Khi đó yêu cầu cũ được xem là
   * đã kết thúc bình thường.
   */
  if (speechId !== activeSpeechId) {
    return {
      ok: true,
      cancelled: true,
    };
  }

  const selectedVoice = findVoice(
    voices,
    language
  );

  /*
   * Không cho giọng Anh đọc thay tiếng Việt
   * hoặc tiếng Trung.
   */
  if (!selectedVoice) {
    return {
      ok: false,
      reason: "voice-not-found",
      language,
    };
  }

  return new Promise((resolve) => {
    let settled = false;

    const finish = (result) => {
      if (settled) {
        return;
      }

      settled = true;
      resolve(result);
    };

    const utterance =
      new SpeechSynthesisUtterance(cleanText);

    utterance.voice = selectedVoice;
    utterance.lang =
      selectedVoice.lang || language;

    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    utterance.onstart = () => {
      if (speechId === activeSpeechId) {
        onStart?.();
      }
    };

    utterance.onend = () => {
      if (speechId !== activeSpeechId) {
        finish({
          ok: true,
          cancelled: true,
        });

        return;
      }

      onEnd?.();

      finish({
        ok: true,
        voice: selectedVoice.name,
        language: selectedVoice.lang,
      });
    };

    utterance.onerror = (event) => {
      const errorName =
        event?.error || "speech-error";

      /*
       * canceled/interrupted xảy ra bình thường khi
       * người dùng chuyển sang audio khác.
       */
      if (
        speechId !== activeSpeechId ||
        isExpectedCancellation(errorName)
      ) {
        finish({
          ok: true,
          cancelled: true,
        });

        return;
      }

      onError?.(event);

      finish({
        ok: false,
        reason: errorName,
      });
    };

    engine.speak(utterance);

    window.setTimeout(() => {
      if (engine.paused) {
        engine.resume();
      }
    }, 100);
  });
}