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
        <div className={classNames({ 'sm:col-span-2': width === 'full' })}>
            {label && (
                <label
                    id={labelId}
                    className={classNames('inline-block mb-1 sm:text-xl', { 'sr-only': hideLabel })}
                    htmlFor={name}
                >
                    {label}
                </label>
            )}
            <select
                id={name}
                className="w-full py-3 pl-3 bg-transparent border border-current pr-7 placeholder:text-current placeholder:opacity-50 focus:outline-none focus:ring-1 focus:ring-current sm:text-xl"
                name={name}
                {...attr}
            >
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
