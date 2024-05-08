import * as fs from 'fs';
import path from 'path';
import glob from 'glob';
import frontmatter from 'front-matter';
import { allModels } from '.stackbit/models';
import * as types from '@/types';
import { isDev } from './common';
import { PAGE_MODEL_NAMES, PageModelType } from '@/types/generated';

const contentBaseDir = 'content';
const pagesBaseDir = contentBaseDir + '/pages';

const allReferenceFields = {};
allModels.forEach((model) => {
    model.fields.forEach((field) => {
        if (field.type === 'reference' || (field.type === 'list' && field.items?.type === 'reference')) {
            allReferenceFields[model.name + ':' + field.name] = true;
        }
    });
});

function isRefField(modelName: string, fieldName: string) {
    return !!allReferenceFields[modelName + ':' + fieldName];
}

const supportedFileTypes = ['md', 'json'];
function contentFilesInPath(dir: string) {
    const globPattern = `${dir}/**/*.{${supportedFileTypes.join(',')}}`;
    return glob.sync(globPattern);
}

function readContent(file: string): types.ContentObject {
    const rawContent = fs.readFileSync(file, 'utf8');
    let content = null;
    switch (path.extname(file).substring(1)) {
        case 'md':
            const parsedMd = frontmatter<Record<string, any>>(rawContent);
            content = {
                ...parsedMd.attributes,
                markdownContent: parsedMd.body
            };
            break;
        case 'json':
            content = JSON.parse(rawContent);
            break;
        default:
            throw Error(`Unhandled file type: ${file}`);
    }

    content.__metadata = {
        id: file,
        modelName: content.type
    };

    return content;
}

function resolveReferences(content: types.ContentObject, fileToContent: Record<string, types.ContentObject>) {
    if (!content || !content.type) return;

    const modelName = content.type;
    if (!content.__metadata) content.__metadata = { modelName };

    for (const fieldName in content) {
        let fieldValue = content[fieldName];
        if (!fieldValue) continue;

        const isRef = isRefField(modelName, fieldName);
        if (Array.isArray(fieldValue)) {
            if (fieldValue.length === 0) continue;
            if (isRef && typeof fieldValue[0] === 'string') {
                fieldValue = fieldValue.map((filename) => fileToContent[filename]);
                content[fieldName] = fieldValue;
            }
            if (typeof fieldValue[0] === 'object') {
                fieldValue.forEach((o) => resolveReferences(o, fileToContent));
            }
        } else {
            if (isRef && typeof fieldValue === 'string') {
                fieldValue = fileToContent[fieldValue];
                content[fieldName] = fieldValue;
            }
            if (typeof fieldValue === 'object') {
                resolveReferences(fieldValue, fileToContent);
            }
        }
    }
}

function contentUrl(obj: types.ContentObject) {
    const fileName = obj.__metadata.id;
    if (!fileName.startsWith(pagesBaseDir)) {
        console.warn('Content file', fileName, 'expected to be a page, but is not under', pagesBaseDir);
        return;
    }

    let url = fileName.slice(pagesBaseDir.length);
    url = url.split('.')[0];
    if (url.endsWith('/index')) {
        url = url.slice(0, -6) || '/';
    }
    return url;
}

export function allContent(): types.ContentObject[] {
    let objects = contentFilesInPath(contentBaseDir).map((file) => readContent(file));

    allPages(objects).forEach((obj) => {
        obj.__metadata.urlPath = contentUrl(obj);
    });

    const fileToContent: Record<string, types.ContentObject> = Object.fromEntries(objects.map((e) => [e.__metadata.id, e]));
    objects.forEach((e) => resolveReferences(e, fileToContent));

    objects = objects.map((e) => deepClone(e));
    objects.forEach((e) => annotateContentObject(e));

    return objects;
}

export function allPages(allData: types.ContentObject[]): PageModelType[] {
    return allData.filter((obj) => {
        return PAGE_MODEL_NAMES.includes(obj.__metadata.modelName);
    }) as PageModelType[];
}

/*
Add annotation data to a content object and its nested children.
*/
const skipList = ['__metadata'];
const logAnnotations = false;

function annotateContentObject(o: any, prefix = '', depth = 0) {
    if (!isDev || !o || typeof o !== 'object' || !o.type || skipList.includes(prefix)) return;

    const depthPrefix = '--'.repeat(depth);
    if (depth === 0) {
        if (o.__metadata?.id) {
            o[types.objectIdAttr] = o.__metadata.id;
            if (logAnnotations) console.log('[annotateContentObject] added object ID:', depthPrefix, o[types.objectIdAttr]);
        } else {
            if (logAnnotations) console.warn('[annotateContentObject] NO object ID:', o);
        }
    } else {
        o[types.fieldPathAttr] = prefix;
        if (logAnnotations) console.log('[annotateContentObject] added field path:', depthPrefix, o[types.fieldPathAttr]);
    }

    Object.entries(o).forEach(([k, v]) => {
        if (v && typeof v === 'object') {
            const fieldPrefix = (prefix ? prefix + '.' : '') + k;
            if (Array.isArray(v)) {
                v.forEach((e, idx) => {
                    const elementPrefix = fieldPrefix + '.' + idx;
                    annotateContentObject(e, elementPrefix, depth + 1);
                });
            } else {
                annotateContentObject(v, fieldPrefix, depth + 1);
            }
        }
    });
}

function deepClone(o: object) {
    return JSON.parse(JSON.stringify(o));
}
