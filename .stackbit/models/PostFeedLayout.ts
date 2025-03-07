import { Model } from '@stackbit/types';
import { seoFields, seoFieldsGroup, styleFields, styleFieldsGroup } from './page-common-fields';

export const PostFeedLayoutModel: Model = {
    type: 'page',
    name: 'PostFeedLayout',
    label: 'Blog',
    labelField: 'title',
    hideContent: true,
    singleInstance: true,
    urlPath: '/blog',
    file: 'content/pages/blog/index.md',
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
            name: 'postFeed',
            readOnly: true,
            label: 'Post Feed',
            models: ['PostFeedSection'],
            default: {
                title: null,
                subtitle: null,
                showDate: true,
                showAuthor: true,
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
