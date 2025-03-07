import * as React from 'react';

import { DynamicComponent } from '@/components/components-registry';
import PostFeedSection from '@/components/sections/PostFeedSection';
import { PageComponentProps, PostFeedLayout, PostLayout } from '@/types';
import BaseLayout from '../BaseLayout';

type ComponentProps = PageComponentProps & PostFeedLayout & { items: PostLayout[] };

const Component: React.FC<ComponentProps> = (props) => {
    const { topSections = [], bottomSections = [], items, postFeed } = props;

    return (
        <BaseLayout {...props}>
            {topSections?.map((section, index) => {
                return <DynamicComponent key={index} {...section} />;
            })}
            <PostFeedSection {...postFeed} posts={items} />
            {bottomSections?.map((section, index) => {
                return <DynamicComponent key={index} {...section} />;
            })}
        </BaseLayout>
    );
};
export default Component;
