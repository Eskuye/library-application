export class User {
    id: Number;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    role: string;


    constructor(
        id: number,
        firstName: string,
        lastName: string,
        password: string,
        email: string,
        role: string
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.role = role
    }
}


export interface SignUpRequest{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}


export interface SignInRequest {
    email: string;
    password: string;
}