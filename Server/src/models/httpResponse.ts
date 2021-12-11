import { HttpStatus } from "@nestjs/common";

export class HttpResponse {
    response: Object;
    status: HttpStatus;


    constructor(response: Object, status: HttpStatus){
        this.response = response;
        this.status = status;
    }
}