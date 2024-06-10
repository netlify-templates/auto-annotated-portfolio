import { Model } from '@stackbit/types';

export const ContactSectionModel: Model = {
    type: 'object',
    name: 'ContactSection',
    label: 'Contact',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['SectionModels'],
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
            name: 'title',
            label: 'Title'
        },
        {
            type: 'markdown',
            name: 'text',
            label: 'Text',
            default: 'Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.\nAenean vel aliquet elit, at blandit ipsum.'
        },
        {
            type: 'model',
            name: 'form',
            label: 'Form',
            models: ['FormBlock'],
            default: {
                type: 'FormBlock',
                elementId: 'contact-form',
                fields: [
                    {
                        type: 'TextFormControl',
                        name: 'name',
                        label: 'Name',
                        placeholder: 'Your name',
                        isRequired: true,
                        width: '1/2'
                    },
                    {
                        type: 'EmailFormControl',
                        name: 'email',
                        label: 'Email',
                        placeholder: 'Your email',
                        isRequired: true,
                        width: '1/2'
                    },
                    {
                        type: 'TextFormControl',
                        name: 'home-address',
                        label: 'Home address',
                        placeholder: 'Your home address',
                        isRequired: true,
                        width: 'full'
                    },
                    {
                        type: 'CheckboxFormControl',
                        name: 'updates',
                        label: 'Sign me up to receive updates',
                        width: 'full'
                    }
                ],
                submitLabel: 'Send Message'
            }
        },
        {
            type: 'model',
            name: 'media',
            label: 'Media',
            models: ['ImageBlock', 'VideoBlock'],
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/contact.png',
                altText: 'Contact form image'
            }
        },
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
        },
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
        },
        {
            type: 'string',
            name: 'elementId',
            group: 'settings',
            label: 'Element ID',
            description: 'The unique ID for an HTML element, must not contain whitespace',
            default: ''
        },
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    height: ['auto', 'screen'],
                    width: ['narrow', 'wide', 'full'],
                    margin: ['tw0:96'],
                    padding: ['tw0:96'],
                    alignItems: ['flex-start', 'flex-end', 'center'],
                    justifyContent: ['flex-start', 'flex-end', 'center'],
                    flexDirection: ['row', 'row-reverse', 'col', 'col-reverse'],
                    borderRadius: '*',
                    borderWidth: ['0:8'],
                    borderStyle: '*',
                    borderColor: [
                        {
                            value: 'border-primary',
                            label: 'Primary color',
                            color: '$primary'
                        },
                        {
                            value: 'border-secondary',
                            label: 'Secondary color',
                            color: '$secondary'
                        },
                        {
                            value: 'border-dark',
                            label: 'Dark color',
                            color: '$dark'
                        },
                        {
                            value: 'border-complementary',
                            label: 'Complementary color',
                            color: '$complementary'
                        }
                    ]
                },
                title: {
                    fontWeight: ['400', '500'],
                    fontStyle: ['italic'],
                    textAlign: ['left', 'center', 'right'],
                    textDecoration: ['underline']
                },
                text: {
                    textAlign: ['left', 'center', 'right']
                }
            },
            default: {
                self: {
                    height: 'auto',
                    width: 'wide',
                    margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
                    padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    borderRadius: 'none',
                    borderWidth: 0,
                    borderStyle: 'none',
                    borderColor: 'border-dark'
                },
                title: {
                    textAlign: 'left'
                },
                text: {
                    textAlign: 'left'
                }
            }
        }
    ]
};
