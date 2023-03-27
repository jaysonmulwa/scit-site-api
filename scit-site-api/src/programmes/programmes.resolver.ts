import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ProgrammeService } from './programmes.service';
import { Programme } from './models/programme.model';


@Resolver(of => Programme)
export class ProgrammeResolver {
    constructor(private readonly programmeService: ProgrammeService) {}

    //Return one staff member
    @Query(returns => Programme)
    async staff(id: number) {
        return await this.programmeService.findOneById(id);
    }
}