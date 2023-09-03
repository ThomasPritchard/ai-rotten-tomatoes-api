import { provide } from "inversify-binding-decorators";
import OpenAI from "openai";
import ENV from "../../env";

@provide(OpenAiProvider)
class OpenAiProvider {
    private openAi: OpenAI;

    constructor() {
        this.openAi = new OpenAI({ apiKey: ENV.OpenAi.API_KEY });
    }

    public async createCompletion(content: string): Promise<string> {
        const messagePayload: OpenAI.Chat.ChatCompletionMessageParam = {
            role: "user",
            content,
        };

        const completion = await this.openAi.chat.completions.create({
            messages: [messagePayload],
            model: "gpt-3.5-turbo",
        });

        return completion.choices[0].message.content as string;
    }
}

export { OpenAiProvider };
