import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Landing = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              AI-PGF Auto Lists Generator
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Generate multiple lists efficiently using AI technology. Perfect for project management, content creation, and more.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link to="/auth" className="flex items-center gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Landing