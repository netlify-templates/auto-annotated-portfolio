import classNames from 'classnames';

import ImageBlock from '@/components/molecules/ImageBlock';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function TestimonialsSection(props) {
    const { elementId, colors, title, subtitle, styles = {}, ...rest } = props;
    const sectionAlign = styles.self?.textAlign ?? 'left';
    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            {title && (
                <h2 className={classNames('text-4xl sm:text-5xl', mapStyles({ textAlign: sectionAlign }))}>{title}</h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-lg sm:text-xl', mapStyles({ textAlign: sectionAlign }), {
                        'mt-6': title
                    })}
                >
                    {subtitle}
                </p>
            )}
            <TestimonialVariants {...rest} className={title || subtitle ? 'mt-16 sm:mt-20' : undefined} />
        </Section>
    );
}

function TestimonialVariants(props) {
    const { variant = 'variant-a', ...rest } = props;
    switch (variant) {
        case 'variant-b':
            return <TestimonialsVariantB {...rest} />;
        case 'variant-c':
            return <TestimonialsVariantC {...rest} />;
        default:
            return <TestimonialsVariantA {...rest} />;
    }
}

function TestimonialsVariantA(props) {
    const { testimonials = [], className } = props;
    if (testimonials.length === 0) {
        return null;
    }
    return (
        <div className={classNames('grid md:grid-cols-2 gap-y-16 md:gap-y-20', className)}>
            {testimonials.map((testimonial, index) => (
                <blockquote
                    key={index}
                    className={classNames('space-y-8', index % 2 === 0 ? 'md:pr-12' : 'md:border-l md:pl-12')}
                >
                    {testimonial.image && (
                        <div>
                            <ImageBlock {...testimonial.image} className="object-cover w-24 h-24 rounded-full" />
                        </div>
                    )}
                    {testimonial.quote && <p className="text-3xl sm:text-4xl sm:leading-tight">{testimonial.quote}</p>}
                    {(testimonial.name || testimonial.title) && (
                        <footer className="text-lg">
                            {testimonial.name && <div>{testimonial.name}</div>}
                            {testimonial.title && <div>{testimonial.title}</div>}
                        </footer>
                    )}
                </blockquote>
            ))}
        </div>
    );
}

function TestimonialsVariantB(props) {
    const { testimonials = [], className } = props;
    if (testimonials.length === 0) {
        return null;
    }
    return (
        <div className={classNames('space-y-16 sm:space-y-24', className)}>
            {testimonials.map((testimonial, index) => (
                <blockquote key={index}>
                    {testimonial.quote && (
                        <p className="text-3xl sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight">
                            {testimonial.quote}
                        </p>
                    )}
                    {(testimonial.name || testimonial.title || testimonial.image) && (
                        <footer className="flex flex-wrap items-center mt-8 gap-x-6 gap-y-2">
                            {testimonial.image && (
                                <div className="shrink-0">
                                    <ImageBlock
                                        {...testimonial.image}
                                        className="object-cover w-12 h-12 rounded-full sm:w-20 sm:h-20"
                                    />
                                </div>
                            )}
                            {(testimonial.name || testimonial.title) && (
                                <div className="text-lg grow">
                                    {testimonial.name && <div>{testimonial.name}</div>}
                                    {testimonial.title && <div>{testimonial.title}</div>}
                                </div>
                            )}
                        </footer>
                    )}
                </blockquote>
            ))}
        </div>
    );
}

function TestimonialsVariantC(props) {
    const { testimonials = [], className } = props;
    if (testimonials.length === 0) {
        return null;
    }
    return (
        <div className={classNames('space-y-16 sm:space-y-24', className)}>
            {testimonials.map((testimonial, index) => (
                <blockquote
                    key={index}
                    className={classNames(
                        'flex flex-col gap-8 md:items-center',
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    )}
                >
                    {testimonial.image && (
                        <div className="max-w-lg shrink-0 md:w-2/5">
                            <ImageBlock {...testimonial.image} className="w-full" />
                        </div>
                    )}
                    <div className="grow">
                        {testimonial.quote && (
                            <p className="text-3xl sm:text-4xl sm:leading-tight">{testimonial.quote}</p>
                        )}
                        {(testimonial.name || testimonial.title) && (
                            <footer className="flex flex-wrap items-center mt-8">
                                {(testimonial.name || testimonial.title) && (
                                    <div className="text-lg grow">
                                        {testimonial.name && <div>{testimonial.name}</div>}
                                        {testimonial.title && <div>{testimonial.title}</div>}
                                    </div>
                                )}
                            </footer>
                        )}
                    </div>
                </blockquote>
            ))}
        </div>
    );
}
