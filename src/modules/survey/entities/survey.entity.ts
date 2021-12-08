import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SurveyCustomer } from 'src/modules/survey-customer/entities/survey-customer.entity';

@Index('survey_pk', ['id'], { unique: true })
@Entity('survey', { schema: 'safeway_schema' })
export class Survey {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('text', { name: 'name' })
  name: string;

  @Column('text', { name: 'description' })
  description: string;

  @Column('character varying', { name: 'active', default: () => '1' })
  active: string;

  @OneToMany(() => SurveyCustomer, (surveyCustomer) => surveyCustomer.survey)
  surveyCustomers: SurveyCustomer[];
}