let studyText = document.getElementById('study');
let breakText = document.getElementById('break');

let studyTime = 25;
let breakTime = 5;

let seconds = "00"

var breakAlarm = new Audio('sound/beepAlarm.ogg');

var playCount = 4;

function alarmPlay() {
  if (playCount-- > 0) {
    breakAlarm.play();
    setTimeout(alarmPlay, 1000);
  }
}



window.onload = () =>{
    document.getElementById('minutes').innerHTML = studyTime;
    document.getElementById('seconds').innerHTML = seconds;
}

function start(){
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    studyText.classList.add('active');
    

    seconds = 59;

    let studyMinutes = studyTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;


    let timerFunc = () => {
        document.getElementById('minutes').innerHTML = studyMinutes;
        document.getElementById('seconds').innerHTML = seconds;
    
        seconds = seconds -1;
        

        if(seconds === 2){
            alarmPlay()
        }
        else if(seconds === 0){
            studyMinutes = studyMinutes -1;
            if(studyMinutes === -1){
                if(breakCount %2 === 0){
                    studyMinutes = breakMinutes;
                    breakCount++


                    studyText.classList.remove("active")
                    breakText.classList.add("active")
                }
            }
            seconds = 59;
        }
    }
    setInterval(timerFunc, 1000);
}
