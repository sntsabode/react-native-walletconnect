"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _index = require("../react-native-webview-modal/index");

var _nonSecure = require("nanoid/non-secure");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function WalletConnectWebView(_ref) {
  var id = _ref.id,
      onQRCodeModalClosed = _ref.onQRCodeModalClosed,
      onWalletConnected = _ref.onWalletConnected,
      onWalletUpdated = _ref.onWalletUpdated,
      onWalletDisconnected = _ref.onWalletDisconnected,
      onCallbacksGenerated = _ref.onCallbacksGenerated;

  var _useState = (0, _react.useState)(_nonSecure.nanoid),
      _useState2 = _slicedToArray(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1];

  var ref = (0, _react.useRef)();

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      roundTrips = _useState4[0],
      setRoundTrips = _useState4[1];

  var makeRoundTrip = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fn) {
      var _len,
          params,
          _key,
          _args = arguments;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              for (_len = _args.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                params[_key - 1] = _args[_key];
              }

              return _context.abrupt("return", new Promise(function (resolve, reject) {
                var _ref3 = ref,
                    current = _ref3.current;

                if (!current) {
                  return reject(new Error('WalletConnect has not yet been mounted.'));
                }

                var roundTripId = (0, _nonSecure.nanoid)();
                setRoundTrips(function (e) {
                  return _objectSpread(_objectSpread({}, e), {}, _defineProperty({}, roundTripId, {
                    resolve: resolve,
                    reject: reject
                  }));
                });
                var js = "window[\"".concat(id, "\"](\"").concat(roundTripId, "\", \"").concat(fn, "\", ").concat(JSON.stringify(params), ");");
                return current.injectJavaScript(js);
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [ref, setRoundTrips, id]);
  var onMessage = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref4) {
      var data, _JSON$parse, type, extras, error, params, _params, _params2, _id, _error, payload, roundTrip, resolve, reject;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = _ref4.nativeEvent.data;
              _context2.prev = 1;
              _JSON$parse = JSON.parse(data), type = _JSON$parse.type, extras = _objectWithoutProperties(_JSON$parse, ["type"]);

              if (!(type === 'WCQRModalClosedEvent')) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", onQRCodeModalClosed());

            case 7:
              if (!(type === 'WCErrorEvent')) {
                _context2.next = 12;
                break;
              }

              error = extras.error;
              return _context2.abrupt("return", Promise.reject(error));

            case 12:
              if (!(type === 'WCConnectEvent')) {
                _context2.next = 17;
                break;
              }

              params = extras.payload.params;
              return _context2.abrupt("return", onWalletConnected(params));

            case 17:
              if (!(type === 'WCSessionUpdateEvent')) {
                _context2.next = 22;
                break;
              }

              _params = extras.payload.params;
              return _context2.abrupt("return", onWalletUpdated(_params));

            case 22:
              if (!(type === 'WCDisconnectEvent')) {
                _context2.next = 27;
                break;
              }

              _params2 = extras.payload.params;
              return _context2.abrupt("return", onWalletDisconnected(_params2));

            case 27:
              if (!(type === 'WCRoundTripEvent')) {
                _context2.next = 35;
                break;
              }

              _id = extras.id, _error = extras.error, payload = extras.payload;
              roundTrip = roundTrips[_id];

              if (roundTrip) {
                _context2.next = 32;
                break;
              }

              return _context2.abrupt("return", Promise.reject(new Error("Encountered synchronization error!")));

            case 32:
              setRoundTrips(Object.fromEntries(Object.entries(roundTrips).filter(function (_ref6) {
                var _ref7 = _slicedToArray(_ref6, 1),
                    k = _ref7[0];

                return k !== _id;
              })));
              resolve = roundTrip.resolve, reject = roundTrip.reject;
              return _context2.abrupt("return", _error ? reject(_error) : resolve(payload));

            case 35:
              return _context2.abrupt("return", Promise.reject(new Error("Encountered unexpected type, ".concat(type, "."))));

            case 38:
              _context2.prev = 38;
              _context2.t0 = _context2["catch"](1);

            case 40:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 38]]);
    }));

    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }(), [setRoundTrips, roundTrips, onQRCodeModalClosed, onWalletConnected, onWalletUpdated, onWalletDisconnected]);
  var onError = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref8) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _objectDestructuringEmpty(_ref8);

              onQRCodeModalClosed();

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref9.apply(this, arguments);
    };
  }(), [onQRCodeModalClosed]);
  var renderError = (0, _react.useCallback)(function () {
    return /*#__PURE__*/_react["default"].createElement(_reactNative.View, null);
  }, []);
  var sendTransaction = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var _len2,
        params,
        _key2,
        _args4 = arguments;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            for (_len2 = _args4.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              params[_key2] = _args4[_key2];
            }

            return _context4.abrupt("return", makeRoundTrip.apply(void 0, ['sendTransaction'].concat(params)));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })), [makeRoundTrip]);
  var signTransaction = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var _len3,
        params,
        _key3,
        _args5 = arguments;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            for (_len3 = _args5.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              params[_key3] = _args5[_key3];
            }

            return _context5.abrupt("return", makeRoundTrip.apply(void 0, ['signTransaction'].concat(params)));

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })), [makeRoundTrip]);
  var signPersonalMessage = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var _len4,
        params,
        _key4,
        _args6 = arguments;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            for (_len4 = _args6.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              params[_key4] = _args6[_key4];
            }

            return _context6.abrupt("return", makeRoundTrip.apply(void 0, ['signPersonalMessage'].concat(params)));

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })), [makeRoundTrip]);
  var signMessage = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var _len5,
        params,
        _key5,
        _args7 = arguments;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            for (_len5 = _args7.length, params = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              params[_key5] = _args7[_key5];
            }

            return _context7.abrupt("return", makeRoundTrip.apply(void 0, ['signMessage'].concat(params)));

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })), [makeRoundTrip]);
  var signTypedData = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var _len6,
        params,
        _key6,
        _args8 = arguments;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            for (_len6 = _args8.length, params = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              params[_key6] = _args8[_key6];
            }

            return _context8.abrupt("return", makeRoundTrip.apply(void 0, ['signTypedData'].concat(params)));

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })), [makeRoundTrip]);
  var sendCustomMessage = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var _len7,
        params,
        _key7,
        _args9 = arguments;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            for (_len7 = _args9.length, params = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              params[_key7] = _args9[_key7];
            }

            return _context9.abrupt("return", makeRoundTrip.apply(void 0, ['sendCustomMessage'].concat(params)));

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })), [makeRoundTrip]);
  var sendCustomRequest = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var _len8,
        params,
        _key8,
        _args10 = arguments;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            for (_len8 = _args10.length, params = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              params[_key8] = _args10[_key8];
            }

            return _context10.abrupt("return", makeRoundTrip.apply(void 0, ['sendCustomRequest'].concat(params)));

          case 2:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  })), [makeRoundTrip]);
  var killSession = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return makeRoundTrip("killSession");

          case 2:
            setKey(_nonSecure.nanoid);

          case 3:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  })), [makeRoundTrip, ref, setKey]);
  (0, _react.useEffect)(function () {
    onCallbacksGenerated({
      sendTransaction: sendTransaction,
      signTransaction: signTransaction,
      signPersonalMessage: signPersonalMessage,
      signMessage: signMessage,
      signTypedData: signTypedData,
      sendCustomMessage: sendCustomMessage,
      killSession: killSession
    });
  }, [sendTransaction, signTransaction, signPersonalMessage, signMessage, signTypedData, sendCustomMessage, onCallbacksGenerated, killSession]);
  return /*#__PURE__*/_react["default"].createElement(_index.WebView, {
    ref: ref,
    originWhitelist: ["*"],
    onMessage: onMessage,
    onError: onError,
    renderError: renderError,
    source: {
      baseUrl: '',
      html: "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>WalletConnect</title>\n</head>\n<!-- react-native-walletconnect (".concat(key, ")-->\n<body style=\"margin:0;padding:0;\">\n  <script src=\"https://cdn.jsdelivr.net/npm/@walletconnect/browser@1.0.0/dist/umd/index.min.js\"></script>\n  <script src=\"https://cdn.jsdelivr.net/npm/@walletconnect/qrcode-modal@1.2.2/dist/umd/index.min.js\"></script>\n  <script>\n    var shouldPostMessage = (data) => {\n      if (window.ReactNativeWebView) {\n        return window.ReactNativeWebView.postMessage(JSON.stringify(data));\n\n      }\n      return top.postMessage(\n        JSON.stringify(data), \n        window.location != window.parent.location\n          ? document.referrer\n          : document.location\n      );\n    };\n    var WalletConnect = window.WalletConnect.default;\n    var WalletConnectQRCodeModal = window.WalletConnectQRCodeModal.default; \n\n    var walletConnector = new WalletConnect({\n      bridge: \"https://bridge.walletconnect.org\",\n      qrcodeModal: WalletConnectQRCodeModal,\n    });\n\n    /* routing */\n    window[\"").concat(id, "\"] = (id, fn, params) => Promise.resolve()\n      .then(() => walletConnector[fn].apply(walletConnector, params))\n      .then(payload => shouldPostMessage({ type: \"WCRoundTripEvent\", id, payload }))\n      .catch(error => shouldPostMessage({ type: \"WCRoundTripEvent\", id, error }));\n\n    walletConnector.on(\"connect\", (error, payload) => {\n      if (error) {\n        return shouldPostMessage({ type: \"WCErrorEvent\", error });\n      }\n      return shouldPostMessage({ type: \"WCConnectEvent\", payload });\n    });\n    walletConnector.on(\"session_update\", (error, payload) => {\n      if (error) {\n        return shouldPostMessage({ type: \"WCErrorEvent\", error });\n      }\n      return shouldPostMessage({ type: \"WCSessionUpdateEvent\", payload });\n    });\n    walletConnector.on(\"disconnect\", (error, payload) => {\n      if (error) {\n        return shouldPostMessage({ type: \"WCErrorEvent\", error });\n      }\n      shouldPostMessage({ type: \"WCDisconnectEvent\", payload });\n      return nextSession();\n    });\n\n    function nextSession() {\n      Promise.resolve()\n        .then(() => walletConnector.connected && walletConnector.killSession())\n        .then(() => walletConnector.createSession())\n        .then(() => WalletConnectQRCodeModal.open(walletConnector.uri, () => {\n          shouldPostMessage({ type: \"WCQRModalClosedEvent\" });\n          setTimeout(nextSession, 500);\n        }))\n        .catch(error => {\n          shouldPostMessage({ type: \"WCQRModalClosedEvent\" });\n          shouldPostMessage({ type: \"WCErrorEvent\", error });\n        });\n    }\n\n    // Main: If already connected, just refresh the session.\n    //       Warning; although we still have the ability to acknowledge\n    //       the session, we do end up missing wallet provider details.\n    if (walletConnector.connected) {\n      try { walletConnector.updateSession(walletConnector); } catch (e) {\n        nextSession();\n      }\n    } else {\n      nextSession();\n    }\n  </script>\n</body>\n</html>\n        ").trim()
    }
  });
}

var _default = WalletConnectWebView;
exports["default"] = _default;