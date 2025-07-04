# mehedi.me

A personal website inspired by the design of [mehedi Israk's website](https://mehedi.me). All design credits go to mehedi Israk. 🌟

## Implementation 🛠️

This website was recreated from scratch by closely studying the design elements of mehedi Israk's site. It's a homage to their exceptional design skills, and every effort has been made to credit their work appropriately.

## Technical Stack 🧰

- **Languages and Libraries**: Built with Next.js (a React framework) and TypeScript.
- **Styling**: Tailwind CSS.
- **Components**: Shadcn/ui.
- **IDE**: Coded in Visual Studio Code.
- **Deployment**: Hosted and deployed with Vercel.

## Design Credits 🎨

The design of this site is based on the 5th iteration of mehedi Israk's portfolio. I have recreated the design for my training and personal use while ensuring to give full credit to mehedi for their original and inspiring work.

### Disclaimer ⚠️

This site is not intended as a direct clone of mehedi Israk's website but rather as a personal interpretation and implementation of their design. The coding and development were done by me, independently, by eyeballing their design.

### Acknowledgement 👏

> Based on mehedi Israk's website (they're awesome). Coded in Visual Studio Code. Built with Next.js, Tailwind CSS, and Shadcn/ui, deployed with Vercel.

## 🚨 Forking this repo (please read, it's important!) 🚨

I encourage others to learn from and be inspired by the design of this website. However, if you choose to use elements of my code and mehedi's design, **give proper credit to both me and mehedi Israk** by linking back to both our works.

Remember, it's essential to respect other people's work! Thanks.

### TL;DR 📝

- The design of this website is inspired by and credited to mehedi Israk.
- The site was independently coded and developed by me by re-creating mehedi's original design.
- **You can fork this repo but make sure you attribute by linking back to [mehedi.me](mehedi.me)**

## Getting Started 🚀

This is a [Next.js](https://nextjs.org/) project that was initially bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

1. First, install all dependencies:

```bash
npm install
```

2. Make sure it builds:

```bash
npm run build
```

3. Run it locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying the appropriate components/sections. The page auto-updates as you edit and save.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More 📘

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deploy on Vercel 🌐

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## CI/CD with GitHub Actions 🚀

This project uses GitHub Actions for continuous deployment to Vercel. The workflow automatically builds and deploys your application when you push to the `main` or `master` branch.

### Setup Required Secrets

To enable automatic deployment, you need to add the following secrets to your GitHub repository:

1. Go to your GitHub repository → Settings → Secrets and variables → Actions
2. Add the following repository secrets:

   - `VERCEL_TOKEN`: Your Vercel API token
     - Get this from [Vercel Account Settings](https://vercel.com/account/tokens)

   - `VERCEL_ORG_ID`: Your Vercel organization ID
     - Find this in your Vercel dashboard or run `vercel whoami` locally

   - `VERCEL_PROJECT_ID`: Your Vercel project ID
     - Find this in your Vercel dashboard project settings

### How to Get Vercel Credentials

1. **Install Vercel CLI**: `npm i -g vercel`
2. **Login to Vercel**: `vercel login`
3. **Get your tokens and IDs**:
   ```bash
   vercel whoami
   vercel projects ls
   ```

### Workflow Features

- ✅ Automatic deployment on push to main/master branch
- ✅ Pull request previews
- ✅ Linting and build verification
- ✅ Node.js 18 with npm caching
- ✅ Production deployment with `--prod` flag

The workflow file is located at `.github/workflows/main.yml`.
