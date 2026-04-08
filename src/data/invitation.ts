type InvitationType = "chung" | "nhaTrai" | "nhaGai";

type InvitationData = {
  hero: {
    subtitle: string;
    date: string;
    brideLabel: string;
    groomLabel: string;
    brideName: string;
    groomName: string;
    image: string;
  };
  intro: {
    bg: string;
    image: string;
    heart: string;

    title: string;
    subtitle: string;
    invitee: string;
    description: string;
  };
  section3: {
    flower: string;
    timeline: string;
    circleMain: string;
    circleSub: string;
    eventImage: string;
    noteImage: string,
    timelinePoints: {
      text: string;
      top: string;
      left: string;
      rotate?: string;
    }[];
    eventTitle: string;
    place: string;
    day: string;
    time: string;
    date: string;
    address: string;
    note: string;
    map: string;
    heart: string;
    love: string;
    title: string;
    contacts: { label: string }[];
    [key: string]: any;
  };
  gallery: {
    mainImage: string;
    icon: string;
    brideName: string;
    groomName: string;
    brideFamily: string;
    groomFamily: string;
    brideAddress: string;
    groomAddress: string;
    message: string;
  };
  sectionWelcome: {
    bgRedBig: string;
    bgRedThin: string;
    mainImage: string;
    overlayImage: string;
    message: string;
  };
  sectionLove: {
    lb: string;
    lv: string;
    message: string;
    line: string;
    titleImage: string;
    bgRed: string;
    loveRed: string;
    message1: string;
    timeline: string[];
    activeIndex: number;
  };
  sectionSweet: {
    flower: string;
    mainImage: string;
    titleImage: string;
    day: string;
    date: string;
    lunar: string;
    message: string;
  };
  rsvp: {
    bg: string;
    mainImage: string;
    title: string;
    question: string;
    label?: string;
    options: {
      image: string;
      label?: string;
    }[];
    quantityLabel: string;
    buttonText: string;
    giftTitle: string;
    giftText: string;
    gifts: {
      image: string;
      label: string;
    }[];
  };
};

const baseData: InvitationData = {
  hero: {
    subtitle: `It's been a long time, see you at \nthe wedding!`,
    date: "29.11.2025",
    brideLabel: "BRIDE",
    groomLabel: "GROOM",
    brideName: "Ngọc Thảo",
    groomName: "Trung Đức",
    image: "/images/hero.png",
  },

  intro: {
    bg: "/images/Intro-bg.png",
    image: "/images/Intro.png",
    heart: "/text/heart.png",

    title: "THIỆP MỜI CƯỚI CỦA CHÚNG MÌNH",
    subtitle: "Trân trọng kính mời",
    invitee: "Bạn Trang và anh Nam",
    description:
      "ĐẾN DỰ BUỔI TIỆC CHUNG VUI\nCÙNG GIA ĐÌNH CHÚNG TÔI VÀO LÚC",
  },
  section3: {
    flower: "/images/flower.png",
    timeline: "/images/timeline.png",
    circleMain: "/images/circle-red.png",
    circleSub: "/images/circle-gray.png",
    eventImage: "/text/le-thanh-hon.png", // mặc định chung
    noteImage: "/images/note-chung.png",
    timelinePoints: [
      { text: "16:00", top: "40px", left: "60px" },
      { text: "26", top: "155px", left: "195px" },
      { text: "12", top: "270px", left: "220px" },
      { text: "26", top: "320px", left: "355px" }
    ],
    eventTitle: "LỄ VU QUY ĐƯỢC TỔ CHỨC VÀO",
    place: "Tư gia nhà gái",
    day: "THỨ BẢY",
    time: "8:00",
    date: "29.11.2025",
    address: "Số 9 - ngách 2, ngõ 33 đường Hùng Vương, Phường Vĩnh Yên, Tỉnh Phú Thọ",
    note: "(Tại tư gia nhà gái)",
    map: "/images/map.png",
    heart: "/images/heart-big.png",
    love: "/text/my-love.png",
    title: "Địa điểm tổ chức",
    contacts: [
      { label: "Gọi ngay chú rể" }
    ],
    message: `Gửi đến bạn tấm thiệp cưới đầy yêu thương.
Những ai nhận được lời mời này đều là những người đặc biệt với bọn mình.
Mong bạn và gia đình sẽ đến chung vui,
Cùng chứng kiến khoảnh khắc hạnh phúc nhất của hai đứa.
Cảm ơn vì luôn bên cạnh và yêu thương.
Bọn mình rất mong được gặp bạn trong ngày vui này!`
  },
  gallery: {
    mainImage: "/images/gallery-main.png",
    icon: "/images/wine.png",

    brideName: "Ngọc Thảo",
    groomName: "Trung Đức",

    brideFamily: "Bố: Nguyễn Việt Cường\nMẹ: Trần Thị Mơ",
    groomFamily: "Bố: Nguyễn Việt Cường\nMẹ: Trần Thị Mơ",

    brideAddress: "(Hồng Sơn, Hà Nội)",
    groomAddress: "(Vĩnh Yên, Phú Thọ)",

    message:
      "Mình gặp nhau vào mùa nắng đẹp nhất của năm. Ngày 30 tháng 3 - bình yên như bao ngày khác.\nChỉ là từ hôm đó, thế giới của hai đứa bỗng có thêm một người để chờ, để nhớ, để thương."
  },
  sectionWelcome: {
    bgRedBig: "/images/bg-red-big.png",
    bgRedThin: "/images/bg-red-thin.png",
    mainImage: "/images/welcome-main.jpg",
    overlayImage: "/images/welcome-overlay.png",

    message:
      "Ba tháng sau, chúng mình chẳng cần lý do gì lớn lao. Chỉ biết là muốn cùng nhau đi hết đoạn đường còn lại.\nVà thế là, một đám cưới ra đời – tròn tám tháng kể từ ngày bắt đầu yêu."
  },
  sectionLove: {
    lb: "/images/love-big.png",
    lv: "/images/love-main.png",

    message:
      "Mình chẳng có những buổi hẹn hò cầu kỳ, chỉ là cùng nhau ăn một bữa cơm, đi dạo quanh phố, kể chuyện linh tinh đến khuya.\nNhưng hóa ra, hạnh phúc đôi khi chỉ giản dị vậy thôi",
    line: "/images/line.png",
    titleImage: "/text/titleImage.png",
    bgRed: "/images/bgRed.png",
    loveRed: "/images/loveRed.png",

    message1:
      "Thương một, để sau mỗi năm \nlại thương lên mười Em có anh \nở trong đời, anh có em, là được rồi\n\nTụi mình đã cùng nhau chọn từng bông hoa, từng bộ trang phục cho ngày ấy. Mỗi chi tiết nhỏ đều mang trong đó một chút hồi hộp, một chút háo hức, và rất nhiều yêu thương.",

    timeline: ["23", "24", "25", "26", "27", "28", "29"],
    activeIndex: 3


  },
  sectionSweet: {
    flower: "/images/flower-top.png",
    mainImage: "/images/sweet-main.png",
    titleImage: "/text/sweet-wedding.png",

    day: "Thứ Bảy",
    date: "26.12.2026",
    lunar: "Âm lịch 10/10 | 10:00 AM",

    message:
      "Ngày mình chính thức gọi nhau là vợ chồng, là ngày câu chuyện của hai đứa viết sang một chương mới.\nCảm ơn vì đã tìm thấy nhau, và chọn ở lại – mãi mãi."
  },

  rsvp: {
    bg: "/images/br-red.png",
    mainImage: "/images/rsvp-main.png",

    title: "XÁC NHẬN THAM DỰ",
    question: "Bạn sẽ tham dự chứ?",

    options: [
      {
        image: "/text/opt-yes.png",
      },
      {
        image: "/text/opt-no.png",
      }
    ],

    quantityLabel: "Số lượng người tham dự",
    buttonText: "GỬI XÁC NHẬN",

    giftTitle: "HỘP MỪNG CƯỚI",
    giftText: "Cảm ơn tình cảm của mọi người đã dành cho chúng mình.",

    gifts: [
      { image: "/images/gift.png", label: "NHÀ TRAI" },
      { image: "/images/gift.png", label: "NHÀ GÁI" }
    ]
  }
};

