import { Launcher, LauncherDependencies } from '@chaika/application';
import { ICommand } from '../interfaces/ICommand';

interface Dependencies extends LauncherDependencies {
    commands: ICommand[];
}

export class CommandLauncher extends Launcher {

    private commands: ICommand[];

    constructor({ commands, context }: Dependencies) {
        super({ context });
        this.commands = commands || [];
    }

    public async start(): Promise<void> {
        process.on('exit', () => this.onExit());

        await Promise.all(
            this.commands.map(command => command.execute())
        );

        this.onExit();
    }

}
