import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Vote } from './vote.entity';

@Entity()
export class VoteAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  answer: string;

  @ManyToOne(() => Vote, (vote) => vote.answers, { onDelete: 'CASCADE' })
  vote: Vote;
}
