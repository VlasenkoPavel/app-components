import { Launcher } from "@chaika/application";
import { Command } from "../interfaces/ICommand";

export class CommandLauncher extends Launcher {

    private commands: Command[];

    constructor(commands: Command[]) {
        super();
        this.commands = commands;
    }

    public start(): void {
        for (const command of this.commands) {
            command.execute();
        }
    }

}
