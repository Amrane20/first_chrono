
let seconds=0;
let minuts=0;
let hours=0;
let int;

var chrono=document.querySelector('.chrono');
var startBtn=document.querySelector('#startBtn');
var pauseBtn=document.querySelector('#pauseBtn');
var resetBtn=document.querySelector('#resetBtn');

startBtn.addEventListener ('click', function (){
    int=setInterval(starstCounter,1000);
});

function starstCounter() {
    seconds++;
    if(seconds===60){
        seconds=0;
        minuts++;

    if(minuts===60) {
        minuts=0;
        hours++;
    }
}
     let s = seconds<10 ? "0"+ seconds : seconds;
     let m = minuts<10 ? "0"+ minuts : minuts;
     let h = hours<10 ? "0"+ hours : hours;
     chrono.innerHTML =` ${h} : ${m} : ${s}`;
};

pauseBtn.addEventListener('click',()=>{
    clearInterval(int);
});

resetBtn.addEventListener('click',()=>{
    hours=00;
    minuts=00;
    seconds=00;
    chrono.innerHTML =` ${hours} : ${minuts} : ${seconds}`
});

