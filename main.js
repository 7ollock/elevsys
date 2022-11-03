let qrToggle = document.querySelector(".qr-toggle");
let qrClose = document.querySelector(".qr-close");
let overlay = document.getElementById("overlay");

qrToggle.addEventListener("click", function () {
  document.getElementById("overlay").classList.add("is-visible");
  document.getElementById("qr-modal").classList.add("is-visible");
});

qrClose.addEventListener("click", function () {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("qr-modal").classList.remove("is-visible");
});

overlay.addEventListener("click", function () {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("qr-modal").classList.remove("is-visible");
});

document.querySelectorAll("#detail-tabs>li").forEach((el, index) =>
  el.addEventListener("click", () => {
    document
      .querySelector("#detail-container>.active-detail")
      .classList.remove("active-detail");
    document
      .querySelector(`#detail-container>:nth-child(${index + 1})`)
      .classList.add("active-detail");
  })
);
