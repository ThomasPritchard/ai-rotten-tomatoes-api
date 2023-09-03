import { CreateModule } from "@expressots/core";
import { OpenAiController } from "./openAi.controller";

const openAiModule = CreateModule([OpenAiController]);

export { openAiModule };
