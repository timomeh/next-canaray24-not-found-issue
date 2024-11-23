import { notFound } from "next/navigation"

export default async function Page() {
  'use cache'

  notFound()

  return (
    <div>
      <h1>File: /example-with-cache/page.tsx</h1>
      <p>This will never render</p>
    </div>
  )
}