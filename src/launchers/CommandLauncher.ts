import { Launcher, LauncherDependencies, Class } from '@chaika/application';
import { ICommand } from '../interfaces/ICommand';

interface Dependencies extends LauncherDependencies {
    commands: Class<ICommand>[];
}

export class CommandLauncher extends Launcher {

    private commands: Class<ICommand>[];

    constructor({ commands, context }: Dependencies) {
        super({ context });
        this.commands = commands || [];
    }

    public async start(): Promise<void> {
        process.on('exit', () => this.onExit());

        await Promise.all(
            this.commands.map(command => new command(this.context).execute())
        );

        this.onExit();
    }

}
