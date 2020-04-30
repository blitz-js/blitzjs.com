---
id: queries-and-mutations
title: Writing Queries & Mutations
sidebar_label: Queries & Mutations
---

Blitz queries and mutations are plain, asynchronous Javascript functions that always run on the server.

We automatically alias the root of your project, so `import db from 'db'` is importing `<project_root>/db/index.ts`

**Example Query:**

```ts
// app/products/queries/getProduct.tsx
import db, { FindOneProductArgs } from "db";

export default async function getProduct(args: FindOneProductArgs) {
  // Can do any pre-processing or event triggers here
  const product = await db.product.findOne(args);

  // Can do any post-processing or event triggers here
  return product;
}
```

**Example Mutation:**

```ts
// app/products/mutations/createProduct.tsx
import db, { ProductCreateArgs } from "db";

export default async function createProduct(args: ProductCreateArgs) {
  // Can do any pre-processing or event triggers here
  const product = await db.product.create(args);

  // Can do any post-processing or event triggers here
  return product;
}
```

### Using Queries

#### Queries In a React Component

Blitz provides a `useQuery` hook, which is built on [`react-query`](https://github.com/tannerlinsley/react-query). The first argument is a query function. The second argument is the input to the query function. The third argument is any valid react-query configuration item.

At build time, the direct function import is swapped out for a function that executes a network call to run the query serverside.

**React Concurrent Mode is enabled by default for Blitz apps.** So the `<Suspense>` component is used for loading states and `<ErrorBoundary>` is used to display errors. If you need, you can read the [React Concurrent Mode Docs](https://reactjs.org/docs/concurrent-mode-intro.html).

```tsx
import { Suspense } from "react";
import { useRouter, useQuery } from "blitz";
import getProduct from "/app/products/queries/getProduct";
import ErrorBoundary from "app/components/ErrorBoundary";

function Product() {
  const router = useRouter();
  const id = parseInt(router.query.id as string);
  const [product] = useQuery(getProduct, { where: { id: props.query.id } });
  return <div>{product.name}</div>;
}

export default function App() {
  return (
    <div>
      <ErrorBoundary
        fallback={(error) => <div>Error: {JSON.stringify(error)}</div>}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Product />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
```

### Queries On the Server

**Queries and Mutations are transformed into RPC calls when the application is built. See the [RPC Specification](../advanced/rpc-specification) to learn more**

In `getStaticProps`, a query function can be called directly without `useQuery`

```tsx
import getProduct from "/app/products/queries/getProduct";

export const getStaticProps = async (context) => {
  const product = await getProduct({ where: { id: context.params?.id } });
  return { props: { product } };
};

export default function ProductListing({ product }) {
  return <div>{product.name}</div>;
}
```

In `getServerSideProps`, pass a query function to `ssrQuery` which will ensure appropriate middleware is run before/after your query function.

```tsx
import { ssrQuery } from 'blitz'
import getProduct from '/app/products/queries/getProduct'

export const getServerSideProps = async ({params, req, res}) => {
  const product = await ssrQuery(getProduct, {where: {id: params.id}}, {req, res}))
  return {props: {product}}
}

export default function ProductListing({ product }) {
  return <div>{product.name}</div>
}
```

For more details, read the comprehensive [Query & Mutation Usage Issue](https://github.com/blitz-js/blitz/issues/89)

### Using Mutations

Mutations are called directly, like a regular asynchronous function.

At build time, the direct function import is swapped out for a function that executes a network call to run the mutation server-side.

```tsx
import { useQuery } from "blitz";
import getProduct from "/app/products/queries/getProduct";
import updateProduct from "/app/products/mutations/updateProduct";
import { Formik } from "formik";

export default function ProductEditForm(props) {
  const [product] = useQuery(getProduct, { where: { id: props.id } });
  return (
    <Formik
      initialValues={product}
      onSubmit={async (values) => {
        try {
          const product = await updateProduct(values);
        } catch (error) {
          alert("Error saving product");
        }
      }}
    >
      {/* ... */}
    </Formik>
  );
}
```

For more details, read the comprehensive [Query & Mutation Usage Issue](https://github.com/blitz-js/blitz/issues/89)
