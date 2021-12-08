import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MembershipAnnexed } from 'src/modules/membership-annexed/entities/membership-annexed.entity';

@Index('annexed_pk', ['id'], { unique: true })
@Entity('annexed', { schema: 'safeway_schema' })
export class Annexed {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('text', { name: 'name' })
  name: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('date', { name: 'created' })
  created: string;

  @Column('text', { name: 'updated', default: () => 'CURRENT_DATE' })
  updated: string;

  @Column('integer', { name: 'active', default: () => '1' })
  active: number;

  @OneToMany(
    () => MembershipAnnexed,
    (membershipAnnexed) => membershipAnnexed.annexed,
  )
  membershipAnnexeds: MembershipAnnexed[];
}
