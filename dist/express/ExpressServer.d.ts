/// <reference types="node" />
import * as express from 'express';
import { Logger } from 'log4js';
import { Server } from 'http';
import { ServerConfig } from '@chaika/config';
import { Component } from '@chaika/application';
import { IContainer } from '..';
interface Dependencies {
    serverConfig: ServerConfig;
    middlewares: Function[] | Function;
    logger: Logger;
    container?: IContainer;
}
export declare class ExpressServer extends Component {
    readonly express: express.Application;
    private logger;
    private server;
    private config;
    constructor({ serverConfig, middlewares, logger, container }: Dependencies);
    init(): Promise<void>;
    getHttpServer(): Server;
    dispose(): Promise<void>;
    protected onListening(): void;
    protected onError(error: Error): void;
}
export {};
