import { Launcher, LauncherDependencies, Class } from '@chaika/application';
import { ICommand } from '../interfaces/ICommand';
interface Dependencies extends LauncherDependencies {
    commands: Class<ICommand>[];
}
export declare class CommandLauncher extends Launcher {
    private commands;
    constructor({ commands, context }: Dependencies);
    start(): Promise<void>;
}
export {};
