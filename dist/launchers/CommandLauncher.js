"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("@chaika/application");
class CommandLauncher extends application_1.Launcher {
    constructor({ commands, context }) {
        super({ context });
        this.commandClasses = commands || [];
    }
    async start() {
        await Promise.all(this.commandClasses.map(command => new command(this.context).execute()));
    }
}
exports.CommandLauncher = CommandLauncher;
