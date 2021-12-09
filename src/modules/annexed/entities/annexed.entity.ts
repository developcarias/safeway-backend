import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MembershipAnnexed } from 'src/modules/membership-annexed/entities/membership-annexed.entity';

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

  @Column('integer', { name: 'item' })
  item: number;

  @OneToMany(
    () => MembershipAnnexed,
    (membershipAnnexed) => membershipAnnexed.annexed,
  )
  membershipAnnexeds: MembershipAnnexed[];
}
