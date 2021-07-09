import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { VoteService } from './vote.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { RealIP } from 'nestjs-real-ip';
import { Request } from 'express';
@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post()
  create(@Body() createVoteDto: CreateVoteDto, @RealIP() ip: string) {
    return this.voteService.create(createVoteDto, ip);
  }
  @Get()
  findAll() {
    return this.voteService.findAll();
  }

  @Get('answers')
  getAnswers(@RealIP() ip: string, @Req() req: Request) {
    console.log('ip - ', ip, '\n');
    return this.voteService.getAnswers();
  }

  @Get('total')
  async totalCount() {
    const total = await this.voteService.getTotalCount();

    return { total };
  }

  @Get('stats')
  async getStats() {
    return this.voteService.getStats();
  }

  @Get('current')
  async userVote(@RealIP() ip: string) {
    const answers = await this.voteService.getUserAnswers(ip);
    return { answers: answers || [] };
  }

  // for test
  @Delete(':id')
  removeVote(@Param('id') id: number) {
    this.voteService.removeById(id);
  }
}
