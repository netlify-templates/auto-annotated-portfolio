import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { Action } from '@/components/atoms';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function CtaSection(props) {
    const { elementId, colors, backgroundSize, title, text, actions = [], styles = {} } = props;
    const sectionFlexDirection = styles.self?.flexDirection ?? 'row';
    const sectionAlign = styles.self?.textAlign ?? 'left';
    return (
        <Section elementId={elementId} colors={colors} backgroundSize={backgroundSize} styles={styles.self}>
            <div
                className={classNames(
                    'flex flex-col gap-8',
                    styles.self?.flexDirection !== 'col' && 'lg:flex-row lg:items-center lg:justify-between'
                )}
            >
                {(title || text) && (
                    <div className="w-full space-y-4 lg:grow">
                        {title && (
                            <h2 className={classNames('text-4xl sm:text-5xl', mapStyles({ textAlign: sectionAlign }))}>
                                {title}
                            </h2>
                        )}
                        {text && (
                            <Markdown
                                options={{ forceBlock: true, forceWrapper: true }}
                                className={classNames(
                                    'max-w-none prose sm:prose-lg',
                                    mapStyles({ textAlign: sectionAlign })
                                )}
                            >
                                {text}
                            </Markdown>
                        )}
                    </div>
                )}
                {actions.length > 0 && (
                    <div className={classNames('w-full', { 'lg:w-auto': sectionFlexDirection === 'row' })}>
                        <div
                            className={classNames('w-full flex flex-wrap items-center gap-4', {
                                'lg:w-auto': sectionFlexDirection === 'row',
                                'justify-center': sectionAlign === 'center',
                                'justify-end': sectionAlign === 'right'
                            })}
                        >
                            {actions.map((action, index) => (
                                <Action key={index} {...action} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
}
