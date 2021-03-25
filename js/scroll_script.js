"use strict";

window.addEventListener("DOMContentLoaded", init);
// forside splash animation

gsap.registerPlugin(ScrollTrigger);

async function init() {
    logoAni();
    introAni();
    introAni2();
    typographyAni();
    candleAni();
    zodiacAni();
    ctaAni();
    ctaAni2();
    document.querySelector(".logo").addEventListener("click", clickHome);

    // Henter første svg til animation
    const svg_container = document.querySelector(".svg_container");

    let responseFirst = await fetch("images/handwritten.svg");
    let svgDataFirst = await responseFirst.text(); // Her laver vi responsen til text i stedet.

    svg_container.innerHTML = svgDataFirst;

    // Henter anden svg til animation
    let responseSecond = await fetch("images/handwritten_svg2.svg");
    let mySvgDataSecond = await responseSecond.text();
    document.querySelector("#makeyourown").innerHTML = mySvgDataSecond;

    // Henter tredje svg til animation
    let responseThird = await fetch("images/handwritten3.svg");
    let mySvgDataThird = await responseThird.text();
    document.querySelector("#handmadescents").innerHTML = mySvgDataThird;

    handwrittenAni2();
    handwrittenAni3();

    console.log("SVG file loaded");

    handwrittenAni();
}

function clickHome() {
    window.location.href = "landing.html";
}

function logoAni() {
    gsap.from(".logo_circle", { yoyo: true, rotation: '+=360', opacity: 0, repeat: -1, scale: 0, transformOrigin: '50% 50%', duration: 5, x: -10, y: 4 })
}

function introAni() {
    const timeline = gsap.timeline({ repeat: 0 });
    timeline.from(".intro_text", { y: 100, opacity: 0, duration: 2 });
    // Lav animation for handwritten text

    gsap.to("#zodiac_2", { yoyo: true, rotate: 50, repeat: -1, duration: 15, x: -10, y: 4 });
    gsap.to("#zodiac_3", { yoyo: true, rotate: 100, repeat: -1, duration: 12, x: -10, y: 4 });
    gsap.to("#zodiac_4", { yoyo: true, rotate: 200, repeat: -1, duration: 18, x: -10, y: 4 });
    gsap.to("#zodiac_5", { yoyo: true, rotate: 200, repeat: -1, duration: 7, x: -10, y: 4 });

}

function introAni2() {
    const timeline = gsap.timeline({ repeat: 0 });
    timeline.from(".intro_image", { opacity: 0, duration: 4 });
    // Lav animation for handwritten text
}

function typographyAni() {
    gsap.from(".typo_left", {
        scrollTrigger: {
            trigger: ".typography",
            toggleActions: "restart pause resume reset",
        },
        x: -800,
        duration: 3,
    });

    gsap.from(".typo_right", {
        scrollTrigger: {
            trigger: ".typography",
            toggleActions: "restart pause resume reset",
        },
        x: 800,
        duration: 3,
    });
    gsap.from(".typo_subheading", {
        scrollTrigger: {
            trigger: ".typography",
            toggleActions: "restart pause resume reset",
        },
        y: 100, opacity: 0, duration: 2,
    });
}

function candleAni() {
    // Animation på tekst
    gsap.from(".candle_text_inner", {
        scrollTrigger: {
            trigger: "#candle",
            toggleActions: "restart pause resume reset",
        },
        y: 100, opacity: 0, duration: 3,

    });

    // Animation på boks
    gsap.from("#box_candles", {
        scrollTrigger: {
            trigger: "#candle",
            toggleActions: "restart pause resume reset",
        },
        y: 100, opacity: 0, duration: 3,
    });
    // Animation på lys
    gsap.from("#object_1", {
        scrollTrigger: {
            trigger: "#candle",
            toggleActions: "restart pause resume reset",
        },
        rotation: 150, duration: 10, yoyo: true,
    });
    gsap.from("#object_4", {
        scrollTrigger: {
            trigger: "#candle",
            toggleActions: "restart pause resume reset",
        },
        rotation: 360, duration: 14, yoyo: true,
    });
    gsap.from("#object_3", {
        scrollTrigger: {
            trigger: "#candle",
            toggleActions: "restart pause resume reset",
        },
        opacity: 0.10, duration: 4, yoyo: true,
    });
    gsap.from("#object_5", {
        scrollTrigger: {
            trigger: "#candle",
            toggleActions: "restart pause resume reset",
        },
        opacity: 0.10, duration: 2, yoyo: true,
    });
    gsap.from("#object_6", {
        scrollTrigger: {
            trigger: "#candle",
            toggleActions: "restart pause resume reset",
        },
        rotation: 200, duration: 14, yoyo: true,
    });
    gsap.from("#object_2", {
        scrollTrigger: {
            trigger: "#candle",
            toggleActions: "restart pause resume reset",
        },
        opacity: 0.10, duration: 6, yoyo: true,
    });
    gsap.from("#object_7", {
        scrollTrigger: {
            trigger: "#candle",
            toggleActions: "restart pause resume reset",
        },
        opacity: 0.10, duration: 2, yoyo: true,
    });
}

function zodiacAni() {
    gsap.from(".zodiac_row", {
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: ".zodiac_row",
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play pause resume reset"
        }
    });
}

function ctaAni() {
    gsap.from(".cta_text", {
        scrollTrigger: {
            trigger: ".cta_inner",
            toggleActions: "restart pause resume reset",
        },
        y: 100, opacity: 0, duration: 3,
    });
    // Lav animation for handwritten text
    gsap.to("#zodiac_2-3", { yoyo: true, rotate: 50, repeat: -1, duration: 15, x: -10, y: 4 });
    gsap.to("#zodiac_3-3", { yoyo: true, rotate: 100, repeat: -1, duration: 12, x: -10, y: 4 });
    gsap.to("#zodiac_4-3", { yoyo: true, rotate: 200, repeat: -1, duration: 18, x: -10, y: 4 });
    gsap.to("#zodiac_5-3", { yoyo: true, rotate: 200, repeat: -1, duration: 7, x: -10, y: 4 });
}

function ctaAni2() {
    const timeline = gsap.timeline({ repeat: 0 });
    timeline.from(".cta_image", { opacity: 0, duration: 4 });
    // Lav animation for handwritten text
}

function handwrittenAni() {
    const masks = ['s', 'c', 'e', 'n', 't-line', 't-other', 'ee', 'd', 'f', 'o', 'r', 'y', 'oo', 'u']

    masks.forEach((mask, index, el) => {
        const id = `#mask-${mask}`
        let path = document.querySelector(id)
        const length = path.getTotalLength()
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
    })

}

function handwrittenAni2() {
    const masks2 = ['m', 'ak-ak', 'ak-line', 'e', 'y', 'o', 'u', 'r', 'oo', 'w', 'n']


    masks2.forEach((mask2, index, el) => {
        const id = `#mask2-${mask2}`
        let path = document.querySelector(id)
        const length = path.getTotalLength()
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
    })



}

function handwrittenAni3() {
    const masks3 = ['h', 'an', 'n', 'd', 'm', 'a', 'dd', 'e', 's', 'c', 'ee', 'n', 't-t', 't-line', 'ss']


    masks3.forEach((mask3, index, el) => {
        const id = `#mask3-${mask3}`
        let path = document.querySelector(id)
        const length = path.getTotalLength()
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
    })

}