import { Model } from '@stackbit/types';

export const ThemeStyleLinkModel: Model = {
    type: 'object',
    name: 'ThemeStyleLink',
    label: 'Link',
    labelField: 'weight',
    fields: [
        {
            type: 'enum',
            name: 'weight',
            label: 'Font weight',
            controlType: 'button-group',
            options: [
                {
                    label: 'Normal',
                    value: 'normal'
                },
                {
                    label: 'Medium',
                    value: 'medium'
                }
            ],
            default: 'medium',
            required: true
        },
        {
            type: 'enum',
            name: 'case',
            label: 'Case',
            controlType: 'button-group',
            options: [
                {
                    label: 'Default',
                    value: 'none'
                },
                {
                    label: 'ag',
                    value: 'lowercase'
                },
                {
                    label: 'Ag',
                    value: 'capitalize'
                },
                {
                    label: 'AG',
                    value: 'uppercase'
                }
            ],
            default: 'none',
            required: true
        },
        {
            type: 'enum',
            name: 'letterSpacing',
            label: 'Letter spacing',
            controlType: 'button-group',
            options: [
                {
                    label: 'Tighter',
                    value: 'tighter'
                },
                {
                    label: 'Tight',
                    value: 'tight'
                },
                {
                    label: 'Normal',
                    value: 'normal'
                },
                {
                    label: 'Wide',
                    value: 'wide'
                },
                {
                    label: 'Wider',
                    value: 'wider'
                }
            ],
            default: 'normal',
            required: true
        }
    ]
};
