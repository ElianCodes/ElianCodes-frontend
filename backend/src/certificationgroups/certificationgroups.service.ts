import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CertificationGroup } from 'models/interfaces/CertificationGroups';
import { Model } from 'mongoose';

@Injectable()
export class CertificationgroupsService {
    constructor(@InjectModel('CertificationGroups') private readonly groups: Model<CertificationGroup>) {}

    async findAll(): Promise<CertificationGroup[]> {
        return await this.groups.find().populate('certifications')
    }

    async findByTitle(title: string): Promise<CertificationGroup> {
        const group = await this.groups.findOne({ title: title }).populate('certifications')
        if(!group) {
            throw new NotFoundException
        }
        return group
    }
}
