import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as process from "process";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {clc} from "@nestjs/common/utils/cli-colors.util";

async function bootstrap() {

    console.log(process.env);
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    //Swagger
    const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(process.env.APP_NAME)
    .setDescription(process.env.APP_DESCRIPTION)
    .setVersion(process.env.APP_VERSION)
    .build();

    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('api', app, document)

    await app.listen(process.env.APP_PORT);

    console.log(clc.red(`Environnement de ${process.env.APP_ENV}`));
    console.log(clc.magentaBright(process.env.APP_NAME + ' is listening on ' + process.env.APP_PORT))
}

bootstrap();
