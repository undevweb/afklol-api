import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import { LolModule } from './lol/lol.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env'
        }),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.DATABASE_NAME,
            entities: [
                "dist/**/database/entities/*.entity{.ts,.js}"
            ],
        }),
        LolModule,
        //CacheModule.register(),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
