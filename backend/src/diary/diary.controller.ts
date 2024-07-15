import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { DtoDiary } from './dto/dto.diary';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('diary')
export class DiaryController {
  constructor(private readonly BlogServie: BlogService) {}

  @HttpCode(200)
  @Get()
  async getDiary() {
    return this.BlogServie.getDiary();
  }

  @HttpCode(201)
  @Post('add')
  @UseInterceptors(FileInterceptor('photo'))
  async createDiary(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: '(png|jpeg|jpg)',
        })
        .addMaxSizeValidator({
          maxSize: 10000000,
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
    @Body() diary: DtoDiary,
  ) {
    return this.BlogServie.addDiary(diary, file.filename);
  }

  @HttpCode(200)
  @Get(':id')
  async getByID(@Param('id') id: string) {
    return this.BlogServie.getByID(id);
  }

  @HttpCode(200)
  @Delete('delete/:id')
  async delteByID(@Param('id') id: string) {
    return this.BlogServie.deleteDiary(id);
  }

  @HttpCode(200)
  @Put('update/:id')
  async updateDiary(@Body() diary: DtoDiary, @Param('id') id: string) {
    return this.BlogServie.updateDiary(id, diary);
  }
}
