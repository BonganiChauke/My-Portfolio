//nav bar functionality
const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i]?.addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");

  });

}

//header functionality
const header = document.querySelector("[data-header]");

window?.addEventListener("scroll", function () {

  window.scrollY >= 20 ? header?.classList.add("active") : header?.classList.remove("active");

});

// resume section buttons
const resumeBtns = document.querySelectorAll('.resume-btn');

// event function for resume buttons
resumeBtns.forEach((btn, idx) => {

  //event listener
  btn.addEventListener('click', () => {
    resumeBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');
  })

});