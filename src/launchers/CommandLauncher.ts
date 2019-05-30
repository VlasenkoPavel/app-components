import { Launcher, LauncherDependencies } from '@chaika/application';
import { ICommand } from '../interfaces/ICommand';

interface Dependencies extends LauncherDependencies {
    commands: ICommand[];
}

export class CommandLauncher extends Launcher {

    private commands: ICommand[];

    constructor({ commands }: Dependencies) {
        super();
        this.commands = commands || [];
    }

    public async start(): Promise<void> {
        await Promise.all(
            this.commands.map(command => command.execute())
        );
    }

}
