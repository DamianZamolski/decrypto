import { Controller, Get, Logger } from '@nestjs/common';
import { Database } from './Database';
import { z } from 'zod';

@Controller({ path: '/rooms' })
export class RoomsController {
  constructor(
    private readonly logger: Logger,
    private readonly database: Database,
  ) {}

  @Get()
  async getRooms(): Promise<Rooms> {
    const result = await this.database.query('select * from rooms');
    const rooms = roomsSchema.parse(result.rows);

    return rooms;
  }
}

export const roomSchema = z
  .object({
    id: z.number().readonly(),
    created_at: z.date().readonly(),
  })
  .passthrough()
  .readonly();
export const roomsSchema = z.array(roomSchema).readonly();
export type Rooms = z.infer<typeof roomsSchema>;
