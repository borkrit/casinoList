const spin = document.querySelectorAll(".free-spin");
spin.forEach((item) => {
  item.addEventListener("click", (e) => {
    let activeSpin = e.currentTarget;
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    activeSpin.classList.add("active");
    let popUp = activeSpin.parentElement.querySelector(".pop-up");
    let title = activeSpin.parentNode.parentElement
      .querySelector(".item__information")
      .querySelector(".item__title").textContent;
    const popUpTitle = popUp.querySelector(".pop-up__title");
    const popUpCode = popUp.querySelector(".pop-up__code");
    let text = popUp.querySelector(".code").textContent;
    const toolTip = popUp.querySelector(".tooltip");
    const closePopUp = popUp.querySelector(".pop-up__close");

    popUpTitle.innerHTML = `${item.textContent} at ${title.replace(
      "Review",
      ""
    )}`;
    popUpCode.addEventListener("click", () => {
      navigator.clipboard.writeText(text.trim()).then(() => {
        toolTip.style.display = "block";
        setTimeout(() => {
          toolTip.style.display = "none";
        }, 2000);
      });
    });
    closePopUp.addEventListener("click", () => {
      activeSpin.classList.remove("active");
    });
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('active') == false &&
        event.target.parentElement.querySelector('.pop-up') !== null
      ) {
        activeSpin.classList.remove("active");
      }
    })
  });
});

const list = document.querySelectorAll(".reviews__item");
for (let i = 0; i < list.length; i++) {
  if (i >= 4) {
    list[i].style.display = "none";
  }
}
const btnMore = document.querySelector(".load-more");
btnMore.addEventListener("click", () => {
  for (let i = 0; i < list.length; i++) {
    list[i].style.display = "flex";
  }
  btnMore.style.display = "none";
});