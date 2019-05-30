import { Launcher } from "@chaika/application";
import { ICommand } from "../interfaces/ICommand";
export declare class CommandLauncher extends Launcher {
    private commands;
    constructor(commands: ICommand[]);
    start(): void;
}
