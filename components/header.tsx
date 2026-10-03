'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileText, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary via-accent to-primary shadow-md" />
          <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">PDFTools</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/tools" className="text-sm font-medium text-foreground/70 transition hover:text-primary duration-200">
            Tools
          </Link>
          <a href="#faq" className="text-sm font-medium text-foreground/70 transition hover:text-primary duration-200">
            FAQ
          </a>
          <a href="#" className="text-sm font-medium text-foreground/70 transition hover:text-primary duration-200">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-foreground/70 hover:text-primary">
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-200">
            Get Started
          </Button>
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border/50 bg-white/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="/tools" className="text-sm font-medium text-foreground/70 hover:text-primary">
              Tools
            </Link>
            <a href="#faq" className="text-sm font-medium text-foreground/70 hover:text-primary">
              FAQ
            </a>
            <a href="#" className="text-sm font-medium text-foreground/70 hover:text-primary">
              Pricing
            </a>
            <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-primary justify-start">
              Sign In
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
