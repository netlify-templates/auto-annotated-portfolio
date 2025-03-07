import { Model } from '@stackbit/types';
import { seoFields, seoFieldsGroup, styleFields, styleFieldsGroup } from './page-common-fields';

export const ProjectFeedLayoutModel: Model = {
    type: 'page',
    name: 'ProjectFeedLayout',
    label: 'Projects',
    hideContent: true,
    singleInstance: true,
    urlPath: '/projects',
    file: 'content/pages/projects/index.md',
    fieldGroups: [...seoFieldsGroup, ...styleFieldsGroup],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'This is a page title'
        },
        {
            type: 'model',
            name: 'projectFeed',
            readOnly: true,
            label: 'Project feed',
            models: ['ProjectFeedSection'],
            default: {
                title: null,
                subtitle: null,
                showDate: true,
                showDescription: true,
                variant: 'variant-a'
            }
        },
        {
            type: 'list',
            name: 'topSections',
            label: 'Top Sections',
            items: {
                type: 'model',
                models: [],
                groups: ['SectionModels']
            }
        },
        {
            type: 'list',
            name: 'bottomSections',
            label: 'Bottom Sections',
            items: {
                type: 'model',
                models: [],
                groups: ['SectionModels']
            }
        },
        ...seoFields,
        ...styleFields
    ]
};
