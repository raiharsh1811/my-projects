window.addEventListener("DOMContentLoaded",function(){
    const grid=document.querySelector(".grid");
for(let i=1;i<10;i++){
    const square=document.createElement("div");
    square.classList.add("square");
    square.setAttribute("data-id",i);
    grid.appendChild(square);
}
let timeid=null;
let timeids=null;
let runtime=null;
let score=0;
let initialtime=10;
let newid;
let finalscore;
let scorearray=[];
const squares=document.querySelectorAll(".square");
const result=document.querySelector("#score");
const timeLeft=document.querySelector("#time-left");
function randommole(){
    const mole =squares[Math.floor(Math.random()*9)];
    mole.classList.add("mole");
    newid=mole.dataset.id;
}
function removemole(){
    squares.forEach(function(item){
        item.classList.remove("mole");
    })
}
squares.forEach(function(item){
    item.addEventListener("click",function(e){
        const id=e.currentTarget.dataset.id;
        if(id==newid){
            score++;
            result.textContent=score;
            let highscorers=localStorage.getItem("score");
            if(highscorers==null){
                high=[];
            }
            else{
                high=JSON.parse(highscorers);
            }
            newid=null;
        }
    })

})

function movingmole(){
    timeid=setInterval(randommole,1000);
    timeids=setInterval(removemole,2000);
}
function timer(){
    initialtime--;
    if(initialtime==0){
        alert("Game over,Your score is " + score);
        finalscore=score;
        let highscorers=localStorage.getItem("score");
        if(highscorers==null){
            high=[];
        }
        else{
            high=JSON.parse(highscorers);
        }
        high.push(finalscore);
        localStorage.setItem("score",JSON.stringify(high));
        clearInterval(timeid);
        clearInterval(timeids);
        clearInterval(times);
    }
    timeLeft.textContent=initialtime
}

movingmole();
let times=setInterval(timer,1000);

});

