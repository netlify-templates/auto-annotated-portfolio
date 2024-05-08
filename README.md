# Auto-annoteted Example: Developer Potfolio Site

![Developer Portfolio](https://assets.stackbit.com/docs/personal-nextjs-starter-thumb.png)

This is a full-fledged portfolio website built with Next.js, Tailwind & the [Git Content Source](https://docs.netlify.com/create/content-sources/git/).

The codebase showcases **how to apply annotations at scale**, meaning: how to make much of your components [highlightable in the visual editor](https://docs.netlify.com/create/visual-editing/inline-editor/) through data attributes without manually adding code throughout the codebase.

This is achieved by:

1. Adding an annotation property to the content objects at they're loaded (see `src/utils/content.ts`)
1. When rendering the page, each content sub-object is dynamically matched to the appropriate component. At this point, wrap each component with an annotation, based on the abovementioned content property. See `src/components/components-registry.tsx`.

**⚡ Demo:** [personal-nextjs.stackbit.app](https://personal-nextjs.stackbit.app/)

## Getting Started

The typical development process is to begin by working locally.

Create local Stackbit project from this repo:

```txt
npx create-stackbit-app@latest --example auto-annotated-portfolio
```

Run the Next.js development server:

```txt
cd my-stackbit-site
npm run dev
```

Install the Stackbit CLI. Then open a new terminal window in the same project directory and run the Stackbit Dev server:

```txt
npm install -g @stackbit/cli
stackbit dev
```

This outputs your own Stackbit URL. Open this, register or sign in, and you will be directed to Stackbit's visual editor for your new project.

![Next.js Dev + Stackbit Dev](https://assets.stackbit.com/docs/next-dev-stackbit-dev.png)

## Next Steps

Here are a few suggestions on what to do next if you're new to Stackbit:

- Learn [how Netlify Create works](https://docs.netlify.com/create/concepts/how-create-works/)
- Follow the [_Getting Started_ tutorial](https://docs.netlify.com/create/get-started/nextjs-markdown/)

## Other Netlify Create Projects

Stackbit has a number of examples that you can use to create a new project or evaluate Stackbit. Run the following command to see a list of available examples:

```txt
npx create-stackbit-app@latest --help
```

You can also visit [our `stackbit-themes` GitHub organization](https://github.com/stackbit-themes)

## Support

If you get stuck along the way, get help in our [support forums](https://answers.netlify.com/).
