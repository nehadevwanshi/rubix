'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('react-bootstrap/lib/utils/bootstrapUtils');

var _StyleConfig = require('react-bootstrap/lib/utils/StyleConfig');

var _ValidComponentChildren = require('react-bootstrap/lib/utils/ValidComponentChildren');

var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROUND_PRECISION = 1000;

/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */
function onlyProgressBar(props, propName, componentName) {
  var children = props[propName];
  if (!children) {
    return null;
  }

  var error = null;

  _react2.default.Children.forEach(children, function (child) {
    if (error) {
      return;
    }

    if (child.type === ProgressBar) {
      // eslint-disable-line no-use-before-define
      return;
    }

    var childIdentifier = _react2.default.isValidElement(child) ? child.type.displayName || child.type.name || child.type : child;
    error = new Error('Children of ' + componentName + ' can contain only ProgressBar ' + ('components. Found ' + childIdentifier + '.'));
  });

  return error;
}

var propTypes = {
  min: _react.PropTypes.number,
  now: _react.PropTypes.number,
  max: _react.PropTypes.number,
  label: _react.PropTypes.node,
  srOnly: _react.PropTypes.bool,
  striped: _react.PropTypes.bool,
  active: _react.PropTypes.bool,
  children: onlyProgressBar,

  /**
   * @private
   */
  isChild: _react.PropTypes.bool
};

var defaultProps = {
  min: 0,
  max: 100,
  active: false,
  isChild: false,
  srOnly: false,
  striped: false
};

function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

var ProgressBar = function (_React$Component) {
  (0, _inherits3.default)(ProgressBar, _React$Component);

  function ProgressBar() {
    (0, _classCallCheck3.default)(this, ProgressBar);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ProgressBar).apply(this, arguments));
  }

  (0, _createClass3.default)(ProgressBar, [{
    key: 'renderProgressBar',
    value: function renderProgressBar(_ref) {
      var min = _ref.min;
      var now = _ref.now;
      var max = _ref.max;
      var label = _ref.label;
      var srOnly = _ref.srOnly;
      var striped = _ref.striped;
      var active = _ref.active;
      var className = _ref.className;
      var style = _ref.style;
      var color = _ref.color;
      var props = (0, _objectWithoutProperties3.default)(_ref, ['min', 'now', 'max', 'label', 'srOnly', 'striped', 'active', 'className', 'style', 'color']);

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

      var _splitBsProps2 = (0, _slicedToArray3.default)(_splitBsProps, 2);

      var bsProps = _splitBsProps2[0];
      var elementProps = _splitBsProps2[1];


      var classes = (0, _extends4.default)({}, (0, _bootstrapUtils.getClassSet)(bsProps), (0, _defineProperty3.default)({
        active: active
      }, (0, _bootstrapUtils.prefix)(bsProps, 'striped'), active || striped));

      return _react2.default.createElement(
        'div',
        (0, _extends4.default)({}, elementProps, {
          role: 'progressbar',
          className: (0, _classnames2.default)(className, classes),
          style: (0, _extends4.default)({ width: getPercentage(now, min, max) + '%', backgroundColor: color }, style),
          'aria-valuenow': now,
          'aria-valuemin': min,
          'aria-valuemax': max
        }),
        srOnly ? _react2.default.createElement(
          'span',
          { className: 'sr-only' },
          label
        ) : label
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var isChild = _props.isChild;
      var props = (0, _objectWithoutProperties3.default)(_props, ['isChild']);


      if (isChild) {
        return this.renderProgressBar(props);
      }

      var min = props.min;
      var now = props.now;
      var max = props.max;
      var label = props.label;
      var srOnly = props.srOnly;
      var striped = props.striped;
      var active = props.active;
      var bsClass = props.bsClass;
      var bsStyle = props.bsStyle;
      var color = props.color;
      var className = props.className;
      var children = props.children;
      var wrapperProps = (0, _objectWithoutProperties3.default)(props, ['min', 'now', 'max', 'label', 'srOnly', 'striped', 'active', 'bsClass', 'bsStyle', 'color', 'className', 'children']);


      return _react2.default.createElement(
        'div',
        (0, _extends4.default)({}, wrapperProps, {
          className: (0, _classnames2.default)(className, 'progress')
        }),
        children ? _ValidComponentChildren2.default.map(children, function (child) {
          return (0, _react.cloneElement)(child, { isChild: true });
        }) : this.renderProgressBar({
          min: min, now: now, max: max, label: label, srOnly: srOnly, striped: striped, active: active, bsClass: bsClass, bsStyle: bsStyle, color: color
        })
      );
    }
  }]);
  return ProgressBar;
}(_react2.default.Component);

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

exports.default = (0, _bootstrapUtils.bsClass)('progress-bar', (0, _bootstrapUtils.bsStyles)((0, _values2.default)(_StyleConfig.State), ProgressBar));