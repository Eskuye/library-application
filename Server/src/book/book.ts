export class Book {
    id: Number;
    title: string;
    isbn: string
    author: string;
    genre: string;
    rented: boolean;
    lastRentedBy: string;
    uploadedAt: Date;


    constructor(id: number, title: string, isbn: string, author: string, genre: string, lastRentedBy: string, uploadedAt: Date) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.author = author;
        this.genre = genre;
        this.rented = false;
        this.lastRentedBy = lastRentedBy;
        this.uploadedAt = uploadedAt;
    }
}

export interface BookUploadRequest {
    title: string;
    author: string;
    genre: string;
}


export interface RentBookRequest {
    isbn: string;
    email: string;
}