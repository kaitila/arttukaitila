(function () {
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Fade + rise elements into view the first time they scroll into the
  // viewport.
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    if (prefersReducedMotion) {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach(function (el) {
        io.observe(el);
      });
    }
  }

  // Entry pages: the body starts very slightly blurred and scaled down,
  // then sharpens into focus over the first bit of scroll — a quiet
  // "settling in" cue rather than a hard cut into the reading view. The
  // title shrinks slightly over the same range, like it's stepping back
  // out of the way once you start reading.
  var entryBody = document.querySelector(".entry-body");
  var entryTitle = document.querySelector(".entry-title-page");
  if (entryBody && !prefersReducedMotion) {
    var FOCUS_RANGE = 220;
    var ticking = false;

    var updateFocus = function () {
      var progress = Math.min(window.scrollY / FOCUS_RANGE, 1);
      var blur = (1 - progress) * 3;
      var bodyScale = 0.99 + progress * 0.01;
      entryBody.style.filter = "blur(" + blur.toFixed(2) + "px)";
      entryBody.style.transform = "scale(" + bodyScale.toFixed(4) + ")";
      if (entryTitle) {
        var titleScale = 1 - progress * 0.08;
        entryTitle.style.transform = "scale(" + titleScale.toFixed(4) + ")";
      }
      ticking = false;
    };

    updateFocus();

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          requestAnimationFrame(updateFocus);
          ticking = true;
        }
      },
      { passive: true }
    );
  }
})();
