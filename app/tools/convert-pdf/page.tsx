'use client'

import { useState } from 'react'
import { ConverterLayout, FileUpload, ProcessingOptions, DownloadButton, ConverterSection } from '@/components/converter-layout'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ConvertPDFPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [orientation, setOrientation] = useState<'auto' | 'portrait' | 'landscape'>('auto')

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
  }

  const handleConvert = async () => {
    if (!selectedFile) return

    setIsProcessing(true)
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)

    // In a real app, this would download the file
    console.log('[v0] Converting:', selectedFile.name, 'with orientation:', orientation)
  }

  return (
    <ConverterLayout
      title="Convert to PDF"
      description="Transform images, documents, and other files into PDF format with professional quality"
    >
      <div className="space-y-8">
        {/* Back Button */}
        <Link href="/tools" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition">
          <ArrowLeft className="h-4 w-4" />
          Back to Tools
        </Link>

        {/* File Upload */}
        <ConverterSection title="Select File">
          <FileUpload
            onFileSelect={handleFileSelect}
            accept="image/*,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
            isLoading={isProcessing}
          />
          {selectedFile && (
            <div className="mt-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-sm font-medium text-foreground">
                Selected: <span className="text-primary">{selectedFile.name}</span>
              </p>
              <p className="text-xs text-foreground/70 mt-1">
                Size: {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
          )}
        </ConverterSection>

        {/* Options */}
        {selectedFile && (
          <ProcessingOptions>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Page Orientation</label>
                <div className="flex gap-3">
                  {['auto', 'portrait', 'landscape'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setOrientation(opt as any)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        orientation === opt
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-white border border-border/50 text-foreground hover:border-primary/30'
                      }`}
                    >
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
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
                onClick={handleConvert}
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
              <p className="text-sm text-foreground/70">Select a file to begin conversion</p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <h3 className="font-semibold text-foreground mb-4">Supported Formats</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Images</p>
              <p className="text-xs text-foreground/70">JPG, PNG, BMP, GIF, TIFF</p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Documents</p>
              <p className="text-xs text-foreground/70">DOC, DOCX, XLS, XLSX, PPT, PPTX</p>
            </div>
          </div>
        </div>
      </div>
    </ConverterLayout>
  )
}
