'use client'

import { stringify } from "querystring"

export default function Error(
  { error }: { error: Error & { digest?: string } }
) {
  return (
    <div>
      <h1>File: /error.tsx</h1>
      <p>💥 {error.toString()}</p>
      <pre>{error.stack}</pre>
    </div>
  )
}