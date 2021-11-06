/// <reference types="react" />
export declare const defaultContext: Readonly<{
    createSession: () => Promise<void>;
    killSession: () => Promise<void>;
    session: never[];
    sendTransaction: () => Promise<void>;
    signTransaction: () => Promise<void>;
    signPersonalMessage: () => Promise<void>;
    signMessage: () => Promise<void>;
    signTypedData: () => Promise<void>;
    sendCustomRequest: () => Promise<void>;
}>;
declare const WalletConnectContext: import("react").Context<Readonly<{
    createSession: () => Promise<void>;
    killSession: () => Promise<void>;
    session: never[];
    sendTransaction: () => Promise<void>;
    signTransaction: () => Promise<void>;
    signPersonalMessage: () => Promise<void>;
    signMessage: () => Promise<void>;
    signTypedData: () => Promise<void>;
    sendCustomRequest: () => Promise<void>;
}>>;
export default WalletConnectContext;
