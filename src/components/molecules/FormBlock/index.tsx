import classNames from 'classnames';
import * as React from 'react';

import { Annotated } from '@/components/Annotated';
import { DynamicComponent } from '@/components/components-registry';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';

export default function FormBlock(props) {
    const formRef = React.createRef<HTMLFormElement>();
    const { elementId, className, fields = [], submitLabel, styles = {} } = props;
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [error, setError] = React.useState('');

    if (fields.length === 0) {
        return null;
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitting(true);
        setError('');

        const formData = new FormData(formRef.current);
        
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData as any).toString()
        })
            .then(() => {
                setIsSubmitted(true);
                setIsSubmitting(false);
            })
            .catch((err) => {
                setError('Failed to submit form. Please try again.');
                setIsSubmitting(false);
            });
    }

    if (isSubmitted) {
        return (
            <Annotated content={props}>
                <div className={className}>
                    <p className="text-lg">Thank you for your message! We'll get back to you soon.</p>
                </div>
            </Annotated>
        );
    }

    return (
        <Annotated content={props}>
            <form 
                className={className} 
                name={elementId} 
                id={elementId} 
                onSubmit={handleSubmit} 
                ref={formRef}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value={elementId} />
                <input type="hidden" name="bot-field" />
                <div className="grid gap-6 sm:grid-cols-2">
                    {fields.map((field, index) => {
                        return <DynamicComponent key={index} {...field} />;
                    })}
                </div>
                {error && (
                    <div className="mt-4 text-red-600">
                        {error}
                    </div>
                )}
                <div className={classNames('mt-8', mapStyles({ textAlign: styles.self?.textAlign ?? 'left' }))}>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={classNames(
                            'inline-flex items-center justify-center px-5 py-4 text-lg transition border-2 border-current',
                            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bottom-shadow-6 hover:-translate-y-1.5'
                        )}
                    >
                        {isSubmitting ? 'Sending...' : submitLabel}
                    </button>
                </div>
            </form>
        </Annotated>
    );
}
