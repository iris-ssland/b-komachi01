// contact.html用JQuery

// スクロールイベント（headerの背景色変更）
$(window).on('scroll', function () {
  const over500   = $(this).scrollTop() > 400;  // 閾値判定
  const $header   = $('header');                // 1回だけ取得

  if (over500) {
    $header.addClass('for-content-backcolor')
            .removeClass('for-content');
  } else {
    $header.addClass('for-content')
            .removeClass('for-content-backcolor');
  }
});

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


// スクロールイベント（各itemのFadein）
$(window).scroll(function () {
  // 画面がスクロールされた時に実行する

  $(".contentfadein").each(function () {
    // fadeinクラスに対して順に処理を行う
    // .each()：個別に処理を行うためのメソッド。繰り返し処理を行いながら各要素に対して操作を実行することができる。


    // スクロールした距離
    let scroll = $(window).scrollTop();
    // 現在のスクロール位置を取得する。
    // scrollTop()：要素のスクロール位置を取得

    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;

    // 画面の高さ
    let windowHeight = $(window).height();

    // fadeinクラスの要素が画面内にきたタイミングで要素を表示
    if (scroll > target - windowHeight + 300) {
      $(this).addClass('is-show');   // CSS だけでアニメ完結
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




