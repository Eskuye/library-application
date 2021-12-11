import { model } from 'mongoose';
import { userSchema, bookSchema } from "./schema";

export const userDocument = model("users", userSchema);

export const bookDocument = model("books", bookSchema);

