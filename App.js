import React from 'react';
import ReactDOM from 'react-dom';

// class Button extends React.Component {
//   render() {
//     return <button>Click</button>
//   }
// }

class App extends React.Component {
  constructor() {
    super();

    this.state = { 
      clickCount: 0
    }

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(evt) {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }
  
  render() {
    return (
      <div>
        <h2>Hi {this.props.name}</h2>
        <div>
          <button onClick={this.onButtonClick}>Click here</button>
        </div>
        <div>
          <p>{this.state.clickCount}</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App name="Jon"/>, document.getElementById('app'));

export default App