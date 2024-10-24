import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Settings as SettingsIcon, Key } from 'lucide-react'

const Settings = () => {
  const { toast } = useToast()
  const [apiKey, setApiKey] = React.useState('')

  const handleSaveKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid API key",
        variant: "destructive"
      })
      return
    }
    
    localStorage.setItem('openai_api_key', apiKey)
    toast({
      title: "Success",
      description: "API key saved successfully",
    })
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12">
      <div className="max-w-2xl mx-auto px-4">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <SettingsIcon className="h-6 w-6" />
              <CardTitle>Settings</CardTitle>
            </div>
            <CardDescription>Configure your AI settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="apiKey" className="block text-sm font-medium">
                OpenAI API Key
              </label>
              <div className="relative">
                <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="apiKey"
                  type="password"
                  placeholder="Enter your OpenAI API key"
                  className="pl-9"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Your API key is stored locally and never sent to our servers.
              </p>
            </div>
            <Button onClick={handleSaveKey}>Save API Key</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Settings