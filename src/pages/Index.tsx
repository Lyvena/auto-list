import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, Plus, Minus, List, Clipboard, Check, Settings } from 'lucide-react';
import ListGenerator from '@/components/ListGenerator';

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
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">AI-PGF Auto Lists Generator</h1>
        <ListGenerator onGenerate={handleGenerate} />
      </div>
    </div>
  );
};

export default Index;