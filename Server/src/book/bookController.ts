import { Controller,Get,Post, Req, UseGuards } from "@nestjs/common";
import { HttpResponse } from "src/models/httpResponse";
import { Request } from 'express';
import { RentBookRequest } from "./book";
import { BookService } from "./bookService";
import { JwtGuard } from "src/security/jwt/jwtAuthGuard";

@Controller('/book')
export class BookController {
    constructor(private bookService: BookService){}


    @Post('/rent')
    @UseGuards(JwtGuard)
    rentABook(@Req() request: Request): Promise<HttpResponse>{

        const rentBookRequest: RentBookRequest = request.body;

        return this.bookService.rentBook(rentBookRequest)
    }


    @Get('/all')
    @UseGuards(JwtGuard)
    getAllBooks(@Req() request: Request): Promise<HttpResponse> {
        return this.bookService.getAllBooks();
    }
}