import { generateGlobalCssVariables } from '@/utils/theme-style-utils';
import { useEffect, useState } from 'react';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
    const { global, ...page } = pageProps;
    const { theme } = global || {};
    const [isMounted, setIsMounted] = useState(false);

    const cssVars = generateGlobalCssVariables(theme);

    useEffect(() => {
        setIsMounted(true);
        document.body.setAttribute('data-theme', page.colors || 'colors-a');
    }, [page.colors]);

    return (
        <>
            <style jsx global>{`
                :root {
                    ${cssVars}
                }
            `}</style>
            {/* Only render the component after client-side hydration is complete */}
            {isMounted ? <Component {...pageProps} /> : null}
        </>
    );
}
