import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Login } from './models/auth.model';


@Resolver(of => Login)
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(() => String)
    async login(@Args('email') username: string, @Args('password') password: string) {
        return this.authService.signIn(username, password );
    }
}