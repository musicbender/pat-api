import { 
  Model, 
  IsUUID, 
  PrimaryKey, 
  Column, 
  Table,
  Default,
  IsDate
} from 'sequelize-typescript';

@Table
export class Steps extends Model<Steps> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Default(0)
  @Column
  value: number;

  @Default(Date.now())
  @IsDate
  @Column
  createdOn: Date;

  @Default(Date.now())
  @IsDate
  @Column
  sampledOn: Date;

  @Column
  sources: string[];

  @Column
  unit: string;

  @Default('0.00:00:00')
  @Column
  totalDuration: string;
}
