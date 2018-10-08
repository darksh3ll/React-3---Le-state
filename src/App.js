import React, { Component } from 'react';
import logo from './logo.svg';
import logo2 from './ls.jpg'
import './App.css';
import Quote from './Quote';
import Lamp from './Lamp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working:false
    };
  }
changing = () => {
  this.setState ({
    working:!this.state.working
  })
// this.state.working === true ? this.setState({working:false}):this.setState({working:true})


}

  render() {
    const change = this.state.working? "App-logo":"changingAnimation";
    const changelogo = this.state.working? logo:logo2;
    return (
      <div className="App">
        <header className="App-header">
          <img src={changelogo} className={change} alt="logo" />
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
          <button className="BTN" onClick ={()=> this.changing()}>Changing vitesse Logo</button>
        </header>
        {/* Component */}
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
        <button onClick ={()=> this.changing()}>Click</button>
        <Lamp on/>
        <Lamp/>
      </div>
    );
  }
}

export default App;
