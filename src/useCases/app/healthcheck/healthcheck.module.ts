import { CreateModule } from "@expressots/core";
import { HealthcheckController } from "./healthcheck.controller";

const healthcheckModule = CreateModule([HealthcheckController]);

export { healthcheckModule };
