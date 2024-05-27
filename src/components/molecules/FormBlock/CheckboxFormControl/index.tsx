import * as React from 'react';
import classNames from 'classnames';

export default function CheckboxFormControl(props) {
    const { name, label, isRequired, width = 'full' } = props;
    const labelId = `${name}-label`;
    const attr: any = {};
    if (label) {
        attr['aria-labelledby'] = labelId;
    }
    if (isRequired) {
        attr.required = true;
    }
    return (
        <div className={classNames('sb-form-control', 'flex', 'items-center', { 'sb-form-control-full': width === 'full' })}>
            <input id={name} className="sb-checkbox" type="checkbox" name={name} {...attr} />
            {label && (
                <label id={labelId} className="sb-label" htmlFor={name}>
                    {label}
                </label>
            )}
        </div>
    );
}
