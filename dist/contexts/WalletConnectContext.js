"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.defaultContext = void 0;

var _react = require("react");

var createErrorThunk = function createErrorThunk() {
  return function () {
    return Promise.reject(new Error('It looks like you\'ve forgotten to wrap your App with the <WalletConnectProvider />.'));
  };
};

var defaultContext = Object.freeze({
  createSession: createErrorThunk(),
  killSession: createErrorThunk(),
  session: [],
  sendTransaction: createErrorThunk(),
  signTransaction: createErrorThunk(),
  signPersonalMessage: createErrorThunk(),
  signMessage: createErrorThunk(),
  signTypedData: createErrorThunk(),
  sendCustomRequest: createErrorThunk()
});
exports.defaultContext = defaultContext;
var WalletConnectContext = /*#__PURE__*/(0, _react.createContext)(defaultContext);
var _default = WalletConnectContext;
exports["default"] = _default;