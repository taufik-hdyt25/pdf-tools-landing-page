import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { PopularTools } from '@/components/popular-tools'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PopularTools />
      <FAQ />
      <Footer />
    </main>
  )
}
