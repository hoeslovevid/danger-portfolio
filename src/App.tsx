import { About } from './components/About'
import { Connect } from './components/Connect'
import { Featured } from './components/Featured'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { ProjectGrid } from './components/ProjectGrid'

export default function App() {
  return (
    <div className="min-h-svh bg-ink text-text">
      <Nav />
      <main>
        <Hero />
        <About />
        <Featured />
        <ProjectGrid />
        <Connect />
      </main>
      <Footer />
    </div>
  )
}
