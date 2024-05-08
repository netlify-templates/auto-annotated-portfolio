import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';

export default function DividerSection(props) {
    const { elementId, styles = {} } = props;
    return (
        <div
            id={elementId || null}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-divider-section',
                'w-full',
                'flex',
                mapStyles({ justifyContent: styles.self?.justifyContent ?? 'center' }),
                styles.self?.padding ?? 'py-12 px-4'
            )}
        >
            <div
                className={classNames(
                    'h-0',
                    'w-full',
                    mapStyles({ width: styles.self?.width ?? 'wide' }),
                    'border-t',
                    'border-current',
                    mapStyles({ borderStyle: styles.self?.borderStyle ?? 'solid' })
                )}
                style={{
                    borderTopWidth: styles.self?.borderWidth ? `${styles.self?.borderWidth}px` : '1px'
                }}
            ></div>
        </div>
    );
}