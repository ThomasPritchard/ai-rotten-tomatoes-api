import { controller, Get, response } from "@expressots/adapter-express";
import { BaseController } from "@expressots/core";
import { Response } from "express";
import { VideoReportUseCase } from "@useCases/videoReport/videoReport.usecase";

@controller("/video-report")
class VideoReportController extends BaseController {
    constructor(private videoReportUseCase: VideoReportUseCase) {
        super();
    }

    @Get("/")
    async execute(@response() res: Response) {
        return res.send(await this.videoReportUseCase.execute());
    }
}

export { VideoReportController };
