"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import react from 'react';
// import react-dom from 'react-dom';
var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props); // this sends the appropriate props to the react component constructor

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      event.preventDefault(); // this will be the click event for the rendering of the

      console.log('starting the checkout process');

      _this.setState({
        currentForm: _this.state.currentForm + 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {// this will be the handle change event to alter the state back in the parent App
      // uses e.target.value
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (event) {
      event.preventDefault();
      console.log('stand in for submission');

      if (_this.state.currentForm < 3) {
        _this.setState({
          currentForm: _this.state.currentForm + 1
        });
      } else {
        _this.setState({
          currentForm: 0
        });
      }
    });

    _this.state = {
      name: "steve",
      email: "google@yahoo.spam",
      password: "potatoes",
      addressLnOne: "123 wallaby ln",
      addressLnTwo: "hawaii",
      phoneNum: "123-123-1223",
      card: "11111112222",
      cvv: "123",
      zip: "99999",
      currentForm: 0
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      // insert jsx here (javascript and xml)
      // this will render a form to the page
      //must include a return statement
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Amazon Procrastination Purchases"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(LandingPage, {
        currentForm: this.state.currentForm,
        handleClick: this.handleClick
      }), /*#__PURE__*/React.createElement(FormOne, {
        currentForm: this.state.currentForm,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      }), /*#__PURE__*/React.createElement(FormTwo, {
        currentForm: this.state.currentForm,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      }), /*#__PURE__*/React.createElement(FormThree, {
        currentForm: this.state.currentForm,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      }));
    }
  }]);

  return App;
}(React.Component);

var LandingPage = function LandingPage(_ref) {
  var currentForm = _ref.currentForm,
      handleClick = _ref.handleClick;

  if (currentForm !== 0) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Landing Page"), /*#__PURE__*/React.createElement("button", {
    id: "beginCheckout",
    onClick: handleClick
  }, "Begin Checkout"));
};

var FormOne = function FormOne(_ref2) {
  var currentForm = _ref2.currentForm,
      handleChange = _ref2.handleChange,
      handleSubmit = _ref2.handleSubmit;

  if (currentForm !== 1) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", {
    "for": "name"
  }, "Name"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "name"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    "for": "email"
  }, "Email"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "email"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    "for": "password"
  }, "Password"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "password"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    onClick: handleSubmit
  })));
};

var FormTwo = function FormTwo(_ref3) {
  var currentForm = _ref3.currentForm,
      handleChange = _ref3.handleChange,
      handleSubmit = _ref3.handleSubmit;

  if (currentForm !== 2) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", {
    "for": "addressLnOne"
  }, "Address Line One"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "addressLnOne"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    "for": "addressLnTwo"
  }, "Address Line Two"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "addressLnTwo"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    "for": "phone"
  }, "Phone Number"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "phone"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    onClick: handleSubmit
  })));
};

