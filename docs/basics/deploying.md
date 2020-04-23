---
id: deploying
title: Deploying A Blitz Project
sidebar_label: Deploying
---

### Deploy to Production

1. You need a production Postgres database. Here's how to set this up on [Digital Ocean](https://www.digitalocean.com/products/managed-databases-postgresql/?refcode=466ad3d3063d).
2. For deploying serverless, you also need a connection pool.
   1. [Read the Digitial Ocean docs on setting up your connection pool](https://www.digitalocean.com/docs/databases/postgresql/how-to/manage-connection-pools/#creating-a-connection-pool?refcode=466ad3d3063d)
   2. Ensure you set your "Pool Mode" to be "Session" instead of "Transaction" (because of a bug in Prisma)
3. Lastly, you need your entire database connection string. If you need, [read the Prisma docs on this](https://www.prisma.io/docs/reference/database-connectors/postgresql#connection-details).
   1. If deploying to serverless with a connection pool, make sure you get the connection string to your connection pool, not directly to the DB.

### Serverless

Assuming you already have a Zeit account and the `now` cli installed, you can do the following:

1. Add your DB url as a secret environment variable by running `now secrets add @database-url "DATABASE_CONNECTION_STRING"`
2. Add a `now.json` at your project root with

```json
{
  "env": {
    "DATABASE_URL": "@database-url"
  },
  "build": {
    "env": {
      "DATABASE_URL": "@database-url"
    }
  }
}
```

3. Run `now`

Once working and deployed to production, your app should be very stable because it’s running Next.js which is already battle tested.

### Traditional, Long-Running Server

You can deploy a Blitz app like a regular Node or Express project.

`blitz start --production` will start your app in production mode. Make sure you provide the `DATABASE_URL` environment variable for your production database.
