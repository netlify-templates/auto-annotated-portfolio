import { Model } from '@stackbit/types';
import { seoFields, seoFieldGroups } from './seo-fields';

export const PageLayoutModel: Model = {
    type: 'page',
    name: 'PageLayout',
    label: 'Page',
    hideContent: true,
    urlPath: '/{slug}',
    filePath: 'content/pages/{slug}.md',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    fieldGroups: [
        ...seoFieldGroups,
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'This is a new page',
            required: true
        },
        {
            type: 'list',
            name: 'sections',
            label: 'Sections',
            items: {
                type: 'model',
                models: [],
                groups: ['SectionModels']
            },
            default: [
                {
                    type: 'HeroSection',
                    elementId: 'homepage-hero-1',
                    title: 'This Is A Big Hero Headline',
                    text: 'Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl. Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat itae interdum. Ut nec massa eget lorem blandit condimentum et at risus.',
                    actions: [
                        {
                            type: 'Button',
                            label: 'Get Started',
                            url: '/',
                            style: 'primary',
                            elementId: 'hero-main-button'
                        },
                        {
                            type: 'Button',
                            label: 'Learn More',
                            url: '/',
                            style: 'secondary'
                        }
                    ],
                    media: {
                        type: 'ImageBlock',
                        url: '/images/hero.webp',
                        altText: 'Image alt text'
                    },
                    styles: {
                        self: {
                            height: 'auto',
                            width: 'wide',
                            margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
                            padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        },
                        title: {
                            textAlign: 'left'
                        },
                        subtitle: {
                            fontWeight: 400,
                            textAlign: 'left'
                        },
                        text: {
                            textAlign: 'left'
                        },
                        actions: {
                            justifyContent: 'flex-start'
                        }
                    }
                }
            ]
        },
        ...seoFields,
        {
            type: 'enum',
            name: 'colors',
            label: 'Colors',
            description: 'The color theme of the page',
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
                }
            ],
            default: 'colors-a'
        },
        {
            type: 'model',
            name: 'backgroundImage',
            group: 'styles',
            label: 'Page background image',
            models: ['BackgroundImage'],
            default: {
                type: 'BackgroundImage',
                url: '/images/bg2.jpg'
            }
        }
    ]
};
