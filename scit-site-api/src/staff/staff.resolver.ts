import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { StaffService } from './staff.service';
import { Staff } from './models/staff.model';


@Resolver(of => Staff)
export class StaffResolver {
    constructor(private readonly staffService: StaffService) {}

    //Return one staff member
    @Query(returns => Staff)
    async staff(id: number) {
        return await this.staffService.findOneById(id);
    }
}