import { Model } from '@stackbit/types';

export const SocialModel: Model = {
    type: 'object',
    name: 'Social',
    label: 'Social',
    labelField: 'label',
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
            name: 'label',
            label: 'Label',
            default: 'Facebook'
        },
        {
            type: 'string',
            name: 'altText',
            label: 'Alt text',
            default: '',
            description: 'The alternative text for screen readers'
        },
        {
            type: 'string',
            name: 'url',
            label: 'URL',
            default: '/',
            required: true
        },
        {
            type: 'enum',
            name: 'icon',
            group: 'styles',
            label: 'Icon',
            options: [
                {
                    label: 'Facebook',
                    value: 'facebook'
                },
                {
                    label: 'GitHub',
                    value: 'github'
                },
                {
                    label: 'Instagram',
                    value: 'instagram'
                },
                {
                    label: 'LinkedIn',
                    value: 'linkedin'
                },
                {
                    label: 'Reddit',
                    value: 'reddit'
                },
                {
                    label: 'Twitter',
                    value: 'twitter'
                },
                {
                    label: 'Vimeo',
                    value: 'vimeo'
                },
                {
                    label: 'YouTube',
                    value: 'youtube'
                }
            ],
            default: 'facebook',
            required: true
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
