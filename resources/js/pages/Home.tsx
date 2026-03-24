import About from '@/components/main/About'
import Hero from '@/components/main/Hero'
import Skills from '@/components/main/Skills'
import Timeline from '@/components/main/Timeline'
import MainLayout from '@/layouts/main-layout'
import Contact from '@/components/main/Contact'
import Projects from '@/components/main/Projects'

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