var FormThree = function FormThree(_ref4) {
  var currentForm = _ref4.currentForm,
      handleChange = _ref4.handleChange,
      handleSubmit = _ref4.handleSubmit;

  if (currentForm !== 3) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", {
    "for": "creditCard"
  }, "Credit Card"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "creditCard"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    "for": "expiration"
  }, "Expiration Date"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "expiration"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    "for": "cvv"
  }, "CVV code"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "cvv"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    "for": "zipCode"
  }, "Billing Zip Code"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "zipCode"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    onClick: handleSubmit
  })));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImN1cnJlbnRGb3JtIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImFkZHJlc3NMbk9uZSIsImFkZHJlc3NMblR3byIsInBob25lTnVtIiwiY2FyZCIsImN2diIsInppcCIsImhhbmRsZUNsaWNrIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiTGFuZGluZ1BhZ2UiLCJGb3JtT25lIiwiRm9ybVR3byIsIkZvcm1UaHJlZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0lBR01BLEc7Ozs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTixFQURpQixDQUNKOztBQURJLGtFQW9CTCxVQUFDQyxLQUFELEVBQVc7QUFDdkJBLE1BQUFBLEtBQUssQ0FBQ0MsY0FBTixHQUR1QixDQUV2Qjs7QUFDQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksK0JBQVo7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLFFBQUFBLFdBQVcsRUFBRSxNQUFLQyxLQUFMLENBQVdELFdBQVgsR0FBeUI7QUFEMUIsT0FBZDtBQUdELEtBM0JrQjs7QUFBQSxtRUE2QkosVUFBQ0wsS0FBRCxFQUFXLENBQ3hCO0FBQ0E7QUFDRCxLQWhDa0I7O0FBQUEsbUVBbUNKLFVBQUNBLEtBQUQsRUFBVztBQUN4QkEsTUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaOztBQUNBLFVBQUksTUFBS0csS0FBTCxDQUFXRCxX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LEdBQUQsT0FBaEIsRUFBeUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCByZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgcmVhY3QtZG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcykgLy8gdGhpcyBzZW5kcyB0aGUgYXBwcm9wcmlhdGUgcHJvcHMgdG8gdGhlIHJlYWN0IGNvbXBvbmVudCBjb25zdHJ1Y3RvclxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBcInN0ZXZlXCIsXG4gICAgICBlbWFpbDogXCJnb29nbGVAeWFob28uc3BhbVwiLFxuICAgICAgcGFzc3dvcmQ6IFwicG90YXRvZXNcIixcbiAgICAgIGFkZHJlc3NMbk9uZTogXCIxMjMgd2FsbGFieSBsblwiLFxuICAgICAgYWRkcmVzc0xuVHdvOiBcImhhd2FpaVwiLFxuICAgICAgcGhvbmVOdW06IFwiMTIzLTEyMy0xMjIzXCIsXG4gICAgICBjYXJkOiBcIjExMTExMTEyMjIyXCIsXG4gICAgICBjdnY6IFwiMTIzXCIsXG4gICAgICB6aXA6IFwiOTk5OTlcIixcbiAgICAgIGN1cnJlbnRGb3JtOiAwXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyB0aGlzIHdpbGwgYmUgdGhlIGNsaWNrIGV2ZW50IGZvciB0aGUgcmVuZGVyaW5nIG9mIHRoZVxuICAgIGNvbnNvbGUubG9nKCdzdGFydGluZyB0aGUgY2hlY2tvdXQgcHJvY2VzcycpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudEZvcm06IHRoaXMuc3RhdGUuY3VycmVudEZvcm0gKyAxXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIC8vIHRoaXMgd2lsbCBiZSB0aGUgaGFuZGxlIGNoYW5nZSBldmVudCB0byBhbHRlciB0aGUgc3RhdGUgYmFjayBpbiB0aGUgcGFyZW50IEFwcFxuICAgIC8vIHVzZXMgZS50YXJnZXQudmFsdWVcbiAgfVxuXG4gIC8vIHRoaXMgd2lsbCBiZSB0aGUgYnV0dG9uIHdoaWNoIGlzIHByZXNzZWQgYXQgdGhlIGVuZCBvZiBjb21wbGV0aW5nIGVhY2ggZm9ybVxuICBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdzdGFuZCBpbiBmb3Igc3VibWlzc2lvbicpO1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRGb3JtIDwgMykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRGb3JtOiB0aGlzLnN0YXRlLmN1cnJlbnRGb3JtICsgMVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRGb3JtOiAwXG4gICAgICB9KVxuXG4gICAgfVxuICB9XG5cblxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBpbnNlcnQganN4IGhlcmUgKGphdmFzY3JpcHQgYW5kIHhtbClcbiAgICAvLyB0aGlzIHdpbGwgcmVuZGVyIGEgZm9ybSB0byB0aGUgcGFnZVxuICAgIC8vbXVzdCBpbmNsdWRlIGEgcmV0dXJuIHN0YXRlbWVudFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5BbWF6b24gUHJvY3Jhc3RpbmF0aW9uIFB1cmNoYXNlczwvaDE+XG4gICAgICAgIDxocj48L2hyPlxuICAgICAgICA8TGFuZGluZ1BhZ2UgY3VycmVudEZvcm09e3RoaXMuc3RhdGUuY3VycmVudEZvcm19IGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfS8+XG4gICAgICAgIDxGb3JtT25lIGN1cnJlbnRGb3JtPXt0aGlzLnN0YXRlLmN1cnJlbnRGb3JtfSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fS8+XG4gICAgICAgIDxGb3JtVHdvIGN1cnJlbnRGb3JtPXt0aGlzLnN0YXRlLmN1cnJlbnRGb3JtfSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fS8+XG4gICAgICAgIDxGb3JtVGhyZWUgY3VycmVudEZvcm09e3RoaXMuc3RhdGUuY3VycmVudEZvcm19IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICB9XG59XG5cbnZhciBMYW5kaW5nUGFnZSA9ICh7Y3VycmVudEZvcm0sIGhhbmRsZUNsaWNrfSkgPT4ge1xuICBpZiAoY3VycmVudEZvcm0gIT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TGFuZGluZyBQYWdlPC9oMT5cbiAgICAgIDxidXR0b24gaWQ9XCJiZWdpbkNoZWNrb3V0XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PkJlZ2luIENoZWNrb3V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxudmFyIEZvcm1PbmUgPSAoe2N1cnJlbnRGb3JtLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZVN1Ym1pdH0pID0+IHtcbiAgaWYgKGN1cnJlbnRGb3JtICE9PSAxKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGZvcm0+XG4gICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cIm5hbWVcIj48L2lucHV0PlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJlbWFpbFwiPjwvaW5wdXQ+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cInBhc3N3b3JkXCI+PC9pbnB1dD5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PjwvaW5wdXQ+XG4gICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxudmFyIEZvcm1Ud28gPSAoe2N1cnJlbnRGb3JtLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZVN1Ym1pdH0pID0+IHtcbiAgaWYgKGN1cnJlbnRGb3JtICE9PSAyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGZvcm0+XG4gICAgICA8bGFiZWwgZm9yPVwiYWRkcmVzc0xuT25lXCI+QWRkcmVzcyBMaW5lIE9uZTwvbGFiZWw+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwiYWRkcmVzc0xuT25lXCI+PC9pbnB1dD5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGxhYmVsIGZvcj1cImFkZHJlc3NMblR3b1wiPkFkZHJlc3MgTGluZSBUd288L2xhYmVsPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cImFkZHJlc3NMblR3b1wiPjwvaW5wdXQ+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGxhYmVsIGZvcj1cInBob25lXCI+UGhvbmUgTnVtYmVyPC9sYWJlbD5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJwaG9uZVwiPjwvaW5wdXQ+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT48L2lucHV0PlxuICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbnZhciBGb3JtVGhyZWUgPSAoe2N1cnJlbnRGb3JtLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZVN1Ym1pdH0pID0+IHtcbiAgaWYgKGN1cnJlbnRGb3JtICE9PSAzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGZvcm0+XG4gICAgICA8bGFiZWwgZm9yPVwiY3JlZGl0Q2FyZFwiPkNyZWRpdCBDYXJkPC9sYWJlbD5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJjcmVkaXRDYXJkXCI+PC9pbnB1dD5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8bGFiZWwgZm9yPVwiZXhwaXJhdGlvblwiPkV4cGlyYXRpb24gRGF0ZTwvbGFiZWw+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwiZXhwaXJhdGlvblwiPjwvaW5wdXQ+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGxhYmVsIGZvcj1cImN2dlwiPkNWViBjb2RlPC9sYWJlbD5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJjdnZcIj48L2lucHV0PlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxsYWJlbCBmb3I9XCJ6aXBDb2RlXCI+QmlsbGluZyBaaXAgQ29kZTwvbGFiZWw+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwiemlwQ29kZVwiPjwvaW5wdXQ+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT48L2lucHV0PlxuICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==