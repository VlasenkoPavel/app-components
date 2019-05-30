import { Launcher } from "@chaika/application";
import { Command } from "../interfaces/ICommand";
export declare class CommandLauncher extends Launcher {
    private commands;
    constructor(commands: Command[]);
    start(): void;
}
