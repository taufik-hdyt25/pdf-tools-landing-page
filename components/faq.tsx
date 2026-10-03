'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Is my data secure?',
    answer:
      'Yes, we use military-grade encryption (AES-256) to protect your files. All uploads are processed securely and deleted automatically after 24 hours. We never store your documents on our servers.',
  },
  {
    question: 'What file formats do you support?',
    answer:
      'We support PDF, PNG, JPG, DOCX, XLSX, and more. You can convert between formats, merge documents, and extract content from most common file types.',
  },
  {
    question: 'How large can my files be?',
    answer:
      'Free accounts can process files up to 25MB. Pro accounts can handle up to 500MB per file. For larger files, contact our support team.',
  },
  {
    question: 'Do I need to install software?',
    answer:
      'No, PDFTools is 100% web-based. Simply upload your files, process them in your browser, and download the results. No installation required.',
  },
  {
    question: 'Can I process multiple files at once?',
    answer:
      'Yes! With our batch processing feature, you can upload up to 20 files and process them simultaneously. Perfect for bulk conversions and merging.',
  },
  {
    question: 'Is there an API for developers?',
    answer:
      'Yes, we offer a comprehensive REST API for developers. You can integrate PDFTools into your applications with just a few lines of code. Check our documentation for details.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative border-t border-border/50 px-4 py-16 sm:px-6 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-accent/[0.02] to-white">
      <div className="mx-auto max-w-3xl">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to know about PDFTools and how to get the most out of it
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-4 sm:px-6 py-1 hover:border-primary/20 transition-colors duration-300 data-[state=open]:border-primary/30 data-[state=open]:bg-gradient-to-r data-[state=open]:from-primary/5 data-[state=open]:to-accent/5"
            >
              <AccordionTrigger className="py-4 text-left text-foreground hover:no-underline hover:text-primary transition-colors duration-200 font-medium text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-foreground/70 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 rounded-xl border border-border/50 bg-gradient-to-r from-primary/5 via-white to-accent/5 px-6 sm:px-8 py-8 sm:py-12 text-center">
          <h3 className="mb-2 text-xl sm:text-2xl font-bold text-foreground">Still have questions?</h3>
          <p className="mb-6 sm:mb-8 text-foreground/70 text-sm sm:text-base max-w-xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Our dedicated support team is here to help 24/7.
          </p>
          <a
            href="#"
            className="inline-block rounded-lg bg-gradient-to-r from-primary to-accent px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-primary-foreground transition-all duration-200 hover:shadow-lg hover:shadow-primary/40"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}
