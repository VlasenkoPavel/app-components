import { Launcher } from "@chaika/application";

interface Command {
    execute(): Promise<void>;
}

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
