import React from 'react'

import { WalletConnectProvider } from '../providers'

type Component<T> = (props: T) => JSX.Element

export default function withWalletConnect<T>(Component: Component<T>) {
  function ComponentWithWalletConnect({ ...props }: T) {
    return (
      <WalletConnectProvider>
        <Component {...props} />
      </WalletConnectProvider>
    )
  }
  
  return ComponentWithWalletConnect
}
