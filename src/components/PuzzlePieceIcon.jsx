function PuzzlePieceIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 4h16v8a8 8 0 1 1 0 16v8h-8a8 8 0 1 0-16 0H8V20h8a8 8 0 1 0 8-8V4Z" />
    </svg>
  );
}

export default PuzzlePieceIcon;