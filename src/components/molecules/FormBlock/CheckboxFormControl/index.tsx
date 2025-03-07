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
        <div className={classNames('flex items-center sm:text-xl', { 'sm:col-span-2': width === 'full' })}>
            <input
                id={name}
                className="absolute w-[1.5em] h-[1.5em] opacity-0 appearance-none select-none peer"
                type="checkbox"
                name={name}
                {...attr}
            />
            {label && (
                <label
                    id={labelId}
                    className="relative pl-[2.25em] cursor-pointer before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-center before:w-[1.5em] before:h-[1.5em] before:border before:border-current before:content-[''] before:font-sans peer-checked:before:content-['\2713']"
                    htmlFor={name}
                >
                    {label}
                </label>
            )}
        </div>
    );
}
