import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Team {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
