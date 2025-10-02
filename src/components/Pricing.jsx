const Pricing = ({ onContactClick }) => {
  const trialPackage = {
    name: "New Customer Trial",
    sessions: 4,
    price: 200,
    pricePerSession: 50,
    originalPrice: 320,
    savings: null
  }

  const regularPackages = [
    {
      name: "Starter",
      sessions: 12,
      price: 900,
      pricePerSession: 75,
      savings: null,
      monthlyPrice: 300,
      commitmentMonths: 3
    },
    {
      name: "Commitment", 
      sessions: 24,
      price: 1650,
      pricePerSession: 68.75,
      savings: 150,
      monthlyPrice: 275,
      commitmentMonths: 6
    },
    {
      name: "Transformation",
      sessions: 36,
      price: 2340,
      pricePerSession: 65,
      savings: 360,
      monthlyPrice: 260,
      commitmentMonths: 9
    }
  ]

  const allFeatures = [
    "Professional in-home personal training",
    "Initial fitness assessment", 
    "Customized workout plans for your goals",
    "All equipment provided",
    "Flexible scheduling",
    "Progress tracking & adjustments",
    "Specialized senior fitness expertise",
    "Free consultation",
    "One-on-one training"
  ]



  return (
    <section id="pricing" className="py-20 bg-primary-900">
      <div className="container-max section-padding">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Investment in Your Health
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our flexible prepaid session packages. All packages include professional equipment, 
            personalized training plans, and the convenience of in-home service.
          </p>
        </div>

        {/* Trial Package - Special Promotion */}
        <div className="mb-12">
          <div className="relative bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 border-2 border-accent-400 rounded-2xl p-8 max-w-6xl mx-auto text-center overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="pt-2">
              {/* Plan name */}
              <h3 className="text-3xl font-bold text-white mb-2">
                {trialPackage.name}
              </h3>
              <p className="text-gray-100 mb-6 text-lg">
                Experience our professional training at a special introductory rate
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Sessions */}
                <div>
                  <div className="text-6xl font-bold text-white mb-2">
                    {trialPackage.sessions}
                  </div>
                  <div className="text-gray-100 text-lg uppercase tracking-wide font-semibold">
                    Training Sessions
                  </div>
                </div>

                {/* Pricing */}
                <div>
                  <div className="text-5xl font-bold text-white mb-2">
                    ${trialPackage.price}
                  </div>
                  <div className="text-gray-100 font-semibold">
                    Only ${trialPackage.pricePerSession.toFixed(0)} per session
                  </div>
                </div>

                {/* CTA */}
                <div>
                  <button 
                    onClick={onContactClick}
                    className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Claim Your Trial
                  </button>
                  <p className="text-gray-100 text-xs mt-2">
                    Only available for new clients
                  </p>
                  <p className="text-gray-100 text-xs mt-2">
                    one per client
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Packages */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {regularPackages.map((plan, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-br from-primary-700 to-primary-800 border-2 border-primary-500 hover:border-accent-400 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Savings badge */}
              {plan.savings && (
                <div className="absolute -top-3 -right-3">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    Save ${plan.savings}
                  </span>
                </div>
              )}

              {/* Sessions count - big and prominent */}
              <div className="mb-4">
                <div className="text-5xl font-bold text-accent-500 mb-1">
                  {plan.sessions}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wide">
                  Sessions
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-white mb-1">
                  ${plan.monthlyPrice}/month
                </div>
                <div className="text-gray-400 text-sm mb-2">
                  for {plan.commitmentMonths} months (${plan.price} total)
                </div>
                <div className="text-accent-400 font-semibold text-sm">
                  ${plan.pricePerSession.toFixed(0)} per session
                </div>
              </div>

              {/* CTA Button */}
              <button 
                onClick={onContactClick}
                className="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 text-sm bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white"
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        {/* Shared features section */}
        <div className="bg-primary-700/30 border border-primary-600 rounded-2xl p-8 max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            What's Included in Every Package
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allFeatures.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-12">
          <div className="bg-primary-800/30 border border-primary-600 rounded-xl p-8 max-w-6xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              How It Works - Your Journey to Better Health
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="bg-accent-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Explore Your Options
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Browse our website and review the training packages. Don't worry if you're unsure which option is right for you - we'll help you decide!
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="bg-accent-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Get In Touch
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Click "Choose Plan" or "Schedule Free Consultation" to call or email us. Choose your preferred method of communication to get started.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-accent-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Schedule Your Consultation
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We'll work together via phone or email to find a convenient time for your complimentary initial consultation in your home.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="bg-accent-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Start Your Journey
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  During your consultation, we'll discuss your goals, choose the perfect package, and set up your ongoing training schedule.
                </p>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-4">
                Ready to begin your fitness transformation?
              </p>
              <button 
                onClick={onContactClick}
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Schedule Your Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
