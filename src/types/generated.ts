import { BaseContentObject } from './base';

export type DataModelType = Config | Person | ThemeStyle;
export type PageModelType = PageLayout | PostFeedLayout | PostLayout | ProjectFeedLayout | ProjectLayout;

export const DATA_MODEL_NAMES = ['Config', 'Person', 'ThemeStyle'];
export const PAGE_MODEL_NAMES = ['PageLayout', 'PostFeedLayout', 'PostLayout', 'ProjectFeedLayout', 'ProjectLayout'];

export type SectionModels =
    | ContactSection
    | CtaSection
    | DividerSection
    | FeaturedItemsSection
    | FeaturedPostsSection
    | FeaturedProjectsSection
    | HeroSection
    | LabelsSection
    | MediaGallerySection
    | QuoteSection
    | RecentPostsSection
    | RecentProjectsSection
    | TestimonialsSection
    | TextSection;

export type ContentObject =
    | BackgroundImage
    | Button
    | CheckboxFormControl
    | Config
    | ContactBlock
    | ContactSection
    | CtaSection
    | DividerSection
    | EmailFormControl
    | FeaturedItem
    | FeaturedItemsSection
    | FeaturedPostsSection
    | FeaturedProjectsSection
    | Footer
    | FormBlock
    | Header
    | HeroSection
    | ImageBlock
    | Label
    | LabelsSection
    | Link
    | MediaGallerySection
    | MetaTag
    | PageLayout
    | Person
    | PostFeedLayout
    | PostFeedSection
    | PostLayout
    | ProjectFeedLayout
    | ProjectFeedSection
    | ProjectLayout
    | QuoteSection
    | RecentPostsSection
    | RecentProjectsSection
    | SelectFormControl
    | Social
    | Testimonial
    | TestimonialsSection
    | TextareaFormControl
    | TextFormControl
    | TextSection
    | ThemeStyle
    | ThemeStyleButton
    | ThemeStyleHeading
    | ThemeStyleLink
    | VideoBlock;

export type ContentObjectType =
    | 'BackgroundImage'
    | 'Button'
    | 'CheckboxFormControl'
    | 'Config'
    | 'ContactBlock'
    | 'ContactSection'
    | 'CtaSection'
    | 'DividerSection'
    | 'EmailFormControl'
    | 'FeaturedItem'
    | 'FeaturedItemsSection'
    | 'FeaturedPostsSection'
    | 'FeaturedProjectsSection'
    | 'Footer'
    | 'FormBlock'
    | 'Header'
    | 'HeroSection'
    | 'ImageBlock'
    | 'Label'
    | 'LabelsSection'
    | 'Link'
    | 'MediaGallerySection'
    | 'MetaTag'
    | 'PageLayout'
    | 'Person'
    | 'PostFeedLayout'
    | 'PostFeedSection'
    | 'PostLayout'
    | 'ProjectFeedLayout'
    | 'ProjectFeedSection'
    | 'ProjectLayout'
    | 'QuoteSection'
    | 'RecentPostsSection'
    | 'RecentProjectsSection'
    | 'SelectFormControl'
    | 'Social'
    | 'Testimonial'
    | 'TestimonialsSection'
    | 'TextareaFormControl'
    | 'TextFormControl'
    | 'TextSection'
    | 'ThemeStyle'
    | 'ThemeStyleButton'
    | 'ThemeStyleHeading'
    | 'ThemeStyleLink'
    | 'VideoBlock';

export type BackgroundImage = BaseContentObject & {
    type: 'BackgroundImage';
    url?: string;
    backgroundSize: 'auto' | 'cover' | 'contain';
    backgroundPosition: 'bottom' | 'center' | 'left' | 'left-bottom' | 'left-top' | 'right' | 'right-bottom' | 'right-top' | 'top';
    backgroundRepeat: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
    opacity?: number;
};

