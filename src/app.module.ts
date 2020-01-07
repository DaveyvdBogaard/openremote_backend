import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [LocationModule,
    MongooseModule.forRoot('mongodb+srv://daveyvdbogaard:december2019@cluster-qhdmu.mongodb.net/crowdcontrol?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
