const Services = () => {
  const services = [
    {
      icon: "",
      title: "Strength Training",
      description: "Build functional strength with safe, progressive resistance training tailored to your fitness level and goals.",
      features: ["Progressive overload", "Functional movements", "Joint-friendly exercises", "Equipment provided"]
    },
    {
      icon: "",
      title: "Balance & Stability",
      description: "Improve balance and reduce fall risk through targeted exercises that enhance stability and coordination.",
      features: ["Fall prevention", "Proprioception training", "Core strengthening", "Confidence building"]
    },

    {
      icon: "",
      title: "Weight Management",
      description: "Sustainable weight loss and management through effective exercise programming and lifestyle guidance.",
      features: ["Metabolism boost", "Sustainable habits", "Body composition", "Nutritional guidance"]
    },
    {
      icon: "",
      title: "Bone Health",
      description: "Weight-bearing exercises designed to maintain and improve bone density, especially important for seniors.",
      features: ["Osteoporosis prevention", "Weight-bearing exercises", "Impact training", "Posture improvement"]
    },

  ]

  return (
    <section id="services" className="py-20 bg-primary-800">
      <div className="container-max section-padding">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Training Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer specialized training programs designed specifically for adults and seniors throughout the Colorado Springs area. 
            Each session is tailored to your individual needs, fitness level, and health considerations. Here are some of the ways we can support your fitness journey:
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-primary-700/50 backdrop-blur-sm border border-primary-600 rounded-xl p-4 hover:bg-primary-700/70 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-primary-700/30 border border-primary-600 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Personalized Approach
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Every client in the Colorado Springs area receives a customized training program based on their health history, current fitness level, 
              and personal goals. We work closely with your healthcare providers when necessary and modify exercises 
              to accommodate any physical limitations or health conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
