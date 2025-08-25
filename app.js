let boxes = document.querySelectorAll('.box')
let reset = document.querySelector('#reset')
let newbtn = document.querySelector('.new-btn')
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')



let turnO = true
let count = 0

let resetGame = () =>{
   turnO = true
   count = 0
   enableBtn()
   msgContainer.classList.add('hide')
}

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]
//******************************* */
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
      if(turnO){
        box.innerText = 'O'
        turnO =false;
        box.style.color = 'darkblue'
      }else{
        box.innerText = 'X'
        box.style.color = 'red'
        turnO = true;
      }
      count++
      let isWinner = checkWinner()
      if(count===9 && !isWinner){
        gameDraw()
      }
      
      box.disabled = true;
      checkWinner();
  
    })
}) 
let gameDraw=()=>{
  msg.innerText = `Draw`
  msg.style.fontSize = '80px'
  msg.style.color = 'red'
  msgContainer.classList.remove('hide')
  disableBtn()
}


//*************************** */

const disableBtn =()=>{
  for(let box of boxes){
    box.disabled = true
  }
}
//********************************** */
const enableBtn =()=>{
  for(let box of boxes){
    box.disabled = false
    box.innerText = ''
  }
}
//**************************** */
const showWinner = (winner)=>{
msg.innerText = `Congratulations 🎉,winner is ${winner}`
msg.style.color = 'black'
msg.style.fontSize = '50px'
msgContainer.classList.remove('hide')
disableBtn()
}

// **********************************
let checkWinner=()=>{
    for(let pattern of winPatterns){
        const posVal1 = boxes[pattern[0]].innerText
        const posVal2 = boxes[pattern[1]].innerText
        const posVal3 = boxes[pattern[2]].innerText
             if(posVal1 != "" && posVal2!="" && posVal3!= "")
            if(posVal1=== posVal2 && posVal2=== posVal3){ 
              showWinner(posVal1);
    
            }
    } 
    
}
// ******************************************

  



//**** *******************************
 reset.addEventListener('click',resetGame)
 newbtn.addEventListener('click',resetGame)


 