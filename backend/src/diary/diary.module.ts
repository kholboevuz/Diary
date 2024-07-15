import { Module } from '@nestjs/common';
import { DiaryController } from './diary.controller';
import { BlogService } from './blog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DiarySchema } from './diary.schema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'node:path/win32';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        storage: diskStorage({
          destination: './upload',
          filename: (req, file, callback) => {
            const uniqueSuffix =
              Date.now() + '-' + Math.round(Math.random() * 1e9);
            const extension = extname(file.originalname);
            callback(null, `${uniqueSuffix}${extension}`);
          },
        }),
      }),
    }),

    MongooseModule.forFeature([{ name: 'Diary', schema: DiarySchema }]),
  ],
  controllers: [DiaryController],
  providers: [BlogService],
})
export class DiaryModule {}
