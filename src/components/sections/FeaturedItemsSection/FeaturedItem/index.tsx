import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { Annotated } from '@/components/Annotated';
import Action from '@/components/atoms/Action';
import ImageBlock from '@/components/molecules/ImageBlock';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';

export default function FeaturedItem(props) {
    const { elementId, title, subtitle, text, featuredImage, actions = [], styles = {}, headingLevel } = props;
    const { self = {} } = styles;
    const { borderWidth, ...otherSelfStyles } = self;
    const TitleTag = headingLevel;
    return (
        <Annotated content={props}>
            <article
                id={elementId || null}
                className={classNames('overflow-hidden', mapStyles(otherSelfStyles))}
                style={{
                    borderWidth: borderWidth ? `${borderWidth}px` : null
                }}
            >
                {featuredImage && (
                    <div className="mb-6">
                        <ImageBlock {...featuredImage} className="inline-block" />
                    </div>
                )}
                {title && <TitleTag className="text-3xl sm:text-4xl">{title}</TitleTag>}
                {subtitle && <p className={classNames('text-lg', { 'mt-1': title })}>{subtitle}</p>}
                {text && (
                    <Markdown
                        options={{ forceBlock: true, forceWrapper: true }}
                        className={classNames('prose sm:prose-lg', {
                            'mt-4': title || subtitle
                        })}
                    >
                        {text}
                    </Markdown>
                )}
                {actions?.length > 0 && (
                    <div
                        className={classNames('flex flex-wrap items-center gap-4', {
                            'justify-center': otherSelfStyles.textAlign === 'center',
                            'justify-end': otherSelfStyles.textAlign === 'right',
                            'mt-4': title || subtitle || text
                        })}
                    >
                        {actions.map((action, index) => (
                            <Action key={index} {...action} />
                        ))}
                    </div>
                )}
            </article>
        </Annotated>
    );
}
