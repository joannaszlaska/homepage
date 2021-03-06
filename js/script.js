{
    const welcome = () => {
        console.log("Cześć wszystkim!")
    }

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".js-body");
        const main__span = document.querySelector(".main__span");

        body.classList.toggle("body__dark");
        main__span.innerText = body.classList.contains("body__dark") ? "jasny" : "ciemny";
    }


    const onRemoveClick = () => { 
        let main__img = document.querySelector(".js-image");
        main__img.remove();
       
    }


    const init = () => {

        let main__button = document.querySelector(".js-main__button");
        main__button.addEventListener("click", onChangeBackgroundClick);
        let main__buttonRemove = document.querySelector(".js-main__buttonRemove");
        main__buttonRemove.addEventListener("click", onRemoveClick);
    }



    welcome();
    init();


}