import classNames from 'classnames';
import { Annotated } from '@/components/Annotated';

export default function ImageBlock(props) {
    const { 
        elementId, 
        className, 
        url, 
        altText = '', 
        link,
        linkInNewTab,
        overlayText,
        overlayTextAlign = 'center',
        overlayTextSize = 'medium',
        overlayTextWeight = 'medium',
        overlayTextColor = '#ffffff',
        overlayBackgroundColor = 'rgba(0, 0, 0, 0.5)',
        overlayPosition = 'center'
    } = props;
    
    if (!url) {
        return null;
    }

    const hasOverlay = !!overlayText;
    
    // Map text size to Tailwind classes
    const textSizeClasses = {
        small: 'text-lg sm:text-xl',
        medium: 'text-2xl sm:text-3xl',
        large: 'text-3xl sm:text-5xl',
        xlarge: 'text-4xl sm:text-6xl'
    };
    
    // Map text weight to Tailwind classes
    const textWeightClasses = {
        normal: 'font-normal',
        medium: 'font-medium',
        bold: 'font-bold'
    };
    
    // Map text alignment
    const textAlignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    };
    
    // Map overlay position
    const positionClasses = {
        top: 'items-start',
        center: 'items-center',
        bottom: 'items-end'
    };

    const imageElement = (
        <img 
            id={elementId || null} 
            className={className} 
            src={url} 
            alt={altText} 
        />
    );
    
    const overlayElement = hasOverlay && (
        <div 
            className={classNames(
                'absolute inset-0 flex px-6 py-4',
                positionClasses[overlayPosition]
            )}
            style={{ pointerEvents: 'none' }}
        >
            <div 
                className={classNames(
                    'w-full px-4 py-3',
                    textSizeClasses[overlayTextSize],
                    textWeightClasses[overlayTextWeight],
                    textAlignClasses[overlayTextAlign]
                )}
                style={{ 
                    color: overlayTextColor,
                    backgroundColor: overlayBackgroundColor
                }}
            >
                {overlayText}
            </div>
        </div>
    );
    
    // Extract transition classes from className if they exist
    const hasTransition = className?.includes('transition');
    const transitionClasses = hasTransition ? className.match(/(transition[^\s]*|duration[^\s]*|hover:[^\s]*)/g)?.join(' ') : '';
    const nonTransitionClasses = hasTransition ? className?.replace(/(transition[^\s]*|duration[^\s]*|hover:[^\s]*)/g, '').trim() : className;
    
    const content = hasOverlay ? (
        <div className={classNames('relative w-full h-full', transitionClasses)}>
            <img 
                id={elementId || null} 
                className={nonTransitionClasses} 
                src={url} 
                alt={altText} 
            />
            {overlayElement}
        </div>
    ) : imageElement;

    const wrappedContent = link ? (
        <a 
            href={link}
            {...(linkInNewTab && { target: '_blank', rel: 'noopener noreferrer' })}
            className="block"
        >
            {content}
        </a>
    ) : content;

    return (
        <Annotated content={props}>
            {wrappedContent}
        </Annotated>
    );
}
