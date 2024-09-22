import { langList } from "./langlist.js";

const buttonru = document.querySelectorAll(".language__button_ru");
const buttoneng = document.querySelectorAll(".language__button_eng");

let curent = localStorage.getItem("language") || window.location.hash.slice(1, 3) || window.navigator.language.slice(0, 2) || "en";


function change(elem) {
	document.querySelectorAll("[data-lang]").forEach(item => {
		const dataLang = item.dataset.lang;
		const index = dataLang.indexOf("-");
		const prop = dataLang.slice(0, index);
		const value = dataLang.slice(index + 1);
		item.textContent = langList[prop]?.[value]?.[elem]
	})
}

change(curent)

buttonru.forEach((button, index) => {
	curent === "ru" && button.classList.add('language__button_active')

	button.addEventListener('click', () => {
		buttonru[index].classList.remove("language__button_active")
		button.classList.add('language__button_active')
		localStorage.setItem('language', 'ru');
		change("ru")
	})
})

buttoneng.forEach((button, index) => {

	curent === "en" && button.classList.add('language__button_active')

	button.addEventListener('click', () => {
		buttoneng[index].classList.remove("language__button_active")
		button.classList.add('language__button_active')
		localStorage.setItem('language', 'en');
		change("en")
	})
})

function rating() {
	document.querySelectorAll("[data-rating]").forEach(item => {
		const value = item.dataset.rating
		item.querySelectorAll("path").forEach((path, index) => {
			path.style.fill = index < value ? "#070707" : "#E5E5E5";

		})
	})
}
