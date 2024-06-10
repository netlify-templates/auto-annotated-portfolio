import * as React from 'react';
import classNames from 'classnames';

import { DynamicComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function FormBlock(props) {
    const formRef = React.createRef<HTMLFormElement>();
    const { elementId, className, fields = [], submitLabel, styles = {} } = props;

    if (fields.length === 0) {
        return null;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(formRef.current);
        const value = Object.fromEntries(data.entries());
        alert(`Form data: ${JSON.stringify(value)}`);
    }

    return (
        <form
            className={classNames('sb-component', 'sb-component-block', 'sb-component-form-block', className)}
            name={elementId}
            id={elementId}
            onSubmit={handleSubmit}
            ref={formRef}
        >
            <div className="grid sm:grid-cols-2 sm:gap-x-4">
                <input type="hidden" name="form-name" value={elementId} />
                {fields.map((field, index) => {
                    return <DynamicComponent key={index} {...field} />;
                })}
            </div>
            <div className={classNames('mt-4', styles.submitLabel?.textAlign ? mapStyles({ textAlign: styles.submitLabel?.textAlign }) : null)}>
                <button type="submit" className="sb-component sb-component-block sb-component-button sb-component-button-primary">
                    {submitLabel}
                </button>
            </div>
        </form>
    );
}
