import RoomCard from './RoomCard'

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'King Suite with Pool View',
      description: 'Spacious suite with stunning pool views, perfect for couples seeking luxury and relaxation.',
      features: ['King bed', 'Private terrace', 'Ensuite bathroom', '45 m²'],
      priceRange: '280-350',
      image: '/assets/pool-image.jpg',
      alt: 'King Suite with pool view and elegant furnishings'
    },
    {
      id: 2,
      name: 'Deluxe Double',
      description: 'Comfortable and stylish room with garden views, ideal for business travelers and couples.',
      features: ['Queen bed', 'Garden view', '28 m²'],
      priceRange: '180-220',
      image: '/assets/yoga-studio.jpg',
      alt: 'Deluxe Double room with elegant interior'
    },
    {
      id: 3,
      name: 'Four-Bedroom Villa',
      description: 'Entire villa accommodation perfect for families or groups, featuring private amenities.',
      features: ['Private pool', 'Living area', 'Family friendly'],
      priceRange: '450-600',
      image: '/assets/hero-image.jpg',
      alt: 'Four-Bedroom Villa exterior with scenic surroundings'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
