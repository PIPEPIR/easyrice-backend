import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { History } from './entities/history.entity';
import { Repository } from 'typeorm';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
  ) {}

  create(history: CreateHistoryDto): Promise<History> {
    try {
      const newHistory = this.historyRepository.create(history);
      return this.historyRepository.save(newHistory);
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<History[]> {
    return await this.historyRepository.find();
  }

  async findOne(id: string): Promise<History> {
    if (!id) {
      throw new HttpException(
        'inspectionID is required',
        HttpStatus.BAD_REQUEST,
      );
    }
    try {
      const history = await this.historyRepository.findOneBy({
        inspectionID: id,
      });
      if (!history) {
        throw new HttpException(
          `History with ID ${id} not found`,
          HttpStatus.NOT_FOUND,
        );
      }
      return history;
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(
    id: string,
    updateHistoryDto: UpdateHistoryDto,
  ): Promise<History> {
    if (!id) {
      throw new HttpException(
        'inspectionID is required',
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const existingHistory = await this.historyRepository.findOneBy({
        inspectionID: id,
      });
      if (!existingHistory) {
        throw new HttpException(
          `History with ID ${id} not found`,
          HttpStatus.NOT_FOUND,
        );
      }

      const updatedHistory = this.historyRepository.merge(
        existingHistory,
        updateHistoryDto,
      );
      return await this.historyRepository.save(updatedHistory);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: string): Promise<string> {
    if (!id) {
      throw new HttpException(
        'inspectionID is requried',
        HttpStatus.BAD_REQUEST,
      );
    }
    try {
      const existing = await this.historyRepository.findOneBy({
        inspectionID: id,
      });
      if (!existing) {
        throw new HttpException(`${id} is not Found`, HttpStatus.NOT_FOUND);
      }
      await this.historyRepository.delete(id);
      return id;
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
