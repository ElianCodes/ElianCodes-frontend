import { Controller, Get, Param } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
    @Get()
    findAll(): string {
        return 'Getting all projects'
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Getting Project ${id}`
    }
}
