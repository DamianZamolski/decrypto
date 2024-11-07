import { Transform } from 'class-transformer';

export class GetReposQueryDto {
  team?: string;

  branch?: string;

  @Transform(({ value }) => value === 'true')
  url?: boolean;

  @Transform(({ value }) => value === 'true')
  stringify?: boolean;
}
