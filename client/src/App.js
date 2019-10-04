import React from 'react';
import axios from 'axios';

import './App.css';
import Card from './Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  render() {
    return (
      <div className='App'>
        <div>
          <h1>Women's World Cup</h1>
          <button>Dark Mode</button>
        </div>
        <Card />
      </div>
    );
  }
}

export default App;
