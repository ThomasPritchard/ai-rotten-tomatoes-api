import { provideSingleton } from "@expressots/core";
import ENV from "env";
import { google, youtube_v3 } from "googleapis";

@provideSingleton(GoogleApiProvider)
class GoogleApiProvider {
    private youtubeApi: youtube_v3.Youtube;

    constructor() {
        this.youtubeApi = google.youtube({
            version: "v3",
            auth: ENV.Google.API_KEY,
        });
    }

    public async fetchVideoData(): Promise<youtube_v3.Schema$VideoListResponse> {
        const result = await this.youtubeApi.videos.list({
            part: ["statistics"],
            id: ["CH4lVtHn2ww"],
        });
        return result.data;
    }
}

export { GoogleApiProvider };
