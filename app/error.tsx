"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h1>
        <p className="text-xl text-gray-600 mb-8">We apologize for the inconvenience. Please try again.</p>
        <div className="space-x-4">
          <Button onClick={() => reset()} variant="outline">
            Try again
          </Button>
          <Button asChild>
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}