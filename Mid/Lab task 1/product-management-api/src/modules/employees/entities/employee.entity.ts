import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  // Stored in the database but never sent back in API responses
  @Exclude({ toPlainOnly: true })
  @Column()
  password!: string;

  @Column("int")
  age!: number;

  @Column("int")
  yearsOfWorking!: number;
}
