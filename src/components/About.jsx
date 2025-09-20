const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
              Welcome to Villa Pomona
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Villa Pomona is a charming art-nouveau boutique villa in the heart of Bled.
              Enjoy a peaceful garden, outdoor pool, and refined rooms—just minutes from Lake Bled and the castle.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our family-run hotel combines historic elegance with modern comfort, offering
              personalized service and attention to detail. Whether you&apos;re seeking a romantic
              getaway, family vacation, or business retreat, Villa Pomona provides the perfect
              base to explore Slovenia&apos;s most beautiful region.
            </p>

            {/* Address */}
            <div className="bg-sage-50 p-4 rounded-lg">
              <h3 className="font-semibold text-charcoal mb-2">Location</h3>
              <address className="text-gray-700 not-italic">
                Črtomirova ulica 2<br />
                4260 Bled, Slovenia
              </address>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-sage-100 rounded-lg overflow-hidden">
              <img
                src="/assets/images/hero/hero-image.jpg"
                alt="Villa Pomona historic facade and garden entrance"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-sage-600">1895</div>
                  <div className="text-sm text-gray-600">Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-sage-600">12</div>
                  <div className="text-sm text-gray-600">Rooms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
