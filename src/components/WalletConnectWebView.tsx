import React, { useRef, useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { WebView } from 'react-native-webview-modal'
import { nanoid } from 'nanoid/non-secure'

interface IWalletConnectWebView {
  id: string
  onQRCodeModalClosed(): void
  onWalletConnected<T>(...params: T[]): void
  onWalletUpdated<T>(...params: T[]): void
  onWalletDisconnected<T>(...params: T[]): void
  onCallbacksGenerated<
    SendTransactionParam,
    SendTransactionReturn,
    SignTransactionParam,
    SignTransactionReturn,
    SignPersonalMessageParam,
    SignPersonalMessageReturn,
    SignMessageParam,
    SignMessageReturn,
    SignTypedDataParam,
    SignTypedDataReturn,
    SendCustomMessageParam,
    SendCustomMessageReturn
  >({
    sendTransaction,
    signTransaction,
    signPersonalMessage,
    signMessage,
    signTypedData,
    sendCustomMessage,
    killSession
  }: {
    sendTransaction(
      ...params: SendTransactionParam[]
    ): Promise<SendTransactionReturn>
    signTransaction(
      ...params: SignTransactionParam[]
    ): Promise<SignTransactionReturn>,
    signPersonalMessage(
      ...params: SignPersonalMessageParam[]
    ): Promise<SignPersonalMessageReturn>,
    signMessage(
      ...params: SignMessageParam[]
    ): Promise<SignMessageReturn>,
    signTypedData(
      ...params: SignTypedDataParam[]
    ): Promise<SignTypedDataReturn>,
    sendCustomMessage(
      ...params: SendCustomMessageParam[]
    ): Promise<SendCustomMessageReturn>,
    killSession(): void
  }): void
}

function WalletConnectWebView({
  id,
  onQRCodeModalClosed,
  onWalletConnected,
  onWalletUpdated,
  onWalletDisconnected,
  onCallbacksGenerated,
}: IWalletConnectWebView) {
  const [key, setKey] = useState(nanoid)
  const ref = useRef()
  const [roundTrips, setRoundTrips] = useState({})

  const makeRoundTrip = useCallback(
    async (fn, ...params) => new Promise(
      (resolve, reject) => {
        const { current } = ref as React.MutableRefObject<
          { injectJavaScript: <T, R>(param: T) => R }
        >
        if (!current) {
          return reject(new Error('WalletConnect has not yet been mounted.'))
        }

        const roundTripId = nanoid()
        setRoundTrips(e => ({ ...e, [roundTripId]: { resolve, reject } }))

        const js = `window["${id}"]("${roundTripId}", "${fn}", ${JSON.stringify(params)});`
        return current.injectJavaScript(js)
      },
    ),
    [ref, setRoundTrips, id]
  )

  const onMessage = useCallback(async ({ nativeEvent: { data } }) => {
    try {
      const { type, ...extras } = JSON.parse(data)
      if (type === 'WCQRModalClosedEvent') {
        return onQRCodeModalClosed()
      } else if (type === 'WCErrorEvent') {
        const { error } = extras
        return Promise.reject(error)
      } else if (type === 'WCConnectEvent') {
        const { payload: { params } } = extras
        return onWalletConnected(params)
      } else if (type === 'WCSessionUpdateEvent') {
        const { payload: { params } } = extras
        return onWalletUpdated(params)
      } else if (type === 'WCDisconnectEvent') {
        const { payload: { params } } = extras
        return onWalletDisconnected(params)
      } else if (type === 'WCRoundTripEvent') {
        const { id, error, payload } = extras
        const roundTrip = roundTrips[id]
        if (!roundTrip) {
          return Promise.reject(new Error(`Encountered synchronization error!`))
        }

        setRoundTrips(Object.fromEntries(
          Object.entries(roundTrips)
            .filter(([k]) => (k !== id))
        ))

        const { resolve, reject } = roundTrip
        return error ? reject(error) : resolve(payload)
      }
      return Promise.reject(new Error(`Encountered unexpected type, ${type}.`))
    } catch (e) { /* web */ }
  }, [
    setRoundTrips,
    roundTrips,
    onQRCodeModalClosed,
    onWalletConnected,
    onWalletUpdated,
    onWalletDisconnected,
  ])

  const onError = useCallback(async ({}) => {
    onQRCodeModalClosed()
  }, [onQRCodeModalClosed])

  const renderError = useCallback(() => <View />, [])

  const sendTransaction = useCallback(
    async (...params) => makeRoundTrip('sendTransaction', ...params),
    [makeRoundTrip]
  )

  const signTransaction = useCallback(
    async (...params) => makeRoundTrip('signTransaction', ...params),
    [makeRoundTrip]
  )

  const signPersonalMessage = useCallback(
    async (...params) => makeRoundTrip('signPersonalMessage', ...params),
    [makeRoundTrip]
  )

  const signMessage = useCallback(
    async (...params) => makeRoundTrip('signMessage', ...params),
    [makeRoundTrip]
  )

  const signTypedData = useCallback(
    async (...params) => makeRoundTrip('signTypedData', ...params),
    [makeRoundTrip]
  )

  const sendCustomMessage = useCallback(
    async (...params) => makeRoundTrip('sendCustomMessage', ...params),
    [makeRoundTrip]
  )

  const sendCustomRequest = useCallback(
    async (...params) => makeRoundTrip('sendCustomRequest', ...params),
    [makeRoundTrip]
  )

  const killSession = useCallback(async () => {
    await makeRoundTrip("killSession")
    setKey(nanoid as unknown as (val: string) => string)
  }, [makeRoundTrip, ref, setKey])

  useEffect(
    () => {
      onCallbacksGenerated({ 
        sendTransaction,
        signTransaction,
        signPersonalMessage,
        signMessage,
        signTypedData,
        sendCustomMessage,
        killSession
      })
    },
    [
      sendTransaction,
      signTransaction,
      signPersonalMessage,
      signMessage,
      signTypedData,
      sendCustomMessage,
      onCallbacksGenerated,
      killSession
    ]
  )

  return (
    <WebView
      ref={ref}
      originWhitelist={["*"]}
      onMessage={onMessage}
      onError={onError}
      renderError={renderError}
      source={{
        baseUrl: '',
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WalletConnect</title>
</head>
<!-- react-native-walletconnect (${key})-->
<body style="margin:0;padding:0;">
  <script src="https://cdn.jsdelivr.net/npm/@walletconnect/browser@1.0.0/dist/umd/index.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@walletconnect/qrcode-modal@1.2.2/dist/umd/index.min.js"></script>
  <script>
    var shouldPostMessage = (data) => {
      if (window.ReactNativeWebView) {
        return window.ReactNativeWebView.postMessage(JSON.stringify(data));

      }
      return top.postMessage(
        JSON.stringify(data), 
        window.location != window.parent.location
          ? document.referrer
          : document.location
      );
    };
    var WalletConnect = window.WalletConnect.default;
    var WalletConnectQRCodeModal = window.WalletConnectQRCodeModal.default; 

    var walletConnector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org",
      qrcodeModal: WalletConnectQRCodeModal,
    });

    /* routing */
    window["${id}"] = (id, fn, params) => Promise.resolve()
      .then(() => walletConnector[fn].apply(walletConnector, params))
      .then(payload => shouldPostMessage({ type: "WCRoundTripEvent", id, payload }))
      .catch(error => shouldPostMessage({ type: "WCRoundTripEvent", id, error }));

    walletConnector.on("connect", (error, payload) => {
      if (error) {
        return shouldPostMessage({ type: "WCErrorEvent", error });
      }
      return shouldPostMessage({ type: "WCConnectEvent", payload });
    });
    walletConnector.on("session_update", (error, payload) => {
      if (error) {
        return shouldPostMessage({ type: "WCErrorEvent", error });
      }
      return shouldPostMessage({ type: "WCSessionUpdateEvent", payload });
    });
    walletConnector.on("disconnect", (error, payload) => {
      if (error) {
        return shouldPostMessage({ type: "WCErrorEvent", error });
      }
      shouldPostMessage({ type: "WCDisconnectEvent", payload });
      return nextSession();
    });

    function nextSession() {
      Promise.resolve()
        .then(() => walletConnector.connected && walletConnector.killSession())
        .then(() => walletConnector.createSession())
        .then(() => WalletConnectQRCodeModal.open(walletConnector.uri, () => {
          shouldPostMessage({ type: "WCQRModalClosedEvent" });
          setTimeout(nextSession, 500);
        }))
        .catch(error => {
          shouldPostMessage({ type: "WCQRModalClosedEvent" });
          shouldPostMessage({ type: "WCErrorEvent", error });
        });
    }

    // Main: If already connected, just refresh the session.
    //       Warning; although we still have the ability to acknowledge
    //       the session, we do end up missing wallet provider details.
    if (walletConnector.connected) {
      try { walletConnector.updateSession(walletConnector); } catch (e) {
        nextSession();
      }
    } else {
      nextSession();
    }
  </script>
</body>
</html>
        `.trim()
      }}
    />
  )
}

export default WalletConnectWebView
