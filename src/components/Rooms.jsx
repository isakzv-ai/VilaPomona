import RoomCard from './RoomCard'

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Pool House',
      description: 'Private and secluded accommodation with its own terrace, perfect for romantic stays and those seeking maximum privacy.',
      features: ['Private terrace', 'Secluded location', 'Luxury furnishings', 'Starting from €390/night'],
      priceRange: '390+',
      image: '/assets/images/gallery/pool-image.jpg',
      alt: 'Pool House with private terrace and luxurious setting'
    },
    {
      id: 2,
      name: 'Superior Suite with Terrace & Pool View',
      description: 'Elegant suite offering stunning pool views from a private terrace, combining modern comfort with historic charm.',
      features: ['Private terrace', 'Pool view', 'Ensuite bathroom', 'Luxury furnishings', 'Starting from €340/night'],
      priceRange: '340+',
      image: '/assets/images/gallery/terrace-image.jpg',
      alt: 'Superior Suite with terrace and pool view'
    },
    {
      id: 3,
      name: 'Master Suite with Balcony & Pool View',
      description: 'Spacious master suite featuring a balcony with pool views, approximately 50 m² of luxurious living space.',
      features: ['Private balcony', 'Pool view', '50 m²', 'Master bedroom', 'Ensuite bathroom'],
      priceRange: '350+',
      image: '/assets/images/gallery/yoga-studio.jpg',
      alt: 'Master Suite with balcony and pool view'
    },
    {
      id: 4,
      name: 'Entire Villa (Whole House Rental)',
      description: 'Rent the entire Villa Pomona for your exclusive use. Accommodates up to 8 persons with all rooms, pool house, and shared spaces.',
      features: ['All 3 suites + Pool House', 'Private pool & garden', 'Up to 8 persons', 'Full villa exclusivity', 'Perfect for groups & events'],
      priceRange: '1200+',
      image: '/assets/images/hero/hero-image.jpg',
      alt: 'Entire Villa Pomona for exclusive rental'
    }
  ]

  return (
    <section id="rooms" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Our Rooms
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated selection of rooms and suites,
            each designed to provide comfort, elegance, and unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            All rooms include complimentary breakfast, Wi-Fi, and access to our spa facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-medium text-charcoal">Free cancellation</span>
              <span className="text-gray-600 text-sm ml-2">up to 24 hours before check-in</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-medium text-charcoal">Best price guarantee</span>
              <span className="text-gray-600 text-sm ml-2">or we&apos;ll match it</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rooms
