console.clear();
// SHOP 페이지

const ShopPage = function () {
  // 슬라이더

  // 첫 화면 클래스 on

  let SlideAnimeIndex = window.document.querySelectorAll(".slide");

  setTimeout(() => {
    SlideAnimeIndex[0].classList.add("on");
  }, 0);
  let SlideAnime = (a) => {
    for (let i = 0; SlideAnimeIndex.length > i; i++) {
      SlideAnimeIndex[i].classList.remove("on");
    }
    SlideAnimeIndex[a].classList.add("on");
  };

  // 슬라이드 넘기기
  const SlideIndicater = window.document.querySelectorAll(
    'input[name = "slide-indicater"]'
  );
  let CurrentImage = 0;
  SlideIndicater.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      let SlideIndex = e.currentTarget.value;
      CurrentImage = Number(SlideIndex);

      // 클래스 on
      SlideAnime(CurrentImage);

      // 슬라이드 넘기기
      window.document
        .querySelector(".slider-con")
        .style.setProperty("--slide", CurrentImage);
    });
  });

  // 슬라이더 버튼
  window.document
    .querySelector(".indicater .left-button")
    .addEventListener("click", () => {
      // 인디케이터 라디오 체크
      if (CurrentImage > 0) {
        CurrentImage = CurrentImage - 1;
      } else if (CurrentImage == 0) {
        CurrentImage = 3;
      }
      for (let i; i < SlideIndicater.length; i++) {
        SlideIndicater[i].checked = false;
      }
      SlideIndicater[CurrentImage].checked = true;
      // 클래스 on
      SlideAnime(CurrentImage);
      window.document
        .querySelector(".slider-con")
        .style.setProperty("--slide", CurrentImage);
    });
  window.document
    .querySelector(".indicater .right-button")
    .addEventListener("click", () => {
      // 인디케이터 라디오 체크
      if (CurrentImage < 3) {
        CurrentImage = CurrentImage + 1;
      } else if (CurrentImage == 3) {
        CurrentImage = 0;
      }
      for (let i; i < SlideIndicater.length; i++) {
        SlideIndicater[i].checked = false;
      }
      SlideIndicater[CurrentImage].checked = true;
      // 클래스 on
      SlideAnime(CurrentImage);
      window.document
        .querySelector(".slider-con")
        .style.setProperty("--slide", CurrentImage);
    });

  // 컬렉션 탭메뉴
  let CollectionButton = window.document.querySelectorAll(
    ".collection-tabmenu > li > button"
  );
  let CollectionCards = window.document.querySelectorAll(
    ".collection-goods-con .collection-cards"
  );
  for (let i = 0; i < CollectionButton.length; i++) {
    CollectionButton[i].addEventListener("click", () => {
      console.log("click");
      for (let j = 0; j < CollectionButton.length; j++) {
        CollectionButton[j].classList.remove("active");
      }
      for (let k = 0; k < CollectionCards.length; k++) {
        CollectionCards[k].classList.remove("active");
      }
      CollectionButton[i].classList.add("active");
      CollectionCards[i].classList.add("active");
    });
  }
};

ShopPage();
