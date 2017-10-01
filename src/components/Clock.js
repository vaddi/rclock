import React from 'react';

export class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };  
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
  }
  

  render() {
    return (
      <span className="clock">
        {this.state.date.toLocaleTimeString()}
      </span>
    );
  }
}

