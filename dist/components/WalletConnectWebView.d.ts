/// <reference types="react" />
interface IWalletConnectWebView {
    id: string;
    onQRCodeModalClosed(): void;
    onWalletConnected<T>(...params: T[]): void;
    onWalletUpdated<T>(...params: T[]): void;
    onWalletDisconnected<T>(...params: T[]): void;
    onCallbacksGenerated<SendTransactionParam, SendTransactionReturn, SignTransactionParam, SignTransactionReturn, SignPersonalMessageParam, SignPersonalMessageReturn, SignMessageParam, SignMessageReturn, SignTypedDataParam, SignTypedDataReturn, SendCustomMessageParam, SendCustomMessageReturn>({ sendTransaction, signTransaction, signPersonalMessage, signMessage, signTypedData, sendCustomMessage, killSession }: {
        sendTransaction(...params: SendTransactionParam[]): Promise<SendTransactionReturn>;
        signTransaction(...params: SignTransactionParam[]): Promise<SignTransactionReturn>;
        signPersonalMessage(...params: SignPersonalMessageParam[]): Promise<SignPersonalMessageReturn>;
        signMessage(...params: SignMessageParam[]): Promise<SignMessageReturn>;
        signTypedData(...params: SignTypedDataParam[]): Promise<SignTypedDataReturn>;
        sendCustomMessage(...params: SendCustomMessageParam[]): Promise<SendCustomMessageReturn>;
        killSession(): void;
    }): void;
}
declare function WalletConnectWebView({ id, onQRCodeModalClosed, onWalletConnected, onWalletUpdated, onWalletDisconnected, onCallbacksGenerated, }: IWalletConnectWebView): JSX.Element;
export default WalletConnectWebView;
