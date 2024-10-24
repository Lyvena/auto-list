import React from 'react'
import { Sparkles } from 'lucide-react'

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Sparkles className="h-6 w-6 text-primary" />
      <span className="font-bold text-xl">Auto Lists</span>
    </div>
  )
}

export default Logo