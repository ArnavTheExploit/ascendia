import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TeacherSection from '@/components/TeacherSection'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TeacherSection />
      <Features />
      <Pricing />
      <Reviews />
      <Footer />
    </main>
  )
}
