import { BaseController } from "@expressots/core";
import { Response } from "express";
import { controller, httpPost, response } from "inversify-express-utils";
import { OpenAiUseCase } from "./openAi.usecase";

@controller("/open-ai")
class OpenAiController extends BaseController {
    constructor(private openAiUseCase: OpenAiUseCase) {
        super("openAi-controller");
    }

    @httpPost("/")
    async execute(@response() res: Response) {
        return res.send(await this.openAiUseCase.execute());
    }
}

export { OpenAiController };
