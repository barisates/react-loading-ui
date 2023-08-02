import React, { useRef, useState } from 'react';
import { Loading, Progress, SetDefault } from 'react-loading-ui'
import './App.css';

let interval = null;

const App =() =>{
  const progress = useRef(1);
  const [theme, setTheme] = useState("dark");

  const DefaultLoading = () => {
    Loading();
    setTimeout(() => { Loading() }, 3000);
  }
  const TopbarLoading = () =>  {
    Loading({ topBar: true });
    setTimeout(() => { Loading() }, 3000);
  }
  const LoadingProgress = () =>  {
    Loading({
      progress: true,
      progressedClose: true
    });

    interval = setInterval(() => {
      progress.current = progress.current + 4;
      Progress(progress.current);
      if (progress.current >= 100) {
        progress.current = 0;
        clearInterval(interval);
      }
    }, 100);

  }
    return (
      <div className="App">
        <header className="App-header">
          <h5 className="mb-3">React Loaing Component</h5>
          <div>
            <button type="button" className="btn btn-sm btn-dark mr-4" onClick={DefaultLoading}>Show Loading</button>
            <button type="button" className="btn btn-sm btn-dark mr-4" onClick={TopbarLoading}>Show Top Bar Loading</button>
            <button type="button" className="btn btn-sm btn-dark" onClick={LoadingProgress}>Show Progress</button> <br />
            <button type="button" className="btn btn-sm btn-light" onClick={() => {
              SetDefault({ theme: theme });
              setTheme(theme === "light" ? "dark" : "light")
            }}>Set Default Theme: {theme}</button>
          </div>
          <div className="author">
            <a href="https://github.com/barisates" target="_blank" rel="noopener noreferrer">barisates</a>
          </div>
        </header>
      </div>)
}


export default App;
