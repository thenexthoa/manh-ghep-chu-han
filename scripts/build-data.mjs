import fs from "fs";
import path from "path";
import Papa from "papaparse";

const SHEET_ID = "1dw1vu3Opfd4XrsqrTzmJ-gjpKjd3OYVBzV0f8HQNdwM";

const SHEETS = [
  "Categories",
  "Sets",
  "Characters",
  "SetCharacters",
  "Stories",
  "Images",
  "Audio",
  "Tags",
  "CharacterTags",
  "Quizzes",
];

function trimObject(row) {
  const cleaned = {};

  Object.entries(row).forEach(([key, value]) => {
    const cleanKey = String(key || "").trim();
    const cleanValue =
      typeof value === "string" ? value.trim() : value;

    if (cleanKey) {
      cleaned[cleanKey] = cleanValue;
    }
  });

  return cleaned;
}

async function fetchSheet(sheetName) {
  const url =
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}` +
    `/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Không đọc được sheet: ${sheetName}`);
  }

  const csvText = await response.text();

  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  if (parsed.errors.length > 0) {
    console.warn(
      `Cảnh báo khi đọc sheet ${sheetName}:`,
      parsed.errors
    );
  }

  return parsed.data.map(trimObject);
}

function buildAppData(raw) {
  const storiesById = Object.fromEntries(
    raw.stories.map((story) => [story.storyId, story])
  );

  const charactersById = Object.fromEntries(
    raw.characters.map((character) => [
      character.charId,
      character,
    ])
  );

  const sets = raw.sets.map((set) => {
    const links = raw.setCharacters
      .filter((item) => item.setId === set.setId)
      .sort(
        (a, b) =>
          Number(a.displayOrder || 0) -
          Number(b.displayOrder || 0)
      );

    const characters = links.map((link) => {
      const character =
        charactersById[link.charId] || null;

      const story = link.storyId
        ? storiesById[link.storyId] || null
        : null;

      if (!character) {
        console.warn(
          `Không tìm thấy character "${link.charId}" trong bộ "${set.setId}".`
        );
      }

      if (link.storyId && !story) {
        console.warn(
          `Không tìm thấy story "${link.storyId}" cho character "${link.charId}".`
        );
      }

      const rawRole = String(
        link["role(core/extension)"] ||
          link["role (core/extension)"] ||
          link.role ||
          ""
      )
        .trim()
        .toLowerCase();

      const role =
        rawRole === "core" ||
        rawRole === "extension"
          ? rawRole
          : String(link.charId || "").endsWith("_core")
            ? "core"
            : "extension";

      return {
        ...(character || {}),

        role,
        displayOrder: Number(link.displayOrder || 0),

        radical:
          link.radical ||
          character?.radical ||
          "",

        radicalName: link.radicalName || "",
        iconId: link.iconId || "",
        icon: link.iconId || "",

        story,
      };
    });

    const core =
      characters.find(
        (character) => character.role === "core"
      ) ||
      characters.find((character) =>
        String(character.charId || "").endsWith("_core")
      ) ||
      null;

    const extensions = characters.filter(
      (character) => character !== core
    );

    return {
      ...set,
      characters,
      core,
      extensions,
    };
  });

  const categories = raw.categories.map((category) => ({
    ...category,

    sets: sets.filter(
      (set) => set.categoryId === category.categoryId
    ),
  }));

  return {
    categories,
    sets,
  };
}

async function main() {
  console.log("Đang đọc dữ liệu từ Google Sheet...");

  const [
    categories,
    sets,
    characters,
    setCharacters,
    stories,
    images,
    audio,
    tags,
    characterTags,
    quizzes,
  ] = await Promise.all(SHEETS.map(fetchSheet));

  const raw = {
    categories,
    sets,
    characters,
    setCharacters,
    stories,
    images,
    audio,
    tags,
    characterTags,
    quizzes,
  };

  const appData = buildAppData(raw);

  const output = {
    generatedAt: new Date().toISOString(),
    raw,
    appData,
  };

  const outputDir = path.resolve(
    "src/data/generated"
  );

  const outputPath = path.join(
    outputDir,
    "database.json"
  );

  fs.mkdirSync(outputDir, {
    recursive: true,
  });

  fs.writeFileSync(
    outputPath,
    JSON.stringify(output, null, 2),
    "utf-8"
  );

  console.log("Đã tạo dữ liệu thành công:");
  console.log(`- Categories: ${categories.length}`);
  console.log(`- Sets: ${sets.length}`);
  console.log(`- Characters: ${characters.length}`);
  console.log(`- Stories: ${stories.length}`);
  console.log(`- File: ${outputPath}`);
}

main().catch((error) => {
  console.error("Lỗi khi tạo dữ liệu:");
  console.error(error);
  process.exit(1);
});