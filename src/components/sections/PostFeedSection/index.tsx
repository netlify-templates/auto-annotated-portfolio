import * as React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import { Link, Action } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';
import ArrowUpRightIcon from '../../svgs/arrow-up-right';

export default function PostFeedSection(props) {
    const {
        type,
        elementId,
        colors,
        variant,
        title,
        subtitle,
        actions = [],
        posts = [],
        showDate,
        showAuthor,
        showExcerpt,
        showFeaturedImage,
        showReadMoreLink,
        styles = {}
    } = props;
    return (
        <Section type={type} elementId={elementId} colors={colors} styles={styles.self}>
            {title && <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)}>{title}</h2>}
            {subtitle && (
                <p className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-6': title })}>{subtitle}</p>
            )}
            <PostFeedVariants
                variant={variant}
                posts={posts}
                showDate={showDate}
                showAuthor={showAuthor}
                showExcerpt={showExcerpt}
                showFeaturedImage={showFeaturedImage}
                showReadMoreLink={showReadMoreLink}
                hasTopMargin={!!(title || subtitle)}
            />
            <PostFeedActions actions={actions} styles={styles.actions} />
        </Section>
    );
}

function PostFeedActions(props) {
    const { actions = [], styles = {} } = props;
    if (actions.length === 0) {
        return null;
    }
    return (
        <div className="mt-10 overflow-x-hidden">
            <div className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', mapStyles(styles))}>
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="my-2 mx-2 lg:whitespace-nowrap" />
                ))}
            </div>
        </div>
    );
}

function PostFeedVariants(props) {
    const { variant = 'variant-a' } = props;
    switch (variant) {
        case 'variant-a':
        case 'variant-b':
        case 'variant-c':
            return <PostsVariantABC {...props} />;
        case 'variant-d':
            return <PostsVariantD {...props} />;
        default:
            return null;
    }
}

function PostsVariantABC(props) {
    const { variant = 'variant-a', posts = [], showDate, showAuthor, showExcerpt, showFeaturedImage, showReadMoreLink, hasTopMargin } = props;
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-y-12', {
                'md:grid-cols-2': variant === 'variant-a',
                'md:grid-cols-3': variant === 'variant-b',
                'justify-center': variant === 'variant-c',
                'gap-x-6 lg:gap-x-8': variant === 'variant-a' || 'variant-b',
                'mt-12': hasTopMargin
            })}
        >
            {posts.map((post, index) => (
                <Link key={index} href={post} className="sb-post-feed-item block group">
                    <article className="border-b border-current pb-10 max-w-3xl">
                        {showFeaturedImage && post.featuredImage && (
                            <div className="h-0 w-full mb-6 pt-2/3 relative overflow-hidden">
                                <ImageBlock
                                    {...post.featuredImage}
                                    className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        )}
                        <PostAttribution showDate={showDate} showAuthor={showAuthor} date={post.date} author={post.author} className="mb-3" />
                        <h3>{post.title}</h3>
                        {showExcerpt && post.excerpt && <p className="text-lg mt-5">{post.excerpt}</p>}
                        {showReadMoreLink && (
                            <div className="mt-8">
                                <span className="sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-icon">
                                    <span className="sr-only">Read more</span>
                                    <ArrowUpRightIcon className="fill-current h-5 w-5" />
                                </span>
                            </div>
                        )}
                    </article>
                </Link>
            ))}
        </div>
    );
}

function PostsVariantD(props) {
    const { posts = [], showDate, showAuthor, showExcerpt, showFeaturedImage, showReadMoreLink, hasTopMargin } = props;
    if (posts.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-y-12', {
                'mt-12': hasTopMargin
            })}
        >
            {posts.map((post, index) => (
                <Link key={index} href={post} className="sb-post-feed-item block group">
                    <article className="border-b border-current pb-10 md:pb-12 md:px-4">
                        <div className="md:flex md:items-center">
                            {showFeaturedImage && post.featuredImage && (
                                <div className="mb-8 md:shrink-0 md:self-stretch md:w-48 md:mb-0 md:mr-8">
                                    <div className="h-0 w-full pt-2/3 relative overflow-hidden md:h-24 md:min-h-full md:pt-0">
                                        <ImageBlock
                                            {...post.featuredImage}
                                            className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className={classNames('md:grow', showFeaturedImage && post.featuredImage ? null : 'md:ml-12')}>
                                <PostAttribution showDate={showDate} showAuthor={showAuthor} date={post.date} author={post.author} className="mb-3" />
                                <h3>{post.title}</h3>
                                {showExcerpt && post.excerpt && <p className="text-lg mt-5">{post.excerpt}</p>}
                            </div>
                            {showReadMoreLink && (
                                <div className="mt-8 md:mt-0 md:mx-8">
                                    <span className="sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-icon">
                                        <span className="sr-only">Read more</span>
                                        <ArrowUpRightIcon className="fill-current h-5 w-5 md:h-8 md:w-8" />
                                    </span>
                                </div>
                            )}
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
}

function PostAttribution({ showDate, showAuthor, date, author, className = '' }) {
    if (!showDate && !(showAuthor && author)) {
        return null;
    }
    return (
        <div className={className}>
            {showDate && <time dateTime={dayjs(date).format('YYYY-MM-DD HH:mm:ss')}>{dayjs(date).format('MM-DD-YYYY')}</time>}
            {showAuthor && author && (
                <>
                    {showDate && ' | '}
                    <span>
                        {author.firstName && <span>{author.firstName}</span>} {author.lastName && <span>{author.lastName}</span>}
                    </span>
                </>
            )}
        </div>
    );
}
