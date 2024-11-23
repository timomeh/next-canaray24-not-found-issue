import { notFound } from "next/navigation"

export default async function Page() {
  notFound()

  return (
    <div>
      <h1>File: /example-without-cache/page.tsx</h1>
      <p>This will never render</p>
    </div>
  )
}