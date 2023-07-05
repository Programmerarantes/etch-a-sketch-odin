document.addEventListener("DOMContentLoaded", function(){
    createBoard(16)
})

//creating a function to define the size of the board
function createBoard(size) {
    let board = document.querySelector(".board")

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size

    for(let i = 0; i<numDivs; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow"
        board.insertAdjacentElement("beforeend", div)
    }

}