import { Controller, Get, Param } from '@nestjs/common';
import { CertificationGroup } from 'models/interfaces/CertificationGroups';
import { CertificationgroupsService } from './certificationgroups.service';

@Controller('certificationgroups')
export class CertificationgroupsController {
    constructor(private readonly groupsService: CertificationgroupsService) {}

    @Get()
    async findAll(): Promise<CertificationGroup[]> {
        return await this.groupsService.findAll()
    }

    @Get(':title')
    async findByTitle(@Param('title') title: string): Promise<CertificationGroup> {
        return await this.groupsService.findByTitle(title)
    }
}
