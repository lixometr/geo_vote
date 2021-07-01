import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from './entities/vote.entity';
import { VoteAnswer } from './entities/vote-answer.entity';
import { EventsModule } from 'src/events/events.module';

@Module({
  imports: [TypeOrmModule.forFeature([Vote, VoteAnswer]), EventsModule],
  controllers: [VoteController],
  providers: [VoteService],
})
export class VoteModule {}
