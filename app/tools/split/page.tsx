'use client'

import { useState } from 'react'
import { ConverterLayout, FileUpload, ProcessingOptions, DownloadButton, ConverterSection } from '@/components/converter-layout'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function SplitPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [splitMode, setSplitMode] = useState<'all' | 'range'>('all')
  const [startPage, setStartPage] = useState('1')
  const [endPage, setEndPage] = useState('2')

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
  }

  const handleSplit = async () => {
    if (!selectedFile) return

    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)

    console.log('[v0] Splitting:', selectedFile.name, 'mode:', splitMode, 'range:', startPage, '-', endPage)
  }

  return (
    <ConverterLayout
      title="Split PDF"
      description="Extract specific pages from your PDF or split it into separate files"
    >
      <div className="space-y-8">
        {/* Back Button */}
        <Link href="/tools" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition">
          <ArrowLeft className="h-4 w-4" />
          Back to Tools
        </Link>

        {/* File Upload */}
        <ConverterSection title="Select PDF File">
          <FileUpload
            onFileSelect={handleFileSelect}
            accept=".pdf"
            isLoading={isProcessing}
          />
          {selectedFile && (
            <div className="mt-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-sm font-medium text-foreground">
                Selected: <span className="text-primary">{selectedFile.name}</span>
              </p>
              <p className="text-xs text-foreground/70 mt-1">
                Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          )}
        </ConverterSection>

        {/* Options */}
        {selectedFile && (
          <ProcessingOptions>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Split Mode</label>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: 'Split All Pages', description: 'Separate each page into its own file' },
                    { id: 'range', label: 'Extract Page Range', description: 'Extract specific pages into a new file' },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setSplitMode(mode.id as any)}
                      className={`w-full p-3 rounded-lg text-left transition-all ${
                        splitMode === mode.id
                          ? 'border-2 border-primary bg-primary/10'
                          : 'border border-border/50 hover:border-primary/30'
                      }`}
                    >
                      <p className="font-medium text-foreground text-sm">{mode.label}</p>
                      <p className="text-xs text-foreground/60 mt-1">{mode.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {splitMode === 'range' && (
                <div className="space-y-3 pt-3 border-t border-border/50">
                  <p className="text-sm text-foreground/70">Specify which pages to extract</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">Start Page</label>
                      <input
                        type="number"
                        min="1"
                        value={startPage}
                        onChange={(e) => setStartPage(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-border/50 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">End Page</label>
                      <input
                        type="number"
                        min="1"
                        value={endPage}
                        onChange={(e) => setEndPage(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-border/50 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ProcessingOptions>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {selectedFile ? (
            <>
              <DownloadButton
                onClick={handleSplit}
                isLoading={isProcessing}
                disabled={!selectedFile}
                fileName="PDF(s)"
              />
              <Button
                variant="outline"
                onClick={() => setSelectedFile(null)}
                className="w-full border-border/50 hover:bg-primary/5"
              >
                Clear & Start Over
              </Button>
            </>
          ) : (
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-center">
              <p className="text-sm text-foreground/70">Select a PDF file to split</p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <h3 className="font-semibold text-foreground mb-4">Split Options</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Split All Pages</p>
              <p className="text-xs text-foreground/70">Creates separate PDF files for each page in your original document</p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Extract Page Range</p>
              <p className="text-xs text-foreground/70">Extracts pages from a specific range and creates a new PDF file</p>
            </div>
          </div>
        </div>
      </div>
    </ConverterLayout>
  )
}
