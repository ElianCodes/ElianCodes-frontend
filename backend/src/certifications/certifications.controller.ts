import { Controller, Get, Param } from '@nestjs/common';

@Controller('certifications')
export class CertificationsController {
    @Get()
    findAll(): string {
        return 'Getting all Certifications'
    }
    
    @Get(':id')
    findOne(@Param('id') id): string {
        return `Getting Certification ${id}`
    }
}
