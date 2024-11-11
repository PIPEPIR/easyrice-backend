import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoryDto } from './create-history.dto';
import {
  IsOptional,
  IsString,
  IsNumber,
  Min,
  Max,
  IsDateString,
  IsArray,
} from 'class-validator';

export class UpdateHistoryDto extends PartialType(CreateHistoryDto) {
  @IsOptional()
  @IsString()
  note?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(100000)
  price?: number;

  @IsOptional()
  @IsDateString()
  samplingDate?: string;

  @IsOptional()
  @IsArray()
  samplingPoint?: string[];

  @IsDateString()
  updatedAt?: string;
}
