import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { VoteAnswer } from './vote-answer.entity';

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => VoteAnswer, (voteAnswer) => voteAnswer.vote, {
    eager: true,
    cascade: true,
  })
  answers: VoteAnswer[];

  @Column()
  userIp: string;
}
