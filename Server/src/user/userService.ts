import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Request } from 'express'
import { validateEmail } from "./userUtil";
import { PasswordsNotMatchingException, UserExistsException } from "src/exception/authExceptions";
import { SignInRequest, SignUpRequest, User } from './user';
import { HttpResponse } from "src/models/httpResponse";
import { userDocument } from "src/models/mongoose/document";
import { encodePassword } from "src/security/passwordUtil";
import { compare } from "bcrypt";
import { AuthObject } from "src/security/AuthObject";
import { generateJwt } from "src/security/jwt/jwtUtil";

@Injectable()
export class UserService {
    
    async registerUser(signUpRequest: SignUpRequest): Promise<HttpResponse> {

        let message: string = "registration failed";

        const { firstName, lastName, email, password, confirmPassword } = signUpRequest;

        if(!firstName || !lastName || !email || !password || !confirmPassword) {
            throw new HttpException("Invalid request", HttpStatus.BAD_REQUEST);
        }

        if(!(password === confirmPassword)){
            throw new PasswordsNotMatchingException();
        }
        
        await userDocument.exists({email: email}).then(async(data) => {
            if(data){
                throw new UserExistsException();
            }
            else{
                const encodedPassword = await encodePassword(password);

                userDocument.create({email: email, firstName: firstName, lastName: lastName, password: encodedPassword, role: 'user'}).then(
                    (data) => {
                        if(data){
                            message = `user ${email} added`;
                        }
                    }
                )
            }
        })
        

        return new HttpResponse(message, HttpStatus.OK);
    }


    async signIn(signInRequest: SignInRequest): Promise<HttpResponse> {


        const { email, password } = signInRequest;

        let authObject: AuthObject = null;

        if(!email || !password) {
            throw new HttpException("Invalid request", HttpStatus.BAD_REQUEST);
        }

        await userDocument.findOne({email: email}).then(async (user) => 
        {

            await compare(password, user.password).then((match)=>{
                if(match){
                    const token = generateJwt(email);
                    authObject = new AuthObject(email, token)
                }
            })

        })

        return new HttpResponse(authObject , HttpStatus.OK);
    }
}