'use client'

import { useState } from 'react'
import { ConverterLayout, FileUpload, ProcessingOptions, DownloadButton, ConverterSection } from '@/components/converter-layout'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function WatermarkPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [watermarkType, setWatermarkType] = useState<'text' | 'image'>('text')
  const [watermarkText, setWatermarkText] = useState('CONFIDENTIAL')
  const [opacity, setOpacity] = useState('50')
  const [position, setPosition] = useState('center')

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
  }

  const handleAddWatermark = async () => {
    if (!selectedFile) return

    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)

    console.log('[v0] Adding watermark to:', selectedFile.name, 'type:', watermarkType, 'text:', watermarkText)
  }

  return (
    <ConverterLayout
      title="Add Watermark to PDF"
      description="Protect your documents by adding text or image watermarks"
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
              {/* Watermark Type */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Watermark Type</label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {['text', 'image'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setWatermarkType(type as any)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all ${
                        watermarkType === type
                          ? 'border-2 border-primary bg-primary/10'
                          : 'border border-border/50 hover:border-primary/30'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)} Watermark
                    </button>
                  ))}
                </div>
              </div>

              {/* Text Watermark */}
              {watermarkType === 'text' && (
                <div className="space-y-3 pt-3 border-t border-border/50">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-2">Watermark Text</label>
                    <input
                      type="text"
                      value={watermarkText}
                      onChange={(e) => setWatermarkText(e.target.value)}
                      placeholder="e.g., CONFIDENTIAL"
                      maxLength={30}
                      className="w-full px-3 py-2 rounded-lg border border-border/50 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              )}

              {/* Image Upload for Image Watermark */}
              {watermarkType === 'image' && (
                <div className="space-y-3 pt-3 border-t border-border/50">
                  <label className="block text-xs font-medium text-foreground mb-2">Upload Image</label>
                  <div className="border-2 border-dashed border-border/30 rounded-lg p-4 text-center hover:border-primary/50 transition">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="watermark-image"
                    />
                    <label htmlFor="watermark-image" className="cursor-pointer block">
                      <p className="text-sm text-foreground/70">Click to upload image watermark</p>
                    </label>
                  </div>
                </div>
              )}

              {/* Opacity */}
              <div className="space-y-3 pt-3 border-t border-border/50">
                <div>
                  <label className="block text-xs font-medium text-foreground mb-2">Opacity: {opacity}%</label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={opacity}
                    onChange={(e) => setOpacity(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Position */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Position</label>
                <div className="grid gap-2 sm:grid-cols-3">
                  {['top-left', 'center', 'bottom-right'].map((pos) => (
                    <button
                      key={pos}
                      onClick={() => setPosition(pos)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        position === pos
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-white border border-border/50 text-foreground hover:border-primary/30'
                      }`}
                    >
                      {pos.charAt(0).toUpperCase() + pos.slice(1)}
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
                onClick={handleAddWatermark}
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
              <p className="text-sm text-foreground/70">Select a PDF file to add a watermark</p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <h3 className="font-semibold text-foreground mb-4">Watermark Tips</h3>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Text watermarks are great for marking documents as CONFIDENTIAL or DRAFT</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Image watermarks can be your company logo or signature</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Adjust opacity to make watermarks subtle or prominent</span>
            </li>
          </ul>
        </div>
      </div>
    </ConverterLayout>
  )
}
