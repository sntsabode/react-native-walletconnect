/// <reference types="react" />
declare function WalletConnectProvider({ children }: {
    children: JSX.Element | JSX.Element[];
}): JSX.Element;
declare namespace WalletConnectProvider {
    var defaultProps: {
        createSession: () => Promise<void>;
        killSession: () => Promise<void>;
        session: never[];
        sendTransaction: () => Promise<void>;
        signTransaction: () => Promise<void>;
        signPersonalMessage: () => Promise<void>;
        signMessage: () => Promise<void>;
        signTypedData: () => Promise<void>;
        sendCustomRequest: () => Promise<void>;
    };
}
export default WalletConnectProvider;
