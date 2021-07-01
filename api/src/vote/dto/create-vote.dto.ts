import { ArrayNotEmpty, IsArray } from 'class-validator';

export class CreateVoteDto {
  @IsArray()
  @ArrayNotEmpty()
  answers: string[];
}
