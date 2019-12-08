import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    
    @Get()
    getUser(): string {
        return this.userService.getUser();
    }

    @Post()
    postUser(): string {
        return 'Post';
    }

    @Put()
    putUser(): string {
        return 'Put';
    }
    
    @Delete()
    deleteUser():string{
        return 'Delete'
    }
}
