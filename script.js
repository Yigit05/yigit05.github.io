const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed");
const text = "DENEME YAZISI DENEME YAZISI";
let index = 1;
let speed = 300 / speedElement.ariaValueMax;

const writeTExt = () => {
    textElement.innerHTML = text.slice(0, index);
    index++;
    if (index > text.length) index = 1;
    setTimeout(writeTExt, speed);
}
writeTExt();

speedElement.addEventListener("input",(e) => (speed = 300 / e.target.value));

