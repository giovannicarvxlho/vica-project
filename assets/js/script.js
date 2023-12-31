'use strict'

/* add event listener on multiple elements */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}


/* MOBILE NAV */

const navbar = document.querySelector("[data-navbar]");
const navbarTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const togglerNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElements(navbarTogglers, "click", togglerNav);

const closeNav = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElements(overlay, "click", closeNav);

/* HEADER  & back top btn */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    header.classList[this.window.scrollY > 50 ? "add" : "remove"]("active");
    backTopBtn.classList[this.window.scrollY > 50 ? "add" : "remove"]("active");
});




document.addEventListener("DOMContentLoaded", function () {
    var btns = document.querySelectorAll('.card-btn');
    var titles = document.querySelectorAll('.h3.title');
    var popup = document.getElementById('imagemPopup');
    var popupImage = document.getElementById('imagemPopUp');
    var modalBackgroundText = document.getElementById('modalBackgroundText');

    btns.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.stopPropagation();
            var imagePath = btn.getAttribute('data-image');
            popupImage.src = imagePath;
            popup.style.display = 'block';
            modalBackgroundText.style.display = 'block';
        });
    });

    titles.forEach(function (title) {
        title.addEventListener('click', function (event) {
            event.stopPropagation();
            var imagePath = title.getAttribute('data-image');
            popupImage.src = imagePath;
            popup.style.display = 'block';
            modalBackgroundText.style.display = 'block';
        });
    });

    document.addEventListener('click', function (event) {
        if (event.target !== popup && !popup.contains(event.target)) {
            popup.style.display = 'none';
            modalBackgroundText.style.display = 'none';
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    var btns = document.querySelectorAll('.btn');
    var popup = document.getElementById('textPopup');
    var popupText = document.getElementById('textPopupContent');
    var modalBackground = document.getElementById('modalBackground');

    btns.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.stopPropagation();
            var textContent = "Carrinho em desenvolvimento";
            popupText.textContent = textContent;
            popup.style.display = 'block';
            modalBackground.style.display = 'block';
        });
    });

    document.addEventListener('click', function (event) {
        if (event.target !== popup && !popup.contains(event.target)) {
            popup.style.display = 'none';
            modalBackground.style.display = 'none';
        }
    });
});