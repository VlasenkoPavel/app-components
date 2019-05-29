"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("@chaika/application");
/**
 * Message formatting code copy-pasted from typeorm/src/logger/FileLogger
 */
class TypeOrmLogger extends application_1.Component {
    constructor({ logger }) {
        super();
        this.logger = logger;
    }
    logQuery(query, parameters) {
        this.logger.debug(`[QUERY]: ${this.getSql(query, parameters)}`);
    }
    logQueryError(error, query, parameters) {
        this.logger.error(`[FAILED QUERY]: ${this.getSql(query, parameters)}`);
        this.logger.error(`[QUERY ERROR]: ${error}`);
    }
    logQuerySlow(time, query, parameters) {
        this.logger.warn(`[SLOW QUERY: ${time} ms]: ${this.getSql(query, parameters)}`);
    }
    logSchemaBuild(message) {
        this.logger.debug(message);
    }
    logMigration(message) {
        this.logger.info(message);
    }
    log(level, message) {
        this.logger.log(level, message);
    }
    getSql(query, parameters) {
        return query + (parameters && parameters.length ? ` -- PARAMETERS: ${JSON.stringify(parameters)}` : '');
    }
}
exports.TypeOrmLogger = TypeOrmLogger;
