import { CodeWindow } from "../CodeWindow"
import tokenize from "../../macros/tokenize.macro"
import { useState } from "react"
import { useIsDesktop } from "app/hooks/useIsDesktop"

const pageTokenized = tokenize.jsx(
  `// app/pages/projects/new.tsx
import { Link, useRouter, useMutation, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import createProject, {CreateProject} from "app/projects/mutations/createProject"
import { ProjectForm, FORM_ERROR } from "app/projects/components/ProjectForm"

const NewProjectPage: BlitzPage = () => {
  const router = useRouter()
  const [createProjectMutation] = useMutation(createProject)

  return (
    <div>
      <h1>Create New Project</h1>

      <ProjectForm
        submitText="Create Project"
        schema={CreateProject}
        onSubmit={async (values) => {
          try {
            const project = await createProjectMutation(values)
            router.push("/projects/" + project.id)
          } catch (error) {
            return { [FORM_ERROR]: error.toString() }
          }
        }}
      />
    </div>
  )
}

NewProjectPage.authenticate = true
NewProjectPage.getLayout = (page) => <Layout>{page}</Layout>

export default NewProjectPage`,
  true
)

const mutationTokenized = tokenize.jsx(
  `// app/projects/mutations/createProject.ts
import { resolver } from "blitz"
import db from "db"
import * as z from "zod"

export const CreateProject = z
  .object({
    name: z.string(),
  })

export default resolver.pipe(
  resolver.zod(CreateProject),
  resolver.authorize(),
  async (input) => {
    const project = await db.project.create({ data: input })

    return project
  }
)`,
  true
)

const HeroCode = ({ className = "" }) => {
  const isDesktop = useIsDesktop()
  console.log(isDesktop)
  const [tabs, setTabs] = useState([
    {
      title: isDesktop ? "mutations/createProject.ts" : "createProject.ts",
      tokens: mutationTokenized.tokens,
      selected: true,
    },
    {
      title: "pages/projects/new.tsx",
      tokens: pageTokenized.tokens,
      selected: false,
    },
  ])
  return (
    <CodeWindow
      className={className}
      tabs={tabs}
      onTabClick={(tabIndex) => {
        setTabs(
          tabs.map((tab, i) => ({
            ...tab,
            selected: i === tabIndex,
          }))
        )
      }}
    >
      <CodeWindow.Code tokens={tabs.find((tab) => tab.selected).tokens} />
    </CodeWindow>
  )
}

export { HeroCode }
