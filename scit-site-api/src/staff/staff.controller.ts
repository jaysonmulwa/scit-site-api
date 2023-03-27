import { Controller, Get } from '@nestjs/common';
import { StaffService } from './staff.service';

@Controller()
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get()
  getHello(): string {
    return this.staffService.getHello();
  }
}
