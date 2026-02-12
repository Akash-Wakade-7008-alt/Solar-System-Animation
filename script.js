let container = document.querySelector(".container");
let smallOrbit = document.querySelector(".orbit.small");
let mediumOrbit = document.querySelector(".orbit.medium");
let largeOrbit = document.querySelector(".orbit.large");

let btn = document.getElementById("shapeBtn");
let shape = "circle";

function circle() {
  container.style.height = "720px";
  container.style.width = "720px";

  smallOrbit.style.height = "340px";
  smallOrbit.style.width = "340px";

  mediumOrbit.style.height = "480px";
  mediumOrbit.style.width = "480px";

  largeOrbit.style.height = "600px";
  largeOrbit.style.width = "600px";

  container.style.borderRadius = "50%";
  smallOrbit.style.borderRadius = "50%";
  mediumOrbit.style.borderRadius = "50%";
  largeOrbit.style.borderRadius = "50%";
}

function ellipse() {
  container.style.height = "700px";

  smallOrbit.style.height = "310px";
  smallOrbit.style.width = "180px";

  mediumOrbit.style.height = "450px";
  mediumOrbit.style.width = "370px";

  largeOrbit.style.height = "650px";
  largeOrbit.style.width = "550px";

  container.style.borderRadius = "50%";
  smallOrbit.style.borderRadius = "50%";
  mediumOrbit.style.borderRadius = "50%";
  largeOrbit.style.borderRadius = "50%";
}

function square() {
  container.style.borderRadius = "5%";
  smallOrbit.style.borderRadius = "5%";
  mediumOrbit.style.borderRadius = "5%";
  largeOrbit.style.borderRadius = "5%";

 container.style.height = "650px";
 container.style.height = "650px";

  smallOrbit.style.height = "230px";
  smallOrbit.style.width = "230px";

  mediumOrbit.style.height = "350px";
  mediumOrbit.style.width = "350px";

  largeOrbit.style.height = "550px";
  largeOrbit.style.width = "550px";



}

btn.onclick = function () {
  if (shape === "circle")
     {
     circle();
     shape = "sqaure";
     btn.textContent = "sqaure";
  } 
  else if (shape === "sqaure")
     {
     square();
     shape = "ellipse";
     btn.textContent = "Ellipse";
  } 
  else
     {
     ellipse();
     shape = "circle";
     btn.textContent = "circle";
  }
};
