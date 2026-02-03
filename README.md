# Enhanced Portfolio Site

![Developer Portfolio](https://assets.stackbit.com/docs/personal-nextjs-starter-thumb.png)

This is an **enhanced version** of the [Netlify Developer Portfolio Starter](https://github.com/netlify-templates/auto-annotated-portfolio), built with Next.js, Tailwind CSS, and [Stackbit Visual Editor](https://docs.netlify.com/visual-editor/overview/).

## 🎯 What Makes This Different

This fork includes significant enhancements beyond the original template:

### 🎥 Advanced Video Support
- **Custom Cover Thumbnails**: Add custom thumbnail images for YouTube, Vimeo, and self-hosted videos
- **Click-to-Play Interface**: Professional play button overlay with hover effects
- **Gallery Integration**: Videos work seamlessly in media galleries alongside images
- **Auto-Featured Images**: Video cover images automatically become project featured images when no image is set

### 🖼️ Enhanced Image Features
- **Overlay Text**: Add customizable text directly on images with full control over:
  - Position (top, center, bottom)
  - Size (small, medium, large, extra large)
  - Weight (normal, medium, bold)
  - Alignment (left, center, right)
  - Colors (text and background with transparency support)
- **Clickable Images**: Turn any image into a link with optional "open in new tab" setting
- **Standardized Dimensions**: Consistent aspect ratios across all media types (1:1, 2:3, 3:2, 3:4, 4:3, 16:9)

### 📧 Netlify Forms Integration
- Fully functional contact forms with **email notifications**
- Built-in spam protection with honeypot fields
- Success/error states and loading indicators
- 100 free submissions per month on Netlify's free plan

### 🎨 Improved Gallery & Layout
- **Flexible Column Layouts**: 1-7 columns (original supported 2-7)
- Enhanced responsive behavior across all screen sizes
- Fixed hover effects and proper aspect ratio enforcement
- Support for both images and videos in galleries

### 📅 Cleaner UI
- Removed date displays from frontend for a cleaner look
- Dates still editable in Stackbit admin for organization
- Hidden Netlify branding badge

### 🛠️ Technical Improvements
- Extended VideoBlock aspect ratio support
- Improved overlay positioning and rendering
- Better component organization and reusability
- Enhanced form handling with proper state management

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
