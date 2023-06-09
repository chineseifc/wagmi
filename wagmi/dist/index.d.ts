import * as _tanstack_react_query from '@tanstack/react-query';
import { QueryClient, QueryKey, UseInfiniteQueryOptions, QueryFunction, InfiniteQueryObserverResult, UseMutationOptions, UseMutationResult, MutationFunction, MutationKey, UseQueryOptions, QueryObserverResult } from '@tanstack/react-query';
import { Persister } from '@tanstack/react-query-persist-client';
import * as _wagmi_core from '@wagmi/core';
import { PublicClient, WebSocketPublicClient, CreateConfigParameters as CreateConfigParameters$1, Config as Config$1, GetAccountResult, FetchBalanceResult, FetchBalanceArgs, ConnectArgs, ConnectResult, SignMessageArgs, SignMessageResult, SignTypedDataArgs, SignTypedDataResult, SwitchNetworkArgs, SwitchNetworkResult, WatchContractEventConfig, WatchContractEventCallback, ReadContractsResult, ReadContractsConfig, ReadContractResult, ReadContractConfig, WriteContractMode, WriteContractResult, WriteContractUnpreparedArgs, PrepareWriteContractResult, WalletClient, PrepareWriteContractConfig, FetchTokenResult, FetchTokenArgs, FetchEnsAddressArgs, FetchEnsAddressResult, FetchEnsAvatarArgs, FetchEnsAvatarResult, FetchEnsNameArgs, FetchEnsNameResult, FetchEnsResolverArgs, FetchEnsResolverResult, FetchBlockNumberArgs, FetchBlockNumberResult, FetchFeeDataResult, FetchFeeDataArgs, GetPublicClientArgs, GetWalletClientResult, GetWalletClientArgs, GetWebSocketPublicClientArgs, PrepareSendTransactionResult, PrepareSendTransactionArgs, SendTransactionResult, SendTransactionArgs, FetchTransactionArgs, FetchTransactionResult, WaitForTransactionArgs, WaitForTransactionResult, WatchPendingTransactionsCallback } from '@wagmi/core';
export { Chain, ChainMismatchError, ChainNotConfiguredError, ChainProviderFn, ConfigChainsNotFound, Connector, ConnectorAlreadyConnectedError, ConnectorData, ConnectorEvents, ConnectorNotFoundError, PublicClient, Storage, SwitchChainNotSupportedError, Unit, WalletClient, WebSocketPublicClient, WindowProvider, configureChains, createStorage, deepEqual, deserialize, erc20ABI, erc4626ABI, erc721ABI, mainnet, readContracts, sepolia, serialize } from '@wagmi/core';
import * as viem_dist_types_types_eip1193 from 'viem/dist/types/types/eip1193';
import * as viem_dist_types_types_misc from 'viem/dist/types/types/misc';
import * as viem from 'viem';
import { ContractFunctionConfig, MulticallContracts, SendTransactionParameters, GetFunctionArgs } from 'viem';
import * as React from 'react';
import * as abitype_dist_abi_3a9c20c7 from 'abitype/dist/abi-3a9c20c7';
import { Never } from '@wagmi/core/internal';
import { TypedData, Abi, Narrow } from 'abitype';
export { Address } from 'abitype';

type CreateConfigParameters<TPublicClient extends PublicClient = PublicClient, TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient> = CreateConfigParameters$1<TPublicClient, TWebSocketPublicClient> & {
    queryClient?: QueryClient;
    persister?: Persister | null;
};
declare function createConfig<TPublicClient extends PublicClient, TWebSocketPublicClient extends WebSocketPublicClient>({ queryClient, storage, persister, ...args }: CreateConfigParameters<TPublicClient, TWebSocketPublicClient>): Config$1<TPublicClient, TWebSocketPublicClient> & {
    queryClient: QueryClient;
};
type Config<TPublicClient extends PublicClient = PublicClient, TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient> = Config$1<TPublicClient, TWebSocketPublicClient> & {
    queryClient: QueryClient;
};

