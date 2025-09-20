import { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      src: '/assets/images/hero/hero-image.jpg',
      alt: 'Villa Pomona exterior with art-nouveau architecture and garden',
      className: 'col-span-1 row-span-2'
    },
    {
      src: '/assets/images/gallery/pool-image.jpg',
      alt: 'Villa Pomona swimming pool with mountain backdrop',
      className: 'col-span-1 row-span-1'
    },
    {
      src: '/assets/images/gallery/yoga-studio.jpg',
      alt: 'Villa Pomona yoga studio with elegant furnishings',
      className: 'col-span-1 row-span-1'
    },
    {
      src: '/assets/images/gallery/outdoor-1.jpg',
      alt: 'Villa Pomona outdoor area with garden and seating',
      className: 'col-span-1 row-span-2'
    },
    {
      src: '/assets/images/gallery/outdoor-2.jpg',
      alt: 'Villa Pomona outdoor terrace with mountain views',
      className: 'col-span-1 row-span-1'
    },
    {
      src: '/assets/images/gallery/terrace-image.jpg',
      alt: 'Villa Pomona terrace with dining area',
      className: 'col-span-1 row-span-1'
    },
    {
      src: '/assets/images/gallery/pool-image.jpg',
      alt: 'Villa Pomona pool area with relaxation spaces',
      className: 'col-span-2 row-span-1'
    },
    {
      src: '/assets/images/hero/hero-image.jpg',
      alt: 'Villa Pomona main building with scenic surroundings',
      className: 'col-span-1 row-span-1'
    }
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Gallery
          </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the authentic beauty and elegance of Villa Pomona through our curated collection of images
              from the actual property, showcasing our historic villa, seasonal pool, private terraces, and luxurious accommodations.
            </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.className} relative overflow-hidden rounded-lg cursor-pointer group`}
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                aria-label="Close gallery"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Image Source Note */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto shadow-sm">
            <h3 className="font-semibold text-charcoal mb-2">🏨 Authentic Villa Pomona Images</h3>
            <p className="text-gray-600 text-sm mb-3">
              All images should be sourced from Villa Pomona's official channels to ensure authenticity.
            </p>
            <div className="text-left text-sm space-y-1">
              <p><strong>📸 Where to find images:</strong></p>
              <p>• Villa Pomona's Booking.com page</p>
              <p>• Official Villa Pomona website (villapomona.si)</p>
              <p>• Hotel Adora Bled website (sister property)</p>
              <p>• Search: "Villa Pomona Bled" on Google Images</p>
            </div>
            <p className="text-gray-500 text-xs mt-3">
              Replace placeholder images with high-resolution photos of the actual villa, pool, rooms, and grounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
