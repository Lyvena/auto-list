import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Plus, Minus, List, Clipboard, Check, Settings } from 'lucide-react';

interface ListGeneratorProps {
  onGenerate: () => void;
}

const ListGenerator: React.FC<ListGeneratorProps> = ({ onGenerate }) => {
  const [loading, setLoading] = useState(false);
  const [listCount, setListCount] = useState(1);

  const handleGenerate = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    onGenerate();
  };

  return (
    <div className="space-y-6">
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

      <div className="space-y-2">
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
          Prompt
        </label>
        <Textarea
          id="prompt"
          placeholder="Enter your prompt here..."
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="context" className="block text-sm font-medium text-gray-700">
          Context (optional)
        </label>
        <Textarea
          id="context"
          placeholder="Enter additional context here..."
          className="min-h-[100px]"
        />
      </div>

      <div className="flex justify-between items-center">
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button onClick={handleGenerate} disabled={loading}>
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <List className="mr-2 h-4 w-4" />
          )}
          Generate Lists
        </Button>
      </div>
    </div>
  );
};

export default ListGenerator;