import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { Survey } from 'src/modules/survey/entities/survey.entity';

@Index('survey_customer_pk', ['id'], { unique: true })
@Entity('survey_customer', { schema: 'safeway_schema' })
export class SurveyCustomer {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('text', { name: 'value_text', nullable: true })
  valueText: string | null;

  @Column('integer', { name: 'value_boolean', nullable: true })
  valueBoolean: number | null;

  @ManyToOne(() => Customer, (customer) => customer.surveyCustomers)
  @JoinColumn([{ name: 'customer_id', referencedColumnName: 'id' }])
  customer: Customer;

  @ManyToOne(() => Survey, (survey) => survey.surveyCustomers)
  @JoinColumn([{ name: 'survey_id', referencedColumnName: 'id' }])
  survey: Survey;
}
