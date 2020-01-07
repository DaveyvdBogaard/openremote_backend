import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Location } from './models/location.interface';
import { EventDispatcher } from 'ste-events';

@Injectable()
export class LocationService {
    constructor(@InjectModel('positions') private readonly locationModel: Model<Location>) {
        const changeStream = this.locationModel.watch().on('change', change => {
            this.onPositionDataChangedDispatcher.dispatch(this, change);
        });
    }

    private onPositionDataChangedDispatcher = new EventDispatcher<LocationService, any>();
    public get onPositionDataChanged() {
        return this.onPositionDataChangedDispatcher.asEvent();
    }


    async findAll(): Promise<Location[]> {
        return await this.locationModel.find().exec();
    }
}
