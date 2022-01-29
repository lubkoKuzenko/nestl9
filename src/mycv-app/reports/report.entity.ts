import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'reports',
})
export class ReportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: string;
}
