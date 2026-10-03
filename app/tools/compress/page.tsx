'use client'

import { useState } from 'react'
import { ConverterLayout, FileUpload, ProcessingOptions, DownloadButton, ConverterSection } from '@/components/converter-layout'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function CompressPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [quality, setQuality] = useState('medium')

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
  }

  const handleCompress = async () => {
    if (!selectedFile) return

    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)

    console.log('[v0] Compressing:', selectedFile.name, 'with quality:', quality)
  }

  const qualitySettings = {
    low: { label: 'Low (Best Compression)', description: 'Smallest file size, may reduce quality' },
    medium: { label: 'Medium (Recommended)', description: 'Balance between quality and file size' },
    high: { label: 'High (Best Quality)', description: 'Largest file size, highest quality' },
  }

  return (
    <ConverterLayout
      title="Compress PDF"
      description="Reduce your PDF file size while maintaining quality"
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
                Original Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          )}
        </ConverterSection>

        {/* Options */}
        {selectedFile && (
          <ProcessingOptions>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Compression Level</label>
                <div className="space-y-2">
                  {Object.entries(qualitySettings).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => setQuality(key)}
                      className={`w-full p-3 rounded-lg text-left transition-all ${
                        quality === key
                          ? 'border-2 border-primary bg-primary/10'
                          : 'border border-border/50 hover:border-primary/30'
                      }`}
                    >
                      <p className="font-medium text-foreground text-sm">{val.label}</p>
                      <p className="text-xs text-foreground/60 mt-1">{val.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </ProcessingOptions>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {selectedFile ? (
            <>
              <DownloadButton
                onClick={handleCompress}
                isLoading={isProcessing}
                disabled={!selectedFile}
                fileName="PDF"
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
              <p className="text-sm text-foreground/70">Select a PDF file to compress</p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <h3 className="font-semibold text-foreground mb-4">How Compression Works</h3>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Our advanced algorithm optimizes images and removes unnecessary metadata</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>File quality is preserved even at the lowest compression level</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Typically reduces file size by 30-70% depending on the original file</span>
            </li>
          </ul>
        </div>
      </div>
    </ConverterLayout>
  )
}
