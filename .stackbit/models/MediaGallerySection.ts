import { Model } from '@stackbit/types';

export const MediaGallerySectionModel: Model = {
    type: 'object',
    name: 'MediaGallerySection',
    label: 'Media gallery',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['SectionModels'],
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        },
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ],
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
        {
            type: 'enum',
            name: 'colors',
            label: 'Colors',
            description: 'The color theme of the section',
            group: 'styles',
            controlType: 'palette',
            options: [
                {
                    label: 'Colors A',
                    value: 'colors-a',
                    textColor: '$onDark',
                    backgroundColor: '$dark',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors B',
                    value: 'colors-b',
                    textColor: '$onLight',
                    backgroundColor: '$light',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors C',
                    value: 'colors-c',
                    textColor: '$onPrimary',
                    backgroundColor: '$primary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors D',
                    value: 'colors-d',
                    textColor: '$onSecondary',
                    backgroundColor: '$secondary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors E',
                    value: 'colors-e',
                    textColor: '$onComplementary',
                    backgroundColor: '$complementary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors F',
                    value: 'colors-f',
                    textColor: '$onLight',
                    backgroundColor: 'transparent',
                    borderColor: '#ececec'
                }
            ],
            default: 'colors-f'
        },
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
        {
            type: 'string',
            name: 'elementId',
            group: 'settings',
            label: 'Element ID',
            description: 'The unique ID for an HTML element, must not contain whitespace',
            default: ''
        },
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    width: ['narrow', 'wide', 'full'],
                    height: ['auto', 'screen'],
                    margin: ['tw0:96'],
                    padding: ['tw0:96'],
                    justifyContent: ['flex-start', 'flex-end', 'center'],
                    borderRadius: '*',
                    borderWidth: ['0:8'],
                    borderStyle: '*',
                    borderColor: [
                        {
                            value: 'border-primary',
                            label: 'Primary color',
                            color: '$primary'
                        },
                        {
                            value: 'border-secondary',
                            label: 'Secondary color',
                            color: '$secondary'
                        },
                        {
                            value: 'border-dark',
                            label: 'Dark color',
                            color: '$dark'
                        },
                        {
                            value: 'border-complementary',
                            label: 'Complementary color',
                            color: '$complementary'
                        }
                    ]
                },
                title: {
                    fontWeight: ['400', '500'],
                    fontStyle: ['italic'],
                    textAlign: ['left', 'center', 'right'],
                    textDecoration: ['underline']
                },
                subtitle: {
                    fontWeight: ['400', '500'],
                    fontStyle: ['italic'],
                    textAlign: ['left', 'center', 'right'],
                    textDecoration: ['underline']
                }
            },
            default: {
                self: {
                    width: 'full',
                    height: 'auto',
                    margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
                    padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
                    justifyContent: 'center',
                    borderRadius: 'none',
                    borderWidth: 0,
                    borderStyle: 'none',
                    borderColor: 'border-dark'
                },
                title: {
                    textAlign: 'center'
                },
                subtitle: {
                    fontWeight: 400,
                    textAlign: 'center'
                }
            }
        }
    ]
};
