import { Logger } from 'typeorm';
import { PostgresConfig } from '@chaika/config';
import { Component } from '@chaika/application';
interface Dependencies {
    postgresConfig: PostgresConfig;
    typeOrmLogger?: Logger;
}
export declare class TypeOrmConnector extends Component {
    private config;
    private connection;
    private logger?;
    constructor({ postgresConfig, typeOrmLogger }: Dependencies);
    init(): Promise<void>;
    dispose(): Promise<void>;
}
export {};
