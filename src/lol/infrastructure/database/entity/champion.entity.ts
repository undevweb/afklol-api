import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ChampionEntity {

    @PrimaryGeneratedColumn('uuid')
    id?: string;


}
