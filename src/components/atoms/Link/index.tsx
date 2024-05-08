import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Annotated } from '@/components/Annotated';
import { ContentObject, PageModelType } from '@/types';

type RegularLinkProps = React.PropsWithChildren & NextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type LinkProps = RegularLinkProps | (Omit<RegularLinkProps, 'href'> & { href: PageModelType });

const Link: React.FC<LinkProps> = (props) => {
    const { children, href: hrefArgument, ...other } = props;
    let hrefString: string = null;
    let hrefContent: ContentObject = null;

    if (typeof hrefArgument === 'string') {
        hrefString = hrefArgument;
    } else {
        hrefContent = hrefArgument;
        hrefString = hrefArgument.__metadata.urlPath;
    }

    // Pass Any internal link to Next.js Link, for anything else, use <a> tag
    const internal = /^\/(?!\/)/.test(hrefString);
    const linkTag = internal ? (
        <NextLink href={hrefString} {...other}>
            {children}
        </NextLink>
    ) : (
        <a href={hrefString} {...other}>
            {children}
        </a>
    );

    return hrefContent ? <Annotated content={hrefContent}>{linkTag}</Annotated> : linkTag;
};

export default Link;
