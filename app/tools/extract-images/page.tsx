'use client'

import { useState } from 'react'
import { ConverterLayout, FileUpload, ProcessingOptions, DownloadButton, ConverterSection } from '@/components/converter-layout'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ExtractImagesPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [format, setFormat] = useState('original')
  const [quality, setQuality] = useState('high')

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
  }

  const handleExtract = async () => {
    if (!selectedFile) return

    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)

    console.log('[v0] Extracting images from:', selectedFile.name, 'format:', format, 'quality:', quality)
  }

  return (
    <ConverterLayout
      title="Extract Images from PDF"
      description="Pull all images from your PDF and download them individually or as a ZIP archive"
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
                <label className="block text-sm font-medium text-foreground mb-3">Output Format</label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {['original', 'jpg', 'png', 'webp'].map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setFormat(fmt)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        format === fmt
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-white border border-border/50 text-foreground hover:border-primary/30'
                      }`}
                    >
                      {fmt.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Image Quality</label>
                <div className="flex gap-3">
                  {['low', 'medium', 'high'].map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuality(q)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        quality === q
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-white border border-border/50 text-foreground hover:border-primary/30'
                      }`}
                    >
                      {q.charAt(0).toUpperCase() + q.slice(1)}
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
                onClick={handleExtract}
                isLoading={isProcessing}
                disabled={!selectedFile}
                fileName="Images (ZIP)"
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
              <p className="text-sm text-foreground/70">Select a PDF file to extract images</p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <h3 className="font-semibold text-foreground mb-4">About Image Extraction</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Supported Formats</p>
              <p className="text-xs text-foreground/70">Extracts JPEG, PNG, GIF, TIFF, and BMP images</p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Download Format</p>
              <p className="text-xs text-foreground/70">All images are packaged in a ZIP file for easy download</p>
            </div>
          </div>
        </div>
      </div>
    </ConverterLayout>
  )
}
