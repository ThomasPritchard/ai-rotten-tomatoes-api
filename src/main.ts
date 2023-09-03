import "reflect-metadata";

import { ServerEnvironment } from "@expressots/core";
import { container } from "./app.container";
import { app } from "./providers/application/application.provider";
import ENV from "./env";

async function bootstrap() {
    const appInstance = app.create(container);
    appInstance.listen(ENV.Application.PORT, ServerEnvironment.Development);
}

bootstrap();
