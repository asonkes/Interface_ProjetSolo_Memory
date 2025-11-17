export function initBurger() {
    const burger_icon = document.querySelector(".burger_icon");
    console.log(burger_icon); 

    const nav = document.querySelector(".nav");

    const span1 = document.getElementById("span1");
    const span2 = document.getElementById("span2");
    const span3 = document.getElementById("span3");

    if (!burger_icon) {
        return;
    }

    burger_icon.addEventListener("click", (event) => {
        event.stopPropagation();
        nav.classList.toggle("active");

        span1.classList.toggle("active");
        span2.classList.toggle("active");
        span3.classList.toggle("active");
        
    });

    document.addEventListener("click", () => {
        nav.classList.remove('active');

        span1.classList.remove('active');
        span2.classList.remove('active');
        span3.classList.remove('active');

    })
}