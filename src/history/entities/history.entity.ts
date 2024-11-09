import { Standard } from 'src/standard/interfaces/standard.interface';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class History {
  @PrimaryColumn()
  inspectionID: string;

  @Column()
  name: string;

  @Column()
  createDate: string;

  @Column()
  standardID: string;

  @Column({ nullable: true })
  imageLink?: string;

  @Column({ nullable: true })
  note?: string;

  @Column({ type: 'simple-array', nullable: true })
  samplingPoint?: string[];

  @Column({ nullable: true })
  samplingDate?: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  price?: number;

  @Column()
  standardName: string;

  @Column({ type: 'simple-json' })
  standardData: [Standard];
}
