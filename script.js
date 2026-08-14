function showLove(){

document.getElementById("loveMessage").innerHTML=

"❤️ You are my favorite notification, my safest place and my happiest memory ❤️";

}

const startDate =
new Date("2025-01-01");

function updateCounter(){

const now = new Date();

const diff = now - startDate;

const days =
Math.floor(
diff/(1000*60*60*24)
);

document.getElementById("timer").innerHTML=
"❤️ Together For " + days + " Days ❤️";

}

updateCounter();

setInterval(updateCounter,1000);



function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=
Math.random()*100+"vw";

heart.style.fontSize=
Math.random()*25+15+"px";

heart.style.animationDuration=
Math.random()*5+5+"s";

document.querySelector(".hearts")
.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,500);
