import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
} from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInserted() {
    console.log('inserted Used', this);
  }

  @AfterRemove()
  logRemoved() {
    console.log('Removed Used', this);
  }

  @AfterUpdate()
  logUpdated() {
    console.log('Updated Used', this);
  }
}
