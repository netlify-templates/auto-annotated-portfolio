import classNames from 'classnames';

import ImageBlock from '@/components/molecules/ImageBlock';
import type { ImageBlock as ImageBlockProps, MediaGallerySection as MediaGallerySectionProps } from '@/types';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

type MediaGalleryItemProps = {
    image: ImageBlockProps;
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
                    {images.map((image, index) => (
                        <MediaGalleryImage
                            key={index}
                            image={image}
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
    const { image, showCaption, enableHover, aspectRatio } = props;
    if (!image) {
        return null;
    }
    return (
        <figure className={classNames('overflow-hidden', 'relative', 'w-full', mapAspectRatioStyles(aspectRatio))}>
            <ImageBlock
                {...image}
                className={classNames('w-full h-full object-cover', {
                    'transition-transform hover:scale-105': enableHover
                })}
            />
            {showCaption && image.caption && (
                <figcaption className="absolute bg-inverse/70 text-inverse left-0 mx-2 bottom-2 p-1.5 text-xs pointer-events-none">
                    {image.caption}
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
        case 2:
            return 'grid-cols-2';
        case 3:
            return 'grid-cols-2 sm:grid-cols-3';
        case 4:
            return 'grid-cols-2 sm:grid-cols-4';
        case 5:
            return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5';
        case 6:
            return 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6';
        case 7:
            return 'grid-cols-2 sm:grid-cols-4 md:grid-cols-7';
        default:
            return null;
    }
}
