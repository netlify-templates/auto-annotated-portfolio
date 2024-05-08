import { Model } from '@stackbit/types';

export const BackgroundImageModel: Model = {
    type: 'object',
    name: 'BackgroundImage',
    label: 'Background image',
    labelField: 'url',
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        }
    ],
    fields: [
        {
            type: 'image',
            name: 'url',
            label: 'Background image',
            description: 'The URL of the image',
            default: '/images/bg2.jpg'
        },
        {
            type: 'enum',
            name: 'backgroundSize',
            group: 'styles',
            label: 'Background image size',
            controlType: 'button-group',
            options: [
                {
                    label: 'Auto',
                    value: 'auto'
                },
                {
                    label: 'Fill',
                    value: 'cover'
                },
                {
                    label: 'Fit',
                    value: 'contain'
                }
            ],
            default: 'cover',
            required: true
        },
        {
            type: 'enum',
            name: 'backgroundPosition',
            group: 'styles',
            label: 'Background image position',
            options: [
                {
                    label: 'Bottom',
                    value: 'bottom'
                },
                {
                    label: 'Center',
                    value: 'center'
                },
                {
                    label: 'Left',
                    value: 'left'
                },
                {
                    label: 'Left bottom',
                    value: 'left-bottom'
                },
                {
                    label: 'Left top',
                    value: 'left-top'
                },
                {
                    label: 'Right',
                    value: 'right'
                },
                {
                    label: 'Right bottom',
                    value: 'right-bottom'
                },
                {
                    label: 'Right top',
                    value: 'right-top'
                },
                {
                    label: 'Top',
                    value: 'top'
                }
            ],
            default: 'center',
            required: true
        },
        {
            type: 'enum',
            name: 'backgroundRepeat',
            group: 'styles',
            label: 'Background image repeat',
            controlType: 'button-group',
            options: [
                {
                    label: 'Repeat',
                    value: 'repeat'
                },
                {
                    label: 'Repeat X',
                    value: 'repeat-x'
                },
                {
                    label: 'Repeat Y',
                    value: 'repeat-y'
                },
                {
                    label: 'No repeat',
                    value: 'no-repeat'
                }
            ],
            default: 'no-repeat',
            required: true
        },
        {
            type: 'number',
            name: 'opacity',
            group: 'styles',
            label: 'Opacity',
            controlType: 'slider',
            min: 0,
            max: 100,
            step: 1,
            unit: '%',
            default: 100
        }
    ]
};
