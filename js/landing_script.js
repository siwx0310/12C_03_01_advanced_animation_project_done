"use strict";

window.addEventListener("DOMContentLoaded", init);
// forside splash animation

async function init() {
    logoAni();
    starAni();
    splashAni();
    document.querySelector(".logo").addEventListener("click", clickHome);
}

function clickHome() {
    window.location.href = "landing.html";
}

function logoAni() {
    gsap.from(".logo_circle", { yoyo: true, rotation: '+=360', opacity: 0, repeat: -1, scale: 0, transformOrigin: '50% 50%', duration: 5, x: -10, y: 4 })
}

function starAni() {
    console.log("start anima");

    gsap.to("#zodiac_1", { yoyo: true, rotate: 50, repeat: -1, duration: 9, x: -10, y: 4 });
    gsap.to("#zodiac_2", { yoyo: true, rotate: 100, repeat: -1, duration: 8, x: -10, y: 4 });
    gsap.to("#zodiac_3", { yoyo: true, rotate: 100, repeat: -1, duration: 12, x: -10, y: 4 });
    gsap.to("#zodiac_4", { yoyo: true, rotate: 100, repeat: -1, duration: 18, x: -10, y: 4 });
    gsap.to("#zodiac_5", { yoyo: true, rotate: 100, repeat: -1, duration: 7, x: -10, y: 4 });
}

function splashAni() {
    const timeline = gsap.timeline({ repeat: 0 });
    timeline.from(".candle_trio", { delay: 0.5, opacity: 0, duration: 4 });
    timeline.from(".content", { y: 200, opacity: 0, duration: 3 }, "-=5");

}
