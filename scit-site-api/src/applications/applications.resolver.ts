import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { Application } from "./models/application.model";
import { ApplicationService } from "./applications.service";
import { NewApplicationInput } from "./dto/new-application.input";
import { EditApplicationInput } from "./dto/edit-application.input";
import { ApplicationArgs } from "./dto/application.args";

@Resolver(of => Application)
export class ApplicationResolver {
    constructor(private readonly applicationService: ApplicationService) {}

    //Return one application by id
    @Query(returns => Application)
    async application(@Args('id') id: number) {
        return await this.applicationService.findOneById(id);
    }

    //Return all applications
    @Query(returns => [Application])
    async applications(@Args() applicationArgs: ApplicationArgs) {
        return await this.applicationService.findAll();
    }

    //Create a new application
    @Mutation(returns => Application)
    async createApplication(@Args('data') data: NewApplicationInput) {
        return await this.applicationService.create(data);
    }

    //Delete a application
    @Mutation(returns => Boolean)
    async deleteApplication(@Args('id') id: string) {
        return await this.applicationService.remove(id);
    }

    // Edit a application
    @Mutation(returns => Application)
    async editApplication(@Args('id') id: number, @Args('data') data: EditApplicationInput) {
        return await this.applicationService.edit(id, data);
    }

}