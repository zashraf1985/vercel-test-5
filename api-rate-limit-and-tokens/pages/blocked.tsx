import React from 'react'
import { Layout, Page, Link, Text } from '@vercel/edge-functions-ui'

const Index = () => (
  <Page>
    <div className="text-center mb-6">
      <Text variant="h1" className="mb-4">
        IP Blocking with Upstash
      </Text>
      <Text>
        You're seeing this page because your IP has been blocked, go to the{' '}
        <Link href="/">homepage</Link> to unblock your IP.
      </Text>
    </div>
  </Page>
)

Index.Layout = Layout

export default Index
