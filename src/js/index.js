"use strict"

import "./language/index.js";


// async function fetchProducts(url) {
// 	return url
// }


// fetchProducts("text").then((data) => console.log(data)
// )
export const loading = document.querySelector(".loading");






const nav = document.querySelector(".nav");

const burger = document.querySelector(".burger");

burger.addEventListener("click", function () {

	nav.classList.toggle("nav_active");

	burger.classList.toggle("burger_active");
})

export function slider(elem) {
	const slider = document.querySelector(`[data-slider="${elem}"]`);

	console.log("slider", slider);


	const sliderList = slider.querySelector(".slider__list");

	const sliderSlides = slider?.querySelectorAll(".slider__slide");

	const sliderButtonPre = slider.querySelector(".slider__button_prev");
	console.log("slider", sliderButtonPre);



	const sliderButtonnext = slider.querySelector(".slider__button_next");
	console.log("slider", sliderButtonnext);
	console.log("sliderSlides", sliderSlides);


	sliderSlides.forEach(slide => {
		console.log("slide", slide);

		sliderButtonPre.addEventListener("click", () => {
			console.log("click pre");

			sliderList.scrollBy({
				left: -slide.offsetWidth,
				behavior: "smooth",
			});
		});


		sliderButtonnext.addEventListener("click", () => {
			console.log("click next");

			sliderList.scrollBy({
				left: slide.offsetWidth,
				behavior: "smooth",
			});

			if (Math.floor(sliderList.scrollLeft) === sliderList.scrollWidth - sliderList.offsetWidth) {
				sliderList.scrollLeft = 0;
			}
		});
	});

	return slider;
};


const button = document.querySelector(".contacts__button");

const popap = document.querySelector(".popap")

button.addEventListener("click", () => popupToggle(true))
window.addEventListener("click", event => {

	if (event.target === popap) {
		popupToggle();

	}
});



const popaps = document.querySelector(".popap__button");
const buttton = document.querySelector(".form__buttton");
buttton.addEventListener("click", () => {
	popupToggle();
});

function popupToggle(toggle = false) {
	popap.classList.toggle("popap_open");
	document.body.style.paddingRight = toggle ? window.innerWidth - document.body.offsetWidth + "px" : 0;
	popap.style.paddingRight = toggle ? window.innerWidth - document.body.offsetWidth + "px" : 0;
	document.body.style.overflow = toggle ? "hidden" : "auto";
	Array.from(document.body.children).forEach(element => {
		(toggle ? element : popap).setAttribute("inert", "");
		(toggle ? popap : element).removeAttribute("inert");

	});
};

const closed = document.querySelector(".popap__button-close");
closed.addEventListener("click", () => popupToggle());

function scrollToGo() {
	const links = document.querySelectorAll(".nav__link");

	links.forEach(link => {

		link.addEventListener("click", function (event) {
			event.preventDefault();
			const gotoid = link.getAttribute("href");

			const findid = document.querySelector(gotoid)?.offsetTop;


			window.scrollTo({
				top: findid,
				left: 0,
				behavior: "smooth",
			})


		});

	});
}
scrollToGo();


