const vm = new Vue({
  el: '#app',
  data() {
    return {
      yScrollValue: '',
      //----------------------------------
      // section 6
      info: {
        tabStatus: 0,
        tabs: [
          {
            title: '時程',
            notice:
              '<div class="cs-logo"><img src="./assets/images/logo.png" alt=""></div><div class="timelineWrapper"><div class="timelineItem"><div class="timelineImg"><img src="./assets/images/timeline-2.png" alt=""></div><div class="timelineTxt"><p>14:00</p><p>Ceremony</p><p>挙式·婚禮儀式</p></div><p class="timelineDescription">證婚儀式(挙式)前不設報到手續。<br />誠摯邀請您於 13:45 前抵達飯店，<br />由工作人員引導入席，<br />共同迎接最重要的時刻。<br />證婚儀式(挙式)開始後將關閉入場，<br />若遲到將無法進入，敬請準時。</p></div><div class="break-line"></div><div class="timelineItem"><div class="timelineImg"><img src="./assets/images/timeline-4.png" alt=""></div><div class="timelineTxt"><p>14:45</p><p>Reception Party</p><p>披露宴·婚禮宴會</p></div><p class="timelineDescription">賓客報到(受付)與紅包收取<br />將統一安排在 14:20<br />於宴會廳「MORI」 進行，<br />屆時由工作人員引導前往。</p></div></div>',
          },
          {
            title: '衣著',
            notice:
              '<p>為了讓大家在我們的重要日子中都能得體又舒適地參與，我們在這裡提供一些日本婚禮喜宴的穿著小建議。<br />與台灣婚禮不同，日本的婚宴對於賓客的服裝較為正式與講究，特別是在婚禮現場有攝影與敬酒等流程時，穿著正式也代表對新人的尊重與祝福。</p><p>👔 男性賓客請務必穿著全套正式西裝(西裝外套＋長褲＋襯衫＋領帶＋皮鞋)。請避免便服、休閒外套、牛仔褲或運動鞋等不正式的穿著。</p><p>👗 女性賓客建議穿著優雅的連身洋裝(one-piece dress)或正式和服。裙長建議膝上10公分以內，並避免過短、過於暴露或過度閃亮的服裝，以維持婚禮場合的莊重與端莊。 在顏色選擇方面，請避免過於鮮豔或誇張的顏色，以免產生喧賓奪主的情況。</p><p>👘 關於日式服裝參加婚禮的小建議：<br />若您對穿著傳統日式服裝有興趣，也非常歡迎！以下是常見的選擇供您參考！<br />女性朋友(不論是否已婚)，建議可選擇穿「訪問服(ほうもんぎ)」，這是一種適合正式場合的優雅和服。<br />若您是未婚女性，也可以選擇穿著更為華麗的「振袖(ふりそで)」參加婚禮，是非常受到歡迎且合宜的選擇。</p><div class="img"><img src="./assets/images/clothes-1.png" alt=""><img src="./assets/images/clothes-2.png" alt=""><img src="./assets/images/clothes-3.png" alt=""></div><div class="break-line"></div><p>飯店附近的和服店：<a href="https://zh-cht.vasara-h.co.jp/shop/detail.html?id=17" target="_blank">VASARA<img src="./assets/images/external-link.svg"></a><br /></p><div class="googlemap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.653205754917!2d139.69947207674966!3d35.66091497259384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bc0a129c3db%3A0xf8f48c2944c373e8!2z552A54mp56ef5YCfVkFTQVJBIOa-gOiwt-W6lw!5e0!3m2!1szh-TW!2stw!4v1754129706058!5m2!1szh-TW!2stw" width="1000" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div><p>此和服店的網站有中文版。<br />會客和服為訪問服(ほうもんぎ)。<br />若要租借和服，請選擇會客和服或振袖。<br />租借和服時也可以跟店家說明是要去參加婚禮為目的。</p><div class="img"><img src="./assets/images/clothes-rent.png" alt=""></div><div class="break-line"></div><p>相關連結：</p><a href="https://www.eikan.com.tw/e_news.php?id=1796" target="_blank">日台婚宴大不同？參加日本婚宴必須知道的禮節及穿搭！<img src="./assets/images/external-link.svg"></a><a href="hhttps://www.tsunagujapan.com/zh-hant/how-to-attend-a-japanese-wedding/" target="_blank">出席日本婚禮前必看！10個避免失禮的注意事項<img src="./assets/images/external-link.svg"></a><a href="https://japaholic.com/tw/article/detail/832851" target="_blank">日本人結婚紅包不是紅色的？該包多少錢？日本結婚禮金文化小知識<img src="./assets/images/external-link.svg"></a><a href="https://www.letsgojp.com/archives/330752/" target="_blank">史上最華麗的紅包袋！日本不可不知的禮金文化<img src="./assets/images/external-link.svg"></a>',
          },
          {
            title: '禮金',
            notice:
              '<p>不少台灣的親友可能會好奇：「日本婚禮的紅包怎麼包？」這裡為您簡單整理幾個需要注意的小知識：</p><p>🎀 禮金建議金額：<br />一般賓客(非親屬)以 30,000日圓 為主流金額；<br />若是親戚或與新人關係較親近者，則通常會準備 50,000～100,000日圓 不等。<br />可依與新人的關係，彈性選擇 30,000、50,000、70,000 等奇數金額為主，象徵圓滿與難以分離的好緣份，也符合日本婚禮的禮金文化。</p><p>💴 數字的選擇：<br />在台灣，我們習慣包雙數紅包，象徵好事成雙；但在日本，則偏好奇數，因為奇數難以平分，代表新人合而為一、無法拆散的美好寓意。反之，雙數在日本常被視為可「分開」的數字，有不吉利之意，尤其不建議包2萬或4萬日圓。<br />此外，在日本，「4」和「9」都被視為不吉利的數字。「4」的發音與「死」相近，「9」則與「苦(く/ku)」同音，皆帶有負面聯想，因此在包禮金時應盡量避開這兩個數字。</p><p>🧧 新鈔與放法：<br />為了祝福新人展開新生活，日本人習慣使用全新紙鈔(新札/しんさつ)，並將紙鈔正面朝上放入禮金袋，象徵誠意與心意。</p><p>🎁 禮金袋與水引的文化：<br />與台灣使用紅色紅包不同，日本的禮金會放在象徵純潔的白色「ご祝儀袋(しゅうぎぶくろ)」中。袋子樣式從簡約到華麗皆有，常見以白鶴、金竹等吉祥圖案裝飾，外面綁有紅白或金銀兩色的「水引(みずひき)」，是一種代表緣分牢不可破、不能重新打結的結繩設計，寄寓新人能長長久久、百年好合。</p><p>📥 遞交方式：<br />證婚儀式結束後，進入婚宴會場前，請將禮金袋或禮物交給接待處(受付)，會有工作人員登記並代為保管。</p><div class="img"><img src="./assets/images/gift-1.png" alt=""><img src="./assets/images/gift-2.png" alt=""><img src="./assets/images/gift-3.png" alt=""><img src="./assets/images/gift-4.png" alt=""><img src="./assets/images/gift-5.png" alt=""></div><div class="break-line"></div><p>相關連結：</p><a href="https://www.eikan.com.tw/e_news.php?id=1796" target="_blank">日台婚宴大不同？參加日本婚宴必須知道的禮節及穿搭！<img src="./assets/images/external-link.svg"></a><a href="hhttps://www.tsunagujapan.com/zh-hant/how-to-attend-a-japanese-wedding/" target="_blank">出席日本婚禮前必看！10個避免失禮的注意事項<img src="./assets/images/external-link.svg"></a><a href="https://japaholic.com/tw/article/detail/832851" target="_blank">日本人結婚紅包不是紅色的？該包多少錢？日本結婚禮金文化小知識<img src="./assets/images/external-link.svg"></a><a href="https://www.letsgojp.com/archives/330752/" target="_blank">史上最華麗的紅包袋！日本不可不知的禮金文化<img src="./assets/images/external-link.svg"></a>',
          },
          {
            title: '交通',
            notice:
              '<p class="txt-lg">TRUNK(HOTEL)<br />CAT STREET</p><p>東京都渋谷区神宮前5-31 <br /><span class="txt-sm">5-chōme-31 Jingūmae, Shibuya, Tokyo</span></p><div class="img"><img src="./assets/images/map.png" alt=""></div><p><span class="txt-bold">明治神宮前〈原宿〉駅<br />出口7(電扶梯)  徒步9分鐘</span><br /><img src="./assets/images/map-icon-tkm.png" alt="" class="icon">東京Metro｜千代田線、副都心線</p><div class="break-line"></div><p><span class="txt-bold">原宿駅<br />東口(電扶梯)  徒步12分鐘</span><br /><img src="./assets/images/map-icon-jr.png" alt="" class="icon">JR｜山手線</p><div class="break-line"></div><p><span class="txt-bold">表参道駅<br />出口A1(樓梯)、B5(電扶梯)  徒步13分鐘</span><br /><img src="./assets/images/map-icon-tkm.png" alt="" class="icon">東京Metro｜千代田線、銀座線、半蔵門線</p><div class="break-line"></div><p><span class="txt-bold">渋谷駅<br />出口B1(電扶梯)、20a(電梯)  徒步6分鐘</span><br /><img src="./assets/images/map-icon-tkm.png" alt="" class="icon">東京Metro｜銀座線、半藏門線、副都心線<br /><img src="./assets/images/map-icon-jr.png" alt="" class="icon">JR｜山手線、埼京線、湘南新宿線<br /><img src="./assets/images/map-icon-tkd.png" alt="" class="icon">東急電鐵｜東橫線、田園都市線</p><div class="googlemap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5158984185628!2d139.70143687674997!3d35.66429707259268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca6f5129f93%3A0x46c4cd2fba503530!2sTRUNK(HOTEL)!5e0!3m2!1szh-TW!2stw!4v1754134937992!5m2!1szh-TW!2stw" width="1000" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>',
          },
        ],
      },
    };
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWatch);

    new WOW().init();
    this.loadImagesAndAnimate();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
  },
  methods: {
    scrollWatch() {
      this.yScrollValue = window.scrollY;
    },
    goTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll(sectionRef) {
      this.$refs[sectionRef].scrollIntoView({ behavior: 'smooth' });
    },
    handleChangeTab(tab, index) {
      this[tab].tabStatus = index;
      this.handleScroll(`${tab}Tab`);
    },
    // Custom
    loadImagesAndAnimate() {
      const imageSources = [
        'assets/img/kv-bg.jpg',
        'assets/img/kv-img-map.png',
        'assets/img/kv-img-uav.png',
      ];

      const imagePromises = imageSources.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      Promise.all(imagePromises)
        .then(() => {
          this.kvAnimation();
        })
        .catch((error) => {
          console.error('Error loading images:', error);
          this.kvAnimation();
        });
    },
    handleInfoTabChangeTab(tab, index) {
      this[tab].tabStatus = index;
      if (this.isMobile.matches) {
        this.handleScroll('infoTab');
      } else {
        this.handleScroll('infoList');
      }
    },
  },
});
