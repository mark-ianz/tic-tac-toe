/* ROWS ARRAY */
let row1 = ['','',''];
let row2 = ['','',''];
let row3 = ['','',''];

/* SCORES */
let scores = {
  x: 0,
  o: 0
}


let whoseMove = 'X';
function checkWhoWillMove () {
  if (whoseMove === 'X') {
    whoseMove = 'O'
  }
  else {
    whoseMove = 'X'
  }
}

let isPlaying = false; /* Check if game is playing */


function startGame () {
  isPlaying = true;
  START_BUTTON.style.display = ('none');
  ALERTS.style.display = ('flex');
  ALERTS.innerHTML = '<p>The game has started</p>';
}

function makeMove (arr, move, spot) {
  /* NAKALIMUTAN KO, CHECK IF GAME IS PLAYING */
  if (isPlaying === true) { /* OPEN */
    /* EMPTY SOME SHITS FIRST */
    ALERTS.style.display = ('none');
    ALERTS.innerHTML = '';

    /* STEP 1: CHECK MOVE  */

    checkWhoWillMove ();

    /* IF MOVE IS X */
    if (move === 'X') { 
      arr.forEach ((value,index )=> {
        /* CHECK SPOT AND CHECK IF SPOT IS EMPTY OR NOT */
        if (index + 1 === spot && (value === '' || value === '')) { 
          /* IF EMPTY, PUSH THE MOVE */
          arr [index] = move
        }
        /* IF NOT EMPTY, SEND AND WARNING */
        else if (index + 1 === spot && (value !== '' || value !== '')) {
          ALERTS.style.display = ('flex');
          ALERTS.innerHTML = '<p>The box is occupied.</p>'
        }
      });
      checkRowWin ('X');
      checkColumnWin ('X');
      checkDiagWin ('X');
      checkDraw ();
    }

    /* IF MOVE IS O */  
    if (move === 'O') { 
      arr.forEach ((value,index )=> {
        if (index + 1 === spot && (value === '' || value === '')) { 
          arr [index] = move
        }
        else if (index + 1 === spot && (value !== '' || value !== '')) {
          ALERTS.style.display = ('flex');
          ALERTS.innerHTML = '<p>The box is occupied.</p>'
        }
      });
      checkRowWin ('O');
      checkColumnWin ('O');
      checkDiagWin ('O');
      checkDraw ();
    }
  } /* END */;
}

function checkRowWin (move) {
  /* FOR ROW 1 */
  let row1Sequence = 0;

  row1.forEach ((value) => {
    if (value === move) {
      row1Sequence++
    }
  })
  if (row1Sequence === 3) {
    displayWinner (move)
  }

  /* FOR ROW 2 */
  let row2Sequence = 0;

  row2.forEach ((value) => {
    if (value === move) {
      row2Sequence++
    }
  })
  if (row2Sequence === 3) {
    displayWinner (move)
  }

  /* FOR ROW 3 */
  let row3Sequence = 0;

  row3.forEach ((value) => {
    if (value === move) {
      row3Sequence++
    }
  })
  if (row3Sequence === 3) {
    displayWinner (move)
  }
}

function checkColumnWin (move) {
  if (row1 [0] === move && row2 [0] === move && row3 [0] === move ||
      row1 [1] === move && row2 [1] === move && row3 [1] === move ||
      row1 [2] === move && row2 [2] === move && row3 [2] === move
    ) {
    displayWinner (move);
  }
};

function checkDiagWin (move) {
  if (row1 [0] === move && row2 [1] === move && row3 [2] === move ||
      row1 [2] === move && row2 [1] === move && row3 [0] === move) {
    displayWinner (move)
  }
}

function checkDraw () {
  let occupiedBoxes = 0;
  row1.forEach ((value) => {
    if (value !== '') {
      occupiedBoxes++
    }
  });
  row2.forEach ((value) => {
    if (value !== '') {
      occupiedBoxes++
    }
  });
  row3.forEach ((value) => {
    if (value !== '') {
      occupiedBoxes++
    }
  });
  if (occupiedBoxes === 9 && isPlaying === true) {
    ALERTS.style.display = ('flex');
    ALERTS.innerHTML = `<p>The game is draw.</p>`;
    isPlaying = false;
  }
}

