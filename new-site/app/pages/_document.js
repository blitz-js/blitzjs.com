import NextDocument, { Html, Head, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    console.log(this.props.__NEXT_DATA__)
    return (
      <Html lang="en" className="antialiased">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="128x128" href="/128x128-Favicon-Purple.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/32x32-Favicon-Purple.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/16x16-Favicon-Purple.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5600C2" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="text-black bg-white dark:bg-black dark:text-white">
          <Main />
          <NextScript />
          <script> </script>
        </body>
      </Html>
    )
  }
}
