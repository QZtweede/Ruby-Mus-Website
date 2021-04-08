let Arrow1 = document.getElementById("B1").addEventListener("click", B1Clicked)
let Arrow2 = document.getElementById("B2").addEventListener("click", B2Clicked)

let Post1 = document.getElementById("instagram-media1")
let Post2 = document.getElementById("instagram-media2")
let Post3 = document.getElementById("facebook-media")


var counter = 0

function B1Clicked(){
    counter++
    if(counter >= 3){
        counter = 0
    }
    console.log(counter)
    Style()
}

function B2Clicked(){
    counter--
    if(counter <= -1){
        counter = 2
    }  
    console.log(counter)
    Style()
}

function Reset(){
    Post1.style.opacity = 0.5
    Post2.style.opacity = 0.5
    Post3.style.opacity = 0.5
    Post3.style.marginLeft = "0px"
}

function Style(){
    if(counter === 0){
        Reset()
        Post1.style.left = "0px"
        Post2.style.left = "55vw"
        Post3.style.marginLeft = "500px"
    }
    
    if(counter === 1){
        Reset()
        Post1.style.marginLeft = "-500px"
        Post2.style.left = "0px"
        Post3.style.marginLeft = "-500px"
    }
    
    if(counter === 2){
        Post1.style.left = "55vw"
        Post2.style.left = "-55vw"
        Post3.style.marginLeft = "0px"
    }
}


