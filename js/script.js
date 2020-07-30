// computer
function playGame(playerInput){
    clearMessages()
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = argMoveName(randomNumber);


    function argMoveName(randomNumber){
        if (randomNumber == '1')
            {
                return 'kamień';
            }

        else if (randomNumber == '2')
            {
                return 'papier';
            }

        else if (randomNumber == '3')
            {
                return 'nożyce';
            }
    }


    // player
    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    function getMoveName(playerInput) {
        if(playerInput == '1'){
            return 'kamień';
        }

        else if(playerInput == '2'){
            return 'papier';
        }

        else if (playerInput == '3') {
            return 'nożyce';
        }
        else {playerInput == ''}; {
            return 'nieznany ruch';
        } 
    }

    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
        printMessage('Zagrałem ' + argComputerMove  + ', a Ty ' + argPlayerMove);

            if( argComputerMove  == 'kamień' && argPlayerMove == 'papier'){
                printMessage('Ty wygrywasz!');
            }
            else if (argComputerMove  == 'papier' && argPlayerMove == 'kamień') {
                printMessage('Ja wygrywam!');
            }
            else if( argComputerMove  == 'papier' && argPlayerMove == 'nożyce'){
                printMessage('Ty wygrywasz!');
            }
            else if ( argComputerMove  == 'nożyce' && argPlayerMove == 'papier'){
                printMessage('Tym razem przegrywasz :(');
            }
            else if( argComputerMove  == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage('Ty wygrywasz!');
            }
            else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
                printMessage('Ja wygrywam!');
            }
            else if( argComputerMove == argPlayerMove) {
                printMessage('REMIS!');
            }
        }
}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
  });

document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
  });

document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
  });