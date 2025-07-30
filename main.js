// ハンバーガーメニュー
$(".hamburger").on("click", function () {
  $("#header").toggleClass("open");
});

$("#mask").on("click", function () {
  $("#header").removeClass("open");
});

$("#nav a").on("click", function () {
  $("#header").removeClass("open");
});

// ページ内リンクのスムーススクロール
$('a[href^="#"]').on('click', function (e) {
  const speed = 500;
  const href = $(this).attr("href");
  const $target = $(href === "#" || href === "" ? "html" : href);

  if ($target.length) {
    e.preventDefault();

    const headerHeight = $("#header").outerHeight();
    const position = $target.offset().top - headerHeight;

    $("html, body").animate({ scrollTop: position }, speed, "swing");
  }
});

// voice
window.addEventListener("load", () => {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 980) {
    const items = document.querySelectorAll(".voice-item");
    items.forEach((item) => {
      item.style.opacity = "1";
      item.style.transform = "translateX(0)";
    });

    if (typeof ScrollTrigger !== "undefined" && ScrollTrigger.getAll) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ScrollTrigger.refresh();
    }

    return;
  }

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
  let scroll = $(window).scrollTop();
  let joinusOffset = $(".joinus").offset().top;
  let windowHeight = $(window).height();

  if (scroll + windowHeight > joinusOffset + 100) {
    $("#header").fadeOut();
    $(".scroll_down").fadeOut();
  } else {
    $("#header").fadeIn();
    $(".scroll_down").fadeIn();
  }
});



// joinus  textanimation

$(window).on('load scroll', function () {
  const windowHeight = $(window).height();

  $(".textanimation, .textanimation-sp").each(function () {
    const $this = $(this);
    const scroll = $(window).scrollTop();
    const targetTop = $this.offset().top;
    const targetBottom = targetTop + $this.outerHeight();

    const shouldShow = scroll > targetTop - windowHeight;

    const isCompletelyOutOfView = (scroll > targetBottom) || (scroll + windowHeight < targetTop);

    if (shouldShow && !isCompletelyOutOfView) {
      $this.addClass("text-show");
    } else {
      $this.removeClass("text-show");
    }
  });
});


// contact-btn  drop

$(window).on('load scroll', function () {
  const windowHeight = $(window).height();

  $(".btn-drop").each(function () {
    const $this = $(this);
    const scroll = $(window).scrollTop();
    const targetTop = $this.offset().top;
    const targetBottom = targetTop + $this.outerHeight();

    const shouldShow = scroll > targetTop - windowHeight;

    const isCompletelyOutOfView = (scroll > targetBottom) || (scroll + windowHeight < targetTop);

    if (shouldShow && !isCompletelyOutOfView) {
      $this.addClass("drop");
    } else {
      $this.removeClass("drop");
    }
  });
});



// mouse-stalker

const stalker = document.getElementById("mouse-stalker");

let prevX = 0;                    // 前回の X 座標を保持
const threshold = 4;              // 少しだけ動いた時のガタツキ防止

document.addEventListener("mousemove", (e) => {
  // 位置を追従
  stalker.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

  // 向きの判定
  const diffX = e.clientX - prevX;

  if (Math.abs(diffX) > threshold) {
    if (diffX > 0) {
      // → に動いた
      stalker.classList.remove("flip");   // 右向き
    } else {
      // ← に動いた
      stalker.classList.add("flip");      // 左向き
    }
  }
  prevX = e.clientX;   // 今回の座標を次回の比較用に保存
});
