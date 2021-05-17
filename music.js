var playButton = document.getElementById("playbuttonContainer").addEventListener("click", interact)
var pause1 = document.getElementById("pb3")
var pause2 = document.getElementById("pb4")
var play = document.getElementById("pb2")
var counter = 0
pause1.style.opacity = 0
pause2.style.opacity = 0

function interact(){
    console.log("test")
    if(counter === 0){
        counter++
        document.getElementById('takeItSlow').play()
        pause1.style.opacity = 1
        pause2.style.opacity = 1
        play.style.opacity = 0
    }
    else if(counter === 1){
        counter--
        document.getElementById('takeItSlow').pause()
        document.getElementById("pb2").style.opacity = 1
        document.getElementById("pb3").style.opacity = 0
        document.getElementById("pb4").style.opacity = 0
    }
}