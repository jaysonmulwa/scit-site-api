import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { Department } from "./models/departments.model";
import { DepartmentService } from "./departments.service";
import { NewDepartmentInput } from "./dto/new-departments.input";
import { EditDepartmentInput } from "./dto/edit-departments.input";
import { DepartmentArgs } from "./dto/departments.args";

@Resolver(of => Department)
export class DepartmentResolver {
    constructor(private readonly departmentService: DepartmentService) {}

    //Return one department by id
    @Query(returns => Department)
    async department(@Args('id') id: number) {
        return await this.departmentService.findOneById(id);
    }

    //Return all departments
    @Query(returns => [Department])
    async departments(@Args() departmentArgs: DepartmentArgs) {
        return await this.departmentService.findAll();
    }

    //Create a new department
    @Mutation(returns => Department)
    async createDepartment(@Args('data') data: NewDepartmentInput) {
        return await this.departmentService.create(data);
    }

    //Delete a department
    @Mutation(returns => Boolean)
    async deleteDepartment(@Args('id') id: string) {
        return await this.departmentService.remove(id);
    }

    // Edit a department
    @Mutation(returns => Department)
    async editDepartment(@Args('id') id: number, @Args('data') data: EditDepartmentInput) {
        return await this.departmentService.edit(id, data);
    }

}