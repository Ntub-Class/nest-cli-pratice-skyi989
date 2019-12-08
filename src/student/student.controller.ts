import { Controller, Get, Post, Put, Delete} from '@nestjs/common';
import { StudentService } from './serverive/student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    getStudent(): string {
        return this.studentService.getStudent();
    }

    @Post()
    postStudent(): string {
        return 'Post'
    }

    @Put()
    putStudent(): string {
        return 'Put'
    }
 
    @Delete()
    deleteStudent(): string{
        return 'Delete'
    }

}
