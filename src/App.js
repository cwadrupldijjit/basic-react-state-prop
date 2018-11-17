import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    editTitle: 'Foo',
    welcome: 'Hello there!',
  };

  render() {
    return (
      <div className="App">
          <Welcome title={this.state.welcome} />
          <Box /> 
          <p>Something</p>
          <Ending />
        
          <form>
            <input placeholder="Title" value={this.state.editTitle} onChange={e => this.handleChange(e)} />

            <button type="submit" onClick={e => this.handleSubmit(e)}>
              Save Title
            </button>
          </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      editTitle: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      welcome: this.state.editTitle,
      editTitle: '',
    });
  }
}

class Welcome extends Component {
  render() {
    return(
      <h1 className="App-header">{this.props.title}</h1>
    )
  }
}

class Box extends Component {
  render() {
return(
  <div>
    <p className="firstLine"> This is a box? </p>
    <p className="firstLine"> This is a box also. </p>
  </div>

    )
  }
}

class Ending extends Component {
  render() {
    return (
      <div>
      <p className="footer"> The end.</p>
      </div>
    )
  }
}

export default App;


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
