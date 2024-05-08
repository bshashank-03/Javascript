const logdiv= document.getElementById('log')
const statediv= document.getElementById('state')
const startBtn= document.getElementById('start-btn')
const stopBtn= document.getElementById('stop-btn')

startBtn.addEventListener('click', ()=>{
    document.addEventListener('keydown',handleDown)
    document.addEventListener('keyup',handleUp)
    startBtn.disabled=true
    stopBtn.disabled=false

})

stopBtn.addEventListener('click', ()=>{
    document.removeEventListener('keydown',handleDown)
    document.removeEventListener('keyup',handleUp)
    logdiv.textContent=""
    statediv.textContent=""
    stopBtn.disabled=true
    startBtn.disabled=false
})

function handleDown(e){
    logdiv.textContent= `Key ${e.key} pressed Down`
    statediv.textContent='Key is down'
}

function handleUp(e){
    logdiv.textContent= `Key  ${e.key} pressed Up`
    statediv.textContent='Key is Up'
}
