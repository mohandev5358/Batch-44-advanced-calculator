const display = document.getElementById("display");

document.querySelectorAll('.num').forEach(btn => {
    btn.addEventListener('click', () => {
        display.value += btn.innerText;
    });
});

document.querySelectorAll('.op').forEach(btn => {
    btn.addEventListener('click', () => {
        display.value += btn.innerText;
    });
});

document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
});

document.getElementById("back").addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

document.getElementById("equal").addEventListener("click", () => {    
        display.value = eval(display.value);
});

document.getElementById("sqrt").addEventListener("click", () => {
    display.value = Math.sqrt(display.value);
});

document.getElementById("cbrt").addEventListener("click", () => {
    display.value = Math.cbrt(display.value);
});

document.getElementById("power").addEventListener("click", () => {
    display.value += "**";
});