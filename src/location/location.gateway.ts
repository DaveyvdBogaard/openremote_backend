import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Client, Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { LocationService } from './location.service';

@WebSocketGateway()
export class LocationGateway {

  constructor(private locationService: LocationService) {

    this.locationService.onPositionDataChanged.subscribe((sender, location) => {
      Logger.log('position data changed, broadcasting...');
      this.server.emit('newData', location.fullDocument);
    });

  }

  @WebSocketServer()
  server: Server;

  handleConnection(client: Client) {
    Logger.log('Client ' + client.id + ' connected');
  }

  handleDisconnect(client: Client) {
    Logger.log('Client ' + client.id + ' disconnected');
  }

}
