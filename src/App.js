import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
    }

  }

  // the moment your component gets placed on the DOM is when you want to make an API request, so that we can display stuff asap
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') //it's a promise - asynchronous programming
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        () => { console.log(this.state) }
      ));
  }

  render() {
    return (
      <div className="App">
        <input className='searchbox' type='search' placeholder='search monsters' onChange={(event) => {

          const searchValue = event.target.value.toLowerCase();

          const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchValue);
          })
          this.setState(() => {
            return { monsters: filteredMonsters }
          })
        }} />



        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }

      </div >
    );
  }
}

export default App;
