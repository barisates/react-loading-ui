"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetDefault = SetDefault;
exports.Loading = Loading;
exports.Progress = Progress;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

require("./index.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var defaultProps = {
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
var Props = defaultProps;
var Element = {
  Create: function Create(props) {
    var div = document.getElementById('loading-ui');

    if (!div) {
      div = document.createElement('div');
      div.id = 'loading-ui';
      document.body.appendChild(div);
    }

    (0, _reactDom.render)(_react["default"].createElement(LoadingComponent, props), div);
  },
  Remove: function Remove() {
    var div = document.getElementById('loading-ui');
    (0, _reactDom.unmountComponentAtNode)(div);
    div.parentNode.removeChild(div);
  }
};

var LoadingComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(LoadingComponent, _Component);

  function LoadingComponent(props) {
    var _this;

    _classCallCheck(this, LoadingComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoadingComponent).call(this, props));
    _this.state = {
      width: "0%"
    };
    return _this;
  }

  _createClass(LoadingComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        var percentage = Math.random() * 30 + 10;

        _this2.TopBarProgress(percentage);
      }, 100);
    }
  }, {
    key: "TopBarProgress",
    value: function TopBarProgress(percentage) {
      var _this3 = this;

      this.setState({
        width: "".concat(percentage, "%")
      }, function () {
        setTimeout(function () {
          var per = Math.random() * ((100 - percentage) / 2) + percentage;

          _this3.TopBarProgress(per);
        }, 500);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          title = _this$props.title,
          text = _this$props.text,
          progress = _this$props.progress,
          progressValue = _this$props.progressValue,
          topBar = _this$props.topBar,
          topBarColor = _this$props.topBarColor;
      return _react["default"].createElement("div", {
        className: "loading-ui-overlay ".concat(theme, " ").concat(topBar && 'topbar')
      }, topBar ? _react["default"].createElement("div", {
        className: "loading-ui-topbar",
        id: "loading-ui-topbar",
        style: {
          width: this.state.width,
          backgroundColor: topBarColor
        }
      }) : _react["default"].createElement("div", {
        className: "loading-ui-wrapper"
      }, _react["default"].createElement("div", {
        className: "loading-ui-body"
      }, _react["default"].createElement("h4", {
        className: "loading-ui-title"
      }, title), _react["default"].createElement("p", {
        className: "loading-ui-text"
      }, text), progress ? _react["default"].createElement("div", {
        className: "loading-ui-progress"
      }, _react["default"].createElement("div", {
        className: "loading-ui-progress-bar",
        style: {
          width: progressValue + "%"
        }
      })) : _react["default"].createElement("div", {
        className: "loading-ui-spinner"
      }))));
    }
  }]);

  return LoadingComponent;
}(_react.Component);

LoadingComponent.defaultProps = defaultProps;
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

function SetDefault(props) {
  defaultProps = _objectSpread({}, defaultProps, {}, props);
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


function Loading(props) {
  var div = document.getElementById('loading-ui');
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


function Progress(progress) {
  var div = document.getElementById('loading-ui');

  if (div && progress < 100) {
    Props.progressValue = progress;
    (0, _reactDom.render)(_react["default"].createElement(LoadingComponent, Props), div);
  } else if (progress >= 100 && Props.progressedClose && div) {
    Element.Remove();
  }
}
