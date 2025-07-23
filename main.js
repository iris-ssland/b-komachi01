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