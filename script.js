var swiper = new Swiper(".mySwiper-1",{
    slidesPerView:1,
    spaceBetween:30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true, 
    },
    navigation: {
        nextEl:"swiper-button-next",
        prevEl:"swiper-button-prev",

    }
});

var swiper = new Swiper(".mySwiper-2",{
    slidesPerView:3,
    spaceBetween:20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:"swiper-button-next",
        prevEl:"swiper-button-prev",
    },
    breakpoints : {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }

});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {

    input.addEventListener('change',function() {
        let id = input.value;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })

});

let menuToggle = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menuToggle.addEventListener('change', function() {
    if (this.checked) {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
});

let navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        let targetId = this.getAttribute('href').substring(1);
        let targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        if (menuToggle.checked) {
            menuToggle.checked = false;
            navbar.style.display = 'none';
        }
    });
});

window.addEventListener('resize', function() {
    swiper.update();
    swiper.update();
});