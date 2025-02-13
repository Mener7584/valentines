"use strict";

function itemInViewport(value, scrollOffset) {
    const item = value.getBoundingClientRect();
    const offset = parseFloat(scrollOffset) || 0;

    return item.top <= window.innerHeight * (1 - offset) && item.bottom >= window.innerHeight * offset;
}

const elements = document.querySelectorAll("[data-animation]");

function elementAnimation() {
    elements.forEach((element) => {
        if (itemInViewport(element, element.getAttribute("data-animation-offset"))) {
            element.classList.add("inViewport");
        } else if (element.hasAttribute("data-animation-repeat")) {
            element.classList.remove("inViewport");
        }
    });
}

elementAnimation();

function onScrollOrResize() {
    requestAnimationFrame(elementAnimation);
}

window.addEventListener("scroll", onScrollOrResize);
window.addEventListener("resize", onScrollOrResize);
