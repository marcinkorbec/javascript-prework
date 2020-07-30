// computer
let randomNumber = Math.floor(Math.random() * 3 + 1);

if (randomNumber == '1')
    {
        computerMove = 'kamień';
    }
    printMessage('Zagrałem ' + randomNumber + '! Jeśli Twój ruch to papier, to wygrywasz!');
else if (randomNumber == '2')
    {
        computerMove = 'papier';
    }
    printMessage('Zagrałem ' + randomNumber + '! Jeśli Twój ruch to nożyce, to wygrywasz!');
else if (randomNumber == '3')
    {
        computerMove = 'nożyce';
    }
    printMessage('Zagrałem ' + randomNumber + '! Jeśli Twój ruch to kamień, to wygrywasz!');


// player
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2')
    playerMove = 'papier';

else (playerInput == '3')
    playerMove = 'nożyce';

printMessage('Twój ruch to: ' + playerMove);
