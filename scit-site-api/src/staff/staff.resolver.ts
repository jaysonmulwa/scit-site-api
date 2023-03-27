import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { StaffService } from './staff.service';
import { Staff } from './models/staff.model';
import { StaffArgs } from './dto/staff.args';
import { NewStaffInput } from './dto/new-staff.input';
import { EditStaffInput } from './dto/edit-staff.input';


@Resolver(of => Staff)
export class StaffResolver {
    constructor(private readonly staffService: StaffService) {}

    //Return one staff member
    @Query(returns => Staff)
    async staff(@Args('id') id: number) {
        const staff = await this.staffService.findOneById(id);
        if (!staff) {
            throw new NotFoundException(id);
        }
        return staff;
    }

    //Return all staff members
    @Query(returns => [Staff])
    async staffs(@Args() staffArgs: StaffArgs) {
        const staff = await this.staffService.findAll(staffArgs);
        return staff;
    }

    //Create a new staff member
    @Mutation(returns => Staff)
    async createStaff(@Args('data') data: NewStaffInput) {
        const staff = await this.staffService.create(data);
        return staff;
    }

    //Delete a staff member
    @Mutation(returns => Boolean)
    async deleteStaff(@Args('id') id: string) {
        return await this.staffService.remove(id);
    }

    // Edit a staff member
    @Mutation(returns => Staff)
    async editStaff(@Args('id') id: number, @Args('data') data: EditStaffInput) {
        return await this.staffService.edit(id, data);
    }
}