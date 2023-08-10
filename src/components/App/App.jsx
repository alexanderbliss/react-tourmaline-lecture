import logo from './logo.svg';
import './App.css';
import Header from '../Header/header'
import Panda from '../Panda/Panda'



// function greet(name, shoeColor){
//    return `Hello ${name}! Nice ${shoeColor} Shoes!`
//   }  

function App() {
  return (
    <div className="App">
      <header className="App-header">


      <Header />


    <Panda disposition="friendly" name="Pandoot" />
    <Panda disposition="fluffy" name="Floof" />
    <Panda disposition="tiny" name="Lil' Paws" />
    <Panda disposition="dreamy" name="Snooze" />
    <Panda disposition="uniquely wonderful" name="Kris Szafranski" />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
