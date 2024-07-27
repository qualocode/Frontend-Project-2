// -------- H A M B U R G E R   M E N U --------

let openBtn = document.querySelector(".bx-menu");
let closeBtn = document.querySelector(".bx-x");

openBtn.addEventListener("click", function () {
  let menu = document.querySelector(".navbar .menu");
  let layer = document.querySelector(".navbar .layer");
  menu.classList.add("active");
  layer.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  let menu = document.querySelector(".navbar .menu");
  let layer = document.querySelector(".navbar .layer");
  menu.classList.remove("active");
  layer.classList.remove("active");
});

//------------ Scroll Reveal ------------

//--------- H E A D E R ---------

let headerH1 = document.querySelector("#header .head-content h1");
let headerP = document.querySelector("#header .head-content p");

function animate_1(elm) {
  ScrollReveal().reveal(elm, {
    distance: "30%",
    origin: "bottom",
    opacity: 0,
    duration: 1000,
  });
}

animate_1(headerH1);
animate_1(headerP);

//-------- M A I N --------

//----- Section # 1 -----

let sct1Head = document.querySelector(".sct-one .sct-head");
let sct1Cards = document.querySelectorAll(".sct-one .sct-gallery .cards");

function animate_2(elm, dis, dur, del) {
  ScrollReveal().reveal(elm, {
    distance: `${dis}%`,
    origin: "bottom",
    opacity: 0,
    duration: dur,
    delay: del,
  });
}

animate_2(sct1Head, 30, 1000, 200);
animate_2(sct1Cards[0], 10, 1500, 0);
animate_2(sct1Cards[1], 10, 1500, 200);
animate_2(sct1Cards[2], 10, 1500, 400);

//----- Section # 2 -----

let sct2 = document.querySelector("#main .sct-two");
let sct2H2 = document.querySelector(".sct-two .sect2-content h2");
let sct2P = document.querySelector(".sct-two .sect2-content p");

ScrollReveal().reveal(sct2, {
  distance: "5%",
  origin: "bottom",
  opacity: 0,
  duration: 1500,
  delay: 0,
});

// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------

ScrollReveal().reveal(sct2H2, {
  distance: "10%",
  origin: "left",
  opacity: 0,
  duration: 1500,
  delay: 100,
});

ScrollReveal().reveal(sct2P, {
  distance: "10%",
  origin: "right",
  opacity: 0,
  duration: 1500,
  delay: 150,
});

//----- Section # 3 -----

let sct3 = document.querySelector("#main .sct-three");

ScrollReveal().reveal(sct3, {
  distance: "5%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
  delay: 150,
});

//----- Section # 4 -----

let sct4 = document.querySelector(".sct-four .imgGal1");
let sct4Cards = document.querySelectorAll(".sct-four .imgGal2 .imgCards");

console.log(sct4Cards);

ScrollReveal().reveal(sct4, {
  opacity: 0,
  duration: 1500,
});

ScrollReveal().reveal(sct4Cards[0], {
  distance: "10%",
  origin: "left",
  opacity: 0,
  duration: 2000,
});

ScrollReveal().reveal(sct4Cards[1], {
  distance: "10%",
  origin: "right",
  opacity: 0,
  duration: 2000,
  delay: 150,
});

//----- Section # 5 -----

let sct5 = document.querySelector("#main .sct-five .sct5-content");
let sct5ImgCards = document.querySelectorAll(".sct-five .sct5-gallery .cards");

ScrollReveal().reveal(sct5, {
  distance: "5%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
  delay: 150,
});

ScrollReveal().reveal(sct5ImgCards[0], {
  distance: "10%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
  delay: 150,
});

ScrollReveal().reveal(sct5ImgCards[1], {
  distance: "10%",
  origin: "top",
  opacity: 0,
  duration: 2000,
  delay: 350,
});

ScrollReveal().reveal(sct5ImgCards[2], {
  distance: "10%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
  delay: 150,
});

ScrollReveal().reveal(sct5ImgCards[3], {
  distance: "10%",
  origin: "top",
  opacity: 0,
  duration: 2000,
  delay: 350,
});
