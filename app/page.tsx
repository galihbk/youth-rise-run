import Hero from '@/components/Hero'
import EventInfo from '@/components/EventInfo'
import Categories from '@/components/Categories'
import About from '@/components/About'
import Organizers from '@/components/Organizers'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <EventInfo />
      <Categories />
      <About />
      <Organizers />
      <Footer />
    </main>
  )
}
