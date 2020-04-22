---
id: queries-and-mutations
title: Queries and Mutations
sidebar_label: Queries and Mutations
---

Queries and Mutations are functions that connect your component to your backend. In your component, you import the query or mutation function and call it with one argument. A babel transform will convert the function into an [RPC request](../advanced/rpc-specification) instead.

## Component

```js
import { useQuery, Router } from "@blitzjs/core";
import { Product } from "app/product/ProductModel";
import getProduct from "app/product/queries/getProduct";
import updateProduct from "app/product/mutations/updateProduct";
import { Formik } from "formik";

export default function EditProductPage({ id }) {
  // status = 'loading' | 'error' | 'success'
  const [product, { status, error }] = useQuery(getProduct, { where: { id } });

  return (
    <div>
      <h1>{product.name}</h1>
      <Formik
        initialValues={product}
        validate={Product.validate}
        onSubmit={async (values) => {
          try {
            const res = await updateProduct(values);
            Router.push(`/products/${res.id}`);
          } catch (error) {
            alert("Error saving product");
          }
        }}
      >
        {({ handleSubmit }) => <form onSubmit={handleSubmit}></form>}
      </Formik>
    </div>
  );
}
```

## Queries

```js
import { UserContext } from "@blitzjs/core/types";
import { Product, FindOneProductArgs } from "app/product/ProductModel";

export default async function getProduct(
  args: FindOneProductArgs,
  user?: UserContext
) {
  // Can do any pre-processing here or trigger events

  const product = await Product.user(user).findOne(args);

  // Can do any post-processing here or trigger events

  return product;
}
```

## Mutations

```js
import { UserContext } from "@blitzjs/core/types";
import { Product, ProductUpdateInput } from "app/product/ProductModel";

export default async function updateProduct(
  data: ProductUpdateInput,
  user?: UserContext
) {
  // Can do any pre-processing here or trigger events

  const product = await Product.user(user).update({
    where: { id: data.id },
    data,
  });

  // Can do any post-processing here or trigger events

  return product;
}
```

Queries and Mutations are transformed into RPC calls when the application is built. See the [RPC Specification](../advanced/rpc-specification) to learn more.
