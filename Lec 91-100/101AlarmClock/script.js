function play() {
  var audio = new Audio(
    "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
  );
  audio.play();
}

let time = document.getElementById("time");

setInterval(()=>{
  let d = new Date();
  time.innerHTML = d.toDateString() + " " + d.toTimeString();
},1000);

setTimeout(() => {
  play();
}, 2000);

const setAlarm = (sec)=>{
  let d = new Date().getSeconds() + sec;
  setTimeout(()=>{
    play();
  },sec*1000)
  setInterval(()=>{
    secLeft = d - new Date().getSeconds();
    if(secLeft>=0)
    {
      alarm.innerHTML = "Alarm ringing in " + secLeft + " seconds";
    }
  },1000);
}

let s = prompt("After how many sec do you want the alarm?");
setAlarm(parseInt(s));
