"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const application_1 = require("@chaika/application");
class TypeOrmConnector extends application_1.Component {
    constructor({ postgresConfig, typeOrmLogger }) {
        super();
        this.config = postgresConfig;
        this.logger = typeOrmLogger;
    }
    async init() {
        this.connection = await typeorm_1.createConnection(Object.assign({}, this.config, { logger: this.logger }));
    }
    async dispose() {
        await this.connection.close();
    }
}
exports.TypeOrmConnector = TypeOrmConnector;
