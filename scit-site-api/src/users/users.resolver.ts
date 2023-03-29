import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { UserArgs } from './dto/user.args';
import { NewUserInput } from './dto/new-user.input';
import { EditUserInput } from './dto/edit-user.input';


@Resolver(of => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    //Return one users member
    @Query(returns => User)
    async users(@Args('id') id: number) {
        const users = await this.usersService.findOneById(id);
        if (!users) {
            throw new NotFoundException(id);
        }
        return users;
    }

    //Return all users members
    @Query(returns => [User])
    async userss(@Args() usersArgs: UserArgs) {
        const users = await this.usersService.findAll(usersArgs);
        return users;
    }

    //Create a new users member
    @Mutation(returns => User)
    async createUsers(@Args('data') data: NewUserInput) {
        const users = await this.usersService.create(data);
        return users;
    }

    //Delete a users member
    @Mutation(returns => Boolean)
    async deleteUsers(@Args('id') id: string) {
        return await this.usersService.remove(id);
    }

    // Edit a users member
    @Mutation(returns => User)
    async editUsers(@Args('id') id: number, @Args('data') data: EditUserInput) {
        return await this.usersService.edit(id, data);
    }
}