var expect = require('chai').expect
var algos = require('./algos.js')


describe('checking for red and black wins', ()=>{
  it('should detect a vertical red win', (done)=>{
    var redVertWin = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0],
      [2, 1, 0, 0, 0, 0, 0],
      [2, 1, 0, 0, 0, 0, 0],
      [2, 1, 0, 0, 0, 0, 0]
    ]
    expect(algos.hasVerticalWinner(redVertWin)).to.equal('red')
    done()
  })

  it('should detect a vertical black win', (done)=>{
    var blackVertWin = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0],
      [2, 1, 0, 0, 0, 0, 0],
      [2, 1, 0, 0, 0, 0, 0],
      [2, 1, 2, 0, 0, 0, 0]
    ]
    expect(algos.hasVerticalWinner(blackVertWin)).to.equal('black')
    done()
  })

  it('should detect a horizontal red win', (done)=>{
    var blackVertWin = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [2, 1, 0, 0, 0, 0, 0],
      [2, 1, 1, 0, 1, 0, 0],
      [2, 1, 2, 2, 2, 2, 0]
    ]
    expect(algos.hasHorizontalWinner(blackVertWin)).to.equal('red')
    done()
  })

  it('should detect a horizontal black win', (done)=>{
    var blackVertWin = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 0],
      [2, 1, 0, 2, 0, 0, 0],
      [2, 1, 0, 2, 0, 0, 0],
      [2, 1, 2, 1, 1, 1, 1]
    ]
    expect(algos.hasHorizontalWinner(blackVertWin)).to.equal('black')
    done()
  })

})