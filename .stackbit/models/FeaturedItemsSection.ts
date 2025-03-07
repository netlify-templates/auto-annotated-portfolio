import { Model } from '@stackbit/types';
import { colorFields, settingFields, settingFieldsGroup, styleFieldsGroup } from './section-common-fields';

export const FeaturedItemsSectionModel: Model = {
    type: 'object',
    name: 'FeaturedItemsSection',
    label: 'Featured items',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['SectionModels'],
    fieldGroups: [...styleFieldsGroup, ...settingFieldsGroup],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'Featured Items'
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            default: 'The section subtitle'
        },
        {
            type: 'list',
            name: 'items',
            label: 'Items',
            items: {
                type: 'model',
                models: ['FeaturedItem']
            },
            default: [
                {
                    type: 'FeaturedItem',
                    title: 'Item Title',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.',
                    featuredImage: {
                        type: 'ImageBlock',
                        url: 'https://assets.stackbit.com/components/images/default/default-image.png',
                        altText: 'Item image'
                    },
                    styles: {
                        self: {
                            textAlign: 'left'
                        }
                    }
                }
            ]
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
                    label: 'Apply Now',
                    url: '#',
                    style: 'primary'
                },
                {
                    type: 'Button',
                    label: 'Learn More',
                    url: '#',
                    style: 'secondary'
                }
            ]
        },
        ...colorFields,
        {
            type: 'number',
            name: 'columns',
            label: 'Items per row',
            group: 'styles',
            controlType: 'slider',
            min: 1,
            max: 4,
            step: 1,
            default: 3
        },
        {
            type: 'number',
            name: 'spacingX',
            label: 'Horizontal spacing between items',
            group: 'styles',
            controlType: 'slider',
            min: 0,
            max: 160,
            step: 1,
            unit: 'px',
            default: 16
        },
        {
            type: 'number',
            name: 'spacingY',
            label: 'Vertical spacing between items',
            group: 'styles',
            controlType: 'slider',
            min: 0,
            max: 160,
            step: 1,
            unit: 'px',
            default: 16
        },
        ...settingFields,
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
