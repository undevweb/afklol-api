import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DatabaseRepositories} from "./infrastructure/database/repository";

@Module({
    imports : [
        TypeOrmModule.forFeature([...DatabaseRepositories]),
    ]
})
export class LolModule {}
