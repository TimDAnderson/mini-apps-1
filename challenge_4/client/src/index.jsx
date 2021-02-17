import myFunc from './components/component1.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      black: 1,
      red: 2,
      redsTurn: true,
      board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 2, 2, 2, 2, 0, 0]
      ]
    }
  }

  hasVerticalWinner() {
    let board = this.state.board
    for (let i = 0; i < board[0].length; i++) {
      let columnArray = []
      for (let j = 0; j < board.length; j++) {
        columnArray.push(board[j][i])
      }
      //check columnArray for winner - this will keep changing
      bCount = 0
      rCount = 0
      for (let k = 0; k < columnArray.length; k++) {
        if (columnArray[k] === 1) {
          bCount++
          rCount = 0
        } else if (columnArray[k] === 2) {
          bCount = 0
          rCount++
        }
        if (bCount === 4) {
          return 'black wins'
        } else if (rCount === 4) {
          return 'red wins'
        }
      }
    }
  }


  hasHorizontalWinner() {
    let board = this.state.board
    for (let i = 0; i < board.length; i++) {
      bCount = 0
      rCount = 0
      for (let j = 0; j < board[i].length; j++) {
        if (board[i[j]] === 1) {
          bCount++
          rCount = 0
        } else if (board[i[j]] === 2) {
          bCount = 0
          rCount++
        }
        if (bCount === 4) {
          return 'black wins'
        } else if (rCount === 4) {
          return 'red wins'
        }
      }
    }
  }


  handleClick(event) {
    console.log('got a click')
    console.log(event.target.id)
    let index = Number(event.target.id[4])
    //place the piece
    let board = this.state.board
    console.log(this.state.redsTurn)
    if (board[5][index] === 0) {
      if (this.state.redsTurn) {
        board[5][index] = 2
        this.setState({
          redsTurn: false,
          board
        })
      } else {
        board[5][index] = 1
        this.setState({
          redsTurn: true,
          board
        })
      }
    } else if (board[4][index] === 0) {
      if (this.state.redsTurn) {
        board[4][index] = 2
        this.setState({
          redsTurn: false,
          board
        })
      } else {
        board[4][index] = 1
        this.setState({
          redsTurn: true,
          board
        })
      }
    } else if (board[3][index] === 0) {
      if (this.state.redsTurn) {
        board[3][index] = 2
        this.setState({
          redsTurn: false,
          board
        })
      } else {
        board[3][index] = 1
        this.setState({
          redsTurn: true,
          board
        })
      }
    } else if (board[2][index] === 0) {
      if (this.state.redsTurn) {
        board[2][index] = 2
        this.setState({
          redsTurn: false,
          board
        })
      } else {
        board[2][index] = 1
        this.setState({
          redsTurn: true,
          board
        })
      }
    } else if (board[1][index] === 0) {
      if (this.state.redsTurn) {
        board[1][index] = 2
        this.setState({
          redsTurn: false,
          board
        })
      } else {
        board[1][index] = 1
        this.setState({
          redsTurn: true,
          board
        })
      }
    } else if (board[0][index] === 0) {
      if (this.state.redsTurn) {
        board[0][index] = 2
        this.setState({
          redsTurn: false,
          board
        })
      } else {
        board[0][index] = 1
        this.setState({
          redsTurn: true,
          board
        })
      }
    }
    console.log(this.state.board)
  }

  componentDidMount() {
    console.log('component did mount')
  }

  render() {
    return (
      <table className="game-board">
        <tr>
          <th id="slot0" className="dropSlot" onClick={this.handleClick.bind(this)}>*</th>
          <th id="slot1" className="dropSlot" onClick={this.handleClick.bind(this)}>*</th>
          <th id="slot2" className="dropSlot" onClick={this.handleClick.bind(this)}>*</th>
          <th id="slot3" className="dropSlot" onClick={this.handleClick.bind(this)}>*</th>
          <th id="slot4" className="dropSlot" onClick={this.handleClick.bind(this)}>*</th>
          <th id="slot5" className="dropSlot" onClick={this.handleClick.bind(this)}>*</th>
          <th id="slot6" className="dropSlot" onClick={this.handleClick.bind(this)}>*</th>
        </tr>
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
      </table>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))