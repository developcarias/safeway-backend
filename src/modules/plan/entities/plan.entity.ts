import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlanMembership } from 'src/modules/plan-membership/entities/plan-membership.entity';

@Entity('plan', { schema: 'safeway_schema' })
export class Plan {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('text', { name: 'name' })
  name: string;

  @Column('text', { name: 'type' })
  type: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('integer', { name: 'active', default: () => '1' })
  active: number;

  @Column('date', { name: 'created' })
  created: string;

  @Column('date', { name: 'updated', default: () => 'CURRENT_DATE' })
  updated: string;

  @Column('integer', { name: 'item' })
  item: number;

  @OneToMany(() => PlanMembership, (planMembership) => planMembership.plan)
  planMemberships: PlanMembership[];
}
