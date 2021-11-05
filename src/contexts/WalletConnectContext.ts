import { createContext } from 'react'

const createErrorThunk = () => () => Promise.reject(
  new Error('It looks like you\'ve forgotten to wrap your App with the <WalletConnectProvider />.')
)

export const defaultContext = Object.freeze({
  createSession: createErrorThunk() as () => Promise<void>,
  killSession: createErrorThunk() as () => Promise<void>,
  session: [],
  sendTransaction: createErrorThunk() as () => Promise<void>,
  signTransaction: createErrorThunk() as () => Promise<void>,
  signPersonalMessage: createErrorThunk() as () => Promise<void>,
  signMessage: createErrorThunk() as () => Promise<void>,
  signTypedData: createErrorThunk() as () => Promise<void>,
  sendCustomRequest: createErrorThunk() as () => Promise<void>
})

const WalletConnectContext = createContext(defaultContext)

export default WalletConnectContext
