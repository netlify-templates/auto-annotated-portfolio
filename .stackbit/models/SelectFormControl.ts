import { Model } from '@stackbit/types';

export const SelectFormControlModel: Model = {
    type: 'object',
    name: 'SelectFormControl',
    label: 'Select',
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
            name: 'name',
            label: 'Name',
            required: true,
            default: 'subject',
            description: "Must be unique - this is the property name that will be sent to the server with this field's value."
        },
        {
            type: 'string',
            name: 'label',
            label: 'Label',
            default: 'Subject'
        },
        {
            type: 'boolean',
            name: 'hideLabel',
            label: 'Hide label',
            default: false
        },
        {
            type: 'string',
            name: 'defaultValue',
            label: 'Default value',
            default: 'Please choose...'
        },
        {
            type: 'list',
            name: 'options',
            label: 'Options',
            items: {
                type: 'string'
            },
            default: ['Logo design', 'Other']
        },
        {
            type: 'enum',
            name: 'width',
            group: 'styles',
            label: 'Width',
            options: [
                {
                    label: 'Full',
                    value: 'full'
                },
                {
                    label: 'One half',
                    value: '1/2'
                }
            ],
            default: 'full',
            required: true
        },
        {
            type: 'boolean',
            name: 'isRequired',
            group: 'settings',
            label: 'Is the field required?',
            default: false
        }
    ]
};
