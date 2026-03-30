const display = document.getElementById("display");

// Numbers
document.querySelectorAll('.num').forEach(btn => {
    btn.addEventListener('click', () => {
        display.value += btn.innerText;
    });
});

// Operators
document.querySelectorAll('.op').forEach(btn => {
    btn.addEventListener('click', () => {
        display.value += btn.innerText;
    });
});

// Clear
document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
});

// Backspace
document.getElementById("back").addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

// Equal
document.getElementById("equal").addEventListener("click", () => {    
        display.value = eval(display.value);
});

// Square root
document.getElementById("sqrt").addEventListener("click", () => {
    display.value = Math.sqrt(display.value);
});

// Cube root
document.getElementById("cbrt").addEventListener("click", () => {
    display.value = Math.cbrt(display.value);
});

// Power
document.getElementById("power").addEventListener("click", () => {
    display.value += "**";
});