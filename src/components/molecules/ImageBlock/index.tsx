import { Annotated } from '@/components/Annotated';

export default function ImageBlock(props) {
    const { elementId, className, url, altText = '' } = props;
    if (!url) {
        return null;
    }

    return (
        <Annotated content={props}>
            <img id={elementId || null} className={className} src={url} alt={altText} />
        </Annotated>
    );
}
