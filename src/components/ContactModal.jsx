const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handleEmailClick = () => {
    window.location.href = 'mailto:integratestrong@gmail.com?subject=Training Inquiry'
    onClose()
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+17192947337'
    onClose()
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-primary-800 border border-primary-600 rounded-2xl p-8 max-w-md mx-4 relative">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <h3 className="text-2xl font-bold text-white mb-2 text-center">
          Get Started Today
        </h3>
        <p className="text-gray-300 mb-8 text-center">
          Choose how you'd like to connect with us
        </p>

        {/* Contact options */}
        <div className="space-y-4">
          {/* Phone option */}
          <button
            onClick={handlePhoneClick}
            className="w-full bg-accent-500 hover:bg-accent-600 text-white p-4 rounded-xl transition-all duration-200 flex items-center justify-center group"
          >
            <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="text-left">
              <div className="font-semibold">Call Now</div>
              <div className="text-sm opacity-90">(719) 294-7337</div>
            </div>
          </button>

          {/* Phone hours */}
          <p className="text-gray-400 text-sm text-center">
            Phone hours: Monday - Friday, 10:00 AM - 7:00 PM
          </p>

          {/* Email option */}
          <button
            onClick={handleEmailClick}
            className="w-full bg-primary-700 hover:bg-primary-600 text-white p-4 rounded-xl transition-all duration-200 flex items-center justify-center group border border-primary-600"
          >
            <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="text-left">
              <div className="font-semibold">Send Email</div>
              <div className="text-sm opacity-90">integratestrong@gmail.com</div>
            </div>
          </button>

          <p className="text-gray-400 text-sm text-center">
            We typically respond to emails within 24 hours
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactModal
