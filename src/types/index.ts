import { Config, ContentObject, ThemeStyle } from './generated';

export * from './base';
export * from './generated';

export type GlobalProps = {
    site: Config;
    theme: ThemeStyle;
};

export type PageComponentProps = ContentObject & {
    global: GlobalProps;
};