declare const Context: React.Context<Config<PublicClient<viem.Transport<string, Record<string, any>, {
    (args: {
        method: "web3_clientVersion";
        params?: undefined;
    }): Promise<string>;
    (args: {
        method: "web3_sha3";
        params: [data: `0x${string}`];
    }): Promise<string>;
    (args: {
        method: "net_listening";
        params?: undefined;
    }): Promise<boolean>;
    (args: {
        method: "net_peerCount";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "net_version";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_blockNumber";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_call";
        params: [request: Partial<viem.RpcTransactionRequest>, block?: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier | undefined];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_chainId";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_coinbase";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_estimateGas";
        params: [parameters: viem.RpcTransactionRequest, block?: `0x${string}` | viem.BlockTag | undefined];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_feeHistory";
        params: [blockCount: `0x${string}`, newestBlock: `0x${string}` | viem.BlockTag, rewardPercentiles: number[] | undefined];
    }): Promise<viem.RpcFeeHistory>;
    (args: {
        method: "eth_gasPrice";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getBalance";
        params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getBlockByHash";
        params: [hash: `0x${string}`, includeTransactionObjects: boolean];
    }): Promise<viem.RpcBlock | null>;
    (args: {
        method: "eth_getBlockByNumber";
        params: [block: `0x${string}` | viem.BlockTag, includeTransactionObjects: boolean];
    }): Promise<viem.RpcBlock | null>;
    (args: {
        method: "eth_getBlockTransactionCountByHash";
        params: [hash: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getBlockTransactionCountByNumber";
        params: [block: `0x${string}` | viem.BlockTag];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getCode";
        params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getFilterChanges";
        params: [filterId: `0x${string}`];
    }): Promise<`0x${string}`[] | viem.RpcLog[]>;
    (args: {
        method: "eth_getFilterLogs";
        params: [filterId: `0x${string}`];
    }): Promise<viem.RpcLog[]>;
    (args: {
        method: "eth_getLogs";
        params: [parameters: {
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: viem_dist_types_types_misc.LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | viem.BlockTag | undefined;
            toBlock?: `0x${string}` | viem.BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
    }): Promise<viem.RpcLog[]>;
    (args: {
        method: "eth_getStorageAt";
        params: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getTransactionByBlockHashAndIndex";
        params: [hash: `0x${string}`, index: `0x${string}`];
    }): Promise<viem.RpcTransaction | null>;
    (args: {
        method: "eth_getTransactionByBlockNumberAndIndex";
        params: [block: `0x${string}` | viem.BlockTag, index: `0x${string}`];
    }): Promise<viem.RpcTransaction | null>;
    (args: {
        method: "eth_getTransactionByHash";
        params: [hash: `0x${string}`];
    }): Promise<viem.RpcTransaction | null>;
    (args: {
        method: "eth_getTransactionCount";
        params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getTransactionReceipt";
        params: [hash: `0x${string}`];
    }): Promise<viem.RpcTransactionReceipt | null>;
    (args: {
        method: "eth_getUncleByBlockHashAndIndex";
        params: [hash: `0x${string}`, index: `0x${string}`];
    }): Promise<viem.RpcUncle | null>;
    (args: {
        method: "eth_getUncleByBlockNumberAndIndex";
        params: [block: `0x${string}` | viem.BlockTag, index: `0x${string}`];
    }): Promise<viem.RpcUncle | null>;
    (args: {
        method: "eth_getUncleCountByBlockHash";
        params: [hash: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getUncleCountByBlockNumber";
        params: [block: `0x${string}` | viem.BlockTag];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_newBlockFilter";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_newFilter";
        params: [filter: {
            fromBlock?: `0x${string}` | viem.BlockTag | undefined;
            toBlock?: `0x${string}` | viem.BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: viem_dist_types_types_misc.LogTopic[] | undefined;
        }];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_newPendingTransactionFilter";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_protocolVersion";
        params?: undefined;
    }): Promise<string>;
    (args: {
        method: "eth_sendRawTransaction";
        params: [signedTransaction: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_uninstallFilter";
        params: [filterId: `0x${string}`];
    }): Promise<boolean>;
} & {
    (args: {
        method: "eth_sendTransaction";
        params: [request: viem.RpcTransactionRequest];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_sign";
        params: [address: `0x${string}`, data: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_signTransaction";
        params: [request: viem.RpcTransactionRequest];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_signTypedData_v4";
        params: [address: `0x${string}`, message: string];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_syncing";
        params?: undefined;
    }): Promise<false | viem_dist_types_types_eip1193.NetworkSync>;
    (args: {
        method: "personal_sign";
        params: [data: `0x${string}`, address: `0x${string}`];
    }): Promise<`0x${string}`>;
} & {
    (args: {
        method: "eth_accounts";
        params?: undefined;
    }): Promise<`0x${string}`[]>;
    (args: {
        method: "eth_chainId";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_requestAccounts";
        params?: undefined;
    }): Promise<`0x${string}`[]>;
    (args: {
        method: "wallet_requestPermissions";
        params: [permissions: {
            eth_accounts: Record<string, any>;
        }];
    }): Promise<viem_dist_types_types_eip1193.WalletPermission[]>;
    (args: {
        method: "wallet_getPermissions";
        params?: undefined;
    }): Promise<viem_dist_types_types_eip1193.WalletPermission[]>;
    (args: {
        method: "wallet_addEthereumChain";
        params: [chain: viem_dist_types_types_eip1193.Chain];
    }): Promise<null>;
    (args: {
        method: "wallet_switchEthereumChain";
        params: [chain: {
            chainId: string;
        }];
    }): Promise<null>;
    (args: {
        method: "wallet_watchAsset";
        params: viem_dist_types_types_eip1193.WatchAssetParams;
    }): Promise<boolean>;
}>, _wagmi_core.Chain>, WebSocketPublicClient<viem.Transport<string, Record<string, any>, {
    (args: {
        method: "web3_clientVersion";
        params?: undefined;
    }): Promise<string>;
    (args: {
        method: "web3_sha3";
        params: [data: `0x${string}`];
    }): Promise<string>;
    (args: {
        method: "net_listening";
        params?: undefined;
    }): Promise<boolean>;
    (args: {
        method: "net_peerCount";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "net_version";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_blockNumber";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_call";
        params: [request: Partial<viem.RpcTransactionRequest>, block?: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier | undefined];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_chainId";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_coinbase";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_estimateGas";
        params: [parameters: viem.RpcTransactionRequest, block?: `0x${string}` | viem.BlockTag | undefined];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_feeHistory";
        params: [blockCount: `0x${string}`, newestBlock: `0x${string}` | viem.BlockTag, rewardPercentiles: number[] | undefined];
    }): Promise<viem.RpcFeeHistory>;
    (args: {
        method: "eth_gasPrice";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getBalance";
        params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getBlockByHash";
        params: [hash: `0x${string}`, includeTransactionObjects: boolean];
    }): Promise<viem.RpcBlock | null>;
    (args: {
        method: "eth_getBlockByNumber";
        params: [block: `0x${string}` | viem.BlockTag, includeTransactionObjects: boolean];
    }): Promise<viem.RpcBlock | null>;
    (args: {
        method: "eth_getBlockTransactionCountByHash";
        params: [hash: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getBlockTransactionCountByNumber";
        params: [block: `0x${string}` | viem.BlockTag];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getCode";
        params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getFilterChanges";
        params: [filterId: `0x${string}`];
    }): Promise<`0x${string}`[] | viem.RpcLog[]>;
    (args: {
        method: "eth_getFilterLogs";
        params: [filterId: `0x${string}`];
    }): Promise<viem.RpcLog[]>;
    (args: {
        method: "eth_getLogs";
        params: [parameters: {
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: viem_dist_types_types_misc.LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | viem.BlockTag | undefined;
            toBlock?: `0x${string}` | viem.BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
    }): Promise<viem.RpcLog[]>;
    (args: {
        method: "eth_getStorageAt";
        params: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getTransactionByBlockHashAndIndex";
        params: [hash: `0x${string}`, index: `0x${string}`];
    }): Promise<viem.RpcTransaction | null>;
    (args: {
        method: "eth_getTransactionByBlockNumberAndIndex";
        params: [block: `0x${string}` | viem.BlockTag, index: `0x${string}`];
    }): Promise<viem.RpcTransaction | null>;
    (args: {
        method: "eth_getTransactionByHash";
        params: [hash: `0x${string}`];
    }): Promise<viem.RpcTransaction | null>;
    (args: {
        method: "eth_getTransactionCount";
        params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getTransactionReceipt";
        params: [hash: `0x${string}`];
    }): Promise<viem.RpcTransactionReceipt | null>;
    (args: {
        method: "eth_getUncleByBlockHashAndIndex";
        params: [hash: `0x${string}`, index: `0x${string}`];
    }): Promise<viem.RpcUncle | null>;
    (args: {
        method: "eth_getUncleByBlockNumberAndIndex";
        params: [block: `0x${string}` | viem.BlockTag, index: `0x${string}`];
    }): Promise<viem.RpcUncle | null>;
    (args: {
        method: "eth_getUncleCountByBlockHash";
        params: [hash: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getUncleCountByBlockNumber";
        params: [block: `0x${string}` | viem.BlockTag];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_newBlockFilter";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_newFilter";
        params: [filter: {
            fromBlock?: `0x${string}` | viem.BlockTag | undefined;
            toBlock?: `0x${string}` | viem.BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: viem_dist_types_types_misc.LogTopic[] | undefined;
        }];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_newPendingTransactionFilter";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_protocolVersion";
        params?: undefined;
    }): Promise<string>;
    (args: {
        method: "eth_sendRawTransaction";
        params: [signedTransaction: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_uninstallFilter";
        params: [filterId: `0x${string}`];
    }): Promise<boolean>;
} & {
    (args: {
        method: "eth_sendTransaction";
        params: [request: viem.RpcTransactionRequest];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_sign";
        params: [address: `0x${string}`, data: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_signTransaction";
        params: [request: viem.RpcTransactionRequest];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_signTypedData_v4";
        params: [address: `0x${string}`, message: string];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_syncing";
        params?: undefined;
    }): Promise<false | viem_dist_types_types_eip1193.NetworkSync>;
    (args: {
        method: "personal_sign";
        params: [data: `0x${string}`, address: `0x${string}`];
    }): Promise<`0x${string}`>;
} & {
    (args: {
        method: "eth_accounts";
        params?: undefined;
    }): Promise<`0x${string}`[]>;
    (args: {
        method: "eth_chainId";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_requestAccounts";
        params?: undefined;
    }): Promise<`0x${string}`[]>;
    (args: {
        method: "wallet_requestPermissions";
        params: [permissions: {
            eth_accounts: Record<string, any>;
        }];
    }): Promise<viem_dist_types_types_eip1193.WalletPermission[]>;
    (args: {
        method: "wallet_getPermissions";
        params?: undefined;
    }): Promise<viem_dist_types_types_eip1193.WalletPermission[]>;
    (args: {
        method: "wallet_addEthereumChain";
        params: [chain: viem_dist_types_types_eip1193.Chain];
    }): Promise<null>;
    (args: {
        method: "wallet_switchEthereumChain";
        params: [chain: {
            chainId: string;
        }];
    }): Promise<null>;
    (args: {
        method: "wallet_watchAsset";
        params: viem_dist_types_types_eip1193.WatchAssetParams;
    }): Promise<boolean>;
}>, _wagmi_core.Chain>> | undefined>;
type WagmiConfigProps<TPublicClient extends PublicClient = PublicClient, TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient> = {
    /** React-decorated Client instance */
    config: Config<TPublicClient, TWebSocketPublicClient>;
};
declare function WagmiConfig<TPublicClient extends PublicClient, TWebSocketPublicClient extends WebSocketPublicClient>({ children, config, }: React.PropsWithChildren<WagmiConfigProps<TPublicClient, TWebSocketPublicClient>>): React.FunctionComponentElement<React.ProviderProps<Config<PublicClient<viem.Transport<string, Record<string, any>, {
    (args: {
        method: "web3_clientVersion";
        params?: undefined;
    }): Promise<string>;
    (args: {
        method: "web3_sha3";
        params: [data: `0x${string}`];
    }): Promise<string>;
    (args: {
        method: "net_listening";
        params?: undefined;
    }): Promise<boolean>;
    (args: {
        method: "net_peerCount";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "net_version";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_blockNumber";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_call";
        params: [request: Partial<viem.RpcTransactionRequest>, block?: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier | undefined];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_chainId";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_coinbase";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_estimateGas";
        params: [parameters: viem.RpcTransactionRequest, block?: `0x${string}` | viem.BlockTag | undefined];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_feeHistory";
        params: [blockCount: `0x${string}`, newestBlock: `0x${string}` | viem.BlockTag, rewardPercentiles: number[] | undefined];
    }): Promise<viem.RpcFeeHistory>;
    (args: {
        method: "eth_gasPrice";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getBalance";
        params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getBlockByHash";
        params: [hash: `0x${string}`, includeTransactionObjects: boolean];
    }): Promise<viem.RpcBlock | null>;
    (args: {
        method: "eth_getBlockByNumber";
        params: [block: `0x${string}` | viem.BlockTag, includeTransactionObjects: boolean];
    }): Promise<viem.RpcBlock | null>;
    (args: {
        method: "eth_getBlockTransactionCountByHash";
        params: [hash: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getBlockTransactionCountByNumber";
        params: [block: `0x${string}` | viem.BlockTag];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getCode";
        params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getFilterChanges";
        params: [filterId: `0x${string}`];
    }): Promise<`0x${string}`[] | viem.RpcLog[]>;
    (args: {
        method: "eth_getFilterLogs";
        params: [filterId: `0x${string}`];
    }): Promise<viem.RpcLog[]>;
    (args: {
        method: "eth_getLogs";
        params: [parameters: {
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: viem_dist_types_types_misc.LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | viem.BlockTag | undefined;
            toBlock?: `0x${string}` | viem.BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
    }): Promise<viem.RpcLog[]>;
    (args: {
        method: "eth_getStorageAt";
        params: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getTransactionByBlockHashAndIndex";
        params: [hash: `0x${string}`, index: `0x${string}`];
    }): Promise<viem.RpcTransaction | null>;
    (args: {
        method: "eth_getTransactionByBlockNumberAndIndex";
        params: [block: `0x${string}` | viem.BlockTag, index: `0x${string}`];
    }): Promise<viem.RpcTransaction | null>;
    (args: {
        method: "eth_getTransactionByHash";
        params: [hash: `0x${string}`];
    }): Promise<viem.RpcTransaction | null>;
    (args: {
        method: "eth_getTransactionCount";
        params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getTransactionReceipt";
        params: [hash: `0x${string}`];
    }): Promise<viem.RpcTransactionReceipt | null>;
    (args: {
        method: "eth_getUncleByBlockHashAndIndex";
        params: [hash: `0x${string}`, index: `0x${string}`];
    }): Promise<viem.RpcUncle | null>;
    (args: {
        method: "eth_getUncleByBlockNumberAndIndex";
        params: [block: `0x${string}` | viem.BlockTag, index: `0x${string}`];
    }): Promise<viem.RpcUncle | null>;
    (args: {
        method: "eth_getUncleCountByBlockHash";
        params: [hash: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getUncleCountByBlockNumber";
        params: [block: `0x${string}` | viem.BlockTag];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_newBlockFilter";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_newFilter";
        params: [filter: {
            fromBlock?: `0x${string}` | viem.BlockTag | undefined;
            toBlock?: `0x${string}` | viem.BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: viem_dist_types_types_misc.LogTopic[] | undefined;
        }];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_newPendingTransactionFilter";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_protocolVersion";
        params?: undefined;
    }): Promise<string>;
    (args: {
        method: "eth_sendRawTransaction";
        params: [signedTransaction: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_uninstallFilter";
        params: [filterId: `0x${string}`];
    }): Promise<boolean>;
} & {
    (args: {
        method: "eth_sendTransaction";
        params: [request: viem.RpcTransactionRequest];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_sign";
        params: [address: `0x${string}`, data: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_signTransaction";
        params: [request: viem.RpcTransactionRequest];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_signTypedData_v4";
        params: [address: `0x${string}`, message: string];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_syncing";
        params?: undefined;
    }): Promise<false | viem_dist_types_types_eip1193.NetworkSync>;
    (args: {
        method: "personal_sign";
        params: [data: `0x${string}`, address: `0x${string}`];
    }): Promise<`0x${string}`>;
} & {
    (args: {
        method: "eth_accounts";
        params?: undefined;
    }): Promise<`0x${string}`[]>;
    (args: {
        method: "eth_chainId";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_requestAccounts";
        params?: undefined;
    }): Promise<`0x${string}`[]>;
    (args: {
        method: "wallet_requestPermissions";
        params: [permissions: {
            eth_accounts: Record<string, any>;
        }];
    }): Promise<viem_dist_types_types_eip1193.WalletPermission[]>;
    (args: {
        method: "wallet_getPermissions";
        params?: undefined;
    }): Promise<viem_dist_types_types_eip1193.WalletPermission[]>;
    (args: {
        method: "wallet_addEthereumChain";
        params: [chain: viem_dist_types_types_eip1193.Chain];
    }): Promise<null>;
    (args: {
        method: "wallet_switchEthereumChain";
        params: [chain: {
            chainId: string;
        }];
    }): Promise<null>;
    (args: {
        method: "wallet_watchAsset";
        params: viem_dist_types_types_eip1193.WatchAssetParams;
    }): Promise<boolean>;
}>, _wagmi_core.Chain>, WebSocketPublicClient<viem.Transport<string, Record<string, any>, {
    (args: {
        method: "web3_clientVersion";
        params?: undefined;
    }): Promise<string>;
    (args: {
        method: "web3_sha3";
        params: [data: `0x${string}`];
    }): Promise<string>;
    (args: {
        method: "net_listening";
        params?: undefined;
    }): Promise<boolean>;
    (args: {
        method: "net_peerCount";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "net_version";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_blockNumber";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_call";
        params: [request: Partial<viem.RpcTransactionRequest>, block?: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier | undefined];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_chainId";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_coinbase";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_estimateGas";
        params: [parameters: viem.RpcTransactionRequest, block?: `0x${string}` | viem.BlockTag | undefined];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_feeHistory";
        params: [blockCount: `0x${string}`, newestBlock: `0x${string}` | viem.BlockTag, rewardPercentiles: number[] | undefined];
    }): Promise<viem.RpcFeeHistory>;
    (args: {
        method: "eth_gasPrice";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getBalance";
        params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getBlockByHash";
        params: [hash: `0x${string}`, includeTransactionObjects: boolean];
    }): Promise<viem.RpcBlock | null>;
    (args: {
        method: "eth_getBlockByNumber";
        params: [block: `0x${string}` | viem.BlockTag, includeTransactionObjects: boolean];
    }): Promise<viem.RpcBlock | null>;
    (args: {
        method: "eth_getBlockTransactionCountByHash";
        params: [hash: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getBlockTransactionCountByNumber";
        params: [block: `0x${string}` | viem.BlockTag];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getCode";
        params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getFilterChanges";
        params: [filterId: `0x${string}`];
    }): Promise<`0x${string}`[] | viem.RpcLog[]>;
    (args: {
        method: "eth_getFilterLogs";
        params: [filterId: `0x${string}`];
    }): Promise<viem.RpcLog[]>;
    (args: {
        method: "eth_getLogs";
        params: [parameters: {
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: viem_dist_types_types_misc.LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | viem.BlockTag | undefined;
            toBlock?: `0x${string}` | viem.BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
    }): Promise<viem.RpcLog[]>;
    (args: {
        method: "eth_getStorageAt";
        params: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getTransactionByBlockHashAndIndex";
        params: [hash: `0x${string}`, index: `0x${string}`];
    }): Promise<viem.RpcTransaction | null>;
    (args: {
        method: "eth_getTransactionByBlockNumberAndIndex";
        params: [block: `0x${string}` | viem.BlockTag, index: `0x${string}`];
    }): Promise<viem.RpcTransaction | null>;
    (args: {
        method: "eth_getTransactionByHash";
        params: [hash: `0x${string}`];
    }): Promise<viem.RpcTransaction | null>;
    (args: {
        method: "eth_getTransactionCount";
        params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getTransactionReceipt";
        params: [hash: `0x${string}`];
    }): Promise<viem.RpcTransactionReceipt | null>;
    (args: {
        method: "eth_getUncleByBlockHashAndIndex";
        params: [hash: `0x${string}`, index: `0x${string}`];
    }): Promise<viem.RpcUncle | null>;
    (args: {
        method: "eth_getUncleByBlockNumberAndIndex";
        params: [block: `0x${string}` | viem.BlockTag, index: `0x${string}`];
    }): Promise<viem.RpcUncle | null>;
    (args: {
        method: "eth_getUncleCountByBlockHash";
        params: [hash: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getUncleCountByBlockNumber";
        params: [block: `0x${string}` | viem.BlockTag];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_newBlockFilter";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_newFilter";
        params: [filter: {
            fromBlock?: `0x${string}` | viem.BlockTag | undefined;
            toBlock?: `0x${string}` | viem.BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: viem_dist_types_types_misc.LogTopic[] | undefined;
        }];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_newPendingTransactionFilter";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_protocolVersion";
        params?: undefined;
    }): Promise<string>;
    (args: {
        method: "eth_sendRawTransaction";
        params: [signedTransaction: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_uninstallFilter";
        params: [filterId: `0x${string}`];
    }): Promise<boolean>;
} & {
    (args: {
        method: "eth_sendTransaction";
        params: [request: viem.RpcTransactionRequest];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_sign";
        params: [address: `0x${string}`, data: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_signTransaction";
        params: [request: viem.RpcTransactionRequest];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_signTypedData_v4";
        params: [address: `0x${string}`, message: string];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_syncing";
        params?: undefined;
    }): Promise<false | viem_dist_types_types_eip1193.NetworkSync>;
    (args: {
        method: "personal_sign";
        params: [data: `0x${string}`, address: `0x${string}`];
    }): Promise<`0x${string}`>;
} & {
    (args: {
        method: "eth_accounts";
        params?: undefined;
    }): Promise<`0x${string}`[]>;
    (args: {
        method: "eth_chainId";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_requestAccounts";
        params?: undefined;
    }): Promise<`0x${string}`[]>;
    (args: {
        method: "wallet_requestPermissions";
        params: [permissions: {
            eth_accounts: Record<string, any>;
        }];
    }): Promise<viem_dist_types_types_eip1193.WalletPermission[]>;
    (args: {
        method: "wallet_getPermissions";
        params?: undefined;
    }): Promise<viem_dist_types_types_eip1193.WalletPermission[]>;
    (args: {
        method: "wallet_addEthereumChain";
        params: [chain: viem_dist_types_types_eip1193.Chain];
    }): Promise<null>;
    (args: {
        method: "wallet_switchEthereumChain";
        params: [chain: {
            chainId: string;
        }];
    }): Promise<null>;
    (args: {
        method: "wallet_watchAsset";
        params: viem_dist_types_types_eip1193.WatchAssetParams;
    }): Promise<boolean>;
}>, _wagmi_core.Chain>> | undefined>>;
declare function useConfig<TPublicClient extends PublicClient, TWebSocketPublicClient extends WebSocketPublicClient = WebSocketPublicClient>(): Config<TPublicClient, TWebSocketPublicClient>;

type UseAccountConfig = {
    /** Function to invoke when connected */
    onConnect?({ address, connector, isReconnected, }: {
        address?: GetAccountResult['address'];
        connector?: GetAccountResult['connector'];
        isReconnected: boolean;
    }): void;
    /** Function to invoke when disconnected */
    onDisconnect?(): void;
};
declare function useAccount({ onConnect, onDisconnect }?: UseAccountConfig): GetAccountResult<_wagmi_core.PublicClient<viem.Transport<string, Record<string, any>, {
    (args: {
        method: "web3_clientVersion";
        params?: undefined;
    }): Promise<string>;
    (args: {
        method: "web3_sha3";
        params: [data: `0x${string}`];
    }): Promise<string>;
    (args: {
        method: "net_listening";
        params?: undefined;
    }): Promise<boolean>;
    (args: {
        method: "net_peerCount";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "net_version";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_blockNumber";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_call";
        params: [request: Partial<viem.RpcTransactionRequest>, block?: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier | undefined];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_chainId";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_coinbase";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_estimateGas";
        params: [parameters: viem.RpcTransactionRequest, block?: `0x${string}` | viem.BlockTag | undefined];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_feeHistory";
        params: [blockCount: `0x${string}`, newestBlock: `0x${string}` | viem.BlockTag, rewardPercentiles: number[] | undefined];
    }): Promise<viem.RpcFeeHistory>;
    (args: {
        method: "eth_gasPrice";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getBalance";
        params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getBlockByHash";
        params: [hash: `0x${string}`, includeTransactionObjects: boolean];
    }): Promise<viem.RpcBlock | null>;
    (args: {
        method: "eth_getBlockByNumber";
        params: [block: `0x${string}` | viem.BlockTag, includeTransactionObjects: boolean];
    }): Promise<viem.RpcBlock | null>;
    (args: {
        method: "eth_getBlockTransactionCountByHash";
        params: [hash: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getBlockTransactionCountByNumber";
        params: [block: `0x${string}` | viem.BlockTag];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getCode";
        params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getFilterChanges";
        params: [filterId: `0x${string}`];
    }): Promise<`0x${string}`[] | viem.RpcLog[]>;
    (args: {
        method: "eth_getFilterLogs";
        params: [filterId: `0x${string}`];
    }): Promise<viem.RpcLog[]>;
    (args: {
        method: "eth_getLogs";
        params: [parameters: {
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: viem_dist_types_types_misc.LogTopic[] | undefined;
        } & ({
            fromBlock?: `0x${string}` | viem.BlockTag | undefined;
            toBlock?: `0x${string}` | viem.BlockTag | undefined;
            blockHash?: undefined;
        } | {
            fromBlock?: undefined;
            toBlock?: undefined;
            blockHash?: `0x${string}` | undefined;
        })];
    }): Promise<viem.RpcLog[]>;
    (args: {
        method: "eth_getStorageAt";
        params: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getTransactionByBlockHashAndIndex";
        params: [hash: `0x${string}`, index: `0x${string}`];
    }): Promise<viem.RpcTransaction | null>;
    (args: {
        method: "eth_getTransactionByBlockNumberAndIndex";
        params: [block: `0x${string}` | viem.BlockTag, index: `0x${string}`];
    }): Promise<viem.RpcTransaction | null>;
    (args: {
        method: "eth_getTransactionByHash";
        params: [hash: `0x${string}`];
    }): Promise<viem.RpcTransaction | null>;
    (args: {
        method: "eth_getTransactionCount";
        params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getTransactionReceipt";
        params: [hash: `0x${string}`];
    }): Promise<viem.RpcTransactionReceipt | null>;
    (args: {
        method: "eth_getUncleByBlockHashAndIndex";
        params: [hash: `0x${string}`, index: `0x${string}`];
    }): Promise<viem.RpcUncle | null>;
    (args: {
        method: "eth_getUncleByBlockNumberAndIndex";
        params: [block: `0x${string}` | viem.BlockTag, index: `0x${string}`];
    }): Promise<viem.RpcUncle | null>;
    (args: {
        method: "eth_getUncleCountByBlockHash";
        params: [hash: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_getUncleCountByBlockNumber";
        params: [block: `0x${string}` | viem.BlockTag];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_newBlockFilter";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_newFilter";
        params: [filter: {
            fromBlock?: `0x${string}` | viem.BlockTag | undefined;
            toBlock?: `0x${string}` | viem.BlockTag | undefined;
            address?: `0x${string}` | `0x${string}`[] | undefined;
            topics?: viem_dist_types_types_misc.LogTopic[] | undefined;
        }];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_newPendingTransactionFilter";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_protocolVersion";
        params?: undefined;
    }): Promise<string>;
    (args: {
        method: "eth_sendRawTransaction";
        params: [signedTransaction: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_uninstallFilter";
        params: [filterId: `0x${string}`];
    }): Promise<boolean>;
} & {
    (args: {
        method: "eth_sendTransaction";
        params: [request: viem.RpcTransactionRequest];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_sign";
        params: [address: `0x${string}`, data: `0x${string}`];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_signTransaction";
        params: [request: viem.RpcTransactionRequest];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_signTypedData_v4";
        params: [address: `0x${string}`, message: string];
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_syncing";
        params?: undefined;
    }): Promise<false | viem_dist_types_types_eip1193.NetworkSync>;
    (args: {
        method: "personal_sign";
        params: [data: `0x${string}`, address: `0x${string}`];
    }): Promise<`0x${string}`>;
} & {
    (args: {
        method: "eth_accounts";
        params?: undefined;
    }): Promise<`0x${string}`[]>;
    (args: {
        method: "eth_chainId";
        params?: undefined;
    }): Promise<`0x${string}`>;
    (args: {
        method: "eth_requestAccounts";
        params?: undefined;
    }): Promise<`0x${string}`[]>;
    (args: {
        method: "wallet_requestPermissions";
        params: [permissions: {
            eth_accounts: Record<string, any>;
        }];
    }): Promise<viem_dist_types_types_eip1193.WalletPermission[]>;
    (args: {
        method: "wallet_getPermissions";
        params?: undefined;
    }): Promise<viem_dist_types_types_eip1193.WalletPermission[]>;
    (args: {
        method: "wallet_addEthereumChain";
        params: [chain: viem_dist_types_types_eip1193.Chain];
    }): Promise<null>;
    (args: {
        method: "wallet_switchEthereumChain";
        params: [chain: {
            chainId: string;
        }];
    }): Promise<null>;
    (args: {
        method: "wallet_watchAsset";
        params: viem_dist_types_types_eip1193.WatchAssetParams;
    }): Promise<boolean>;
}>, _wagmi_core.Chain>>;

type UseInfiniteQueryResult<TData, TError> = Pick<InfiniteQueryObserverResult<TData, TError>, 'data' | 'error' | 'fetchNextPage' | 'fetchStatus' | 'hasNextPage' | 'isError' | 'isFetched' | 'isFetchedAfterMount' | 'isFetching' | 'isFetchingNextPage' | 'isLoading' | 'isRefetching' | 'isSuccess' | 'refetch'> & {
    isIdle: boolean;
    status: 'idle' | 'loading' | 'success' | 'error';
    internal: Pick<InfiniteQueryObserverResult, 'dataUpdatedAt' | 'errorUpdatedAt' | 'failureCount' | 'isLoadingError' | 'isPaused' | 'isPlaceholderData' | 'isPreviousData' | 'isRefetchError' | 'isStale' | 'remove'>;
};
declare function useInfiniteQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>): UseInfiniteQueryResult<TData, TError>;
declare function useInfiniteQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>, 'queryKey'>): UseInfiniteQueryResult<TData, TError>;
declare function useInfiniteQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>, 'queryKey' | 'queryFn'>): UseInfiniteQueryResult<TData, TError>;

declare function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(options: UseMutationOptions<TData, TError, TVariables, TContext>): UseMutationResult<TData, TError, TVariables, TContext>;
declare function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(mutationFn: MutationFunction<TData, TVariables>, options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>): UseMutationResult<TData, TError, TVariables, TContext>;
declare function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(mutationKey: MutationKey, options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationKey'>): UseMutationResult<TData, TError, TVariables, TContext>;
declare function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(mutationKey: MutationKey, mutationFn?: MutationFunction<TData, TVariables>, options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<TData, TError, TVariables, TContext>;

type UseQueryResult<TData, TError> = Pick<QueryObserverResult<TData, TError>, 'data' | 'error' | 'fetchStatus' | 'isError' | 'isFetched' | 'isFetchedAfterMount' | 'isFetching' | 'isLoading' | 'isRefetching' | 'isSuccess' | 'refetch'> & {
    isIdle: boolean;
    status: 'idle' | 'loading' | 'success' | 'error';
    internal: Pick<QueryObserverResult, 'dataUpdatedAt' | 'errorUpdatedAt' | 'failureCount' | 'isLoadingError' | 'isPaused' | 'isPlaceholderData' | 'isPreviousData' | 'isRefetchError' | 'isStale' | 'remove'>;
};
type DefinedUseQueryResult<TData = unknown, TError = unknown> = Omit<UseQueryResult<TData, TError>, 'data'> & {
    data: TData;
};
declare function useQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'initialData'> & {
    initialData?: () => undefined;
}): UseQueryResult<TData, TError>;
declare function useQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'initialData'> & {
    initialData: TQueryFnData | (() => TQueryFnData);
}): DefinedUseQueryResult<TData, TError>;
declare function useQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn' | 'initialData'> & {
    initialData?: () => undefined;
}): UseQueryResult<TData, TError>;
declare function useQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn' | 'initialData'> & {
    initialData: TQueryFnData | (() => TQueryFnData);
}): DefinedUseQueryResult<TData, TError>;

declare const useQueryClient: () => _tanstack_react_query.QueryClient;

type UseChainIdArgs = {
    chainId?: number;
};
declare function useChainId({ chainId }?: UseChainIdArgs): number;

/**
 * Makes {@link TKeys} optional in {@link TType} while preserving type inference.
 */
type PartialBy<TType, TKeys extends keyof TType> = Partial<Pick<TType, TKeys>> & Omit<TType, TKeys>;
type DeepPartial<T, MaxDepth extends number, Depth extends ReadonlyArray<number> = []> = Depth['length'] extends MaxDepth ? T : T extends object ? {
    [P in keyof T]?: DeepPartial<T[P], MaxDepth, [...Depth, 1]>;
} : T;
type QueryConfig<TData, TError, TSelectData = TData> = Pick<UseQueryOptions<TData, TError, TSelectData>, 'cacheTime' | 'enabled' | 'isDataEqual' | 'staleTime' | 'structuralSharing' | 'suspense' | 'onError' | 'onSettled' | 'onSuccess'> & {
    /** Scope the cache to a given context. */
    scopeKey?: string;
};
type QueryConfigWithSelect<TData, TError, TSelectData = TData> = Pick<UseQueryOptions<TData, TError, TSelectData>, 'cacheTime' | 'enabled' | 'isDataEqual' | 'select' | 'staleTime' | 'structuralSharing' | 'suspense' | 'onError' | 'onSettled' | 'onSuccess'> & {
    /** Scope the cache to a given context. */
    scopeKey?: string;
};
type InfiniteQueryConfig<TData, TError, TSelectData = TData> = Pick<UseInfiniteQueryOptions<TData, TError, TSelectData>, 'cacheTime' | 'enabled' | 'getNextPageParam' | 'isDataEqual' | 'keepPreviousData' | 'select' | 'staleTime' | 'structuralSharing' | 'suspense' | 'onError' | 'onSettled' | 'onSuccess'> & {
    /** Scope the cache to a given context. */
    scopeKey?: string;
};
type MutationConfig<Data, Error, Variables = void> = {
    /** Function fires if mutation encounters error */
    onError?: UseMutationOptions<Data, Error, Variables>['onError'];
    /**
     * Function fires before mutation function and is passed same variables mutation function would receive.
     * Value returned from this function will be passed to both onError and onSettled functions in event of a mutation failure.
     */
    onMutate?: UseMutationOptions<Data, Error, Variables>['onMutate'];
    /** Function fires when mutation is either successfully fetched or encounters error */
    onSettled?: UseMutationOptions<Data, Error, Variables>['onSettled'];
    /** Function fires when mutation is successful and will be passed the mutation's result */
    onSuccess?: UseMutationOptions<Data, Error, Variables>['onSuccess'];
};

type UseBalanceArgs = Partial<FetchBalanceArgs> & {
    /** Subscribe to changes */
    watch?: boolean;
};
type UseBalanceConfig = QueryConfig<FetchBalanceResult, Error>;
declare function useBalance({ address, cacheTime, chainId: chainId_, enabled, formatUnits, scopeKey, staleTime, suspense, token, watch, onError, onSettled, onSuccess, }?: UseBalanceArgs & UseBalanceConfig): UseQueryResult<FetchBalanceResult, Error>;

type UseConnectArgs = Partial<ConnectArgs>;
type UseConnectConfig = MutationConfig<ConnectResult, Error, ConnectArgs>;
declare function useConnect({ chainId, connector, onError, onMutate, onSettled, onSuccess, }?: UseConnectArgs & UseConnectConfig): {
    readonly connect: (args?: Partial<ConnectArgs>) => void;
    readonly connectAsync: (args?: Partial<ConnectArgs>) => Promise<ConnectResult<_wagmi_core.PublicClient<viem.Transport<string, Record<string, any>, {
        (args: {
            method: "web3_clientVersion";
            params?: undefined;
        }): Promise<string>;
        (args: {
            method: "web3_sha3";
            params: [data: `0x${string}`];
        }): Promise<string>;
        (args: {
            method: "net_listening";
            params?: undefined;
        }): Promise<boolean>;
        (args: {
            method: "net_peerCount";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "net_version";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_blockNumber";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_call";
            params: [request: Partial<viem.RpcTransactionRequest>, block?: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier | undefined];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_chainId";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_coinbase";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_estimateGas";
            params: [parameters: viem.RpcTransactionRequest, block?: `0x${string}` | viem.BlockTag | undefined];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_feeHistory";
            params: [blockCount: `0x${string}`, newestBlock: `0x${string}` | viem.BlockTag, rewardPercentiles: number[] | undefined];
        }): Promise<viem.RpcFeeHistory>;
        (args: {
            method: "eth_gasPrice";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getBalance";
            params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getBlockByHash";
            params: [hash: `0x${string}`, includeTransactionObjects: boolean];
        }): Promise<viem.RpcBlock | null>;
        (args: {
            method: "eth_getBlockByNumber";
            params: [block: `0x${string}` | viem.BlockTag, includeTransactionObjects: boolean];
        }): Promise<viem.RpcBlock | null>;
        (args: {
            method: "eth_getBlockTransactionCountByHash";
            params: [hash: `0x${string}`];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getBlockTransactionCountByNumber";
            params: [block: `0x${string}` | viem.BlockTag];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getCode";
            params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getFilterChanges";
            params: [filterId: `0x${string}`];
        }): Promise<`0x${string}`[] | viem.RpcLog[]>;
        (args: {
            method: "eth_getFilterLogs";
            params: [filterId: `0x${string}`];
        }): Promise<viem.RpcLog[]>;
        (args: {
            method: "eth_getLogs";
            params: [parameters: {
                address?: `0x${string}` | `0x${string}`[] | undefined;
                topics?: viem_dist_types_types_misc.LogTopic[] | undefined;
            } & ({
                fromBlock?: `0x${string}` | viem.BlockTag | undefined;
                toBlock?: `0x${string}` | viem.BlockTag | undefined;
                blockHash?: undefined;
            } | {
                fromBlock?: undefined;
                toBlock?: undefined;
                blockHash?: `0x${string}` | undefined;
            })];
        }): Promise<viem.RpcLog[]>;
        (args: {
            method: "eth_getStorageAt";
            params: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getTransactionByBlockHashAndIndex";
            params: [hash: `0x${string}`, index: `0x${string}`];
        }): Promise<viem.RpcTransaction | null>;
        (args: {
            method: "eth_getTransactionByBlockNumberAndIndex";
            params: [block: `0x${string}` | viem.BlockTag, index: `0x${string}`];
        }): Promise<viem.RpcTransaction | null>;
        (args: {
            method: "eth_getTransactionByHash";
            params: [hash: `0x${string}`];
        }): Promise<viem.RpcTransaction | null>;
        (args: {
            method: "eth_getTransactionCount";
            params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getTransactionReceipt";
            params: [hash: `0x${string}`];
        }): Promise<viem.RpcTransactionReceipt | null>;
        (args: {
            method: "eth_getUncleByBlockHashAndIndex";
            params: [hash: `0x${string}`, index: `0x${string}`];
        }): Promise<viem.RpcUncle | null>;
        (args: {
            method: "eth_getUncleByBlockNumberAndIndex";
            params: [block: `0x${string}` | viem.BlockTag, index: `0x${string}`];
        }): Promise<viem.RpcUncle | null>;
        (args: {
            method: "eth_getUncleCountByBlockHash";
            params: [hash: `0x${string}`];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getUncleCountByBlockNumber";
            params: [block: `0x${string}` | viem.BlockTag];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_newBlockFilter";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_newFilter";
            params: [filter: {
                fromBlock?: `0x${string}` | viem.BlockTag | undefined;
                toBlock?: `0x${string}` | viem.BlockTag | undefined;
                address?: `0x${string}` | `0x${string}`[] | undefined;
                topics?: viem_dist_types_types_misc.LogTopic[] | undefined;
            }];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_newPendingTransactionFilter";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_protocolVersion";
            params?: undefined;
        }): Promise<string>;
        (args: {
            method: "eth_sendRawTransaction";
            params: [signedTransaction: `0x${string}`];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_uninstallFilter";
            params: [filterId: `0x${string}`];
        }): Promise<boolean>;
    } & {
        (args: {
            method: "eth_sendTransaction";
            params: [request: viem.RpcTransactionRequest];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_sign";
            params: [address: `0x${string}`, data: `0x${string}`];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_signTransaction";
            params: [request: viem.RpcTransactionRequest];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_signTypedData_v4";
            params: [address: `0x${string}`, message: string];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_syncing";
            params?: undefined;
        }): Promise<false | viem_dist_types_types_eip1193.NetworkSync>;
        (args: {
            method: "personal_sign";
            params: [data: `0x${string}`, address: `0x${string}`];
        }): Promise<`0x${string}`>;
    } & {
        (args: {
            method: "eth_accounts";
            params?: undefined;
        }): Promise<`0x${string}`[]>;
        (args: {
            method: "eth_chainId";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_requestAccounts";
            params?: undefined;
        }): Promise<`0x${string}`[]>;
        (args: {
            method: "wallet_requestPermissions";
            params: [permissions: {
                eth_accounts: Record<string, any>;
            }];
        }): Promise<viem_dist_types_types_eip1193.WalletPermission[]>;
        (args: {
            method: "wallet_getPermissions";
            params?: undefined;
        }): Promise<viem_dist_types_types_eip1193.WalletPermission[]>;
        (args: {
            method: "wallet_addEthereumChain";
            params: [chain: viem_dist_types_types_eip1193.Chain];
        }): Promise<null>;
        (args: {
            method: "wallet_switchEthereumChain";
            params: [chain: {
                chainId: string;
            }];
        }): Promise<null>;
        (args: {
            method: "wallet_watchAsset";
            params: viem_dist_types_types_eip1193.WatchAssetParams;
        }): Promise<boolean>;
    }>, _wagmi_core.Chain>>>;
    readonly connectors: _wagmi_core.Connector<any, any>[];
    readonly data: ConnectResult<_wagmi_core.PublicClient<viem.Transport<string, Record<string, any>, {
        (args: {
            method: "web3_clientVersion";
            params?: undefined;
        }): Promise<string>;
        (args: {
            method: "web3_sha3";
            params: [data: `0x${string}`];
        }): Promise<string>;
        (args: {
            method: "net_listening";
            params?: undefined;
        }): Promise<boolean>;
        (args: {
            method: "net_peerCount";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "net_version";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_blockNumber";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_call";
            params: [request: Partial<viem.RpcTransactionRequest>, block?: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier | undefined];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_chainId";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_coinbase";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_estimateGas";
            params: [parameters: viem.RpcTransactionRequest, block?: `0x${string}` | viem.BlockTag | undefined];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_feeHistory";
            params: [blockCount: `0x${string}`, newestBlock: `0x${string}` | viem.BlockTag, rewardPercentiles: number[] | undefined];
        }): Promise<viem.RpcFeeHistory>;
        (args: {
            method: "eth_gasPrice";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getBalance";
            params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getBlockByHash";
            params: [hash: `0x${string}`, includeTransactionObjects: boolean];
        }): Promise<viem.RpcBlock | null>;
        (args: {
            method: "eth_getBlockByNumber";
            params: [block: `0x${string}` | viem.BlockTag, includeTransactionObjects: boolean];
        }): Promise<viem.RpcBlock | null>;
        (args: {
            method: "eth_getBlockTransactionCountByHash";
            params: [hash: `0x${string}`];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getBlockTransactionCountByNumber";
            params: [block: `0x${string}` | viem.BlockTag];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getCode";
            params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getFilterChanges";
            params: [filterId: `0x${string}`];
        }): Promise<`0x${string}`[] | viem.RpcLog[]>;
        (args: {
            method: "eth_getFilterLogs";
            params: [filterId: `0x${string}`];
        }): Promise<viem.RpcLog[]>;
        (args: {
            method: "eth_getLogs";
            params: [parameters: {
                address?: `0x${string}` | `0x${string}`[] | undefined;
                topics?: viem_dist_types_types_misc.LogTopic[] | undefined;
            } & ({
                fromBlock?: `0x${string}` | viem.BlockTag | undefined;
                toBlock?: `0x${string}` | viem.BlockTag | undefined;
                blockHash?: undefined;
            } | {
                fromBlock?: undefined;
                toBlock?: undefined;
                blockHash?: `0x${string}` | undefined;
            })];
        }): Promise<viem.RpcLog[]>;
        (args: {
            method: "eth_getStorageAt";
            params: [address: `0x${string}`, index: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getTransactionByBlockHashAndIndex";
            params: [hash: `0x${string}`, index: `0x${string}`];
        }): Promise<viem.RpcTransaction | null>;
        (args: {
            method: "eth_getTransactionByBlockNumberAndIndex";
            params: [block: `0x${string}` | viem.BlockTag, index: `0x${string}`];
        }): Promise<viem.RpcTransaction | null>;
        (args: {
            method: "eth_getTransactionByHash";
            params: [hash: `0x${string}`];
        }): Promise<viem.RpcTransaction | null>;
        (args: {
            method: "eth_getTransactionCount";
            params: [address: `0x${string}`, block: `0x${string}` | viem.BlockTag | viem.RpcBlockIdentifier];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getTransactionReceipt";
            params: [hash: `0x${string}`];
        }): Promise<viem.RpcTransactionReceipt | null>;
        (args: {
            method: "eth_getUncleByBlockHashAndIndex";
            params: [hash: `0x${string}`, index: `0x${string}`];
        }): Promise<viem.RpcUncle | null>;
        (args: {
            method: "eth_getUncleByBlockNumberAndIndex";
            params: [block: `0x${string}` | viem.BlockTag, index: `0x${string}`];
        }): Promise<viem.RpcUncle | null>;
        (args: {
            method: "eth_getUncleCountByBlockHash";
            params: [hash: `0x${string}`];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_getUncleCountByBlockNumber";
            params: [block: `0x${string}` | viem.BlockTag];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_newBlockFilter";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_newFilter";
            params: [filter: {
                fromBlock?: `0x${string}` | viem.BlockTag | undefined;
                toBlock?: `0x${string}` | viem.BlockTag | undefined;
                address?: `0x${string}` | `0x${string}`[] | undefined;
                topics?: viem_dist_types_types_misc.LogTopic[] | undefined;
            }];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_newPendingTransactionFilter";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_protocolVersion";
            params?: undefined;
        }): Promise<string>;
        (args: {
            method: "eth_sendRawTransaction";
            params: [signedTransaction: `0x${string}`];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_uninstallFilter";
            params: [filterId: `0x${string}`];
        }): Promise<boolean>;
    } & {
        (args: {
            method: "eth_sendTransaction";
            params: [request: viem.RpcTransactionRequest];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_sign";
            params: [address: `0x${string}`, data: `0x${string}`];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_signTransaction";
            params: [request: viem.RpcTransactionRequest];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_signTypedData_v4";
            params: [address: `0x${string}`, message: string];
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_syncing";
            params?: undefined;
        }): Promise<false | viem_dist_types_types_eip1193.NetworkSync>;
        (args: {
            method: "personal_sign";
            params: [data: `0x${string}`, address: `0x${string}`];
        }): Promise<`0x${string}`>;
    } & {
        (args: {
            method: "eth_accounts";
            params?: undefined;
        }): Promise<`0x${string}`[]>;
        (args: {
            method: "eth_chainId";
            params?: undefined;
        }): Promise<`0x${string}`>;
        (args: {
            method: "eth_requestAccounts";
            params?: undefined;
        }): Promise<`0x${string}`[]>;
        (args: {
            method: "wallet_requestPermissions";
            params: [permissions: {
                eth_accounts: Record<string, any>;
            }];
        }): Promise<viem_dist_types_types_eip1193.WalletPermission[]>;
        (args: {
            method: "wallet_getPermissions";
            params?: undefined;
        }): Promise<viem_dist_types_types_eip1193.WalletPermission[]>;
        (args: {
            method: "wallet_addEthereumChain";
            params: [chain: viem_dist_types_types_eip1193.Chain];
        }): Promise<null>;
        (args: {
            method: "wallet_switchEthereumChain";
            params: [chain: {
                chainId: string;
            }];
        }): Promise<null>;
        (args: {
            method: "wallet_watchAsset";
            params: viem_dist_types_types_eip1193.WatchAssetParams;
        }): Promise<boolean>;
    }>, _wagmi_core.Chain>> | undefined;
    readonly error: Error | null;
    readonly isError: boolean;
    readonly isIdle: boolean;
    readonly isLoading: boolean;
    readonly isSuccess: boolean;
    readonly pendingConnector: _wagmi_core.Connector<any, any> | undefined;
    readonly reset: () => void;
    readonly status: "error" | "success" | "loading" | "idle";
    readonly variables: ConnectArgs | undefined;
};

type UseDisconnectConfig = {
    /** Function to invoke when an error is thrown while connecting. */
    onError?: (error: Error, context: unknown) => void | Promise<unknown>;
    /**
     * Function fires before mutation function and is passed same variables mutation function would receive.
     * Value returned from this function will be passed to both onError and onSettled functions in event of a mutation failure.
     */
    onMutate?: () => unknown;
    /** Function to invoke when connect is settled (either successfully connected, or an error has thrown). */
    onSettled?: (error: Error | null, context: unknown) => void | Promise<unknown>;
    /** Function fires when mutation is successful and will be passed the mutation's result */
    onSuccess?: (context: unknown) => void | Promise<unknown>;
};
declare function useDisconnect({ onError, onMutate, onSettled, onSuccess, }?: UseDisconnectConfig): {
    readonly disconnect: _tanstack_react_query.UseMutateFunction<void, Error, void, unknown>;
    readonly disconnectAsync: _tanstack_react_query.UseMutateAsyncFunction<void, Error, void, unknown>;
    readonly error: Error | null;
    readonly isError: boolean;
    readonly isIdle: boolean;
    readonly isLoading: boolean;
    readonly isSuccess: boolean;
    readonly reset: () => void;
    readonly status: "error" | "success" | "loading" | "idle";
};

declare function useNetwork(): _wagmi_core.GetNetworkResult;

type UseSignMessageArgs = Partial<SignMessageArgs>;
type UseSignMessageConfig = MutationConfig<SignMessageResult, Error, SignMessageArgs>;
declare function useSignMessage({ message, onError, onMutate, onSettled, onSuccess, }?: UseSignMessageArgs & UseSignMessageConfig): {
    data: `0x${string}` | undefined;
    error: Error | null;
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    reset: () => void;
    signMessage: (args?: SignMessageArgs) => void;
    signMessageAsync: (args?: SignMessageArgs) => Promise<`0x${string}`>;
    status: "error" | "success" | "loading" | "idle";
    variables: SignMessageArgs | undefined;
};

type UseSignTypedDataArgs<TTypedData extends TypedData | {
    [key: string]: unknown;
} = TypedData, TPrimaryType extends string = string> = Partial<Never<SignTypedDataArgs<TTypedData, TPrimaryType>>> | SignTypedDataArgs<TTypedData, TPrimaryType>;
type UseSignTypedDataConfig<TTypedData extends TypedData | {
    [key: string]: unknown;
} = TypedData, TPrimaryType extends string = string> = MutationConfig<SignTypedDataResult, Error, SignTypedDataArgs<TTypedData>> & UseSignTypedDataArgs<TTypedData, TPrimaryType>;
declare function useSignTypedData<TTypedData extends TypedData, TPrimaryType extends string>({ domain, types, message, primaryType, onError, onMutate, onSettled, onSuccess, }?: UseSignTypedDataConfig<TTypedData, TPrimaryType>): {
    data: `0x${string}` | undefined;
    error: Error | null;
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    reset: () => void;
    signTypedData: <TTypedDataMutate extends {
        [x: string]: readonly abitype_dist_abi_3a9c20c7.o[];
        [x: `string[${string}]`]: undefined;
        [x: `function[${string}]`]: undefined;
        [x: `address[${string}]`]: undefined;
        [x: `bool[${string}]`]: undefined;
        [x: `bytes[${string}]`]: undefined;
        [x: `bytes18[${string}]`]: undefined;
        [x: `bytes1[${string}]`]: undefined;
        [x: `bytes25[${string}]`]: undefined;
        [x: `bytes14[${string}]`]: undefined;
        [x: `bytes5[${string}]`]: undefined;
        [x: `bytes10[${string}]`]: undefined;
        [x: `bytes19[${string}]`]: undefined;
        [x: `bytes16[${string}]`]: undefined;
        [x: `bytes8[${string}]`]: undefined;
        [x: `bytes2[${string}]`]: undefined;
        [x: `bytes3[${string}]`]: undefined;
        [x: `bytes4[${string}]`]: undefined;
        [x: `bytes6[${string}]`]: undefined;
        [x: `bytes7[${string}]`]: undefined;
        [x: `bytes9[${string}]`]: undefined;
        [x: `bytes11[${string}]`]: undefined;
        [x: `bytes12[${string}]`]: undefined;
        [x: `bytes13[${string}]`]: undefined;
        [x: `bytes15[${string}]`]: undefined;
        [x: `bytes17[${string}]`]: undefined;
        [x: `bytes20[${string}]`]: undefined;
        [x: `bytes21[${string}]`]: undefined;
        [x: `bytes22[${string}]`]: undefined;
        [x: `bytes23[${string}]`]: undefined;
        [x: `bytes24[${string}]`]: undefined;
        [x: `bytes26[${string}]`]: undefined;
        [x: `bytes27[${string}]`]: undefined;
        [x: `bytes28[${string}]`]: undefined;
        [x: `bytes29[${string}]`]: undefined;
        [x: `bytes30[${string}]`]: undefined;
        [x: `bytes31[${string}]`]: undefined;
        [x: `bytes32[${string}]`]: undefined;
        [x: `int[${string}]`]: undefined;
        [x: `int56[${string}]`]: undefined;
        [x: `int248[${string}]`]: undefined;
        [x: `int16[${string}]`]: undefined;
        [x: `int8[${string}]`]: undefined;
        [x: `int40[${string}]`]: undefined;
        [x: `int24[${string}]`]: undefined;
        [x: `int32[${string}]`]: undefined;
        [x: `int48[${string}]`]: undefined;
        [x: `int64[${string}]`]: undefined;
        [x: `int72[${string}]`]: undefined;
        [x: `int80[${string}]`]: undefined;
        [x: `int88[${string}]`]: undefined;
        [x: `int96[${string}]`]: undefined;
        [x: `int104[${string}]`]: undefined;
        [x: `int112[${string}]`]: undefined;
        [x: `int120[${string}]`]: undefined;
        [x: `int128[${string}]`]: undefined;
        [x: `int136[${string}]`]: undefined;
        [x: `int144[${string}]`]: undefined;
        [x: `int152[${string}]`]: undefined;
        [x: `int160[${string}]`]: undefined;
        [x: `int168[${string}]`]: undefined;
        [x: `int176[${string}]`]: undefined;
        [x: `int184[${string}]`]: undefined;
        [x: `int192[${string}]`]: undefined;
        [x: `int200[${string}]`]: undefined;
        [x: `int208[${string}]`]: undefined;
        [x: `int216[${string}]`]: undefined;
        [x: `int224[${string}]`]: undefined;
        [x: `int232[${string}]`]: undefined;
        [x: `int240[${string}]`]: undefined;
        [x: `int256[${string}]`]: undefined;
        [x: `uint[${string}]`]: undefined;
        [x: `uint56[${string}]`]: undefined;
        [x: `uint248[${string}]`]: undefined;
        [x: `uint16[${string}]`]: undefined;
        [x: `uint8[${string}]`]: undefined;
        [x: `uint40[${string}]`]: undefined;
        [x: `uint24[${string}]`]: undefined;
        [x: `uint32[${string}]`]: undefined;
        [x: `uint48[${string}]`]: undefined;
        [x: `uint64[${string}]`]: undefined;
        [x: `uint72[${string}]`]: undefined;
        [x: `uint80[${string}]`]: undefined;
        [x: `uint88[${string}]`]: undefined;
        [x: `uint96[${string}]`]: undefined;
        [x: `uint104[${string}]`]: undefined;
        [x: `uint112[${string}]`]: undefined;
        [x: `uint120[${string}]`]: undefined;
        [x: `uint128[${string}]`]: undefined;
        [x: `uint136[${string}]`]: undefined;
        [x: `uint144[${string}]`]: undefined;
        [x: `uint152[${string}]`]: undefined;
        [x: `uint160[${string}]`]: undefined;
        [x: `uint168[${string}]`]: undefined;
        [x: `uint176[${string}]`]: undefined;
        [x: `uint184[${string}]`]: undefined;
        [x: `uint192[${string}]`]: undefined;
        [x: `uint200[${string}]`]: undefined;
        [x: `uint208[${string}]`]: undefined;
        [x: `uint216[${string}]`]: undefined;
        [x: `uint224[${string}]`]: undefined;
        [x: `uint232[${string}]`]: undefined;
        [x: `uint240[${string}]`]: undefined;
        [x: `uint256[${string}]`]: undefined;
        string?: undefined;
        address?: undefined;
        bool?: undefined;
        bytes?: undefined;
        bytes18?: undefined;
        bytes1?: undefined;
        bytes25?: undefined;
        bytes14?: undefined;
        bytes5?: undefined;
        bytes10?: undefined;
        bytes19?: undefined;
        bytes16?: undefined;
        bytes8?: undefined;
        bytes2?: undefined;
        bytes3?: undefined;
        bytes4?: undefined;
        bytes6?: undefined;
        bytes7?: undefined;
        bytes9?: undefined;
        bytes11?: undefined;
        bytes12?: undefined;
        bytes13?: undefined;
        bytes15?: undefined;
        bytes17?: undefined;
        bytes20?: undefined;
        bytes21?: undefined;
        bytes22?: undefined;
        bytes23?: undefined;
        bytes24?: undefined;
        bytes26?: undefined;
        bytes27?: undefined;
        bytes28?: undefined;
        bytes29?: undefined;
        bytes30?: undefined;
        bytes31?: undefined;
        bytes32?: undefined;
        int56?: undefined;
        int248?: undefined;
        int16?: undefined;
        int8?: undefined;
        int40?: undefined;
        int24?: undefined;
        int32?: undefined;
        int48?: undefined;
        int64?: undefined;
        int72?: undefined;
        int80?: undefined;
        int88?: undefined;
        int96?: undefined;
        int104?: undefined;
        int112?: undefined;
        int120?: undefined;
        int128?: undefined;
        int136?: undefined;
        int144?: undefined;
        int152?: undefined;
        int160?: undefined;
        int168?: undefined;
        int176?: undefined;
        int184?: undefined;
        int192?: undefined;
        int200?: undefined;
        int208?: undefined;
        int216?: undefined;
        int224?: undefined;
        int232?: undefined;
        int240?: undefined;
        int256?: undefined;
        uint56?: undefined;
        uint248?: undefined;
        uint16?: undefined;
        uint8?: undefined;
        uint40?: undefined;
        uint24?: undefined;
        uint32?: undefined;
        uint48?: undefined;
        uint64?: undefined;
        uint72?: undefined;
        uint80?: undefined;
        uint88?: undefined;
        uint96?: undefined;
        uint104?: undefined;
        uint112?: undefined;
        uint120?: undefined;
        uint128?: undefined;
        uint136?: undefined;
        uint144?: undefined;
        uint152?: undefined;
        uint160?: undefined;
        uint168?: undefined;
        uint176?: undefined;
        uint184?: undefined;
        uint192?: undefined;
        uint200?: undefined;
        uint208?: undefined;
        uint216?: undefined;
        uint224?: undefined;
        uint232?: undefined;
        uint240?: undefined;
        uint256?: undefined;
    } = TTypedData>(args?: UseSignTypedDataArgs<TTypedDataMutate, string> | undefined) => void;
    signTypedDataAsync: <TTypedDataMutate_1 extends {
        [x: string]: readonly abitype_dist_abi_3a9c20c7.o[];
        [x: `string[${string}]`]: undefined;
        [x: `function[${string}]`]: undefined;
        [x: `address[${string}]`]: undefined;
        [x: `bool[${string}]`]: undefined;
        [x: `bytes[${string}]`]: undefined;
        [x: `bytes18[${string}]`]: undefined;
        [x: `bytes1[${string}]`]: undefined;
        [x: `bytes25[${string}]`]: undefined;
        [x: `bytes14[${string}]`]: undefined;
        [x: `bytes5[${string}]`]: undefined;
        [x: `bytes10[${string}]`]: undefined;
        [x: `bytes19[${string}]`]: undefined;
        [x: `bytes16[${string}]`]: undefined;
        [x: `bytes8[${string}]`]: undefined;
        [x: `bytes2[${string}]`]: undefined;
        [x: `bytes3[${string}]`]: undefined;
        [x: `bytes4[${string}]`]: undefined;
        [x: `bytes6[${string}]`]: undefined;
        [x: `bytes7[${string}]`]: undefined;
        [x: `bytes9[${string}]`]: undefined;
        [x: `bytes11[${string}]`]: undefined;
        [x: `bytes12[${string}]`]: undefined;
        [x: `bytes13[${string}]`]: undefined;
        [x: `bytes15[${string}]`]: undefined;
        [x: `bytes17[${string}]`]: undefined;
        [x: `bytes20[${string}]`]: undefined;
        [x: `bytes21[${string}]`]: undefined;
        [x: `bytes22[${string}]`]: undefined;
        [x: `bytes23[${string}]`]: undefined;
        [x: `bytes24[${string}]`]: undefined;
        [x: `bytes26[${string}]`]: undefined;
        [x: `bytes27[${string}]`]: undefined;
        [x: `bytes28[${string}]`]: undefined;
        [x: `bytes29[${string}]`]: undefined;
        [x: `bytes30[${string}]`]: undefined;
        [x: `bytes31[${string}]`]: undefined;
        [x: `bytes32[${string}]`]: undefined;
        [x: `int[${string}]`]: undefined;
        [x: `int56[${string}]`]: undefined;
        [x: `int248[${string}]`]: undefined;
        [x: `int16[${string}]`]: undefined;
        [x: `int8[${string}]`]: undefined;
        [x: `int40[${string}]`]: undefined;
        [x: `int24[${string}]`]: undefined;
        [x: `int32[${string}]`]: undefined;
        [x: `int48[${string}]`]: undefined;
        [x: `int64[${string}]`]: undefined;
        [x: `int72[${string}]`]: undefined;
        [x: `int80[${string}]`]: undefined;
        [x: `int88[${string}]`]: undefined;
        [x: `int96[${string}]`]: undefined;
        [x: `int104[${string}]`]: undefined;
        [x: `int112[${string}]`]: undefined;
        [x: `int120[${string}]`]: undefined;
        [x: `int128[${string}]`]: undefined;
        [x: `int136[${string}]`]: undefined;
        [x: `int144[${string}]`]: undefined;
        [x: `int152[${string}]`]: undefined;
        [x: `int160[${string}]`]: undefined;
        [x: `int168[${string}]`]: undefined;
        [x: `int176[${string}]`]: undefined;
        [x: `int184[${string}]`]: undefined;
        [x: `int192[${string}]`]: undefined;
        [x: `int200[${string}]`]: undefined;
        [x: `int208[${string}]`]: undefined;
        [x: `int216[${string}]`]: undefined;
        [x: `int224[${string}]`]: undefined;
        [x: `int232[${string}]`]: undefined;
        [x: `int240[${string}]`]: undefined;
        [x: `int256[${string}]`]: undefined;
        [x: `uint[${string}]`]: undefined;
        [x: `uint56[${string}]`]: undefined;
        [x: `uint248[${string}]`]: undefined;
        [x: `uint16[${string}]`]: undefined;
        [x: `uint8[${string}]`]: undefined;
        [x: `uint40[${string}]`]: undefined;
        [x: `uint24[${string}]`]: undefined;
        [x: `uint32[${string}]`]: undefined;
        [x: `uint48[${string}]`]: undefined;
        [x: `uint64[${string}]`]: undefined;
        [x: `uint72[${string}]`]: undefined;
        [x: `uint80[${string}]`]: undefined;
        [x: `uint88[${string}]`]: undefined;
        [x: `uint96[${string}]`]: undefined;
        [x: `uint104[${string}]`]: undefined;
        [x: `uint112[${string}]`]: undefined;
        [x: `uint120[${string}]`]: undefined;
        [x: `uint128[${string}]`]: undefined;
        [x: `uint136[${string}]`]: undefined;
        [x: `uint144[${string}]`]: undefined;
        [x: `uint152[${string}]`]: undefined;
        [x: `uint160[${string}]`]: undefined;
        [x: `uint168[${string}]`]: undefined;
        [x: `uint176[${string}]`]: undefined;
        [x: `uint184[${string}]`]: undefined;
        [x: `uint192[${string}]`]: undefined;
        [x: `uint200[${string}]`]: undefined;
        [x: `uint208[${string}]`]: undefined;
        [x: `uint216[${string}]`]: undefined;
        [x: `uint224[${string}]`]: undefined;
        [x: `uint232[${string}]`]: undefined;
        [x: `uint240[${string}]`]: undefined;
        [x: `uint256[${string}]`]: undefined;
        string?: undefined;
        address?: undefined;
        bool?: undefined;
        bytes?: undefined;
        bytes18?: undefined;
        bytes1?: undefined;
        bytes25?: undefined;
        bytes14?: undefined;
        bytes5?: undefined;
        bytes10?: undefined;
        bytes19?: undefined;
        bytes16?: undefined;
        bytes8?: undefined;
        bytes2?: undefined;
        bytes3?: undefined;
        bytes4?: undefined;
        bytes6?: undefined;
        bytes7?: undefined;
        bytes9?: undefined;
        bytes11?: undefined;
        bytes12?: undefined;
        bytes13?: undefined;
        bytes15?: undefined;
        bytes17?: undefined;
        bytes20?: undefined;
        bytes21?: undefined;
        bytes22?: undefined;
        bytes23?: undefined;
        bytes24?: undefined;
        bytes26?: undefined;
        bytes27?: undefined;
        bytes28?: undefined;
        bytes29?: undefined;
        bytes30?: undefined;
        bytes31?: undefined;
        bytes32?: undefined;
        int56?: undefined;
        int248?: undefined;
        int16?: undefined;
        int8?: undefined;
        int40?: undefined;
        int24?: undefined;
        int32?: undefined;
        int48?: undefined;
        int64?: undefined;
        int72?: undefined;
        int80?: undefined;
        int88?: undefined;
        int96?: undefined;
        int104?: undefined;
        int112?: undefined;
        int120?: undefined;
        int128?: undefined;
        int136?: undefined;
        int144?: undefined;
        int152?: undefined;
        int160?: undefined;
        int168?: undefined;
        int176?: undefined;
        int184?: undefined;
        int192?: undefined;
        int200?: undefined;
        int208?: undefined;
        int216?: undefined;
        int224?: undefined;
        int232?: undefined;
        int240?: undefined;
        int256?: undefined;
        uint56?: undefined;
        uint248?: undefined;
        uint16?: undefined;
        uint8?: undefined;
        uint40?: undefined;
        uint24?: undefined;
        uint32?: undefined;
        uint48?: undefined;
        uint64?: undefined;
        uint72?: undefined;
        uint80?: undefined;
        uint88?: undefined;
        uint96?: undefined;
        uint104?: undefined;
        uint112?: undefined;
        uint120?: undefined;
        uint128?: undefined;
        uint136?: undefined;
        uint144?: undefined;
        uint152?: undefined;
        uint160?: undefined;
        uint168?: undefined;
        uint176?: undefined;
        uint184?: undefined;
        uint192?: undefined;
        uint200?: undefined;
        uint208?: undefined;
        uint216?: undefined;
        uint224?: undefined;
        uint232?: undefined;
        uint240?: undefined;
        uint256?: undefined;
    } = TTypedData>(args?: UseSignTypedDataArgs<TTypedDataMutate_1, string> | undefined) => Promise<`0x${string}`>;
    status: "error" | "success" | "loading" | "idle";
    variables: SignTypedDataArgs<TTypedData, string> | undefined;
};

type UseSwitchNetworkArgs = Partial<SwitchNetworkArgs>;
type UseSwitchNetworkConfig = MutationConfig<SwitchNetworkResult, Error, SwitchNetworkArgs> & {
    throwForSwitchChainNotSupported?: boolean;
};
declare function useSwitchNetwork({ chainId, throwForSwitchChainNotSupported, onError, onMutate, onSettled, onSuccess, }?: UseSwitchNetworkArgs & UseSwitchNetworkConfig): {
    readonly chains: _wagmi_core.Chain[];
    readonly data: _wagmi_core.Chain | undefined;
    readonly error: Error | null;
    readonly isError: boolean;
    readonly isIdle: boolean;
    readonly isLoading: boolean;
    readonly isSuccess: boolean;
    readonly pendingChainId: number | undefined;
    readonly reset: () => void;
    readonly status: "error" | "success" | "loading" | "idle";
    readonly switchNetwork: ((chainId_?: SwitchNetworkArgs['chainId']) => void) | undefined;
    readonly switchNetworkAsync: ((chainId_?: SwitchNetworkArgs['chainId']) => Promise<_wagmi_core.Chain>) | undefined;
    readonly variables: SwitchNetworkArgs | undefined;
};

type UseContractEventConfig<TAbi extends Abi | readonly unknown[] = Abi, TEventName extends string = string> = PartialBy<WatchContractEventConfig<TAbi, TEventName>, 'abi' | 'address' | 'eventName'> & {
    listener: WatchContractEventCallback<TAbi, TEventName>;
};
declare function useContractEvent<TAbi extends Abi | readonly unknown[], TEventName extends string>({ address, chainId, abi, listener, eventName, }?: UseContractEventConfig<TAbi, TEventName>): (() => void) | undefined;

type UseContractInfiniteReadsConfig<TContracts extends ContractFunctionConfig[] = ContractFunctionConfig[], TAllowFailure extends boolean = true, TPageParam = unknown, TSelectData = ReadContractsResult<TContracts, TAllowFailure>> = Pick<ReadContractsConfig<TContracts, TAllowFailure>, 'allowFailure'> & {
    cacheKey: string;
    contracts(pageParam: TPageParam): Narrow<readonly [
        ...MulticallContracts<TContracts, {
            /** Chain id to use for Public Client. */
            chainId?: number;
        }>
    ]>;
} & InfiniteQueryConfig<ReadContractsResult<TContracts, TAllowFailure>, Error, TSelectData> & ({
    /** Block number to read against. */
    blockNumber?: ReadContractsConfig<TContracts>['blockNumber'];
    blockTag?: never;
    watch?: never;
} | {
    blockNumber?: never;
    /** Block tag to read against. */
    blockTag?: ReadContractsConfig<TContracts>['blockTag'];
    watch?: never;
} | {
    blockNumber?: never;
    blockTag?: never;
    /** Refresh on incoming blocks. */
    watch?: boolean;
});
declare function useContractInfiniteReads<TContracts extends ContractFunctionConfig[], TAllowFailure extends boolean = true, TPageParam = any, TSelectData = ReadContractsResult<TContracts, TAllowFailure>>({ allowFailure, blockNumber, blockTag, cacheKey, cacheTime, contracts, enabled: enabled_, getNextPageParam, isDataEqual, keepPreviousData, onError, onSettled, onSuccess, scopeKey, select, staleTime, structuralSharing, suspense, }: UseContractInfiniteReadsConfig<TContracts, TAllowFailure, TPageParam, TSelectData>): UseInfiniteQueryResult<TSelectData, Error>;
declare function paginatedIndexesConfig<TContracts extends ContractFunctionConfig[], TSelectData = ReadContractsResult<TContracts>>(fn: UseContractInfiniteReadsConfig<TContracts>['contracts'], { perPage, start, direction, }: {
    perPage: number;
    start: number;
    direction: 'increment' | 'decrement';
}): {
    contracts: UseContractInfiniteReadsConfig<TContracts>['contracts'];
    getNextPageParam: InfiniteQueryConfig<unknown[], Error, TSelectData>['getNextPageParam'];
};

type UseContractReadConfig<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string, TSelectData = ReadContractResult<TAbi, TFunctionName>> = PartialBy<ReadContractConfig<TAbi, TFunctionName>, 'abi' | 'address' | 'args' | 'blockNumber' | 'blockTag' | 'functionName'> & QueryConfigWithSelect<ReadContractResult<TAbi, TFunctionName>, Error, TSelectData> & {
    /** If set to `true`, the cache will depend on the block number */
    cacheOnBlock?: boolean;
} & ({
    /** Block number to read against. */
    blockNumber?: ReadContractConfig['blockNumber'];
    blockTag?: never;
    watch?: never;
} | {
    blockNumber?: never;
    /** Block tag to read against. */
    blockTag?: ReadContractConfig['blockTag'];
    watch?: never;
} | {
    blockNumber?: never;
    blockTag?: never;
    /** Refresh on incoming blocks. */
    watch?: boolean;
});
declare function useContractRead<TAbi extends Abi | readonly unknown[], TFunctionName extends string, TSelectData = ReadContractResult<TAbi, TFunctionName>>({ abi, address, args, blockNumber: blockNumberOverride, blockTag, cacheOnBlock, cacheTime, chainId: chainId_, enabled: enabled_, functionName, isDataEqual, onError, onSettled, onSuccess, scopeKey, select, staleTime, structuralSharing, suspense, watch, }?: UseContractReadConfig<TAbi, TFunctionName, TSelectData>): UseQueryResult<TSelectData, Error>;

type UseContractReadsConfig<TContracts extends ContractFunctionConfig[], TAllowFailure extends boolean = true, TSelectData = ReadContractsResult<TContracts, TAllowFailure>, Config = ReadContractsConfig<TContracts, TAllowFailure>> = {
    [K in keyof Config]?: K extends 'contracts' ? DeepPartial<Config[K], 2> : Config[K];
} & QueryConfigWithSelect<ReadContractsResult<TContracts, TAllowFailure>, Error, TSelectData> & {
    /** If set to `true`, the cache will depend on the block number */
    cacheOnBlock?: boolean;
    /** Set this to `true` to keep the previous data when fetching based on a new query key. Defaults to `false`. */
    keepPreviousData?: boolean;
} & ({
    /** Block number to read against. */
    blockNumber?: ReadContractsConfig<TContracts>['blockNumber'];
    blockTag?: never;
    watch?: never;
} | {
    blockNumber?: never;
    /** Block tag to read against. */
    blockTag?: ReadContractsConfig<TContracts>['blockTag'];
    watch?: never;
} | {
    blockNumber?: never;
    blockTag?: never;
    /** Refresh on incoming blocks. */
    watch?: boolean;
});
declare function useContractReads<TContracts extends ContractFunctionConfig[], TAllowFailure extends boolean = true, TSelectData = ReadContractsResult<TContracts, TAllowFailure>>({ allowFailure: allowFailure_, blockNumber: blockNumberOverride, blockTag, cacheOnBlock, cacheTime, contracts, enabled: enabled_, isDataEqual, keepPreviousData, onError, onSettled, onSuccess, scopeKey, select, staleTime, structuralSharing, suspense, watch, }?: UseContractReadsConfig<TContracts, TAllowFailure, TSelectData>): UseQueryResult<TSelectData, Error>;

type UseContractWritePreparedArgs<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string> = Partial<Pick<PrepareWriteContractResult<TAbi, TFunctionName>, 'request'>> & {
    abi?: never;
    accessList?: never;
    address?: never;
    args?: never;
    chainId?: never;
    functionName?: never;
    gas?: never;
    gasPrice?: never;
    maxFeePerGas?: never;
    maxPriorityFeePerGas?: never;
    nonce?: never;
    value?: never;
};
type UseContractWriteUnpreparedArgs<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string> = PartialBy<Omit<WriteContractUnpreparedArgs<TAbi, TFunctionName>, 'args'>, 'abi' | 'address' | 'functionName'> & Partial<GetFunctionArgs<TAbi, TFunctionName>> & {
    request?: never;
};
type UseContractWriteArgs<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string, TMode extends WriteContractMode = undefined> = {
    mode?: TMode;
} & (TMode extends 'prepared' ? UseContractWritePreparedArgs<TAbi, TFunctionName> : UseContractWriteUnpreparedArgs<TAbi, TFunctionName>);
type UseContractWriteConfig<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string, TMode extends WriteContractMode = undefined> = MutationConfig<WriteContractResult, Error, UseContractWriteArgs<TAbi, TFunctionName, TMode>> & UseContractWriteArgs<TAbi, TFunctionName, TMode>;
/**
 * @description Hook for calling a contract nonpayable or payable function.
 *
 * It is highly recommended to pair this with the [`usePrepareContractWrite` hook](/docs/prepare-hooks/usePrepareContractWrite)
 * to [avoid UX pitfalls](https://wagmi.sh/react/prepare-hooks#ux-pitfalls-without-prepare-hooks).
 *
 * @example
 * import { useContractWrite, usePrepareContractWrite } from 'wagmi'
 *
 * const { config } = usePrepareContractWrite({
 *  address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
 *  abi: wagmigotchiABI,
 *  functionName: 'feed',
 * })
 * const { data, isLoading, isSuccess, write } = useContractWrite(config)
 *
 */
declare function useContractWrite<TAbi extends Abi | readonly unknown[], TFunctionName extends string, TMode extends WriteContractMode = undefined>(config: UseContractWriteConfig<TAbi, TFunctionName, TMode>): {
    data: WriteContractResult | undefined;
    error: Error | null;
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    reset: () => void;
    status: "error" | "success" | "loading" | "idle";
    variables: UseContractWriteArgs<Abi, string, undefined> | undefined;
    write: MutationFn<TMode, TAbi, TFunctionName, void>;
    writeAsync: MutationFn<TMode, TAbi, TFunctionName, Promise<WriteContractResult>>;
};
type MutationFnArgs<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string> = Omit<SendTransactionParameters, 'account' | 'chain'> & {
    args?: WriteContractUnpreparedArgs<TAbi, TFunctionName> extends {
        args: unknown;
    } ? WriteContractUnpreparedArgs<TAbi, TFunctionName>['args'] : unknown;
};
type MutationFn<TMode extends WriteContractMode, TAbi extends Abi | readonly unknown[], TFunctionName extends string, TReturnType> = TMode extends 'prepared' ? (() => TReturnType) | undefined : (config?: MutationFnArgs<TAbi, TFunctionName>) => TReturnType;

type UsePrepareContractWriteConfig<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string, TChainId extends number = number, TWalletClient extends WalletClient = WalletClient> = PartialBy<Omit<PrepareWriteContractConfig<TAbi, TFunctionName, TChainId, TWalletClient>, 'args'>, 'abi' | 'address' | 'functionName'> & Partial<GetFunctionArgs<TAbi, TFunctionName>> & QueryConfig<PrepareWriteContractResult<TAbi, TFunctionName, TChainId>, Error>;
/**
 * @description Hook for preparing a contract write to be sent via [`useContractWrite`](/docs/hooks/useContractWrite).
 *
 * Eagerly fetches the parameters required for sending a contract write transaction such as the gas estimate.
 *
 * @example
 * import { useContractWrite, usePrepareContractWrite } from 'wagmi'
 *
 * const { config } = usePrepareContractWrite({
 *  address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
 *  abi: wagmigotchiABI,
 *  functionName: 'feed',
 * })
 * const { data, isLoading, isSuccess, write } = useContractWrite(config)
 *
 */
declare function usePrepareContractWrite<TAbi extends Abi | readonly unknown[], TFunctionName extends string, TChainId extends number>({ address, abi, functionName, chainId, args, cacheTime, enabled, scopeKey, staleTime, suspense, onError, onSettled, onSuccess, ...config }?: UsePrepareContractWriteConfig<TAbi, TFunctionName, TChainId>): Pick<_tanstack_react_query.QueryObserverResult<PrepareWriteContractResult<TAbi, TFunctionName, TChainId>, Error>, "data" | "error" | "isError" | "isLoading" | "isSuccess" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isRefetching" | "refetch" | "fetchStatus"> & {
    isIdle: boolean;
    status: "error" | "success" | "loading" | "idle";
    internal: Pick<_tanstack_react_query.QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
} & {
    config: PrepareWriteContractResult<TAbi, TFunctionName, TChainId>;
};

type UseTokenArgs = Partial<FetchTokenArgs>;
type UseTokenConfig = QueryConfig<FetchTokenResult, Error>;
declare function useToken({ address, chainId: chainId_, formatUnits, cacheTime, enabled, scopeKey, staleTime, // 24 hours
suspense, onError, onSettled, onSuccess, }?: UseTokenArgs & UseTokenConfig): UseQueryResult<FetchTokenResult, Error>;

type UseEnsAddressArgs = Omit<Partial<FetchEnsAddressArgs>, 'name'> & {
    name?: FetchEnsAddressArgs['name'] | null;
};
type UseEnsAddressConfig = QueryConfig<FetchEnsAddressResult, Error>;
declare function useEnsAddress({ cacheTime, chainId: chainId_, enabled, name, scopeKey, staleTime, // 24 hours
suspense, onError, onSettled, onSuccess, }?: UseEnsAddressArgs & UseEnsAddressConfig): UseQueryResult<`0x${string}` | null, Error>;

type UseEnsAvatarArgs = Omit<Partial<FetchEnsAvatarArgs>, 'name'> & {
    name?: FetchEnsAvatarArgs['name'] | null;
};
type UseEnsLookupConfig = QueryConfig<FetchEnsAvatarResult, Error>;
declare function useEnsAvatar({ cacheTime, chainId: chainId_, enabled, name, scopeKey, staleTime, // 24 hours
suspense, onError, onSettled, onSuccess, }?: UseEnsAvatarArgs & UseEnsLookupConfig): UseQueryResult<string | null, Error>;

type UseEnsNameArgs = Partial<FetchEnsNameArgs>;
type UseEnsNameConfig = QueryConfig<FetchEnsNameResult, Error>;
declare function useEnsName({ address, cacheTime, chainId: chainId_, enabled, scopeKey, staleTime, // 24 hours
suspense, onError, onSettled, onSuccess, }?: UseEnsNameArgs & UseEnsNameConfig): UseQueryResult<string | null, Error>;

type UseEnsResolverArgs = Omit<Partial<FetchEnsResolverArgs>, 'name'> & {
    name?: FetchEnsResolverArgs['name'] | null;
};
type UseEnsResolverConfig = QueryConfig<FetchEnsResolverResult, Error>;
declare function useEnsResolver({ chainId: chainId_, name, enabled, scopeKey, suspense, onError, onSettled, onSuccess, }?: UseEnsResolverArgs & UseEnsResolverConfig): UseQueryResult<`0x${string}`, Error>;

type UseBlockNumberArgs = Partial<FetchBlockNumberArgs> & {
    /** Function fires when a new block is created */
    onBlock?: (blockNumber: bigint) => void;
    /** Subscribe to changes */
    watch?: boolean;
};
type UseBlockNumberConfig = QueryConfig<FetchBlockNumberResult, Error>;
declare function useBlockNumber({ cacheTime, chainId: chainId_, enabled, scopeKey, staleTime, suspense, watch, onBlock, onError, onSettled, onSuccess, }?: UseBlockNumberArgs & UseBlockNumberConfig): UseQueryResult<bigint, Error>;

type UseFeeDataArgs = Partial<FetchFeeDataArgs> & {
    /** Subscribe to changes */
    watch?: boolean;
};
type UseFeedDataConfig = QueryConfig<FetchFeeDataResult, Error>;
declare function useFeeData({ cacheTime, chainId: chainId_, enabled, formatUnits, scopeKey, staleTime, suspense, watch, onError, onSettled, onSuccess, }?: UseFeeDataArgs & UseFeedDataConfig): UseQueryResult<FetchFeeDataResult, Error>;

type UsePublicClientArgs = Partial<GetPublicClientArgs>;
declare function usePublicClient<TPublicClient extends PublicClient>({ chainId, }?: UsePublicClientArgs): TPublicClient;

type UseWalletClientConfig = Omit<QueryConfig<GetWalletClientResult, Error>, 'cacheTime' | 'staleTime' | 'enabled'> & GetWalletClientArgs;
declare function useWalletClient({ chainId: chainId_, suspense, onError, onSettled, onSuccess, }?: UseWalletClientConfig): UseQueryResult<GetWalletClientResult, Error>;

type UseWebSocketPublicClientArgs = Partial<GetWebSocketPublicClientArgs>;
declare function useWebSocketPublicClient<TWebSocketPublicClient extends WebSocketPublicClient>({ chainId }?: UseWebSocketPublicClientArgs): _wagmi_core.GetWebSocketPublicClientResult<TWebSocketPublicClient>;

type UsePrepareSendTransactionConfig = Partial<PrepareSendTransactionArgs> & QueryConfig<PrepareSendTransactionResult, Error>;
/**
 * @description Hook for preparing a transaction to be sent via [`useSendTransaction`](/docs/hooks/useSendTransaction).
 *
 * Eagerly fetches the parameters required for sending a transaction such as the gas estimate and resolving an ENS address (if required).
 *
 * @example
 * import { useSendTransaction, usePrepareSendTransaction } from 'wagmi'
 *
 * const { request } = usePrepareSendTransaction({
 *   to: 'moxey.eth',
 *   value: parseEther('1'),
 * })
 * const result = useSendTransaction(request)
 */
declare function usePrepareSendTransaction({ accessList, account, chainId, cacheTime, data, enabled, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, scopeKey, staleTime, suspense, to, value, onError, onSettled, onSuccess, }?: UsePrepareSendTransactionConfig): Pick<_tanstack_react_query.QueryObserverResult<PrepareSendTransactionResult, Error>, "data" | "error" | "isError" | "isLoading" | "isSuccess" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isRefetching" | "refetch" | "fetchStatus"> & {
    isIdle: boolean;
    status: "error" | "success" | "loading" | "idle";
    internal: Pick<_tanstack_react_query.QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
} & {
    config: PrepareSendTransactionResult;
};

type UseSendTransactionArgs<TMode extends 'prepared' | undefined = 'prepared' | undefined> = Omit<SendTransactionArgs, 'to'> & {
    mode?: TMode;
    to?: string;
};
type UseSendTransactionMutationArgs = SendTransactionArgs;
type UseSendTransactionConfig = MutationConfig<SendTransactionResult, Error, UseSendTransactionArgs>;
type SendTransactionFn = (overrideConfig?: UseSendTransactionMutationArgs) => void;
type SendTransactionAsyncFn = (overrideConfig?: UseSendTransactionMutationArgs) => Promise<SendTransactionResult>;
type MutateFnReturnValue<TMode, TFn> = TMode extends 'prepared' ? TFn | undefined : TFn;
/**
 * @description Hook for sending a transaction.
 *
 * It is recommended to pair this with the [`usePrepareSendTransaction` hook](/docs/prepare-hooks/usePrepareSendTransaction)
 * to [avoid UX pitfalls](https://wagmi.sh/react/prepare-hooks#ux-pitfalls-without-prepare-hooks).
 *
 * @example
 * import { useSendTransaction, usePrepareSendTransaction } from 'wagmi'
 *
 * const config = usePrepareSendTransaction({
 *   request: {
 *     to: 'moxey.eth',
 *     value: parseEther('1'),
 *   }
 * })
 * const result = useSendTransaction(config)
 */
declare function useSendTransaction<TMode extends 'prepared' | undefined = undefined>({ accessList, account, chainId, data: data_, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, mode, nonce, to, value, onError, onMutate, onSettled, onSuccess, }?: UseSendTransactionArgs<TMode> & UseSendTransactionConfig): {
    data: SendTransactionResult | undefined;
    error: Error | null;
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    reset: () => void;
    sendTransaction: MutateFnReturnValue<TMode, SendTransactionFn>;
    sendTransactionAsync: MutateFnReturnValue<TMode, SendTransactionAsyncFn>;
    status: "error" | "success" | "loading" | "idle";
    variables: UseSendTransactionArgs<"prepared" | undefined> | undefined;
};

type UseTransactionArgs = Partial<FetchTransactionArgs>;
type UseTransactionConfig = QueryConfig<FetchTransactionResult, Error>;
/**
 * @description Fetches transaction for hash
 *
 * @example
 * import { useTransaction } from 'wagmi'
 *
 * const result = useTransaction({
 *  chainId: 1,
 *  hash: '0x...',
 * })
 */
declare function useTransaction({ cacheTime, chainId: chainId_, enabled, hash, scopeKey, staleTime, suspense, onError, onSettled, onSuccess, }?: UseTransactionArgs & UseTransactionConfig): UseQueryResult<viem.TransactionLegacy<bigint, number, "legacy"> | viem.TransactionEIP2930<bigint, number, "eip2930"> | viem.TransactionEIP1559<bigint, number, "eip1559">, Error>;

type UseWaitForTransactionArgs = Partial<WaitForTransactionArgs>;
type UseWaitForTransactionConfig = QueryConfig<WaitForTransactionResult, Error>;
declare function useWaitForTransaction({ chainId: chainId_, confirmations, hash, timeout, cacheTime, enabled, scopeKey, staleTime, suspense, onError, onReplaced, onSettled, onSuccess, }?: UseWaitForTransactionArgs & UseWaitForTransactionConfig): UseQueryResult<viem.TransactionReceipt<bigint, number, "success" | "reverted", viem.TransactionType>, Error>;

type UseWatchPendingTransactionsConfig = {
    /** The chain ID to listen on. */
    chainId?: number;
    /** Subscribe to changes */
    enabled?: boolean;
    /** Function fires when a pending transaction enters the mempool. */
    listener: WatchPendingTransactionsCallback;
};
declare function useWatchPendingTransactions({ chainId: chainId_, enabled, listener, }: UseWatchPendingTransactionsConfig): void;

export { Config, Context, CreateConfigParameters, UseContractEventConfig, UseContractInfiniteReadsConfig, UseContractReadConfig, UseContractReadsConfig, UseContractWriteConfig, UsePrepareContractWriteConfig, WagmiConfig, WagmiConfigProps, createConfig, paginatedIndexesConfig, useAccount, useBalance, useBlockNumber, useChainId, useConfig, useConnect, useContractEvent, useContractInfiniteReads, useContractRead, useContractReads, useContractWrite, useDisconnect, useEnsAddress, useEnsAvatar, useEnsName, useEnsResolver, useFeeData, useInfiniteQuery, useMutation, useNetwork, usePrepareContractWrite, usePrepareSendTransaction, usePublicClient, useQuery, useQueryClient, useSendTransaction, useSignMessage, useSignTypedData, useSwitchNetwork, useToken, useTransaction, useWaitForTransaction, useWalletClient, useWatchPendingTransactions, useWebSocketPublicClient };
