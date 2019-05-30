import { Connection, createConnection, Logger } from 'typeorm';
import { PostgresConfig } from '@chaika/config';
import { Component } from '@chaika/application';

interface Dependencies {
    postgresConfig: PostgresConfig;
    typeOrmLogger?: Logger;
}

export class TypeOrmConnector extends Component {
    private config: PostgresConfig;
    private connection!: Connection;
    private logger?: Logger;

    constructor({ postgresConfig, typeOrmLogger }: Dependencies) {
        super();
        this.config = postgresConfig;
        this.logger = typeOrmLogger;
    }

    public async init(): Promise<void> {
        this.connection = await createConnection({
            ...this.config,
            logger: this.logger
        });
    }

    public async dispose(): Promise<void> {
        await this.connection.close();
    }
}
