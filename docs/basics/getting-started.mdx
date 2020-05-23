---
id: getting-started
title: Getting Started with Blitz
sidebar_label: Getting Started
---

# Disclaimer

Before getting started, you should know **this is alpha software**. Blitz is incomplete. There are rough spots and bugs. APIs may change. But you can build an app and deploy it to production. We're excited to see what you build!

If you have any issues at all, please join the [Blitz Community Slack](https://slack.blitzjs.com) and tell us in the **#help** channel. If you get stuck and frustrated, please don't blame yourself. This documentation, and Blitz in general, is not yet fine-tuned for those with less experience. Eventually it will be because this is very important to us.

## Introduction

Blitz is a Rails-like framework for building monolithic, fullstack React apps. The idea is that Blitz makes you extremely productive by doing as much set up and grunt work for you.

**When building a Blitz app, you don’t have to think about “building an API” or “fetching data from your API”**. You only think about writing functions that get and change data. And to use those functions in your component, import and call them like a regular function.

Blitz is built on Next.js, so if you are familiar with that, you will feel right at home.

## Blitz App Development

### Set Up Your Computer

- [ ] You need Node.js 12 or newer
- [ ] You need Postgres installed and running.
  - On macOS, you can use `brew install postgres` or install [Postgres.app](https://postgresapp.com/)

### Create Your Blitz App

1. `npm install -g blitz` or `yarn global add blitz`
2. Run `blitz new myAppName` to create a new blitz app in the `myAppName` directory
3. `cd myAppName`
4. `blitz start`
5. View your baby app at [https://localhost:3000](https://localhost:3000)

### Set Up Your Database

By default, Blitz uses Prisma 2 which is a strongly typed database client. You probably want to read [the Prisma 2 documentation](https://www.prisma.io/docs/understand-prisma/introduction). _Note, Prisma 2 is not required for Blitz. The only Prisma-Blitz integration is the `blitz db` cli command. You can use anything you want, such as Mongo, TypeORM, etc._

1. Open `db/prisma.schema` and add the following:

```prisma
model Project {
  id        Int      @default(autoincrement()) @id
  name      String
  tasks     Task[]
}
model Task {
  id          Int      @default(autoincrement()) @id
  name        String
  project     Project  @relation(fields: [projectId], references: [id])
  projectId   Int
}
```

2. Run `blitz db migrate`
   - If this fails, you need to change the `DATABASE_URL` value in `.env` to whatever is required by your Postgres installation.

### Generate the CRUD Files

_CRUD = create, read, update, delete_

1. Run `blitz generate crud project`
2. Run `blitz generate crud task --parent project`
3. Open [https://localhost:3000/projects](https://localhost:3000/projects) to see the default project list page
