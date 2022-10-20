import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

// Unicamente indico que el provider es el users.service

@Module({
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule { }
