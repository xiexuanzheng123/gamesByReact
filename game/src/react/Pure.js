import React from 'react';

class ListOfWords extends React.PureComponent {
    render() {
        console.log(this.props);
      return <div>{this.props.words.join(',')}</div>;
    }
  }
  
  class WordAdder extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        words: ['marklar']
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      // 这部分代码很糟，而且还有 bug
      const words = this.state.words.slice();
      words.push('marklar');
      this.setState({words: words});
    }
  
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click</button>
          <ListOfWords words={this.state.words} />
        </div>
      );
    }
  }

  export default WordAdder;