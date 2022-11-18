import Script from 'next/script'

export default function Head(): JSX.Element {
  return (
    <>
      <title>Unlike</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Unlike others. Software development. React + TypeScript + GraphQL = 😍"
      />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="mask-icon" href="/favicon.svg" color="#000000" />
      <link rel="icon" href="/favicon.png" type="image/png" />
      {process.env.NODE_ENV === 'production' ? (
        <Script
          defer
          src="https://plausible.io/js/script.js"
          data-domain="unlike.dev"
        />
      ) : undefined}
    </>
  )
}
