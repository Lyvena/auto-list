import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, List, Lightbulb, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const Landing = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Sparkles className="h-12 w-12 text-primary animate-pulse" />
            </div>
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
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <FeatureCard 
              icon={<List className="h-6 w-6" />}
              title="Smart List Generation"
              description="Create multiple organized lists simultaneously with AI-powered suggestions."
            />
            <FeatureCard 
              icon={<Lightbulb className="h-6 w-6" />}
              title="Intelligent Suggestions"
              description="Get smart recommendations based on your context and requirements."
            />
            <FeatureCard 
              icon={<Zap className="h-6 w-6" />}
              title="Lightning Fast"
              description="Generate comprehensive lists in seconds with our advanced AI technology."
            />
          </motion.div>
        </div>
      </main>
    </div>
  )
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-white rounded-lg shadow-lg"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-2 bg-primary/10 rounded-lg text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

export default Landing