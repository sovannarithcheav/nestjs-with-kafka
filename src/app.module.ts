import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from '@go1f/nestjs-kafka-client';

const serviceConfig = {
  clientConfig:  {
    // clientId: 'go1-node-app',     // consumer client id
      brokers: ['localhost:29092'] // kafka broker address
  },
  consumerConfig: { groupId: "group_id" } // consumer group id
};

@Module({
  imports: [KafkaModule.forRoot(serviceConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
