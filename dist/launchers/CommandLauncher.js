"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("@chaika/application");
class CommandLauncher extends application_1.Launcher {
    constructor({ commands }) {
        super();
        this.commands = commands || [];
    }
    async start() {
        await Promise.all(this.commands.map(command => command.execute()));
    }
}
exports.CommandLauncher = CommandLauncher;
