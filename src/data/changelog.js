export const RELEASE_STORAGE_KEY =
  "manh-ghep-chu-han:last-seen-release";

/**
 * BẢN PHÁT HÀNH MỚI NHẤT
 *
 * Chỉ bản này tự động xuất hiện khi người dùng
 * chưa xem phiên bản hiện tại.
 */
export const CURRENT_RELEASE = {
  version: "1.1.3",

  date: "18/09/2026",

  storageKey: RELEASE_STORAGE_KEY,

  label: "Cập nhật ngày 18/09/2026",

  title: "Nhóm mới:Nhóm Thiên nhiên",

  description:
    "Mảnh Ghép Chữ Hán vừa bổ sung Nhóm Thiên nhiên với 9 bộ chữ: Bồ, Bồng, Cốc, Giang, Hà, Lâm, Miêu, Nông và Quế.",

  updates: [
    {
      id: "expand-nature-families",

      type: "Cập nhật nội dung",

      title: "Nhóm mới:Nhóm Thiên nhiên (9 bộ chữ)",

      description:
        "Từ những chữ quen thuộc trong thiên nhiên, người học khám phá tiếp các chữ có liên hệ về cấu tạo và âm đọc. Với những chữ không trực tiếp làm thanh bàng, bài học dẫn về chữ lõi gợi âm.",

      icon: "🌿",

      accent: "#15803d",

      background: "#f0fdf4",

      highlights: [
        "Bồ · Bồng · Cốc · Giang · Hà",
        "Lâm · Miêu · Nông · Quế",
        "蒲 → 浦 · 蓬 → 逢",
        "江 → 工 · 河 → 可 · 桂 → 圭",
        "Từ chữ thiên nhiên tìm về chữ lõi gợi âm",
      ],

      actionLabel: "Khám phá Thiên nhiên",

      actionType: "category-preview",

      targetCategoryName: "Thiên nhiên",

      targetCategoryId: "nature",

      isNew: true,
    },
  ],
};

/**
 * TOÀN BỘ LỊCH SỬ CẬP NHẬT
 *
 * Bản mới nhất luôn đặt ở đầu mảng.
 * Nút “Mới” ở góc màn hình sẽ hiển thị
 * toàn bộ các phiên bản trong danh sách này.
 */
export const RELEASE_HISTORY = [
  CURRENT_RELEASE,

  {
    version: "1.1.2",

    date: "03/08/2026",

    storageKey: RELEASE_STORAGE_KEY,

    label: "Cập nhật ngày 03/08/2026",

    title: "Mở rộng Nhóm Trăm họ",

    description:
      "Mảnh Ghép Chữ Hán vừa bổ sung các gia đình chữ Phú, Thân, Thông và Mộ trong Nhóm Trăm họ.",

    updates: [
      {
        id: "expand-surnames-phu-than-thong-mo",

        type: "Cập nhật nội dung",

        title:
          "Thêm 4 gia đình chữ Phú – Thân – Thông – Mộ",

        description:
          "Với những chữ họ không trực tiếp làm thanh bàng, bài học được dẫn về chữ lõi gợi âm để người học hiểu mối liên hệ cấu tạo thay vì ghi nhớ từng chữ riêng lẻ.",

        icon: "🏮",

        accent: "#b91c1c",

        background: "#fff7ed",

        highlights: [
          "Phú: 富 → 畐",
          "Bổ sung gia đình chữ Thân",
          "Thông: 通 → 甬",
          "Mộ: 慕 → 莫",
          "Hiểu chữ lõi gợi âm trước khi mở rộng",
        ],

        actionLabel: "Khám phá Trăm họ",

        actionType: "category-preview",

        targetCategoryName: "Trăm họ",

        targetCategoryId: "surnames",

        isNew: false,
      },
    ],
  },

  {
    version: "1.1.1",

    date: "29/07/2026",

    storageKey: RELEASE_STORAGE_KEY,

    label: "Cập nhật ngày 29/07/2026",

    title: "Thêm 3 gia đình chữ mới",

    description:
      "Mảnh Ghép Chữ Hán bổ sung ba gia đình chữ Bao – Bình – Kiều trong Nhóm Trăm họ.",

    updates: [
      {
        id: "bao-binh-kieu-families",

        type: "Cập nhật nội dung",

        title:
          "Ba gia đình chữ Bao – Bình – Kiều",

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

        actionLabel: "Khám phá Trăm họ",

        actionType: "category-preview",

        targetCategoryName: "Trăm họ",

        targetCategoryId: "surnames",

        isNew: false,
      },
    ],
  },

  {
    version: "1.1.0",

    date: "07/2026",

    storageKey: RELEASE_STORAGE_KEY,

    label: "Cập nhật tháng 7/2026",

    title:
      "Phương hướng & Không gian và Phương pháp học",

    description:
      "Bổ sung nhóm nội dung mới và trang giới thiệu phương pháp học của Mảnh Ghép Chữ Hán.",

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

        actionLabel: "Khám phá nhóm",

        actionType: "category-preview",

        targetCategoryName:
          "Phương hướng & Không gian",

        isNew: false,
      },

      {
        id: "learning-method",

        type: "Trải nghiệm học",

        title:
          "Phương pháp học rõ ràng hơn",

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