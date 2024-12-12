
addEventListener("DOMContentLoaded", () => scroll_animation())

const body = document.querySelector('body');

bo

function scroll_animation() {
    // Get the current scroll position
    if(body.children.isIntersecting) {
        body.children.setAttribute("animation", "slide_right 1s ease-out forwards")
        console.log("L'élément est visible")
    }
    else{
        console.log("L'élément est visible")
    }
}