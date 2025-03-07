import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function QuoteSection(props) {
    const { elementId, colors, quote, name, title, styles = {} } = props;
    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            <blockquote className={classNames(mapStyles({ textAlign: styles.self?.textAlign ?? 'left' }))}>
                {quote && <p className="text-3xl sm:text-5xl sm:leading-tight">{quote}</p>}
                {(name || title) && (
                    <footer className="mt-8 text-lg sm:mt-10 sm:text-xl">
                        {name && <p className="font-medium">{name}</p>}
                        {title && <p>{title}</p>}
                    </footer>
                )}
            </blockquote>
        </Section>
    );
}
