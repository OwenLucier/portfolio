
import Image from 'next/image'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import GlowingCard from './components/GlowingCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left bg-[#121212]">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  )
}
