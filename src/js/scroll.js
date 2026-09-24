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

    // The very first scroll gesture (from the top) is handed off to a
    // controlled glide down to the focused reading position, rather than
    // a raw, uncontrolled scroll start. Only arms if the page is loaded
    // at the top; a later visit via back-to-top doesn't re-trigger it.
    if (window.scrollY < FOCUS_RANGE) {
      var introDone = false;

      var smoothScrollTo = function (target, duration) {
        var startY = window.scrollY;
        var distance = target - startY;
        var startTime = null;

        var easeOutCubic = function (t) {
          return 1 - Math.pow(1 - t, 3);
        };

        var step = function (timestamp) {
          if (startTime === null) startTime = timestamp;
          var progress = Math.min((timestamp - startTime) / duration, 1);
          window.scrollTo(0, startY + distance * easeOutCubic(progress));
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };

        requestAnimationFrame(step);
      };

      var handleIntroScroll = function () {
        window.removeEventListener("wheel", handleIntroScroll);
        window.removeEventListener("touchmove", handleIntroScroll);
        window.removeEventListener("keydown", handleIntroKey);
        if (introDone || window.scrollY >= FOCUS_RANGE) return;
        introDone = true;
        smoothScrollTo(FOCUS_RANGE, 700);
      };

      var handleIntroKey = function (e) {
        if (["ArrowDown", "PageDown", " ", "End"].indexOf(e.key) !== -1) {
          handleIntroScroll();
        }
      };

      window.addEventListener("wheel", handleIntroScroll, { passive: true });
      window.addEventListener("touchmove", handleIntroScroll, {
        passive: true,
      });
      window.addEventListener("keydown", handleIntroKey);
    }
  }
})();
