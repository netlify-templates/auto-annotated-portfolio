import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { Link, Action, Social } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';
import CloseIcon from '../../svgs/close';
import MenuIcon from '../../svgs/menu';

export default function Header(props) {
    const { headerVariant, isSticky, title, isTitleVisible, logo, primaryLinks = [], socialLinks = [], styles = {} } = props;
    const headerWidth = styles.self?.width ?? 'narrow';
    return (
        <header className={classNames('sb-component', 'sb-component-header', isSticky ? 'sticky top-0 z-10' : 'relative', 'border-b', 'border-current')}>
            <div
                className={classNames('mx-auto', mapMaxWidthStyles(headerWidth), {
                    'xl:border-l xl:border-r border-current': headerWidth === 'narrow',
                    '2xl:border-l 2xl:border-r border-current': headerWidth === 'wide'
                })}
            >
                <Link href="#main" className="sr-only">
                    Skip to main content
                </Link>
                <HeaderVariants
                    variant={headerVariant}
                    title={title}
                    isTitleVisible={isTitleVisible}
                    logo={logo}
                    primaryLinks={primaryLinks}
                    socialLinks={socialLinks}
                />
            </div>
        </header>
    );
}

function HeaderVariants(props) {
    const { variant = 'variant-a', ...rest } = props;
    switch (variant) {
        case 'variant-a':
            return <HeaderVariantA {...rest} />;
        case 'variant-b':
            return <HeaderVariantB {...rest} />;
        case 'variant-c':
            return <HeaderVariantC {...rest} />;
        default:
            return null;
    }
}

function HeaderVariantA(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    return (
        <div className="relative flex items-stretch">
            <SiteLogoLink {...logoProps} />
            {primaryLinks.length > 0 && (
                <ul className="hidden border-r border-current divide-x divide-current lg:flex">
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {socialLinks.length > 0 && (
                <ul className="hidden ml-auto border-l border-current lg:flex">
                    <ListOfSocialLinks links={socialLinks} inMobileMenu={false} />
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function HeaderVariantB(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    return (
        <div className="relative flex items-stretch">
            <SiteLogoLink {...logoProps} />
            {primaryLinks.length > 0 && (
                <ul className="hidden ml-auto border-l border-current divide-x divide-current lg:flex">
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {socialLinks.length > 0 && (
                <ul
                    className={classNames('hidden', 'lg:flex', 'border-l', 'border-current', {
                        'ml-auto': primaryLinks.length === 0
                    })}
                >
                    <ListOfSocialLinks links={socialLinks} inMobileMenu={false} />
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function HeaderVariantC(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    return (
        <div className="relative flex items-stretch">
            <SiteLogoLink {...logoProps} />
            {socialLinks.length > 0 && (
                <ul className="hidden ml-auto border-l border-current lg:flex">
                    <ListOfSocialLinks links={socialLinks} inMobileMenu={false} />
                </ul>
            )}
            {primaryLinks.length > 0 && (
                <ul
                    className={classNames('hidden', 'lg:flex', 'border-l', 'border-current', 'divide-x', 'divide-current', {
                        'ml-auto': primaryLinks.length === 0
                    })}
                >
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function MobileMenu(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            setIsMenuOpen(false);
        };
        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    return (
        <div className="ml-auto lg:hidden">
            <button aria-label="Open Menu" className="h-10 min-h-full p-4 border-l border-current focus:outline-none" onClick={() => setIsMenuOpen(true)}>
                <span className="sr-only">Open Menu</span>
                <MenuIcon className="w-6 h-6 fill-current" />
            </button>
            <div className={classNames('sb-header-overlay', 'fixed', 'inset-0', 'overflow-y-auto', 'z-20', isMenuOpen ? 'block' : 'hidden')}>
                <div className="flex flex-col min-h-full">
                    <div className="flex items-stretch justify-between border-b border-current">
                        <SiteLogoLink {...logoProps} />
                        <div className="border-l border-current">
                            <button aria-label="Close Menu" className="h-10 min-h-full p-4 focus:outline-none" onClick={() => setIsMenuOpen(false)}>
                                <CloseIcon className="w-6 h-6 fill-current" />
                            </button>
                        </div>
                    </div>
                    {(primaryLinks.length > 0 || socialLinks.length > 0) && (
                        <div className="flex flex-col justify-center px-4 py-20 space-y-12 grow">
                            {primaryLinks.length > 0 && (
                                <ul className="space-y-6">
                                    <ListOfLinks links={primaryLinks} inMobileMenu={true} />
                                </ul>
                            )}
                            {socialLinks.length > 0 && (
                                <ul className="flex flex-wrap justify-center">
                                    <ListOfSocialLinks links={socialLinks} inMobileMenu={true} />
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function SiteLogoLink({ title, isTitleVisible, logo }) {
    if (!(logo || (title && isTitleVisible))) {
        return null;
    }
    return (
        <div className="flex items-center border-r border-current">
            <Link href="/" className="flex items-center h-full p-4 sb-header-logo">
                {logo && <ImageBlock {...logo} className={classNames('max-h-12', { 'mr-2': isTitleVisible })} />}
                {title && isTitleVisible && <span className="text-base tracking-widest uppercase">{title}</span>}
            </Link>
        </div>
    );
}

function ListOfLinks({ links, inMobileMenu }) {
    return links.map((link, index) => (
        <li key={index} className={classNames(inMobileMenu ? 'text-center w-full' : 'inline-flex items-stretch')}>
            <Action
                {...link}
                className={classNames(inMobileMenu ? 'text-xl' : 'sb-component-link-fill p-4', 'font-normal', 'text-base', 'tracking-widest', 'uppercase')}
            />
        </li>
    ));
}

function ListOfSocialLinks({ links, inMobileMenu = false }) {
    return links.map((link, index) => (
        <li key={index} className={classNames(inMobileMenu ? 'border border-current -ml-px -mt-px' : 'inline-flex items-stretch')}>
            <Social {...link} className={classNames('sb-component-social-fill', 'text-base', inMobileMenu ? 'p-5' : 'p-4')} />
        </li>
    ));
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
