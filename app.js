const gameboard = document.querySelector('#gameboard')
const infoDisplay =  document.querySelector('#info')
const startCells = [
    "","","","","","","","","",
]
let go = 'circle'
infoDisplay.textContent="circle goes first"

function createBoard(){
    startCells.forEach((_cell,index)=>{
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index;
        cellElement.addEventListener('click',addGo)
        gameboard.append(cellElement)
    } )
}

createBoard()

function addGo(e){
   const goDisplay =  document.createElement('div')
   goDisplay.classList.add(go)
   e.target.append(goDisplay)
   go = go=== "circle" ? "cross" : 'circle'
   infoDisplay.textContent='it is now ' + go + " turn"
   e.target.removeEventListener("click", addGo)
   checkScore()
}

function checkScore(){

   const allsquares =  document.querySelectorAll('.square')

    const winningCombo =[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]

    winningCombo.forEach(Array=>{
      const circleWins =  Array.every(cell=>
        allsquares[cell].firstChild?.classList.contains('circle'))

        if(circleWins){
            infoDisplay.textContent = "Circle Wins!"
            allsquares.forEach(square=>square.replaceWith(square.cloneNode(true)))
            return
        }
    })

    winningCombo.forEach(Array=>{
        const crossWins =  Array.every(cell=>
          allsquares[cell].firstChild?.classList.contains('cross'))
          
          if(crossWins){
              infoDisplay.textContent = "Cross Wins!"
              allsquares.forEach(square=>square.replaceWith(square.cloneNode(true)))
              return
          }
      })

   
}