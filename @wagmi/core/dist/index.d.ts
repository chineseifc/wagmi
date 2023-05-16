import * as _wagmi_chains from '@wagmi/chains';
import { Chain } from '@wagmi/chains';
export { Chain, mainnet, sepolia } from '@wagmi/chains';
import { Mutate, StoreApi } from 'zustand/vanilla';
import { Connector, ConnectorData } from '@wagmi/connectors';
export { Connector, ConnectorData, ConnectorEvents, ConnectorNotFoundError, WindowProvider } from '@wagmi/connectors';
import { P as PublicClient, W as WebSocketPublicClient, U as Unit, a as WalletClient, H as Hash, C as ChainProviderFn } from './index-fc9ab085.js';
import { Address, ResolvedConfig, TypedData, Abi, Narrow, ExtractAbiFunctionNames } from 'abitype';
export { Address } from 'abitype';
import { SignMessageReturnType, SignTypedDataParameters, Account, SignTypedDataReturnType, SimulateContractParameters, SimulateContractReturnType, GetContractParameters, Transport, Chain as Chain$1, PublicClient as PublicClient$1, GetContractReturnType, ContractFunctionConfig, MulticallParameters, MulticallReturnType, ReadContractParameters, ReadContractReturnType, MulticallContracts, WatchContractEventParameters, WriteContractParameters, WriteContractReturnType, GetEnsResolverReturnType, Hex, GetTransactionReturnType, SendTransactionParameters, SendTransactionReturnType, Address as Address$1, WaitForTransactionReceiptParameters, WaitForTransactionReceiptReturnType, WatchPendingTransactionsParameters, OnTransactionsParameter, FallbackTransportConfig, PublicClientConfig, FallbackTransport } from 'viem';
import { GetEnsAvatarReturnType } from 'viem/ens';
export { InjectedConnector, InjectedConnectorOptions } from '@wagmi/connectors/injected';

type BaseStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
type ClientStorage = {
    getItem<T>(key: string, defaultState?: T | null): T | null;
    setItem<T>(key: string, value: T | null): void;
    removeItem(key: string): void;
};
declare const noopStorage: BaseStorage;
declare function createStorage({ deserialize, key: prefix, serialize, storage, }: {
    deserialize?: <T>(value: string) => T;
    key?: string;
    serialize?: <T>(value: T) => string;
    storage: BaseStorage;
}): ClientStorage;

