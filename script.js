let container = document.querySelector(".container");

let smallOrbit = document.querySelector(".orbit.small");
let mediumOrbit = document.querySelector(".orbit.medium");
let largeOrbit = document.querySelector(".orbit.large");

function circle() {
  container.style.height = "720px";
  container.style.width ="720px"

  smallOrbit.style.height = "340px";
  smallOrbit.style.width = "340px";

  mediumOrbit.style.height = "480px";
  mediumOrbit.style.width = "480px";

  largeOrbit.style.height = "600px";
  largeOrbit.style.width = "600px";
}

function ellipse() {
  container.style.height = "700px";

  smallOrbit.style.height = "310px";
  smallOrbit.style.width = "180px";

  mediumOrbit.style.height = "450px";
  mediumOrbit.style.width = "370px";

  largeOrbit.style.height = "650px";
  largeOrbit.style.width = "550px";
}
