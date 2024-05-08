import * as React from 'react';
import classNames from 'classnames';
import { Annotated } from '@/components/Annotated';

export default function ImageBlock(props) {
    const { elementId, className, url, altText = '' } = props;
    if (!url) {
        return null;
    }

    return (
        <Annotated content={props}>
            <img
                id={elementId || null}
                className={classNames('sb-component', 'sb-component-block', 'sb-component-image-block', className)}
                src={url}
                alt={altText}
            />
        </Annotated>
    );
}
