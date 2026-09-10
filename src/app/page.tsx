import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Featured } from '@/components/Featured'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Nav } from '@/components/Nav'
import { Work } from '@/components/Work'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Featured />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
