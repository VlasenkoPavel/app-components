import { Launcher, LauncherDependencies, Class } from '@chaika/application';
import { ICommand } from '../interfaces/ICommand';

interface Dependencies extends LauncherDependencies {
    commands: Class<ICommand>[];
}

export class CommandLauncher extends Launcher {

    private commandClasses: Class<ICommand>[];

    constructor({ commands, context }: Dependencies) {
        super({ context });
        this.commandClasses = commands || [];
    }

    public async start(): Promise<void> {
        await Promise.all(
            this.commandClasses.map(command => new command(this.context).execute())
        );
    }

}
