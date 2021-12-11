import { HttpException, HttpStatus } from "@nestjs/common";

export class InvalidEmailFormatException extends HttpException {
    constructor() {
        super('Email is invalid', HttpStatus.FORBIDDEN);
    }
}

export class PasswordsNotMatchingException extends HttpException {
    constructor() {
        super('Passwords do not match', HttpStatus.FORBIDDEN);
    }
}

export class UserExistsException extends HttpException {
    constructor() {
        super('User already exists', HttpStatus.CONFLICT);
    }
}