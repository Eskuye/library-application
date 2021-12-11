import { Schema } from "mongoose";

export const userSchema = new Schema({
    email: 'String',
    firstName: 'String',
    lastName: 'String',
    password: 'String',
    role: 'String',
})

export const bookSchema = new Schema({
    title: 'String',
    isbn: 'String',
    author: 'String',
    genre: 'String',
    rented: 'Boolean',
    uploadedAt: 'Date',
})

