// voice
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const items = gsap.utils.toArray(".voice-item");
  const itemDuration = 1;
  const showDuration = 1000;
  const holdAfterLast = 1000;
  const headerHeight = document.querySelector("#header").offsetHeight;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#voice",
      start: "top-=98 top",
      end: "+=2000",
      pin: true,
      scrub: true,
    }
  });

  items.forEach((item, index) => {
    tl.fromTo(item,
      { opacity: 0, x: 300 },
      { opacity: 1, x: 0, duration: itemDuration, ease: "power2.out" },
      index * itemDuration
    );
  });
  tl.to({}, { duration: 5 });
});