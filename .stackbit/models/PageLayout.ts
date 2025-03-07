import { Model } from '@stackbit/types';
import { seoFields, seoFieldsGroup, styleFields, styleFieldsGroup } from './page-common-fields';

export const PageLayoutModel: Model = {
    type: 'page',
    name: 'PageLayout',
    label: 'Page',
    hideContent: true,
    urlPath: '/{slug}',
    filePath: 'content/pages/{slug}.md',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    fieldGroups: [...seoFieldsGroup, ...styleFieldsGroup],
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
                            flexDirection: 'row',
                            textAlign: 'left'
                        }
                    }
                }
            ]
        },
        ...seoFields,
        ...styleFields
    ]
};
