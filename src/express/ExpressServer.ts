import * as express from 'express';
import { Logger } from 'log4js';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Server } from 'http';

import { ServerConfig } from '@chaika/config';
import { Component } from '@chaika/application';
import { isArray } from 'util';
import { IContainer } from '..';

interface Dependencies {
    serverConfig: ServerConfig;
    middlewares: Function[] | Function;
    logger: Logger;
    container?: IContainer;
}

export class ExpressServer extends Component {
    public readonly express: express.Application;
    private logger: Logger;
    private server: Server;
    private config: ServerConfig;

    constructor({ serverConfig, middlewares, logger, container }: Dependencies) {
        super();
        this.logger = logger;
        this.config = serverConfig;

        if (container) {
            useContainer(container);
        }

        this.express = createExpressServer({
            controllers: [this.config.controllers],
            middlewares: isArray(middlewares) ? middlewares : [middlewares],
            defaultErrorHandler: false
        });
    }

    public async init(): Promise<void> {
        const { host, port } = this.config;

        this.server = this.express.listen(port, host)
            .on('listening', this.onListening.bind(this))
            .on('error', error => this.onError.bind(this)(error));

    }

    public getHttpServer(): Server {
        if (!this.server) {
            throw new Error('Server not started');
        }

        return this.server;
    }

    public async dispose(): Promise<void> {
        this.server.close();
    }

    protected onListening(): void {
        const { port, host } = this.config;
        this.logger.info(`Server started at: host ${host} port: ${port}`);
    }

    protected onError(error: Error): void {
        this.logger.error(error);
        process.nextTick(() => process.emit('exit', 1));
    }
}
