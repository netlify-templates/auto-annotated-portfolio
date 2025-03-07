import { Model } from '@stackbit/types';

export const ThemeStyleModel: Model = {
    type: 'data',
    name: 'ThemeStyle',
    label: 'Theme Style',
    singleInstance: true,
    canDelete: false,
    filePath: 'content/data/style.json',
    fieldGroups: [
        {
            name: 'color-palettes',
            label: 'Color palettes',
            icon: 'fill-drip'
        },
        {
            name: 'text-styles',
            label: 'Text styles',
            icon: 'text'
        }
    ],
    fields: [
        {
            type: 'color',
            name: 'light',
            label: 'Light',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'onLight',
            label: 'Foreground over light',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'dark',
            label: 'Dark',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'onDark',
            label: 'Foreground over dark',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'primary',
            label: 'Primary',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'onPrimary',
            label: 'Foreground over primary',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'secondary',
            label: 'Secondary',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'onSecondary',
            label: 'Foreground over secondary',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'complementary',
            label: 'Complementary',
            group: 'color-palettes'
        },
        {
            type: 'color',
            name: 'onComplementary',
            label: 'Foreground over complementary',
            group: 'color-palettes'
        },
        {
            type: 'enum',
            name: 'fontBody',
            label: 'Font',
            group: 'text-styles',
            options: [
                {
                    label: 'DM Mono',
                    value: '"DM Mono", monospace'
                },
                {
                    label: 'Azeret Mono',
                    value: '"Azeret Mono", monospace'
                }
            ],
            default: '"DM Mono", monospace',
            required: true
        },
        {
            type: 'enum',
            name: 'headingWeight',
            label: 'Heading font weight',
            group: 'text-styles',
            controlType: 'button-group',
            options: [
                {
                    label: 'Normal',
                    value: '400'
                },
                {
                    label: 'Medium',
                    value: '500'
                }
            ],
            default: '500',
            required: true
        },
        {
            type: 'enum',
            name: 'headingCase',
            label: 'Heading letter case',
            group: 'text-styles',
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
        }
    ]
};
