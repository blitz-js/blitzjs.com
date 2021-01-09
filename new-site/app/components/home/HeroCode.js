import { CodeWindow } from "../CodeWindow"
import tokenize from "../../macros/tokenize.macro"

const { tokens, code } = tokenize.jsx(
  `
  import { Head, Link, useRouter } from 'blitz'
  import createQuestion from 'app/questions/mutations/createQuestion'

  const NewQuestionPage = () => {
    const router = useRouter()

    return (
      <div className="container">
        <Head>
          <title>New Question</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>Create New Question </h1>

          <form
            onSubmit={async (event) => {
              event.preventDefault()

              try {
                const question = await createQuestion({
                  data: {
                    text: event.target[0].value,
                    publishedAt: new Date(),
                    choices: {
                      create: [
                        {text: event.target[1].value},
                        {text: event.target[2].value},
                        {text: event.target[3].value},
                      ],
                    },
                  },
                })
                alert("Success!" + JSON.stringify(question))
              } catch (error) {
                alert("Error creating question " + JSON.stringify(error, null, 2))
              }
            }}
            />
            <p>
              <Link href="/questions">
                <a>Questions</a>
              </Link>
            </p>
          </main>
        </div>
      )
    }
    export default NewQuestionPage
`,
  true
)

const HeroCode = ({ className = "" }) => {
  return (
    <CodeWindow className={className}>
      <CodeWindow.Code tokens={tokens} />
    </CodeWindow>
  )
}

export { HeroCode }
