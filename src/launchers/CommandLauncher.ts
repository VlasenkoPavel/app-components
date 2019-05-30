import { Launcher } from "@chaika/application";
import { ICommand } from "../interfaces/ICommand";

export class CommandLauncher extends Launcher {

    private commands: ICommand[];

    constructor(commands: ICommand[]) {
        super();
        this.commands = commands;
    }

    public start(): void {
        for (const command of this.commands) {
            command.execute();
        }
    }

}
