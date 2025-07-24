// voice
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const items = gsap.utils.toArray(".voice-item");
  const itemDuration = 1;
  const headerHeight = document.querySelector("#header").offsetHeight;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#voice",
      start: () => `top-=${headerHeight} top`,
      end: () => `+=${items.length * 1000 + 500}`,
      pin: true,
      scrub: true,
      markers: false
    }
  });

  items.forEach((item, index) => {
    tl.fromTo(item,
      { opacity: 0, x: 300 },
      { opacity: 1, x: 0, duration: itemDuration, ease: "power2.out" },
      index * itemDuration
    );
  });
  tl.to({}, { duration: 3 });
});

// スクロールバーとヘッダー
$(window).scroll(function () {
  let scroll = $(window).scrollTop(); // 現在のスクロール位置
  let joinusOffset = $(".joinus").offset().top; // .joinusの位置
  let windowHeight = $(window).height(); // 画面の高さ

  if (scroll + windowHeight > joinusOffset + 100) {
    // joinusが画面内に入ったら
    $("#header").fadeOut();
    $(".scroll_down").fadeOut();
  } else {
    // joinusから離れたら表示
    $("#header").fadeIn();
    $(".scroll_down").fadeIn();
  }
});
