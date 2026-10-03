'use client'

import { useState } from 'react'
import { ConverterLayout, DownloadButton, ConverterSection } from '@/components/converter-layout'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Trash2, GripVertical } from 'lucide-react'

interface UploadedFile {
  id: string
  file: File
  name: string
}

export default function MergePage() {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [draggedId, setDraggedId] = useState<string | null>(null)

  const handleFileSelect = (newFiles: FileList) => {
    Array.from(newFiles).forEach((file) => {
      if (file.type === 'application/pdf') {
        setFiles((prev) => [
          ...prev,
          {
            id: Math.random().toString(36),
            file,
            name: file.name,
          },
        ])
      }
    })
  }

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }

  const moveFile = (fromIndex: number, toIndex: number) => {
    const newFiles = [...files]
    const [removed] = newFiles.splice(fromIndex, 1)
    newFiles.splice(toIndex, 0, removed)
    setFiles(newFiles)
  }

  const handleMerge = async () => {
    if (files.length < 2) return

    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)

    console.log('[v0] Merging files:', files.map((f) => f.name))
  }

  return (
    <ConverterLayout
      title="Merge PDFs"
      description="Combine multiple PDF files into a single document"
    >
      <div className="space-y-8">
        {/* Back Button */}
        <Link href="/tools" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition">
          <ArrowLeft className="h-4 w-4" />
          Back to Tools
        </Link>

        {/* Upload Area */}
        <ConverterSection title="Select PDF Files to Merge">
          <div className="border-2 border-dashed border-border/30 rounded-lg p-8 hover:border-primary/50 transition cursor-pointer">
            <input
              type="file"
              multiple
              accept=".pdf"
              onChange={(e) => {
                if (e.target.files) handleFileSelect(e.target.files)
              }}
              className="hidden"
              id="pdf-upload"
              disabled={isProcessing}
            />
            <label htmlFor="pdf-upload" className="block cursor-pointer text-center">
              <p className="text-lg font-semibold text-foreground mb-2">Drop PDFs here to add them</p>
              <p className="text-sm text-foreground/60">or click to browse and select multiple files</p>
            </label>
          </div>
        </ConverterSection>

        {/* Files List */}
        {files.length > 0 && (
          <ConverterSection title={`Files to Merge (${files.length})`}>
            <div className="space-y-2">
              {files.map((file, index) => (
                <div
                  key={file.id}
                  draggable
                  onDragStart={() => setDraggedId(file.id)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => {
                    const draggedIndex = files.findIndex((f) => f.id === draggedId)
                    if (draggedIndex !== -1) {
                      moveFile(draggedIndex, index)
                    }
                  }}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/30 transition bg-white/50 group"
                >
                  <GripVertical className="h-5 w-5 text-foreground/40 group-hover:text-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{index + 1}. {file.name}</p>
                    <p className="text-xs text-foreground/60">{(file.file.size / 1024).toFixed(2)} KB</p>
                  </div>
                  <button
                    onClick={() => removeFile(file.id)}
                    className="p-1 hover:bg-red-100 rounded transition"
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
            <p className="text-xs text-foreground/60 mt-4">Drag to reorder files. They will be merged in the order shown.</p>
          </ConverterSection>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {files.length > 0 ? (
            <>
              <DownloadButton
                onClick={handleMerge}
                isLoading={isProcessing}
                disabled={files.length < 2}
                fileName="PDF"
              />
              {files.length < 2 && (
                <p className="text-xs text-center text-foreground/60">Add at least 2 PDF files to merge</p>
              )}
              <Button
                variant="outline"
                onClick={() => setFiles([])}
                className="w-full border-border/50 hover:bg-primary/5"
              >
                Clear All
              </Button>
            </>
          ) : (
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-center">
              <p className="text-sm text-foreground/70">Add PDF files above to begin merging</p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <h3 className="font-semibold text-foreground mb-4">Merge Tips</h3>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Add 2 or more PDF files to merge</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Drag and drop to reorder files before merging</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">•</span>
              <span>All content is preserved exactly as it appears in the original files</span>
            </li>
          </ul>
        </div>
      </div>
    </ConverterLayout>
  )
}
