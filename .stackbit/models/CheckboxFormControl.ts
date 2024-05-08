import { Model } from '@stackbit/types';

export const CheckboxFormControlModel: Model = {
    type: 'object',
    name: 'CheckboxFormControl',
    label: 'Checkbox',
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
            default: 'updates',
            required: true,
            description: "Must be unique - this is the property name that will be sent to the server with this field's value."
        },
        {
            type: 'string',
            name: 'label',
            label: 'Label',
            default: 'Sign me up to receive updates'
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
