'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  FileUp,
  Combine,
  Zap,
  Lock,
  Download,
  Trash2,
  Layers,
  Image,
} from 'lucide-react'

const tools = [
  {
    icon: Combine,
    title: 'Merge PDFs',
    description: 'Combine multiple PDFs into one document seamlessly',
  },
  {
    icon: FileUp,
    title: 'Compress',
    description: 'Reduce file size without losing quality',
  },
  {
    icon: Lock,
    title: 'Protect PDFs',
    description: 'Add passwords and encryption to your documents',
  },
  {
    icon: Download,
    title: 'Convert to PDF',
    description: 'Transform images and documents into PDFs',
  },
  {
    icon: Image,
    title: 'Extract Images',
    description: 'Pull images directly from your PDF files',
  },
  {
    icon: Layers,
    title: 'Split Pages',
    description: 'Extract specific pages into new documents',
  },
]

export function PopularTools() {
  return (
    <section id="tools" className="relative border-t border-border/50 px-4 py-16 sm:px-6 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-primary/[0.02] to-white">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Powerful PDF Tools
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to manage, edit, and transform your PDFs with professional-grade tools
          </p>
        </div>

        {/* Tools grid */}
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16 sm:mb-20">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <div
                key={tool.title}
                className="group relative rounded-xl border border-border/50 bg-white/50 backdrop-blur-sm p-6 sm:p-8 hover:border-primary/30 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 p-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{tool.title}</h3>
                    <p className="text-sm sm:text-base text-foreground/70 mt-2">{tool.description}</p>
                  </div>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/20 text-primary hover:bg-primary/5 transition-all duration-200 group-hover:border-primary/50 mt-4"
                  >
                    Try Now
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA to Tools Hub */}
        <div className="text-center mb-16 sm:mb-20">
          <Link href="/tools">
            <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/40 transition-all duration-200">
              Explore All Tools
            </Button>
          </Link>
        </div>

        {/* Trust section */}
        <div className="rounded-xl border border-border/50 bg-gradient-to-r from-primary/5 via-white to-accent/5 px-6 sm:px-8 py-10 sm:py-12 text-center">
          <p className="mb-6 sm:mb-8 text-foreground/70 font-medium text-sm sm:text-base">Trusted by 50,000+ businesses and professionals</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <div className="text-foreground/60 font-semibold text-sm sm:text-base">TechCorp</div>
            <div className="text-foreground/60 font-semibold text-sm sm:text-base">DataFlow</div>
            <div className="text-foreground/60 font-semibold text-sm sm:text-base">CloudSync</div>
            <div className="text-foreground/60 font-semibold text-sm sm:text-base">SecureDoc</div>
          </div>
        </div>
      </div>
    </section>
  )
}
