var i = 0; //- счетчик для функции setInterval
var iMs = 5; //- величина временного интервала (мс) для функции setInterval 
var sh = 1000 / iMs; //- количество раз срабатывания фнукции setInterval  в секунду
var sb = false; //- статус кнопки Start -> false, Stop -> true 
var time; //- текущее значение таймера hh.mm.ss.ms
var countSplit = 0; //- текущий номер Split


document.getElementById('bstart').onclick = function () {
    sb = !sb;
    if (!sb) addpoint("Stop");
};

document.getElementById('bsplit').onclick = function () {
    if(sb) addpoint("Split");
};

function addpoint(namePoint) {
    countSplit++;
    var span = document.createElement('span');
    span.innerHTML = "<br />" + countSplit + ". " + namePoint + ": " + time;

    var split = document.getElementById('split');
    split.appendChild(span);
}

setInterval(function () {
    if (sb) {
        ++i;
        document.getElementById('bstart').value = "Stop";
    }
    else {
        document.getElementById('bstart').value = "Start";
    }

    var hours = Math.floor(i / (3600 * sh));
    var minutes = Math.floor(i / (60 * sh)) - hours * 60;
    var seconds = Math.floor(i / sh) - minutes * 60 - hours * 3600;
    var mseconds = (i - seconds * sh - minutes * 60 * sh - hours * 3600 * sh) * iMs;
    
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    if (mseconds < 100) {
        if (mseconds < 10) mseconds = '00' + mseconds;
        else mseconds = '0' + mseconds;
    }
   
    time = hours + ":" + minutes + ":" + seconds + ":" + mseconds;
    
    var counter = document.getElementById('counter');
    counter.innerHTML = time;
    
}, iMs);

document.getElementById('bclear').onclick = function () {
    sb = false;
    i = 0;
    countSplit = 0;
    document.getElementById('split').innerHTML = "";
};



  














  
  
  
