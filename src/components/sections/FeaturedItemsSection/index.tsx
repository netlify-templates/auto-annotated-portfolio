import classNames from 'classnames';

import Action from '@/components/atoms/Action';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';
import FeaturedItem from './FeaturedItem';

export default function FeaturedItemsSection(props) {
    const {
        elementId,
        colors,
        title,
        subtitle,
        actions = [],
        items = [],
        columns = 3,
        spacingX = 16,
        spacingY = 16,
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
            {items.length > 0 && (
                <div
                    className={classNames('grid', mapColStyles(columns), {
                        'mt-12': title || subtitle
                    })}
                    style={{
                        columnGap: spacingX ? `${spacingX}px` : null,
                        rowGap: spacingY ? `${spacingY}px` : null
                    }}
                >
                    {items.map((item, index) => (
                        <FeaturedItem key={index} {...item} headingLevel={title ? 'h3' : 'h2'} />
                    ))}
                </div>
            )}
            {actions?.length > 0 && (
                <div
                    className={classNames('flex flex-wrap items-center gap-4 mt-10', {
                        'justify-center': sectionAlign === 'center',
                        'justify-end': sectionAlign === 'right'
                    })}
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} />
                    ))}
                </div>
            )}
        </Section>
    );
}

function mapColStyles(columns) {
    switch (columns) {
        case 4:
            return 'md:grid-cols-4';
        case 3:
            return 'md:grid-cols-3';
        case 2:
            return 'md:grid-cols-2';
        default:
            return null;
    }
}
