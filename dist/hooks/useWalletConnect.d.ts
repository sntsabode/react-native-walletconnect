export default function useWalletConnect(): Readonly<{
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
