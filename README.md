# Cinematographer Portfolio

![Developer Portfolio](https://assets.stackbit.com/docs/personal-nextjs-starter-thumb.png)

We absolutely **love** the [Netlify Developer Portfolio Starter](https://github.com/netlify-templates/auto-annotated-portfolio) and the visual editing workflow! This repo is our version with some tweaks to make it perfect for a cinematographer's portfolio.

After years on Squarespace, we're **so excited** to finally have a portfolio site that's:
- Fast and modern
- Easy to update without touching code
- Flexible enough to showcase video work properly
- Git-based (no more proprietary CMS lock-in!)

## 🎬 What We Added

Here are the customizations we made to fit our needs:

### 🎥 Better Video Support
Cinematographers work with video, so we needed this to be first-class:
- Custom cover thumbnails for all video types (YouTube, Vimeo, self-hosted)
- Nice click-to-play interface with a play button overlay
- Videos work in galleries alongside images
- If a project only has video, its cover image automatically becomes the featured thumbnail

### 🖼️ Image Customization
Sometimes you want text on images without opening Photoshop:
- Add text overlays directly on images
- Control position, size, weight, alignment, and colors
- Make images clickable (link to full projects, external sites, etc.)
- All media uses consistent aspect ratios so everything looks aligned

### 📧 Contact Forms That Actually Work
We hooked up Netlify Forms so inquiries actually reach us:
- Email notifications when someone fills out the contact form
- Built-in spam protection
- Shows success/error messages
- 100 free submissions/month on Netlify's free plan

### 🎨 Gallery Improvements
- Flexible 1-7 column layouts (original only did 2-7)
- Better responsive behavior on mobile
- Videos and images work together in galleries
- Fixed some hover effect quirks

### 📅 Cleaner Look
- Removed dates from the frontend (looked too blog-y for a portfolio)
- Dates still saved in the admin for organization
- Hidden the Netlify badge in the corner

---

## 📚 Original Features

This project inherits all features from the original Netlify template:

- **Auto-annotation system** for visual editing
- Git-based content management
- Stackbit Visual Editor integration
- Fully customizable through the visual editor

**How auto-annotation works:**
1. Annotation properties are added to content objects as they're loaded (see `src/utils/content.ts`)
2. Components are dynamically matched and wrapped with annotations (see `src/components/components-registry.tsx`)

**Original Template:** [netlify-templates/auto-annotated-portfolio](https://github.com/netlify-templates/auto-annotated-portfolio)

## Deploying to Netlify

If you click "Deploy to Netlify" button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/auto-annotated-portfolio)

## Getting Started

The typical development process is to begin by working locally. Clone this repository, then run `npm install` in its root directory.

Run the Next.js development server:

```txt
cd auto-annotated-portfolio
npm run dev
```

Install the [Netlify visual editor CLI](https://www.npmjs.com/package/@stackbit/cli). Then open a new terminal window in the same project directory and run the Netlify visual editor dev server:

```txt
npm install -g @stackbit/cli
stackbit dev
```

This outputs your own Netlify visual editor URL. Open this, register or sign in, and you will be directed to Netlify's visual editor for your new project.

![Next.js Dev + Netlify visual editor dev](https://assets.stackbit.com/docs/next-dev-stackbit-dev.png)

## Next Steps

Here are a few suggestions on what to do next if you're new to Netlify Visual Editor:

- Learn [how Netlify Visual Editor works](https://docs.netlify.com/visual-editor/overview/)
- Check [Netlify visual editor reference documentation](https://visual-editor-reference.netlify.com/)

## Support

If you get stuck along the way, get help in our [support forums](https://answers.netlify.com/).
