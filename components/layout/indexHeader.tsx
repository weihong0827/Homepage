import Head from 'next/head'

const IndexPageHead = () => {
  const description =
    'I am an aspiring Software engineer who is really passionate about creating technical products that can generate an impact to the life of others!'
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta property='og:site_name' content="Qiu Weihong's homepage" />
      <meta property='og:title' content="Qiu Weihong's homepage" />
      <meta property='og:type' content='website' />

      <meta
        property='og:image'
        content='https://homepage-tau-blond.vercel.app/_next/image?url=%2Fimages%2Fweihong.jpg&w=3840&q=75'
      />
      <meta name='description' content={description} />
      <meta property='og:description' content={description} />

      <title>Qiu Weihong Homepage</title>
    </Head>
  )
}
export default IndexPageHead
