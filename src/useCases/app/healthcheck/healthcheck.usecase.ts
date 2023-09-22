import { OpenAiProvider } from "@providers/openAi/openAi.provider";
import { provideSingleton } from "@expressots/core";

@provideSingleton(HealthcheckUseCase)
class HealthcheckUseCase {
    constructor(private openAiProvider: OpenAiProvider) {}

    async execute() {
        const message = await this.openAiProvider.createCompletion(
            "Hello, world!",
        );
        return message;
    }
}

export { HealthcheckUseCase };
