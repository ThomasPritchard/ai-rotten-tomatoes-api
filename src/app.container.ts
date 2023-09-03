import { AppContainer } from "@expressots/core";
import { AppModule } from "./useCases/app/app.module";
import { openAiModule } from "./useCases/app/openAi/openAi.module";

const appContainer = new AppContainer();

const container = appContainer.create([
    // Add your modules here
    AppModule,
    openAiModule,
]);

export { container };
