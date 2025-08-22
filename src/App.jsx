import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import About from './components/About'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'pricing', 'about']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-primary-900">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero onContactClick={openContactModal} />
        <Services />
        <Pricing onContactClick={openContactModal} />
        <About onContactClick={openContactModal} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  )
}

export default App