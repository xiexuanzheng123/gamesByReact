import React from 'react';
// import ReactDOM from 'react-dom';


// class Square extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   // this.state = {value: null}
//   // }
//   // handleClick() {
//   //   debugger;
//   //   if (this.state.value === null) {
//   //     this.setState({value: 'X'});
//   //   } else {
//   //     if(this.state.value === 'X') {
//   //       this.setState({value: 'O'});
//   //     } else {
//   //       this.setState({value: 'X'});
//   //     }
//   //   }
//   // }
//   render() {
//     return (
//       <button 
//         className="square" 
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }
function Square(props) {
  return (
    <button 
        className="square" 
        onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      next: 'X'
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.next === 'X' ? 'X' : 'O';
    this.setState({squares: squares, next: this.state.next === 'X' ? 'O' : 'X'});
  }
  renderSquare(i) {
    return <Square 
              value = {this.state.squares[i]} 
              onClick = {() => this.handleClick(i)}
            />;
  }
  
  render() {
    // const status = 'Next player: ' + this.state.next;
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + this.state.next;
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    // debugger;
    const [a, b, c] = lines[i];
    if (squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
// ========================================
export default Game;

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );
