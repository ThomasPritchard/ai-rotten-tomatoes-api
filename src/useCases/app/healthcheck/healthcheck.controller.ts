import { controller, Get, response } from "@expressots/adapter-express";
import { BaseController } from "@expressots/core";
import { Response } from "express";
import { HealthcheckUseCase } from "./healthcheck.usecase";

@controller("/admin/healthcheck")
class HealthcheckController extends BaseController {
    constructor(private openAiUseCase: HealthcheckUseCase) {
        super();
    }

    @Get("/")
    async execute(@response() res: Response) {
        return res.send(await this.openAiUseCase.execute());
    }
}

export { HealthcheckController };
