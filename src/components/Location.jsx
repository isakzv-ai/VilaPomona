const Location = () => {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Location & Directions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conveniently located in the heart of Bled, Villa Pomona offers easy access
            to Slovenia&apos;s most beautiful attractions and natural wonders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div>
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO8H8rWb8W8W8&q=Črtomirova+ulica+2,+4260+Bled,+Slovenia&zoom=15"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Villa Pomona Location Map - Črtomirova ulica 2, 4260 Bled, Slovenia"
                className="w-full h-[400px]"
              ></iframe>
            </div>

            {/* Map Note */}
            <div className="mt-4 p-4 bg-sage-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> To enable the interactive map, get a Google Maps API key from the
                <a href="https://console.cloud.google.com/google/maps-apis" className="text-sage-600 hover:underline" target="_blank" rel="noopener noreferrer"> Google Cloud Console</a>
                and replace the placeholder API key in the embed URL.
              </p>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
                Our Address
              </h3>
              <address className="text-gray-700 not-italic space-y-1">
                <div className="font-medium">Villa Pomona</div>
                <div>Črtomirova ulica 2</div>
                <div>4260 Bled, Slovenia</div>
                <div className="pt-2">
                  <a
                    href="tel:+38651603858"
                    className="text-sage-600 hover:text-sage-700 font-medium"
                  >
                    +386 51 603 858
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:info@villapomona.example"
                    className="text-sage-600 hover:text-sage-700 font-medium"
                  >
                    info@villapomona.example
                  </a>
                </div>
              </address>
            </div>

            {/* Walking Distances */}
            <div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
                Walking Distances
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">Bled Centre</span>
                  <span className="font-medium text-charcoal">≈ 300 m</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">Bled Castle</span>
                  <span className="font-medium text-charcoal">≈ 1.2 km</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">Lake Bled</span>
                  <span className="font-medium text-charcoal">≈ 800 m</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-700">Ljubljana Airport</span>
                  <span className="font-medium text-charcoal">≈ 33 km</span>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
                Getting Here
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>By Car:</strong> Free parking available on-site. GPS coordinates: 46.3683, 14.105
                </p>
                <p>
                  <strong>By Bus:</strong> Regular bus service from Ljubljana and other major cities stops near the hotel.
                </p>
                <p>
                  <strong>By Air:</strong> Ljubljana Jože Pučnik Airport is 35 minutes by car. Airport shuttle service available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
