"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const application_1 = require("@chaika/application");
const util_1 = require("util");
class ExpressServer extends application_1.Component {
    constructor({ serverConfig, middlewares, logger, container }) {
        super();
        this.logger = logger;
        this.config = serverConfig;
        if (container) {
            routing_controllers_1.useContainer(container);
        }
        this.express = routing_controllers_1.createExpressServer({
            controllers: [this.config.controllers],
            middlewares: util_1.isArray(middlewares) ? middlewares : [middlewares],
            defaultErrorHandler: false
        });
    }
    async init() {
        const { host, port } = this.config;
        this.server = this.express.listen(port, host)
            .on('listening', this.onListening.bind(this))
            .on('error', error => this.onError.bind(this)(error));
    }
    getHttpServer() {
        if (!this.server) {
            throw new Error('Server not started');
        }
        return this.server;
    }
    async dispose() {
        this.server.close();
    }
    onListening() {
        const { port, host } = this.config;
        this.logger.info(`Server started at: host ${host} port: ${port}`);
    }
    onError(error) {
        this.logger.error(error);
        process.nextTick(() => process.emit('exit', 1));
    }
}
exports.ExpressServer = ExpressServer;
