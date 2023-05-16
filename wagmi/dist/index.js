"use client";

// src/config.ts
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import {
  createConfig as createCoreConfig,
  createStorage,
  noopStorage
} from "@wagmi/core";
function createConfig({
  queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1e3 * 60 * 60 * 24,
        networkMode: "offlineFirst",
        refetchOnWindowFocus: false,
        retry: 0
      },
      mutations: {
        networkMode: "offlineFirst"
      }
    }
  }),
  storage = createStorage({
    storage: typeof window !== "undefined" && window.localStorage ? window.localStorage : noopStorage
  }),
  persister = typeof window !== "undefined" ? createSyncStoragePersister({
    key: "cache",
    storage,
    serialize: (x) => x,
    deserialize: (x) => x
  }) : void 0,
  ...args
}) {
  const config = createCoreConfig({
    ...args,
    storage
  });
  if (persister)
    persistQueryClient({
      queryClient,
      persister,
      dehydrateOptions: {
        shouldDehydrateQuery: (query) => query.cacheTime !== 0 && query.queryKey[0].persist !== false
      }
    });
  return Object.assign(config, { queryClient });
}

// src/context.ts
import { QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
var Context = React.createContext(void 0);
var queryClientContext = React.createContext(
  void 0
);
function WagmiConfig({
  children,
  config
}) {
  return React.createElement(Context.Provider, {
    children: React.createElement(QueryClientProvider, {
      children,
      client: config.queryClient,
      context: queryClientContext
    }),
    value: config
  });
}
function useConfig() {
  const config = React.useContext(Context);
  if (!config)
    throw new Error(
      [
        "`useConfig` must be used within `WagmiConfig`.\n",
        "Read more: https://wagmi.sh/react/WagmiConfig"
      ].join("\n")
    );
  return config;
}

// src/hooks/accounts/useAccount.ts
import { getAccount, getConfig } from "@wagmi/core";
import * as React8 from "react";

// src/hooks/utils/query/useBaseQuery.ts
import {
  notifyManager,
  useIsRestoring,
  useQueryClient,
  useQueryErrorResetBoundary
} from "@tanstack/react-query";
import * as React2 from "react";

// src/hooks/utils/useSyncExternalStore.ts
import * as pkg from "use-sync-external-store/shim/index.js";
var useSyncExternalStore2 = pkg.useSyncExternalStore;

// src/hooks/utils/query/utils.ts
function isQueryKey(value) {
  return Array.isArray(value);
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }
  if (typeof arg2 === "function") {
    return { ...arg3, queryKey: arg1, queryFn: arg2 };
  }
  return { ...arg2, queryKey: arg1 };
}
function queryKeyHashFn(queryKey17) {
  return JSON.stringify(
    queryKey17,
    (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : typeof val === "bigint" ? val.toString() : val
  );
}
function shouldThrowError(_useErrorBoundary, params) {
  if (typeof _useErrorBoundary === "function") {
    return _useErrorBoundary(...params);
  }
  return !!_useErrorBoundary;
}
function trackResult(result, observer) {
  const trackedResult = {};
  Object.keys(result).forEach((key) => {
    Object.defineProperty(trackedResult, key, {
      configurable: false,
      enumerable: true,
      get: () => {
        observer.trackedProps.add(key);
        return result[key];
      }
    });
  });
  return trackedResult;
}

// src/hooks/utils/query/useBaseQuery.ts
function useBaseQuery(options, Observer) {
  const queryClient = useQueryClient({ context: options.context });
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const defaultedOptions = queryClient.defaultQueryOptions({
    ...options,
    queryKeyHashFn
  });
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  if (defaultedOptions.onError) {
    defaultedOptions.onError = notifyManager.batchCalls(
      defaultedOptions.onError
    );
  }
  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = notifyManager.batchCalls(
      defaultedOptions.onSuccess
    );
  }
  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = notifyManager.batchCalls(
      defaultedOptions.onSettled
    );
  }
  if (defaultedOptions.suspense) {
    if (typeof defaultedOptions.staleTime !== "number") {
      defaultedOptions.staleTime = 1e3;
    }
  }
  if (defaultedOptions.suspense || defaultedOptions.useErrorBoundary) {
    if (!errorResetBoundary.isReset()) {
      defaultedOptions.retryOnMount = false;
    }
  }
  const [observer] = React2.useState(
    () => new Observer(
      queryClient,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  useSyncExternalStore2(
    React2.useCallback(
      (onStoreChange) => isRestoring ? () => void 0 : observer.subscribe(notifyManager.batchCalls(onStoreChange)),
      [observer, isRestoring]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  React2.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
  React2.useEffect(() => {
    observer.setOptions(defaultedOptions, { listeners: false });
  }, [defaultedOptions, observer]);
  if (defaultedOptions.suspense && result.isLoading && result.isFetching && !isRestoring) {
    throw observer.fetchOptimistic(defaultedOptions).then(({ data }) => {
      defaultedOptions.onSuccess?.(data);
      defaultedOptions.onSettled?.(data, null);
    }).catch((error) => {
      errorResetBoundary.clearReset();
      defaultedOptions.onError?.(error);
      defaultedOptions.onSettled?.(void 0, error);
    });
  }
  if (result.isError && !errorResetBoundary.isReset() && !result.isFetching && shouldThrowError(defaultedOptions.useErrorBoundary, [
    result.error,
    observer.getCurrentQuery()
  ])) {
    throw result.error;
  }
  const status = result.status === "loading" && result.fetchStatus === "idle" ? "idle" : result.status;
  const isIdle = status === "idle";
  const isLoading = status === "loading" && result.fetchStatus === "fetching";
  return {
    ...result,
    defaultedOptions,
    isIdle,
    isLoading,
    observer,
    status
  };
}

// src/hooks/utils/query/useInfiniteQuery.ts
import { InfiniteQueryObserver } from "@tanstack/react-query";
function useInfiniteQuery(arg1, arg2, arg3) {
  const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
  const baseQuery = useBaseQuery(
    { context: queryClientContext, ...parsedOptions },
    InfiniteQueryObserver
  );
  const result = {
    data: baseQuery.data,
    error: baseQuery.error,
    fetchNextPage: baseQuery.fetchNextPage,
    fetchStatus: baseQuery.fetchStatus,
    hasNextPage: baseQuery.hasNextPage,
    isError: baseQuery.isError,
    isFetched: baseQuery.isFetched,
    isFetchedAfterMount: baseQuery.isFetchedAfterMount,
    isFetching: baseQuery.isFetching,
    isFetchingNextPage: baseQuery.isFetchingNextPage,
    isIdle: baseQuery.isIdle,
    isLoading: baseQuery.isLoading,
    isRefetching: baseQuery.isRefetching,
    isSuccess: baseQuery.isSuccess,
    refetch: baseQuery.refetch,
    status: baseQuery.status,
    internal: {
      dataUpdatedAt: baseQuery.dataUpdatedAt,
      errorUpdatedAt: baseQuery.errorUpdatedAt,
      failureCount: baseQuery.failureCount,
      isFetchedAfterMount: baseQuery.isFetchedAfterMount,
      isLoadingError: baseQuery.isLoadingError,
      isPaused: baseQuery.isPaused,
      isPlaceholderData: baseQuery.isPlaceholderData,
      isPreviousData: baseQuery.isPreviousData,
      isRefetchError: baseQuery.isRefetchError,
      isStale: baseQuery.isStale,
      remove: baseQuery.remove
    }
  };
  return !baseQuery.defaultedOptions.notifyOnChangeProps ? trackResult(result, baseQuery.observer) : result;
}

// src/hooks/utils/query/useMutation.ts
import {
  parseMutationArgs,
  useMutation as useMutation_
} from "@tanstack/react-query";
function useMutation(arg1, arg2, arg3) {
  const options = parseMutationArgs(arg1, arg2, arg3);
  return useMutation_({ context: queryClientContext, ...options });
}

// src/hooks/utils/query/useQuery.ts
import { QueryObserver } from "@tanstack/react-query";
function useQuery(arg1, arg2, arg3) {
  const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
  const baseQuery = useBaseQuery({ context: queryClientContext, ...parsedOptions }, QueryObserver);
  const result = {
    data: baseQuery.data,
    error: baseQuery.error,
    fetchStatus: baseQuery.fetchStatus,
    isError: baseQuery.isError,
    isFetched: baseQuery.isFetched,
    isFetchedAfterMount: baseQuery.isFetchedAfterMount,
    isFetching: baseQuery.isFetching,
    isIdle: baseQuery.isIdle,
    isLoading: baseQuery.isLoading,
    isRefetching: baseQuery.isRefetching,
    isSuccess: baseQuery.isSuccess,
    refetch: baseQuery.refetch,
    status: baseQuery.status,
    internal: {
      dataUpdatedAt: baseQuery.dataUpdatedAt,
      errorUpdatedAt: baseQuery.errorUpdatedAt,
      failureCount: baseQuery.failureCount,
      isFetchedAfterMount: baseQuery.isFetchedAfterMount,
      isLoadingError: baseQuery.isLoadingError,
      isPaused: baseQuery.isPaused,
      isPlaceholderData: baseQuery.isPlaceholderData,
      isPreviousData: baseQuery.isPreviousData,
      isRefetchError: baseQuery.isRefetchError,
      isStale: baseQuery.isStale,
      remove: baseQuery.remove
    }
  };
  return !baseQuery.defaultedOptions.notifyOnChangeProps ? trackResult(result, baseQuery.observer) : result;
}

// src/hooks/utils/query/useQueryClient.ts
import { useQueryClient as useQueryClient_ } from "@tanstack/react-query";
var useQueryClient2 = () => useQueryClient_({ context: queryClientContext });

// src/hooks/viem/usePublicClient.ts
import { getPublicClient, watchPublicClient } from "@wagmi/core";
import { useSyncExternalStoreWithSelector } from "use-sync-external-store/shim/with-selector.js";
function usePublicClient({
  chainId
} = {}) {
  return useSyncExternalStoreWithSelector(
    (cb) => watchPublicClient({ chainId }, cb),
    () => getPublicClient({ chainId }),
    () => getPublicClient({ chainId }),
    (x) => x,
    (a, b) => a.uid === b.uid
  );
}

// src/hooks/viem/useWalletClient.ts
import { getWalletClient, watchWalletClient } from "@wagmi/core";
import * as React3 from "react";
function queryKey({ chainId }) {
  return [{ entity: "walletClient", chainId, persist: false }];
}
function queryFn({
  queryKey: [{ chainId }]
}) {
  return getWalletClient({ chainId });
}
function useWalletClient({
  chainId: chainId_,
  suspense,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const { connector } = useAccount();
  const chainId = useChainId({ chainId: chainId_ });
  const walletClientQuery = useQuery(queryKey({ chainId }), queryFn, {
    cacheTime: 0,
    enabled: Boolean(connector),
    staleTime: Infinity,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
  const queryClient = useQueryClient2();
  React3.useEffect(() => {
    const unwatch = watchWalletClient({ chainId }, (walletClient) => {
      if (walletClient)
        queryClient.invalidateQueries(queryKey({ chainId }));
      else
        queryClient.removeQueries(queryKey({ chainId }));
    });
    return unwatch;
  }, [queryClient, chainId]);
  return walletClientQuery;
}

// src/hooks/viem/useWebSocketPublicClient.ts
import {
  getWebSocketPublicClient,
  watchWebSocketPublicClient
} from "@wagmi/core";
import { useSyncExternalStoreWithSelector as useSyncExternalStoreWithSelector2 } from "use-sync-external-store/shim/with-selector.js";
function useWebSocketPublicClient({ chainId } = {}) {
  return useSyncExternalStoreWithSelector2(
    (cb) => watchWebSocketPublicClient({ chainId }, cb),
    () => getWebSocketPublicClient({ chainId }),
    () => getWebSocketPublicClient({ chainId }),
    (x) => x,
    (a, b) => a?.uid === b?.uid
  );
}

// src/hooks/utils/useChainId.ts
function useChainId({ chainId } = {}) {
  const publicClient = usePublicClient({ chainId });
  return publicClient.chain.id;
}

// src/hooks/utils/useForceUpdate.ts
import * as React4 from "react";
function useForceUpdate() {
  const [, forceUpdate] = React4.useReducer((x) => x + 1, 0);
  return forceUpdate;
}

// src/hooks/network-status/useBlockNumber.ts
import { fetchBlockNumber } from "@wagmi/core";
import * as React5 from "react";
function queryKey2({ chainId, scopeKey }) {
  return [{ entity: "blockNumber", chainId, scopeKey }];
}
function queryFn2({
  queryKey: [{ chainId }]
}) {
  return fetchBlockNumber({ chainId });
}
function useBlockNumber({
  cacheTime = 0,
  chainId: chainId_,
  enabled = true,
  scopeKey,
  staleTime,
  suspense,
  watch = false,
  onBlock,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  const publicClient = usePublicClient({ chainId });
  const webSocketPublicClient = useWebSocketPublicClient({ chainId });
  const queryClient = useQueryClient2();
  React5.useEffect(() => {
    if (!enabled)
      return;
    if (!watch && !onBlock)
      return;
    const publicClient_ = webSocketPublicClient ?? publicClient;
    const unwatch = publicClient_.watchBlockNumber({
      onBlockNumber: (blockNumber) => {
        if (watch)
          queryClient.setQueryData(queryKey2({ chainId, scopeKey }), blockNumber);
        if (onBlock)
          onBlock(blockNumber);
      },
      emitOnBegin: true
    });
    return unwatch;
  }, [
    chainId,
    scopeKey,
    onBlock,
    publicClient,
    queryClient,
    watch,
    webSocketPublicClient,
    enabled
  ]);
  return useQuery(queryKey2({ scopeKey, chainId }), queryFn2, {
    cacheTime,
    enabled,
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}

// src/hooks/network-status/useFeeData.ts
import { fetchFeeData } from "@wagmi/core";
import * as React6 from "react";
function queryKey3({
  chainId,
  formatUnits,
  scopeKey
}) {
  return [{ entity: "feeData", chainId, formatUnits, scopeKey }];
}
function queryFn3({
  queryKey: [{ chainId, formatUnits }]
}) {
  return fetchFeeData({ chainId, formatUnits });
}
function useFeeData({
  cacheTime,
  chainId: chainId_,
  enabled = true,
  formatUnits = "gwei",
  scopeKey,
  staleTime,
  suspense,
  watch,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  const queryKey_ = React6.useMemo(
    () => queryKey3({
      chainId,
      formatUnits,
      scopeKey
    }),
    [chainId, formatUnits, scopeKey]
  );
  const feeDataQuery = useQuery(queryKey_, queryFn3, {
    cacheTime,
    enabled,
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
  useInvalidateOnBlock({
    chainId,
    enabled: Boolean(enabled && watch),
    queryKey: queryKey_
  });
  return feeDataQuery;
}

// src/hooks/utils/useInvalidateOnBlock.ts
function useInvalidateOnBlock({
  chainId,
  enabled,
  queryKey: queryKey17
}) {
  const queryClient = useQueryClient2();
  useBlockNumber({
    chainId,
    enabled,
    onBlock: enabled ? () => queryClient.invalidateQueries(queryKey17) : void 0,
    scopeKey: enabled ? void 0 : "idle"
  });
}

// src/hooks/utils/useSyncExternalStoreWithTracked.ts
import { deepEqual } from "@wagmi/core";
import * as React7 from "react";
import { useSyncExternalStoreWithSelector as useSyncExternalStoreWithSelector3 } from "use-sync-external-store/shim/with-selector.js";
var isPlainObject2 = (obj) => typeof obj === "object" && !Array.isArray(obj);
function useSyncExternalStoreWithTracked(subscribe, getSnapshot, getServerSnapshot = getSnapshot, isEqual = deepEqual) {
  const trackedKeys = React7.useRef([]);
  const result = useSyncExternalStoreWithSelector3(
    subscribe,
    getSnapshot,
    getServerSnapshot,
    (x) => x,
    (a, b) => {
      if (isPlainObject2(a) && isPlainObject2(b) && trackedKeys.current.length) {
        for (const key of trackedKeys.current) {
          const equal = isEqual(
            a[key],
            b[key]
          );
          if (!equal)
            return false;
        }
        return true;
      }
      return isEqual(a, b);
    }
  );
  if (isPlainObject2(result)) {
    const trackedResult = { ...result };
    Object.defineProperties(
      trackedResult,
      Object.entries(trackedResult).reduce(
        (res, [key, value]) => {
          return {
            ...res,
            [key]: {
              configurable: false,
              enumerable: true,
              get: () => {
                if (!trackedKeys.current.includes(key)) {
                  trackedKeys.current.push(key);
                }
                return value;
              }
            }
          };
        },
        {}
      )
    );
    return trackedResult;
  }
  return result;
}

// src/hooks/accounts/useAccount.ts
function useAccount({ onConnect, onDisconnect } = {}) {
  const watchAccount = React8.useCallback(
    (callback) => {
      const config = getConfig();
      const unsubscribe = config.subscribe(
        (state) => ({
          address: state.data?.account,
          connector: state.connector,
          status: state.status
        }),
        (curr, prev) => {
          if (!!onConnect && prev.status !== "connected" && curr.status === "connected")
            onConnect({
              address: curr.address,
              connector: curr.connector,
              isReconnected: prev.status === "reconnecting"
            });
          if (!!onDisconnect && prev.status === "connected" && curr.status === "disconnected")
            onDisconnect();
          return callback(getAccount());
        }
      );
      return unsubscribe;
    },
    [onConnect, onDisconnect]
  );
  const account = useSyncExternalStoreWithTracked(watchAccount, getAccount);
  const previousStatusRef = React8.useRef();
  const { address, connector, status } = account;
  React8.useEffect(() => {
    if (!!onConnect && previousStatusRef.current === void 0 && status === "connected")
      onConnect({ address, connector, isReconnected: true });
    previousStatusRef.current = status;
  }, []);
  return account;
}

// src/hooks/accounts/useBalance.ts
import { fetchBalance } from "@wagmi/core";
import * as React9 from "react";
function queryKey4({
  address,
  chainId,
  formatUnits,
  scopeKey,
  token
}) {
  return [
    {
      entity: "balance",
      address,
      chainId,
      formatUnits,
      scopeKey,
      token
    }
  ];
}
function queryFn4({
  queryKey: [{ address, chainId, formatUnits, token }]
}) {
  if (!address)
    throw new Error("address is required");
  return fetchBalance({ address, chainId, formatUnits, token });
}
function useBalance({
  address,
  cacheTime,
  chainId: chainId_,
  enabled = true,
  formatUnits,
  scopeKey,
  staleTime,
  suspense,
  token,
  watch,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  const queryKey_ = React9.useMemo(
    () => queryKey4({ address, chainId, formatUnits, scopeKey, token }),
    [address, chainId, formatUnits, scopeKey, token]
  );
  const balanceQuery = useQuery(queryKey_, queryFn4, {
    cacheTime,
    enabled: Boolean(enabled && address),
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
  useInvalidateOnBlock({
    chainId,
    enabled: Boolean(enabled && watch && address),
    queryKey: queryKey_
  });
  return balanceQuery;
}

// src/hooks/accounts/useConnect.ts
import { connect } from "@wagmi/core";
import * as React10 from "react";
var mutationKey = (args) => [{ entity: "connect", ...args }];
var mutationFn = (args) => {
  const { connector, chainId } = args;
  if (!connector)
    throw new Error("connector is required");
  return connect({ connector, chainId });
};
function useConnect({
  chainId,
  connector,
  onError,
  onMutate,
  onSettled,
  onSuccess
} = {}) {
  const config = useConfig();
  const {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
    variables
  } = useMutation(mutationKey({ connector, chainId }), mutationFn, {
    onError,
    onMutate,
    onSettled,
    onSuccess
  });
  const connect2 = React10.useCallback(
    (args) => {
      return mutate({
        chainId: args?.chainId ?? chainId,
        connector: args?.connector ?? connector
      });
    },
    [chainId, connector, mutate]
  );
  const connectAsync = React10.useCallback(
    (args) => {
      return mutateAsync({
        chainId: args?.chainId ?? chainId,
        connector: args?.connector ?? connector
      });
    },
    [chainId, connector, mutateAsync]
  );
  return {
    connect: connect2,
    connectAsync,
    connectors: config.connectors,
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    pendingConnector: variables?.connector,
    reset,
    status,
    variables
  };
}

// src/hooks/accounts/useDisconnect.ts
import { disconnect } from "@wagmi/core";
var mutationKey2 = [{ entity: "disconnect" }];
var mutationFn2 = () => disconnect();
function useDisconnect({
  onError,
  onMutate,
  onSettled,
  onSuccess
} = {}) {
  const {
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    mutate: disconnect2,
    mutateAsync: disconnectAsync,
    reset,
    status
  } = useMutation(mutationKey2, mutationFn2, {
    ...onError ? {
      onError(error2, _variables, context) {
        onError(error2, context);
      }
    } : {},
    onMutate,
    ...onSettled ? {
      onSettled(_data, error2, _variables, context) {
        onSettled(error2, context);
      }
    } : {},
    ...onSuccess ? {
      onSuccess(_data, _variables, context) {
        onSuccess(context);
      }
    } : {}
  });
  return {
    disconnect: disconnect2,
    disconnectAsync,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    reset,
    status
  };
}

// src/hooks/accounts/useNetwork.ts
import { getNetwork, watchNetwork } from "@wagmi/core";
function useNetwork() {
  return useSyncExternalStoreWithTracked(watchNetwork, getNetwork);
}

// src/hooks/accounts/useSignMessage.ts
import { signMessage } from "@wagmi/core";
import * as React11 from "react";
var mutationKey3 = (args) => [{ entity: "signMessage", ...args }];
var mutationFn3 = (args) => {
  const { message } = args;
  if (!message)
    throw new Error("message is required");
  return signMessage({ message });
};
function useSignMessage({
  message,
  onError,
  onMutate,
  onSettled,
  onSuccess
} = {}) {
  const {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
    variables
  } = useMutation(mutationKey3({ message }), mutationFn3, {
    onError,
    onMutate,
    onSettled,
    onSuccess
  });
  const signMessage2 = React11.useCallback(
    (args) => mutate(args || { message }),
    [message, mutate]
  );
  const signMessageAsync = React11.useCallback(
    (args) => mutateAsync(args || { message }),
    [message, mutateAsync]
  );
  return {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    reset,
    signMessage: signMessage2,
    signMessageAsync,
    status,
    variables
  };
}

// src/hooks/accounts/useSignTypedData.ts
import { signTypedData } from "@wagmi/core";
import * as React12 from "react";
function mutationKey4({ domain, types, message, primaryType }) {
  return [
    { entity: "signTypedData", domain, types, message, primaryType }
  ];
}
function mutationFn4(args) {
  const { domain, types, primaryType, message } = args;
  if (!domain)
    throw new Error("domain is required");
  if (!types)
    throw new Error("types is required");
  if (!primaryType)
    throw new Error("primaryType is required");
  if (!message)
    throw new Error("message is required");
  return signTypedData({
    domain,
    message,
    primaryType,
    types
  });
}
function useSignTypedData({
  domain,
  types,
  message,
  primaryType,
  onError,
  onMutate,
  onSettled,
  onSuccess
} = {}) {
  const {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
    variables
  } = useMutation(
    mutationKey4({
      domain,
      message,
      primaryType,
      types
    }),
    mutationFn4,
    {
      onError,
      onMutate,
      onSettled,
      onSuccess
    }
  );
  const signTypedData2 = React12.useCallback(
    (args) => mutate({
      domain: args?.domain ?? domain,
      types: args?.types ?? types,
      message: args?.message ?? message,
      primaryType: args?.primaryType ?? primaryType
    }),
    [domain, types, primaryType, message, mutate]
  );
  const signTypedDataAsync = React12.useCallback(
    (args) => mutateAsync({
      domain: args?.domain ?? domain,
      types: args?.types ?? types,
      message: args?.message ?? message,
      primaryType: args?.primaryType ?? primaryType
    }),
    [domain, types, primaryType, message, mutateAsync]
  );
  return {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    reset,
    signTypedData: signTypedData2,
    signTypedDataAsync,
    status,
    variables
  };
}

// src/hooks/accounts/useSwitchNetwork.ts
import { switchNetwork } from "@wagmi/core";
import * as React13 from "react";
var mutationKey5 = (args) => [{ entity: "switchNetwork", ...args }];
var mutationFn5 = (args) => {
  const { chainId } = args;
  if (!chainId)
    throw new Error("chainId is required");
  return switchNetwork({ chainId });
};
function useSwitchNetwork({
  chainId,
  throwForSwitchChainNotSupported,
  onError,
  onMutate,
  onSettled,
  onSuccess
} = {}) {
  const config = useConfig();
  const forceUpdate = useForceUpdate();
  const {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
    variables
  } = useMutation(mutationKey5({ chainId }), mutationFn5, {
    onError,
    onMutate,
    onSettled,
    onSuccess
  });
  const switchNetwork_ = React13.useCallback(
    (chainId_) => mutate({ chainId: chainId_ ?? chainId }),
    [chainId, mutate]
  );
  const switchNetworkAsync_ = React13.useCallback(
    (chainId_) => mutateAsync({ chainId: chainId_ ?? chainId }),
    [chainId, mutateAsync]
  );
  React13.useEffect(() => {
    const unwatch = config.subscribe(
      ({ chains, connector }) => ({
        chains,
        connector
      }),
      forceUpdate
    );
    return unwatch;
  }, [config, forceUpdate]);
  let switchNetwork2;
  let switchNetworkAsync;
  const supportsSwitchChain = !!config.connector?.switchChain;
  if (throwForSwitchChainNotSupported || supportsSwitchChain) {
    switchNetwork2 = switchNetwork_;
    switchNetworkAsync = switchNetworkAsync_;
  }
  return {
    chains: config.chains ?? [],
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    pendingChainId: variables?.chainId,
    reset,
    status,
    switchNetwork: switchNetwork2,
    switchNetworkAsync,
    variables
  };
}

// src/hooks/contracts/useContractEvent.ts
import * as React14 from "react";
function useContractEvent({
  address,
  chainId,
  abi,
  listener,
  eventName
} = {}) {
  const publicClient = usePublicClient({ chainId });
  const webSocketPublicClient = useWebSocketPublicClient({ chainId });
  const unwatch = React14.useRef();
  React14.useEffect(() => {
    if (!abi || !address || !eventName)
      return;
    const publicClient_ = webSocketPublicClient || publicClient;
    unwatch.current = publicClient_.watchContractEvent({
      abi,
      address,
      eventName,
      onLogs: listener
    });
    return unwatch.current;
  }, [abi, address, eventName, publicClient.uid, webSocketPublicClient?.uid]);
  return unwatch.current;
}

// src/hooks/contracts/useContractInfiniteReads.ts
import { replaceEqualDeep } from "@tanstack/react-query";
import { deepEqual as deepEqual2, readContracts } from "@wagmi/core";
import * as React15 from "react";
function queryKey5({
  allowFailure,
  blockNumber,
  blockTag,
  cacheKey,
  scopeKey
}) {
  return [
    {
      entity: "readContractsInfinite",
      allowFailure,
      blockNumber,
      blockTag,
      cacheKey,
      scopeKey
    }
  ];
}
function queryFn5({
  contracts
}) {
  return ({
    queryKey: [{ allowFailure, blockNumber, blockTag }],
    pageParam
  }) => {
    return readContracts({
      allowFailure,
      blockNumber,
      blockTag,
      contracts: contracts(pageParam || void 0)
    });
  };
}
function useContractInfiniteReads({
  allowFailure,
  blockNumber,
  blockTag,
  cacheKey,
  cacheTime,
  contracts,
  enabled: enabled_ = true,
  getNextPageParam,
  isDataEqual,
  keepPreviousData,
  onError,
  onSettled,
  onSuccess,
  scopeKey,
  select,
  staleTime,
  structuralSharing = (oldData, newData) => deepEqual2(oldData, newData) ? oldData : replaceEqualDeep(oldData, newData),
  suspense
}) {
  const queryKey_ = React15.useMemo(
    () => queryKey5({ allowFailure, blockNumber, blockTag, cacheKey, scopeKey }),
    [allowFailure, blockNumber, blockTag, cacheKey, scopeKey]
  );
  const enabled = React15.useMemo(() => {
    const enabled2 = Boolean(enabled_ && contracts);
    return enabled2;
  }, [contracts, enabled_]);
  return useInfiniteQuery(queryKey_, queryFn5({ contracts }), {
    cacheTime,
    enabled,
    getNextPageParam,
    isDataEqual,
    keepPreviousData,
    select,
    staleTime,
    structuralSharing,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}
function paginatedIndexesConfig(fn, {
  perPage,
  start,
  direction
}) {
  const contracts = (page = 0) => [...Array(perPage).keys()].map((index) => {
    return direction === "increment" ? start + index + page * perPage : start - index - page * perPage;
  }).filter((index) => index >= 0).map(fn).flat();
  return {
    contracts,
    getNextPageParam(lastPage, pages) {
      return lastPage?.length === perPage ? pages.length : void 0;
    }
  };
}

// src/hooks/contracts/useContractRead.ts
import { replaceEqualDeep as replaceEqualDeep2 } from "@tanstack/react-query";
import { deepEqual as deepEqual3, readContract } from "@wagmi/core";
import * as React16 from "react";
function queryKey6({
  address,
  args,
  blockNumber,
  blockTag,
  chainId,
  functionName,
  scopeKey
}) {
  return [
    {
      entity: "readContract",
      address,
      args,
      blockNumber,
      blockTag,
      chainId,
      functionName,
      scopeKey
    }
  ];
}
function queryFn6({ abi }) {
  return async ({
    queryKey: [{ address, args, blockNumber, blockTag, chainId, functionName }]
  }) => {
    if (!abi)
      throw new Error("abi is required");
    if (!address)
      throw new Error("address is required");
    return await readContract({
      address,
      args,
      blockNumber,
      blockTag,
      chainId,
      abi,
      functionName
    }) ?? null;
  };
}
function useContractRead({
  abi,
  address,
  args,
  blockNumber: blockNumberOverride,
  blockTag,
  cacheOnBlock = false,
  cacheTime,
  chainId: chainId_,
  enabled: enabled_ = true,
  functionName,
  isDataEqual,
  onError,
  onSettled,
  onSuccess,
  scopeKey,
  select,
  staleTime,
  structuralSharing = (oldData, newData) => deepEqual3(oldData, newData) ? oldData : replaceEqualDeep2(oldData, newData),
  suspense,
  watch
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  const { data: blockNumber_ } = useBlockNumber({
    chainId,
    enabled: watch || cacheOnBlock,
    scopeKey: watch || cacheOnBlock ? void 0 : "idle",
    watch
  });
  const blockNumber = blockNumberOverride ?? blockNumber_;
  const queryKey_ = React16.useMemo(
    () => queryKey6({
      address,
      args,
      blockNumber: cacheOnBlock ? blockNumber : void 0,
      blockTag,
      chainId,
      functionName,
      scopeKey
    }),
    [
      address,
      args,
      blockNumber,
      blockTag,
      cacheOnBlock,
      chainId,
      functionName,
      scopeKey
    ]
  );
  const enabled = React16.useMemo(() => {
    let enabled2 = Boolean(enabled_ && abi && address && functionName);
    if (cacheOnBlock)
      enabled2 = Boolean(enabled2 && blockNumber);
    return enabled2;
  }, [abi, address, blockNumber, cacheOnBlock, enabled_, functionName]);
  useInvalidateOnBlock({
    chainId,
    enabled: Boolean(enabled && watch && !cacheOnBlock),
    queryKey: queryKey_
  });
  return useQuery(
    queryKey_,
    queryFn6({
      abi
    }),
    {
      cacheTime,
      enabled,
      isDataEqual,
      select,
      staleTime,
      structuralSharing,
      suspense,
      onError,
      onSettled,
      onSuccess
    }
  );
}

// src/hooks/contracts/useContractReads.ts
import { replaceEqualDeep as replaceEqualDeep3 } from "@tanstack/react-query";
import { deepEqual as deepEqual4, readContracts as readContracts2 } from "@wagmi/core";
import * as React17 from "react";
function queryKey7({
  allowFailure,
  blockNumber,
  blockTag,
  chainId,
  contracts,
  scopeKey
}) {
  return [
    {
      entity: "readContracts",
      allowFailure,
      blockNumber,
      blockTag,
      chainId,
      scopeKey,
      contracts: (contracts ?? []).map(({ address, args, chainId: chainId2, functionName }) => ({
        address,
        args,
        chainId: chainId2,
        functionName
      }))
    }
  ];
}
function queryFn7({ abis }) {
  return ({
    queryKey: [{ allowFailure, blockNumber, blockTag, contracts: contracts_ }]
  }) => {
    const contracts = contracts_.map((contract, i) => ({
      ...contract,
      abi: abis[i]
    }));
    return readContracts2({
      allowFailure,
      contracts,
      blockNumber,
      blockTag
    });
  };
}
function useContractReads({
  allowFailure: allowFailure_,
  blockNumber: blockNumberOverride,
  blockTag,
  cacheOnBlock = false,
  cacheTime,
  contracts,
  enabled: enabled_ = true,
  isDataEqual,
  keepPreviousData,
  onError,
  onSettled,
  onSuccess,
  scopeKey,
  select,
  staleTime,
  structuralSharing = (oldData, newData) => deepEqual4(oldData, newData) ? oldData : replaceEqualDeep3(oldData, newData),
  suspense,
  watch
} = {}) {
  const allowFailure = allowFailure_ ?? true;
  const { data: blockNumber_ } = useBlockNumber({
    enabled: watch || cacheOnBlock,
    watch
  });
  const chainId = useChainId();
  const blockNumber = blockNumberOverride ?? blockNumber_;
  const queryKey_ = React17.useMemo(
    () => queryKey7({
      allowFailure,
      blockNumber: cacheOnBlock ? blockNumber : void 0,
      blockTag,
      chainId,
      contracts,
      scopeKey
    }),
    [
      allowFailure,
      blockNumber,
      blockTag,
      cacheOnBlock,
      chainId,
      scopeKey,
      contracts
    ]
  );
  const enabled = React17.useMemo(() => {
    let enabled2 = Boolean(
      enabled_ && contracts?.every(
        (x) => x.abi && x.address && x.functionName
      )
    );
    if (cacheOnBlock)
      enabled2 = Boolean(enabled2 && blockNumber);
    return enabled2;
  }, [blockNumber, cacheOnBlock, contracts, enabled_]);
  useInvalidateOnBlock({
    enabled: Boolean(enabled && watch && !cacheOnBlock),
    queryKey: queryKey_
  });
  const abis = (contracts ?? []).map(
    ({ abi }) => abi
  );
  return useQuery(queryKey_, queryFn7({ abis }), {
    cacheTime,
    enabled,
    isDataEqual,
    keepPreviousData,
    staleTime,
    select,
    structuralSharing,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}

// src/hooks/contracts/useContractWrite.ts
import { writeContract } from "@wagmi/core";
import { getSendTransactionParameters } from "@wagmi/core/internal";
import * as React18 from "react";
function mutationKey6({
  address,
  abi,
  functionName,
  ...config
}) {
  const {
    args,
    accessList,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
    request,
    value
  } = config;
  return [
    {
      entity: "writeContract",
      address,
      args,
      abi,
      accessList,
      functionName,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      request,
      value
    }
  ];
}
function mutationFn6(config) {
  if (config.mode === "prepared") {
    if (!config.request)
      throw new Error("request is required");
    return writeContract({
      mode: "prepared",
      ...config.request
    });
  }
  if (!config.address)
    throw new Error("address is required");
  if (!config.abi)
    throw new Error("abi is required");
  if (!config.functionName)
    throw new Error("functionName is required");
  return writeContract({
    address: config.address,
    args: config.args,
    chainId: config.chainId,
    abi: config.abi,
    functionName: config.functionName,
    accessList: config.accessList,
    gas: config.gas,
    gasPrice: config.gasPrice,
    maxFeePerGas: config.maxFeePerGas,
    maxPriorityFeePerGas: config.maxPriorityFeePerGas,
    nonce: config.nonce,
    value: config.value
  });
}
function useContractWrite(config) {
  const { address, abi, args, chainId, functionName, mode, request } = config;
  const {
    accessList,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
    value
  } = getSendTransactionParameters(config);
  const {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
    variables
  } = useMutation(
    mutationKey6({
      address,
      abi,
      functionName,
      chainId,
      mode,
      args,
      accessList,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      request,
      value
    }),
    mutationFn6,
    {
      onError: config.onError,
      onMutate: config.onMutate,
      onSettled: config.onSettled,
      onSuccess: config.onSuccess
    }
  );
  const write = React18.useMemo(() => {
    if (config.mode === "prepared") {
      if (!request)
        return void 0;
      return () => mutate({
        mode: "prepared",
        request: config.request,
        chainId: config.chainId
      });
    }
    return (overrideConfig) => mutate({
      address,
      args,
      abi,
      functionName,
      chainId,
      accessList,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      value,
      ...overrideConfig
    });
  }, [
    accessList,
    abi,
    address,
    args,
    chainId,
    config.chainId,
    config.mode,
    config.request,
    functionName,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    mutate,
    nonce,
    request,
    value
  ]);
  const writeAsync = React18.useMemo(() => {
    if (config.mode === "prepared") {
      if (!request)
        return void 0;
      return () => mutateAsync({
        mode: "prepared",
        request: config.request
      });
    }
    return (overrideConfig) => mutateAsync({
      address,
      args,
      abi,
      chainId,
      functionName,
      accessList,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      value,
      ...overrideConfig
    });
  }, [
    accessList,
    abi,
    address,
    args,
    chainId,
    config.mode,
    config.request,
    functionName,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    mutateAsync,
    nonce,
    request,
    value
  ]);
  return {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    reset,
    status,
    variables,
    write,
    writeAsync
  };
}

// src/hooks/contracts/usePrepareContractWrite.ts
import { prepareWriteContract } from "@wagmi/core";
import { getCallParameters } from "@wagmi/core/internal";
function queryKey8({
  accessList,
  activeChainId,
  args,
  address,
  blockNumber,
  blockTag,
  chainId,
  functionName,
  gas,
  gasPrice,
  maxFeePerGas,
  maxPriorityFeePerGas,
  nonce,
  scopeKey,
  walletClientAddress,
  value
}) {
  return [
    {
      entity: "prepareContractTransaction",
      accessList,
      activeChainId,
      address,
      args,
      blockNumber,
      blockTag,
      chainId,
      functionName,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      scopeKey,
      walletClientAddress,
      value
    }
  ];
}
function queryFn8({
  abi,
  walletClient
}) {
  return ({
    queryKey: [
      {
        accessList,
        args,
        address,
        blockNumber,
        blockTag,
        chainId,
        functionName,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        value
      }
    ]
  }) => {
    if (!abi)
      throw new Error("abi is required");
    if (!address)
      throw new Error("address is required");
    if (!functionName)
      throw new Error("functionName is required");
    return prepareWriteContract({
      abi,
      accessList,
      args,
      address,
      blockNumber,
      blockTag,
      chainId,
      functionName,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      walletClient,
      value
    });
  };
}
function usePrepareContractWrite({
  address,
  abi,
  functionName,
  chainId,
  args,
  cacheTime,
  enabled = true,
  scopeKey,
  staleTime,
  suspense,
  onError,
  onSettled,
  onSuccess,
  ...config
} = {}) {
  const { chain: activeChain } = useNetwork();
  const { data: walletClient } = useWalletClient({ chainId });
  const {
    accessList,
    blockNumber,
    blockTag,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
    value
  } = getCallParameters(config);
  const prepareContractWriteQuery = useQuery(
    queryKey8({
      accessList,
      activeChainId: activeChain?.id,
      address,
      args,
      blockNumber,
      blockTag,
      chainId,
      functionName,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      scopeKey,
      walletClientAddress: walletClient?.account.address,
      value
    }),
    queryFn8({
      abi,
      walletClient
    }),
    {
      cacheTime,
      enabled: Boolean(
        enabled && abi && address && functionName && walletClient
      ),
      staleTime,
      suspense,
      onError,
      onSettled,
      onSuccess
    }
  );
  return Object.assign(prepareContractWriteQuery, {
    config: {
      chainId,
      mode: "prepared",
      request: void 0,
      ...prepareContractWriteQuery.data
    }
  });
}

// src/hooks/contracts/useToken.ts
import { fetchToken } from "@wagmi/core";
function queryKey9({
  address,
  chainId,
  formatUnits,
  scopeKey
}) {
  return [{ entity: "token", address, chainId, formatUnits, scopeKey }];
}
function queryFn9({
  queryKey: [{ address, chainId, formatUnits }]
}) {
  if (!address)
    throw new Error("address is required");
  return fetchToken({ address, chainId, formatUnits });
}
function useToken({
  address,
  chainId: chainId_,
  formatUnits = "ether",
  cacheTime,
  enabled = true,
  scopeKey,
  staleTime = 1e3 * 60 * 60 * 24,
  suspense,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  return useQuery(
    queryKey9({ address, chainId, formatUnits, scopeKey }),
    queryFn9,
    {
      cacheTime,
      enabled: Boolean(enabled && address),
      staleTime,
      suspense,
      onError,
      onSettled,
      onSuccess
    }
  );
}

// src/hooks/ens/useEnsAddress.ts
import { fetchEnsAddress } from "@wagmi/core";
function queryKey10({ chainId, name, scopeKey }) {
  return [{ entity: "ensAddress", chainId, name, scopeKey }];
}
function queryFn10({
  queryKey: [{ chainId, name }]
}) {
  if (!name)
    throw new Error("name is required");
  return fetchEnsAddress({ chainId, name });
}
function useEnsAddress({
  cacheTime,
  chainId: chainId_,
  enabled = true,
  name,
  scopeKey,
  staleTime = 1e3 * 60 * 60 * 24,
  suspense,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  return useQuery(queryKey10({ chainId, name, scopeKey }), queryFn10, {
    cacheTime,
    enabled: Boolean(enabled && chainId && name),
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}

// src/hooks/ens/useEnsAvatar.ts
import { fetchEnsAvatar } from "@wagmi/core";
function queryKey11({ name, chainId, scopeKey }) {
  return [{ entity: "ensAvatar", name, chainId, scopeKey }];
}
function queryFn11({
  queryKey: [{ name, chainId }]
}) {
  if (!name)
    throw new Error("name is required");
  return fetchEnsAvatar({ name, chainId });
}
function useEnsAvatar({
  cacheTime,
  chainId: chainId_,
  enabled = true,
  name,
  scopeKey,
  staleTime = 1e3 * 60 * 60 * 24,
  suspense,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  return useQuery(queryKey11({ name, chainId, scopeKey }), queryFn11, {
    cacheTime,
    enabled: Boolean(enabled && name && chainId),
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}

// src/hooks/ens/useEnsName.ts
import { fetchEnsName } from "@wagmi/core";
function queryKey12({
  address,
  chainId,
  scopeKey
}) {
  return [{ entity: "ensName", address, chainId, scopeKey }];
}
function queryFn12({
  queryKey: [{ address, chainId }]
}) {
  if (!address)
    throw new Error("address is required");
  return fetchEnsName({ address, chainId });
}
function useEnsName({
  address,
  cacheTime,
  chainId: chainId_,
  enabled = true,
  scopeKey,
  staleTime = 1e3 * 60 * 60 * 24,
  suspense,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  return useQuery(queryKey12({ address, chainId, scopeKey }), queryFn12, {
    cacheTime,
    enabled: Boolean(enabled && address && chainId),
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}

// src/hooks/ens/useEnsResolver.ts
import { fetchEnsResolver } from "@wagmi/core";
function queryKey13({ chainId, name, scopeKey }) {
  return [
    { entity: "ensResolver", chainId, name, scopeKey, persist: false }
  ];
}
function queryFn13({
  queryKey: [{ chainId, name }]
}) {
  if (!name)
    throw new Error("name is required");
  return fetchEnsResolver({ chainId, name });
}
function useEnsResolver({
  chainId: chainId_,
  name,
  enabled = true,
  scopeKey,
  suspense,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  return useQuery(queryKey13({ chainId, name, scopeKey }), queryFn13, {
    cacheTime: 0,
    enabled: Boolean(enabled && chainId && name),
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}

// src/hooks/transactions/usePrepareSendTransaction.ts
import { prepareSendTransaction } from "@wagmi/core";
function queryKey14({
  accessList,
  account,
  activeChainId,
  chainId,
  data,
  gas,
  gasPrice,
  maxFeePerGas,
  maxPriorityFeePerGas,
  nonce,
  to,
  value,
  scopeKey,
  walletClientAddress
}) {
  return [
    {
      entity: "prepareSendTransaction",
      activeChainId,
      accessList,
      account,
      chainId,
      data,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value,
      scopeKey,
      walletClientAddress
    }
  ];
}
function queryFn14({ walletClient }) {
  return ({
    queryKey: [
      {
        accessList,
        account,
        chainId,
        data,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        to,
        value
      }
    ]
  }) => {
    if (!to)
      throw new Error("to is required");
    return prepareSendTransaction({
      accessList,
      account,
      chainId,
      data,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value,
      walletClient
    });
  };
}
function usePrepareSendTransaction({
  accessList,
  account,
  chainId,
  cacheTime,
  data,
  enabled = true,
  gas,
  gasPrice,
  maxFeePerGas,
  maxPriorityFeePerGas,
  nonce,
  scopeKey,
  staleTime,
  suspense,
  to,
  value,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const { chain: activeChain } = useNetwork();
  const { data: walletClient } = useWalletClient({ chainId });
  const prepareSendTransactionQuery = useQuery(
    queryKey14({
      accessList,
      activeChainId: activeChain?.id,
      account,
      chainId,
      data,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      scopeKey,
      to,
      value,
      walletClientAddress: walletClient?.account.address
    }),
    queryFn14({ walletClient }),
    {
      cacheTime,
      enabled: Boolean(enabled && walletClient && to),
      staleTime,
      suspense,
      onError,
      onSettled,
      onSuccess
    }
  );
  return Object.assign(prepareSendTransactionQuery, {
    config: {
      mode: "prepared",
      ...prepareSendTransactionQuery.isSuccess ? prepareSendTransactionQuery.data : void 0
    }
  });
}

// src/hooks/transactions/useSendTransaction.ts
import { sendTransaction } from "@wagmi/core";
import * as React19 from "react";
var mutationKey7 = (args) => [{ entity: "sendTransaction", ...args }];
var mutationFn7 = ({
  accessList,
  account,
  chainId,
  data,
  gas,
  gasPrice,
  maxFeePerGas,
  maxPriorityFeePerGas,
  mode,
  nonce,
  to,
  value
}) => {
  if (!to)
    throw new Error("to is required.");
  return sendTransaction({
    accessList,
    account,
    chainId,
    data,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    mode,
    nonce,
    to,
    value
  });
};
function useSendTransaction({
  accessList,
  account,
  chainId,
  data: data_,
  gas,
  gasPrice,
  maxFeePerGas,
  maxPriorityFeePerGas,
  mode,
  nonce,
  to,
  value,
  onError,
  onMutate,
  onSettled,
  onSuccess
} = {}) {
  const {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
    variables
  } = useMutation(
    mutationKey7({
      accessList,
      account,
      chainId,
      data: data_,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      mode,
      nonce,
      to,
      value
    }),
    mutationFn7,
    {
      onError,
      onMutate,
      onSettled,
      onSuccess
    }
  );
  const sendTransaction2 = React19.useCallback(
    (args) => mutate({
      chainId,
      mode,
      ...args || {
        accessList,
        account,
        chainId,
        data: data_,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        mode,
        nonce,
        value,
        to
      }
    }),
    [
      accessList,
      account,
      chainId,
      data_,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      mode,
      mutate,
      nonce,
      to,
      value
    ]
  );
  const sendTransactionAsync = React19.useCallback(
    (args) => mutateAsync({
      chainId,
      mode,
      ...args || {
        accessList,
        account,
        chainId,
        data: data_,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        mode,
        nonce,
        value,
        to
      }
    }),
    [
      accessList,
      account,
      chainId,
      data_,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      mode,
      mutateAsync,
      nonce,
      to,
      value
    ]
  );
  return {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    reset,
    sendTransaction: mode === "prepared" && !to ? void 0 : sendTransaction2,
    sendTransactionAsync: mode === "prepared" && !to ? void 0 : sendTransactionAsync,
    status,
    variables
  };
}

// src/hooks/transactions/useTransaction.ts
import { fetchTransaction } from "@wagmi/core";
function queryKey15({ chainId, hash, scopeKey }) {
  return [{ entity: "transaction", chainId, hash, scopeKey }];
}
function queryFn15({
  queryKey: [{ chainId, hash }]
}) {
  if (!hash)
    throw new Error("hash is required");
  return fetchTransaction({ chainId, hash });
}
function useTransaction({
  cacheTime = 0,
  chainId: chainId_,
  enabled = true,
  hash,
  scopeKey,
  staleTime,
  suspense,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  return useQuery(queryKey15({ chainId, hash, scopeKey }), queryFn15, {
    cacheTime,
    enabled: Boolean(enabled && hash),
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}

// src/hooks/transactions/useWaitForTransaction.ts
import { waitForTransaction } from "@wagmi/core";
function queryKey16({
  confirmations,
  chainId,
  hash,
  scopeKey,
  timeout
}) {
  return [
    {
      entity: "waitForTransaction",
      confirmations,
      chainId,
      hash,
      scopeKey,
      timeout
    }
  ];
}
function queryFn16({
  onReplaced
}) {
  return ({
    queryKey: [{ chainId, confirmations, hash, timeout }]
  }) => {
    if (!hash)
      throw new Error("hash is required");
    return waitForTransaction({
      chainId,
      confirmations,
      hash,
      onReplaced,
      timeout
    });
  };
}
function useWaitForTransaction({
  chainId: chainId_,
  confirmations,
  hash,
  timeout,
  cacheTime,
  enabled = true,
  scopeKey,
  staleTime,
  suspense,
  onError,
  onReplaced,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  return useQuery(
    queryKey16({ chainId, confirmations, hash, scopeKey, timeout }),
    queryFn16({ onReplaced }),
    {
      cacheTime,
      enabled: Boolean(enabled && hash),
      staleTime,
      suspense,
      onError,
      onSettled,
      onSuccess
    }
  );
}

// src/hooks/transactions/useWatchPendingTransactions.ts
import * as React20 from "react";
function useWatchPendingTransactions({
  chainId: chainId_,
  enabled = true,
  listener
}) {
  const chainId = useChainId({ chainId: chainId_ });
  const publicClient = usePublicClient({ chainId });
  const webSocketPublicClient = useWebSocketPublicClient({ chainId });
  React20.useEffect(() => {
    if (!enabled)
      return;
    const publicClient_ = webSocketPublicClient ?? publicClient;
    return publicClient_.watchPendingTransactions({
      onTransactions: listener
    });
  }, [enabled, listener, publicClient, webSocketPublicClient]);
}

// src/index.ts
import {
  ChainMismatchError,
  ChainNotConfiguredError,
  Connector,
  ConnectorAlreadyConnectedError,
  ConnectorNotFoundError,
  ConfigChainsNotFound,
  SwitchChainNotSupportedError,
  configureChains,
  createStorage as createStorage2,
  deepEqual as deepEqual5,
  deserialize,
  erc20ABI,
  erc721ABI,
  erc4626ABI,
  mainnet,
  readContracts as readContracts3,
  sepolia,
  serialize
} from "@wagmi/core";
export {
  ChainMismatchError,
  ChainNotConfiguredError,
  ConfigChainsNotFound,
  Connector,
  ConnectorAlreadyConnectedError,
  ConnectorNotFoundError,
  Context,
  SwitchChainNotSupportedError,
  WagmiConfig,
  configureChains,
  createConfig,
  createStorage2 as createStorage,
  deepEqual5 as deepEqual,
  deserialize,
  erc20ABI,
  erc4626ABI,
  erc721ABI,
  mainnet,
  paginatedIndexesConfig,
  readContracts3 as readContracts,
  sepolia,
  serialize,
  useAccount,
  useBalance,
  useBlockNumber,
  useChainId,
  useConfig,
  useConnect,
  useContractEvent,
  useContractInfiniteReads,
  useContractRead,
  useContractReads,
  useContractWrite,
  useDisconnect,
  useEnsAddress,
  useEnsAvatar,
  useEnsName,
  useEnsResolver,
  useFeeData,
  useInfiniteQuery,
  useMutation,
  useNetwork,
  usePrepareContractWrite,
  usePrepareSendTransaction,
  usePublicClient,
  useQuery,
  useQueryClient2 as useQueryClient,
  useSendTransaction,
  useSignMessage,
  useSignTypedData,
  useSwitchNetwork,
  useToken,
  useTransaction,
  useWaitForTransaction,
  useWalletClient,
  useWatchPendingTransactions,
  useWebSocketPublicClient
};
