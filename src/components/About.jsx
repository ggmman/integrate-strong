import trainerPhoto from '../assets/Cheri Grad Pics-18.png'

const About = ({ onContactClick }) => {
  const credentials = [
    "Certified Personal Trainer (NASM-CPT)",
    "Senior Fitness Specialist Certification",
    "Corrective Exercise Specialist",
    "5+ Years Excersise Science Experience",
    "Bachelor's Degree in Exercise Science",
    "CPR/AED Certified",
    "Nutrition Specialist"
  ]

  const specializations = [
    {
      title: "Senior Fitness",
      description: "Specialized training for adults 50+ with focus on mobility and independence"
    },
    {
      title: "Post-Rehabilitation",
      description: "Working with clients recovering from injuries or medical procedures"
    },
    {
      title: "Balance Training",
      description: "Fall prevention and stability improvement for enhanced safety"
    },
    {
      title: "Functional Fitness",
      description: "Training that improves daily living activities and quality of life"
    }
  ]

  return (
    <section id="about" className="py-20 bg-primary-800">
      <div className="container-max section-padding">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Your Trainer
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the certified professional dedicated to helping you achieve your health and fitness goals
          </p>
        </div>

        {/* Trainer intro with image */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Professional photo */}
            <div className="lg:col-span-1">
              <div className="bg-primary-700/30 border border-primary-600 rounded-xl p-6 text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 border-2 border-primary-600 shadow-lg">
                  <img 
                    src={trainerPhoto} 
                    alt="Professional Trainer" 
                    className="w-full h-full object-cover"
                    style={{ 
                      transform: 'scale(1.3) translate(10px, 10px)',
                      objectPosition: 'center center'
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Professional Trainer</h3>
                <p className="text-accent-500 font-semibold">Integrate Strong LLC</p>
              </div>
            </div>
            
            {/* Personal story */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-6">
                Passion for Senior Wellness
              </h3>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  With over 5 years of experience in the fitness industry, I've discovered my true calling 
                  in helping adults and seniors maintain their independence and vitality through 
                  personalized fitness training.
                </p>
                <p>
                  I believe that age should never be a barrier to living your best life. Whether you're 
                  looking to build strength, improve balance, manage a chronic condition, or simply feel 
                  more confident in your daily activities, I'm here to guide you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials and Expertise */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Credentials */}
          <div className="bg-primary-700/30 border border-primary-600 rounded-xl p-8">
            <h4 className="text-2xl font-semibold text-white mb-6 text-center">Certifications & Credentials</h4>
            <div className="grid grid-cols-1 gap-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center text-gray-300 bg-primary-600/30 rounded-lg p-3">
                  <svg className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{credential}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="bg-primary-700/30 border border-primary-600 rounded-xl p-8">
            <h4 className="text-2xl font-semibold text-white mb-6 text-center">Areas of Expertise</h4>
            <div className="grid grid-cols-1 gap-4">
              {specializations.map((spec, index) => (
                <div key={index} className="bg-primary-600/30 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">{spec.title}</h5>
                  <p className="text-sm text-gray-300 leading-relaxed">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-primary-700/30 border border-primary-600 rounded-xl p-8 max-w-4xl mx-auto mb-12">
          <h4 className="text-2xl font-semibold text-white mb-6 text-center">Get in Touch</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary-600/30 rounded-lg p-6 text-center">
              <svg className="w-8 h-8 text-accent-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h5 className="font-semibold text-white mb-2">Email</h5>
              <p className="text-gray-300">integratestrong@gmail.com</p>
            </div>
            <div className="bg-primary-600/30 rounded-lg p-6 text-center">
              <svg className="w-8 h-8 text-accent-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h5 className="font-semibold text-white mb-2">Phone</h5>
              <p className="text-gray-300">(719) 294-7337</p>
              <p className="text-gray-400 text-sm mt-1">Mon-Fri: 10:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-primary-700/30 border border-primary-600 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Start Your Fitness Journey?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I offer complimentary consultations throughout the Colorado Springs area to discuss your goals, assess your needs, and determine 
              how we can work together to improve your health and quality of life.
            </p>
            <button 
              onClick={onContactClick}
              className="btn-primary text-lg px-8 py-4"
            >
              Schedule Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
