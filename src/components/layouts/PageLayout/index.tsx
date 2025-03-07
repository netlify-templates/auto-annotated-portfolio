import * as React from 'react';

import { DynamicComponent } from '@/components/components-registry';
import { PageComponentProps, PageLayout } from '@/types';
import BaseLayout from '../BaseLayout';

type ComponentProps = PageComponentProps & PageLayout;

const Component: React.FC<ComponentProps> = (props) => {
    const { sections = [] } = props;

    return (
        <BaseLayout {...props}>
            {sections.map((section, index) => {
                return <DynamicComponent key={index} {...section} />;
            })}
        </BaseLayout>
    );
};
export default Component;
