import classNames from 'classnames';

import { getDataAttrs } from '@/utils/get-data-attrs';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';

export default function DividerSection(props) {
    const { elementId, styles = {} } = props;
    return (
        <div
            id={elementId || null}
            {...getDataAttrs(props)}
            className={classNames('w-full flex justify-center', styles.self?.padding ?? 'py-12 px-4')}
        >
            <div
                className={classNames(
                    'h-0 w-full border-t border-current',
                    mapStyles({ width: styles.self?.width ?? 'wide' }),
                    mapStyles({ borderStyle: styles.self?.borderStyle ?? 'solid' })
                )}
                style={{
                    borderTopWidth: styles.self?.borderWidth ? `${styles.self?.borderWidth}px` : '1px'
                }}
            ></div>
        </div>
    );
}
