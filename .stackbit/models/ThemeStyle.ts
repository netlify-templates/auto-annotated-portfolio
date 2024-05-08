import { Model } from '@stackbit/types';

export const ThemeStyleModel: Model = {
    type: 'data',
    name: 'ThemeStyle',
    label: 'Theme Style',
    singleInstance: true,
    readOnly: true,
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
        },
        {
            name: 'button-styles',
            label: 'Button styles',
            icon: 'palette'
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
                    label: 'Font primary',
                    value: 'fontPrimary'
                },
                {
                    label: 'Font secondary',
                    value: 'fontSecondary'
                }
            ],
            default: 'fontPrimary',
            required: true
        },
        {
            type: 'model',
            name: 'h1',
            label: 'H1',
            models: ['ThemeStyleHeading'],
            group: 'text-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'h2',
            label: 'H2',
            models: ['ThemeStyleHeading'],
            group: 'text-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'h3',
            label: 'H3',
            models: ['ThemeStyleHeading'],
            group: 'text-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'h4',
            label: 'H4',
            models: ['ThemeStyleHeading'],
            group: 'text-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'h5',
            label: 'H5',
            models: ['ThemeStyleHeading'],
            group: 'text-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'h6',
            label: 'H6',
            models: ['ThemeStyleHeading'],
            group: 'text-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'buttonPrimary',
            label: 'Primary button',
            models: ['ThemeStyleButton'],
            group: 'button-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'buttonSecondary',
            label: 'Secondary button',
            models: ['ThemeStyleButton'],
            group: 'button-styles',
            readOnly: true
        },
        {
            type: 'model',
            name: 'link',
            label: 'Link',
            models: ['ThemeStyleLink'],
            group: 'button-styles',
            readOnly: true
        }
    ]
};
