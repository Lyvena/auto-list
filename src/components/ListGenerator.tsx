import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, Plus, Minus, List, Settings, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ListGeneratorProps {
  onGenerate: () => void;
}

const ListGenerator: React.FC<ListGeneratorProps> = ({ onGenerate }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [listCount, setListCount] = useState(1);
  const [prompt, setPrompt] = useState('');
  const [context, setContext] = useState('');

  const handleGenerate = async () => {
    const apiKey = localStorage.getItem('openai_api_key');
    
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please add your OpenAI API key in the settings to use AI features.",
        variant: "destructive"
      });
      return;
    }

    if (!prompt.trim()) {
      toast({
        title: "Prompt Required",
        description: "Please enter a prompt for list generation.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      // Here you would make the actual API call to OpenAI
      // For now, we'll simulate the delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      onGenerate();
      toast({
        title: "Success!",
        description: "Lists generated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate lists. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setListCount(Math.max(1, listCount - 1))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="font-medium">Generate {listCount} list{listCount > 1 ? 's' : ''}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setListCount(listCount + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="outline" asChild>
          <Link to="/settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </Button>
      </div>

      <div className="space-y-2">
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
          Prompt
        </label>
        <Textarea
          id="prompt"
          placeholder="Enter your prompt here... (e.g., 'Generate a list of healthy breakfast ideas')"
          className="min-h-[100px]"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="context" className="block text-sm font-medium text-gray-700">
          Context (optional)
        </label>
        <Textarea
          id="context"
          placeholder="Add any additional context... (e.g., 'Vegetarian options only')"
          className="min-h-[100px]"
          value={context}
          onChange={(e) => setContext(e.target.value)}
        />
      </div>

      <Button 
        onClick={handleGenerate} 
        disabled={loading}
        className="w-full"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            Generate with AI
          </>
        )}
      </Button>
    </motion.div>
  );
};

export default ListGenerator;