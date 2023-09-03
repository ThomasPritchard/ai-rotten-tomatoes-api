import { provide } from "inversify-binding-decorators";
import { OpenAiProvider } from "../../../providers/openAi/openAi.provider";

@provide(OpenAiUseCase)
class OpenAiUseCase {
    constructor(private openAiProvider: OpenAiProvider) {}

    async execute() {
        const message = await this.openAiProvider.createCompletion(
            "Hello, world!",
        );
        return message;
    }
}

export { OpenAiUseCase };
