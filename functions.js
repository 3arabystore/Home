const wrapper = document.querySelector(".sliderwrapper")


// wrapper.style.transform = "translateX(-200vw)"

var left = document.getElementById("left")
var right = document.getElementById("right")

var viewp = 0

function leftcycle(){
        if(viewp == 0){
            viewp = -200}
        else{
            viewp = viewp + 100
        }
        wrapper.style.transform = `translateX(${viewp}vw)`    
}
function rightcycle(){
        if(viewp == -200){
            viewp = 0}
        else{
            viewp = viewp - 100
        }
        wrapper.style.transform = `translateX(${viewp}vw)`    
}