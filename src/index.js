import React, { useEffect, useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

let defaultProps = {
  title: "Page Loading",
  text: "Loading content, please wait...",
  progress: false,
  progressedClose: false,
  theme: "light",
  topBar: false,
  topBarColor: '#2764B0',
  // Private
  progressValue: 0
};

let Props = defaultProps;

const Element = {
  root:null,
  Create: (props) => {

    let div = document.getElementById('loading-ui');

    if (!div) {
      div = document.createElement('div');
      div.id = 'loading-ui';
      document.body.appendChild(div);
    }
    Element.root = ReactDOM.createRoot(div);
    Element.root.render(<LoadingComponent {...props}/>);

  },
  Remove: () => {
    const div = document.getElementById('loading-ui')

    Element.root.unmount()
    div.parentNode.removeChild(div)
  }
}

const LoadingComponent = ({ theme, title, text, progress, progressValue, topBar, topBarColor }) => {
  const[width, setWidth] = useState("0%")
  
  const TopBarProgress = useCallback((percentage) =>  {
    setWidth(`${percentage}%`);
    setTimeout(() => {
      const per = Math.random() * ((100 - percentage) / 2) + percentage;
      TopBarProgress(per);
    }, 500);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const percentage = Math.random() * 30 + 10;
      TopBarProgress(percentage);
    }, 100);
  }, [TopBarProgress]);

    return (
      <div className={`loading-ui-overlay ${theme} ${topBar && 'topbar'}`}>
        {topBar ?
          (<div className="loading-ui-topbar" id="loading-ui-topbar" style={{ width: width, backgroundColor: topBarColor }} />) :
          (<div className="loading-ui-wrapper">
            <div className="loading-ui-body">
              <h4 className="loading-ui-title">{title}</h4>
              <p className="loading-ui-text">{text}</p>
              {progress ?
                <div className="loading-ui-progress">
                  <div className="loading-ui-progress-bar" style={{ width: progressValue + "%" }}></div>
                </div>
                :
                <div className="loading-ui-spinner"></div>
              }
            </div>
          </div>)}

      </div>
    )
}

LoadingComponent.defaultProps = defaultProps

/** 
 * [EXPORT] 
 */


/**
 * @param {object} props 
 * @param {string} [props.title]
 * @param {string} [props.text]
 * @param {bool} [props.progress]
 * @param {boolean} [props.progressedClose]
 * @param {string} [props.theme]
 * @param {bool} [props.topBar]
 * @param {string} [props.topBarColor]
 */
export function SetDefault(props) {
  defaultProps = { ...defaultProps, ...props }
  LoadingComponent.defaultProps = defaultProps;
}


/**
 * @param {object} props 
 * @param {string} [props.title]
 * @param {string} [props.text]
 * @param {bool} [props.progress]
 * @param {boolean} [props.progressedClose]
 * @param {string} [props.theme]
 * @param {bool} [props.topBar]
 * @param {string} [props.topBarColor]
 */
export function Loading(props) {
  let div = document.getElementById('loading-ui')

  Props = props;

  if (!div) {
    Element.Create(props);
  } else {
    Element.Remove();
  }
}

/**
 * @param {object} props 
 * @param {string} [props.title]
 * @param {string} [props.text]
 * @param {bool} [props.progress]
 * @param {boolean} [props.progressedClose]
 * @param {string} [props.theme]
 * @param {bool} [props.topBar]
 * @param {string} [props.topBarColor]
 */
export function ShowLoading(props) {
  if (!document.getElementById('loading-ui')) {
    Loading(props);
  }
}

export function HideLoading() {
  if (document.getElementById('loading-ui')) {
    Loading();
  }
}

/**
 * @param {number} progress 
 */
export function Progress(progress) {

  let div = document.getElementById('loading-ui');

  if (div && progress < 100) {
    Props.progressValue = progress;

    Element.root.render(<LoadingComponent {...Props}/>);

  } else if (progress >= 100 && Props.progressedClose && div) {
    Element.Remove();
  }
}
