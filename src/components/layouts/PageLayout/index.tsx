import * as React from 'react';

import BaseLayout from '../BaseLayout';
import { DynamicComponent } from '../../components-registry';
import { PageLayout, PageComponentProps } from '@/types';

type ComponentProps = PageComponentProps & PageLayout;

const Component: React.FC<ComponentProps> = (props) => {
    const { global, ...page } = props;
    const { title, sections = [] } = page;

    return (
        <BaseLayout {...props}>
            <main id="main" className="sb-layout sb-page-layout">
                {title && <h1 className="sr-only">{title}</h1>}
                {sections.length > 0 && (
                    <div>
                        {sections.map((section, index) => {
                            return <DynamicComponent key={index} {...section} />;
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
};
export default Component;
