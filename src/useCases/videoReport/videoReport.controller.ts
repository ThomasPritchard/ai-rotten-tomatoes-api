import { controller, Get, query, response } from "@expressots/adapter-express";
import { BaseController, StatusCode } from "@expressots/core";
import { Response } from "express";
import { VideoReportUseCase } from "@useCases/videoReport/videoReport.usecase";
import { ApiError } from "errors/ApiError";

@controller("/video-report")
class VideoReportController extends BaseController {
    constructor(private videoReportUseCase: VideoReportUseCase) {
        super();
    }

    @Get("/")
    async execute(@query("id") id: string, @response() res: Response) {
        try {
            const videoReport = await this.videoReportUseCase.execute(id);
            return res.status(StatusCode.OK).send(videoReport);
        } catch (error) {
            if (error instanceof ApiError) {
                return res.status(error.getCode()).send(error);
            }
            return res.status(StatusCode.InternalServerError).send(error);
        }
    }
}

export { VideoReportController };
