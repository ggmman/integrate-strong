const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary-900 border-t border-primary-700">
      <div className="container-max section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-accent-500">Integrate Strong LLC</h3>
            <p className="text-gray-300 leading-relaxed">
              Professional in-home personal training designed specifically for middle-aged adults and seniors in Colorado Springs. 
              Building strength, improving balance, and enhancing quality of life.
            </p>
            <div className="text-gray-300">
              <p>Serving the Colorado Springs area with</p>
              <p>personalized fitness solutions.</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-accent-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-accent-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-accent-500 transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-accent-500 transition-colors"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:integratestrong@gmail.com" 
                  className="hover:text-accent-500 transition-colors"
                >
                  integratestrong@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
                <span>integratestrong.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Colorado Springs & Surrounding Areas</span>
              </div>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-accent-500 hover:text-accent-400 transition-colors mt-4"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Integrate Strong LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>Serving Colorado Springs</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
