import { Layout, Page, Text, Link, List } from '@vercel/edge-functions-ui'
import Headers from '@components/headers'

export default function Omit() {
  return (
    <Page>
      <Text variant="h2" className="mb-6">
        Bot Protection with Botd (by FingerprintJS)
      </Text>
      <Text className="mb-4">This page is not using Botd.</Text>
      <Text className="mb-4">Navigate to other routes:</Text>
      <List className="mb-4">
        <li>
          <Link href="/">Home page using Botd</Link>
        </li>
        <li>
          <Link href="/blocked">Page with Bot Detected</Link>
        </li>
      </List>
      <hr className="border-t border-accents-2 mb-6" />
      <Text className="mb-4">Below is a fetch for this page:</Text>
      <Headers path="/omit" />
    </Page>
  )
}

Omit.Layout = Layout
