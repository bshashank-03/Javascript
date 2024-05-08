// Generate a random color

const randomColor= function(){
    const hex="0123456789ABCDEF"
    let color= '#'

    for(let i=0; i < 6; i++){
        color+=hex[Math.floor(Math.random() *16)]
    }
    return color;
}
let intervalId; // globally declared
const startChangingcolor = function(){
    if(!intervalId){
        intervalId=setInterval(changeBgcolor, 1000)
    }

    function changeBgcolor(){
        document.body.style.backgroundColor= randomColor();
    }
}
const stopChangingcolor = function(){
    clearInterval(intervalId)
    // for more cleaner code
    intervalId=null
}


document.querySelector("#start").addEventListener('click', startChangingcolor)
document.querySelector("#stop").addEventListener('click', stopChangingcolor)
