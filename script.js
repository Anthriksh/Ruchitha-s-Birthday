/* ====================================== */
/* CHEMPA PAGLUTHADHI ATTACK 😭 */
/* ====================================== */

function showChempaAttack(){

const existing =
document.getElementById("chempaAttack");

if(existing){
existing.remove();
}

const attack = document.createElement("div");

attack.id = "chempaAttack";

attack.innerHTML = `
<div class="attackText">
CHEMPA PAGLUTHADHI 😡
</div>

<img src="images/chempa.jpg" alt="chempa pagluthdhi">
`;

document.body.appendChild(attack);

/* REMOVE */

setTimeout(()=>{

attack.style.opacity = "0";
attack.style.transform = "translateX(200px)";

setTimeout(()=>{
attack.remove();
},400);

},2200);

}

/* ====================================== */
/* NO BUTTON ESCAPE */
/* ====================================== */

const noBtn =
document.getElementById("noBtn");

const roastMessages = [

"Too slow akkaya 😭",
"Aunty reflexes detected 🚨",
"Catch me if you can 😌",
"Tiny human huge anger 😭",
"Cheating detected 🚨",
"akkaya.exe is angry 😭",
"Violence is not allowed 😡",
"Short people are dangerous 😭"

];

noBtn.addEventListener("mouseover",()=>{

/* MOBILE SAFE POSITION */

const x =
Math.max(
10,
Math.random() * (window.innerWidth - 220)
);

const y =
Math.max(
10,
Math.random() * (window.innerHeight - 120)
);

noBtn.style.position = "fixed";

noBtn.style.left = x + "px";

noBtn.style.top = y + "px";

/* ROAST POPUP */

const roast =
document.createElement("div");

roast.classList.add("roastPopup");

roast.innerHTML =
roastMessages[
Math.floor(Math.random()*roastMessages.length)
];

document.body.appendChild(roast);

setTimeout(()=>{
roast.remove();
},2000);

/* CHEMPA ATTACK */

showChempaAttack();

});

/* ====================================== */
/* YES BUTTON */
/* ====================================== */

document.getElementById("yesBtn")
.addEventListener("click",()=>{

const loveSection =
document.getElementById("loveSection");

loveSection.style.display = "block";

/* SMOOTH APPEAR */

setTimeout(()=>{

loveSection.style.opacity = "1";

loveSection.style.transform =
"translateY(0px)";

},100);

/* CONFETTI */

confetti({
particleCount:300,
spread:150
});

/* HEART BURST */

for(let i=0;i<45;i++){

const heart =
document.createElement("div");

heart.classList.add("floatHeart");

heart.innerHTML =
["💖","✨","🌸","😭"]
[Math.floor(Math.random()*4)];

heart.style.left =
Math.random()*100 + "vw";

heart.style.top =
Math.random()*100 + "vh";

heart.style.animationDuration =
(Math.random()*3+2)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

}

});

/* ====================================== */
/* HEART GAME */
/* ====================================== */

let score = 0;

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("fallingHeart");

const emojis = [

"💖",
"✨",
"🌸",
"🐱",
"Aunty 😭"

];

heart.innerHTML =
emojis[Math.floor(Math.random()*emojis.length)];

heart.style.left =
Math.random()*90 + "%";

document.getElementById("gameArea")
.appendChild(heart);

/* CLICK */

heart.addEventListener("click",()=>{

score++;

document.getElementById("score")
.innerHTML =
"Hearts Collected: " + score;

heart.remove();

/* WIN */

if(score === 15){

confetti({
particleCount:450,
spread:180
});

const win =
document.createElement("div");

win.classList.add("popup");

win.innerHTML =
"🏆 Best Akkaya Award Unlocked 😭💖";

document.body.appendChild(win);

setTimeout(()=>{
win.remove();
},4000);

}

});

/* REMOVE FALLING HEART */

setTimeout(()=>{
heart.remove();
},5000);

}

/* SPAWN HEARTS */

setInterval(createHeart,900);

/* ====================================== */
/* QUIZ GAME */
/* ====================================== */

const options =
document.querySelectorAll(".quizOption");

options.forEach(option=>{

option.addEventListener("click",()=>{

confetti({
particleCount:220,
spread:110
});

const msg =
document.createElement("div");

msg.classList.add("popup");

msg.innerHTML =
"Correct Answer 😌✨";

document.body.appendChild(msg);

setTimeout(()=>{
msg.remove();
},2500);

});

});

/* ====================================== */
/* TYPING EFFECT */
/* ====================================== */

const text =
"I still remember meeting you in diploma first year... on MY birthday 😭";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing")
.innerHTML += text.charAt(i);

i++;

setTimeout(typing,55);

}

}

typing();

/* ====================================== */
/* LOADING SCREEN */
/* ====================================== */

setTimeout(()=>{

document.getElementById("loading")
.style.opacity = "0";

setTimeout(()=>{

document.getElementById("loading")
.style.display = "none";

},1000);

},2500);

/* ====================================== */
/* RANDOM WHOLESOME POPUPS */
/* ====================================== */

const wholesome = [

"Reminder: Akkaya is tiny but dangerous 😭",
"Professional scolder detected 🚨",
"Happy Birthday Aunty 🎂",
"You became family 😭💖",
"Best sister award loading...",
"Certified chempa pagluthadhi expert 😡",
"Tiny but terrifying 😭"

];

setInterval(()=>{

const popup =
document.createElement("div");

popup.classList.add("popup");

popup.innerHTML =
wholesome[
Math.floor(Math.random()*wholesome.length)
];

document.body.appendChild(popup);

setTimeout(()=>{
popup.remove();
},3000);

},12000);

/* ====================================== */
/* CURSOR HEART TRAIL */
/* ====================================== */

document.addEventListener("mousemove",(e)=>{

const heart =
document.createElement("div");

heart.innerHTML = "💖";

heart.style.position = "fixed";

heart.style.left = e.clientX + "px";

heart.style.top = e.clientY + "px";

heart.style.fontSize = "16px";

heart.style.pointerEvents = "none";

heart.style.zIndex = "999";

heart.style.opacity = "0.8";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transition = "1s";

heart.style.opacity = "0";

heart.style.transform =
"translateY(-20px) scale(1.4)";

},10);

setTimeout(()=>{
heart.remove();
},1000);

});