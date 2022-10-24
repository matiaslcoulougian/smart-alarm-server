import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { randomUUID } from "crypto";
import { connect } from "mqtt";
import {scheduleJob} from "node-schedule";

export const client = connect(`tls://${process.env.MQTT_HOST}:${process.env.MQTT_PORT}`, {
    clientId: `mqtt_${randomUUID()}`,
    clean: true,
    connectTimeout: 4000,
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
    reconnectPeriod: 1000,
});

async function bootstrap() {
    client.on('connect', () => {
        console.log('Connected!');
        const topic = 'alarm'
        client.subscribe([topic], () => {
            console.log(`Subscribe to topic ${topic}`)
        })
    });

    client.on('message', (topic, payload) => {
        console.log('Received Message:', topic, payload.toString())
    });

    //Init server
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT || 8080);
}

bootstrap();
