import * as React from 'react';
import classNames from 'classnames';

export default function SelectFormControl(props) {
    const { name, label, hideLabel, defaultValue, options = [], isRequired, width = 'full' } = props;
    const labelId = `${name}-label`;
    const attr: any = {};
    if (label) {
        attr['aria-labelledby'] = labelId;
    }
    if (isRequired) {
        attr.required = true;
    }
    return (
        <div className={classNames('sb-form-control', { 'sb-form-control-full': width === 'full' })}>
            {label && (
                <label id={labelId} className={classNames('sb-label', { 'sr-only': hideLabel })} htmlFor={name}>
                    {label}
                </label>
            )}
            <select id={name} className="sb-select" name={name} {...attr}>
                {defaultValue && <option value="">{defaultValue}</option>}
                {options.length > 0 &&
                    options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
            </select>
        </div>
    );
}