type CreateConfigParameters<TPublicClient extends PublicClient = PublicClient, TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient> = {
    /** Enables reconnecting to last used connector on init */
    autoConnect?: boolean;
    /**
     * Connectors used for linking accounts
     * @default [new InjectedConnector()]
     */
    connectors?: (() => Connector[]) | Connector[];
    /** Custom logger */
    logger?: {
        warn: typeof console.warn | null;
    };
    /** Interface for connecting to network */
    publicClient: ((config: {
        chainId?: number;
    }) => TPublicClient) | TPublicClient;
    /**
     * Custom storage for data persistance
     * @default window.localStorage
     */
    storage?: ClientStorage;
    /** WebSocket interface for connecting to network */
    webSocketPublicClient?: ((config: {
        chainId?: number;
    }) => TWebSocketPublicClient | undefined) | TWebSocketPublicClient;
};
type Data$1 = ConnectorData;
type State<TPublicClient extends PublicClient = PublicClient, TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient> = {
    chains?: Connector['chains'];
    connector?: Connector;
    connectors: Connector[];
    data?: Data$1;
    error?: Error;
    publicClient: TPublicClient;
    status: 'connected' | 'connecting' | 'reconnecting' | 'disconnected';
    webSocketPublicClient?: TWebSocketPublicClient;
};
declare class Config<TPublicClient extends PublicClient = PublicClient, TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient> {
    #private;
    args: CreateConfigParameters<TPublicClient, TWebSocketPublicClient>;
    publicClients: Map<number, TPublicClient | undefined>;
    storage: ClientStorage;
    store: Mutate<StoreApi<State<TPublicClient, TWebSocketPublicClient>>, [
        [
            'zustand/subscribeWithSelector',
            never
        ],
        [
            'zustand/persist',
            Partial<State<TPublicClient, TWebSocketPublicClient>>
        ]
    ]>;
    webSocketPublicClients: Map<number, TWebSocketPublicClient | undefined>;
    constructor({ autoConnect, connectors, publicClient, storage, logger, webSocketPublicClient, }: CreateConfigParameters<TPublicClient, TWebSocketPublicClient>);
    get chains(): _wagmi_chains.Chain[] | undefined;
    get connectors(): Connector<any, any>[];
    get connector(): Connector<any, any> | undefined;
    get data(): ConnectorData | undefined;
    get error(): Error | undefined;
    get lastUsedChainId(): number | undefined;
    get publicClient(): TPublicClient;
    get status(): "connecting" | "connected" | "reconnecting" | "disconnected";
    get subscribe(): {
        (listener: (selectedState: State<TPublicClient, TWebSocketPublicClient>, previousSelectedState: State<TPublicClient, TWebSocketPublicClient>) => void): () => void;
        <U>(selector: (state: State<TPublicClient, TWebSocketPublicClient>) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
    get webSocketPublicClient(): TWebSocketPublicClient | undefined;
    setState(updater: State<TPublicClient, TWebSocketPublicClient> | ((state: State<TPublicClient, TWebSocketPublicClient>) => State<TPublicClient, TWebSocketPublicClient>)): void;
    clearState(): void;
    destroy(): Promise<void>;
    autoConnect(): Promise<ConnectorData | undefined>;
    setConnectors(connectors: NonNullable<CreateConfigParameters['connectors']>): void;
    getPublicClient({ chainId }?: {
        chainId?: number;
    }): TPublicClient;
    setPublicClient(publicClient: CreateConfigParameters<TPublicClient>['publicClient']): void;
    getWebSocketPublicClient({ chainId }?: {
        chainId?: number;
    }): TWebSocketPublicClient | undefined;
    setWebSocketPublicClient(webSocketPublicClient: NonNullable<CreateConfigParameters<TPublicClient>['webSocketPublicClient']>): void;
    setLastUsedConnector(lastUsedConnector?: string | null): void;
}
declare function createConfig<TPublicClient extends PublicClient = PublicClient, TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient>(args: CreateConfigParameters<TPublicClient, TWebSocketPublicClient>): Config<TPublicClient, TWebSocketPublicClient>;
declare function getConfig<TPublicClient extends PublicClient = PublicClient, TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient>(): Config<TPublicClient, TWebSocketPublicClient>;

type ConnectArgs = {
    /** Chain ID to connect to */
    chainId?: number;
    /** Connector to connect */
    connector: Connector;
};
type Data = Required<ConnectorData>;
type ConnectResult<TPublicClient extends PublicClient = PublicClient> = {
    account: Data['account'];
    chain: Data['chain'];
    connector: Config<TPublicClient>['connector'];
};
declare function connect<TPublicClient extends PublicClient = PublicClient>({ chainId, connector }: ConnectArgs): Promise<ConnectResult<TPublicClient>>;

declare function disconnect(): Promise<void>;

type FetchBalanceArgs = {
    /** Address of balance to check */
    address: Address;
    /** Chain id to use for Public Client. */
    chainId?: number;
    /** Units for formatting output */
    formatUnits?: Unit;
    /** ERC-20 address */
    token?: Address;
};
type FetchBalanceResult = {
    decimals: ResolvedConfig['IntType'];
    formatted: string;
    symbol: string;
    value: ResolvedConfig['BigIntType'];
};
declare function fetchBalance({ address, chainId, formatUnits: unit, token, }: FetchBalanceArgs): Promise<FetchBalanceResult>;

type GetAccountResult<TPublicClient extends PublicClient = PublicClient> = {
    address: NonNullable<Data$1['account']>;
    connector: NonNullable<Config<TPublicClient>['connector']>;
    isConnected: true;
    isConnecting: false;
    isDisconnected: false;
    isReconnecting: false;
    status: 'connected';
} | {
    address: Data$1['account'];
    connector: Config<TPublicClient>['connector'];
    isConnected: boolean;
    isConnecting: false;
    isDisconnected: false;
    isReconnecting: true;
    status: 'reconnecting';
} | {
    address: Data$1['account'];
    connector: Config<TPublicClient>['connector'];
    isConnected: false;
    isReconnecting: false;
    isConnecting: true;
    isDisconnected: false;
    status: 'connecting';
} | {
    address: undefined;
    connector: undefined;
    isConnected: false;
    isReconnecting: false;
    isConnecting: false;
    isDisconnected: true;
    status: 'disconnected';
};
declare function getAccount<TPublicClient extends PublicClient>(): GetAccountResult<TPublicClient>;

type GetNetworkResult = {
    chain?: Chain & {
        unsupported?: boolean;
    };
    chains: Chain[];
};
declare function getNetwork(): GetNetworkResult;

type SignMessageArgs = {
    /** Message to sign with wallet */
    message: string;
};
type SignMessageResult = SignMessageReturnType;
declare function signMessage(args: SignMessageArgs): Promise<SignMessageResult>;

type SignTypedDataArgs<TTypedData extends TypedData | {
    [key: string]: unknown;
} = TypedData, TPrimaryType extends string = string> = SignTypedDataParameters<TTypedData, TPrimaryType, Account>;
type SignTypedDataResult = SignTypedDataReturnType;
declare function signTypedData<TTypedData extends TypedData | {
    [key: string]: unknown;
}, TPrimaryType extends string>({ domain, message, primaryType, types, }: SignTypedDataArgs<TTypedData, TPrimaryType>): Promise<SignTypedDataResult>;

type SwitchNetworkArgs = {
    chainId: number;
};
type SwitchNetworkResult = Chain;
declare function switchNetwork({ chainId, }: SwitchNetworkArgs): Promise<SwitchNetworkResult>;

type WatchAccountCallback<TPublicClient extends PublicClient = PublicClient> = (data: GetAccountResult<TPublicClient>) => void;
type WatchAccountConfig = {
    selector?({ address, connector, status, }: {
        address?: string;
        connector?: Connector;
        status: GetAccountResult['status'];
    }): any;
};
declare function watchAccount<TPublicClient extends PublicClient>(callback: WatchAccountCallback<TPublicClient>, { selector }?: WatchAccountConfig): () => void;

type WatchNetworkCallback = (data: GetNetworkResult) => void;
type WatchNetworkConfig = {
    selector?({ chainId, chains }: {
        chainId?: number;
        chains?: Chain[];
    }): any;
};
declare function watchNetwork(callback: WatchNetworkCallback, { selector }?: WatchNetworkConfig): () => void;

type FetchTokenArgs = {
    /** Address of ERC-20 token */
    address: Address;
    /** Chain id to use for Public Client. */
    chainId?: number;
    /** Units for formatting output */
    formatUnits?: Unit;
};
type FetchTokenResult = {
    address: Address;
    decimals: ResolvedConfig['IntType'];
    name: string;
    symbol: string;
    totalSupply: {
        formatted: string;
        value: ResolvedConfig['BigIntType'];
    };
};
declare function fetchToken({ address, chainId, formatUnits: unit, }: FetchTokenArgs): Promise<FetchTokenResult>;

type PrepareWriteContractConfig<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string, TChainId extends number = number, TWalletClient extends WalletClient = WalletClient> = Omit<SimulateContractParameters<TAbi, TFunctionName>, 'account' | 'chain'> & {
    /** Chain id to use for Public Client. */
    chainId?: TChainId | number;
    /** Custom Wallet Client. */
    walletClient?: TWalletClient | null;
};
type PrepareWriteContractResult<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string, TChainId extends number = number> = Omit<SimulateContractReturnType<TAbi, TFunctionName>, 'request'> & {
    request: SimulateContractReturnType<TAbi, TFunctionName>['request'] & {
        chainId?: TChainId;
    };
    mode: 'prepared';
};
/**
 * @description Prepares the parameters required for a contract write transaction.
 *
 * Returns config to be passed through to `writeContract`.
 *
 * @example
 * import { prepareWriteContract, writeContract } from '@wagmi/core'
 *
 * const config = await prepareWriteContract({
 *  address: '0x...',
 *  abi: wagmiAbi,
 *  functionName: 'mint',
 * })
 * const result = await writeContract(config)
 */
declare function prepareWriteContract<TAbi extends Abi | readonly unknown[], TFunctionName extends string, TChainId extends number, TWalletClient extends WalletClient = WalletClient>({ abi, address, args, chainId, functionName, walletClient: walletClient_, ...config }: PrepareWriteContractConfig<TAbi, TFunctionName, TChainId, TWalletClient>): Promise<PrepareWriteContractResult<TAbi, TFunctionName, TChainId>>;

type GetContractArgs<TAbi extends Abi | readonly unknown[] = Abi, TWalletClient extends WalletClient | unknown = unknown> = Omit<GetContractParameters<Transport, Chain$1, Account, TAbi, PublicClient$1, TWalletClient>, 'publicClient' | 'walletClient'> & {
    chainId?: number;
    walletClient?: NonNullable<TWalletClient>;
};
type GetContractResult<TAbi extends Abi | readonly unknown[] = Abi, TWalletClient extends WalletClient | unknown = unknown> = GetContractReturnType<TAbi, PublicClient$1, TWalletClient>;
declare function getContract<TAbi extends Abi | readonly unknown[], TWalletClient extends WalletClient | unknown>({ address, abi, chainId, walletClient, }: GetContractArgs<TAbi, TWalletClient>): GetContractResult<TAbi, TWalletClient>;

type MulticallConfig<TContracts extends ContractFunctionConfig[] = ContractFunctionConfig[], TAllowFailure extends boolean = true> = MulticallParameters<TContracts, TAllowFailure> & {
    /** Chain id to use for Public Client. */
    chainId?: number;
};
type MulticallResult<TContracts extends ContractFunctionConfig[] = ContractFunctionConfig[], TAllowFailure extends boolean = true> = MulticallReturnType<TContracts, TAllowFailure>;
declare function multicall<TContracts extends ContractFunctionConfig[], TAllowFailure extends boolean = true>({ chainId, contracts, blockNumber, blockTag, ...args }: MulticallConfig<TContracts, TAllowFailure>): Promise<MulticallResult<TContracts, TAllowFailure>>;

type ReadContractConfig<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string> = ReadContractParameters<TAbi, TFunctionName> & {
    /** Chain id to use for Public Client. */
    chainId?: number;
};
type ReadContractResult<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string> = ReadContractReturnType<TAbi, TFunctionName>;
declare function readContract<TAbi extends Abi | readonly unknown[], TFunctionName extends string>({ address, chainId, abi, args, functionName, blockNumber, blockTag, }: ReadContractConfig<TAbi, TFunctionName>): Promise<ReadContractResult<TAbi, TFunctionName>>;

type ReadContractsConfig<TContracts extends ContractFunctionConfig[], TAllowFailure extends boolean = true> = Omit<MulticallConfig<TContracts, TAllowFailure>, 'contracts' | 'chainId'> & {
    /** Contracts to query */
    contracts: Narrow<readonly [
        ...MulticallContracts<TContracts, {
            /** Chain id to use for Public Client. */
            chainId?: number;
        }>
    ]>;
};
type ReadContractsResult<TContracts extends ContractFunctionConfig[], TAllowFailure extends boolean = true> = MulticallResult<TContracts, TAllowFailure>;
declare function readContracts<TContracts extends ContractFunctionConfig[], TAllowFailure extends boolean = true>({ contracts, blockNumber, blockTag, ...args }: ReadContractsConfig<TContracts, TAllowFailure>): Promise<ReadContractsResult<TContracts, TAllowFailure>>;

type WatchContractEventConfig<TAbi extends Abi | readonly unknown[] = Abi, TEventName extends string = string> = Pick<WatchContractEventParameters<TAbi, TEventName>, 'abi' | 'address' | 'eventName'> & {
    chainId?: number;
};
type WatchContractEventCallback<TAbi extends Abi | readonly unknown[] = Abi, TEventName extends string = string> = WatchContractEventParameters<TAbi, TEventName>['onLogs'];
declare function watchContractEvent<TAbi extends Abi | readonly unknown[], TEventName extends string>({ address, abi, chainId, eventName, }: WatchContractEventConfig<TAbi, TEventName>, callback: WatchContractEventCallback<TAbi, TEventName>): () => void;

type WatchMulticallConfig<TContracts extends ContractFunctionConfig[] = ContractFunctionConfig[], TAllowFailure extends boolean = true> = MulticallConfig<TContracts, TAllowFailure> & {
    listenToBlock?: boolean;
};
type WatchMulticallCallback<TContracts extends ContractFunctionConfig[] = ContractFunctionConfig[], TAllowFailure extends boolean = true> = (results: MulticallResult<TContracts, TAllowFailure>) => void;
declare function watchMulticall<TContracts extends ContractFunctionConfig[], TAllowFailure extends boolean = true>(args: WatchMulticallConfig<TContracts, TAllowFailure>, callback: WatchMulticallCallback<TContracts, TAllowFailure>): () => void;

type WatchReadContractConfig<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string> = ReadContractConfig<TAbi, TFunctionName> & {
    listenToBlock?: boolean;
};
type WatchReadContractCallback<TAbi extends Abi | readonly unknown[], TFunctionName extends string> = (result: ReadContractResult<TAbi, TFunctionName>) => void;
declare function watchReadContract<TAbi extends Abi | readonly unknown[], TFunctionName extends TAbi extends Abi ? ExtractAbiFunctionNames<TAbi, 'view' | 'pure'> : string>(args: WatchReadContractConfig<TAbi, TFunctionName>, callback: WatchReadContractCallback<TAbi, TFunctionName>): () => void;

type WatchReadContractsConfig<TContracts extends ContractFunctionConfig[] = ContractFunctionConfig[], TAllowFailure extends boolean = true> = ReadContractsConfig<TContracts, TAllowFailure> & {
    listenToBlock?: boolean;
};
type WatchReadContractsCallback<TContracts extends ContractFunctionConfig[] = ContractFunctionConfig[], TAllowFailure extends boolean = true> = (results: ReadContractsResult<TContracts, TAllowFailure>) => void;
declare function watchReadContracts<TContracts extends ContractFunctionConfig[], TAllowFailure extends boolean = true>(args: WatchReadContractsConfig<TContracts, TAllowFailure>, callback: WatchReadContractsCallback<TContracts, TAllowFailure>): () => void;

type WriteContractMode = 'prepared' | undefined;
type WriteContractPreparedArgs<TAbi extends Abi | readonly unknown[] = readonly unknown[], TFunctionName extends string = string> = WriteContractParameters<TAbi, TFunctionName, Chain$1, Account> & {
    mode: 'prepared';
    /** Chain id. */
    chainId?: number;
};
type WriteContractUnpreparedArgs<TAbi extends Abi | readonly unknown[], TFunctionName extends string> = Omit<WriteContractParameters<TAbi, TFunctionName, Chain$1, Account>, 'account' | 'chain'> & {
    mode?: never;
    /** Chain id. */
    chainId?: number;
};
type WriteContractArgs<TAbi extends Abi | readonly unknown[], TFunctionName extends string> = WriteContractPreparedArgs<TAbi, TFunctionName> | WriteContractUnpreparedArgs<TAbi, TFunctionName>;
type WriteContractResult = {
    hash: WriteContractReturnType;
};
/**
 * @description Function to call a contract write method.
 *
 * It is recommended to pair this with the {@link prepareWriteContract} function
 * to avoid [UX pitfalls](https://wagmi.sh/react/prepare-hooks#ux-pitfalls-without-prepare-hooks).
 *
 * @example
 * import { prepareWriteContract, writeContract } from '@wagmi/core'
 *
 * const config = await prepareWriteContract({
 *   address: '0x...',
 *   abi: wagmiAbi,
 *   functionName: 'mint',
 * })
 * const result = await writeContract(config)
 */
declare function writeContract<TAbi extends Abi | readonly unknown[], TFunctionName extends string>(config: WriteContractUnpreparedArgs<TAbi, TFunctionName> | WriteContractPreparedArgs<TAbi, TFunctionName>): Promise<WriteContractResult>;

type FetchEnsAddressArgs = {
    /** Chain id to use for Public Client. */
    chainId?: number;
    /** ENS name to resolve */
    name: string;
};
type FetchEnsAddressResult = Address | null;
declare function fetchEnsAddress({ chainId, name, }: FetchEnsAddressArgs): Promise<FetchEnsAddressResult>;

type FetchEnsAvatarArgs = {
    /** ENS name */
    name: string;
    /** Chain id to use for Public Client. */
    chainId?: number;
};
type FetchEnsAvatarResult = GetEnsAvatarReturnType;
declare function fetchEnsAvatar({ name, chainId, }: FetchEnsAvatarArgs): Promise<FetchEnsAvatarResult>;

type FetchEnsNameArgs = {
    /** Address to lookup */
    address: Address;
    /** Chain id to use for Public Client */
    chainId?: number;
};
type FetchEnsNameResult = string | null;
declare function fetchEnsName({ address, chainId, }: FetchEnsNameArgs): Promise<FetchEnsNameResult>;

type FetchEnsResolverArgs = {
    /** Chain id to use for Public Client */
    chainId?: number;
    /** ENS name to resolve */
    name: string;
};
type FetchEnsResolverResult = GetEnsResolverReturnType;
declare function fetchEnsResolver({ chainId, name, }: FetchEnsResolverArgs): Promise<FetchEnsResolverResult>;

type FetchBlockNumberArgs = {
    chainId?: number;
};
type FetchBlockNumberResult = bigint;
declare function fetchBlockNumber({ chainId, }?: FetchBlockNumberArgs): Promise<FetchBlockNumberResult>;

type FetchFeeDataArgs = {
    /** Units for formatting output */
    formatUnits?: Unit;
    /** Chain id to use for Public Client. */
    chainId?: number;
};
type FetchFeeDataResult = {
    lastBaseFeePerGas: bigint | null;
    gasPrice: bigint | null;
    maxFeePerGas: bigint | null;
    maxPriorityFeePerGas: bigint | null;
    formatted: {
        gasPrice: string | null;
        maxFeePerGas: string | null;
        maxPriorityFeePerGas: string | null;
    };
};
declare function fetchFeeData({ chainId, formatUnits: units, }?: FetchFeeDataArgs): Promise<FetchFeeDataResult>;

type WatchBlockNumberArgs = {
    chainId?: number;
    listen: boolean;
};
type WatchBlockNumberCallback = (blockNumber: FetchBlockNumberResult) => void;
declare function watchBlockNumber(args: WatchBlockNumberArgs, callback: WatchBlockNumberCallback): () => void;

type GetPublicClientArgs = {
    /** Chain id to use for public client. */
    chainId?: number;
};
type GetPublicClientResult<TPublicClient extends PublicClient = PublicClient> = TPublicClient;
declare function getPublicClient<TPublicClient extends PublicClient = PublicClient>({ chainId }?: GetPublicClientArgs): GetPublicClientResult<TPublicClient>;

type GetWalletClientArgs = {
    /** Chain ID to use for Wallet Client. */
    chainId?: number;
};
type GetWalletClientResult = WalletClient | null;
declare function getWalletClient({ chainId, }?: GetWalletClientArgs): Promise<GetWalletClientResult>;

type GetWebSocketPublicClientArgs = {
    /** Chain id to use for public client */
    chainId?: number;
};
type GetWebSocketPublicClientResult<TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient> = TWebSocketPublicClient | undefined;
declare function getWebSocketPublicClient<TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient>({ chainId, }?: GetWebSocketPublicClientArgs): GetWebSocketPublicClientResult<TWebSocketPublicClient>;

type WatchPublicClientCallback<TPublicClient extends PublicClient = PublicClient> = (PublicClient: GetPublicClientResult<TPublicClient>) => void;
declare function watchPublicClient<TPublicClient extends PublicClient = PublicClient>(args: GetPublicClientArgs, callback: WatchPublicClientCallback<TPublicClient>): () => void;

type WatchWalletClientArgs = GetWalletClientArgs;
type WatchWalletClientCallback = (data: GetWalletClientResult) => void;
declare function watchWalletClient({ chainId }: WatchWalletClientArgs, callback: WatchWalletClientCallback): () => void;

type WatchWebSocketPublicClientCallback<TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient> = (webSocketPublicClient: GetWebSocketPublicClientResult<TWebSocketPublicClient>) => void;
declare function watchWebSocketPublicClient<TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient>(args: GetWebSocketPublicClientArgs, callback: WatchWebSocketPublicClientCallback<TWebSocketPublicClient>): () => void;

type FetchTransactionArgs = {
    /** Chain ID used to validate if the Wallet Client is connected to the target chain */
    chainId?: number;
    hash: Hex;
};
type FetchTransactionResult = GetTransactionReturnType;
/**
 * @description Fetches transaction for hash
 *
 * @example
 * import { fetchTransaction } from '@wagmi/core'
 *
 * const transaction = await fetchTransaction({
 *  chainId: 1,
 *  hash: '0x...',
 * })
 */
declare function fetchTransaction({ chainId, hash, }: FetchTransactionArgs): Promise<FetchTransactionResult>;

type SendTransactionArgs = {
    /** Chain ID used to validate if the walletClient is connected to the target chain */
    chainId?: number;
    mode?: 'prepared';
    to: string;
} & Omit<SendTransactionParameters<Chain$1, Account>, 'chain' | 'to'>;
type SendTransactionResult = {
    hash: SendTransactionReturnType;
};
/**
 * @description Function to send a transaction.
 *
 * It is recommended to pair this with the `prepareSendTransaction` function to avoid
 * [UX pitfalls](https://wagmi.sh/react/prepare-hooks#ux-pitfalls-without-prepare-hooks).
 *
 * @example
 * import { prepareSendTransaction, sendTransaction } from '@wagmi/core'
 *
 * const config = await prepareSendTransaction({
 *  to: 'moxey.eth',
 *  value: parseEther('1'),
 * })
 * const result = await sendTransaction(config)
 */
declare function sendTransaction({ accessList, account, chainId, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, mode, nonce, to, value, }: SendTransactionArgs): Promise<SendTransactionResult>;

type PrepareSendTransactionArgs<TWalletClient extends WalletClient = WalletClient> = Omit<SendTransactionParameters<Chain$1, Account>, 'chain' | 'gas' | 'to'> & {
    /** Chain ID used to validate if the walletClient is connected to the target chain */
    chainId?: number;
    gas?: bigint | null;
    to?: string;
    walletClient?: TWalletClient | null;
};
type PrepareSendTransactionResult = Omit<SendTransactionArgs, 'mode' | 'to'> & {
    mode: 'prepared';
    to: Address$1;
};
/**
 * @description Prepares the parameters required for sending a transaction.
 *
 * Returns config to be passed through to `sendTransaction`.
 *
 * @example
 * import { prepareSendTransaction, sendTransaction } from '@wagmi/core'
 *
 * const config = await prepareSendTransaction({
 *  request: {
 *    to: 'moxey.eth',
 *    value: parseEther('1'),
 *  }
 * })
 * const result = await sendTransaction(config)
 */
declare function prepareSendTransaction({ accessList, account, chainId, data, gas: gas_, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to: to_, value, walletClient: walletClient_, }: PrepareSendTransactionArgs): Promise<PrepareSendTransactionResult>;

type WaitForTransactionArgs = {
    /** Chain id to use for Public Client. */
    chainId?: number;
    /**
     * Number of blocks to wait for after transaction is mined
     * @default 1
     */
    confirmations?: number;
    /** Transaction hash to monitor */
    hash: Hash;
    /** Callback to invoke when the transaction has been replaced (sped up). */
    onReplaced?: WaitForTransactionReceiptParameters['onReplaced'];
    timeout?: number;
};
type WaitForTransactionResult = WaitForTransactionReceiptReturnType;
declare function waitForTransaction({ chainId, confirmations, hash, onReplaced, timeout, }: WaitForTransactionArgs): Promise<WaitForTransactionResult>;

type WatchPendingTransactionsArgs = {
    chainId?: number;
};
type WatchPendingTransactionsCallback = WatchPendingTransactionsParameters['onTransactions'];
type WatchPendingTransactionsResult = OnTransactionsParameter;
declare function watchPendingTransactions(args: WatchPendingTransactionsArgs, callback: WatchPendingTransactionsCallback): () => void;

/**
 * [ERC-20 Token Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-20)
 */
declare const erc20ABI: readonly [{
    readonly type: "event";
    readonly name: "Approval";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
}, {
    readonly type: "event";
    readonly name: "Transfer";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "allowance";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "approve";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}, {
    readonly type: "function";
    readonly name: "balanceOf";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "decimals";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint8";
    }];
}, {
    readonly type: "function";
    readonly name: "name";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
}, {
    readonly type: "function";
    readonly name: "symbol";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
}, {
    readonly type: "function";
    readonly name: "totalSupply";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "transfer";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}, {
    readonly type: "function";
    readonly name: "transferFrom";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}];
