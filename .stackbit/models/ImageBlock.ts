import { Model } from '@stackbit/types';

export const ImageBlockModel: Model = {
    type: 'object',
    name: 'ImageBlock',
    label: 'Image',
    labelField: 'altText',
    fieldGroups: [
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ],
    fields: [
        {
            type: 'image',
            name: 'url',
            label: 'Image',
            description: 'The URL of the image',
            default: 'https://assets.stackbit.com/components/images/default/default-image.png'
        },
        {
            type: 'string',
            name: 'altText',
            label: 'Alt text',
            description: 'The alt text of the image',
            default: 'altText of the image'
        },
        {
            type: 'string',
            name: 'caption',
            label: 'Caption',
            description: 'The caption of the image',
            default: 'Caption of the image'
        },
        {
            type: 'string',
            name: 'elementId',
            group: 'settings',
            label: 'Element ID',
            description: 'The unique ID for an HTML element, must not contain whitespace',
            default: ''
        }
    ]
};
