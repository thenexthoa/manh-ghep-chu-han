export const RELEASE_STORAGE_KEY =
  "manh-ghep-chu-han:last-seen-release";

/**
 * Bản cập nhật mới nhất.
 * Chỉ nội dung này được hiển thị trong popup tự động.
 */
export const CURRENT_RELEASE = {
  version: "1.1.1",

  date: "29/07/2026",

  storageKey: RELEASE_STORAGE_KEY,

  label: "Cập nhật ngày 29/07/2026",

  title: "Thêm 3 gia đình chữ mới",

  description:
    "Mảnh Ghép Chữ Hán vừa bổ sung ba nhóm chữ mang các họ Bao – Bình – Kiều.",

  updates: [
    {
      id: "bao-binh-kieu-families",

      type: "Nội dung mới",

      title: "Ba gia đình chữ Bao – Bình – Kiều",

      description:
        "Khám phá cách các chữ lõi 包, 平 và 乔 kết hợp với những thành phần gợi nghĩa để tạo thành các gia đình chữ mới.",

      icon: "🏮",

      accent: "#b91c1c",

      background: "#fff7ed",

      highlights: [
        "Bộ âm Bao: 包、鲍、抱、跑、饱、泡",
        "Bộ âm Bình: 平、评、苹、萍",
        "Bộ âm Kiều: 乔、桥、轿、侨、娇、骄",
        "Có nghĩa tiếng Việt và từ thường gặp",
      ],

      actionLabel: "Khám phá các họ mới",

      actionType: "category-preview",

      targetCategoryName: "Trăm họ",

      isNew: true,
    },
  ],
};

/**
 * Toàn bộ lịch sử cập nhật.
 * Chỉ dùng cho nút cập nhật ở góc phải.
 * Bản mới nhất đặt ở đầu mảng.
 */
export const RELEASE_HISTORY = [
  CURRENT_RELEASE,

  {
    version: "2026.07",

    date: "07/2026",

    storageKey: RELEASE_STORAGE_KEY,

    label: "Cập nhật tháng 7",

    title: "Mảnh Ghép Chữ Hán có gì mới?",

    description:
      "Khám phá những nội dung và trải nghiệm học tập đã được bổ sung.",

    updates: [
      {
        id: "direction-space",

        type: "Nội dung mới",

        title: "Phương hướng & Không gian",

        description:
          "Khám phá các chữ Hán liên quan đến phương hướng, vị trí và cách con người định hình không gian xung quanh.",

        icon: "🧭",

        accent: "#dc2626",

        background: "#fff1f2",

        highlights: [
          "Phương hướng",
          "Vị trí",
          "Không gian",
          "Học theo mảnh ghép",
        ],

        actionLabel: "Khám phá nhóm mới",

        actionType: "category-preview",

        targetCategoryName: "Phương hướng & Không gian",

        isNew: false,
      },

      {
        id: "learning-method",

        type: "Trải nghiệm học",

        title: "Phương pháp học rõ ràng hơn",

        description:
          "Tìm hiểu cách học chữ Hán theo tiến trình Hiểu trước – nhớ sâu – rồi mới luyện.",

        icon: "🧩",

        accent: "#4f46e5",

        background: "#eef2ff",

        highlights: [
          "Hiểu cấu tạo",
          "Gắn với câu chuyện",
          "Luyện sau khi đã hiểu",
        ],

        actionLabel: "Xem phương pháp học",

        actionType: "route",

        actionPath: "/phuong-phap",

        isNew: false,
      },
    ],
  },
];

export default CURRENT_RELEASE;