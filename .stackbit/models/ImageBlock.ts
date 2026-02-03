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
        },
        {
            name: 'overlay',
            label: 'Text Overlay',
            icon: 'text'
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
            name: 'link',
            label: 'Link URL',
            description: 'Optional link URL - clicking the image will navigate to this URL'
        },
        {
            type: 'boolean',
            name: 'linkInNewTab',
            label: 'Open link in new tab',
            default: false
        },
        {
            type: 'string',
            name: 'overlayText',
            label: 'Overlay Text',
            description: 'Text to display over the image',
            group: 'overlay'
        },
        {
            type: 'enum',
            name: 'overlayTextAlign',
            label: 'Text Alignment',
            group: 'overlay',
            options: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'right' }
            ],
            default: 'center'
        },
        {
            type: 'enum',
            name: 'overlayTextSize',
            label: 'Text Size',
            group: 'overlay',
            options: [
                { label: 'Small', value: 'small' },
                { label: 'Medium', value: 'medium' },
                { label: 'Large', value: 'large' },
                { label: 'Extra Large', value: 'xlarge' }
            ],
            default: 'medium'
        },
        {
            type: 'enum',
            name: 'overlayTextWeight',
            label: 'Text Weight',
            group: 'overlay',
            options: [
                { label: 'Normal', value: 'normal' },
                { label: 'Medium', value: 'medium' },
                { label: 'Bold', value: 'bold' }
            ],
            default: 'medium'
        },
        {
            type: 'color',
            name: 'overlayTextColor',
            label: 'Text Color',
            description: 'Color of the overlay text',
            group: 'overlay',
            default: '#ffffff'
        },
        {
            type: 'color',
            name: 'overlayBackgroundColor',
            label: 'Background Color',
            description: 'Background color behind the text (use alpha for transparency)',
            group: 'overlay',
            default: 'rgba(0, 0, 0, 0.5)'
        },
        {
            type: 'enum',
            name: 'overlayPosition',
            label: 'Text Position',
            group: 'overlay',
            options: [
                { label: 'Top', value: 'top' },
                { label: 'Center', value: 'center' },
                { label: 'Bottom', value: 'bottom' }
            ],
            default: 'center'
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
