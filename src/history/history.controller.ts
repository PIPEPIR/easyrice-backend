import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HistoryService } from './history.service';
import { History } from './entities/history.entity';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  create(@Body() history: History) {
    return this.historyService.create(history);
  }

  @Get()
  findAll() {
    return this.historyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historyService.findOne(id);
  }

  @Patch()
  update(@Body() updateHistoryDto) {
    return this.historyService.update(
      updateHistoryDto.inspectionID,
      updateHistoryDto,
    );
  }

  @Delete()
  remove(@Body('inspectionID') inspectionID: string) {
    return this.historyService.remove(inspectionID);
  }
}
