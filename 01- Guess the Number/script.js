/*
GAME FUNCITONS:
-player must guess a number betwen a min and max 
- player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if loose
- let player choose to play again 
*/


let min = 1,
    max = 10,
    winningNum= Math.floor(Math.random()*10 + 1),
    guessLeft = 3;

  


 






    //UI elements

    const  game = document.querySelector('#game');

    const guessInput = document.querySelector('#guess-input');

    const guessBtn = document.querySelector('#guess-btn');

    const minNum = document.querySelector('.min-num');
    const maxNum = document.querySelector('.max-num');
    const message = document.querySelector('.message')
    const hint = document.querySelector('.hint');




    //Play Again 

document.querySelector('#game').addEventListener('mousedown', function(e){
        if(e.target.className == 'play-again'){
          window.location.reload();
        }
   })


    minNum.textContent = 1;
    maxNum.textContent = 10;

    guessBtn.addEventListener('click', function(e){
          
   let guess =   parseInt(guessInput.value);
      // validating our input


   if(guess < min || guess > max || isNaN(guess)){

    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
   }
   else if(guess == winningNum){

gameOver(true,`Entered Number is Correct Hurray 🥳🥳'`)

    // guessInput.disabled = true;
    // guessInput.style.borderColor = 'green';
    // setMessage('Entered Number is Correct Hurray 🥳🥳', 'green');

   }
   else{
    guessLeft -=1;

    if(guessLeft == 0){
        //Game over and player lost 
    //     guessInput.disabled = true;
    // guessInput.style.borderColor = 'red';
    // setMessage(`You Lost! Try again. Correct number was ${winningNum}`, 'red');
    gameOver(false, `You Lost! Try again. Correct number was ${winningNum}`);
    }
    //game continues 
    else{
        // Game continues
 guessInput.style.borderColor = 'red';
 guessInput.value = '';

        setMessage(`${guess} is not correct, ${guessLeft} guesses Left`);

        hint.textContent = guess > winningNum ? 'choose smaller value' : 'choose Bigger value';


    }

   }
        e.preventDefault();
    })


function gameOver(won, message){
    let color = (won==true) ?'green' : 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color ;
   
    setMessage(message,color);



    //Play again 

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again'
    hint.textContent = won == false ?"Better luck Next Time 🤞" : "Keep it up, Let's go Again😎"
}
    
    



  function  setMessage(msg, color){
       message.style.color = color;
       message.textContent = msg;
  }
