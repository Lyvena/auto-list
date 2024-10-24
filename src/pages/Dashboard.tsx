import React from 'react'
import ListGenerator from '@/components/ListGenerator'
import { useToast } from "@/components/ui/use-toast"

const Dashboard = () => {
  const { toast } = useToast()

  const handleGenerate = () => {
    toast({
      title: "Lists generated!",
      description: "Your lists have been successfully created.",
    })
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Generate Lists</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ListGenerator onGenerate={handleGenerate} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard