// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
<<<<<<< HEAD
    this.setState ({timesClicked: this.state.timesClicked += 1}, () => (this.state.timesClicked))
  }
  
  render() {
    return (<div><button onClick={this.handleClick}> {this.state.timesClicked}</button></div>)
=======
    this.setState ({timesClicked: this.state.timesClicked + 1})
  }
  
  render() {
    return (<button onClick={this.handleClick}> {this.state.timesClicked}</button>)
>>>>>>> e884a9a219831d615faf451f5bbee8980bc2cd4b
  }
}
