import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: AppService) {}
    
    @Get()
    getNews():string {
        return this.newsService.getNews();
    }

    @Post()
    postNews(): string {
        return 'Post';
    }

    @Put()
    putNews(): string {
        return 'Put'
    }

    @Delete()
    deleteNew():string {
        return 'Delete'
    }
}
