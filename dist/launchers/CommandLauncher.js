"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("@chaika/application");
class CommandLauncher extends application_1.Launcher {
    constructor({ commands, context }) {
        super({ context });
        this.commandClasses = commands || [];
    }
    async start() {
        process.on('exit', () => this.onExit());
        await Promise.all(this.commandClasses.map(command => new command(this.context).execute()));
        this.onExit();
    }
}
exports.CommandLauncher = CommandLauncher;
