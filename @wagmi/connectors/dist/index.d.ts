export { C as Connector, a as ConnectorData, b as ConnectorEvents, W as WindowProvider } from './base-5cce2182.js';
import '@wagmi/chains';
import 'abitype';
import 'eventemitter3';
import 'viem';

declare class ChainNotConfiguredForConnectorError extends Error {
    name: string;
    constructor({ chainId, connectorId, }: {
        chainId: number;
        connectorId?: string;
    });
}
declare class ConnectorNotFoundError extends Error {
    name: string;
    message: string;
}

export { ChainNotConfiguredForConnectorError, ConnectorNotFoundError };
