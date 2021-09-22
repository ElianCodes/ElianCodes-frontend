import { Controller, Get, Param } from '@nestjs/common';
import { CertificationsService } from './certifications.service';

@Controller('certifications')
export class CertificationsController {
    constructor(private readonly certifications: CertificationsService) {}

    @Get()
    findAll(): string {
        return this.certifications.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id): string {
        return this.certifications.findOne(id);
    }
}
