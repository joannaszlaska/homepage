console.log("cześć")
let main__buttonRemove = document.querySelector(".js-main__buttonRemove");
let main__img = document.querySelector(".js-main__img");
let main__button = document.querySelector(".js-main__button");
let body__dark = document.querySelector(".body__dark");
let main__span = document.querySelector(".js-main__span");

main__buttonRemove.addEventListener("click", () => {
    main__img.remove();

});
main__button.addEventListener("click", () => {
    body.classList.toggle("body__dark");

    main__span.innerText = body.classList.contains("body__dark") ? "jasny" : "ciemny";

});