export type Button = BaseContentObject & {
    type: 'Button';
    label?: string;
    altText?: string;
    url: string;
    showIcon?: boolean;
    icon?:
        | 'apple'
        | 'arrowLeft'
        | 'arrowLeftCircle'
        | 'arrowRight'
        | 'arrowRightCircle'
        | 'arrowUpLeft'
        | 'arrowUpRight'
        | 'cart'
        | 'chevronLeft'
        | 'chevronRight'
        | 'facebook'
        | 'github'
        | 'googlePlay'
        | 'instagram'
        | 'linkedin'
        | 'mail'
        | 'play'
        | 'playCircle'
        | 'reddit'
        | 'send'
        | 'twitter'
        | 'vimeo'
        | 'youtube';
    iconPosition?: 'left' | 'right';
    style: 'primary' | 'secondary';
    elementId?: string;
};

export type CheckboxFormControl = BaseContentObject & {
    type: 'CheckboxFormControl';
    name: string;
    label?: string;
    width: 'full' | '1/2';
    isRequired?: boolean;
};

export type Config = BaseContentObject & {
    type: 'Config';
    fixedLabel?: string;
    favicon?: string;
    header?: Header;
    footer?: Footer;
    titleSuffix?: string;
    defaultSocialImage?: string;
    defaultMetaTags?: MetaTag[];
};

export type ContactBlock = BaseContentObject & {
    type: 'ContactBlock';
    title?: string;
    phoneNumber?: string;
    phoneAltText?: string;
    email?: string;
    emailAltText?: string;
    address?: string;
    addressAltText?: string;
    elementId?: string;
};

export type ContactSection = BaseContentObject & {
    type: 'ContactSection';
    title?: string;
    text?: string;
    form?: FormBlock;
    media?: ImageBlock | VideoBlock;
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    backgroundSize?: 'full' | 'inset';
    elementId?: string;
    styles?: any;
};

