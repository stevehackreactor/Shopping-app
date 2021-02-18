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
// import react-dom from 'react-dom'; not needed as this is imported from a cdn in the index.html file
// import axios = require('axios');
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

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "axiosRequest", function (state) {
      axios.post('http://localhost:3002/', state).then(function (res) {
        console.log(res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (event) {
      event.preventDefault(); // console.log('STATE ON SUBMISSION', this.state);

      if (_this.state.currentForm < 3) {
        _this.setState({
          currentForm: _this.state.currentForm + 1
        });
      } else {
        console.log('Form being submitted', JSON.stringify(_this.state)); // perform an ajax or axios post request to the server

        _this.axiosRequest(_this.state);

        _this.setState({
          "name": "",
          "email": "",
          "password": "",
          "addressLnOne": "",
          "addressLnTwo": "",
          "phone": "",
          "creditCard": "",
          "expiration": "",
          "cvv": "",
          "zipCode": "",
          "currentForm": 0
        });
      }
    });

    _this.state = {
      name: "",
      email: "",
      password: "",
      addressLnOne: "",
      addressLnTwo: "",
      phone: "",
      creditCard: "",
      expiration: "",
      cvv: "",
      zipCode: "",
      currentForm: 0
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.axiosRequest = _this.axiosRequest.bind(_assertThisInitialized(_this));
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
    name: "name",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    "for": "email"
  }, "Email"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "email",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    "for": "password"
  }, "Password"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "password",
    onChange: handleChange
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
    name: "addressLnOne",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    "for": "addressLnTwo"
  }, "Address Line Two"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "addressLnTwo",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    "for": "phone"
  }, "Phone Number"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "phone",
    onChange: handleChange
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
    name: "creditCard",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    "for": "expiration"
  }, "Expiration Date"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "expiration",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    "for": "cvv"
  }, "CVV code"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "cvv",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    "for": "zipCode"
  }, "Billing Zip Code"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "textarea",
    name: "zipCode",
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    onClick: handleSubmit
  })));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImN1cnJlbnRGb3JtIiwic3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsIkpTT04iLCJzdHJpbmdpZnkiLCJheGlvc1JlcXVlc3QiLCJlbWFpbCIsInBhc3N3b3JkIiwiYWRkcmVzc0xuT25lIiwiYWRkcmVzc0xuVHdvIiwicGhvbmUiLCJjcmVkaXRDYXJkIiwiZXhwaXJhdGlvbiIsImN2diIsInppcENvZGUiLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkxhbmRpbmdQYWdlIiwiRm9ybU9uZSIsIkZvcm1Ud28iLCJGb3JtVGhyZWUiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0lBR01BLEc7Ozs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTixFQURpQixDQUNKOztBQURJLGtFQXNCTCxVQUFDQyxLQUFELEVBQVc7QUFDdkJBLE1BQUFBLEtBQUssQ0FBQ0MsY0FBTixHQUR1QixDQUV2Qjs7QUFDQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksK0JBQVo7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLFFBQUFBLFdBQVcsRUFBRSxNQUFLQyxLQUFMLENBQVdELFdBQVgsR0FBeUI7QUFEMUIsT0FBZDtBQUdELEtBN0JrQjs7QUFBQSxtRUFnQ0osVUFBQ0wsS0FBRCxFQUFXO0FBQ3hCLFlBQUtJLFFBQUwscUJBQ0dKLEtBQUssQ0FB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SUFBSSxFQUFDLFNBQTVCO0FBQXNDLElBQUEsUUFBUSxFQUFFQTtBQUFoRCxJQWxCRixlQW1CRSwrQkFuQkYsZUFvQkU7QUFBTyxJQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLElBQUEsT0FBTyxFQUFFRDtBQUE5QixJQXBCRixDQURBLENBREY7QUEwQkQsQ0EvQkQ7O0FBcUNBUSxRQUFRLENBQUNDLE1BQVQsZUFBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCByZWFjdC1kb20gZnJvbSAncmVhY3QtZG9tJzsgbm90IG5lZWRlZCBhcyB0aGlzIGlzIGltcG9ydGVkIGZyb20gYSBjZG4gaW4gdGhlIGluZGV4Lmh0bWwgZmlsZVxuXG4vLyBpbXBvcnQgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpIC8vIHRoaXMgc2VuZHMgdGhlIGFwcHJvcHJpYXRlIHByb3BzIHRvIHRoZSByZWFjdCBjb21wb25lbnQgY29uc3RydWN0b3JcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICBhZGRyZXNzTG5PbmU6IFwiXCIsXG4gICAgICBhZGRyZXNzTG5Ud286IFwiXCIsXG4gICAgICBwaG9uZTogXCJcIixcbiAgICAgIGNyZWRpdENhcmQ6IFwiXCIsXG4gICAgICBleHBpcmF0aW9uOiBcIlwiLFxuICAgICAgY3Z2OiBcIlwiLFxuICAgICAgemlwQ29kZTogXCJcIixcbiAgICAgIGN1cnJlbnRGb3JtOiAwXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5heGlvc1JlcXVlc3QgPSB0aGlzLmF4aW9zUmVxdWVzdC5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gdGhpcyB3aWxsIGJlIHRoZSBjbGljayBldmVudCBmb3IgdGhlIHJlbmRlcmluZyBvZiB0aGVcbiAgICBjb25zb2xlLmxvZygnc3RhcnRpbmcgdGhlIGNoZWNrb3V0IHByb2Nlc3MnKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRGb3JtOiB0aGlzLnN0YXRlLmN1cnJlbnRGb3JtICsgMVxuICAgIH0pXG4gIH1cblxuICAvLyB0aGlzIHdpbGwgYmUgdGhlIGhhbmRsZSBjaGFuZ2UgZXZlbnQgdG8gYWx0ZXIgdGhlIHN0YXRlIGJhY2sgaW4gdGhlIHBhcmVudCBBcHBcbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cblxuICBheGlvc1JlcXVlc3QgPSAoc3RhdGUpID0+IHtcbiAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDIvJywgc3RhdGUpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcbiAgfVxuXG4gIC8vIHRoaXMgd2lsbCBiZSB0aGUgYnV0dG9uIHdoaWNoIGlzIHByZXNzZWQgYXQgdGhlIGVuZCBvZiBjb21wbGV0aW5nIGVhY2ggZm9ybVxuICBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdTVEFURSBPTiBTVUJNSVNTSU9OJywgdGhpcy5zdGF0ZSk7XG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEZvcm0gPCAzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudEZvcm06IHRoaXMuc3RhdGUuY3VycmVudEZvcm0gKyAxXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnRm9ybSBiZWluZyBzdWJtaXR0ZWQnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XG4gICAgICAvLyBwZXJmb3JtIGFuIGFqYXggb3IgYXhpb3MgcG9zdCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXJcbiAgICAgIHRoaXMuYXhpb3NSZXF1ZXN0KHRoaXMuc3RhdGUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAgICAgICBcImVtYWlsXCI6IFwiXCIsXG4gICAgICAgIFwicGFzc3dvcmRcIjogXCJcIixcbiAgICAgICAgXCJhZGRyZXNzTG5PbmVcIjogXCJcIixcbiAgICAgICAgXCJhZGRyZXNzTG5Ud29cIjogXCJcIixcbiAgICAgICAgXCJwaG9uZVwiOiBcIlwiLFxuICAgICAgICBcImNyZWRpdENhcmRcIjogXCJcIixcbiAgICAgICAgXCJleHBpcmF0aW9uXCI6IFwiXCIsXG4gICAgICAgIFwiY3Z2XCI6IFwiXCIsXG4gICAgICAgIFwiemlwQ29kZVwiOiBcIlwiLFxuICAgICAgICBcImN1cnJlbnRGb3JtXCI6IDBcbiAgICAgIH0pXG5cbiAgICB9XG4gIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGluc2VydCBqc3ggaGVyZSAoamF2YXNjcmlwdCBhbmQgeG1sKVxuICAgIC8vIHRoaXMgd2lsbCByZW5kZXIgYSBmb3JtIHRvIHRoZSBwYWdlXG4gICAgLy9tdXN0IGluY2x1ZGUgYSByZXR1cm4gc3RhdGVtZW50XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkFtYXpvbiBQcm9jcmFzdGluYXRpb24gUHVyY2hhc2VzPC9oMT5cbiAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgIDxMYW5kaW5nUGFnZSBjdXJyZW50Rm9ybT17dGhpcy5zdGF0ZS5jdXJyZW50Rm9ybX0gaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9Lz5cbiAgICAgICAgPEZvcm1PbmUgY3VycmVudEZvcm09e3RoaXMuc3RhdGUuY3VycmVudEZvcm19IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9Lz5cbiAgICAgICAgPEZvcm1Ud28gY3VycmVudEZvcm09e3RoaXMuc3RhdGUuY3VycmVudEZvcm19IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9Lz5cbiAgICAgICAgPEZvcm1UaHJlZSBjdXJyZW50Rm9ybT17dGhpcy5zdGF0ZS5jdXJyZW50Rm9ybX0gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gIH1cbn1cblxudmFyIExhbmRpbmdQYWdlID0gKHtjdXJyZW50Rm9ybSwgaGFuZGxlQ2xpY2t9KSA9PiB7XG4gIGlmIChjdXJyZW50Rm9ybSAhPT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5MYW5kaW5nIFBhZ2U8L2gxPlxuICAgICAgPGJ1dHRvbiBpZD1cImJlZ2luQ2hlY2tvdXRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+QmVnaW4gQ2hlY2tvdXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG52YXIgRm9ybU9uZSA9ICh7Y3VycmVudEZvcm0sIGhhbmRsZUNoYW5nZSwgaGFuZGxlU3VibWl0fSkgPT4ge1xuICBpZiAoY3VycmVudEZvcm0gIT09IDEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICA8Zm9ybT5cbiAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L2lucHV0PlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+PC9pbnB1dD5cbiAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG52YXIgRm9ybVR3byA9ICh7Y3VycmVudEZvcm0sIGhhbmRsZUNoYW5nZSwgaGFuZGxlU3VibWl0fSkgPT4ge1xuICBpZiAoY3VycmVudEZvcm0gIT09IDIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICA8Zm9ybT5cbiAgICAgIDxsYWJlbCBmb3I9XCJhZGRyZXNzTG5PbmVcIj5BZGRyZXNzIExpbmUgT25lPC9sYWJlbD5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJhZGRyZXNzTG5PbmVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L2lucHV0PlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8bGFiZWwgZm9yPVwiYWRkcmVzc0xuVHdvXCI+QWRkcmVzcyBMaW5lIFR3bzwvbGFiZWw+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwiYWRkcmVzc0xuVHdvXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8bGFiZWwgZm9yPVwicGhvbmVcIj5QaG9uZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cInBob25lXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PjwvaW5wdXQ+XG4gICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxudmFyIEZvcm1UaHJlZSA9ICh7Y3VycmVudEZvcm0sIGhhbmRsZUNoYW5nZSwgaGFuZGxlU3VibWl0fSkgPT4ge1xuICBpZiAoY3VycmVudEZvcm0gIT09IDMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICA8Zm9ybT5cbiAgICAgIDxsYWJlbCBmb3I9XCJjcmVkaXRDYXJkXCI+Q3JlZGl0IENhcmQ8L2xhYmVsPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cImNyZWRpdENhcmRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L2lucHV0PlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxsYWJlbCBmb3I9XCJleHBpcmF0aW9uXCI+RXhwaXJhdGlvbiBEYXRlPC9sYWJlbD5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJleHBpcmF0aW9uXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8bGFiZWwgZm9yPVwiY3Z2XCI+Q1ZWIGNvZGU8L2xhYmVsPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cImN2dlwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGxhYmVsIGZvcj1cInppcENvZGVcIj5CaWxsaW5nIFppcCBDb2RlPC9sYWJlbD5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJ6aXBDb2RlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PjwvaW5wdXQ+XG4gICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuXG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19