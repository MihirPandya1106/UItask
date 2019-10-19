"use strict";

var _templateObject = _taggedTemplateLiteralLoose(["\n  body {\n    margin: 0;\n  }\n"], ["\n  body {\n    margin: 0;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  padding: 0 "], ["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  padding: 0 "]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  -webkit-tap-highlight-color: transparent;\n"], ["\n  -webkit-tap-highlight-color: transparent;\n"]),
    _templateObject4 = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  height: ", ";\n  fill: #fff;\n  cursor: inherit;\n\n  ", "\n\n  ", "\n\n  .arrow {\n    ", "\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  fill: #fff;\n  cursor: inherit;\n\n  ", "\n\n  ", "\n\n  .arrow {\n    ", "\n  }\n"]),
    _templateObject5 = _taggedTemplateLiteralLoose(["\n    width: ", ";\n    height: ", ";\n  "], ["\n    width: ", ";\n    height: ", ";\n  "]),
    _templateObject6 = _taggedTemplateLiteralLoose(["\n      transform-origin: center;\n      transform: scale(1.6);\n    "], ["\n      transform-origin: center;\n      transform: scale(1.6);\n    "]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var _ReactDOM = ReactDOM;
var render = _ReactDOM.render;
var _React = React;
var Component = _React.Component;
var css = styled.css;
var injectGlobal = styled.injectGlobal;
var styled = styled.default;
var _styleUtils = styleUtils;
var min = _styleUtils.min;
var max = _styleUtils.max;
var rem = _styleUtils.rem;
var em = _styleUtils.em;

injectGlobal(_templateObject);

var Wrapper = styled.div(_templateObject2, rem(50));

var Link = styled.a(_templateObject3);

var blurShape = "M110,60c0,27.6-22.4,50-50,50c-27.6,0-50-22.4-50-50c0-27.6,22.4-50,50-50C87.6,10,110,32.4,110,60z";
var activeShape = "M96,60c0,27.6-8.4,53-36,53c-27.6,0-36-25.4-36-53c0-27.6,8.4-53,36-53C87.6,7,96,32.4,96,60z";

var Arrow = function (_Component) {
  _inherits(Arrow, _Component);

  function Arrow() {
    var _temp, _this, _ret;

    _classCallCheck(this, Arrow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onActive = function () {
      return TweenMax.to(_this.circle, .5, {
        attr: { d: activeShape },
        transformOrigin: 'center',
        ease: Elastic.easeOut
      });
    }, _this.onBlur = function () {
      return TweenMax.to(_this.circle, 1, {
        attr: { d: blurShape },
        ease: Elastic.easeOut
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Arrow.prototype.render = function render() {
    var _this2 = this;

    var className = this.props.className;

    var arrowID = Math.random();

    return React.createElement(
      "div",
      {
        className: className,
        onMouseDown: this.onActive,
        onTouchStart: this.onActive,
        onMouseLeave: this.onBlur,
        onMouseUp: this.onBlur
      },
      React.createElement(
        "svg",
        {
          viewBox: "0 0 120 120",
          preserveAspectRatio: "none",
          width: "100%", height: "100%"
        },
        React.createElement(
          "mask",
          { id: "" + arrowID },
          React.createElement("rect", { fill: "#fff", width: "100%", height: "100%" }),
          React.createElement("path", { fill: "#000", className: "arrow", d: "M48.5,61.5v-2.9h17.4l-8-8l2.1-2.1L71.5,60L60,71.5l-2.1-2.1l8-8H48.5z" })
        ),
        React.createElement("path", { ref: function ref(el) {
            return _this2.circle = el;
          }, mask: "url(#" + arrowID + ")", d: blurShape })
      )
    );
  };

  return Arrow;
}(Component);

Arrow = styled(Arrow)(_templateObject4, rem(60), rem(60), min(500)(_templateObject5, rem(120), rem(120)), function (_ref) {
  var left = _ref.left;
  return left && "transform: rotate(180deg);";
}, max(500)(_templateObject6));

render(React.createElement(
  Wrapper,
  null,
  React.createElement(
    Link,
    { href: "#" },
    React.createElement(Arrow, { left: true })
  ),
  React.createElement(
    Link,
    { href: "#" },
    React.createElement(Arrow, null)
  )
), document.getElementById('root'));