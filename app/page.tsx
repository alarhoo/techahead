import Features from '@/components/Features'
import Hero from '@/components/Hero'
import NewsLetter from '@/components/NewsLetter'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Features />
      <Testimonials />
      <NewsLetter />
    </main>
  )
}
