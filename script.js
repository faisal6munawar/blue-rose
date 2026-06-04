const bar = document.getElementById("loader-bar");
const loadingScreen = document.getElementById("loading-screen");
const layer2 = document.getElementById("layer2");
const layer3 = document.getElementById("layer3");
const layer4 = document.getElementById("layer4");
const layer5 = document.getElementById("layer5");

let progress = 0;
let clickCount = 0;
let orangeClicks = 0;
let sorryClicks = 0;

/* 🌹 LOADING SCREEN */
const interval = setInterval(() => {
    progress++;
    bar.style.width = progress + "%";

    if(progress >= 100){
        clearInterval(interval);
        setTimeout(() => {
            loadingScreen.classList.add("hidden");
            layer2.classList.remove("hidden");
        }, 500);
    }
}, 35);


/* 🎮 LAYER 2 BUTTON CHAOS */
document.addEventListener("click", function(e){
    if(e.target.id === "nextBtn"){
        clickCount++;
        const btn = e.target;

        if(clickCount === 1){
            btn.innerText = "Click me again 😏";
            btn.style.transform = "scale(1.15)";
        }
        else if(clickCount === 2){
            btn.innerText = "Stop touching me 😤";
            btn.style.transform = "scale(1.3)";
        }
        else if(clickCount === 3){
            btn.innerText = "BRO STOP 😭";
            btn.style.transform = "scale(1.45)";
        }
        else if(clickCount >= 4){
            btn.innerText = "ok fine... go 😔➡️";
            btn.style.transform = "scale(1.6)";

            setTimeout(() => {
                layer2.classList.add("hidden");
                layer3.classList.remove("hidden");
            }, 800);
        }
    }
});


/* 🍊 LAYER 3 ORANGE BUTTON */
document.addEventListener("click", function(e){
    const btn = document.getElementById("orangeBtn");
    if(!btn) return;

    if(e.target.id === "orangeBtn" || e.target.closest("#orangeBtn")){
        orangeClicks++;
        const cloud = btn.querySelector(".cloudText");

        if(orangeClicks === 1){
            btn.style.transform = "scale(1.2)";
            cloud.innerText = "emm barhy sangtry 🍊";
        }
        else if(orangeClicks === 2){
            btn.style.transform = "scale(1.4)";
            cloud.innerText = "emm aur barhy sangtry 🍊🍊";
        }
        else if(orangeClicks === 3){
            btn.style.transform = "scale(1.6)";
            cloud.innerText = "ary wah itny barhy 😳🍊🍊🍊";
        }
        else if(orangeClicks >= 4){
            btn.style.transform = "scale(1.8)";
            cloud.innerText = "ok bas... ab next layer 😭➡️";

            setTimeout(() => {
                layer3.classList.add("hidden");
                layer4.classList.remove("hidden");
            }, 900);
        }
    }
});


/* 💔 LAYER 4 SORRY BUTTON */
document.addEventListener("click", function(e){
    const btn = document.getElementById("sorryBtn");
    if(!btn) return;

    if(e.target.id === "sorryBtn"){
        sorryClicks++;

        if(sorryClicks === 1){
            btn.innerText = "haan haan kar diya 😌";
            btn.style.transform = "scale(1.05)";
        }
        else if(sorryClicks === 2){
            btn.innerText = "haan baba kar diya 😭💙";
            btn.style.transform = "scale(1.1)";
        }
        else if(sorryClicks >= 3){
            btn.innerText = "💙 chalo maaf kiya";

            setTimeout(() => {
                layer4.classList.add("hidden");
                layer5.classList.remove("hidden");
            }, 900);
        }
    }
});
