import { Model } from '@stackbit/types';
import { colorFields, settingFields, settingFieldsGroup, styleFieldsGroup } from './section-common-fields';

export const FeaturedProjectsSectionModel: Model = {
    type: 'object',
    name: 'FeaturedProjectsSection',
    label: 'Featured projects',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['SectionModels'],
    fieldGroups: [...styleFieldsGroup, ...settingFieldsGroup],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'Featured'
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            default: 'Featured projects section example'
        },
        {
            type: 'list',
            name: 'actions',
            label: 'Actions',
            items: {
                type: 'model',
                models: ['Button', 'Link']
            },
            default: [
                {
                    type: 'Button',
                    label: 'View all',
                    url: '/',
                    style: 'primary'
                }
            ]
        },
        {
            type: 'list',
            name: 'projects',
            label: 'Projects',
            items: {
                type: 'reference',
                models: ['ProjectLayout']
            },
            default: [
                'content/pages/projects/project-three.md',
                'content/pages/projects/project-two.md',
                'content/pages/projects/project-one.md'
            ]
        },
        ...colorFields,
        {
            type: 'enum',
            name: 'variant',
            group: 'styles',
            label: 'Arrangement',
            options: [
                {
                    label: 'Two columns grid',
                    value: 'variant-a'
                },
                {
                    label: 'Three columns grid',
                    value: 'variant-b'
                },
                {
                    label: 'List',
                    value: 'variant-c'
                },
                {
                    label: 'List alt',
                    value: 'variant-d'
                }
            ],
            default: 'variant-a',
            required: true
        },
        ...settingFields,
        {
            type: 'boolean',
            name: 'showDate',
            group: 'settings',
            label: 'Show project date',
            default: false
        },
        {
            type: 'boolean',
            name: 'showDescription',
            group: 'settings',
            label: 'Show project description',
            default: false
        },
        {
            type: 'boolean',
            name: 'showFeaturedImage',
            group: 'settings',
            label: 'Show featured image',
            default: false
        },
        {
            type: 'boolean',
            name: 'showReadMoreLink',
            group: 'settings',
            label: 'Show keep reading link',
            default: false
        },
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    height: ['auto', 'screen'],
                    width: ['narrow', 'wide', 'full'],
                    margin: ['tw0:96'],
                    padding: ['tw0:96'],
                    borderRadius: '*',
                    borderWidth: ['0:8'],
                    borderStyle: '*',
                    borderColor: [
                        {
                            value: 'border-(--theme-light)',
                            label: 'Light color',
                            color: '$light'
                        },
                        {
                            value: 'border-(--theme-dark)',
                            label: 'Dark color',
                            color: '$dark'
                        },
                        {
                            value: 'border-(--theme-primary)',
                            label: 'Primary color',
                            color: '$primary'
                        },
                        {
                            value: 'border-(--theme-secondary)',
                            label: 'Secondary color',
                            color: '$secondary'
                        },
                        {
                            value: 'border-(--theme-complementary)',
                            label: 'Complementary color',
                            color: '$complementary'
                        }
                    ],
                    textAlign: ['left', 'center', 'right']
                }
            },
            default: {
                self: {
                    height: 'auto',
                    width: 'wide',
                    margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
                    padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
                    borderRadius: 'none',
                    borderWidth: 0,
                    borderStyle: 'none',
                    borderColor: 'border-(--theme-dark)',
                    textAlign: 'center'
                }
            }
        }
    ]
};
