import classNames from 'classnames';

import getVideoData from '@/utils/get-video-data';

const videoServiceMap = {
    youtube: YouTubeVideo,
    vimeo: VimeoVideo,
    custom: SelfHostedVideo
};

export default function VideoBlock(props) {
    const { elementId, className, url, aspectRatio = '16:9', autoplay, loop, muted, controls = true } = props;
    if (!url) {
        return null;
    }
    const videoData = getVideoData(url);
    const VideoComponent = videoServiceMap[videoData.service];
    return (
        <div
            id={elementId || null}
            className={classNames(
                'w-full relative overflow-hidden',
                {
                    'aspect-4/3': aspectRatio === '4:3',
                    'aspect-video': aspectRatio === '16:9'
                },
                className
            )}
        >
            {videoData.id && VideoComponent ? (
                <VideoComponent id={videoData.id} autoplay={autoplay} loop={loop} muted={muted} controls={controls} />
            ) : (
                <p className="absolute left-0 w-full italic text-center -translate-y-1/2 top-1/2">
                    Video URL is not supported.
                </p>
            )}
        </div>
    );
}

function YouTubeVideo({ id, autoplay, loop, muted, controls }) {
    const paramsObj: any = {};
    paramsObj.autoplay = autoplay ? '1' : '0';
    paramsObj.controls = controls ? '1' : '0';
    paramsObj.loop = loop ? '1' : '0';
    paramsObj.mute = muted ? '1' : '0';
    const queryParams = new URLSearchParams(paramsObj).toString();
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

function VimeoVideo({ id, autoplay, loop, muted, controls }) {
    const paramsObj: any = {};
    paramsObj.autoplay = autoplay ? '1' : '0';
    paramsObj.controls = controls ? '1' : '0';
    paramsObj.loop = loop ? '1' : '0';
    paramsObj.muted = muted ? '1' : '0';
    paramsObj.transparent = '0';
    const queryParams = new URLSearchParams(paramsObj).toString();
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

function SelfHostedVideo({ id, autoplay, loop, muted, controls }) {
    return (
        <video
            {...(autoplay && { autoPlay: true })}
            {...(loop && { loop: true })}
            {...(muted && { muted: true })}
            {...(controls && { controls: true })}
            playsInline
            className="absolute top-0 left-0 w-full h-full"
        >
            <source src={id} type="video/mp4" />
        </video>
    );
}
