'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Upload, Download, Loader2 } from 'lucide-react'

interface ConverterLayoutProps {
  title: string
  description: string
  children: React.ReactNode
}

export function ConverterLayout({ title, description, children }: ConverterLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-primary/[0.02] to-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-foreground/70">{description}</p>
        </div>

        {/* Main content */}
        <div className="bg-white rounded-xl border border-border/50 p-6 sm:p-8 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  )
}

interface FileUploadProps {
  onFileSelect: (file: File) => void
  accept?: string
  label?: string
  isLoading?: boolean
}

export function FileUpload({ onFileSelect, accept = '*/*', label = 'Choose File', isLoading = false }: FileUploadProps) {
  const [isDragActive, setIsDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true)
    } else if (e.type === 'dragleave') {
      setIsDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      onFileSelect(files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files[0]) {
      onFileSelect(files[0])
    }
  }

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`relative rounded-lg border-2 border-dashed transition-all duration-300 p-8 sm:p-12 text-center cursor-pointer ${
        isDragActive
          ? 'border-primary bg-primary/10 scale-105'
          : 'border-border/30 hover:border-primary/50 bg-white/50'
      }`}
    >
      <input
        type="file"
        onChange={handleChange}
        accept={accept}
        className="hidden"
        id="file-upload"
        disabled={isLoading}
      />
      <label htmlFor="file-upload" className="cursor-pointer block">
        <Upload className={`h-12 w-12 mx-auto mb-4 ${isDragActive ? 'text-primary' : 'text-primary/50'} transition-colors`} />
        <p className="text-lg font-semibold text-foreground mb-2">Drop your file here</p>
        <p className="text-sm text-foreground/60 mb-4">or click to browse</p>
      </label>
      {isLoading && (
        <div className="absolute inset-0 rounded-lg bg-white/80 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Processing...</p>
          </div>
        </div>
      )}
    </div>
  )
}

interface ProcessingOptionsProps {
  children: React.ReactNode
}

export function ProcessingOptions({ children }: ProcessingOptionsProps) {
  return (
    <div className="mt-8 p-6 rounded-lg border border-border/50 bg-gradient-to-r from-primary/5 to-accent/5">
      <h3 className="text-lg font-semibold text-foreground mb-4">Options</h3>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

interface DownloadButtonProps {
  onClick: () => void
  isLoading?: boolean
  disabled?: boolean
  fileName?: string
}

export function DownloadButton({ onClick, isLoading = false, disabled = false, fileName = 'file' }: DownloadButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || isLoading}
      className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/40 transition-all duration-200 text-base py-2 sm:py-3"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Download {fileName}
        </>
      )}
    </Button>
  )
}

export function ConverterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div>{children}</div>
    </div>
  )
}
