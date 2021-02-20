
//win checking logic pulled from .jsx files so they can be tested
var checkArrayForWinner = (array) => {
  let bCount = 0
  let rCount = 0
  for (let j = 0; j < array.length; j++) {
    if (array[j] === 1) {
      bCount++
      rCount = 0
    } else if (array[j] === 2) {
      bCount = 0
      rCount++
    } else if (array[j] === 0) {
      bCount = 0
      rCount = 0
    }
    if (bCount === 4) {
      return 'black'
    } else if (rCount === 4) {
      return 'red'
    }
  }
}

var checkForBoardLock = (board) => {
  // let board = this.state.board
  let openPlays = 0
  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) {
        openPlays++
      }
    }
  } if (openPlays === 0) {
    this.setState({ lastWinner: 'Board Lock detected, game restarted'})
    this.resetGame()
  }
}

var hasVerticalWinner = (board) => {
  console.log('checking for vertical winner')
  // let board = this.state.board
  for (let i = 0; i < board[0].length; i++) {
    let columnArray = []
    for (let j = 0; j < board.length; j++) {
      columnArray.push(board[j][i])
    }
    let returnVal = checkArrayForWinner(columnArray)
    if (returnVal) {
      return returnVal
    }
  }
}

var hasHorizontalWinner = (board) => {
  // var board = this.state.board
  for (let i = 0; i < board.length; i++) {
    let returnVal = checkArrayForWinner(board[i])
    if (returnVal) {
      return returnVal
    }
  }
}

var checkDiagonalWinner = (board) => {
  //check for major conflict along left edge
  // let board = this.state.board
  let checkNumber = 5
  for (let i = 0; i < 6; i++) {
    let step = checkNumber
    let Xcoordinate = 0
    let Ycoordinate = i
    let tempArray = []
    while (step >= 0) {
      tempArray.push(board[Ycoordinate][Xcoordinate])
      Ycoordinate++
      Xcoordinate++
      step--
    }
    checkNumber--
    this.checkArrayForWinner(tempArray)
  }
  //check for major conflict along top edge
  checkNumber = 5
  for (let i = 1; i < 7; i++) {
    let step = checkNumber
    let Xcoordinate = i
    let Ycoordinate = 0
    let tempArray = []
    while (step >= 0) {
      tempArray.push(board[Ycoordinate][Xcoordinate])
      Ycoordinate++
      Xcoordinate++
      step--
    }
    checkNumber--
    this.checkArrayForWinner(tempArray)
  }
  //check for minor conflicts along right edge
  checkNumber = 5
  for (let i = 0; i < 6; i++) {
    let step = checkNumber
    let Xcoordinate = 6
    let Ycoordinate = i
    let tempArray = []
    while (step >= 0) {
      tempArray.push(board[Ycoordinate][Xcoordinate])
      Ycoordinate++
      Xcoordinate--
      step--
    }
    checkNumber--
    this.checkArrayForWinner(tempArray)
  }
  //check for minor conflicts along top edge
  checkNumber = 5
  for (let i = 5; i >= 0; i--) {
    let step = checkNumber
    let Xcoordinate = i
    let Ycoordinate = 0
    let tempArray = []
    while (step >= 0) {
      tempArray.push(board[Ycoordinate][Xcoordinate])
      Ycoordinate++
      Xcoordinate--
      step--
    }
    checkNumber--
    this.checkArrayForWinner(tempArray)
  }
}


module.exports.hasVerticalWinner = hasVerticalWinner
module.exports.hasHorizontalWinner = hasHorizontalWinner