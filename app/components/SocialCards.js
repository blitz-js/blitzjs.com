import Head from "next/head"

export const SocialCards = ({ imageUrl }) => {
  return (
    <Head>
      <meta key="twitter:image" name="twitter:image" content={imageUrl} />
      <meta key="og:image" property="og:image" content={imageUrl} />
    </Head>
  )
}
