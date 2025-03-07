import * as React from 'react';

import { DynamicComponent } from '@/components/components-registry';
import ProjectFeedSection from '@/components/sections/ProjectFeedSection';
import { PageComponentProps, ProjectFeedLayout, ProjectLayout } from '@/types';
import BaseLayout from '../BaseLayout';

type ComponentProps = PageComponentProps & ProjectFeedLayout & { items: ProjectLayout[] };

const Component: React.FC<ComponentProps> = (props) => {
    const { topSections = [], bottomSections = [], items, projectFeed } = props;

    return (
        <BaseLayout {...props}>
            {topSections?.map((section, index) => {
                return <DynamicComponent key={index} {...section} />;
            })}
            <ProjectFeedSection {...projectFeed} projects={items} />
            {bottomSections?.map((section, index) => {
                return <DynamicComponent key={index} {...section} />;
            })}
        </BaseLayout>
    );
};
export default Component;
