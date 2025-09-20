import { useState } from 'react'
import heroImage from '../../assets/images/hero/hero-image.jpg'

const Hero = () => {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Villa Pomona exterior with garden and pool view"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          Villa Pomona
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          A charming art-nouveau boutique villa in the heart of Bled
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-lg px-8 py-4"
            aria-label="Check availability and book your stay"
          >
            Check Availability
          </button>
          <button
            onClick={() => scrollToSection('rooms')}
            className="btn-secondary text-lg px-8 py-4"
            aria-label="View our room options"
          >
            View Rooms
          </button>
        </div>

        {/* Floating Booking Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6 max-w-md mx-auto">
          <h3 className="text-charcoal font-serif font-semibold text-lg mb-4">
            Quick Booking
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="checkin" className="block text-sm font-medium text-charcoal mb-1">
                  Check-in
                </label>
                <input
                  type="date"
                  id="checkin"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label htmlFor="checkout" className="block text-sm font-medium text-charcoal mb-1">
                  Check-out
                </label>
                <input
                  type="date"
                  id="checkout"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                  min={checkIn || new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-charcoal mb-1">
                Guests
              </label>
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full btn-primary"
              disabled={!checkIn || !checkOut}
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
