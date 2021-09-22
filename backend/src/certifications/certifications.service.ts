import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Certification } from 'models/interfaces/Certification'

@Injectable()
export class CertificationsService {
    constructor(@InjectModel('Certification') private readonly certificationModel: Model<Certification>) {}
    
    async findAll(): Promise<Certification[]> {
        return await this.certificationModel.find();
    }

    async findOne(id: string): Promise<Certification> {
        return await this.certificationModel.findOne({ _id: id });
    }
}
