import { provideSingleton, StatusCode } from "@expressots/core";
import ENV from "env";
import { ApiError } from "errors/ApiError";
import { ErrorType } from "errors/enums";
import { GaxiosError } from "gaxios";
import { google, youtube_v3 } from "googleapis";
import { Parts, YoutubeOptions } from "./enums";

@provideSingleton(GoogleApiProvider)
class GoogleApiProvider {
    private youtubeApi: youtube_v3.Youtube;

    constructor() {
        this.youtubeApi = google.youtube({
            version: YoutubeOptions.VERSION,
            auth: ENV.Google.API_KEY,
        });
    }

    public async fetchVideoData(id: string): Promise<youtube_v3.Schema$Video> {
        let result: youtube_v3.Schema$VideoListResponse;

        try {
            const videoListResponsePromise = await this.youtubeApi.videos.list({
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
        } catch (error) {
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
        return result;
    }
}

export { GoogleApiProvider };
