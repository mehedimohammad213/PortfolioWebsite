# Next.js Animated Portfolio

A modern, animated portfolio built with Next.js, Framer Motion, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-first approach
- 🚀 Fast performance with Next.js
- 🎯 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/next-animated-portfolio.git
cd next-animated-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## CI/CD Pipeline

This project includes GitHub Actions workflows for automated testing, building, and deployment.

### Workflows

1. **CI Pipeline** (`.github/workflows/ci.yml`)

   - Runs on push to `main`/`develop` branches and pull requests
   - Installs dependencies
   - Runs ESLint
   - Builds the application
   - Uploads build artifacts

2. **Full CI/CD Pipeline** (`.github/workflows/ci-cd.yml`)

   - Includes all CI steps
   - Deploys to Vercel (requires setup)
   - Security scanning with npm audit and Snyk
   - Performance testing with Lighthouse CI

3. **GitHub Pages Deployment** (`.github/workflows/deploy.yml`)
   - Deploys to GitHub Pages on push to main branch
   - Static export of the Next.js application

### Setup Instructions

#### For Basic CI (Recommended to start with):

1. Push your code to GitHub
2. The CI workflow will automatically run on every push and pull request
3. Check the "Actions" tab in your GitHub repository to see the workflow status

#### For GitHub Pages Deployment:

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. Push to the main branch to trigger deployment

#### For Vercel Deployment:

1. Create a Vercel account and connect your GitHub repository
2. Add the following secrets to your GitHub repository:

   - `VERCEL_TOKEN` - Your Vercel API token
   - `VERCEL_ORG_ID` - Your Vercel organization ID
   - `VERCEL_PROJECT_ID` - Your Vercel project ID

3. Optional: Add `SNYK_TOKEN` for security scanning

### Environment Variables

For the full CI/CD pipeline, you'll need to set up these secrets in your GitHub repository:

1. Go to your repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Add the following secrets:

```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id
SNYK_TOKEN=your_snyk_token (optional)
```

## Project Structure

```
next-animated-portfolio/
├── .github/workflows/     # GitHub Actions workflows
├── public/               # Static assets
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── about/       # About page
│   │   ├── contact/     # Contact page
│   │   ├── portfolio/   # Portfolio page
│   │   └── ...
│   └── components/      # React components
├── next.config.mjs      # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need help setting up the CI/CD pipeline, please open an issue in the repository.
