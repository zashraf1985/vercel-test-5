import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/edge-functions-ui/layout'
import { getLayout } from '@vercel/edge-functions-ui'
import '@vercel/edge-functions-ui/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)

  return (
    <Layout
      title="API Rate Limiting with Upstash"
      path="api-rate-limit"
      deployButton={{
        env: ['UPSTASH_REST_API_DOMAIN', 'UPSTASH_REST_API_TOKEN'],
      }}
    >
      <Component {...pageProps} />
    </Layout>
  )
}
