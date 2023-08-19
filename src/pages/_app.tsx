import '../styles/global.css'
//import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Analytics /> */}
    </>
  )
}

export default MyApp
