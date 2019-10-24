import React from 'react';
import PlayerCard from './components/PlayerCard';
import Navbar from './components/NavBar';
import './App.css';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         data: []
      };
   }
   componentDidMount() {
      fetch('http://localhost:5000/api/players')
         .then(res => res.json())
         .then(names => this.setState({ data: names }))
         .catch(err => console.log('err', err));
   }

   render() {
      return (
         <div>
            <div className='App'>
               <Navbar />
            </div>
            <h3>Players:</h3>
            <div className='cards'>
               {this.state.data.map(players => (
                  <PlayerCard players={players} />
               ))}
            </div>
         </div>
      );
   }
}
export default App;
