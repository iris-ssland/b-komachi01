// contact.html

// スクロール時のイベント
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

// スクロール時のイベント
$(window).scroll(function () {
  // 画面がスクロールされた時に実行する

  $(".contentfadein2").each(function () {
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
    if (scroll > target - windowHeight + 500) {
      $(this).addClass('is-show');   // CSS だけでアニメ完結
    }
  });

});


// スクロール時のイベント
$(window).scroll(function () {
  // 画面がスクロールされた時に実行する

  $(".contentfadein3").each(function () {
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
    if (scroll > target - windowHeight + 700) {
      $(this).addClass('is-show');   // CSS だけでアニメ完結
    }
  });

});

// スクロール時のイベント
$(window).scroll(function () {
  // 画面がスクロールされた時に実行する

  $(".contentfadein4").each(function () {
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
    if (scroll > target - windowHeight + 100) {
      $(this).addClass('is-show');   // CSS だけでアニメ完結
    }
  });

});

// textanimation

// $(window).on('load scroll', function () {
//     const windowHeight = $(window).height();

//   $(".textanimation").each(function () {
//     const $this = $(this); 
//     const scroll = $(window).scrollTop(); 
//     const targetTop = $this.offset().top; 
//     const targetBottom = targetTop + $this.outerHeight(); 

//     const shouldShow = scroll > targetTop - windowHeight;

//     const isCompletelyOutOfView = (scroll > targetBottom) || (scroll + windowHeight < targetTop);

//     if (shouldShow && !isCompletelyOutOfView) {
//       $this.addClass("text-show");
//     } else {
//       $this.removeClass("text-show");
//     }
//   });
// });