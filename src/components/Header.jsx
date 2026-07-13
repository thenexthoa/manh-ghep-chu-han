import { Link, useLocation } from "react-router-dom";

import { IconBook } from "./icons";
import PuzzlePieceIcon from "./PuzzlePieceIcon";

import {
  getColor,
  getSetById,
} from "../services/database";

function Header() {
  const location = useLocation();

  const pathParts = location.pathname.split("/");
  const setId = pathParts[2];
  const currentSet = getSetById(setId);

  const headerColor = currentSet
    ? getColor(currentSet.themeColor)
    : "#dc2626";

  return (
    <header
      className="sticky top-0 z-50 isolate overflow-hidden text-white shadow-md"
      style={{ backgroundColor: headerColor }}
    >
      {/* Mảnh ghép mờ phía sau Header */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <PuzzlePieceIcon className="animate-puzzle-drift absolute -right-8 -top-12 h-36 w-36 text-white/10 sm:h-44 sm:w-44" />

        <PuzzlePieceIcon className="absolute -bottom-14 left-[42%] h-28 w-28 rotate-12 text-white/5" />
      </div>

      <div className="relative z-10 flex items-center justify-between p-4">
        <Link
          to="/"
          className="group flex items-center gap-3 rounded-2xl p-1 transition-colors hover:bg-white/10"
          aria-label="Về trang chủ"
        >
          <span className="animate-puzzle-breathe flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 shadow-inner ring-1 ring-white/20">
            <PuzzlePieceIcon className="h-6 w-6 text-white" />
          </span>

          <h1 className="text-base font-black uppercase tracking-tight sm:text-lg">
            Mảnh Ghép Chữ Hán
          </h1>
        </Link>

        <Link
          to={
            currentSet
              ? `/set/${currentSet.setId}`
              : "/"
          }
          className="rounded-full p-2 transition-colors hover:bg-white/20"
          aria-label={
            currentSet
              ? `Tiếp tục học ${currentSet.name}`
              : "Về danh sách bài học"
          }
        >
          <IconBook />
        </Link>
      </div>
    </header>
  );
}

export default Header;