import database from "../data/generated/database.json";
import themeColors from "../constants/themeColors";

const appData = database?.appData ?? {};

export const categories = Array.isArray(appData.categories)
  ? appData.categories
  : [];

export const sets = Array.isArray(appData.sets)
  ? appData.sets
  : [];

export function getSetById(setId) {
  return (
    sets.find((set) => set.setId === setId) ||
    null
  );
}

export function getSetsByCategory(categoryId) {
  return sets.filter(
    (set) => set.categoryId === categoryId
  );
}

export function getColor(colorName) {
  return themeColors[colorName] || "#dc2626";
}

export function toOldSetShape(set) {
  if (!set) {
    return null;
  }

  const characters = Array.isArray(set.characters)
    ? set.characters
    : [];

  const core =
    set.core ||
    characters.find(
      (character) => character.role === "core"
    ) ||
    characters.find((character) =>
      String(character.charId || "").endsWith(
        "_core"
      )
    ) ||
    null;

  const sourceExtensions =
    Array.isArray(set.extensions) &&
    set.extensions.length > 0
      ? set.extensions
      : characters.filter(
          (character) => character !== core
        );

  return {
    id: set.setId || "",
    category: set.categoryId || "",
    name: set.name || "",
    title: set.title || "",
    subtitle: set.subtitle || "",
    mascot: set.mascot || "",
    color: getColor(set.themeColor),

    core: {
      id: core?.charId || "",
      char: core?.hanzi || "",
      pinyin: core?.pinyin || "",
      hanviet: core?.hanviet || "",
      meaning: core?.meaning_vi || "",
      story: core?.story?.story_vi || "",
    },

    extensions: sourceExtensions.map((item) => ({
      id: item.charId || "",
      radical: item.radical || "",
      radicalName: item.radicalName || "",
      result: item.hanzi || "",
      pinyin: item.pinyin || "",

      hanviet:
        item.meaning_vi ||
        item.hanviet ||
        "",

      story: item.story?.story_vi || "",

      iconId:
        item.iconId ||
        item.icon ||
        "wood",

      exampleWord: item.exampleWord || "",
      examplePinyin:
        item.examplePinyin || "",
      exampleMeaning:
        item.exampleMeaning_vi || "",
    })),
  };
}