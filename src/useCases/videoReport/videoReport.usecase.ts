import { provideSingleton, StatusCode } from "@expressots/core";
import { GoogleApiProvider } from "@providers/googleApi/googleApi.provider";
import { ApiError } from "errors/ApiError";
import { ErrorType } from "errors/enums";
import { youtube_v3 } from "googleapis";

@provideSingleton(VideoReportUseCase)
class VideoReportUseCase {
    constructor(private googleApiProvider: GoogleApiProvider) {}

    async execute(id: string): Promise<youtube_v3.Schema$Video> {
        if (!id) {
            const apiError = new ApiError(
                StatusCode.BadRequest,
                "id is missing from the request parameters",
                ErrorType.MissingIdError,
            );
            throw apiError;
        }
        const result = await this.googleApiProvider.fetchVideoData(id);

        return result;
    }
}

export { VideoReportUseCase };
