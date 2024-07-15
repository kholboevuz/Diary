import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Diary, DiaryDocument } from './diary.schema';
import { Model } from 'mongoose';
import { DtoDiary } from './dto/dto.diary';
import * as fs from 'fs';
import { join } from 'path';
@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Diary.name) private diaryModel: Model<DiaryDocument>,
  ) {}

  async getDiary() {
    const data = await this.diaryModel.find({}).sort({createdAt: -1});
    return {
      success: true,
      data: data,
    };
  }

  async addDiary(diary: DtoDiary, fileName: string) {
    const data = await this.diaryModel.create({
      name: diary.name,
      description: diary.description,
      createdAdd: diary.createdAdd,
      photo: fileName,
    });

    return {
      success: true,
      message: 'Kundalik muvaffaqiyatli yaratildi',
      data: data,
    };
  }

  async getByID(id: string) {
    const data = await this.diaryModel.findById(id);
    return {
      success: true,
      data: data,
    };
  }

  async deleteDiary(id: string) {
    const data = await this.diaryModel.findById(id);
    fs.unlinkSync(join(__dirname, '..', '..', `upload/${data.photo}`));
    await this.diaryModel.findByIdAndDelete(id);
    return {
      success: true,
      message: "Kundalik muvaffaqiyatli o'chirildi",
    };
  }

  async updateDiary(id: string, diary: DtoDiary) {
    const data = await this.diaryModel.findByIdAndUpdate(
      id,
      {
        name: diary.name,
        description: diary.description,
      },
      { new: true },
    );
    return {
      success: true,
      message: 'Muvaffaqiyatli yangilandi',
      data: data,
    };
  }
}
