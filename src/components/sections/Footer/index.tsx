import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { Action } from '../../atoms';

export default function Footer(props) {
    const { primaryLinks = [], contacts, copyrightText, styles = {} } = props;
    return (
        <footer className={classNames('sb-component', 'sb-component-footer', styles.self?.padding ?? 'py-16 px-4')}>
            <div className={classNames('border-t-2', 'border-current', 'mx-auto', mapMaxWidthStyles(styles.self?.width ?? 'narrow'))}>
                <div className="flex flex-col md:flex-row md:flex-wrap">
                    {primaryLinks.length > 0 && (
                        <div className={classNames('mt-6', contacts ? 'w-full' : 'md:mr-auto')}>
                            <ul className="flex flex-wrap max-w-5xl text-lg">
                                {primaryLinks.map((link, index) => (
                                    <li key={index} className="mr-8 mt-2">
                                        <Action {...link} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {contacts && (
                        <Contacts
                            {...contacts}
                            className={classNames(
                                'text-lg',
                                'space-y-4',
                                'md:max-w-3xl',
                                'md:mr-auto',
                                'md:pr-12',
                                primaryLinks.length > 0 ? 'mt-12 md:mt-32' : 'mt-8'
                            )}
                        />
                    )}
                    {/* Please keep this attribution up if you're using Stackbit's free plan. */}
                    {copyrightText && (
                        <div className={classNames('mt-8', primaryLinks.length > 0 || contacts ? 'md:self-end' : null)}>
                            <Markdown
                                options={{ forceInline: true, forceWrapper: true, wrapper: 'p' }}
                                className="sb-markdown text-sm tracking-widest uppercase"
                            >
                                {copyrightText}
                            </Markdown>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}

function Contacts(props) {
    const { phoneNumber, phoneAltText, email, emailAltText, address, addressAltText, elementId, className } = props;
    return (
        <div id={elementId || null} className={className}>
            {phoneNumber && (
                <p>
                    <a className="underline hover:no-underline" href={`tel:${phoneNumber}`} aria-label={phoneAltText}>
                        {phoneNumber}
                    </a>
                </p>
            )}
            {email && (
                <p>
                    <a className="underline hover:no-underline" href={`mailto:${email}`} aria-label={emailAltText}>
                        {email}
                    </a>
                </p>
            )}
            {address && (
                <p>
                    <a
                        className="underline hover:no-underline"
                        href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`}
                        aria-label={addressAltText}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {address}
                    </a>
                </p>
            )}
        </div>
    );
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-7xl';
        case 'wide':
            return 'max-w-screen-2xl';
        case 'full':
            return 'max-w-full';
        default:
            return null;
    }
}
