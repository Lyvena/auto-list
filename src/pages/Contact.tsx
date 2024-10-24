import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from 'lucide-react'

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12">
      <div className="max-w-2xl mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Get in touch with our team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-lg">
              <Mail className="h-5 w-5" />
              <a href="mailto:info@lyvena.xyz" className="text-primary hover:underline">
                info@lyvena.xyz
              </a>
            </div>
            <p className="mt-4 text-muted-foreground">
              We\'re here to help! Send us an email and we\'ll get back to you as soon as possible.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Contact