import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';
import { DatabaseModule } from './database/database.module';
import { PlanModule } from './modules/plan/plan.module';
import { MembershipModule } from './modules/membership/membership.module';
import { PlanMembershipModule } from './modules/plan-membership/plan-membership.module';
import { BenefitModule } from './modules/benefit/benefit.module';
import { BenefitMembershipModule } from './modules/benefit-membership/benefit-membership.module';
import { AnnexedModule } from './modules/annexed/annexed.module';
import { MembershipAnnexedModule } from './modules/membership-annexed/membership-annexed.module';
import { CustomerMembershipAnnexedModule } from './modules/customer-membership-annexed/customer-membership-annexed.module';
import { CustomerModule } from './modules/customer/customer.module';
import { BeneficiaryModule } from './modules/beneficiary/beneficiary.module';
import { CustomerBeneficiaryModule } from './modules/customer-beneficiary/customer-beneficiary.module';
import { SurveyModule } from './modules/survey/survey.module';
import { SurveyCustomerModule } from './modules/survey-customer/survey-customer.module';
import { UserModule } from './modules/user/user.module';
import { UserCustomerModule } from './modules/user-customer/user-customer.module';
import { PotentialCustomerModule } from './modules/potential-customer/potential-customer.module';
import { RoleModule } from './modules/role/role.module';
import { UserRoleModule } from './modules/user-role/user-role.module';
import { QuoteModule } from './modules/quote/quote.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    DatabaseModule,
    PlanModule,
    MembershipModule,
    PlanMembershipModule,
    BenefitModule,
    BenefitMembershipModule,
    AnnexedModule,
    MembershipAnnexedModule,
    CustomerMembershipAnnexedModule,
    CustomerModule,
    BeneficiaryModule,
    CustomerBeneficiaryModule,
    SurveyModule,
    SurveyCustomerModule,
    UserModule,
    UserCustomerModule,
    PotentialCustomerModule,
    RoleModule,
    UserRoleModule,
    QuoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
