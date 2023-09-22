import { AppContainer } from "@expressots/core";
import { AppModule } from "@useCases/app/app.module";
import { healthcheckModule } from "@useCases/app/healthcheck/healthcheck.module";

const appContainer = new AppContainer();

const container = appContainer.create([
    // Add your modules here
    AppModule,
    healthcheckModule,
]);

export { container };
