import myFunc from './components/component1.jsx'

//Stretch goal is to have this render underneath board, skipping for now
var EndingMessage = props => {
  if (props.message) {
    return (
      <div>{props.message}</div>
      )
  } else {
    return ( <div></div> )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lastWinner: null,
      black: 1,
      red: 2,
      redsTurn: true,
      board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]
    }
  }

  resetGame() {
    //reset board
    this.setState({
      board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]
    })
  }

  checkForBoardLock() {
    let board = this.state.board
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

  hasVerticalWinner() {
    console.log('checking for vertical winner')
    let board = this.state.board
    for (let i = 0; i < board[0].length; i++) {
      let columnArray = []
      for (let j = 0; j < board.length; j++) {
        columnArray.push(board[j][i])
      }
      this.checkArrayForWinner(columnArray)
    }
  }

  hasHorizontalWinner() {
    var board = this.state.board
    for (let i = 0; i < board.length; i++) {
      this.checkArrayForWinner(board[i])
    }
  }

  checkDiagonalWinner() {
    console.log('checking for a diag winner')
    //check for major conflict along left edge
    let board = this.state.board
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

  checkArrayForWinner(array) {
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
        this.setState({ lastWinner: 'Black Won The Game'})
        this.resetGame()
      } else if (rCount === 4) {
        this.setState({ lastWinner: 'Red Won The Game'})
        this.resetGame()
      }
    }
  }

  //place a piece on the board
  handleClick(event) {
    let index = Number(event.target.id[4])
    let board = this.state.board
    for (let i = 5; i >=0; i--) {
      console.log(i)
      if (board[i][index] === 0) {
        if (this.state.redsTurn) {
          board[i][index] = 2
          this.setState({
            redsTurn: false,
            board
          })
          break
        } else {
          board[i][index] = 1
          this.setState({
            redsTurn: true,
            board
          })
          break
        }
      }
    }

    //check for winners and board lock after each play
    this.hasVerticalWinner()
    this.hasHorizontalWinner()
    this.checkDiagonalWinner()
    this.checkForBoardLock()
  }

  componentDidMount() {
    console.log('component did mount')
  }

  //the board render is not DRY, skipping for now
  render() {

    return (
      <div>
        <EndingMessage message={this.state.lastWinner}/>
      <div>
      <table className="game-board">
        <thead>
          <tr>
            <th id="slot0" className="dropSlot" onClick={this.handleClick.bind(this)}>*</th>
            <th id="slot1" className="dropSlot" onClick={this.handleClick.bind(this)}>*</th>
            <th id="slot2" className="dropSlot" onClick={this.handleClick.bind(this)}>*</th>
            <th id="slot3" className="dropSlot" onClick={this.handleClick.bind(this)}>*</th>
            <th id="slot4" className="dropSlot" onClick={this.handleClick.bind(this)}>*</th>
            <th id="slot5" className="dropSlot" onClick={this.handleClick.bind(this)}>*</th>
            <th id="slot6" className="dropSlot" onClick={this.handleClick.bind(this)}>*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`class${this.state.board[0][0]}`}>&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td className={`class${this.state.board[0][1]}`}>&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td className={`class${this.state.board[0][2]}`}>&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td className={`class${this.state.board[0][3]}`}>&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td className={`class${this.state.board[0][4]}`}>&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td className={`class${this.state.board[0][5]}`}>&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td className={`class${this.state.board[0][6]}`}>&nbsp;&nbsp;&nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td className={`class${this.state.board[1][0]}`}>&nbsp;</td>
            <td className={`class${this.state.board[1][1]}`}></td>
            <td className={`class${this.state.board[1][2]}`}></td>
            <td className={`class${this.state.board[1][3]}`}></td>
            <td className={`class${this.state.board[1][4]}`}></td>
            <td className={`class${this.state.board[1][5]}`}></td>
            <td className={`class${this.state.board[1][6]}`}></td>
          </tr>
          <tr>
            <td className={`class${this.state.board[2][0]}`}>&nbsp;</td>
            <td className={`class${this.state.board[2][1]}`}></td>
            <td className={`class${this.state.board[2][2]}`}></td>
            <td className={`class${this.state.board[2][3]}`}></td>
            <td className={`class${this.state.board[2][4]}`}></td>
            <td className={`class${this.state.board[2][5]}`}></td>
            <td className={`class${this.state.board[2][6]}`}></td>
          </tr>
          <tr>
            <td className={`class${this.state.board[3][0]}`}>&nbsp;</td>
            <td className={`class${this.state.board[3][1]}`}></td>
            <td className={`class${this.state.board[3][2]}`}></td>
            <td className={`class${this.state.board[3][3]}`}></td>
            <td className={`class${this.state.board[3][4]}`}></td>
            <td className={`class${this.state.board[3][5]}`}></td>
            <td className={`class${this.state.board[3][6]}`}></td>
          </tr>
          <tr>
            <td className={`class${this.state.board[4][0]}`}>&nbsp;</td>
            <td className={`class${this.state.board[4][1]}`}></td>
            <td className={`class${this.state.board[4][2]}`}></td>
            <td className={`class${this.state.board[4][3]}`}></td>
            <td className={`class${this.state.board[4][4]}`}></td>
            <td className={`class${this.state.board[4][5]}`}></td>
            <td className={`class${this.state.board[4][6]}`}></td>
          </tr>
          <tr>
            <td className={`class${this.state.board[5][0]}`}>&nbsp;</td>
            <td className={`class${this.state.board[5][1]}`}></td>
            <td className={`class${this.state.board[5][2]}`}></td>
            <td className={`class${this.state.board[5][3]}`}></td>
            <td className={`class${this.state.board[5][4]}`}></td>
            <td className={`class${this.state.board[5][5]}`}></td>
            <td className={`class${this.state.board[5][6]}`}></td>
          </tr>
        </tbody>
      </table>
      </div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))