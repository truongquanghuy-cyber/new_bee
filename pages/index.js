const username = document.getElementById("username");
const password = document.getElementById("password");
const eyeL = document.querySelector(".eyeball-l");
const eyeR = document.querySelector(".eyeball-r");
const handL = document.querySelector(".hand-l");
const handR = document.querySelector(".hand-r");

const normalEleStyle = () => {
    eyeL.style.cssText = `
        left: 0.6em;
        top: 0.6em;
    `;
    eyeR.style.cssText = `
        right: 0.6em;
        top:0.6em;  
    `;    
};

const normalHandStyle = () => {
    handL.style.cssText = `
        height: 2.18em;
        top: 8.4em;
        left: 7.5em;
        transform: rotate(0deg);
    `;
    handR.style.cssText = `
        height: 2.81em;
        top: 8.4em;
        right: 7.5em;
        transform: rotate(0deg);
    `;
};

username.addEventListener("focus", () => {
    eyeL.style.cssText = `
        left: 0.75em;
        top: 1.12em;
    `;
    eyeR.style.cssText = `
        right: 0.75em;
        top: 1.12em;
    `;
    normalHandStyle();
});

password.addEventListener("focus", () => {
    handL.style.cssText = `
        height: 6.56em;
        top: 3.87em;
        left: 14.33em;
        transform: rotate(-155deg);
    `;
    handR.style.cssText = `
         height: 6.56em;
        top: 3.87em;
        left: 14.33em;
        transform: rotate(155deg);
    `;
    normalEleStyle();
});

document.addEventListener("click", e => {
    let clickedElem = e.target;
    if (clickedElem != username && clickedElem != password) {
        normalEleStyle();
        normalHandStyle();
    }
});
