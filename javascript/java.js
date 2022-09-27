var screen = document.querySelector(".screen")

var num1 = document.querySelector(".one")
var num2 = document.querySelector(".two")
var num3 = document.querySelector(".three")
var num4 = document.querySelector(".four")
var num5 = document.querySelector(".five")
var num6 = document.querySelector(".six")
var num7 = document.querySelector(".seven")
var num8 = document.querySelector(".eight")
var num9 = document.querySelector(".nine")
var num0 = document.querySelector(".zero")

var plus = document.querySelector(".plus")
var equal = document.querySelector(".equal")
var div = document.querySelector(".div")
var dot = document.querySelector(".dot")
var minus = document.querySelector(".minus")
var mult = document.querySelector(".x")
var clear = document.querySelector(".clear")
var screen_input = ""

num1.addEventListener("click",function(){
    screen_input = screen_input + "1"
    screen.textContent = screen_input
    document.querySelector(".screen")
})

num2.addEventListener("click",function(){
    screen_input = screen_input + "2"
    screen.textContent = screen_input
    document.querySelector(".screen")
})

num3.addEventListener("click",function(){
    screen_input = screen_input + "3"
    screen.textContent = screen_input
    document.querySelector(".screen")
})

num4.addEventListener("click",function(){
    screen_input = screen_input + "4"
    screen.textContent = screen_input
    document.querySelector(".screen")
})

num5.addEventListener("click",function(){
    screen_input = screen_input + "5"
    screen.textContent = screen_input
    document.querySelector(".screen")
})

num6.addEventListener("click",function(){
    screen_input = screen_input + "6"
    screen.textContent = screen_input
    document.querySelector(".screen")
})

num7.addEventListener("click",function(){
    screen_input = screen_input + "7"
    screen.textContent = screen_input
    document.querySelector(".screen")
})

num8.addEventListener("click",function(){
    screen_input = screen_input + "8"
    screen.textContent = screen_input
    document.querySelector(".screen")
})

num9.addEventListener("click",function(){
    screen_input = screen_input + "9"
    screen.textContent = screen_input
    document.querySelector(".screen")
})

num0.addEventListener("click",function(){
    screen_input = screen_input + "0"
    screen.textContent = screen_input
    document.querySelector(".screen")
})

clear.addEventListener("click", function(){
    screen_input = ""
    screen.textContent = screen_input
    document.querySelector(".screen")
})

plus.addEventListener("click", function(){
    screen_input = screen_input + "+"
    screen.textContent = screen_input
    document.querySelector(".screen")
})

minus.addEventListener("click", function(){
    screen_input = screen_input + "-"
    screen.textContent = screen_input
    document.querySelector(".screen")
})

div.addEventListener("click", function(){
    screen_input = screen_input + "/"
    screen.textContent = screen_input
    document.querySelector(".screen")
})

mult.addEventListener("click", function(){
    screen_input = screen_input + "*"
    screen.textContent = screen_input
    document.querySelector(".screen")
})

dot.addEventListener("click", function(){
    screen_input = screen_input + "."
    screen.textContent = screen_input
    document.querySelector(".screen")
})

equal.addEventListener("click", function(){
    if (screen_input.includes("*")){
        var split = screen_input.split("*");
        var total = split[0]*split[1]
        screen_input = total
        screen.textContent = screen_input
        document.querySelector(".screen");

    } else if (screen_input.includes("/")){
        var split = screen_input.split("/");
        var total = split[0]/split[1]
        screen_input = total
        screen.textContent = screen_input
        document.querySelector(".screen");

    }else if (screen_input.includes("+")){
        var split = screen_input.split("+");
        var total = Number(split[0])+Number(split[1])
        screen_input = total
        screen.textContent = screen_input
        document.querySelector(".screen");

    }else if (screen_input.includes("-")){
        var split = screen_input.split("-");
        var total = split[0]-split[1]
        screen_input = total
        screen.textContent = screen_input
        document.querySelector(".screen");

    }
    
})

