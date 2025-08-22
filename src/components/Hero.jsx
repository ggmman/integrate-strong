const Hero = ({ onContactClick }) => {
  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToPricing = () => {
    const element = document.getElementById('pricing')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900"></div>
      
      {/* Content */}
      <div className="container-max section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="text-accent-500 block">Health & Strength</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Professional in-home personal training designed specifically for adults and seniors in the Colorado Springs area. 
            Build strength, improve balance, and enhance your quality of life from the comfort of your home.
          </p>
          
          {/* Key benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 text-gray-200">
            <div className="bg-primary-800/50 p-6 rounded-lg backdrop-blur-sm border border-primary-700">
              <div className="text-accent-500 text-3xl mb-3"></div>
              <h3 className="font-semibold text-lg mb-2">In-Home Convenience</h3>
              <p className="text-sm">No gym membership required. We bring professional equipment to you.</p>
            </div>
            <div className="bg-primary-800/50 p-6 rounded-lg backdrop-blur-sm border border-primary-700">
              <div className="text-accent-500 text-3xl mb-3"></div>
              <h3 className="font-semibold text-lg mb-2">Senior-Focused</h3>
              <p className="text-sm">Specialized training programs designed for mature adults and seniors.</p>
            </div>
            <div className="bg-primary-800/50 p-6 rounded-lg backdrop-blur-sm border border-primary-700">
              <div className="text-accent-500 text-3xl mb-3"></div>
              <h3 className="font-semibold text-lg mb-2">Results-Driven</h3>
              <p className="text-sm">Personalized workouts that improve strength, balance, and mobility.</p>
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={scrollToServices} className="btn-primary text-lg px-8 py-4">
              Learn More About Our Services
            </button>
            <button onClick={onContactClick} className="btn-secondary text-lg px-8 py-4">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToServices} className="text-gray-400 hover:text-accent-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Hero
