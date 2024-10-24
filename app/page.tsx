import About from '@/components/about'
import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'
import Image from 'next/image'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Contact from '@/components/contact'
import ReactGA from 'react-ga4';


export default function Home() {
  ReactGA.initialize('G-DHL39DMW3S');
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
