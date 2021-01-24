console.log('running Tic Tac Toe')
var move = 0
var tieTotalCount = 9;
var playCount = 0
var playerXtotal = 0;
var playerYtotal = 0;
var play = 'X'


//have two sets of winner buckets

var xMoves = {
  'topRow': 0,
  'middleRow': 0,
  'bottomRow': 0,
  'leftColumn': 0,
  'middleColumn': 0,
  'rightColumn': 0,
  'rightDiagnal': 0,
  'leftDiagnal': 0
}

var yMoves = {
  'topRow': 0,
  'middleRow': 0,
  'bottomRow': 0,
  'leftColumn': 0,
  'middleColumn': 0,
  'rightColumn': 0,
  'rightDiagnal': 0,
  'leftDiagnal': 0
}


var resetGame = function (tieVal, hardReset) {
  // console.log('in the reset game function')
  if (tieVal === 9) {
    move = 0
  } else if (tieVal === 10) {
    move = 1;
  }
  //reset the window message
  if (hardReset) {
    document.getElementById('windowStatus').innerText = "Player X Goes First";
    move = 0;
    tieTotalCount = 8;
    playerXtotal = 0;
    playerYtotal = 0;
    playCount = 0
    document.getElementById('Xtotal').innerText = `Win Total: ${playerXtotal}`;
    document.getElementById('Ytotal').innerText = `Win Total: ${playerYtotal}`;
    document.getElementById('playCount').innerText = `Total Play Count: 0`;
  }

  //reset counters
  var playBlocks = document.getElementsByClassName("playSquare");
  [].slice.call( playBlocks ).forEach(function ( block ) {
    block.innerHTML = '';
  });

  for (var key in xMoves) {
    xMoves[key] = 0
  }
  for (var key in yMoves) {
    yMoves[key] = 0
  }
}



var playHandler = function (ID, Player) {
  // console.log(xMoves);
  // console.log('logging the top row below')
  // console.log(xMoves['topRow'])


  if ((ID === '1A') && (Player === 'X')) {
    xMoves['topRow']++
    xMoves['leftColumn']++
    xMoves['leftDiagnal']++
  } else if ((ID === '1A') && (Player === 'O')) {
    yMoves['topRow']++
    yMoves['leftColumn']++
    yMoves['leftDiagnal']++
  } else if ((ID === '1B') && (Player === 'X')) {
    xMoves['topRow']++
    xMoves['middleColumn']++
  } else if ((ID === '1B') && (Player === 'O')) {
    yMoves['topRow']++
    yMoves['middleColumn']++
  } else if ((ID === '1C') && (Player === 'X')) {
    xMoves['topRow']++
    xMoves['rightColumn']++
    xMoves['rightDiagnal']++
  } else if ((ID === '1C') && (Player === 'O')) {
    yMoves['topRow']++
    yMoves['rightColumn']++
    yMoves['rightDiagnal']++
  } else if ((ID === '2A') && (Player === 'X')) {
    xMoves['middleRow']++
    xMoves['leftColumn']++
  } else if ((ID === '2A') && (Player === 'O')) {
    yMoves['middleRow']++
    yMoves['leftColumn']++
  } else if ((ID === '2B') && (Player === 'X')) {
    xMoves['middleRow']++
    xMoves['middleColumn']++
    xMoves['leftDiagnal']++
    xMoves['rightDiagnal']++
  } else if ((ID === '2B') && (Player === 'O')) {
    yMoves['middleRow']++
    yMoves['middleColumn']++
    yMoves['leftDiagnal']++
    yMoves['rightDiagnal']++
  } else if ((ID === '2C') && (Player === 'X')) {
    xMoves['middleRow']++
    xMoves['rightColumn']++
  } else if ((ID === '2C') && (Player === 'O')) {
    yMoves['middleRow']++
    yMoves['rightColumn']++
  } else if ((ID === '3A') && (Player === 'X')) {
    xMoves['bottomRow']++
    xMoves['leftColumn']++
    xMoves['rightDiagnal']++
  } else if ((ID === '3A') && (Player === 'O')) {
    yMoves['bottomRow']++
    yMoves['leftColumn']++
    yMoves['rightDiagnal']++
  } else if ((ID === '3B') && (Player === 'X')) {
    xMoves['bottomRow']++
    xMoves['middleColumn']++
  } else if ((ID === '3B') && (Player === 'O')) {
    yMoves['bottomRow']++
    yMoves['middleColumn']++
  } else if ((ID === '3C') && (Player === 'X')) {
    xMoves['bottomRow']++
    xMoves['rightColumn']++
    xMoves['leftDiagnal']++
  } else if ((ID === '3C') && (Player === 'O')) {
    yMoves['bottomRow']++
    yMoves['rightColumn']++
    yMoves['leftDiagnal']++
  }


  // console.log(xMoves)
  // console.log(yMoves)



  //check for X winner
  for (var key in xMoves) {
    if (xMoves[key] === 3) {
      resetGame();
      playCount++
      move = 0
      tieTotalCount = 9;
      playerXtotal++;
      let playerXName = document.getElementById('player1').value;
      console.log(playerXName);
      document.getElementById('windowStatus').innerText = `Game Over !!!`;
      setTimeout(()=>{document.getElementById('windowStatus').innerText = `${playerXName} won, X goes first`}, 750);
      document.getElementById('Xtotal').innerText = `Win Total: ${playerXtotal}`;
      document.getElementById('playCount').innerText = `Total Play Count: ${playCount}`;
    }
  }

  //check for Y winner
  for (var key in yMoves) {
    if (yMoves[key] === 3) {
      resetGame();
      playCount++
      move = 1
      tieTotalCount = 10;
      playerYtotal++;
      let playerYName = document.getElementById('player2').value;
      // console.log(playerYName);
      document.getElementById('windowStatus').innerText = `Game Over !!!`;
      setTimeout(()=>{document.getElementById('windowStatus').innerText = `${playerYName} won, O goes first`}, 750);
      document.getElementById('Ytotal').innerText = `Win Total: ${playerYtotal}`;
      document.getElementById('playCount').innerText = `Total Play Count: ${playCount}`;
    }
  }
  //if moves = 9 then the game is over
  if (move === tieTotalCount) {
    resetGame(tieTotalCount);
    playCount++
    document.getElementById('windowStatus').innerText = `Tie game detected, reseting now`;
    setTimeout(()=>{document.getElementById('windowStatus').innerText = `Previous winner goes first`}, 750);
    document.getElementById('playCount').innerText = `Total Play Count: ${playCount}`;
  }
}

//if reset button is clicked then reset the game
document.getElementById('theButton').addEventListener("click", function () {
  console.log('reseting the game')
  resetGame(null, true);
})



//add event listeners to all 9 spots
var elements = document.getElementsByClassName("playSquare")
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function (event) {
    // console.log('clicked!')
    // console.log(event.target.id);
    var idClickedOn = event.target.id
    move++
    console.log(move)

    if (move % 2) {
      document.getElementById(idClickedOn).innerHTML = 'X';
      playHandler(idClickedOn, 'X')
    } else {
      document.getElementById(idClickedOn).innerHTML = 'O';
      playHandler(idClickedOn, 'O')
    }
  })
}



