const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'London, UK',
      rating: 5,
      date: 'December 2024',
      text: 'Villa Pomona exceeded all our expectations! The art-nouveau architecture is stunning, and the garden is absolutely beautiful. The staff were incredibly attentive, and the breakfast was outstanding. Perfect location for exploring Lake Bled.',
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Marco Rossi',
      location: 'Milan, Italy',
      rating: 5,
      date: 'November 2024',
      text: 'An unforgettable stay in a truly special place. The pool area is magnificent, and the rooms are elegantly furnished with modern comforts. The concierge service helped us plan the perfect day trip to the castle. Highly recommended!',
      avatar: 'MR'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      location: 'Toronto, Canada',
      rating: 5,
      date: 'October 2024',
      text: 'From the moment we arrived, we felt welcomed and at home. The villa\'s historic charm combined with contemporary amenities creates a unique atmosphere. The garden views are breathtaking, and the location couldn\'t be better.',
      avatar: 'ET'
    }
  ]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-gold-500' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Guest Reviews
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-serif font-bold text-charcoal">4.8</span>
            <span className="text-gray-600">(124 reviews)</span>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our guests have to say
            about their experience at Villa Pomona.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-sage-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {review.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-600">{review.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Review Stats */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-serif font-bold text-charcoal mb-6 text-center">
            Guest Satisfaction
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-sage-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Would recommend</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-sage-600 mb-2">4.9</div>
              <div className="text-sm text-gray-600">Location rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-sage-600 mb-2">4.8</div>
              <div className="text-sm text-gray-600">Cleanliness</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-sage-600 mb-2">4.7</div>
              <div className="text-sm text-gray-600">Service quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
