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


// contactセクションが画面内にある間だけ.fadein要素を表示する
$(window).on('load scroll', function () {
  const scroll = $(window).scrollTop();
  const windowHeight = $(window).height();

  const contact = $('.contact');
  const contactTop = contact.offset().top;
  const contactBottom = contactTop + contact.outerHeight();

  // .fadein 要素をひとつずつ処理
  $(".fadein").each(function () {
    const targetTop = $(this).offset().top;
    const targetBottom = targetTop + $(this).outerHeight();

    // contactセクションが画面に表示されている間だけ処理
    if ((scroll + windowHeight > contactTop) && (scroll < contactBottom)) {
      // その中で、個別要素が画面に表示されていれば .show を追加
      if (scroll + windowHeight > targetTop) {
        $(this).addClass("show");
      }
    } else {
      // contactセクションが画面外にある場合は全ての.fadeinから.showを外す
      $(this).removeClass("show");
    }
  });
});



// textanimation

$(window).on('load scroll', function () {
    const windowHeight = $(window).height();

  $(".textanimation").each(function () {
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


// drop

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