/**
 * [ERC-721 Non-Fungible Token Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-721)
 */
declare const erc721ABI: readonly [{
    readonly type: "event";
    readonly name: "Approval";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
}, {
    readonly type: "event";
    readonly name: "ApprovalForAll";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "approved";
        readonly type: "bool";
    }];
}, {
    readonly type: "event";
    readonly name: "Transfer";
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "approve";
    readonly stateMutability: "payable";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [];
}, {
    readonly type: "function";
    readonly name: "balanceOf";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "getApproved";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
    }];
}, {
    readonly type: "function";
    readonly name: "isApprovedForAll";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}, {
    readonly type: "function";
    readonly name: "name";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
}, {
    readonly type: "function";
    readonly name: "ownerOf";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }];
}, {
    readonly type: "function";
    readonly name: "safeTransferFrom";
    readonly stateMutability: "payable";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [];
}, {
    readonly type: "function";
    readonly name: "safeTransferFrom";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly outputs: readonly [];
}, {
    readonly type: "function";
    readonly name: "setApprovalForAll";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly outputs: readonly [];
}, {
    readonly type: "function";
    readonly name: "symbol";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
}, {
    readonly type: "function";
    readonly name: "tokenByIndex";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "tokenByIndex";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "tokenURI";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
    }];
}, {
    readonly type: "function";
    readonly name: "totalSupply";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly type: "function";
    readonly name: "transferFrom";
    readonly stateMutability: "payable";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "tokeId";
        readonly type: "uint256";
    }];
    readonly outputs: readonly [];
}];
/**
 * [ERC-4626 Tokenized Vaults Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-4626)
 */
