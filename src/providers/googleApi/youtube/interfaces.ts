export interface IThumbnailData {
    url: string;
    width: number;
    height: number;
}

export interface IThumbnails {
    default: IThumbnailData;
    medium: IThumbnailData;
    high: IThumbnailData;
    standard: IThumbnailData;
    maxres: IThumbnailData;
}

export interface IVideoData {
    title?: string | null;
    description?: string | null;
    thumbnails: IThumbnails;
    categoryId?: string | null;
    duration?: string | null;
    madeForKids?: boolean | null;
    viewCount?: string | null;
    likeCount?: string | null;
    commentCount?: string | null;
}
