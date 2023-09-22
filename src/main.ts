import "reflect-metadata";

import { container } from "./app.container";
import ENV from "./env";
import { ServerEnvironment } from "@expressots/adapter-express";
import { AppFactory } from "@expressots/core";
import { App } from "@providers/application/application.provider";

async function bootstrap() {
    const app = await AppFactory.create(container, App);
    await app.listen(ENV.Application.PORT, ServerEnvironment.Development);
}

bootstrap();
