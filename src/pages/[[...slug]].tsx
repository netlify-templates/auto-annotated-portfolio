import { DynamicComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { allContent } from '../utils/content';
import { PageComponentProps } from '@/types';

const Page: React.FC<PageComponentProps> = (props) => {
    return <DynamicComponent {...props} />;
};

export function getStaticPaths() {
    const allData = allContent();
    const paths = allData.map((obj) => obj.__metadata.urlPath).filter(Boolean);
    return { paths, fallback: false };
}

export function getStaticProps({ params }) {
    const allData = allContent();
    const urlPath = '/' + (params.slug || []).join('/');
    const props = resolveStaticProps(urlPath, allData);
    return { props };
}

export default Page;
