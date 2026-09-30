/* =====================================================================
   作品集網站內容設定檔 —— 想改文字、換照片、加影片，只要改這個檔案
   =====================================================================

   ▸ 用記事本 / VS Code 打開本檔案，修改「引號裡的文字」後存檔，
     重新整理網頁就會看到變化。
   ▸ 照片、影片放在 media/ 資料夾，每個作品一個子資料夾。
   ▸ media 清單的寫法（兩種都可以）：
        "01-cheongju/hall.jpg",                                  ← 只寫檔名
        { src: "01-cheongju/hall.jpg", caption: "音樂廳內部" },   ← 加上圖說
     副檔名是 .mp4 會自動當成影片播放。
   ▸ 清單第一個項目就是該作品的封面（或用 cover: "..." 指定）。
   ▸ iPhone 的 .MOV 或很大的照片，請先用 tools/optimize.py 壓縮
     （用法見「使用說明.txt」）。
   ▸ 注意：每個項目之間要有逗號「,」，文字要包在引號裡。
   ===================================================================== */

window.SITE = {
  name: "劉承儒",
  nameEn: "LIU CHENG JU",
  role: "Architect · Project Manager",
  tagline: "從前衛形體\n到*真實落地*",   // \n = 換行，*文字* = 紅色
  taglineEn: "From Avant-garde Form to Real-world Delivery",
  intro:
    "中華民國建築師、PRINCE2® Project Manager。台灣科技大學建築碩士。2025–2026 年獲教育部藝術與設計菁英海外培訓計畫選派，任職於倫敦 Peter Cook Architecture Studio，負責國際競圖、展覽空間規劃與海外現場專案管理。",
  portrait: "profile/portrait.jpg",   // 頂部頭像
  // 頂部大影片（已關閉）。想恢復，把下面兩行開頭的 // 刪掉
  // heroVideo: "01-cheongju/lobby-film.mp4",
  // heroPoster: "01-cheongju/lobby-film.poster.jpg",

  // 數字亮點（顯示在「關於我」區塊，可自由增減）
  stats: [
    { value: "9", unit: "+ yrs", label: "建築與空間相關經歷" },
    { value: "4", unit: "國際展覽", label: "全球展覽空間規劃" },
    { value: "2nd", unit: "Prize", label: "Cruïlla 音樂節舞台競圖" },
    { value: "20", unit: "+ 場", label: "300–1,000+ 人大型活動策劃" },
  ],

  /* ===================== 關於我（履歷） ===================== */
  about: {
    title: "Architectural Designer",
    summary:
      "Registered Architect & PRINCE2 Project Manager with 9+ years' experience. Led complex spatial planning, concert hall competitions, gallery layouts, and on-site construction management at a premier London studio.",
    summaryZh:
      "中華民國建築師暨 PRINCE2 專案經理，具 9 年以上相關經歷。於倫敦 Peter Cook 事務所主導音樂廳競圖的空間規劃、國際展覽佈局，以及巴塞隆納現場施工管理。",
    education: [
      { title: "Master of Architecture 建築碩士", org: "National Taiwan University of Science and Technology 國立台灣科技大學", time: "2025", note: "GPA 4.2 / 4.3" },
    ],
    experience: [
      {
        org: "Peter Cook Architecture Studio",
        role: "Architectural Project Manager / Designer",
        place: "London, UK",
        time: "Sep 2025 – Present",
        points: [
          "主導 9,000 m² 文化綜合體競圖的空間規劃與建築設計，以 Rhino 與 AutoCAD 整合 3 座不同規模的音樂廳與 500+ 車位。",
          "負責 4 場分布於世界各地的國際展覽之空間計畫與策展佈局，確保設計意圖精準落實。",
          "以唯一專案經理身分於巴塞隆納主導現場專案管理，獨立負責技術配置、在地採購與承包商協調。",
        ],
      },
      {
        org: "The Loop Group",
        role: "Creative Event Planner & Graphic Designer",
        place: "Taipei, Taiwan",
        time: "2022 – 2025",
        points: [
          "策劃執行 20+ 場大型活動，每場 300 至 1,000+ 人，單場營收 NTD 30 萬至 100 萬以上。",
          "為國際知名藝人設計宣傳視覺，包括英國饒舌歌手 Central Cee、荷蘭百大 DJ Afrojack。",
        ],
      },
      {
        org: "Graduation Project Exhibition 畢業設計展",
        role: "General Convener 總召集人",
        place: "Taipei, Taiwan",
        time: "2022 – 2023",
        points: [
          "帶領 60 人跨職能團隊，歷時一年籌備，於松山文創園區舉辦設計展。",
          "爭取 NTD 120 萬外部贊助並嚴格控管預算，將每位成員自付額壓低至平均 NTD 100 元。",
        ],
      },
    ],
    certifications: [
      { title: "Registered Architect 中華民國建築師", org: "Ministry of Examination, Taiwan 考選部", time: "2026" },
      { title: "PRINCE2® Project Manager (Version 7)", org: "PeopleCert", time: "2026" },
      { title: "PRINCE2® Practitioner / Foundation (Version 7)", org: "PeopleCert", time: "2026" },
      { title: "Taiwan National Technical Certificates 技術士證", org: "勞動部 WDA", time: "", note: "測量（乙級、丙級）、電腦輔助建築製圖 AutoCAD（丙級）、混凝土（丙級）、建築手繪（丙級）" },
    ],
    // 履歷 PDF 下載（把檔案放進 media/profile/ 後填入檔名，例如 "profile/cv.pdf"；留空不顯示）
    cvFile: "",
  },

  // 聯絡方式（留空 "" 就不會顯示）
  contact: {
    email: "andy960513@gmail.com",
    phone: "+886 921 453 913",
    location: "London, UK / Taipei, Taiwan",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/cheng-ju-liu",
  },

  // 最新消息 / 展覽資訊（留空陣列 [] 就不會顯示）
  news: [
    {
      date: "2026.10.22 – 10.26",
      title: "HUMANITY — 教育部藝術與設計菁英海外培訓計畫 2026 返國學員年度成果展",
      place: "華山 1914 文創園區 中 4B 館",
    },
  ],

  /* ===================== 作品（首頁 8 格） ===================== */
  /* 每個作品可用的欄位：
       id（網址用英文代號）、title、titleEn、category、year、location、role、
       summary（格子上的一句話）、facts（資訊表）、body（內文段落）、media（照片影片）
       選用：cover（指定封面）、coverText（無照片時的大字封面）、coverFit、tag（紅色標籤）、
       docs（可下載的參考文件）、dialogue（對話節錄）
     想調整 8 格的順序，直接整段剪下貼上即可。 */
  projects: [
    {
      id: "cheongju",
      title: "清州藝術之丘",
      titleEn: "The Soundscape of Cheongju",
      category: "國際競圖 · Competition",
      year: "2025",
      location: "Cheongju, Korea",
      role: "競圖設計團隊（6 人，含 Peter Cook）",
      summary: "1,300 席葡萄園式音樂廳、劇院與 Live House 的文化綜合體國際競圖。",
      facts: [
        ["類型", "演藝複合體國際競圖"],
        ["規模", "1,300 席音樂廳 / 600 席劇院 / 300 人 Live House"],
        ["團隊", "Peter Cook + 5 位設計師"],
        ["我的工作", "音樂廳看台與視線、聲學檢討；平面幾何與動線"],
      ],
      body: [
        "本項目為韓國清州演藝複合體國際競圖方案。設計於 L 型基地中整合 1,300 席葡萄園式音樂廳、戲劇院與當代 Live House。透過不同高程的進場動線與中介穿廊重新組織人流，並運用統一半徑的圓角語彙，在施工效率、可建造性與流動美學之間取得平衡。",
        "Peter 在平面幾何上引導我們借鑑 Hans Scharoun 與 Enric Miralles 的語彙：牆體維持直線，僅在轉角處採用單一且固定的半徑倒角——既營造流暢的空間動線，營造端又不必耗費昂貴的異形模板。",
        "古典音樂廳為滿足無音響輔助的純聲學要求，採用葡萄園式配置。排布看台階梯時，我反覆檢討踏面微小角度對視線的遮擋，以及聲音對天花反射的影響。",
        "方案跳脫傳統場館的封閉型態，借鑑倫敦巴比肯中心，在基地邊緣嵌入口袋圖書館、親子空間與綠植區，以鮮明紅色意象構築連結市民日常與專業聲學的「城市客廳」。",
      ],
      media: [
        { src: "01-cheongju/hall.jpg", caption: "葡萄園式古典音樂廳" },
        { src: "01-cheongju/lobby.jpg", caption: "不同高程的穿廊與挑高大廳" },
        { src: "01-cheongju/massing-diagram.jpg", caption: "量體與動線配置" },
        { src: "01-cheongju/plan-ground.jpg", caption: "一樓平面" },
        { src: "01-cheongju/plan-level1.jpg", caption: "二樓平面" },
        { src: "01-cheongju/section.jpg", caption: "剖面" },
        { src: "01-cheongju/sketch-cocoon.jpg", caption: "Peter Cook 概念手稿：The Cocoon" },
        { src: "01-cheongju/sketch-lyrical.jpg", caption: "概念手稿：Lyrical Space" },
        { src: "01-cheongju/sketch-moving.jpg", caption: "概念手稿：Moving into the chamber" },
        { src: "01-cheongju/hall-film.mp4", caption: "音樂廳動態模擬" },
        { src: "01-cheongju/sun-hours.jpg", caption: "日照時數分析" },
        { src: "01-cheongju/wind-rose.jpg", caption: "風環境分析" },
      ],
    },

    {
      id: "bournemouth",
      title: "伯恩茅斯展覽空間",
      titleEn: "Echoes of Bournemouth",
      category: "展覽設計 · Exhibition",
      year: "2026",
      location: "Arts University Bournemouth, UK",
      role: "展覽空間規劃與對外協調",
      summary: "Peter Cook 回顧展：以低成本膠片系統與「賣水果」餐車構築自傳式場景。",
      facts: [
        ["展覽", "Peter Cook: Moves On from the Beach to City and Landscape"],
        ["展期", "2026.03.18 – 05.21"],
        ["地點", "TheGallery, Arts University Bournemouth"],
        ["我的工作", "空間規劃、英文書信往來與線上會議、預算控管"],
      ],
      body: [
        "本案為 2026 年伯恩茅斯的主題策展。因應校方預算限制，改採低成本色塊膠片系統創造通透層次，並在展區核心植入一輛象徵 Peter 早年賣水果的特色餐車，以精準的成本控制與幽默的自傳性敘事，構築具個人魅力的回顧場域。",
        "這是我第一次獨自以英文往來信件、主持線上會議，並在吃緊的預算中推動整個展覽落地。",
      ],
      media: [
        { src: "02-bournemouth/exhibition-16.jpg", caption: "展場核心：黃色「賣水果」餐車與色塊膠片" },
        { src: "02-bournemouth/exhibition-09.jpg", caption: "餐車與藍色、橘色膠片構成的通透層次" },
        { src: "02-bournemouth/exhibition-14.jpg", caption: "橘色膠片牆與紫色地坪" },
        { src: "02-bournemouth/exhibition-24.jpg", caption: "展覽入口與導覽文字" },
        { src: "02-bournemouth/exhibition-25.jpg", caption: "入口視角" },
        { src: "02-bournemouth/exhibition-10.jpg", caption: "展覽主牆" },
        { src: "02-bournemouth/exhibition-06.jpg", caption: "藍色膠片牆" },
        { src: "02-bournemouth/exhibition-11.jpg", caption: "黃色膠片裝置" },
        { src: "02-bournemouth/exhibition-05.jpg", caption: "手繪作品陳列" },
        { src: "02-bournemouth/exhibition-15.jpg", caption: "展廳全景" },
        { src: "02-bournemouth/exhibition-26.jpg", caption: "展廳動線" },
        { src: "02-bournemouth/exhibition-07.jpg", caption: "建成作品照片牆" },
        { src: "02-bournemouth/exhibition-08.jpg", caption: "作品與模型照片" },
        { src: "02-bournemouth/exhibition-12.jpg", caption: "木格柵展廳：畫作陳列" },
        { src: "02-bournemouth/exhibition-13.jpg", caption: "展廳轉角" },
        { src: "02-bournemouth/exhibition-17.jpg", caption: "木格柵展廳" },
        { src: "02-bournemouth/exhibition-18.jpg", caption: "畫作與手稿" },
        { src: "02-bournemouth/exhibition-19.jpg", caption: "畫作陳列" },
        { src: "02-bournemouth/exhibition-20.jpg", caption: "展廳深處" },
        { src: "02-bournemouth/exhibition-21.jpg", caption: "展廳與落地窗" },
        { src: "02-bournemouth/exhibition-23.jpg", caption: "展廳盡頭" },
        { src: "02-bournemouth/exhibition-22.jpg", caption: "畫作特寫" },
      ],
    },

    {
      id: "cherry-basket",
      title: "緋紅聚落",
      titleEn: "The Cherry Basket",
      category: "都市微型實作 · Installation",
      year: "2026",
      location: "Aldgate, London",
      role: "現地觀察、設計",
      summary: "串聯咖啡館與市集的紅色織網微型公共裝置。",
      facts: [
        ["類型", "街區微型公共裝置"],
        ["地點", "倫敦 Aldgate"],
        ["策略", "低造價、紅色織網、下沉式遊戲槽"],
      ],
      body: [
        "本案為倫敦 Aldgate 街區的微型公共裝置，串聯咖啡館與市集。我透過蹲點觀察，將現場烘豆的香氣與咖啡莊園地景轉譯為紅色編織網布與植栽，提供遮陽與通透視野。",
        "內部結合支撐隔板與下沉式遊戲槽，在低造價限制下促成跨世代交流，為熱鬧市集打造溫暖的微型客廳。",
      ],
      media: [{ src: "03-cherry-basket/aldgate.jpg", caption: "Aldgate 市集現場" }],
    },

    {
      id: "fitzrovia",
      title: "費茲羅維亞互動導引",
      titleEn: "Instant Fitzrovia",
      category: "路標競圖 · Wayfinding",
      year: "2025",
      location: "Fitzrovia, London",
      role: "設計、DfMA 構造與成本規劃",
      summary: "借鑑 Peter Cook《即時城市》，將路標轉化為可攀爬、穿梭、歇坐的街具。",
      facts: [
        ["類型", "倫敦建築節路標競圖"],
        ["概念", "Instant City —— 即時城市"],
        ["工法", "DfMA：90% 構件工廠預鑄"],
      ],
      body: [
        "本案為倫敦建築節路標競圖提案，借鑑 Peter Cook《即時城市》概念，將單一指標轉化為三組可攀爬、穿梭與歇坐的複合街具。",
        "面對倫敦高昂人工，導入 90% 工廠預製工法（DfMA），大幅縮減現場組裝成本，以遊戲性尺度為均質街區注入活力與歸屬感。",
      ],
      media: [
        { src: "04-fitzrovia/tottenham-street.jpg", caption: "街區情境" },
        { src: "04-fitzrovia/oxford-street.jpg", caption: "Oxford Street" },
        { src: "04-fitzrovia/warren-street.jpg", caption: "Warren Street" },
        { src: "04-fitzrovia/sunglass-hut.jpg", caption: "街角情境" },
        { src: "04-fitzrovia/three-pieces.jpg", caption: "三組可攀爬、穿梭、歇坐的街具" },
        { src: "04-fitzrovia/dfma-exploded-axo.jpg", caption: "DfMA 構造爆炸圖：回收 PET 板材、內部拉桿、配重塊與表面固定鋼基座" },
        { src: "04-fitzrovia/hyper-local-loop.jpg", caption: "Hyper-local Loop：回收、轉化、組裝" },
      ],
    },

    {
      id: "persiana",
      tag: "2nd Prize",          // 封面右下角紅色標籤（可刪除）
      title: "百葉律動",
      titleEn: "The Persiana Stage",
      category: "舞台競圖 · 第二名",
      year: "2026",
      location: "Cruïlla Festival, Barcelona",
      role: "設計（與參數化同事合作）",
      summary: "以巴塞隆納傳統遮陽百葉「Persiana」為構件的音樂節臨時舞台，奪得第二名。",
      facts: [
        ["競圖", "Cruïlla 音樂節舞台"],
        ["成果", "第二名（低預算方案）"],
        ["方案", "現成百葉 / 曲面木構 + 光源 / 參數化紅色鏡面"],
      ],
      body: [
        "本案為巴塞隆納音樂節臨時舞台，轉化當地傳統遮陽百葉「Persiana」為模組化構件。在極限預算下，以現成材料結合曲面木構與間接光源，營造沉浸式派對光影。",
        "我們提出三套方案：現成百葉構件的低預算版、加入曲面木構與光源的進階版，以及透過參數化演算每片角度並貼上紅色鏡面的昂貴版本。最終形式最炫目、造價最高的第三案連入圍都沒有，反而是務實回應預算與在地文化的第一案奪得第二名。",
        "這讓我體會到：精準控管成本並真誠回應常民生活的設計，遠比純粹的幾何炫技更有說服力。",
      ],
      media: [
        { src: "05-persiana/stage-night.jpg", caption: "舞台夜景" },
        { src: "05-persiana/stage-crowd.jpg", caption: "演出現場" },
        { src: "05-persiana/persiana-tower.jpg", caption: "百葉塔" },
        { src: "05-persiana/stage-sunset.jpg", caption: "黃昏" },
        { src: "05-persiana/stage-red.jpg", caption: "參數化紅色鏡面版本" },
        { src: "05-persiana/persiana-detail.jpg", caption: "百葉構件細部" },
        { src: "05-persiana/tower-night.jpg", caption: "燈光塔" },
        { src: "05-persiana/tower-axo.jpg", caption: "塔架軸測" },
        { src: "05-persiana/persiana-reference.jpg", caption: "巴塞隆納傳統 Persiana 百葉" },
        { src: "05-persiana/board.jpg", caption: "競圖圖板" },
      ],
    },

    {
      id: "hearth",
      tag: "評選中",             // 得獎公布後可改成例如 "首獎"
      title: "圍爐",
      titleEn: "HEARTH",
      category: "國際競圖 · Winter Stations",
      year: "2026",
      location: "Woodbine Beach, Toronto, Canada",
      role: "設計、構造與預算規劃",
      summary: "十片紅色板片圍繞海灘救生員座椅，彼此倚靠成圈——冬日海灘上的一座營火。",
      facts: [
        ["競圖", "Winter Stations 2027｜加拿大多倫多冬季海灘裝置"],
        ["規模", "直徑 4.8 m × 高 2.5 m"],
        ["構件", "10 片相同板片（1483 × 2050 × 84 mm）"],
        ["預算", "CA$13,909 / 上限 15,000"],
        ["狀態", "評選結果尚未公布"],
      ],
      body: [
        "營火是最古老的建築：沒有牆、沒有屋頂，只有一圈面向中心的人——每個人被火溫暖，也同時替火擋住風。多倫多 Woodbine 海灘其實已經有它的「火」：整個夏天，紅色的救生員座椅是所有人目光的中心；到了冬天，它卻冷冷地空著。",
        "HEARTH 把缺少的那一圈補回來。十片紅色板片圍繞座椅，每一片都只以一個點著地，在肩膀的高度倚靠著左右的鄰居——沒有任何一片能獨自站立，是這個圈讓它們彼此撐住。走進圈內，風就停了；板片內側的鋁鏡面映出圍坐的人。座椅是空的，但圍繞它的圈不是。",
        "構造上延續事務所的務實精神：10 片相同板片、20 組相同的鋼製節點，不需基礎，以裝滿海灘沙的木箱配重；展期結束後沙回到海灘，板片可平放拆運、再利用或回收。總預算 CA$13,909，控制在 15,000 上限之內。",
      ],
      media: [
        { src: "09-hearth/hero.jpg", caption: "十片紅色板片圍繞冬日的救生員座椅" },
        { src: "09-hearth/mirror-interior.jpg", caption: "內側鋁鏡面映出圍坐的人" },
        { src: "09-hearth/aerial.jpg", caption: "鳥瞰：一個彼此倚靠的圈" },
        { src: "09-hearth/panel-layers.jpg", caption: "板片構造：鏡面、內外層板、木肋與沙箱基座" },
        { src: "09-hearth/board-concept-budget.jpg", caption: "競圖圖板：概念、預算與材料" },
      ],
    },

    {
      id: "nasij",
      tag: "評選中",             // 得獎公布後可改成例如 "首獎"
      title: "織蔭",
      titleEn: "NASĪJ",
      category: "城市雕塑競圖 · Urban Sculpture",
      year: "2026",
      location: "Tharwa Sea Front, Saudi Arabia",
      role: "設計、構造規劃",
      summary: "將貝都因 Al-Sadu 編織化為多面體遮蔭頂棚：白天是海邊的客廳，夜晚是水上的燈籠。",
      facts: [
        ["類型", "沙烏地阿拉伯城市雕塑競圖"],
        ["地點", "Tharwa 濱海步道"],
        ["文化", "Al-Sadu 編織（UNESCO 人類非物質文化遺產，2020）"],
        ["構造", "回收鋁板外殼 · 鍍鋅鋼桁架 · 石材配重基座"],
        ["狀態", "評選結果尚未公布"],
      ],
      body: [
        "阿拉伯人以編織帳篷迎接烈日——用 Al-Sadu 布料製成的貝都因帳篷，帶著大地色彩與幾何圖騰。NASĪJ（阿拉伯語「織物」）把這份編織抬升為海濱上的多面體頂棚：從步道上看，是這個民族的編織圖騰；走進頂棚下，一片沉靜的藍天在海面上方彎曲，成為水邊的客廳。",
        "頂棚回應沙烏地人在水邊相聚的方式——在陰影裡、在黃昏時、和家人一起。孩子在淺水池邊玩水，陽光從池面反射到拱頂下方；長椅面向大海，讓人坐下來看潮汐。夜晚，光從外殼的每一道縫隙透出，整座頂棚倒映在水中，成為一盞水上的燈籠。",
        "每種材料都選擇能在當地取得與加工、不需重型機具就能組裝：可平折的回收鋁板外殼、承重的熱浸鍍鋅鋼桁架、抵抗海風的石材配重基座。沒有濕式工程、不需模板——低造價來自設計，而不是偷工減料。",
      ],
      media: [
        { src: "10-nasij/hero-dusk.jpg", caption: "黃昏的 Tharwa 濱海步道" },
        { src: "10-nasij/night-lantern.jpg", caption: "夜晚：水上的燈籠" },
        { src: "10-nasij/under-canopy.jpg", caption: "頂棚下：藍天般的內層與淺水池" },
        { src: "10-nasij/facets.jpg", caption: "Al-Sadu 編織化為多面體外殼" },
        { src: "10-nasij/aerial.jpg", caption: "鳥瞰" },
        { src: "10-nasij/plan.jpg", caption: "配置平面" },
        { src: "10-nasij/board-structure.jpg", caption: "構造層次：外殼、桁架、基座與內層" },
      ],
    },

    {
      id: "pm",
      coverFit: "contain",
      title: "PRINCE2® 專案經理證照",
      titleEn: "PRINCE2® Project Manager",
      category: "專業證照 · Certification",
      year: "2026",
      location: "PeopleCert, UK",
      role: "",
      tag: "Version 7",
      summary: "PRINCE2® Foundation、Practitioner 與 Project Manager 三張證書，補足成本、時程與風險控管。",
      facts: [
        ["證照", "PRINCE2® Project Manager（Version 7）"],
        ["發證單位", "PeopleCert（英國政府發展之專案管理方法）"],
        ["Foundation", "2026.06.05 生效｜至 2029.06.05"],
        ["Practitioner", "2026.05.30 生效｜至 2029.05.30"],
        ["Project Manager", "2026.06.08 生效｜至 2029.06.08"],
      ],
      body: [
        "PRINCE2®（PRojects IN Controlled Environments）源自英國政府，是國際通用的專案管理方法，強調以商業論證、階段管控、風險與品質管理推動專案。取得 Foundation 與 Practitioner 兩階段考試後，方可獲得 PRINCE2 Project Manager 資格。",
        "經歷競圖拉鋸、預算限制與跨界合作，我意識到在緊縮的營建環境中，好設計若缺乏嚴密的時程、成本與風險控管，就永遠無法走出圖紙。為此我利用工作之餘投入學習，於 2026 年 6 月取得三張證書。",
        "這項訓練補足了設計者在商業與執行端的盲點——在巴塞隆納現場，我正是以 PRINCE2 的階段與風險管理思維，掌控採購、預算與工班調度，替前衛創意找到務實落地的路徑。",
      ],
      media: [
        { src: "06-pm/prince2-project-manager.jpg", caption: "PRINCE2® Project Manager（Version 7）｜2026.06.08" },
        { src: "06-pm/prince2-practitioner.jpg", caption: "PRINCE2® Practitioner（Version 7）｜2026.05.30" },
        { src: "06-pm/prince2-foundation.jpg", caption: "PRINCE2® Foundation（Version 7）｜2026.06.05" },
      ],
    },

    {
      id: "esp",
      coverFit: "contain",       // 封面完整顯示（適合 logo），不裁切
      title: "受邀教育部英文職場 ESP",
      titleEn: "Invited Case Contributor — MOE Workplace English (ESP)",
      category: "教材合作 · Education",
      year: "2026",
      location: "Taiwan × London",
      role: "受邀案例提供者",
      tag: "受邀",
      summary: "受教育部邀請，以倫敦事務所的真實工作對話作為英文職場 ESP 教材，協助大學生提升專業英文。",
      facts: [
        ["邀請單位", "教育部 英文職場 ESP（English for Specific Purposes）"],
        ["合作形式", "提供海外建築事務所的真實職場案例，轉化為教材"],
        ["教材對象", "大學生"],
        ["案例內容", "與 Peter Cook 的設計討論、英文書信、線上會議、現場協調"],
      ],
      body: [
        "我受教育部英文職場 ESP 計畫邀請，將在倫敦 Peter Cook 事務所的第一手工作經驗整理為真實案例，供教育部作為英文教材使用，協助大學生在求學階段就接觸真實的專業英文情境。",
        "課本裡的英文對話往往過於理想化；真實職場中，設計師要在一分鐘內向大師說明圖面、確認需求、接住對方邊想邊修正的指令。透過我的案例，學生能看到建築專業英文在實際工作中如何被使用——從簡報圖面、提問確認，到協調後續分工。",
        "下方為提供的案例之一：Peter 需要一張帶有陰影的線稿圖，以便在上面手繪；由於手繪紙昂貴，我先印在普通紙上請他確認角度與範圍，他當場修正裁切並在圖上加繪步道系統。",
      ],
      // 對話逐字稿節錄（可自行增減；speaker 為說話者）
      dialogueTitle: "教材案例｜與 Peter Cook 討論渲染圖（真實對話節錄）",
      dialogue: [
        { speaker: "Me", text: "Hi Peter. I want to borrow a minute of your time for your feedback on the render. This is the shadow you wanted, and this is the bird's-eye perspective. What do you think about it?" },
        { speaker: "Peter", text: "I think it's fine. The primary characteristic for my needs is that there's a sufficient variety of triangles — they're not all the same kind of triangle… one wants it to have some feeling of reading the rotational shape, which I think it does." },
        { speaker: "Me", text: "So, is the angle right, or do you want to tweak it a bit?" },
        { speaker: "Peter", text: "No, I think this is ideal for my needs… I'll probably run it as three colors. Three usually gives you enough maneuverability." },
        { speaker: "Me", text: "Yes, this is another greenery space. So that means this is like a plaza in the middle, and a pedestrian path beside the sea." },
        { speaker: "Peter", text: "So let's do another path that comes maybe quite close to it, so people can come up to it and look at it… It's framed by a path at the back and framed by a path in the front." },
        { speaker: "Me", text: "Should I draw these pedestrian lines for you?" },
        { speaker: "Peter", text: "Yeah, yeah. Okay." },
      ],
      // 參考文件（可下載）
      docs: [
        { title: "教材案例：對話逐字稿（完整版）", desc: "與 Peter Cook 的渲染圖討論｜Word", file: "07-esp/peter-cook-dialogue-transcript.docx" },
      ],
      media: [
        { src: "07-esp/moe-seal.jpg", caption: "中華民國教育部" },
        { src: "07-esp/interview-peter-cook.jpg", caption: "與 Peter Cook 在事務所討論圖面" },
        { src: "07-esp/peter-render-feedback.jpg", caption: "對話中討論的陰影線稿圖" },
      ],
    },

    {
      id: "artists",
      cover: "08-artists/booth-white.jpg",   // 指定封面（不指定就用 media 第一張）
      title: "藝術家的展覽",
      titleEn: "Exhibitions for Artists",
      category: "展覽與裝置 · Side Projects",
      year: "2025–2026",
      location: "London / München",
      role: "展覽空間與裝置規劃",
      tag: "4 Shows",
      summary: "為獨立藝術家規劃展覽空間：倫敦 Collect、慕尼黑年度國際珠寶展，以及 2 場小型展覽。",
      facts: [
        ["倫敦", "Collect — 國際當代工藝與設計藝術博覽會"],
        ["慕尼黑", "Internationale Handwerksmesse 年度國際珠寶展（Objects Beautiful 展位｜FRAME）"],
        ["其他", "2 場小型獨立藝術家展覽"],
        ["我的工作", "展覽空間與裝置規劃、展位配置、作品陳列"],
      ],
      body: [
        "隨著展覽與微型實作受到關注，我受引薦協助獨立藝術家進行展覽空間與裝置規劃，負責展位配置與作品陳列，參與的展覽橫跨倫敦與慕尼黑。",
        "在倫敦，我參與了 Collect——國際當代工藝與設計藝術博覽會；在慕尼黑，則是國際手工藝博覽會（Internationale Handwerksmesse）期間舉辦的年度國際珠寶展，我負責當代珠寶藝術團體 Objects Beautiful 位於 FRAME 展區的展位。此外，也協助了 2 場小型獨立藝術家展覽。",
        "Objects Beautiful 展位以白色展牆與分區展桌建立清楚的觀展動線，並依作品尺度安排牆面掛件與桌面陳列，讓十餘位藝術家的作品在有限面積內各自被看見。",
        "脫離大事務所的體系，直接面對創作者的個人理念，更考驗在極限預算下靈活溝通與親手實踐的應變能力。",
      ],
      media: [
        { src: "08-artists/booth-white.jpg", caption: "Objects Beautiful 展位｜Internationale Handwerksmesse, München" },
        { src: "08-artists/wall-hoops.jpg", caption: "刺繡繃框展示牆" },
      ],
    },
  ],

  /* ===================== 倫敦這一年（心得） ===================== */
  journal: {
    title: "倫敦這一年",
    titleEn: "A Year in London",
    chapters: [
      {
        label: "01 — 出發",
        heading: "從前衛形體到真實落地",
        text: [
          "出發前往英國前，我已在台灣考取建築師證照並完成碩士論文，帶著對前衛建築思想的嚮往進入 Sir Peter Cook 的事務所。原以為等待著我的是一場脫離重力、純粹追求形式極限的冒險；真正走入倫敦的執業現場，迎接我的卻是極具考驗的現實挑戰。",
          "全歐洲正面臨經濟放緩與通膨壓力，AI 也以驚人速度席捲業界。這段歷程沒有不食人間煙火的烏托邦，而是一段在嚴苛預算與緊湊工期中，重新摸索建築溫度的踏實成長。",
        ],
      },
      {
        label: "02 — 單位培訓",
        heading: "把直覺轉化為系統",
        text: [
          "清州音樂廳國際競圖僅由 5 位同事與 Peter 共 6 人在極短時間內完成。在高壓訓練中，我體會到大師如何將直覺概念轉化為嚴謹的系統——前衛概念絕非空中樓閣，唯有兼顧結構、法規與公眾需求，設計才能真正立足。",
        ],
      },
      {
        label: "03 — 實習與精進",
        heading: "站在沒有空調的施工現場",
        text: [
          "我曾獨自飛往巴塞隆納負責大型展覽的現地佈建：在語言與文化差異下，於極度壓縮的時程內掌控材料採購、把關預算，並親自調度當地工班。脫離電腦螢幕，我深刻體會到再厲害的設計圖紙，若缺乏實際經驗及管控能力，都無法轉化為現實。",
        ],
      },
      {
        label: "04 — 結語",
        heading: "在創意與造價自律之間",
        text: [
          "我完成了從「純設計端」跨向「全流程執行」的轉型：以 DfMA 思維將九成構件於工廠預鑄，並取得 PRINCE2® 專案經理證照，補足成本精算、時程推進與風險控制的盲點。",
          "未來回到台灣，我將帶著在大師事務所磨練出的設計敏銳度，結合專案管理的實戰架構，在真實的法規、預算與施工限制中，踏實地把每一個想法蓋出來。",
        ],
      },
    ],
    // 心得區下方的照片 / 影片（事務所日常、巴塞隆納佈建）
    media: [
      { src: "journal/peter-drawing.jpg", caption: "Peter Cook 在事務所作畫" },
      { src: "journal/peter-watercolour.mp4", caption: "手繪與水彩" },
      { src: "journal/studio-crit.jpg", caption: "學生來訪評圖" },
      { src: "journal/barcelona-exhibition.jpg", caption: "巴塞隆納展覽" },
      { src: "journal/barcelona-build.mp4", caption: "巴塞隆納現地佈建" },
      { src: "journal/barcelona-install.mp4", caption: "現場安裝" },
      { src: "journal/peter-sketch.mp4", caption: "手稿" },
      { src: "journal/students.mp4", caption: "與學生交流" },
      { src: "journal/drawings.mp4", caption: "圖面檢討" },
      { src: "journal/3d-print.mp4", caption: "3D 列印模型" },
      { src: "journal/barcelona-view.mp4", caption: "巴塞隆納" },
      { src: "journal/studio.jpg", caption: "倫敦事務所" },
    ],
  },
};
