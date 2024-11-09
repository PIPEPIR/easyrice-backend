import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  IsDateString,
  IsNumber,
  Min,
  Max,
} from 'class-validator';
import { Standard } from 'src/standard/interfaces/standard.interface';

export class CreateHistoryDto {
  @IsString()
  @IsNotEmpty()
  inspectionID: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  @IsNotEmpty()
  createDate: string;

  @IsString()
  @IsNotEmpty()
  standardID: string;

  @IsOptional()
  @IsString()
  note?: string;

  @IsOptional()
  @IsArray()
  samplingPoint?: string[];

  @IsOptional()
  @IsDateString()
  samplingDate?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(100000)
  price?: number;

  @IsString()
  @IsNotEmpty()
  standardName: string;

  @IsArray()
  @IsNotEmpty()
  standardData: [Standard];
}
