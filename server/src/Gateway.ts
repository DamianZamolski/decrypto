import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
} from '@nestjs/websockets';
import { IncomingMessage } from 'http';
import { WebSocket } from 'ws';
import * as cookie from 'cookie';

@WebSocketGateway({ path: '/ws' })
export class Gateway
  implements OnGatewayConnection<WebSocket>, OnGatewayDisconnect<WebSocket>
{
  private readonly logger = new Logger(Gateway.name);

  private readonly clients = new Map<WebSocket, string>();

  handleConnection(client: WebSocket, request: IncomingMessage) {
    const cookieHeader = request.headers.cookie;

    if (cookieHeader) {
      const { sessionId } = cookie.parse(cookieHeader);

      if (sessionId) {
        this.logger.log(`client '${sessionId}' connected`);
        this.clients.set(client, sessionId);

        client.on('message', (data: string | Buffer) => {
          const message = Buffer.isBuffer(data) ? data.toString('utf-8') : data;
          this.logger.log(message);
        });

        return;
      }
    }

    this.logger.warn(`client without id connected`);
    //client.close(1000, 'id cookie missing');
  }

  handleDisconnect(client: WebSocket) {
    let clientId = this.clients.get(client);
    clientId = clientId ? `'${clientId}'` : 'without id';
    this.logger.log({ msg: `client ${clientId} disconnected` });
  }
}
