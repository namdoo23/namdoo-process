console.clear();
//  아우터 페이지
const OuterPage = () => {
  // 배너 애니메이션
  setTimeout(() => {
    window.document.querySelector(".outer-banner").classList.add("on");
  }, 100);

  // 더보기 버튼
  let ViewMore = window.document.querySelector("button.outer-view-more");
  let OuterCards = window.document.querySelectorAll(".outer-goods-cards");
  // 아우터 카드 첫장 키기
  OuterCards[0].classList.add("on");
  // 페이지가 한장일때 버튼 끄기
  if (OuterCards.length == 1) {
    ViewMore.classList.add("end");
  }
  let i = 1;
  // 아우터 카드 끝날때까지 클릭
  ViewMore.addEventListener("click", () => {
    if (OuterCards.length > i) {
      OuterCards[i].classList.add("on");

      i++;
      // 아우터 카드 마지막장
      if (OuterCards.length == i) {
        ViewMore.classList.add("end");
      }
    }
  });
};

OuterPage();
