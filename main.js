const hamburgerBtn = document.querySelector("#hamburger-button");
const menu = document.querySelector("#hamburgerMenu");
const navLinks = document.querySelector("#navLinks");

hamburgerBtn.addEventListener("click", () => {
    menu.classList.toggle("scale-0");
});

// const header = document.querySelector("header");
// let lastScrollY = window.scrollY;

// window.addEventListener("scroll", () =>{
//     if(lastScrollY < window.scrollY){
//         header.classList.add("hidden");
//     } else{
//         header.classList.remove("hidden");
//     }
//     lastScrollY = window.scrollY;
// });

function updateList() {
	const titles = [...document.querySelectorAll('h1')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".active-tab").forEach(c => c.classList.remove("active-tab"));
	
	menu.querySelectorAll("a")[[...document.querySelectorAll('h1')].indexOf(titles[0])].classList.add("active-tab");

    navLinks.querySelectorAll("a")[[...document.querySelectorAll('h1')].indexOf(titles[0])].classList.add("active-tab");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})