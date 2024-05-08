import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import HighlightedPreBlock from './../../../utils/highlighted-markdown';
import BaseLayout from '../BaseLayout';
import { DynamicComponent } from '../../components-registry';
import ImageBlock from '../../molecules/ImageBlock';
import Link from '../../atoms/Link';
import { Annotated } from '@/components/Annotated';
import { PageComponentProps, ProjectLayout } from '@/types';

type ComponentProps = PageComponentProps &
    ProjectLayout & {
        prevProject?: ProjectLayout;
        nextProject?: ProjectLayout;
    };

const Component: React.FC<ComponentProps> = (props) => {
    const { global, ...page } = props;
    const { title, date, client, description, markdownContent, media, prevProject, nextProject, bottomSections = [] } = page;
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('MM-DD-YYYY');

    return (
        <BaseLayout {...props}>
            <main id="main" className="sb-layout sb-project-layout">
                <article className="px-4 py-14 lg:py-20">
                    <div className="max-w-5xl mx-auto">
                        <header className="mb-10 sm:mb-16">
                            {client && <div className="text-lg uppercase mb-2 md:mb-6">{client}</div>}
                            <div className="md:flex md:justify-between">
                                <div className="text-lg mb-6 md:mb-0 md:ml-12 md:order-last">
                                    <time dateTime={dateTimeAttr}>{formattedDate}</time>
                                </div>
                                <h1 className="md:max-w-2xl md:flex-grow">{title}</h1>
                            </div>
                        </header>
                        {description && <div className="text-xl leading-normal uppercase max-w-screen-md mx-auto mb-10 sm:mb-16">{description}</div>}
                        {media && (
                            <div className="mb-10 sm:mb-16">
                                <ProjectMedia media={media} />
                            </div>
                        )}
                        {markdownContent && (
                            <Markdown options={{ forceBlock: true, overrides: { pre: HighlightedPreBlock } }} className="sb-markdown max-w-screen-md mx-auto">
                                {markdownContent}
                            </Markdown>
                        )}
                    </div>
                </article>
                {(prevProject || nextProject) && (
                    <nav className="sb-project-nav px-4 sm:px-8 mt-12 mb-20">
                        <div className="max-w-5xl mx-auto grid gap-x-6 gap-y-12 md:grid-cols-2 lg:gap-x-8">
                            {prevProject && <ProjectNavItem project={prevProject} label="Previous project" />}
                            {nextProject && <ProjectNavItem project={nextProject} label="Next project" />}
                        </div>
                    </nav>
                )}
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

function ProjectMedia({ media }) {
    return <DynamicComponent {...media} className={classNames({ 'w-full': media.type === 'ImageBlock' })} />;
}

function ProjectNavItem({ project, label }) {
    return (
        <Annotated content={project}>
            <Link className="sb-project-nav-item group" href={project}>
                {project.featuredImage && (
                    <div className="h-0 w-full mb-6 pt-2/3 relative overflow-hidden">
                        <ImageBlock
                            {...project.featuredImage}
                            className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                )}
                <span className="sb-component sb-component-block sb-component-link">{label}</span>
            </Link>
        </Annotated>
    );
}
