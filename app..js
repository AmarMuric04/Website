const btnMoving = document.querySelectorAll(".btn__heading");
const heading = document.querySelector(".heading__wrapper");
const headImg = document.querySelector(".head__img");
const hamMenu = document.querySelector(".hamburger");
const navBar = document.querySelector("nav");
const sideBar = document.querySelector(".sideBar");
const page = document.querySelector("#heading");

const randomInt = function (min, max) {
  return Math.floor(Math.random() * (min + max) + 1);
};

/*random background for buttons */
btnMoving.forEach(
  (e) =>
    (e.style.backgroundColor = `rgb(${randomInt(0, 255)},${randomInt(
      0,
      255
    )},${randomInt(0, 255)})`)
);

/*remove preset class */
setTimeout(() => {
  btnMoving.forEach((e) => e.classList.remove("positionX__shifted"));
  headImg.classList.remove("position-X__shifted");
  heading.classList.remove("positionY__shifted");
}, 1000);

navBar.addEventListener("click", function (e) {
  if (!e.target.classList.contains("hamburger")) return;
  sideBar.classList.add("transition");
  navBar.insertAdjacentElement("afterend", sideBar);
  sideBar.addEventListener("mouseleave", function () {
    sideBar.remove();
  });
});
