import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import { Action } from '../../atoms';

export default function CtaSection(props) {
    const { type, elementId, colors, backgroundSize, title, text, actions = [], styles = {} } = props;
    const sectionFlexDirection = styles.self?.flexDirection ?? 'row';
    const sectionAlignItems = styles.self?.alignItems || 'center';
    return (
        <Section type={type} elementId={elementId} colors={colors} backgroundSize={backgroundSize} styles={styles.self}>
            <div
                className={classNames('flex', mapFlexDirectionStyles(sectionFlexDirection), mapStyles({ alignItems: sectionAlignItems }), 'space-y-8', {
                    'lg:space-y-0 lg:space-x-8': sectionFlexDirection === 'row'
                })}
            >
                <CtaBody title={title} text={text} styles={styles} />
                <CtaActions actions={actions} sectionFlexDirection={sectionFlexDirection} styles={styles.actions} />
            </div>
        </Section>
    );
}

function CtaBody(props) {
    const { title, text, styles = {} } = props;
    if (!title && !text) {
        return null;
    }
    return (
        <div className="w-full lg:grow">
            {title && <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)}>{title}</h2>}
            {text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null, { 'mt-4': title })}
                >
                    {text}
                </Markdown>
            )}
        </div>
    );
}

function CtaActions(props) {
    const { actions = [], sectionFlexDirection, styles = {} } = props;
    if (actions.length === 0) {
        return null;
    }
    const actionsJustifyContent = styles.justifyContent ?? 'center';
    return (
        <div className={classNames('w-full', { 'lg:w-auto': sectionFlexDirection === 'row' })}>
            <div className={classNames('flex', mapStyles({ justifyContent: actionsJustifyContent }))}>
                <div
                    className={classNames('flex', 'flex-col', 'space-y-5', actionsJustifyContent === 'center' ? 'items-center' : 'items-start', {
                        'lg:items-center': sectionFlexDirection === 'row' && actionsJustifyContent !== 'center'
                    })}
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} className="lg:whitespace-nowrap" />
                    ))}
                </div>
            </div>
        </div>
    );
}

function mapFlexDirectionStyles(flexDirection) {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'lg:flex-row', 'lg:justify-between'];
        case 'col':
            return ['flex-col'];
        default:
            return null;
    }
}
