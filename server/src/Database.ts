import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Database implements OnModuleInit, OnModuleDestroy {
  private readonly pool: Pool;

  constructor(private configService: ConfigService) {
    this.pool = new Pool({
      host: this.configService.get('DATABASE_HOST'),
      port: this.configService.get('DATABASE_PORT'),
      database: this.configService.get('DATABASE_NAME'),
      user: this.configService.get('DATABASE_USER'),
      password: this.configService.get('DATABASE_PASSWORD'),
    });
  }

  async onModuleInit() {
    await this.pool.query(
      `create table if not exists rooms (
        id serial primary key,
        created_at timestamptz default now()
      )`,
    );
  }

  async query(text: string, params?: unknown[]) {
    return this.pool.query<Record<string, unknown>>(text, params);
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}
