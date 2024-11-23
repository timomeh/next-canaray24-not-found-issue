This is a reproduction of an issue with `notFound()` and Next.js' `'use cache'` directive.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- Click "Example without 'use cache'". It throws a not found error, which renders the `not-found.tsx` page.
- Click "Example with 'use cache'". It also throws a not found error, but this page is cached with the `'use cache'` directive. It should render `not-found.tsx`, but it does not. It throws the error instead.