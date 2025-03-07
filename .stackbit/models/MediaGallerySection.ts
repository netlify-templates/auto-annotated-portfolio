import { Model } from '@stackbit/types';
import { colorFields, settingFields, settingFieldsGroup, styleFieldsGroup } from './section-common-fields';

export const MediaGallerySectionModel: Model = {
    type: 'object',
    name: 'MediaGallerySection',
    label: 'Media gallery',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['SectionModels'],
    fieldGroups: [...styleFieldsGroup, ...settingFieldsGroup],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'Gallery'
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            default: 'This is the subtitle'
        },
        {
            type: 'list',
            name: 'images',
            label: 'Images',
            items: {
                type: 'model',
                models: ['ImageBlock']
            },
            default: [
                {
                    type: 'ImageBlock',
                    url: '/images/gallery-1.jpg',
                    altText: 'Image one',
                    caption: 'Image one caption'
                },
                {
                    type: 'ImageBlock',
                    url: '/images/gallery-2.jpg',
                    altText: 'Image two',
                    caption: 'Image two caption'
                },
                {
                    type: 'ImageBlock',
                    url: '/images/gallery-3.jpg',
                    altText: 'Image three',
                    caption: 'Image three caption'
                },
                {
                    type: 'ImageBlock',
                    url: '/images/gallery-4.jpg',
                    altText: 'Image four',
                    caption: 'Image four caption'
                }
            ]
        },
        ...colorFields,
        {
            type: 'number',
            name: 'spacing',
            label: 'Spacing between images',
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
            name: 'columns',
            label: 'Images per row',
            group: 'styles',
            controlType: 'slider',
            min: 1,
            max: 7,
            step: 1,
            default: 4
        },
        {
            type: 'enum',
            name: 'aspectRatio',
            label: 'Image aspect ratio',
            group: 'styles',
            options: [
                {
                    label: '1:1',
                    value: '1:1'
                },
                {
                    label: '3:2',
                    value: '3:2'
                },
                {
                    label: '2:3',
                    value: '2:3'
                },
                {
                    label: '4:3',
                    value: '4:3'
                },
                {
                    label: '3:4',
                    value: '3:4'
                },
                {
                    label: '16:9',
                    value: '16:9'
                },
                {
                    label: 'Auto',
                    value: 'auto'
                }
            ],
            default: '1:1'
        },
        {
            type: 'boolean',
            name: 'showCaption',
            group: 'styles',
            label: 'Show caption',
            default: true
        },
        {
            type: 'boolean',
            name: 'enableHover',
            group: 'styles',
            label: 'Enable hover',
            default: true
        },
        ...settingFields,
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    width: ['narrow', 'wide', 'full'],
                    height: ['auto', 'screen'],
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
                    width: 'full',
                    height: 'auto',
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
