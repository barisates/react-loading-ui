import React, { Component } from 'react';
import { Loading, Progress, SetDefault } from 'react-loading-ui'
import './App.css';

let interval = null;

class App extends Component {
  constructor() {
    super()

    this.state = {
      progress: 1,
      theme: "dark"
    }

  }
  DefaultLoading() {
    Loading();
    setTimeout(() => { Loading() }, 3000);
  }
  TopbarLoading() {
    Loading({ topBar: true });
    setTimeout(() => { Loading() }, 3000);
  }
  LoadingProgress() {

    Loading({
      progress: true,
      progressedClose: true
    });

    interval = setInterval(() => {

      this.setState(
        { progress: this.state.progress + 4 },
        () => {

          // Set Progress Value
          Progress(this.state.progress);

          if (this.state.progress >= 100) {
            this.setState({ progress: 0 });
            clearInterval(interval);
          }


        });

    }, 100);

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h5 className="mb-3">React Loaing Component</h5>
          <div>
            <button type="button" className="btn btn-sm btn-dark mr-4" onClick={(e) => this.DefaultLoading()}>Show Loading</button>
            <button type="button" className="btn btn-sm btn-dark mr-4" onClick={(e) => this.TopbarLoading()}>Show Top Bar Loading</button>
            <button type="button" className="btn btn-sm btn-dark" onClick={(e) => this.LoadingProgress()}>Show Progress</button> <br />
            <button type="button" className="btn btn-sm btn-light" onClick={(e) => {
              SetDefault({ theme: this.state.theme });
              this.setState({ theme: (this.state.theme === "light" ? "dark" : "light") })
            }}>Set Default Theme: {this.state.theme}</button>
          </div>
          <div className="author">
            <a href="https://github.com/barisates" target="_blank" rel="noopener noreferrer">barisates</a>
          </div>
        </header>
      </div>)
  }
}


export default App;