export type CtaSection = BaseContentObject & {
    type: 'CtaSection';
    title?: string;
    text?: string;
    actions?: (Button | Link)[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    backgroundSize?: 'full' | 'inset';
    elementId?: string;
    styles?: any;
};

export type DividerSection = BaseContentObject & {
    type: 'DividerSection';
    title?: string;
    elementId?: string;
    styles?: any;
};

export type EmailFormControl = BaseContentObject & {
    type: 'EmailFormControl';
    name?: string;
    label?: string;
    hideLabel?: boolean;
    placeholder?: string;
    width: 'full' | '1/2';
    isRequired?: boolean;
};

export type FeaturedItem = BaseContentObject & {
    type: 'FeaturedItem';
    title?: string;
    subtitle?: string;
    text?: string;
    featuredImage?: ImageBlock;
    actions?: (Button | Link)[];
    elementId?: string;
    styles?: any;
};

export type FeaturedItemsSection = BaseContentObject & {
    type: 'FeaturedItemsSection';
    title?: string;
    subtitle?: string;
    items?: FeaturedItem[];
    actions?: (Button | Link)[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    columns?: number;
    spacingX?: number;
    spacingY?: number;
    elementId?: string;
    styles?: any;
};

export type FeaturedPostsSection = BaseContentObject & {
    type: 'FeaturedPostsSection';
    title?: string;
    subtitle?: string;
    actions?: (Button | Link)[];
    posts?: PostLayout[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    variant: 'variant-a' | 'variant-b' | 'variant-c' | 'variant-d';
    elementId?: string;
    showDate?: boolean;
    showAuthor?: boolean;
    showExcerpt?: boolean;
    showFeaturedImage?: boolean;
    showReadMoreLink?: boolean;
    styles?: any;
};

export type FeaturedProjectsSection = BaseContentObject & {
    type: 'FeaturedProjectsSection';
    title?: string;
    subtitle?: string;
    actions?: (Button | Link)[];
    projects?: ProjectLayout[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    variant: 'variant-a' | 'variant-b' | 'variant-c' | 'variant-d';
    elementId?: string;
    showDate?: boolean;
    showDescription?: boolean;
    showFeaturedImage?: boolean;
    showReadMoreLink?: boolean;
    styles?: any;
};

export type Footer = BaseContentObject & {
    type: 'Footer';
    primaryLinks?: (Button | Link)[];
    contacts?: ContactBlock;
    copyrightText?: string;
    styles?: any;
};

export type FormBlock = BaseContentObject & {
    type: 'FormBlock';
    title?: string;
    fields?: (TextFormControl | EmailFormControl | TextareaFormControl | CheckboxFormControl | SelectFormControl)[];
    submitLabel?: string;
    elementId: string;
    styles?: any;
};

export type Header = BaseContentObject & {
    type: 'Header';
    title?: string;
    isTitleVisible?: boolean;
    logo?: ImageBlock;
    primaryLinks?: Link[];
    socialLinks?: Social[];
    headerVariant: 'variant-a' | 'variant-b' | 'variant-c';
    isSticky?: boolean;
    styles?: any;
};

export type HeroSection = BaseContentObject & {
    type: 'HeroSection';
    title?: string;
    subtitle?: string;
    text?: string;
    actions?: (Button | Link)[];
    media?: FormBlock | ImageBlock | VideoBlock;
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    backgroundSize?: 'full' | 'inset';
    elementId?: string;
    styles?: any;
};

export type ImageBlock = BaseContentObject & {
    type: 'ImageBlock';
    url?: string;
    altText?: string;
    caption?: string;
    elementId?: string;
};

export type Label = BaseContentObject & {
    type: 'Label';
    label: string;
    url?: string;
};

export type LabelsSection = BaseContentObject & {
    type: 'LabelsSection';
    title?: string;
    subtitle?: string;
    items?: Label[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    elementId?: string;
    styles?: any;
};

export type Link = BaseContentObject & {
    type: 'Link';
    label?: string;
    altText?: string;
    url: string;
    showIcon?: boolean;
    icon?:
        | 'apple'
        | 'arrowLeft'
        | 'arrowLeftCircle'
        | 'arrowRight'
        | 'arrowRightCircle'
        | 'arrowUpLeft'
        | 'arrowUpRight'
        | 'cart'
        | 'chevronLeft'
        | 'chevronRight'
        | 'facebook'
        | 'github'
        | 'googlePlay'
        | 'instagram'
        | 'linkedin'
        | 'mail'
        | 'play'
        | 'playCircle'
        | 'reddit'
        | 'send'
        | 'twitter'
        | 'vimeo'
        | 'youtube';
    iconPosition?: 'left' | 'right';
    elementId?: string;
};

export type MediaGallerySection = BaseContentObject & {
    type: 'MediaGallerySection';
    title?: string;
    subtitle?: string;
    images?: ImageBlock[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    spacing?: number;
    columns?: number;
    aspectRatio?: '1:1' | '3:2' | '2:3' | '4:3' | '3:4' | '16:9' | 'auto';
    showCaption?: boolean;
    enableHover?: boolean;
    elementId?: string;
    styles?: any;
};

export type MetaTag = BaseContentObject & {
    type: 'MetaTag';
    property?:
        | 'og:title'
        | 'og:type'
        | 'og:image'
        | 'og:image:alt'
        | 'og:url'
        | 'og:description'
        | 'og:locale'
        | 'og:site_name'
        | 'og:video'
        | 'twitter:card'
        | 'twitter:site'
        | 'twitter:creator'
        | 'twitter:description'
        | 'twitter:title'
        | 'twitter:image'
        | 'twitter:image:alt'
        | 'twitter:player';
    content?: string;
};

export type PageLayout = BaseContentObject & {
    type: 'PageLayout';
    title: string;
    sections?: SectionModels[];
    metaTitle?: string;
    metaDescription?: string;
    addTitleSuffix?: boolean;
    socialImage?: string;
    metaTags?: MetaTag[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e';
    backgroundImage?: BackgroundImage;
};

export type Person = BaseContentObject & {
    type: 'Person';
    firstName: string;
    lastName?: string;
    role?: string;
    bio?: string;
    image?: ImageBlock;
};

export type PostFeedLayout = BaseContentObject & {
    type: 'PostFeedLayout';
    title?: string;
    postFeed?: PostFeedSection;
    topSections?: SectionModels[];
    bottomSections?: SectionModels[];
    metaTitle?: string;
    metaDescription?: string;
    addTitleSuffix?: boolean;
    socialImage?: string;
    metaTags?: MetaTag[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e';
    backgroundImage?: BackgroundImage;
    styles?: any;
};

export type PostFeedSection = BaseContentObject & {
    type: 'PostFeedSection';
    title?: string;
    subtitle?: string;
    actions?: (Button | Link)[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    variant: 'variant-a' | 'variant-b' | 'variant-c' | 'variant-d';
    elementId?: string;
    showDate?: boolean;
    showAuthor?: boolean;
    showExcerpt?: boolean;
    showFeaturedImage?: boolean;
    showReadMoreLink?: boolean;
    styles?: any;
};

export type PostLayout = BaseContentObject & {
    type: 'PostLayout';
    title: string;
    date: string;
    author?: Person;
    excerpt?: string;
    featuredImage?: ImageBlock;
    media?: ImageBlock | VideoBlock;
    bottomSections?: SectionModels[];
    metaTitle?: string;
    metaDescription?: string;
    addTitleSuffix?: boolean;
    socialImage?: string;
    metaTags?: MetaTag[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e';
    backgroundImage?: BackgroundImage;
    markdownContent: string;
};

export type ProjectFeedLayout = BaseContentObject & {
    type: 'ProjectFeedLayout';
    title?: string;
    projectFeed?: ProjectFeedSection;
    topSections?: SectionModels[];
    bottomSections?: SectionModels[];
    metaTitle?: string;
    metaDescription?: string;
    addTitleSuffix?: boolean;
    socialImage?: string;
    metaTags?: MetaTag[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e';
    backgroundImage?: BackgroundImage;
    styles?: any;
};

export type ProjectFeedSection = BaseContentObject & {
    type: 'ProjectFeedSection';
    title?: string;
    subtitle?: string;
    actions?: (Button | Link)[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    variant: 'variant-a' | 'variant-b' | 'variant-c' | 'variant-d';
    elementId?: string;
    showDate?: boolean;
    showDescription?: boolean;
    showFeaturedImage?: boolean;
    showReadMoreLink?: boolean;
    styles?: any;
};

export type ProjectLayout = BaseContentObject & {
    type: 'ProjectLayout';
    title: string;
    date: string;
    client?: string;
    description?: string;
    featuredImage?: ImageBlock;
    media?: ImageBlock | VideoBlock;
    bottomSections?: SectionModels[];
    metaTitle?: string;
    metaDescription?: string;
    addTitleSuffix?: boolean;
    socialImage?: string;
    metaTags?: MetaTag[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e';
    backgroundImage?: BackgroundImage;
    markdownContent: string;
};

export type QuoteSection = BaseContentObject & {
    type: 'QuoteSection';
    quote: string;
    name?: string;
    title?: string;
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    elementId?: string;
    styles?: any;
};

export type RecentPostsSection = BaseContentObject & {
    type: 'RecentPostsSection';
    title?: string;
    subtitle?: string;
    actions?: (Button | Link)[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    variant: 'variant-a' | 'variant-b' | 'variant-c' | 'variant-d';
    elementId?: string;
    recentCount?: number;
    showDate?: boolean;
    showAuthor?: boolean;
    showExcerpt?: boolean;
    showFeaturedImage?: boolean;
    showReadMoreLink?: boolean;
    styles?: any;
};

export type RecentProjectsSection = BaseContentObject & {
    type: 'RecentProjectsSection';
    title?: string;
    subtitle?: string;
    actions?: (Button | Link)[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    variant: 'variant-a' | 'variant-b' | 'variant-c' | 'variant-d';
    elementId?: string;
    recentCount?: number;
    showDate?: boolean;
    showDescription?: boolean;
    showFeaturedImage?: boolean;
    showReadMoreLink?: boolean;
    styles?: any;
};

export type SelectFormControl = BaseContentObject & {
    type: 'SelectFormControl';
    name: string;
    label?: string;
    hideLabel?: boolean;
    defaultValue?: string;
    options?: string[];
    width: 'full' | '1/2';
    isRequired?: boolean;
};

export type Social = BaseContentObject & {
    type: 'Social';
    label?: string;
    altText?: string;
    url: string;
    icon: 'facebook' | 'github' | 'instagram' | 'linkedin' | 'reddit' | 'twitter' | 'vimeo' | 'youtube';
    elementId?: string;
};

export type Testimonial = BaseContentObject & {
    type: 'Testimonial';
    quote: string;
    name?: string;
    title?: string;
    image?: ImageBlock;
    elementId?: string;
    styles?: any;
};

export type TestimonialsSection = BaseContentObject & {
    type: 'TestimonialsSection';
    title?: string;
    subtitle?: string;
    testimonials?: Testimonial[];
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    variant: 'variant-a' | 'variant-b' | 'variant-c';
    elementId?: string;
    styles?: any;
};

export type TextareaFormControl = BaseContentObject & {
    type: 'TextareaFormControl';
    name: string;
    label?: string;
    hideLabel?: boolean;
    placeholder?: string;
    width: 'full' | '1/2';
    isRequired?: boolean;
};

export type TextFormControl = BaseContentObject & {
    type: 'TextFormControl';
    name: string;
    label?: string;
    hideLabel?: boolean;
    placeholder?: string;
    width: 'full' | '1/2';
    isRequired?: boolean;
};

export type TextSection = BaseContentObject & {
    type: 'TextSection';
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    variant: 'variant-a' | 'variant-b';
    title?: string;
    subtitle?: string;
    text?: string;
    elementId?: string;
    styles?: any;
};

export type ThemeStyle = BaseContentObject & {
    type: 'ThemeStyle';
    light?: string;
    onLight?: string;
    dark?: string;
    onDark?: string;
    primary?: string;
    onPrimary?: string;
    secondary?: string;
    onSecondary?: string;
    complementary?: string;
    onComplementary?: string;
    fontBody: 'fontPrimary' | 'fontSecondary';
    h1?: ThemeStyleHeading;
    h2?: ThemeStyleHeading;
    h3?: ThemeStyleHeading;
    h4?: ThemeStyleHeading;
    h5?: ThemeStyleHeading;
    h6?: ThemeStyleHeading;
    buttonPrimary?: ThemeStyleButton;
    buttonSecondary?: ThemeStyleButton;
    link?: ThemeStyleLink;
};

export type ThemeStyleButton = BaseContentObject & {
    type: 'ThemeStyleButton';
    weight: 'normal' | 'medium';
    case: 'none' | 'lowercase' | 'capitalize' | 'uppercase';
    letterSpacing: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider';
    horizontalPadding?: number;
    verticalPadding?: number;
};

export type ThemeStyleHeading = BaseContentObject & {
    type: 'ThemeStyleHeading';
    size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    weight: 'normal' | 'medium';
    decoration: 'none' | 'underline' | 'line-through';
    case: 'none' | 'lowercase' | 'capitalize' | 'uppercase';
    letterSpacing: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider';
};

export type ThemeStyleLink = BaseContentObject & {
    type: 'ThemeStyleLink';
    weight: 'normal' | 'medium';
    case: 'none' | 'lowercase' | 'capitalize' | 'uppercase';
    letterSpacing: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider';
};

export type VideoBlock = BaseContentObject & {
    type: 'VideoBlock';
    title?: string;
    url?: string;
    elementId?: string;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    aspectRatio?: '4:3' | '16:9';
};
