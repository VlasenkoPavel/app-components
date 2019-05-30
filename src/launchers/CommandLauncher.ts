import { Launcher } from "@chaika/application";
import { ICommand } from "../interfaces/ICommand";

export class CommandLauncher extends Launcher {

    private commands: ICommand[];

    constructor(commands: ICommand[]) {
        super();
        this.commands = commands;
    }

    public async start(): Promise<void> {
        process.on('exit', () => this.onExit());

        await Promise.all(
            this.commands.map(command => command.execute())
        );

        process.exit(0);
    }

    protected onExit(): void {
        this.context.dispose();
    }

}
