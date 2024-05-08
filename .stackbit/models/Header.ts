import { Model } from '@stackbit/types';

export const HeaderModel: Model = {
    type: 'object',
    name: 'Header',
    label: 'Header',
    labelField: 'title',
    readOnly: true,
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'Your Brand'
        },
        {
            type: 'boolean',
            name: 'isTitleVisible',
            label: 'Display title',
            default: true
        },
        {
            type: 'model',
            name: 'logo',
            label: 'Logo',
            models: ['ImageBlock'],
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/default-image.png',
                altText: 'Your logo image',
                caption: ''
            }
        },
        {
            type: 'list',
            name: 'primaryLinks',
            label: 'Primary navigation links',
            items: {
                type: 'model',
                models: ['Link']
            },
            default: [
                {
                    type: 'Link',
                    label: 'Home',
                    url: '/',
                    altText: 'Home'
                },
                {
                    type: 'Link',
                    label: 'Blog',
                    url: '/',
                    altText: 'Blog'
                }
            ]
        },
        {
            type: 'list',
            name: 'socialLinks',
            label: 'Social links',
            items: {
                type: 'model',
                models: ['Social']
            },
            default: [
                {
                    type: 'Social',
                    label: '',
                    altText: 'Twitter',
                    url: '/',
                    icon: 'twitter'
                },
                {
                    type: 'Social',
                    label: '',
                    altText: 'GitHub',
                    url: '/',
                    icon: 'github'
                }
            ]
        },
        {
            type: 'enum',
            name: 'headerVariant',
            group: 'styles',
            label: 'Header arrangement',
            options: [
                {
                    label: 'Logo and primary links on the left',
                    value: 'variant-a'
                },
                {
                    label: 'Logo on the left and social links furthest to the right',
                    value: 'variant-b'
                },
                {
                    label: 'Logo on the left and primary links furthest to the right',
                    value: 'variant-c'
                }
            ],
            default: 'variant-c',
            required: true
        },
        {
            type: 'boolean',
            name: 'isSticky',
            group: 'styles',
            label: 'Make header stick to the top of the page',
            default: false
        },
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    width: ['narrow', 'wide', 'full']
                }
            },
            default: {
                self: {
                    width: 'narrow'
                }
            }
        }
    ]
};
