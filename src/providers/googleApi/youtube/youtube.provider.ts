import { provideSingleton, StatusCode } from "@expressots/core";
import ENV from "env";
import { ApiError } from "errors/ApiError";
import { ErrorType } from "errors/enums";
import { GaxiosError } from "gaxios";
import { google, youtube_v3 } from "googleapis";
import { Parts, YoutubeOptions } from "./enums";
import { IVideoData } from "./interfaces";
import { VideoData } from "./VideoData";

@provideSingleton(YoutubeProvider)
class YoutubeProvider {
    private youtube: youtube_v3.Youtube;

    constructor() {
        this.youtube = google.youtube({
            version: YoutubeOptions.VERSION,
            auth: ENV.Google.API_KEY,
        });
    }

    public async fetchVideoData(id: string): Promise<IVideoData> {
        let result: youtube_v3.Schema$VideoListResponse;

        try {
            const videoListResponsePromise = await this.youtube.videos.list({
                part: [
                    Parts.STATISTICS,
                    Parts.CONTENT_DETAILS,
                    Parts.STATUS,
                    Parts.TOPIC_DETAILS,
                    Parts.SNIPPET,
                ],
                id: [id],
            });

            result = videoListResponsePromise.data;

            if (result.pageInfo?.totalResults === 0 || !result.items) {
                throw new ApiError(
                    StatusCode.BadRequest,
                    "The requested video does not exist",
                    ErrorType.NoVideoResultsError,
                );
            }
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }

            let apiError;
            if (error instanceof GaxiosError) {
                apiError = new ApiError(
                    Number(error.code),
                    error.message,
                    ErrorType.GaxiosError,
                );
                throw apiError;
            }

            apiError = new ApiError(
                StatusCode.InternalServerError,
                "An error has occurred",
                ErrorType.GenericError,
            );
            throw apiError;
        }

        return new VideoData(result.items[0]);
    }
}

export { YoutubeProvider };
