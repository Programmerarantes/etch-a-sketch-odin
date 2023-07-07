let color = "black"
let click = false

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16)

    document.querySelector("body").addEventListener("click", function(e) {
        if(e.target.tagName != "BUTTON ") {
            click = !click
            let draw = document.querySelector("#draw")
            if(click) {
                draw.innerHTML = "Let's draw!"
            }
            else {
                draw.innerHTML = "Click to continue"
            }
        }
    })

    let btnPopup = document.querySelector("#popup") 
    btnPopup.addEventListener("click", function() {
        let size = getSize()
        createBoard(size)
    })
})

//creating a function to define the size of the board
function createBoard(size) {
    let board = document.querySelector(".board")

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size

    for(let i = 0; i < numDivs; i++) { 
        let div = document.createElement("div")
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div)
    }

}
//creating a function to get the size and check it
function getSize() {
    let input = prompt("Write the size of the board: ")
    let message = document.querySelector("#message")
    if (isNaN(input)) {
        message.innerHTML = "Only positive numbers between 1 and 100"
        console.log(input)
    } else if (input < 0 || input > 100) {
        message.innerHTML = "Provide a number between 1 and 100"
        console.log(input)
    } else {
        message.innerHTML = "Get Ready"
        console.log(input)
        return input
    }
    
    /* for(input = 0; input <=0 || input > 100; input) {
        alert("Please provide a postive number")
        input = prompt("Write the size of the board: ")
        message.innerHTML = "Let's go"
        if (input == "") {
            alert("Please write a number between 0 and 100")
            input = prompt("Write the size of the board: ")
        } 
        else {
            message.innerHTML = "Get Ready"
    
        }
        return input
    } */
    /*if (input <= 0) {
        alert("Please provide a postive number")
        input = prompt("Write the size of the board: ")
    } else if (input < 0 && input > 100) {
        message.innerHtml = "The size should be between 1 and 100"
    } else {
        message.innerHTML = "Get Ready!"
        return input
    }*/
}

function colorDiv() {
    if (click){
        if(color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50% )`
        } else {
            this.style.backgroundColor = 'black'
        }
    }    
}

function setColor(colorChoice) {
    color = colorChoice
}

function resetBoard() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}