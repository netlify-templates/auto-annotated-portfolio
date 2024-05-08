import { Model } from '@stackbit/types';

export const FooterModel: Model = {
    type: 'object',
    name: 'Footer',
    label: 'Footer',
    labelField: 'copyrightText',
    readOnly: true,
    fields: [
        {
            type: 'list',
            name: 'primaryLinks',
            label: 'Primary navigation links',
            items: {
                type: 'model',
                models: ['Button', 'Link']
            },
            default: [
                {
                    type: 'Link',
                    label: 'Projects',
                    url: '/',
                    altText: 'Projects'
                },
                {
                    type: 'Link',
                    label: 'Info',
                    url: '/',
                    altText: 'Info'
                }
            ]
        },
        {
            type: 'model',
            name: 'contacts',
            label: 'Contacts',
            models: ['ContactBlock'],
            default: {
                phoneNumber: '850-123-5021',
                phoneAltText: 'Call us',
                email: 'john@doe.com',
                emailAltText: 'Email us'
            }
        },
        {
            type: 'markdown',
            name: 'copyrightText',
            label: 'Copyright text',
            default: 'Copyright text'
        },
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    width: ['narrow', 'wide', 'full'],
                    padding: ['tw0:36']
                }
            },
            default: {
                self: {
                    width: 'narrow',
                    padding: ['pt-16', 'pb-16', 'pl-4', 'pr-4']
                }
            }
        }
    ]
};
