import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationGateway } from './location.gateway';
import { LocationService } from './location.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationSchema } from 'src/location/models/location.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'positions', schema: LocationSchema }])],
  controllers: [LocationController],
  providers: [LocationGateway, LocationService ]
})
export class LocationModule {}
