# Nextep.js 🧑‍🚀
#### Boilerplate for Next.js

## Getting 

### Features
- ✅ Next.js
- ✅ Tailwindcss
- ✅ Typescript
- ✅ Apollo GraphQL
- ✅ Prisma
- ✅ Nexus
- ✅ Styled Components
- ✅ Framer Motion

### Structures

```text
nextjs-boilerplate
├── apollo
│   ├── models
│   │   └── index.ts
│   ├── mutations
│   │   └── index.ts
│   ├── queries
│   │   └── index.ts
│   ├── states
│   │   └── index.ts
│   ├── cache.ts
│   ├── client.ts
├── components
│   ├── button
│   │   └── index.ts
├── containers
│   ├── layout
│   │   └── index.ts
├── pages
│   ├── api
│   │   └── graphql
│   │       └── index.ts
│   ├── index.ts
├── prisma
│   ├── client  #prisma-client
│   │   └── index.ts
│   ├── migrations #prisma migration
│   │   └── index.ts
│   ├── generated #nexus generate
│   │   └── nexus-typegen.ts
│   │   ├── schema.graphql
│   ├── nexus
│   │   ├── schema
│   │   │   ├── _migrations.ts
│   │   │   ├── _queries.ts
│   │   │   ├── post.ts
│   │   └── index.ts
│   ├── schema.prisma
│   ├── schema.ts
├── public
├── styles
│   ├── global.css
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── LICENSE
└── package.json
```

### Environment

```
# .env
DATABASE_URL=mysql://example:example@localhost:3306/db_name
NEXT_PUBLIC_API_URL=/api/graphql

# .env.local //create this file to overrides .env file, very secret
DATABASE_URL=mysql://example:example@localhost:3306/db_name
NEXT_PUBLIC_ANALYTICS_ID=
NEXT_PUBLIC_API_URL=/api/graphql
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn Apollo GraphQL](https://www.apollographql.com/)
- [Learn Nexus](https://nexusjs.org/)
- [Learn Prisma](https://www.prisma.io/)
- [Learn Styled Components](https://styled-components.com/)
- [Learn Typescript](https://www.typescriptlang.org/)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
