import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import HighlightedPreBlock from './../../../utils/highlighted-markdown';
import BaseLayout from '../BaseLayout';
import { DynamicComponent } from '../../components-registry';
import { PostLayout, PageComponentProps } from '@/types';

type ComponentProps = PageComponentProps & PostLayout;

const Component: React.FC<ComponentProps> = (props) => {
    const { global, ...page } = props;
    const { title, date, author, markdownContent, media, bottomSections = [] } = page;
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('MM-DD-YYYY');

    return (
        <BaseLayout {...props}>
            <main id="main" className="sb-layout sb-post-layout">
                <article className="px-4 py-14 lg:py-20">
                    <div className="max-w-5xl mx-auto">
                        <header className="mb-10 sm:mb-14">
                            <div className="uppercase mb-4 sm:mb-6">
                                <time dateTime={dateTimeAttr}>{formattedDate}</time>
                                {author && (
                                    <>
                                        {' | '}
                                        <PostAuthor author={author} />
                                    </>
                                )}
                            </div>
                            <h1>{title}</h1>
                        </header>
                        {media && (
                            <div className="mb-10 sm:mb-14">
                                <PostMedia media={media} />
                            </div>
                        )}
                        {markdownContent && (
                            <Markdown options={{ forceBlock: true, overrides: { pre: HighlightedPreBlock } }} className="sb-markdown max-w-screen-md mx-auto">
                                {markdownContent}
                            </Markdown>
                        )}
                    </div>
                </article>
                {bottomSections.length > 0 && (
                    <div>
                        {bottomSections.map((section, index) => {
                            return <DynamicComponent key={index} {...section} />;
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
};
export default Component;

function PostMedia({ media }) {
    return <DynamicComponent {...media} className={classNames({ 'w-full': media.type === 'ImageBlock' })} />;
}

function PostAuthor({ author }) {
    return (
        <span>
            {author.firstName && <span>{author.firstName}</span>} {author.lastName && <span>{author.lastName}</span>}
        </span>
    );
}
