/* wunschwelt. motion system: enhancement only, no dependency for shopping/filter logic. */
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const supportsReveal = "IntersectionObserver" in window;
  const canAnimate = !prefersReducedMotion && supportsReveal;

  const observer = canAnimate ? new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("ww-visible");
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.07, rootMargin: "0px 0px -24px 0px" }) : null;

  function observe(root) {
    if (!canAnimate) return;
    const scope = root || document;
    const selector = ".section-head, .trend-card, .path, .gift, .result, .product, .hero-aside, .aside, .occasion-grid > div, .help-grid > div";
    const targets = [];
    if (scope.matches && scope.matches(selector)) targets.push(scope);
    targets.push(...scope.querySelectorAll(selector));

    for (const target of targets) {
      if (target.dataset.wwObserved) continue;
      target.dataset.wwObserved = "true";

      const parent = target.parentElement;
      if (parent && target.matches(".trend-card,.path,.gift,.result,.product,.occasion-grid > div,.help-grid > div")) {
        const siblings = Array.from(parent.children);
        target.style.setProperty("--ww-delay", Math.min(siblings.indexOf(target) % 4, 3) * 65 + "ms");
      }

      const box = target.getBoundingClientRect();
      // Never briefly hide something already on screen or above the viewport.
      if (box.top < window.innerHeight * 0.85 && box.bottom > 0) {
        target.classList.add("ww-visible");
      } else if (box.bottom > 0) {
        target.classList.add("ww-reveal");
        observer.observe(target);
      } else {
        target.classList.add("ww-visible");
      }
    }
  }

  window.wunschweltMotion = { observe };
  observe(document);

  if (!prefersReducedMotion) {
    const progress = document.createElement("div");
    progress.className = "ww-scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.appendChild(progress);

    let requested = false;
    function updateProgress() {
      const total = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const fraction = total ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      progress.style.transform = "scaleX(" + fraction + ")";
      requested = false;
    }
    function onScroll() {
      if (!requested) {
        requested = true;
        window.requestAnimationFrame(updateProgress);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateProgress();
  }
})();
