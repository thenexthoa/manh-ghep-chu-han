export const CURRENT_RELEASE = {
  version: "2026.07",

  storageKey:
    "manh-ghep-chu-han:last-seen-release",

  label: "Cập nhật tháng 7",

  title:
    "Mảnh Ghép Chữ Hán có gì mới?",

  description:
    "Khám phá những nội dung và trải nghiệm học tập vừa được bổ sung.",

  updates: [
    {
      id: "direction-space",

      type: "Nội dung mới",

      title:
        "Phương hướng & Không gian",

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

      actionLabel:
        "Khám phá nhóm mới",

      actionType:
        "category-preview",

      targetCategoryName:
        "Phương hướng & Không gian",

      isNew: true,
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

      actionLabel:
        "Xem phương pháp học",

      actionType: "route",

      actionPath: "/phuong-phap",

      isNew: false,
    },
  ],
};