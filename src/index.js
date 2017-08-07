import React from 'react';
import ReactDOM from 'react-dom';

// import components
import { Clock } from './components/Clock';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

