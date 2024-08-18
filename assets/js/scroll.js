

function scrollProgress () {
    let scrollTop = (document.documentElement.scrollTop||window.scrollY||window.pageYOffset) + innerHeight/3;

    //모션섹션 움직임
    document.querySelectorAll(".motionType__wrap").forEach(el => {
        scrollTop > el.offsetTop ? el.classList.add("show") : el.classList.remove("show");
    });

    //슬라이더섹션 움직임
    document.querySelectorAll(".slider__wrap").forEach(el => {
        scrollTop > el.offsetTop ? el.classList.add("show") : el.classList.remove("show");
    });


}

window.addEventListener("scroll", scrollProgress);