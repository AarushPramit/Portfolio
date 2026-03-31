// INTRO FADE
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".intro");

  if (intro) {
    setTimeout(() => {
      intro.style.opacity = "0";

      setTimeout(() => {
        intro.style.display = "none";
      }, 800);
    }, 1200);
  }
});

// CURSOR GLOW
const glow = document.querySelector(".cursor-glow");

if (glow) {
  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

// 🔥 IMPORTANT LINE
reveals.forEach(el => observer.observe(el));

reveals.forEach(el => observer.observe(el));

// WORD BY WORD ANIMATION
document.querySelectorAll(".animate-text").forEach((el) => {
  const words = el.innerText.split(" ");
  el.innerHTML = words
    .map(word => `<span>${word}&nbsp;</span>`)
    .join("");

  const spans = el.querySelectorAll("span");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        spans.forEach((span, i) => {
          setTimeout(() => {
            span.classList.add("show");
          }, i * 60); // speed
        });
      }
    });
  });

  observer.observe(el);
});