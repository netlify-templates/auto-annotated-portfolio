import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { mapStylesToClassNames as mapStyles } from '../../../../utils/map-styles-to-class-names';
import Action from '../../../atoms/Action';
import ImageBlock from '../../../molecules/ImageBlock';

export default function FeaturedItem(props) {
    const { elementId, title, subtitle, text, featuredImage, actions = [], styles = {} } = props;
    const { self = {} } = styles;
    const { borderWidth, ...otherSelfStyles } = self;
    return (
        <article
            id={elementId || null}
            className={classNames('sb-component', 'sb-component-block', 'sb-component-item', mapStyles(otherSelfStyles))}
            style={{
                borderWidth: borderWidth ? `${borderWidth}px` : null
            }}
        >
            {featuredImage && (
                <div className="mb-6">
                    <ImageBlock {...featuredImage} className="inline-block" />
                </div>
            )}
            {title && <h3 className={classNames(styles.title ? mapStyles(styles.title) : null)}>{title}</h3>}
            {subtitle && <p className={classNames('text-lg', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-1': title })}>{subtitle}</p>}
            {text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', {
                        'mt-4': title || subtitle
                    })}
                >
                    {text}
                </Markdown>
            )}
            <ItemActions actions={actions} textAlign={otherSelfStyles.textAlign} hasTopMargin={!!(title || subtitle || text)} />
        </article>
    );
}

function ItemActions(props) {
    const { actions = [], textAlign, hasTopMargin } = props;
    if (actions.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('overflow-x-hidden', {
                'mt-4': hasTopMargin
            })}
        >
            <div
                className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', {
                    'justify-center': textAlign === 'center',
                    'justify-end': textAlign === 'right'
                })}
            >
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="my-2 mx-2 lg:whitespace-nowrap" />
                ))}
            </div>
        </div>
    );
}
