"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetDefault = SetDefault;
exports.Loading = Loading;
exports.ShowLoading = ShowLoading;
exports.HideLoading = HideLoading;
exports.Progress = Progress;

var _react = _interopRequireWildcard(require("react"));

var _client = _interopRequireDefault(require("react-dom/client"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  root: null,
  Create: function Create(props) {
    var div = document.getElementById('loading-ui');

    if (!div) {
      div = document.createElement('div');
      div.id = 'loading-ui';
      document.body.appendChild(div);
    }

    Element.root = _client["default"].createRoot(div);
    Element.root.render(_react["default"].createElement(LoadingComponent, props));
  },
  Remove: function Remove() {
    var div = document.getElementById('loading-ui');
    Element.root.unmount();
    div.parentNode.removeChild(div);
  }
};

var LoadingComponent = function LoadingComponent(_ref) {
  var theme = _ref.theme,
      title = _ref.title,
      text = _ref.text,
      progress = _ref.progress,
      progressValue = _ref.progressValue,
      topBar = _ref.topBar,
      topBarColor = _ref.topBarColor;

  var _useState = (0, _react.useState)("0%"),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var TopBarProgress = (0, _react.useCallback)(function (percentage) {
    setWidth("".concat(percentage, "%"));
    setTimeout(function () {
      var per = Math.random() * ((100 - percentage) / 2) + percentage;
      TopBarProgress(per);
    }, 500);
  }, []);
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      var percentage = Math.random() * 30 + 10;
      TopBarProgress(percentage);
    }, 100);
  }, [TopBarProgress]);
  return _react["default"].createElement("div", {
    className: "loading-ui-overlay ".concat(theme, " ").concat(topBar && 'topbar')
  }, topBar ? _react["default"].createElement("div", {
    className: "loading-ui-topbar",
    id: "loading-ui-topbar",
    style: {
      width: width,
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
};

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
 * @param {object} props 
 * @param {string} [props.title]
 * @param {string} [props.text]
 * @param {bool} [props.progress]
 * @param {boolean} [props.progressedClose]
 * @param {string} [props.theme]
 * @param {bool} [props.topBar]
 * @param {string} [props.topBarColor]
 */


function ShowLoading(props) {
  if (!document.getElementById('loading-ui')) {
    Loading(props);
  }
}

function HideLoading() {
  if (document.getElementById('loading-ui')) {
    Loading();
  }
}
/**
 * @param {number} progress 
 */


function Progress(progress) {
  var div = document.getElementById('loading-ui');

  if (div && progress < 100) {
    Props.progressValue = progress;
    Element.root.render(_react["default"].createElement(LoadingComponent, Props));
  } else if (progress >= 100 && Props.progressedClose && div) {
    Element.Remove();
  }
}
