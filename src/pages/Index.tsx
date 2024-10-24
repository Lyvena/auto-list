import React from 'react'
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Link } from 'react-router-dom'
import ListGenerator from '@/components/ListGenerator'
import Logo from '@/components/Logo'

const Index = () => {
  const { toast } = useToast()

  const handleGenerate = () => {
    toast({
      title: "Lists generated!",
      description: "Your lists have been successfully created.",
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <Logo />
          <Button asChild variant="outline">
            <Link to="/auth">Sign In</Link>
          </Button>
        </header>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">AI-PGF Auto Lists Generator</h1>
          <ListGenerator onGenerate={handleGenerate} />
        </div>
      </div>
    </div>
  )
}

export default Index