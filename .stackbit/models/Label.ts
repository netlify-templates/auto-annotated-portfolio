import { Model } from '@stackbit/types';

export const LabelModel: Model = {
    type: 'object',
    name: 'Label',
    label: 'Label',
    labelField: 'label',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    fields: [
        {
            type: 'string',
            name: 'label',
            label: 'Label',
            default: 'Label title',
            required: true
        },
        {
            type: 'string',
            name: 'url',
            label: 'URL',
            default: ''
        }
    ]
};
