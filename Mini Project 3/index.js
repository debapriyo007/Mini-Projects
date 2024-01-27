
//Select all the classes.
const gameInfo = document.querySelector('.game-info')
const boxes = document.querySelectorAll('.box')
const newGameBtn = document.querySelector('.btn')


//Initilize the varriable that should be nedded.
let currPlayer // its either 'X' or 'Y'
let gameGrid // it's give the current status of our game.
//my all shell are filled or not . i will give more chance to 
//player or not.

const winingPos = [ //ami ki ki vabe jite pari.
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
]

//Now create a function that Initilized the game.
function initGame(){
    currPlayer = "X"
    gameGrid = ["","","","","","","","",""]
    //Empty also in Ui.
    boxes.forEach((box, index)=>{
        box.innerHTML = ""
        boxes[index].style.pointerEvents = "all" //j box ta te 'X' ba 'O' diya6i ota ta cursor pointer show korbe.
        //Remove the Green Color / Initilize the box with his CSS props.
        box.classList = `box bx${index+1}` //remove the green color

    })
    //i wanna disable the new Game Button ata First.
    newGameBtn.classList.remove("active")
    gameInfo.innerText = `Current Player - ${currPlayer}`
}
initGame();



boxes.forEach((box, index)=>{
    box.addEventListener("click", ()=>{
        handerClick(index)
    })
})

const handerClick = (index)=>{
    if(gameGrid[index] === ""){
        //then i will process my game.
        boxes[index].innerText = currPlayer //this will be reflected in ui
        gameGrid[index] = currPlayer //this will store the current player which we are just creating
        //which will check the current status of our code .
        //identify our inner logic
        boxes[index].style.pointerEvents = "none" //j box ta te 'X' ba 'O' diya6i ota ta cursor pointer show korbe na.

        //Change the player turn.
        swapTurn()
        //check anyone win or not?
        checkGameOver()
    }
}

const swapTurn = ()=>{
    //Here i switch the player
    if(currPlayer === 'X'){
        currPlayer = 'O '
    }else{
        currPlayer = 'X'
    }
    //After switching the player i wann chnage in my ui.
    gameInfo.innerText = `Current Player - ${currPlayer}`
}

const checkGameOver = ()=>{
    let answer ="" 
    winingPos.forEach((position)=>{
        if((gameGrid[position[0]]!=="" || gameGrid[position[1]]!=="" || gameGrid[position[2]]!=="") 
        && (gameGrid[position[0]] === gameGrid[position[1]]) 
        && (gameGrid[position[1]] === gameGrid[position[2]])){

            //Now check if winner is X
            if(gameGrid[position[0]] === "X"){
                answer = "X"
            }else{
                answer = "O"
            }
            //disable all pointer events.
            //when i got my winner then i will disable my click on boxes.
            boxes.forEach((box)=>{
                box.style.pointerEvents = "none"
            })
            //After getting my Winner i will make the row or coloum as green color.
            boxes[position[0]].classList.add("win")
            boxes[position[1]].classList.add("win")
            boxes[position[2]].classList.add("win")

        }
    });

    //If we have winner.
    if(answer!==""){
        gameInfo.innerText = `🎉 Winner Player - ${answer} 🎉`
        newGameBtn.classList.add("active")
        return
    };

    //chek the Tie Condition.
    let filledCount = 0 
    gameGrid.forEach((box)=>{
        if(box!=""){
            filledCount++
        }
    });
    //check if fillCount value is equal to 9 means all boxes are filled.
    //Means TIE!!!!!!!
    if(filledCount === 9){
        gameInfo.innerText = `Game TIE!!!`
        newGameBtn.classList.add("active")
    }
}






//When i click New Game Button i will restart my game.
//it means initilize my game with my starting value.
//menas call my initGame() function.

newGameBtn.addEventListener('click', initGame)
