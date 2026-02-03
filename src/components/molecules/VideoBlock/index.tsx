import classNames from 'classnames';
import { useState } from 'react';

import getVideoData from '@/utils/get-video-data';

const videoServiceMap = {
    youtube: YouTubeVideo,
    vimeo: VimeoVideo,
    custom: SelfHostedVideo
};

export default function VideoBlock(props) {
    const { elementId, className, url, aspectRatio = '16:9', autoplay, loop, muted, controls = true, coverImage } = props;
    if (!url) {
        return null;
    }
    const videoData = getVideoData(url);
    const VideoComponent = videoServiceMap[videoData.service];
    const aspectRatioClass = {
        '1:1': 'aspect-square',
        '2:3': 'aspect-2/3',
        '3:2': 'aspect-3/2',
        '3:4': 'aspect-3/4',
        '4:3': 'aspect-4/3',
        '16:9': 'aspect-video'
    }[aspectRatio];
    
    return (
        <div
            id={elementId || null}
            className={classNames(
                'w-full relative overflow-hidden',
                aspectRatioClass,
                className
            )}
        >
            {videoData.id && VideoComponent ? (
                <VideoComponent id={videoData.id} autoplay={autoplay} loop={loop} muted={muted} controls={controls} coverImage={coverImage} />
            ) : (
                <p className="absolute left-0 w-full italic text-center -translate-y-1/2 top-1/2">
                    Video URL is not supported.
                </p>
            )}
        </div>
    );
}

function YouTubeVideo({ id, autoplay, loop, muted, controls, coverImage }) {
    const [isPlaying, setIsPlaying] = useState(autoplay);
    const paramsObj: any = {};
    paramsObj.autoplay = (autoplay || isPlaying) ? '1' : '0';
    paramsObj.controls = controls ? '1' : '0';
    paramsObj.loop = loop ? '1' : '0';
    paramsObj.mute = muted ? '1' : '0';
    const queryParams = new URLSearchParams(paramsObj).toString();
    
    // If we have a cover image and video hasn't been played yet, show only the cover
    if (coverImage && !isPlaying && !autoplay) {
        return (
            <button
                onClick={() => setIsPlaying(true)}
                className="absolute top-0 left-0 w-full h-full group cursor-pointer"
                aria-label="Play video"
            >
                <img
                    src={coverImage}
                    alt="Video thumbnail"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <svg className="w-20 h-20 text-white opacity-90 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            </button>
        );
    }
    
    return (
        <iframe
            src={`https://www.youtube.com/embed/${id}?${queryParams}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
        ></iframe>
    );
}

function VimeoVideo({ id, autoplay, loop, muted, controls, coverImage }) {
    const [isPlaying, setIsPlaying] = useState(autoplay);
    const paramsObj: any = {};
    paramsObj.autoplay = (autoplay || isPlaying) ? '1' : '0';
    paramsObj.controls = controls ? '1' : '0';
    paramsObj.loop = loop ? '1' : '0';
    paramsObj.muted = muted ? '1' : '0';
    paramsObj.transparent = '0';
    const queryParams = new URLSearchParams(paramsObj).toString();
    
    // If we have a cover image and video hasn't been played yet, show only the cover
    if (coverImage && !isPlaying && !autoplay) {
        return (
            <button
                onClick={() => setIsPlaying(true)}
                className="absolute top-0 left-0 w-full h-full group cursor-pointer"
                aria-label="Play video"
            >
                <img
                    src={coverImage}
                    alt="Video thumbnail"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <svg className="w-20 h-20 text-white opacity-90 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            </button>
        );
    }
    
    return (
        <iframe
            src={`https://player.vimeo.com/video/${id}?${queryParams}`}
            title="Vimeo video player"
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
        ></iframe>
    );
}

function SelfHostedVideo({ id, autoplay, loop, muted, controls, coverImage }) {
    return (
        <video
            {...(autoplay && { autoPlay: true })}
            {...(loop && { loop: true })}
            {...(muted && { muted: true })}
            {...(controls && { controls: true })}
            {...(coverImage && { poster: coverImage })}
            playsInline
            className="absolute top-0 left-0 w-full h-full"
        >
            <source src={id} type="video/mp4" />
        </video>
    );
}
