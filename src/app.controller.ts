import { Controller, Get, Query } from '@nestjs/common';
import { KafkaService, SubscribeTo } from '@go1f/nestjs-kafka-client';

@Controller('kafka')
export class AppController {
  constructor(private readonly kafkaClient: KafkaService) {}

  @Get('publish')
  getHello(@Query('message') message): void {
    this.kafkaClient.sendSingleMessage('testTopic', '','My first Kafka Message: '+ message);
  }

  @SubscribeTo('testTopic')
    handleMessage(message: any) {
      console.log(message);
    }
}
