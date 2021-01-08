import NextDocument, { Html, Head, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    console.log(this.props.__NEXT_DATA__)
    return (
      <Html lang="en" className="antialiased text-black bg-white">
        <Head>
          {/* <link rel="apple-touch-icon" sizes="180x180" href="/128x128-Favicon-Purple.png" /> */}
          <link rel="icon" type="image/png" href="/128x128-Favicon-Purple.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00b4b6" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script> </script>
        </body>
      </Html>
    )
  }
}
