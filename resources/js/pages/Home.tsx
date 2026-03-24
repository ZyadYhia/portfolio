import About from '@/components/main/About'
import Contact from '@/components/main/Contact'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/skills'
import Timeline from '@/components/main/Timeline'
import MainLayout from '@/layouts/main-layout'

export default function Home() {
    return (
        <MainLayout>
            <Hero />
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Contact />
        </MainLayout>
    )
}