export const invitationData: Record<InvitationType, InvitationData> = {
  chung: {
    ...baseData,
    section3: {
      ...baseData.section3,
      eventImage: "/text/le-thanh-hon.png",
      noteImage: "/images/note-nha-hang.png",
      place: "Nhà hàng Trống Đồng",
      note: "(Tại nhà hàng Trống Đồng)",
      contacts: [
        { label: "Gọi ngay chú rể" },
        { label: "Gọi ngay cô dâu" }
      ],
    },

      rsvp: {
        ...baseData.rsvp,
        options: [
          { image: "/text/opt-trai.png", },
          { image: "/text/opt-gai.png", },
          { image: "/text/opt-no.png", }
        ],
        gifts: [
          { image: "/images/gift.png", label: "NHÀ TRAI" },
          { image: "/images/gift.png", label: "NHÀ GÁI" }
        ]
    }
  },
  nhaTrai: {
    ...baseData,
    section3: {
      ...baseData.section3,
      eventImage: "/text/le-thanh-hon.png",
      noteImage: "/images/note-nha-trai.png",
      place: "Tư gia nhà trai",
      note: "(Tại tư gia nhà trai)",
      contacts: [
        { label: "Gọi ngay chú rể" }
      ],
    },
      rsvp: {
        ...baseData.rsvp,
        options: [
          { image: "/text/opt-yes.png", },
          { image: "/text/opt-no.png", }
        ],
        gifts: [
          { image: "/images/gift.png", label: "NHÀ TRAI" }
        ]
    }
  },
  nhaGai: {
    ...baseData,
    section3: {
      ...baseData.section3,
      eventImage: "/text/le-vu-quy.png",
      noteImage: "/images/note-nha-gai.png",
      place: "Tư gia nhà gái",
      note: "(Tại tư gia nhà gái)",
      contacts: [
        { label: "Gọi ngay cô dâu" }
      ],
    },
      rsvp: {
        ...baseData.rsvp,
        options: [
          { image: "/text/opt-yes.png", },
          { image: "/text/opt-no.png", }
        ],

        gifts: [
          { image: "/images/gift.png", label: "NHÀ GÁI" }
        ]
    }
  }
};