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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2757.077656664608!2d14.105!3d46.3683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDYuMzY4MywxNC4xMDU!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Villa Pomona Location Map"
                className="w-full h-[400px]"
              ></iframe>
            </div>

            {/* Map Note */}
            <div className="mt-4 p-4 bg-sage-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Replace the Google Maps embed URL with your actual location.
                Get the embed code from Google Maps and replace <code>YOUR_GOOGLE_MAPS_EMBED_KEY</code> in the README.
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
                    href="tel:+3860000000"
                    className="text-sage-600 hover:text-sage-700 font-medium"
                  >
                    +386 0 000 000
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
