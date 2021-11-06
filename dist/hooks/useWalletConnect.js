"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useWalletConnect;

var _react = require("react");

var _contexts = require("../contexts");

function useWalletConnect() {
  return (0, _react.useContext)(_contexts.WalletConnectContext);
}