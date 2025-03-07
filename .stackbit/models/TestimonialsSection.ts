import { Model } from '@stackbit/types';
import { colorFields, settingFields, settingFieldsGroup, styleFieldsGroup } from './section-common-fields';

export const TestimonialsSectionModel: Model = {
    type: 'object',
    name: 'TestimonialsSection',
    label: 'Testimonials',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['SectionModels'],
    fieldGroups: [...styleFieldsGroup, ...settingFieldsGroup],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title'
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle'
        },
        {
            type: 'list',
            name: 'testimonials',
            label: 'Testimonials',
            items: {
                type: 'model',
                models: ['Testimonial']
            },
            default: [
                {
                    type: 'Testimonial',
                    quote: 'It’s great to see someone taking action while still maintaining a\nsustainable fish supply to home cooks.',
                    name: 'Johnna Doe',
                    title: 'Product Marketing Manager at Acme',
                    image: {
                        type: 'ImageBlock',
                        url: 'https://assets.stackbit.com/components/images/default/default-person.png',
                        altText: 'Person photo'
                    }
                }
            ]
        },
        ...colorFields,
        {
            type: 'enum',
            name: 'variant',
            group: 'styles',
            label: 'Arrangement',
            options: [
                {
                    label: 'Two columns',
                    value: 'variant-a'
                },
                {
                    label: 'List, small images',
                    value: 'variant-b'
                },
                {
                    label: 'List, large images',
                    value: 'variant-c'
                }
            ],
            default: 'variant-a',
            required: true
        },
        ...settingFields,
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    height: ['auto', 'screen'],
                    width: ['narrow', 'wide', 'full'],
                    margin: ['tw0:96'],
                    padding: ['tw0:96'],
                    borderRadius: '*',
                    borderWidth: ['0:8'],
                    borderStyle: '*',
                    borderColor: [
                        {
                            value: 'border-(--theme-light)',
                            label: 'Light color',
                            color: '$light'
                        },
                        {
                            value: 'border-(--theme-dark)',
                            label: 'Dark color',
                            color: '$dark'
                        },
                        {
                            value: 'border-(--theme-primary)',
                            label: 'Primary color',
                            color: '$primary'
                        },
                        {
                            value: 'border-(--theme-secondary)',
                            label: 'Secondary color',
                            color: '$secondary'
                        },
                        {
                            value: 'border-(--theme-complementary)',
                            label: 'Complementary color',
                            color: '$complementary'
                        }
                    ],
                    textAlign: ['left', 'center', 'right']
                }
            },
            default: {
                self: {
                    height: 'auto',
                    width: 'wide',
                    margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
                    padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
                    borderRadius: 'none',
                    borderWidth: 0,
                    borderStyle: 'none',
                    borderColor: 'border-(--theme-dark)',
                    textAlign: 'center'
                }
            }
        }
    ]
};
