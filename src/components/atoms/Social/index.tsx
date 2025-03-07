import classNames from 'classnames';

import { Annotated } from '@/components/Annotated';
import { iconMap } from '@/components/svgs';
import Link from '../Link';

export default function Social(props) {
    const { elementId, className, label, altText, url, icon = 'facebook' } = props;
    const IconComponent = iconMap[icon];

    return (
        <Annotated content={props}>
            <Link
                href={url}
                aria-label={altText}
                id={elementId || null}
                className={classNames('inline-flex items-center justify-center no-underline', className)}
            >
                {label && <span className="sr-only">{label}</span>}
                {IconComponent && <IconComponent className="fill-current w-icon h-icon" />}
            </Link>
        </Annotated>
    );
}
