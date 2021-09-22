import { Controller, Get, Param } from '@nestjs/common';
import { Certification } from 'models/interfaces/Certification';
import { CertificationsService } from './certifications.service';

@Controller('certifications')
export class CertificationsController {
    constructor(private readonly certifications: CertificationsService) {}

    @Get()
    async findAll(): Promise<Certification[]> {
        return this.certifications.findAll();
    }
    
    @Get(':id')
    async findOne(@Param('id') id): Promise<Certification> {
        return this.certifications.findOne(id);
    }
}
