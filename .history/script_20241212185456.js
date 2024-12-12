
addEventListener(D)

const body = document.querySelector('body');
function scroll_animation() {
    // Get the current scroll position
    if(body.children.isIntersecting) {
        console.log("L'élément est visible")
    }
    else{
        body.children.setAttribute("animation", "slide_right 1s ease-out forwards")
    }
}