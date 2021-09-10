import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom'
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
  Create: (props) => {

    let div = document.getElementById('loading-ui');

    if (!div) {
      div = document.createElement('div');
      div.id = 'loading-ui';
      document.body.appendChild(div);
    }

    render(<LoadingComponent {...props} />, div)

  },
  Remove: () => {
    const div = document.getElementById('loading-ui')
    
    unmountComponentAtNode(div)
    div.parentNode.removeChild(div)
  }
}


class LoadingComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: "0%",
    }
  }
  componentDidMount() {
    setTimeout(() => {
      const percentage = Math.random() * 30 + 10;
      this.TopBarProgress(percentage);
    }, 100);
  }
  TopBarProgress(percentage) {
    this.setState({ width: `${percentage}%` }, () => {
      setTimeout(() => {
        const per = Math.random() * ((100 - percentage) / 2) + percentage;
        this.TopBarProgress(per);
      }, 500);
    });
  }
  render() {

    const { theme, title, text, progress, progressValue, topBar, topBarColor } = this.props;

    return (
      <div className={`loading-ui-overlay ${theme} ${topBar && 'topbar'}`}>
        {topBar ?
          (<div className="loading-ui-topbar" id="loading-ui-topbar" style={{ width: this.state.width, backgroundColor: topBarColor }} />) :
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
 * @param {number} progress 
 */
export function Progress(progress) {

  let div = document.getElementById('loading-ui');

  if (div && progress < 100) {

    Props.progressValue = progress;

    render(<LoadingComponent {...Props} />, div)

  } else if (progress >= 100 && Props.progressedClose && div) {
    Element.Remove();
  }
}
