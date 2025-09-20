const Amenities = () => {
  const amenities = [
    {
      name: 'Outdoor Pool',
      icon: '🏊',
      description: 'Heated outdoor swimming pool with stunning mountain views'
    },
    {
      name: 'Spa & Wellness',
      icon: '🧖',
      description: 'Full-service spa with massages, treatments, and relaxation areas'
    },
    {
      name: 'Sauna',
      icon: '🔥',
      description: 'Traditional Finnish sauna for ultimate relaxation'
    },
    {
      name: 'Free Parking',
      icon: '🚗',
      description: 'Secure on-site parking available for all guests'
    },
    {
      name: 'Airport Shuttle',
      icon: '✈️',
      description: 'Convenient airport transfer service (additional fee)'
    },
    {
      name: 'Breakfast',
      icon: '🥐',
      description: 'Daily continental breakfast served in our garden pavilion'
    },
    {
      name: 'Non-smoking Rooms',
      icon: '🚭',
      description: 'All rooms are non-smoking for your comfort and health'
    },
    {
      name: 'Ski Storage',
      icon: '🎿',
      description: 'Equipment storage and preparation area for winter sports'
    }
  ]

  return (
    <section id="amenities" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Amenities & Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the finest in boutique hospitality with our curated selection
            of amenities designed for your comfort and enjoyment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="text-center group hover:bg-sage-50 p-4 rounded-lg transition-colors duration-200"
            >
              <div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200"
                role="img"
                aria-label={amenity.name}
              >
                {amenity.icon}
              </div>
              <h3 className="font-semibold text-charcoal mb-2">
                {amenity.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 bg-sage-50 rounded-lg p-8">
          <h3 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-sage-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-medium text-charcoal">Concierge Service</h4>
                <p className="text-sm text-gray-600">Personalized recommendations for local attractions and dining</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-sage-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-medium text-charcoal">Room Service</h4>
                <p className="text-sm text-gray-600">24-hour room service with local and international cuisine</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-sage-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-medium text-charcoal">Bicycle Rental</h4>
                <p className="text-sm text-gray-600">Complimentary bicycles for exploring the local area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Amenities
