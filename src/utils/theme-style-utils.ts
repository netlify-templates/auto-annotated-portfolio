import { ThemeStyle } from '@/types';

export function generateGlobalCssVariables(styles: ThemeStyle): string {
    let cssVars = '';

    function processObject(obj, prefix = '--theme-') {
        for (const key in obj) {
            if (key === 'type' || key === '__metadata' || key.startsWith('data-')) {
                continue;
            }

            const value = obj[key];
            const varName = `${prefix}${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;

            if (typeof value === 'object' && !Array.isArray(value)) {
                processObject(value, `${varName}-`);
            } else {
                cssVars += `${varName}: ${value};\n`;
            }
        }
    }

    processObject(styles);
    return cssVars;
}
