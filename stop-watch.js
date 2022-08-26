const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');
const display = document.querySelector('#display');

let second = 0;
let minute = 0;
let hour = 0;

let fsecond = 0;
let fminute = 0;
let fhour = 0;

function stopWatch(){
    
    second++;

    if(second/60 === 1){
        minute++;
        console.log(minute);
        second = 0;
        if(minute/60 === 1){
            hour++;
            minute = 0;
        }
    }

    if(second<10){
        fsecond = '0' + second;
    }
    else{
        fsecond = second;
    }
    if(minute<10){
        fminute = '0' + minute;
    }
    else{
        fminute = minute;
    }
    if(hour<10){
        fhour = '0' + hour;
    }
    else{
        fhour = hour;
    }

    display.innerText = fhour + ' : ' + fminute + ' : ' + fsecond ;
    
}



start.addEventListener('click', function(){
    
    let startTime = window.setInterval(stopWatch, 1000);

    pause.style.display = "block";

    pause.addEventListener('click', function(){
        pause.style.display = "none";
        window.clearInterval(startTime);
    });

    reset.addEventListener('click', function(){
        display.innerText = "00 : 00 : 00";
        pause.style.display = "none";
        window.clearInterval(startTime);

        second = 0;
        minute = 0;
        hour = 0;
    }) 

})

  
