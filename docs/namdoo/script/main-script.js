console.clear();

// 메인 페이지

const MainTitle = function () {
  // 스크롤 초기화 함수
  let ScrollDefault = () => {
    let = ScrollArray = window.document.querySelectorAll(".on");
    for (let i = 0; ScrollArray.length > i; i++) {
      ScrollArray[i].classList.remove("on");
    }
  };

  // 스크롤 맨위로
  setTimeout(() => {
    window.scrollTo(0, 0);
    ScrollDefault();
  }, 100);

  // 타이틀 인트로 애니메이션

  // 암막, 타이포그래피
  setTimeout(() => {
    window.document.querySelector(".blackwall").classList.add("active-blue");
    setTimeout(() => {
      window.document.querySelector(".blackwall").classList.add("active");
      setTimeout(() => {
        for (let i = 0; i < 2; i++) {
          window.document
            .querySelectorAll(".title-deco")
            [i].classList.add("active");
          window.document.querySelector(".blackwall").style.display = "none";
        }
        setTimeout(() => {
          window.document.querySelector(".deco-UNIQUE").classList.add("active");
          window.document
            .querySelector(".deco-STYLISH")
            .classList.add("active");
        }, 500);
      }, 1000);
    }, 500);
  }, 500);

  // 프레임 애니메이션 - 무한반복
  let frame = window.document.querySelector(".title-logo-deco");
  let FrameNumber = 0;

  let FrameMove = function () {
    if (FrameNumber == 0) {
      frame.style.setProperty("--frame-x", "20px");
      frame.style.setProperty("--frame-y", "20px");
      FrameNumber = FrameNumber + 1;
    } else if (FrameNumber == 1) {
      frame.style.setProperty("--frame-x", "-20px");
      frame.style.setProperty("--frame-y", "-20px");
      FrameNumber = FrameNumber + 1;
    } else if (FrameNumber == 2) {
      frame.style.setProperty("--frame-x", "-20px");
      frame.style.setProperty("--frame-y", "20px");
      FrameNumber = FrameNumber + 1;
    } else if (FrameNumber == 3) {
      frame.style.setProperty("--frame-x", "20px");
      frame.style.setProperty("--frame-y", "-20px");
      FrameNumber = 0;
    }
  };

  setInterval(() => {
    FrameMove();
  }, 500);

  // 스크롤 애니메이션
  let ScrollAnime = () => {
    // 스크롤 높이
    window.document.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      if (700 > window.scrollY) {
        window.document.querySelector(".title-content").classList.remove("on");
      } else if (1000 > window.scrollY && window.scrollY >= 700) {
        window.document.querySelector(".title-content").classList.add("on");
      } else if (1200 > window.scrollY && window.scrollY >= 1000) {
        window.document.querySelector("#main").classList.remove("bgc");
        window.document.querySelector(".intro-1").classList.add("on");
      } else if (2000 > window.scrollY && window.scrollY >= 1200) {
        window.document.querySelector("#main").classList.add("bgc");
        window.document.querySelector(".intro-2").classList.add("on");
      } else if (2400 > window.scrollY && window.scrollY >= 2000) {
        window.document.querySelector(".intro-3").classList.add("on");
      } else if (3500 > window.scrollY && window.scrollY >= 3000) {
        window.document.querySelector(".intro-4").classList.add("on");
        window.document.querySelector("#main").classList.remove("on");
      } else if (3900 > window.scrollY && window.scrollY >= 3700) {
        window.document.querySelector("#main").classList.add("on");
        window.document.querySelector(".to-shop").classList.remove("on");
      } else if (window.scrollY >= 3900) {
        window.document.querySelector(".to-shop").classList.add("on");
      }
    });
  };
  ScrollAnime();
};

MainTitle();
