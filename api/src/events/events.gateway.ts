import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
@WebSocketGateway({ path: '/api/socket.io' })
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  changeTotalCnt(cnt) {
    this.server.emit('totalVotes', cnt);
  }
  changeStats(newStats) {
    this.server.emit('voteStats', newStats);
  }
}
