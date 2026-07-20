import {
  Link,
  useLocation,
} from "react-router-dom";

import { IconBook } from "./icons";
import PuzzlePieceIcon from "./PuzzlePieceIcon";

import {
  getColor,
  getSetById,
} from "../services/database";

function Header() {
  const location = useLocation();

  const pathParts =
    location.pathname.split("/");

  const setId = pathParts[2];

  const currentSet =
    getSetById(setId);

  const headerColor = currentSet
    ? getColor(currentSet.themeColor)
    : "#dc2626";

  const isMethodPage =
    location.pathname ===
    "/phuong-phap";

  return (
    <header
      className="fixed inset-x-0 top-0 z-[100] h-[64px] overflow-hidden text-white shadow-md sm:h-[72px]"
      style={{
        backgroundColor: headerColor,
      }}
    >
      {/* Họa tiết nền */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <PuzzlePieceIcon className="animate-puzzle-drift absolute -right-10 -top-12 h-32 w-32 text-white/10 sm:h-44 sm:w-44" />

        <PuzzlePieceIcon className="absolute -bottom-16 left-[42%] hidden h-28 w-28 rotate-12 text-white/5 sm:block" />
      </div>

      {/* Nội dung thanh điều hướng */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-screen-2xl items-center gap-2 px-3 sm:px-6">
        {/* Logo và tên website */}
        <Link
          to="/"
          className="group flex min-w-0 flex-1 items-center gap-2 rounded-xl p-1 transition-colors hover:bg-white/10 sm:gap-3 sm:rounded-2xl"
          aria-label="Về trang chủ"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-white/20 sm:h-11 sm:w-11 sm:rounded-2xl">
            <img
              src="/icons/icon-192.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </span>

          <h1 className="min-w-0 truncate whitespace-nowrap text-[13px] font-black uppercase tracking-tight sm:text-lg">
            Mảnh Ghép Chữ Hán
          </h1>
        </Link>

        {/* Nút phương pháp học */}
        <Link
          to="/phuong-phap"
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors sm:h-auto sm:w-auto sm:gap-2 sm:rounded-2xl sm:px-4 sm:py-2 ${
            isMethodPage
              ? "bg-white text-red-600 shadow-sm"
              : "hover:bg-white/20"
          }`}
          aria-label="Xem phương pháp học"
          title="Phương pháp học"
        >
          <span className="flex shrink-0 items-center justify-center">
            <IconBook />
          </span>

          <span className="hidden whitespace-nowrap text-xs font-black uppercase tracking-wider sm:inline">
            Phương pháp học
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;