This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Start with local version of UUI library.

To start next app with last local changes of UUI library, run this commands from ` ./UUI ` folder:

```bash
lerna run build
# then
yarn run next:dev ## this script install all modules and update @epam modules with local changes and run application for manual check

## to check whether pages are rendered run tests
cd ./next-app
yarn test
```

### Start with public version UUI.

If you want to start next app with last public version of uui library do this:

```bash
cd ./next-app
# remove folders ./node_modules and ./.next if they are is
# then
yarn
yarn dev ## for manual check the application

## to check whether pages are rendered run tests
yarn test

```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Editing

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
