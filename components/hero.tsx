'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-foreground/80">New AI-powered PDF tools available</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Transform Your PDFs with{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Intelligent Power
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-balance text-base sm:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto">
            Edit, merge, convert, and compress PDFs in seconds. Lightning-fast, bank-level secure, and built for modern productivity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/40 transition-all duration-200 text-base sm:text-base px-6 sm:px-8"
            >
              Start Free Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5 transition-all duration-200 text-base sm:text-base px-6 sm:px-8"
            >
              <span>Watch Demo</span>
            </Button>
          </div>

          {/* Highlight stats */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">2M+</p>
              <p className="text-xs sm:text-sm text-foreground/60 mt-1">PDFs Processed</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">99.9%</p>
              <p className="text-xs sm:text-sm text-foreground/60 mt-1">Uptime SLA</p>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">&lt;2s</p>
              <p className="text-xs sm:text-sm text-foreground/60 mt-1">Avg Processing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-0 -z-10 h-96 w-96 rounded-full bg-accent/8 blur-3xl pointer-events-none" />
    </section>
  )
}
