import { Launcher } from '@chaika/application';

export class ExpressLauncher extends Launcher {

    public start(): void {
        process.on('SIGINT', () => process.exit());
        process.on('SIGTERM', () => process.exit());
        process.on('SIGUSR1', () => process.exit());
        process.on('SIGUSR2', () => process.exit());
        process.on('uncaughtException', () => process.exit());
        process.on('unhandledRejection', () => process.exit());
        process.on('exit', () => this.stop());
    }

}
