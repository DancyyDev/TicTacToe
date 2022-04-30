// Create a two player Tic-Tac-Toe game. 
// users should be able to click to place their X or O
//     after every click auto switch players
//     click places x or o 
//       alert if x or o is already there
//       cant click if there is a winner
// tell who wins 
//    3 in a row in any direction of xs or o's
//     //vertical/horizontal/diagonal
//   if all cards are filled and theres no winner= TIE
//   announce winner or tie in DOM
// button to reset the game
// keep track of score & display in DOM *OPTIONAL*
// keep track & display in DOM of whose turn it is *OPTIONAL*
// make the game as OOP as possible. 

//PREP
//parameters
//result
// document.querySelector('.box').addEventListener( 'click', )

// CLear and Results
const button = document.querySelector('#clear')
const result = document.querySelector('#result')
//Boxes
const box1 = document.querySelector('#one')
const box2 = document.querySelector('#two')
const box3 = document.querySelector('#three')
const box4 = document.querySelector('#four')
const box5 = document.querySelector('#five')
const box6 = document.querySelector('#six')
const box7 = document.querySelector('#seven')
const box8 = document.querySelector('#eight')
const box9 = document.querySelector('#nine')
const boxAll = document.querySelector('.container')


// let playerTurn = true

// function playerClick(e){
//     if (!e.target.classList.contains('mark')){
//         e.target.innerText = playerTurn == true ? 'X': 'O' 
//         playerTurn == true ? playerTurn = false : playerTurn = true
//         e.target.className += ' mark'
//         winningCombos()
//     } 
// }
// document.querySelector('.container').addEventListener('click', playerClick)

// function winningCombos(){
//     let verticalOne = ['one','four','seven']
//     let verticalTwo = [ 'two','five','eight']
//     let verticalThree = ['three', 'six', 'nine']
//     let diagOne = ['one','five','nine']
//     let diagTwo = ['three', 'five', 'seven']
//     let horOne =['one', 'two', 'three']
//     let horTwo = ['four', 'five', 'six']
//     let horThree = ['seven', 'eight', 'nine']
//     let arr = [verticalOne , verticalTwo , verticalThree , diagOne , diagTwo , horOne , horTwo , horThree ]
//     //Checking and comparing each text
//     if( arr.some( id => (boxChecker(id[0]) === "X" || (boxChecker(id[0]) === "O")) && boxChecker(id[0]) === boxChecker(id[1]) && boxChecker(id[1]) === boxChecker(id[2])) ) {
//         result.innerText = 'Winner!!'
//       } 
//     }

//     function clearGame(e) {
//         let markedBoxes = [ box1, box2, box3, box4, box5, box6, box7, box8, box9 ]
//         box1.innerText = ''
//         box2.innerText = ''
//         box3.innerText = ''
//         box4.innerText = ''
//         box5.innerText = ''
//         box6.innerText = ''
//         box7.innerText = ''
//         box8.innerText = ''
//         box9.innerText = ''
//         result.innerText = ''
//         markedBoxes.classList.remove(" mark")
//       } 
     
// function boxChecker(boxId){
//     return document.querySelector('#'+ boxId).innerText
// }
      
//     document.querySelector('.container').addEventListener('click', playerClick)

//The goal is to create objects
//objects for game

class Game {
    constructor( name, player1, player2) {
        this.name = name,
        this.player1 = player1,
        this.player2 = player2,
        this.player = this.player1
    }
    playerTurn() {
        //
        if( this.player === this.player1) {
            this.player = this.player2
            console.log(this.player)
        } else if ( this.player === this.player2) {
            this.player = this.player1
            console.log(this.player)
        }
    }
    placeMarker() {
        if( this.player === this.player1) {
            return 'X'
            this.playerTurn()
        } else if (this.player === this.player2) {
            return 'O'
        }
    }
    checkWhoWon() {
            // Checking and comparing each text
        if (
          box1.innerText === "X" &&
          box2.innerText === "X" &&
          box3.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        } else if (
          box4.innerText === "X" &&
          box5.innerText === "X" &&
          box6.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        } else if (
          box7.innerText === "X" &&
          box8.innerText === "X" &&
          box9.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        } else if (
          box1.innerText === "X" &&
          box4.innerText === "X" &&
          box7.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        } else if (
          box2.innerText === "X" &&
          box5.innerText === "X" &&
          box8.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        } else if (
          box3.innerText === "X" &&
          box6.innerText === "X" &&
          box9.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        } else if (
          box1.innerText === "X" &&
          box5.innerText === "X" &&
          box9.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        } else if (
          box3.innerText === "X" &&
          box6.innerText === "X" &&
          box9.innerText === "X"
        ) {
          return result.innerText = "Player one is the Winner!!"
        }
        if (
          box1.innerText === "O" &&
          box2.innerText === "O" &&
          box3.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        } else if (
          box4.innerText === "O" &&
          box5.innerText === "O" &&
          box6.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        } else if (
          box7.innerText === "O" &&
          box8.innerText === "O" &&
          box9.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        } else if (
          box1.innerText === "O" &&
          box4.innerText === "O" &&
          box7.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        } else if (
          box2.innerText === "O" &&
          box5.innerText === "O" &&
          box8.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        } else if (
          box3.innerText === "O" &&
          box5.innerText === "O" &&
          box7.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        } else if (
          box1.innerText === "O" &&
          box5.innerText === "O" &&
          box9.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        } else if (
          box3.innerText === "O" &&
          box6.innerText === "O" &&
          box9.innerText === "O"
        ) {
          return result.innerText = "Player two is the Winner!!"
        }
        
    }
}

let tic = new Game('Tic Tac Toe', 'Dan', 'Alexa')

function firstMove(e) {
    e.preventDefault()
    if (e.target.innerText === ''){
    e.target.innerText = tic.placeMarker()
    tic.playerTurn()
    tic.checkWhoWon()
    }
}

boxAll.addEventListener('click', firstMove)