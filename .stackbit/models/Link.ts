import { Model } from '@stackbit/types';

export const LinkModel: Model = {
    type: 'object',
    name: 'Link',
    label: 'Link',
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
            default: 'Learn more'
        },
        {
            type: 'string',
            name: 'altText',
            label: 'Alt text',
            description: 'The alternative text for screen readers',
            default: ''
        },
        {
            type: 'string',
            name: 'url',
            label: 'URL',
            default: '/',
            required: true
        },
        {
            type: 'boolean',
            name: 'showIcon',
            group: 'styles',
            label: 'Show icon',
            default: false
        },
        {
            type: 'enum',
            name: 'icon',
            group: 'styles',
            label: 'Icon',
            options: [
                {
                    label: 'Apple',
                    value: 'apple'
                },
                {
                    label: 'Arrow left',
                    value: 'arrowLeft'
                },
                {
                    label: 'Arrow left circle',
                    value: 'arrowLeftCircle'
                },
                {
                    label: 'Arrow right',
                    value: 'arrowRight'
                },
                {
                    label: 'Arrow right circle',
                    value: 'arrowRightCircle'
                },
                {
                    label: 'Arrow up left',
                    value: 'arrowUpLeft'
                },
                {
                    label: 'Arrow up right',
                    value: 'arrowUpRight'
                },
                {
                    label: 'Cart',
                    value: 'cart'
                },
                {
                    label: 'Chevron left',
                    value: 'chevronLeft'
                },
                {
                    label: 'Chevron right',
                    value: 'chevronRight'
                },
                {
                    label: 'Facebook',
                    value: 'facebook'
                },
                {
                    label: 'GitHub',
                    value: 'github'
                },
                {
                    label: 'Google Play',
                    value: 'googlePlay'
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
                    label: 'Mail',
                    value: 'mail'
                },
                {
                    label: 'Play',
                    value: 'play'
                },
                {
                    label: 'Play circle',
                    value: 'playCircle'
                },
                {
                    label: 'Reddit',
                    value: 'reddit'
                },
                {
                    label: 'Send',
                    value: 'send'
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
            default: 'arrowRight'
        },
        {
            type: 'enum',
            name: 'iconPosition',
            group: 'styles',
            controlType: 'button-group',
            label: 'Icon position',
            options: [
                {
                    label: 'Left',
                    value: 'left'
                },
                {
                    label: 'Right',
                    value: 'right'
                }
            ],
            default: 'right'
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
