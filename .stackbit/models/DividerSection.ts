import { Model } from '@stackbit/types';

import { settingFields, settingFieldsGroup } from './section-common-fields';

export const DividerSectionModel: Model = {
    type: 'object',
    name: 'DividerSection',
    label: 'Divider',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['SectionModels'],
    fieldGroups: [...settingFieldsGroup],
    fields: [
        {
            type: 'string',
            name: 'title',
            description: 'The value of the field is used for presentation purposes in Stackbit',
            default: 'Divider'
        },
        ...settingFields,
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    width: ['narrow', 'wide', 'full'],
                    padding: ['tw0:96'],
                    borderWidth: ['1:8'],
                    borderStyle: '*'
                }
            },
            default: {
                self: {
                    width: 'wide',
                    padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
                    borderWidth: 1,
                    borderStyle: 'solid'
                }
            }
        }
    ]
};
