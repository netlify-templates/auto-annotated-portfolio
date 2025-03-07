import { Model } from '@stackbit/types';
import { seoFields, seoFieldsGroup, styleFields, styleFieldsGroup } from './page-common-fields';

export const PostLayoutModel: Model = {
    type: 'page',
    name: 'PostLayout',
    label: 'Post',
    urlPath: '/blog/{slug}',
    filePath: 'content/pages/blog/{slug}.md',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    fieldGroups: [...seoFieldsGroup, ...styleFieldsGroup],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'This is a blog post title',
            required: true
        },
        {
            type: 'date',
            name: 'date',
            label: 'Date',
            required: true
        },
        {
            type: 'reference',
            name: 'author',
            label: 'Author',
            models: ['Person']
        },
        {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
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
                altText: 'Post thumbnail image'
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
                altText: 'Post image'
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
