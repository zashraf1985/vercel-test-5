import { Layout, Page, Text, Code, Link } from '@vercel/edge-functions-ui'

export default function Product() {
  return (
    <Page>
      <Text variant="h2" className="mb-6">
        Product Variant
      </Text>
      <Text className="text-lg mb-4">
        You're currently looking at the variant of the product page under{' '}
        <Code>pages/product/c.tsx</Code>
      </Text>
      <Link href="/">Go back to /</Link>
    </Page>
  )
}

Product.Layout = Layout
