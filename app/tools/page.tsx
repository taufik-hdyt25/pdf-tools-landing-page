import { Button } from '@/components/ui/button'
import { ArrowRight, FileUp, Combine, Zap, Lock, Layers, Image as ImageIcon, Wand2 } from 'lucide-react'
import Link from 'next/link'

const tools = [
  {
    id: 'convert-pdf',
    name: 'Convert to PDF',
    description: 'Transform images, documents, and other files into PDF format with ease',
    icon: FileUp,
    color: 'from-blue-500 to-cyan-500',
    href: '/tools/convert-pdf',
  },
  {
    id: 'compress',
    name: 'Compress PDF',
    description: 'Reduce file size without compromising quality or readability',
    icon: Zap,
    color: 'from-orange-500 to-red-500',
    href: '/tools/compress',
  },
  {
    id: 'extract-images',
    name: 'Extract Images',
    description: 'Pull all images from your PDF and download them individually',
    icon: ImageIcon,
    color: 'from-purple-500 to-pink-500',
    href: '/tools/extract-images',
  },
  {
    id: 'merge',
    name: 'Merge PDFs',
    description: 'Combine multiple PDF files into a single document',
    icon: Combine,
    color: 'from-green-500 to-emerald-500',
    href: '/tools/merge',
  },
  {
    id: 'split',
    name: 'Split PDF',
    description: 'Extract specific pages from your PDF or split it into separate files',
    icon: Layers,
    color: 'from-indigo-500 to-blue-500',
    href: '/tools/split',
  },
  {
    id: 'watermark',
    name: 'Add Watermark',
    description: 'Add text or image watermarks to protect your PDF documents',
    icon: Lock,
    color: 'from-rose-500 to-orange-500',
    href: '/tools/watermark',
  },
]

export const metadata = {
  title: 'PDF Tools - Convert, Compress & More',
  description: 'Access powerful PDF conversion and manipulation tools. Convert to PDF, compress, extract images, merge, split, and more.',
}

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-primary/[0.02] to-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            PDF Tools Hub
          </h1>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Access all our powerful PDF conversion and manipulation tools in one place
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <Link key={tool.id} href={tool.href}>
                <div className="group h-full relative rounded-xl border border-border/50 bg-white/50 backdrop-blur-sm p-6 sm:p-8 hover:border-primary/30 hover:bg-white/80 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className={`inline-flex rounded-lg bg-gradient-to-br ${tool.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{tool.name}</h3>
                      <p className="text-sm text-foreground/70 mt-2">{tool.description}</p>
                    </div>

                    <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all duration-200">
                      <span>Try Now</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Feature Info */}
        <div className="mt-16 sm:mt-20 rounded-xl border border-border/50 bg-gradient-to-r from-primary/5 via-white to-accent/5 px-6 sm:px-8 py-10 sm:py-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose PDFTools?</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Fast Processing</h3>
              <p className="text-sm text-foreground/70">Average processing time under 2 seconds</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Secure & Private</h3>
              <p className="text-sm text-foreground/70">Bank-level encryption for all files</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">No Limits</h3>
              <p className="text-sm text-foreground/70">Process unlimited files with no size restrictions</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
