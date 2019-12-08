import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';
import { ServeriveService } from './student/serverive/student.service';

@Module({
  imports: [NewsModule, StudentModule, UserModule],
  controllers: [AppController],
  providers: [AppService, ServeriveService],
})
export class AppModule {}
