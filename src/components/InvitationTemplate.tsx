type Props = {
    data: any;
};

export default function MainSection({ data }: Props) {
    const hero = data.hero;
    const intro = data.intro;
    const s3 = data.section3;
    const g = data.gallery;
    const s = data.sectionWelcome;
    const l = data.sectionLove;
    const sw = data.sectionSweet;
    const r = data.rsvp;
    return (
        <div>

            {/* ================= HERO ================= */}
            <div className="w-full relative bg-white ">

                <img
                    src="/images/top-bg.png"
                    className="absolute top-0 left-0 w-full z-0"
                    alt=""
                />

                <div className="relative z-10 pt-20 px-6 text-right">
                    <p className="text-[16px] text-[#7d1220] font-bold whitespace-pre-line">
                        {hero.subtitle}
                    </p>
                    <p className="text-[20px] text-[#7d1220] mt-1 font-bold">
                        {hero.date}
                    </p>
                </div>

                <div className="relative z-10 mt-10">
                    <img
                        src="/text/we-got-married.png"
                        className="mx-auto w-[280px]"
                        alt=""
                    />
                </div>

                <div className="relative z-10 px-10 mt-4">
                    <img src={hero.image} className="w-full" alt="" />
                </div>

                <div className="relative z-10 mt-6">

                    <img
                        src="/images/heart-line.png"
                        className="w-full pt-8 pb-10"
                        alt=""
                    />

                    {/* BRIDE */}
                    <div className="absolute left-13 top-0 text-[#7d1220]">
                        <p
                            style={{ fontFamily: "var(--font-lavishly)" }}
                            className="text-[50px] leading-none mb-3"
                        >
                            {hero.brideName}
                        </p>
                        <p className="text-[20px] left-12 font-extrabold">{hero.brideLabel}</p>
                    </div>

                    {/* GROOM */}
                    <div className="absolute right-10 bottom-0 text-[#7d1220] text-right">
                        <p className="text-[20px] mb-10 font-extrabold">{hero.groomLabel}</p>
                        <p
                            style={{ fontFamily: "var(--font-lavishly)" }}
                            className="text-[50px] leading-none"
                        >
                            {hero.groomName}
                        </p>
                    </div>

                </div>
            </div>

            <div className="relative w-full h-[700px] overflow-hidden ">


                <img
                    src={intro.bg}
                    className="absolute top-0 left-0 w-full h-[700px] object-cover z-0"
                    alt=""
                />

                <img
                    src={intro.heart}
                    className="absolute top-10 left-0 w-full z-[1] object-contai pt-9 px-4 opacity-90"
                    alt=""
                />

                <div className="absolute top-[80px] left-1/2 -translate-x-1/2 pt-9 z-[2]">
                    <div className="bg-white p-2">
                        <img
                            src={intro.image}
                            className="w-[240px] h-[300px] object-cover"
                            alt=""
                        />
                    </div>
                </div>

                <div className="absolute bottom-6 left-0 w-full text-center text-white px-6 z-[3]">

                    <p className="text-[20px] tracking-widest font-serif">
                        {intro.title}
                    </p>

                    <p className="text-[20px] italic mt-1 font-serif opacity-90">
                        {intro.subtitle}
                    </p>

                    <p
                        className="text-[40px] mt-4 leading-none"
                        style={{ fontFamily: "var(--font-lavishly)" }}
                    >
                        {intro.invitee}
                    </p>

                    <p className="text-[18px] mt-4 whitespace-pre-line leading-relaxed font-serif opacity-90">
                        {intro.description}
                    </p>

                </div>

            </div>


            <div className="relative w-full bg-white overflow-hidden pt-[420px]">

                {/* 🔴 BACKGROUND */}
                <img src={s3.timeline} className="absolute top-0 left-0 w-full z-0" />
                <img src={s3.flower} className="absolute top-10 right-0 w-[180px] z-[1]" />

                {/* 🔢 TIMELINE NUMBERS */}
                {s3.timelinePoints.map((item: any, index: number) => (
                    <div
                        key={index}
                        className="absolute text-[#7d1220] text-[40px] font-bold z-[2]"
                        style={{ top: item.top, left: item.left }}
                    >
                        {item.text}
                    </div>
                ))}

                <svg
                    className="absolute top-45 right-20 w-full z-[2] rotate-[24deg]"
                    viewBox="0 0 1000 700"
                    preserveAspectRatio="none"
                >
                    <path
                        id="curve"
                        d="
      M 80 70
      C 280 10, 350 200, 410 300
      S 560 400 , 750 330 
      S 890 660, 2000 500
      S 600 400, 500 400
    "
                        fill="transparent"
                    />

                    <text
                        fill="#555555"
                        fontSize="40"
                        fontStyle="italic"
                        textLength="1000"
                        style={{ fontFamily: "var(--font-lavishly)" }}
                    >
                        <textPath href="#curve" startOffset="2%">
                            Thứ 6, Ngày 26, Tháng 11, Năm 2026 (Tức ngày 7 tháng 10 âm lịch)
                        </textPath>
                    </text>
                </svg>

                {/* 🔴 WRAP 2 CIRCLE */}
                <div className="relative w-full flex justify-center mt-20 mb-25">

                    {/* 🔴 CIRCLE ĐỎ */}
                    <div className="relative z-[2] mr-20">
                        <div className="relative w-[280px] h-[280px]">

                            {/* TEXT TRÊN */}
                            <img
                                src={s3.eventImage}
                                className="absolute -top-10 left-1/3 -translate-x-1/2 w-[90%] rotate-[6deg]"
                                alt=""
                            />

                            {/* BG RED */}
                            <img src={s3.circleMain} className="w-full h-full" alt="" />

                            {/* TEXT TRONG */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                                <p
                                    style={{ fontFamily: "var(--font-lavishly)" }}
                                    className="text-[54px] leading-[0.8] mb-2"
                                >
                                    {s3.place}
                                </p>

                                <p className="text-[34px] font-bold uppercase leading-tight">
                                    {s3.day}
                                </p>

                                <p className="text-[55px] font-extrabold leading-[1] my-[-8px]">
                                    {s3.time}
                                </p>

                                <p className="text-[30px] font-bold leading-tight">
                                    {s3.date}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* ⚪ CIRCLE XÁM (ĐÈ LÊN) */}
                    <div className="absolute right-[30px] bottom-[-100px] z-[3]">
                        <div className="relative w-[200px] h-[200px]">

                            <img src={s3.circleSub} className="w-full h-full" alt="" />

                            <div className="absolute inset-0 flex items-center justify-center text-center text-[#7d1220] px-4 text-[16px] leading-tight">
                                <div>
                                    {s3.address}
                                    <br />
                                    <span className="italic text-[#666] font-bold text-[14px] mt-2 block">
                                        {s3.note}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="relative w-full bg-white pb-10">

                    <p className=" pl-10 text-[#5f5f5f] text-[24px] font-serif mt-6">
                        {s3.title}
                    </p>
                    {/* CONTACT */}
                    <div className="flex flex-col items-start gap-2 pl-10 px-6 mt-4 z-[2] relative">
                        {s3.contacts.map((item: any, index: number) => (
                            <button
                                key={index}
                                className="bg-[#7d1220] text-white px-4 py-2 rounded-full text-[18px]"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-end pr-6 mt-4">
                        <img src={s3.map} className="w-[300px]" />
                    </div>
                    <div className="-mt-25">
                        <img src={s3.heart} className="w-[280px]" />
                    </div>

                    <div className="-mt-25 left-6">
                        <img src={s3.love} className="w-[520px]" />
                    </div>

                    {/* MESSAGE */}
                    <div className="mt-6 px-6">
                        <p className="text-[#333] text-[16px] leading-relaxed whitespace-pre-line italic font-bold">
                            {s3.message}
                        </p>
                    </div>

                </div>
            </div>


            <div className="w-full bg-white  px-6">

                {/* 🖼️ IMAGE CHÍNH */}
                <div className="flex justify-center">
                    <img
                        src={g.mainImage}
                        className="w-[520px] mr-12 object-contain"
                        alt=""
                    />
                </div>

                <div className="text-center mt-6">
                    <div
                        style={{ fontFamily: "var(--font-lavishly)" }}
                        className="text-[54px] text-[#7d1220] flex justify-center items-center gap-16"
                    >
                        <span>{g.brideName}</span>
                        <span>{g.groomName}</span>
                    </div>
                </div>

                <div className="flex justify-between mt-8 gap-4">

                    <div className="text-center flex-1 flex flex-col items-center">
                        <div className="bg-[#7d1220] text-white px-2 py-1.5 rounded-md text-[16px] font-bold leading-tight w-fit max-w-[220px] whitespace-pre-line">
                            {g.brideFamily}
                        </div>
                        <p className="text-[16px] text-[#444] font-semibold italic mt-2">
                            {g.brideAddress}
                        </p>
                    </div>

                    <div className="text-center flex-1 flex flex-col items-center">
                        <div className="bg-[#7d1220] text-white px-2 py-1.5 rounded-md text-[16px] font-bold leading-tight w-fit max-w-[220px] whitespace-pre-line">
                            {g.groomFamily}
                        </div>

                        <p className="text-[16px] text-[#444] font-semibold italic mt-2">
                            {g.groomAddress}
                        </p>
                    </div>

                </div>

                {/* 🍷 ICON */}
                <div className="flex justify-center mt-10">
                    <img src={g.icon} className="w-[120px]" />
                </div>

                <div className="mt-8 text-center px-4">
                    <p className="text-[#333] text-[15px] text-left font-bold italic leading-relaxed whitespace-pre-line">
                        {g.message}
                    </p>
                </div>

            </div>
            <div className="relative w-full overflow-hidden mt-10 pt-20">

                <img
                    src={s.bgRedBig}
                    className="w-[100%] max-w-none relative left-1/2 -translate-x-1/2"
                    alt=""
                />

                <img
                    src={s.bgRedThin}
                    className="absolute -top-1 -left-3 w-[105%]  max-w-none z-[1]"
                    alt=""
                />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 z-[10]">
                    <img
                        src={s.mainImage}
                        className="w-[300px] "
                        alt=""
                    />
                </div>

                <img
                    src={s.overlayImage}
                    className="absolute bottom-10 left-0 w-full z-[2]"
                    alt=""
                />

                {/* 📝 TEXT */}
                <div className="absolute bottom-0 pb-40 left-0 w-full px-6 z-[3]">
                    <p className="text-white text-[14px] italic leading-relaxed whitespace-pre-line max-w-[300px]">
                        {s.message}
                    </p>
                </div>

            </div>
            <div className="relative w-fulle mt-10 overflow-hidden pb-10">
                {/* ❤️ HEART */}
                <div className="relative z-[1] px-6">
                    <img src={l.lb} className="w-[260px]" />
                </div>

                {/* 📝 TEXT */}
                <div className="relative z-[1] mt-3 px-6 ml-50">
                    <p className="text-[#5f5f5f] text-[15px] italic leading-relaxed whitespace-pre-line max-w-[280px] font-bold">
                        {l.message}
                    </p>
                </div>

                {/* 🖼️ IMAGE */}
                <div className="relative z-[1] mt-6 flex justify-right">
                    <img
                        src={l.lv}
                        className="w-full max-w-[450px]"
                    />
                </div>
                <img
                    src={l.line}
                    className="absolute top-220 right-2 w-full z-[0]"
                    alt=""
                />

                {/* ✍️ TITLE */}
                <div className="relative z-[1] mt-30 flex justify-right pr-16">
                    <img src={l.titleImage} className="w-[400px]" />
                </div>
                {/* 🔴 BG RED */}
                <div className="absolute top-[980px] pl-36 z-[1]">
                    <img src={l.bgRed} className="w-[400px] max-w-none" />

                    {/* Text lọt lòng vùng đỏ */}
                    <div className="absolute top-[300px] left-[200px] w-[240px]">
                        <p className="text-white text-[14px] italic leading-relaxed whitespace-pre-line text-left">
                            {l.message1}
                        </p>
                    </div>
                </div>


                <div className="relative mt-[340px] flex justify-between px-6 text-[18px] z-[2]">
                    {l.timeline.map((item: string, index: number) => (
                        <div key={index} className="relative flex flex-col items-center">
                            {index === l.activeIndex && (
                                <img
                                    src={l.loveRed}
                                    className="absolute -top-1 w-[68px] max-w-none z-[1]"
                                    alt=""
                                />
                            )}

                            <span className={`relative z-[10] transition-colors duration-300 t ${index === l.activeIndex
                                ? "text-white text-[28px]  font-bold"
                                : "text-[#fc0000]/50 text-[28px] font-bold"
                                }`}>
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative w-full  overflow-hidden">

                {/* 📝 DATE */}
                <div className="text-center text-[#7d1220]">
                    <p
                        style={{ fontFamily: "var(--font-lavishly)" }}
                        className="text-[68px]"
                    >
                        {sw.day}
                    </p>

                    <p className="text-[30px] font-semibold">
                        {sw.date}
                    </p>

                    <p className="text-[16px] italic text-[#333] mt-1 font-bold">
                        {sw.lunar}
                    </p>
                </div>

                {/* 🌸 FLOWER */}
                <img
                    src={sw.flower}
                    className="absolute top-[160px] ml-[270px] w-[500px] z-[1]"
                    alt=""
                />

                {/* 🖼️ MAIN IMAGE (đè lên tất cả) */}
                <div className="relative  flex justify-center z-[2]">
                    <img
                        src={sw.mainImage}
                        className="w-[500px]"
                        alt=""
                    />
                </div>
                {/* ✍️ TITLE (bị đè) */}
                <div className="-mt-54 flex justify-center">
                    <img
                        src={sw.titleImage}
                        className="w-[500px] z-[1]"
                        alt=""
                    />
                </div>

                {/* 📝 TEXT */}
                <div className="mt-10 px-10 text-center pb-20">
                    <p className="text-[#5f5f5f] text-[20px] italic leading-relaxed whitespace-pre-line font-bold">
                        {sw.message}
                    </p>
                </div>

            </div>
            <div className="relative w-full overflow-hidden pb-10">

                {/* 🔴 BG */}
                <img src={r.bg} className="w-full absolute top-0 left-0 z-0 h-full" />

                <div className="relative z-[1] px-6 pb-10 text-center text-white">

                    {/* 🖼️ IMAGE */}
                    <img
                        src={r.mainImage}
                        className="w-full max-w-[320px] mx-auto mb-8"
                    />

                    {/* TITLE */}
                    <h2 className="text-[26px] tracking-widest">
                        {r.title}
                    </h2>

                    <p className="text-[18px] mt-2 opacity-90">
                        {r.question}
                    </p>

                    {/* OPTIONS */}
                    <div className="flex justify-center gap-4 mt-8 flex-wrap">
                        {r.options.map((item: any, index: number) => (
                            <div key={index} className="w-[90px]">
                                <img src={item.image} className="w-full" />
                                <p className="text-[23px] mt-2">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* 👥 QUANTITY SECTION - Chồng lên nhau theo chiều dọc */}
                    <div className="mt-8 flex flex-col items-center">
                        {/* Label */}
                        <p className="text-[14px] mb-2">
                            {r.quantityLabel}
                        </p>

                        {/* Input: Tăng chiều rộng lên một chút để dễ nhập và cân đối hơn */}
                        <input
                            defaultValue="1 người"
                            className="border border-white bg-transparent text-center py-2 rounded text-[16px] w-[170px] outline-none"
                        />

                        {/* Button: Đặt mt-4 để tạo khoảng cách với input phía trên */}
                        <button className="mt-4 bg-white text-[#7d1220] w-[200px] py-2 rounded font-bold uppercase tracking-wider transition-transform active:scale-95">
                            {r.buttonText}
                        </button>
                    </div>

                    {/* 🎁 GIFT */}
                    <div className="mt-12 ">
                        <h3 className="text-[22px]">{r.giftTitle}</h3>

                        <p className="text-[15px] mt-2 opacity-90">
                            {r.giftText}
                        </p>

                        <div className="flex justify-center gap-8 mt-6 flex-wrap">
                            {r.gifts.map((g: any, index: number) => (
                                <div key={index} className="text-center">
                                    <img src={g.image} className="w-[80px] mx-auto" />
                                    <p className="mt-2 text-[18px]">{g.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}