import { Controller, Post, Req } from '@nestjs/common';
import { UserService } from './userService';
import { Request } from 'express';
import { HttpResponse } from 'src/models/httpResponse';
import { SignInRequest, SignUpRequest } from './user';

@Controller('/user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('/register')
    registerUser(@Req() request: Request): Promise<HttpResponse> {

        const signUpRequest: SignUpRequest = request.body;

        return this.userService.registerUser(signUpRequest)
    }


    @Post('/sign-in')
    signUp(@Req() request: Request): Promise<HttpResponse> {
        const signInRequest: SignInRequest = request.body;
        return this.userService.signIn(signInRequest);
    }
}