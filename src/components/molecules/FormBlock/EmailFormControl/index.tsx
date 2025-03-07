import classNames from 'classnames';

export default function EmailFormControl(props) {
    const { name, label, hideLabel, placeholder, isRequired, width = 'full' } = props;
    const labelId = `${name}-label`;
    const attr: any = {};
    if (label) {
        attr['aria-labelledby'] = labelId;
    }
    if (isRequired) {
        attr.required = true;
    }
    if (placeholder) {
        attr.placeholder = placeholder;
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
            <input
                id={name}
                className="w-full p-3 bg-transparent border border-current placeholder:text-current placeholder:opacity-50 focus:outline-none focus:ring-1 focus:ring-current sm:text-xl"
                type="email"
                name={name}
                {...attr}
            />
        </div>
    );
}
