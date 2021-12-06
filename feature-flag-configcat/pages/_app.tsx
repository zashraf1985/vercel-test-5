import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/edge-functions-ui/layout'
import { getLayout } from '@vercel/edge-functions-ui'
import '@vercel/edge-functions-ui/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)

  return (
    <Layout
      title="AB testing with ConfigCat"
      path="feature-flag-configcat"
      deployButton={{ env: ['NEXT_PUBLIC_CONFIGCAT_SDK_KEY'] }}
    >
      <Component {...pageProps} />
    </Layout>
  )
}
