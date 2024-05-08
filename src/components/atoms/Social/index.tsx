import * as React from 'react';
import classNames from 'classnames';
import Link from '../Link';
import { iconMap } from '../../svgs';
import { Annotated } from '@/components/Annotated';

export default function Social(props) {
    const { elementId, className, label, altText, url, icon = 'facebook' } = props;
    const IconComponent = iconMap[icon];

    return (
        <Annotated content={props}>
            <Link
                href={url}
                aria-label={altText}
                id={elementId || null}
                className={classNames('sb-component', 'sb-component-block', 'sb-component-social', className)}
            >
                {label && <span className="sr-only">{label}</span>}
                {IconComponent && <IconComponent className="fill-current h-5 w-5" />}
            </Link>
        </Annotated>
    );
}
