import {
  BadRequestException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventsGateway } from 'src/events/events.gateway';
import { Repository } from 'typeorm';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { Vote } from './entities/vote.entity';
import voteAnswers from './vote.answers';

@Injectable()
export class VoteService {
  constructor(
    @InjectRepository(Vote)
    private voteRepository: Repository<Vote>,
    private eventsGateway: EventsGateway,
  ) {}

  async create(createVoteDto: CreateVoteDto, ip: string) {
    // validation
    const isExists = await this.voteRepository.find({ userIp: ip });
    // if (isExists.length)
    //   throw new UnprocessableEntityException('Such answer already exists');
    const answersToCreate = createVoteDto.answers.map((answer) => ({ answer }));
    const userIp = ip;
    const toSave = this.voteRepository.create({
      answers: answersToCreate,
      userIp,
    });
    const here = await this.voteRepository.save(toSave);
    this.eventsGateway.changeTotalCnt(await this.getTotalCount());
    this.eventsGateway.changeStats(await this.getStats());
    return 'ok';
  }

  findAll() {
    return this.voteRepository.find();
  }
  async removeById(id: number) {
    const toRemove = await this.voteRepository.findOne({ id });
    if (!toRemove) throw new BadRequestException('Such item not found');
    await this.voteRepository.remove(toRemove);
    return 'ok';
  }
  getAnswers() {
    return voteAnswers;
  }
  async getStats() {
    const total = await this.getTotalCount();
    const answers = this.getAnswers();
    const resolvers = answers.map(async (answer) => {
      const itemsWithAnswerCnt = await this.voteRepository
        .createQueryBuilder('vote')
        .leftJoinAndSelect('vote.answers', 'answer')
        .where('answer.answer = :answer', { answer: answer.id })
        .getCount();
      return { id: answer.id, cnt: itemsWithAnswerCnt };
    });
    const stats = await Promise.all(resolvers);
    return { total, stats };
  }

  async getTotalCount() {
    const cnt = await this.voteRepository.count();
    return cnt;
  }

  async getUserAnswers(ip: string) {
    const userVote = await this.voteRepository.findOne({ userIp: ip });
    return userVote?.answers;
  }
}
