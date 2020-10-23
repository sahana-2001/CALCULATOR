const screen1 = document.querySelector(".screen");
const btn = document.querySelectorAll(".btn");
const equalbtn = document.querySelector(".btn-equal");
const cancelbtn = document.querySelector(".btn-cancel");





for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener("click", function () {
        let number = btn[i].getAttribute('data-btn');
        screen1.value += number;

    });

    
}
equalbtn.addEventListener("click", function () {
    if (screen1.value === '') {
        alert("enter valid input ")
    }
    else {
        let value1 = eval(screen1.value);

        screen1.value = value1;
    }



})

cancelbtn.addEventListener("click", function () {
    screen1.value = '';




})
