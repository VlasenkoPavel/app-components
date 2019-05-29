"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("@chaika/application");
class ExpressLauncher extends application_1.Launcher {
    start() {
        process.on('SIGINT', () => process.exit());
        process.on('SIGTERM', () => process.exit());
        process.on('SIGUSR1', () => process.exit());
        process.on('SIGUSR2', () => process.exit());
        process.on('uncaughtException', () => process.exit());
        process.on('unhandledRejection', () => process.exit());
        process.on('exit', () => this.onExit());
    }
    onExit() {
        this.context.dispose();
    }
}
exports.ExpressLauncher = ExpressLauncher;
