import { Model } from '@stackbit/types';
import { seoFields, seoFieldsGroup, styleFields, styleFieldsGroup } from './page-common-fields';

export const ProjectLayoutModel: Model = {
    type: 'page',
    name: 'ProjectLayout',
    label: 'Project page',
    urlPath: '/projects/{slug}',
    filePath: 'content/pages/projects/{slug}.md',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    fieldGroups: [...seoFieldsGroup, ...styleFieldsGroup],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'This is a project title',
            required: true
        },
        {
            type: 'date',
            name: 'date',
            label: 'Date',
            required: true
        },
        {
            type: 'string',
            name: 'client',
            label: 'Client',
            default: 'Awesome client'
        },
        {
            type: 'string',
            name: 'description',
            label: 'Description',
            default:
                'Nunc rutrum felis dui, ut consequat sapien scelerisque vel. Integer condimentum dignissim justo vel faucibus.'
        },
        {
            type: 'model',
            name: 'featuredImage',
            label: 'Featured image',
            models: ['ImageBlock'],
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/post-4.jpeg',
                altText: 'Project thumbnail image',
                caption: ''
            }
        },
        {
            type: 'model',
            name: 'media',
            label: 'Media',
            models: ['ImageBlock', 'VideoBlock'],
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/post-4.jpeg',
                altText: 'Project image'
            }
        },
        {
            type: 'list',
            name: 'bottomSections',
            label: 'Sections',
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
