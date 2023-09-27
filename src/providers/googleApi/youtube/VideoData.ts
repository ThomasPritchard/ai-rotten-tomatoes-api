import { StatusCode } from "@expressots/core";
import { ApiError } from "errors/ApiError";
import { ErrorType } from "errors/enums";
import { youtube_v3 } from "googleapis";
import { Utils } from "../utils";
import { IThumbnails, IVideoData, IThumbnailData } from "./interfaces";

export class VideoData implements IVideoData {
    title?: string | null;
    description?: string | null;
    thumbnails: IThumbnails;
    categoryId?: string | null;
    duration?: string | null;
    madeForKids?: boolean | null;
    viewCount?: string | null;
    likeCount?: string | null;
    commentCount?: string | null;

    constructor(videoData: youtube_v3.Schema$Video) {
        if (
            !videoData.snippet ||
            !videoData.snippet.thumbnails ||
            !videoData.contentDetails ||
            !videoData.status ||
            !videoData.statistics
        ) {
            throw new ApiError(
                StatusCode.InternalServerError,
                "Missing data from videoData response",
                ErrorType.MissingDataError,
            );
        }

        this.title = videoData.snippet.title;
        this.description = videoData.snippet.description;
        this.thumbnails = {
            default: videoData.snippet.thumbnails.default as IThumbnailData,
            medium: videoData.snippet.thumbnails.medium as IThumbnailData,
            high: videoData.snippet.thumbnails.high as IThumbnailData,
            standard: videoData.snippet.thumbnails.standard as IThumbnailData,
            maxres: videoData.snippet.thumbnails.maxres as IThumbnailData,
        };
        this.categoryId = videoData.snippet.categoryId;
        this.duration = Utils.formatDuration(
            videoData.contentDetails.duration ?? "PT00S",
        );
        this.madeForKids = videoData.status.madeForKids;
        this.viewCount = videoData.statistics.viewCount;
        this.likeCount = videoData.statistics.likeCount;
        this.commentCount = videoData.statistics.commentCount;
    }
}
