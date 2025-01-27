import { Config, ContentObject, PostFeedLayout, PostLayout, ThemeStyle } from './generated';

export * from './base';
export * from './generated';

export type GlobalProps = {
    site: Config;
    styles: ThemeStyle;
};

export type PageComponentProps = ContentObject & {
    global: GlobalProps;
};