declare const erc4626ABI: readonly [{
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "assets";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "Deposit";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly name: "assets";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "Withdraw";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "asset";
    readonly outputs: readonly [{
        readonly name: "assetTokenAddress";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "convertToAssets";
    readonly outputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly name: "convertToShares";
    readonly outputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }, {
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "deposit";
    readonly outputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "caller";
        readonly type: "address";
    }];
    readonly name: "maxDeposit";
    readonly outputs: readonly [{
        readonly name: "maxAssets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "caller";
        readonly type: "address";
    }];
    readonly name: "maxMint";
    readonly outputs: readonly [{
        readonly name: "maxShares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "maxRedeem";
    readonly outputs: readonly [{
        readonly name: "maxShares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "maxWithdraw";
    readonly outputs: readonly [{
        readonly name: "maxAssets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }, {
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "mint";
    readonly outputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly name: "previewDeposit";
    readonly outputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "previewMint";
    readonly outputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly name: "previewRedeem";
    readonly outputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly name: "previewWithdraw";
    readonly outputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }, {
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "redeem";
    readonly outputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalAssets";
    readonly outputs: readonly [{
        readonly name: "totalManagedAssets";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly name: "assets";
        readonly type: "uint256";
    }, {
        readonly name: "receiver";
        readonly type: "address";
    }, {
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "withdraw";
    readonly outputs: readonly [{
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];

declare class ChainMismatchError extends Error {
    name: string;
    constructor({ activeChain, targetChain, }: {
        activeChain: string;
        targetChain: string;
    });
}
declare class ChainNotConfiguredError extends Error {
    name: string;
    constructor({ chainId, connectorId, }: {
        chainId: number;
        connectorId?: string;
    });
}
declare class ConnectorAlreadyConnectedError extends Error {
    name: string;
    message: string;
}
declare class ConfigChainsNotFound extends Error {
    name: string;
    message: string;
}
declare class SwitchChainNotSupportedError extends Error {
    name: string;
    constructor({ connector }: {
        connector: Connector;
    });
}

type ConfigureChainsConfig = Pick<FallbackTransportConfig, 'rank' | 'retryCount' | 'retryDelay'> & Pick<PublicClientConfig, 'batch' | 'pollingInterval'> & {
    stallTimeout?: number;
};
declare function configureChains<TChain extends Chain = Chain>(defaultChains: TChain[], providers: ChainProviderFn<TChain>[], { batch, pollingInterval, rank, retryCount, retryDelay, stallTimeout, }?: ConfigureChainsConfig): {
    readonly chains: TChain[];
    readonly publicClient: ({ chainId }: {
        chainId?: number | undefined;
    }) => PublicClient<FallbackTransport, Chain>;
    readonly webSocketPublicClient: ({ chainId }: {
        chainId?: number | undefined;
    }) => WebSocketPublicClient<FallbackTransport, Chain> | undefined;
};

/** Forked from https://github.com/epoberezkin/fast-deep-equal */
declare function deepEqual(a: any, b: any): boolean;

declare function deserialize(cachedString: string): any;

declare function getUnit(unit: Unit): number;

type StandardReplacer = (key: string, value: any) => any;
type CircularReplacer = (key: string, value: any, referenceKey: string) => any;
/**
 * @function stringify
 *
 * @description
 * stringifier that handles circular values
 * Forked from https://github.com/planttheidea/fast-stringify
 *
 * @param value to stringify
 * @param [replacer] a custom replacer function for handling standard values
 * @param [indent] the number of spaces to indent the output by
 * @param [circularReplacer] a custom replacer function for handling circular values
 * @returns the stringified output
 */
declare function serialize(value: any, replacer?: StandardReplacer | null | undefined, indent?: number | null | undefined, circularReplacer?: CircularReplacer | null | undefined): string;

export { ChainMismatchError, ChainNotConfiguredError, ChainProviderFn, Config, ConfigChainsNotFound, ConfigureChainsConfig, ConnectArgs, ConnectResult, ConnectorAlreadyConnectedError, CreateConfigParameters, FetchBalanceArgs, FetchBalanceResult, FetchBlockNumberArgs, FetchBlockNumberResult, FetchEnsAddressArgs, FetchEnsAddressResult, FetchEnsAvatarArgs, FetchEnsAvatarResult, FetchEnsNameArgs, FetchEnsNameResult, FetchEnsResolverArgs, FetchEnsResolverResult, FetchFeeDataArgs, FetchFeeDataResult, FetchTokenArgs, FetchTokenResult, FetchTransactionArgs, FetchTransactionResult, GetAccountResult, GetContractArgs, GetContractResult, GetNetworkResult, GetPublicClientArgs, GetPublicClientResult, GetWalletClientArgs, GetWalletClientResult, GetWebSocketPublicClientArgs, GetWebSocketPublicClientResult, Hash, MulticallConfig, MulticallResult, PrepareSendTransactionArgs, PrepareSendTransactionResult, PrepareWriteContractConfig, PrepareWriteContractResult, PublicClient, ReadContractConfig, ReadContractResult, ReadContractsConfig, ReadContractsResult, SendTransactionArgs, SendTransactionResult, SignMessageArgs, SignMessageResult, SignTypedDataArgs, SignTypedDataResult, ClientStorage as Storage, SwitchChainNotSupportedError, SwitchNetworkArgs, SwitchNetworkResult, Unit, WaitForTransactionArgs, WaitForTransactionResult, WalletClient, WatchAccountCallback, WatchBlockNumberArgs, WatchBlockNumberCallback, WatchContractEventCallback, WatchContractEventConfig, WatchMulticallCallback, WatchMulticallConfig, WatchNetworkCallback, WatchPendingTransactionsArgs, WatchPendingTransactionsCallback, WatchPendingTransactionsResult, WatchPublicClientCallback, WatchReadContractCallback, WatchReadContractConfig, WatchReadContractsCallback, WatchReadContractsConfig, WatchWalletClientArgs, WatchWalletClientCallback, WatchWebSocketPublicClientCallback, WebSocketPublicClient, WriteContractArgs, WriteContractMode, WriteContractPreparedArgs, WriteContractResult, WriteContractUnpreparedArgs, configureChains, connect, createConfig, createStorage, deepEqual, deserialize, disconnect, erc20ABI, erc4626ABI, erc721ABI, fetchBalance, fetchBlockNumber, fetchEnsAddress, fetchEnsAvatar, fetchEnsName, fetchEnsResolver, fetchFeeData, fetchToken, fetchTransaction, getAccount, getConfig, getContract, getNetwork, getPublicClient, getUnit, getWalletClient, getWebSocketPublicClient, multicall, noopStorage, prepareSendTransaction, prepareWriteContract, readContract, readContracts, sendTransaction, serialize, signMessage, signTypedData, switchNetwork, waitForTransaction, watchAccount, watchBlockNumber, watchContractEvent, watchMulticall, watchNetwork, watchPendingTransactions, watchPublicClient, watchReadContract, watchReadContracts, watchWalletClient, watchWebSocketPublicClient, writeContract };
