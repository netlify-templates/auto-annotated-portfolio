import classNames from 'classnames';

import { DynamicComponent } from '@/components/components-registry';
import type { MediaGallerySection as MediaGallerySectionProps } from '@/types';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

type MediaGalleryItemProps = {
    media: any;
    showCaption: boolean;
    enableHover: boolean;
    aspectRatio: string;
};

export default function MediaGallerySection(props: MediaGallerySectionProps) {
    const {
        elementId,
        colors,
        title,
        subtitle,
        images = [],
        columns = 4,
        spacing = 16,
        aspectRatio = '1:1',
        showCaption,
        enableHover,
        styles = {}
    } = props;
    const sectionAlign = styles.self?.textAlign ?? 'left';
    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            {title && (
                <h2 className={classNames('text-4xl sm:text-5xl', mapStyles({ textAlign: sectionAlign }))}>{title}</h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-lg sm:text-xl', mapStyles({ textAlign: sectionAlign }), {
                        'mt-6': title
                    })}
                >
                    {subtitle}
                </p>
            )}
            {images.length > 0 && (
                <div
                    className={classNames('grid place-items-center', mapColStyles(columns), {
                        'mt-12': title || subtitle
                    })}
                    style={{
                        gap: spacing ? `${spacing}px` : undefined
                    }}
                >
                    {images.map((media, index) => (
                        <MediaGalleryImage
                            key={index}
                            media={media}
                            showCaption={showCaption}
                            enableHover={enableHover}
                            aspectRatio={aspectRatio}
                        />
                    ))}
                </div>
            )}
        </Section>
    );
}

function MediaGalleryImage(props: MediaGalleryItemProps) {
    const { media, showCaption, enableHover, aspectRatio } = props;
    if (!media) {
        return null;
    }
    
    const isVideo = media.type === 'VideoBlock';
    const caption = media.caption || (isVideo && media.title);
    
    return (
        <figure className={classNames('overflow-hidden relative w-full', mapAspectRatioStyles(aspectRatio))}>
            <div className="absolute inset-0">
                <DynamicComponent
                    {...media}
                    aspectRatio={aspectRatio}
                    className={classNames('w-full h-full', {
                        'object-cover': !isVideo,
                        'transition-transform duration-500 hover:scale-105': enableHover && !isVideo
                    })}
                />
            </div>
            {showCaption && caption && (
                <figcaption className="absolute bg-inverse/70 text-inverse left-0 mx-2 bottom-2 p-1.5 text-xs pointer-events-none z-10">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}

function mapAspectRatioStyles(aspectRatio) {
    switch (aspectRatio) {
        case '1:1':
            return 'aspect-square';
        case '2:3':
            return 'aspect-2/3';
        case '3:2':
            return 'aspect-3/2';
        case '3:4':
            return 'aspect-3/4';
        case '4:3':
            return 'aspect-4/3';
        case '16:9':
            return 'aspect-video';
        default:
            return null;
    }
}

function mapColStyles(columns) {
    switch (columns) {
        case 1:
            return 'grid-cols-1';
        case 2:
            return 'grid-cols-1 sm:grid-cols-2';
        case 3:
            return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
        case 4:
            return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4';
        case 5:
            return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5';
        case 6:
            return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6';
        case 7:
            return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7';
        default:
            return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4';
    }
}
