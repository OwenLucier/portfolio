
import HeroSection from './components/HeroSection'
import NavBar from './components/navigation/NavBar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import FooterSection from './components/FooterSection'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left bg-[#121212]">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  )
}