function displayWinner (move) {
  if (move === 'X') {
    scores.x ++
  }
  else {
    scores.o++
  }
  xScore.innerText = `${scores.x}`;
  oScore.innerText = `${scores.o}`;
  ALERTS.style.display = ('flex');
  ALERTS.innerHTML = `<p>${move} won the game.</p>`;
  isPlaying = false;
}

function playAgain () {
  clearBoxAndArray ()
  startGame ();
}

function resetGame () {
  clearBoxAndArray ();
  playAgain ();
  START_BUTTON.style.display = ('flex');
  ALERTS.style.display = ('flex');
  ALERTS.innerHTML = '<p>The game was reset.</p>';
}

function clearBoxAndArray () {
  ROW1_1.innerHTML = '';
  ROW1_2.innerHTML = '';
  ROW1_3.innerHTML = '';
  ROW2_1.innerHTML = '';
  ROW2_2.innerHTML = '';
  ROW2_3.innerHTML = '';
  ROW3_1.innerHTML = '';
  ROW3_2.innerHTML = '';
  ROW3_3.innerHTML = '';
  row1 = ['','',''];
  row2 = ['','',''];
  row3 = ['','',''];
}

/* OTHERS */
const ALERTS = document.querySelector ('.alerts');
const START_BUTTON = document.querySelector ('.start-button');
const RESET_BUTTON = document.querySelector ('.reset-button');
const xScore = document.querySelector ('.x-score');
const oScore = document.querySelector ('.o-score');

START_BUTTON.addEventListener ('click', playAgain);
RESET_BUTTON.addEventListener ('click', resetGame);

/* ROW 1 BOXES */
const ROW1_1 = document.querySelector ('.row1-1');
const ROW1_2 = document.querySelector ('.row1-2');
const ROW1_3 = document.querySelector ('.row1-3');

/* ROW 2 BOXES */
const ROW2_1 = document.querySelector ('.row2-1');
const ROW2_2 = document.querySelector ('.row2-2');
const ROW2_3 = document.querySelector ('.row2-3');

/* ROW 3 BOXES */
const ROW3_1 = document.querySelector ('.row3-1');
const ROW3_2 = document.querySelector ('.row3-2');
const ROW3_3 = document.querySelector ('.row3-3');

ROW1_1.addEventListener ('click', function () {
  makeMove (row1, whoseMove, 1);
  ROW1_1.innerHTML = `<p>${row1 [0]}</p>`;
});

ROW1_2.addEventListener ('click', function () {
  makeMove (row1, whoseMove, 2);
  ROW1_2.innerHTML = `<p>${row1 [1]}</p>`;

});

ROW1_3.addEventListener ('click', function () {
  makeMove (row1, whoseMove, 3);
  ROW1_3.innerHTML = `<p>${row1 [2]}</p>`;

});

ROW2_1.addEventListener ('click', function () {
  makeMove (row2, whoseMove, 1);
  ROW2_1.innerHTML = `<p>${row2 [0]}</p>`;
});

ROW2_2.addEventListener ('click', function () {
  makeMove (row2, whoseMove, 2);
  ROW2_2.innerHTML = `<p>${row2 [1]}</p>`;
});

ROW2_3.addEventListener ('click', function () {
  makeMove (row2, whoseMove, 3);
  ROW2_3.innerHTML = `<p>${row2 [2]}</p>`;
});

ROW3_1.addEventListener ('click', function () {
  makeMove (row3, whoseMove, 1);
  ROW3_1.innerHTML = `<p>${row3 [0]}</p>`;
});

ROW3_2.addEventListener ('click', function () {
  makeMove (row3, whoseMove, 2);
  ROW3_2.innerHTML = `<p>${row3 [1]}</p>`;
});

ROW3_3.addEventListener ('click', function () {
  makeMove (row3, whoseMove, 3);
  ROW3_3.innerHTML = `<p>${row3 [2]}</p>`;
});