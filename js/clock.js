const clock = document.querySelector("#clock");

// clock.innerText = "allalaal";

function getClock(){
    const date = new Date();

    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`; 
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
 
getClock();
setInterval(getClock, 1000);