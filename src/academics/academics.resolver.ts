import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { Academics } from "./models/academics.model";
import { AcademicsService } from "./academics.service";
import { NewAcademicsInput } from "./dto/new-academics.input";
import { EditAcademicsInput } from "./dto/edit-academics.input";
import { AcademicsArgs } from "./dto/academics.args";

@Resolver(of => Academics)
export class AcademicsResolver {
    constructor(private readonly academicsService: AcademicsService) {}

    //Return one academics by id
    @Query(returns => Academics)
    async academics(@Args('id') id: number) {
        return await this.academicsService.findOneById(id);
    }

    //Return all academicss
    @Query(returns => [Academics])
    async academicss(@Args() academicsArgs: AcademicsArgs) {
        return await this.academicsService.findAll();
    }

    //Create a new academics
    @Mutation(returns => Academics)
    async createAcademics(@Args('data') data: NewAcademicsInput) {
        return await this.academicsService.create(data);
    }

    //Delete a academics
    @Mutation(returns => Boolean)
    async deleteAcademics(@Args('id') id: string) {
        return await this.academicsService.remove(id);
    }

    // Edit a academics
    @Mutation(returns => Academics)
    async editAcademics(@Args('id') id: number, @Args('data') data: EditAcademicsInput) {
        return await this.academicsService.edit(id, data);
    }

}