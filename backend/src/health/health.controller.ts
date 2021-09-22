import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
    @Get()
    checkHealth(): string {
        return 'Health seems fine'
    }
}
