import PropTypes from 'prop-types'

const RoomCard = ({ room }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={room.image}
          alt={room.alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
          {room.name}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {room.description}
        </p>

        {/* Features */}
        <ul className="text-sm text-gray-700 mb-4 space-y-1">
          {room.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-4 h-4 text-sage-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-serif font-bold text-charcoal">
              €{room.priceRange}
            </span>
            <span className="text-gray-600 text-sm"> / night</span>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
            aria-label={`Book ${room.name}`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

RoomCard.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    priceRange: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
}

export default RoomCard
