import { Module } from '@nestjs/common';
import { UserController } from './user/userController';
import { UserService } from './user/userService';
import { connect } from 'mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { secretKey } from './security/jwt/jwtUtil';
import { JwtStrategy } from './security/jwt/jwtStrategy';
import { BookService } from './book/bookService';
import { BookController } from './book/bookController';

connect('mongodb+srv://admin:F1VexRvC6fBTKVRH@cluster0.87gwp.mongodb.net/mernChallenge?retryWrites=true&w=majority');

@Module({
  imports: [PassportModule, JwtModule.register({
    secret: secretKey,
    signOptions: {
      expiresIn: '60s'
    }
  })],
  controllers: [UserController, BookController],
  providers: [UserService, JwtStrategy, BookService],
})
export class AppModule {}
