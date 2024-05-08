import { Model } from '@stackbit/types';

export const ThemeStyleButtonModel: Model = {
    type: 'object',
    name: 'ThemeStyleButton',
    label: 'Button',
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
        },
        {
            type: 'number',
            name: 'horizontalPadding',
            label: 'Horizontal padding',
            controlType: 'slider',
            min: 0,
            max: 30,
            step: 1,
            unit: 'px',
            default: 24
        },
        {
            type: 'number',
            name: 'verticalPadding',
            label: 'Vertical padding',
            controlType: 'slider',
            min: 0,
            max: 30,
            step: 1,
            unit: 'px',
            default: 12
        }
    ]
};
