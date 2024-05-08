const plugin = require('tailwindcss/plugin');
const themeStyle = require('./content/data/style.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './content/**/*'],
    safelist: [
        'colors-a',
        'colors-b',
        'colors-c',
        'colors-d',
        'colors-e',
        'colors-f',
        {
            pattern: /(m|p)(t|b|l|r)-(0|px|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/
        }
    ],
    theme: {
        extend: {
            colors: {
                light: themeStyle.light,
                'on-light': themeStyle.onLight,
                dark: themeStyle.dark,
                'on-dark': themeStyle.onDark,
                primary: themeStyle.primary,
                'on-primary': themeStyle.onPrimary,
                secondary: themeStyle.secondary,
                'on-secondary': themeStyle.onSecondary,
                complementary: themeStyle.complementary,
                'on-complementary': themeStyle.onComplementary
            },
            spacing: {
                '1/1': '100%',
                '1/4': '25%',
                '2/3': '66.666%',
                '3/2': '150%',
                '3/4': '75%',
                '4/3': '133.333%',
                '9/16': '56.25%'
            },
            fontFamily: {
                fontPrimary: ['DM Mono', 'monospace'],
                fontSecondary: ['Azeret Mono', 'monospace']
            },
            letterSpacing: {
                wide: '.05em',
                wider: '.1em',
                widest: '.25em'
            }
        }
    },
    plugins: [
        plugin(function ({ addBase, addComponents, theme }) {
            const h1Size = themeStyle.h1.size;
            const adjustH1Size = ['6xl', '7xl', '8xl', '9xl'].includes(h1Size);
            const h2Size = themeStyle.h2.size;
            const adjustH2Size = ['5xl', '6xl', '7xl', '8xl', '9xl'].includes(h2Size);
            const h3Size = themeStyle.h3.size;
            const adjustH3Size = ['4xl', '5xl', '6xl', '7xl', '8xl', '9xl'].includes(h3Size);
            addBase({
                body: {
                    fontFamily: theme(`fontFamily.${themeStyle.fontBody}`)
                },
                'h1,.h1': {
                    ...(adjustH1Size && {
                        fontSize: theme('fontSize.5xl'),
                        '@media (min-width: 640px)': {
                            fontSize: theme(`fontSize.${h1Size}`)
                        }
                    }),
                    ...(!adjustH1Size && {
                        fontSize: theme(`fontSize.${h1Size}`)
                    }),
                    fontWeight: theme(`fontWeight.${themeStyle.h1.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h1.letterSpacing}`),
                    textDecoration: themeStyle.h1.decoration,
                    textTransform: themeStyle.h1.case
                },
                h2: {
                    ...(adjustH2Size && {
                        fontSize: theme('fontSize.4xl'),
                        '@media (min-width: 640px)': {
                            fontSize: theme(`fontSize.${h2Size}`)
                        }
                    }),
                    ...(!adjustH2Size && {
                        fontSize: theme(`fontSize.${h2Size}`)
                    }),
                    fontWeight: theme(`fontWeight.${themeStyle.h2.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h2.letterSpacing}`),
                    textDecoration: themeStyle.h2.decoration,
                    textTransform: themeStyle.h2.case
                },
                h3: {
                    ...(adjustH3Size && {
                        fontSize: theme('fontSize.3xl'),
                        '@media (min-width: 640px)': {
                            fontSize: theme(`fontSize.${h3Size}`)
                        }
                    }),
                    ...(!adjustH3Size && {
                        fontSize: theme(`fontSize.${h3Size}`)
                    }),
                    fontWeight: theme(`fontWeight.${themeStyle.h3.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h3.letterSpacing}`),
                    textDecoration: themeStyle.h3.decoration,
                    textTransform: themeStyle.h3.case
                },
                h4: {
                    fontSize: theme(`fontSize.${themeStyle.h4.size}`),
                    fontWeight: theme(`fontWeight.${themeStyle.h4.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h4.letterSpacing}`),
                    textDecoration: themeStyle.h4.decoration,
                    textTransform: themeStyle.h4.case
                },
                h5: {
                    fontSize: theme(`fontSize.${themeStyle.h5.size}`),
                    fontWeight: theme(`fontWeight.${themeStyle.h5.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h5.letterSpacing}`),
                    textDecoration: themeStyle.h5.decoration,
                    textTransform: themeStyle.h5.case
                },
                h6: {
                    fontSize: theme(`fontSize.${themeStyle.h6.size}`),
                    fontWeight: theme(`fontWeight.${themeStyle.h6.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h6.letterSpacing}`),
                    textDecoration: themeStyle.h6.decoration,
                    textTransform: themeStyle.h6.case
                }
            });
            addComponents({
                '.sb-component-button-primary': {
                    fontWeight: theme(`fontWeight.${themeStyle.buttonPrimary.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.buttonPrimary.letterSpacing}`),
                    padding: `${themeStyle.buttonPrimary.verticalPadding}px ${themeStyle.buttonPrimary.horizontalPadding}px`,
                    textTransform: themeStyle.buttonPrimary.case
                },
                '.sb-component-button-primary.sb-component-button-icon': {
                    padding: `${themeStyle.buttonPrimary.verticalPadding}px`
                },
                '.sb-component-button-secondary': {
                    fontWeight: theme(`fontWeight.${themeStyle.buttonSecondary.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.buttonSecondary.letterSpacing}`),
                    padding: `${themeStyle.buttonSecondary.verticalPadding}px ${themeStyle.buttonSecondary.horizontalPadding}px`,
                    textTransform: themeStyle.buttonSecondary.case
                },
                '.sb-component-button-secondary.sb-component-button-icon': {
                    padding: `${themeStyle.buttonSecondary.verticalPadding}px`
                },
                '.sb-component-link': {
                    fontWeight: theme(`fontWeight.${themeStyle.link.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.link.letterSpacing}`),
                    textTransform: themeStyle.link.case
                }
            });
        })
    ]
};
