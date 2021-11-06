"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withWalletConnect;

var _react = _interopRequireDefault(require("react"));

var _providers = require("../providers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function withWalletConnect(Component) {
  function ComponentWithWalletConnect(_ref) {
    var props = _extends({}, _ref);

    return /*#__PURE__*/_react["default"].createElement(_providers.WalletConnectProvider, null, /*#__PURE__*/_react["default"].createElement(Component, props));
  }

  return ComponentWithWalletConnect;
}