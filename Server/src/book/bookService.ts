import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { HttpResponse } from 'src/models/httpResponse'
import { bookDocument } from 'src/models/mongoose/document'
import { RentBookRequest } from './book';

@Injectable()
export class BookService {


    async rentBook(rentBookRequest: RentBookRequest): Promise<HttpResponse>{
        let message = "";

        const { isbn, email } = rentBookRequest;        
        if(!isbn || !email) {
            throw new HttpException("Invalid request", HttpStatus.BAD_REQUEST);
        }

        const query = { isbn: isbn }
        const newValues = [{$set: {rented: true, lastRentedBy: email}}]

        await bookDocument.updateOne(query, newValues
        ).then(async (response) => {
            message = `${isbn} rented`;
        });

        
        return new HttpResponse(message, HttpStatus.ACCEPTED)
    }


    async getAllBooks(): Promise<HttpResponse> {

        let books = null;

        await bookDocument.find().then((data)=>{
            books = data;
        })


        return new HttpResponse(books, HttpStatus.OK);
    }
}