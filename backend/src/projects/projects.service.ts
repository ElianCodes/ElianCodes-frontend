import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
    findAll(): string {
        return 'Getting all projects'
    }

    findOne(id: number): string {
        return `Getting Project ${id}`
    }
}
