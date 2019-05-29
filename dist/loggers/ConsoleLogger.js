"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleLogger {
    debug(message, ...args) {
        console.log(message, ...args);
    }
    info(message, ...args) {
        console.log(message, ...args);
    }
    warn(message, ...args) {
        console.log(message, ...args);
    }
    error(message, ...args) {
        console.log(message, ...args);
    }
    fatal(message, ...args) {
        console.log(message, ...args);
    }
}
exports.ConsoleLogger = ConsoleLogger;
