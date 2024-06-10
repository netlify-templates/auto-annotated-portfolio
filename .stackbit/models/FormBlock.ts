import { Model } from '@stackbit/types';

export const FormBlockModel: Model = {
    type: 'object',
    name: 'FormBlock',
    label: 'Form',
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
            default: 'Title of the form'
        },
        {
            type: 'list',
            name: 'fields',
            label: 'Fields',
            items: {
                type: 'model',
                models: ['TextFormControl', 'EmailFormControl', 'TextareaFormControl', 'CheckboxFormControl', 'SelectFormControl']
            },
            default: [
                {
                    type: 'TextFormControl',
                    label: 'Name',
                    name: 'name',
                    placeholder: 'Your name',
                    isRequired: true,
                    width: '1/2'
                },
                {
                    type: 'EmailFormControl',
                    label: 'Email',
                    name: 'email',
                    placeholder: 'Your email',
                    isRequired: true,
                    width: '1/2'
                },
                {
                    type: 'TextareaFormControl',
                    label: 'Message',
                    name: 'message',
                    placeholder: 'Type your message here',
                    isRequired: false,
                    width: 'full'
                },
                {
                    type: 'CheckboxFormControl',
                    name: 'updates',
                    label: 'Sign me up to receive updates',
                    isRequired: false,
                    width: 'full'
                }
            ]
        },
        {
            type: 'string',
            name: 'submitLabel',
            label: 'Button',
            default: 'Send Message'
        },
        {
            type: 'string',
            name: 'elementId',
            group: 'settings',
            label: 'Element ID',
            description: 'The unique ID used for id and name attributes, must not contain whitespace',
            default: 'contact-form',
            required: true
        },
        {
            type: 'style',
            name: 'styles',
            styles: {
                submitLabel: {
                    textAlign: ['left', 'center', 'right']
                }
            },
            default: {
                submitLabel: {
                    textAlign: 'left'
                }
            }
        }
    ]
};
