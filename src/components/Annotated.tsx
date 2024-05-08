/*
 * <Annotated> wrapper component is used both by <DynamicComponent> and explicitly by other components,
 * to wrap a given child with a tag having a Stackbit annotation extracted from the component props.
 * Note that all content object types include the HasAnnotation type.
 *
 * If you want to annotate a primitive field (rather than a content object) you can use the
 * <AnnotatedField> helper below, which accepts a field-path string.
 * Annotating primitive fields this way is more intrusive in code, and requires manually entering a field path,
 * but unlocks not just direct selection of fields but also field-level styling controls.
 */
import { PropsWithChildren } from 'react';
import { isDev } from '@/utils/common';
import { HasAnnotation, fieldPathAttr, objectIdAttr } from '@/types';

type AnnotatedProps = PropsWithChildren & {
    content: HasAnnotation;
};

export const Annotated: React.FC<AnnotatedProps> = (props) => {
    const { children } = props;
    const baseResult = <>{children}</>;
    if (!isDev) {
        return baseResult;
    } else if (!props.content) {
        console.warn('Annotated: no content property. Props:', props);
        return baseResult;
    } else if (!children || (Array.isArray(children) && children.length !== 1)) {
        console.log('Annotated: provide a single child. Given:', children);
        return baseResult;
    }

    const annotation = annotationFromProps(props.content);
    if (annotation) {
        return <AnnotatedWrapperTag annotation={annotation}>{props.children}</AnnotatedWrapperTag>;
    } else {
        console.warn('Annotated: no annotation in content. Props:', props);
        return baseResult;
    }
};

type AnnotatedFieldProps = PropsWithChildren & {
    path: string;
};

export const AnnotatedField: React.FC<AnnotatedFieldProps> = (props) => {
    const content: HasAnnotation = { [fieldPathAttr]: props.path };

    return <Annotated content={content}>{props.children}</Annotated>;
};

function annotationFromProps(props: HasAnnotation) {
    return props?.[objectIdAttr] ? { [objectIdAttr]: props[objectIdAttr] } : props?.[fieldPathAttr] ? { [fieldPathAttr]: props[fieldPathAttr] } : undefined;
}

const AnnotatedWrapperTag: React.FC<PropsWithChildren & { annotation: HasAnnotation }> = ({ annotation, children }) => {
    const fieldPath = annotation[fieldPathAttr];
    if (fieldPath) annotation = { [fieldPathAttr]: fieldPath + '#*[1]' };
    return <data {...annotation}>{children}</data>;
};
