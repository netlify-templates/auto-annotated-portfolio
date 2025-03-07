import classNames from 'classnames';
import * as React from 'react';

import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';

type SectionProps = React.PropsWithChildren<{
    type?: string;
    elementId?: string;
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    backgroundSize?: 'full' | 'inset';
    styles?: any;
}>;

export default function Section(props: SectionProps) {
    const { backgroundSize = 'full', ...rest } = props;
    if (backgroundSize === 'inset') {
        return <SectionInset {...rest} />;
    } else {
        return <SectionFullWidth {...rest} />;
    }
}

function SectionInset(props: SectionProps) {
    const { elementId, colors = 'colors-f', styles = {}, children } = props;
    return (
        <div id={elementId || null} className={classNames('flex justify-center', styles.margin)}>
            <div
                className={classNames(
                    'flex flex-col items-center justify-center relative w-full',
                    mapStyles({ width: styles.width ?? 'wide' }),
                    mapStyles({ height: styles.height ?? 'auto' }),
                    styles.padding ?? 'py-12 px-4',
                    styles.borderColor,
                    styles.borderStyle ? mapStyles({ borderStyle: styles.borderStyle }) : null,
                    styles.borderRadius ? mapStyles({ borderRadius: styles.borderRadius }) : null
                )}
                style={{
                    borderWidth: styles.borderWidth ? `${styles.borderWidth}px` : null
                }}
                data-theme={colors}
            >
                {children}
            </div>
        </div>
    );
}

function SectionFullWidth(props: SectionProps) {
    const { elementId, colors = 'colors-f', styles = {}, children } = props;
    return (
        <div
            data-theme={colors}
            id={elementId || null}
            className={classNames(
                'flex flex-col justify-center items-center',
                mapStyles({ height: styles.height ?? 'auto' }),
                styles.margin,
                styles.padding ?? 'py-12 px-4',
                styles.borderColor,
                styles.borderStyle ? mapStyles({ borderStyle: styles.borderStyle }) : null,
                styles.borderRadius ? mapStyles({ borderRadius: styles.borderRadius }) : null
            )}
            style={{
                borderWidth: styles.borderWidth ? `${styles.borderWidth}px` : null
            }}
        >
            <div className={classNames('w-full', mapStyles({ width: styles.width ?? 'wide' }))}>{children}</div>
        </div>
    );
}
