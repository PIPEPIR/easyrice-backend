import { Injectable } from '@nestjs/common';
import * as standards from '../data/standards.json';
import { Standard } from './interfaces/standard.interface';

@Injectable()
export class StandardService {
  findAll(): Standard[] {
    return standards;
  }
}
