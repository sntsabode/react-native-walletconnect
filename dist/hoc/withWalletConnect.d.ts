/// <reference types="react" />
declare type Component<T> = (props: T) => JSX.Element;
export default function withWalletConnect<T>(Component: Component<T>): ({ ...props }: T) => JSX.Element;
export {};
