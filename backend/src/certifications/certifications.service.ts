import { Injectable } from '@nestjs/common';

@Injectable()
export class CertificationsService {
    findAll(): string {
        return 'Getting all Certifications'
    }

    findOne(id: number): string {
        return `Getting Certification ${id}`
    }
}
