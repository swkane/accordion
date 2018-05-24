import React, { Component } from 'react';
import './App.css';

class Accordian extends Component {
  state = {
    open: this.props.open || false
  }

  handleClick = () => {
    this.setState( {
      open: !this.state.open
    } )
  }

  render() {
    return (
      <div style={{ border: '2px solid black' }}>
        <div onClick={this.handleClick} style={{ border: '2px solid blue' }} htmlFor="">{this.props.title}</div>
        {this.state.open &&
          this.props.children
        }
      </div>
    );
  }
}

class App extends Component {
  
  render() {
    return (
      <Accordian open title="New Title">
        <strong>Lorem</strong> ipsum dolor sit, amet consectetur adipisicing elit. Cumque, repellat!
        <Accordian title="Second Title">
          <marquee>Second ipsum dolor sit, amet consectetur adipisicing elit. Cumque, repellat!</marquee>
        </Accordian>
      </Accordian>
    );
  }
}

export default App;
