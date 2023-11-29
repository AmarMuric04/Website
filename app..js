const btnMoving = document.querySelectorAll(".btn__heading");
const heading = document.querySelector(".heading__wrapper");
const headImg = document.querySelector(".head__img");
const hamMenu = document.querySelector(".hamburger");
const navBar = document.querySelector("nav");
const sideBar = document.querySelector(".sideBar");
const page = document.querySelector("#heading");
const cards = document.querySelectorAll(".card");
const section1 = document.querySelector("#section1");
document.body.style.overflowY = "hidden";

const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

/*random background for buttons */
btnMoving.forEach(
  (e) => (e.style.backgroundColor = `rgb(255,${randomInt(80, 190)},0)`)
);
console.log(randomInt(80, 120));
/*remove preset class */
setTimeout(() => {
  btnMoving.forEach((e) => e.classList.remove("positionX__shifted"));
  headImg.classList.remove("position-X__shifted");
  heading.classList.remove("positionY__shifted");
}, 1000);
setTimeout(() => {
  document.body.style.overflowY = "auto";
}, 3500);

navBar.addEventListener("click", function (e) {
  if (!e.target.classList.contains("hamburger")) return;
  sideBar.classList.add("transition");
  navBar.insertAdjacentElement("afterend", sideBar);
  sideBar.addEventListener("mouseleave", function () {
    sideBar.remove();
  });
});

document.querySelector("span").addEventListener("click", () => {
  confetti();
});

const options = {
  root: null,
  threshold: 0.5,
  // rootMargin: "0px",
};

const slideCards = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.firstElementChild.firstElementChild.classList.remove(
    "positionX__shifted"
  );
  entry.target.firstElementChild.firstElementChild.nextElementSibling.classList.remove(
    "positionX__shifted"
  );
  entry.target.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.classList.remove(
    "position-X__shifted"
  );
  entry.target.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
    "position-X__shifted"
  );
  observer.unobserve(section1);
};

const observer = new IntersectionObserver(slideCards, options);

observer.observe(section1);

// window.onscroll = function () {
//   console.log(
//     "top: " +
//       document.documentElement.scrollTop +
//       " " +
//       "left: " +
//       section1.getBoundingClientRect().top
//   );
//   console.log(section1.getBoundingClientRect());
// };
