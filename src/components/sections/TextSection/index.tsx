import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';

export default function TextSection(props) {
    const { type, elementId, colors, variant, title, subtitle, text, styles = {} } = props;
    return (
        <Section type={type} elementId={elementId} colors={colors} styles={styles.self}>
            <TextBodyVariants variant={variant} title={title} subtitle={subtitle} text={text} styles={styles} />
        </Section>
    );
}

function TextBodyVariants(props) {
    const { variant = 'variant-a', ...rest } = props;
    switch (variant) {
        case 'variant-a':
            return <TextBodyVariantA {...rest} />;
        case 'variant-b':
            return <TextBodyVariantB {...rest} />;
        default:
            return null;
    }
}

function TextBodyVariantA(props) {
    const { title, subtitle, text, styles = {} } = props;
    return (
        <div>
            {title && <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)}>{title}</h2>}
            {subtitle && (
                <p className={classNames('text-xl', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-2': title })}>{subtitle}</p>
            )}
            {text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null, {
                        'mt-6': title || subtitle
                    })}
                >
                    {text}
                </Markdown>
            )}
        </div>
    );
}

function TextBodyVariantB(props) {
    const { title, subtitle, text, styles = {} } = props;
    return (
        <div className="flex flex-wrap">
            {(title || subtitle) && (
                <div className={classNames('w-full', { 'lg:w-1/3 lg:pr-3': text })}>
                    {title && <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)}>{title}</h2>}
                    {subtitle && (
                        <p
                            className={classNames('text-xl', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : null, {
                                'mt-2': title
                            })}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            )}
            {text && (
                <div className={classNames('w-full', { 'mt-12 lg:mt-0 lg:w-2/3 lg:pl-3': title || subtitle })}>
                    <Markdown
                        options={{ forceBlock: true, forceWrapper: true }}
                        className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null)}
                    >
                        {text}
                    </Markdown>
                </div>
            )}
        </div>
    );
}
