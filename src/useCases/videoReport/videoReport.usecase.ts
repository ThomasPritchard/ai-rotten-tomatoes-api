import { provideSingleton } from "@expressots/core";
import { GoogleApiProvider } from "@providers/googleApi/googleApi.provider";

@provideSingleton(VideoReportUseCase)
class VideoReportUseCase {
    constructor(private googleApiProvider: GoogleApiProvider) {}

    async execute() {
        const result = await this.googleApiProvider.fetchVideoData();

        return result;
    }
}

export { VideoReportUseCase };
