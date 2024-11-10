import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Database implements OnModuleDestroy {
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

  async query(text: string, params?: unknown[]) {
    return this.pool.query<Record<string, unknown>>(text, params);
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}
