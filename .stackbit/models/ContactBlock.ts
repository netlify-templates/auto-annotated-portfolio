import { Model } from '@stackbit/types';

export const ContactBlockModel: Model = {
    type: 'object',
    name: 'ContactBlock',
    label: 'Contact',
    labelField: 'title',
    fieldGroups: [
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
            description: 'The value of the field is used for presentation purposes in Stackbit',
            default: 'Contact details'
        },
        {
            type: 'string',
            name: 'phoneNumber',
            label: 'Phone number',
            default: '850-123-5021'
        },
        {
            type: 'string',
            name: 'phoneAltText',
            label: 'Phone alt text',
            default: 'Phone'
        },
        {
            type: 'string',
            name: 'email',
            label: 'Email address',
            default: 'john@doe.com'
        },
        {
            type: 'string',
            name: 'emailAltText',
            label: 'Email address alt text',
            default: 'Email'
        },
        {
            type: 'string',
            name: 'address',
            label: 'Address',
            default: '312 Lovely Street, NY'
        },
        {
            type: 'string',
            name: 'addressAltText',
            label: 'Address alt text',
            default: 'Address'
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
