import React from 'react';
import ReactDOM from 'react-dom';

// import components
import { AlarmClock } from './components/AlarmClock';
//import { Clock } from './components/Clock';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <AlarmClock />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

