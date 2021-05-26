var s = 1, m = 0, h = 0;
var timer;

var startButton = document.getElementById("start");
startButton.addEventListener("click",start);
var stopButton = document.getElementById("stop");
stopButton.addEventListener("click",stop);
var pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click",pause);

var stopwatchEle = document.getElementById("stopwatch");

function start(){
    timer = setInterval(run, 1000);

    startButton.setAttribute("disabled","");
    stopButton.removeAttribute("disabled");
    pauseButton.removeAttribute("disabled");
}

function run(){
    stopwatchEle.innerText = (h<10 ? ("0" + h) : h) +":"+ (m<10 ? "0" + m:m) +":"+ (s<10 ? "0" + s:s);
    s++;
    if(s == 60){
        s = 0;
        m++;
        if(m == 60){
            m = 0;
            h++;
        }
    }
}

function pause(){
    if(pauseButton.innerText === "pause"){
        pauseButton.innerText = "continue";
        stopTimer();
    }else{
        pauseButton.innerText = "pause";
        start();
    }
}

function stop(){
    startButton.removeAttribute("disabled");
    stopButton.setAttribute("disabled","");
    pauseButton.setAttribute("disabled","");
    pauseButton.innerText = "pause";
    stopTimer();
    h = 0;
    m = 0;
    s = 0;
    stopwatchEle.innerText =(h<10 ? "0" + h:h) +":"+ (m<10 ? "0" + m:m) +":"+ (s<10 ? "0" + s:s);
}

function stopTimer(){
     clearInterval(timer);
}