---
id: commands
title: CLI Commands
sidebar_label: Commands
---

- [new](#new-name)
- [start](#start)
- [db migrate](#db-migrate)
- [db introspect](#db-introspect)
- [db studio](#db-studio)
- [console](#console)

### `new`

Generate a new blitz project at `<current_folder>./NAME`

```bash
  $ blitz new myProjectName
```

### `start`

Start your app in development mode

```bash
  $ blitz start
```

Start your app in production mode

```bash
  $ blitz start --production
```

### `db migrate`

Run any needed migrations via Prisma 2 and generate Prisma Client

```bash
  $ blitz db migrate
```

### `db introspect`

Will introspect the database defined in `db/schema.prisma` and automatically generate a complete `schema.prisma` file for you. Lastly, it'll generate Prisma Client.

```bash
  $ blitz db introspect
```

### `db studio`

Open the Prisma Studio UI at [http://localhost:5555](http://localhost:5555) to see and change data in your database.

```bash
  $ blitz db studio
```

### `blitz console`

```bash
  $ blitz console
```
