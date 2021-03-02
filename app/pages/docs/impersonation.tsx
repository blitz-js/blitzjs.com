---
title: How To Impersonate Other Users
sidebar_label: How To Impersonate Other Users
---

Impersonation, also called personification is often a critical tool for SaaS applications as it allows you to view the application from the perspective of a specific user without knowing their credentials.

Here's an example of what your final result should look like:
![Screenshot of what it looks like](https://pbs.twimg.com/media/EsWuHShXcAEgEtw?format=jpg&name=large)

First, add a `impersonatingFromUserId` type to your [session](/docs/session-management#customize-session-public-data-in-typescript).

```ts
// types.ts
import { DefaultCtx, SessionContext, DefaultPublicData } from "blitz"
import { User } from "db"

declare module "blitz" {
  export interface Ctx extends DefaultCtx {
    session: SessionContext
  }
  export interface PublicData extends DefaultPublicData {
    role: "admin" | "customer"
    userId: User["id"]
    orgId: User["orgId"]
    impersonatingFromUserId?: number
  }
}

```

Create the following two mutations which will give you the ability to start the impersonation as well as stopping it.

```ts
// app/auth/mutations/impersonateUser.ts
import { resolver } from "blitz"
import db from "db"
import * as z from "zod"
import assert from "utils/assert"

export const ImpersonateUserInput = z.object({
  userId: z.number()
})

export default resolver.pipe(
  resolver.zod(ImpersonateUserInput),
  resolver.authorize(),
  async ({ userId }, ctx) => {
    const user = await db.user.findFirst({ where: { id: userId } })
    assert(user, "Could not find user id " + userId)

    await ctx.session.$create({
      userId: user.id,
      role: "admin",
      orgId: user.organizationId,
      impersonatingFromUserId: ctx.session.userId,
    })
  
    return user
  }
)
```

```ts
// app/auth/mutations/stopImpersonating.ts
import { resolver } from "blitz"
import db from "db"
import assert from "utils/assert"
import logger from "utils/logger"

export default resolver.pipe(
  resolver.authorize(),
  async ({}, ctx) => {
    const userId = ctx.session.publicData.impersonatingFromUserId
    if (!userId) {
      logger.debug("Already not impersonating anyone")
      return
    }

    const user = await db.user.findFirst({
      where: { id: userId },
    })
    assert(user, "Could not find user id " + userId)

    await ctx.session.$create({
      userId: user.id,
      role: user.admin ? "admin" : "customer",
      orgId: user.organizationId,
      impersonatingFromUserId: undefined,
    })

    return user
  }
)
```

Add a form similar to this in order to switch users.

```tsx
import { useMutation } from "blitz"
import { queryCache } from "react-query"
import impersonateUser, { ImpersonateUserInput } from "app/auth/mutations/impersonateUser"
import Form from "app/core/components/Form"
import LabeledTextField from "app/core/components/LabeledTextField"

export const ImpersonateUserForm = () => {
  const [impersonateUserMutation] = useMutation(impersonateUser)

  return (
    <Form
      schema={ImpersonateUserInput}
      submitText="Switch to User"
      onSubmit={async (values) => {
        try {
          await impersonateUserMutation(values)
          queryCache.clear()
        } catch (error) {
          return {
            [FORM_ERROR]:
              "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
          }
        }
      }}
    >
      <LabeledTextField name="userId" type="number" label="User ID" />
    </Form>
  )
}
```

Lastly, add the following component at the top of your Layout(s).

```tsx
// app/core/components/ImpersonatingUserNotice.tsx
import { invoke, useSession } from "blitz"
import { queryCache } from "react-query"
import stopImpersonating from "app/auth/mutations/stopImpersonating"

export const ImpersonatingUserNotice = () => {
  const session = useSession()
  if (!session.impersonatingFromUserId) return null

  return (
    <div className="bg-yellow-400 px-2 py-1 text-center font-semibold">
      Currently impersonating user {session.userId}{" "}
      <button
        className="appearance-none bg-transparent text-black uppercase"
        onClick={async () => {
          await invoke(stopImpersonating, {})
          queryCache.clear()
        }}
      >
        Exit
      </button>
    </div>
  )
}
```

You're done! You are now able to impersonate a user and stop again.
