import { provideSingleton, StatusCode } from "@expressots/core";
import { IVideoData } from "@providers/googleApi/youtube/interfaces";
import { YoutubeProvider } from "@providers/googleApi/youtube/youtube.provider";
import { ApiError } from "errors/ApiError";
import { ErrorType } from "errors/enums";

@provideSingleton(VideoReportUseCase)
class VideoReportUseCase {
    constructor(private youtubeProvider: YoutubeProvider) {}

    async execute(id: string): Promise<IVideoData> {
        if (!id) {
            const apiError = new ApiError(
                StatusCode.BadRequest,
                "id is missing from the request parameters",
                ErrorType.MissingIdError,
            );
            throw apiError;
        }
        const result = await this.youtubeProvider.fetchVideoData(id);

        return result;
    }
}

export { VideoReportUseCase };
