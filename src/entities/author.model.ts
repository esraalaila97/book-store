import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('author')
export class Author {
  @PrimaryGeneratedColumn({
      name: 'id',
      type: 'int',
    })
    id: number;
    @Column({
      name: 'name',
      type: 'varchar',
      length: 255,
    })
    name: string;

}
