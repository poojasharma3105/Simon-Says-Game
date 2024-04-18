let gameSeq=[];
let userSeq=[];

let h2=document.querySelector("h2");

let btns=["red", "purple", "green", "yellow"];

let started = false;  //tells that the game is not started
let level = 0;

document.addEventListener("keypress", function(){
    if (started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2. innerText = `Level ${level}`;
    
    //random btn choose then flash
    let rndmIdx = Math.floor(Math.random() *3);
    let rndmClr= btns[rndmIdx];
    let rndmBtn = document.querySelector(`.${rndmClr}`);
   // console.log(rndmIdx);
   // console.log(rndmClr);
   // console.log(rndmBtn);
    gameSeq.push(rndmClr);
    console.log(gameSeq);
    gameFlash(rndmBtn); 
}

function checkAns(idx) {
    //console.log("curr level: ", level);
    //let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]) {
        //console.log("same value"); --> two cases are here for middle and last value
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.background="white";
        }, 150);
        reset();
    }
}

function btnPress(){
    //console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor); 
    
    checkAns(userSeq.length-1); //check last pressed btn 
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started= false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}