'use client'

import Link from 'next/link'
import { FileText, Heart, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-white to-primary/[0.02] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary via-accent to-primary" />
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">PDFTools</span>
            </Link>
            <p className="text-sm text-foreground/70">
              Professional PDF tools for everyone. Transform your documents with ease and confidence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/50 hover:text-primary transition duration-200" aria-label="Follow us">
                <Heart className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition duration-200" aria-label="Contact">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition duration-200">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition duration-200">
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">Developers</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition duration-200">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition duration-200">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition duration-200">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition duration-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition duration-200">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition duration-200">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-border/50 pt-8 sm:pt-12">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs sm:text-sm text-foreground/60">
              &copy; {currentYear} PDFTools. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-foreground/60 hover:text-primary transition duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition duration-200">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
