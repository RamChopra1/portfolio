# Ram Chopra - Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring a dark theme with emerald accents and smooth animations.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎨 Features

- **Responsive Design**: Mobile-first approach with sticky sidebar on desktop
- **Dark Theme**: Pure black background with emerald accent colors
- **Smooth Animations**: Framer Motion animations with reduced motion support
- **SEO Optimized**: Next.js SEO with Open Graph tags
- **Accessible**: Semantic HTML, focus styles, and screen reader friendly
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Hero.tsx          # Hero section
│   ├── SidebarCard.tsx   # Profile sidebar
│   ├── ExperienceCard.tsx # Experience timeline
│   ├── ProjectCard.tsx   # Project grid items
│   ├── StackItem.tsx     # Technology stack items
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Site footer
├── data/
│   └── site.ts           # Portfolio content data
├── public/
│   ├── images/           # Profile and project images
│   ├── cv.pdf           # Resume download
│   └── og.jpg           # Open Graph image
└── lib/
    └── utils.ts         # Utility functions
```

## ✏️ Customization

### Update Content

Edit `/data/site.ts` to customize:

- **Profile info**: Name, role, contact details, availability status
- **Experience**: Job history with descriptions
- **Projects**: Portfolio projects with images and tags
- **Education**: Academic background
- **Tech Stack**: Skills and tools
- **Social links**: GitHub, LinkedIn, etc.

### Replace Images

Add your images to `/public/images/`:

- `avatar.jpg` - Profile photo (square, 400x400px recommended)
- `projects/` - Project screenshots (16:9 aspect ratio recommended)
- `og.jpg` - Open Graph preview (1200x630px)
- `cv.pdf` - Resume/CV file

### Styling

The design system uses:

- **Background**: `#0b0b0b` (pure black)
- **Cards**: `#111111` with `#1f1f1f` borders
- **Accent**: `emerald-400` for highlights and CTAs
- **Typography**: Inter font with zinc color palette

Modify colors in `tailwind.config.ts` and `app/globals.css`.

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: next-seo

## 📱 Responsive Breakpoints

- **Mobile**: Single column layout
- **Desktop (lg+)**: Two-column with sticky sidebar
- **Animations**: Respect `prefers-reduced-motion`

## 🚀 Deployment

Deploy easily on Vercel:

```bash
# Build and deploy
npm run build
```

Or deploy to other platforms that support Next.js.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ using Next.js