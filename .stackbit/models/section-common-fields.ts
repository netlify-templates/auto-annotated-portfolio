import { Field, FieldGroupItem } from '@stackbit/types';

export const backgroundFields: Field[] = [
    {
        type: 'enum',
        name: 'backgroundSize',
        group: 'styles',
        label: 'Background size',
        controlType: 'button-group',
        options: [
            {
                label: 'Full',
                value: 'full'
            },
            {
                label: 'Inset',
                value: 'inset'
            }
        ],
        default: 'full'
    }
];

export const colorFields: Field[] = [
    {
        type: 'enum',
        name: 'colors',
        label: 'Colors',
        description: 'The color theme of the section',
        group: 'styles',
        controlType: 'palette',
        options: [
            {
                label: 'Colors A',
                value: 'colors-a',
                textColor: '$onDark',
                backgroundColor: '$dark',
                borderColor: '#ececec'
            },
            {
                label: 'Colors B',
                value: 'colors-b',
                textColor: '$onLight',
                backgroundColor: '$light',
                borderColor: '#ececec'
            },
            {
                label: 'Colors C',
                value: 'colors-c',
                textColor: '$onPrimary',
                backgroundColor: '$primary',
                borderColor: '#ececec'
            },
            {
                label: 'Colors D',
                value: 'colors-d',
                textColor: '$onSecondary',
                backgroundColor: '$secondary',
                borderColor: '#ececec'
            },
            {
                label: 'Colors E',
                value: 'colors-e',
                textColor: '$onComplementary',
                backgroundColor: '$complementary',
                borderColor: '#ececec'
            },
            {
                label: 'Colors F',
                value: 'colors-f',
                textColor: '$onLight',
                backgroundColor: 'transparent',
                borderColor: '#ececec'
            }
        ],
        default: 'colors-f'
    }
];

export const settingFields: Field[] = [
    {
        type: 'string',
        name: 'elementId',
        group: 'settings',
        label: 'Element ID',
        description: 'The unique ID for an HTML element, must not contain whitespace',
        default: ''
    }
];

export const styleFieldsGroup: FieldGroupItem[] = [
    {
        name: 'styles',
        label: 'Styles',
        icon: 'palette'
    }
];

export const settingFieldsGroup: FieldGroupItem[] = [
    {
        name: 'settings',
        label: 'Settings',
        icon: 'gear'
    }
];
