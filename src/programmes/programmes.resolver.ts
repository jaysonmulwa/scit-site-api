import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ProgrammeService } from './programmes.service';
import { Programme } from './models/programme.model';
import { ProgrammeArgs } from './dto/programme.args';
import { NewProgrammeInput } from './dto/new-programme.input';
import { EditProgrammeInput } from './dto/edit-programme.input';


@Resolver(of => Programme)
export class ProgrammeResolver {
    constructor(private readonly programmeService: ProgrammeService) {}

    //Return one programme by id
    @Query(returns => Programme)
    async programme(@Args('id') id: number) {
        return await this.programmeService.findOneById(id);
    }

    //Return all programmes
    @Query(returns => [Programme])
    async programmes(@Args() programmeArgs: ProgrammeArgs) {
        return await this.programmeService.findAll(programmeArgs);
    }

    //Create a new programme
    @Mutation(returns => Programme)
    async createProgramme(@Args('data') data: NewProgrammeInput) {
        return await this.programmeService.create(data);
    }

    //Delete a programme
    @Mutation(returns => Boolean)
    async deleteProgramme(@Args('id') id: string) {
        return await this.programmeService.remove(id);
    }

    // Edit a programme
    @Mutation(returns => Programme)
    async editProgramme(@Args('id') id: number, @Args('data') data: EditProgrammeInput) {
        return await this.programmeService.edit(id, data);
    }
}