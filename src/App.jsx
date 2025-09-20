import { Helmet } from 'react-helmet-async'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Reviews from './components/Reviews'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>Villa Pomona - Boutique Hotel in Bled, Slovenia</title>
        <meta name="description" content="Experience luxury at Villa Pomona, a charming art-nouveau boutique villa in the heart of Bled. Enjoy our peaceful garden, outdoor pool, and refined rooms just minutes from Lake Bled." />
        <meta property="og:title" content="Villa Pomona - Boutique Hotel in Bled" />
        <meta property="og:description" content="A charming art-nouveau boutique villa in the heart of Bled with garden, pool, and refined rooms." />
        <meta property="og:image" content="/assets/images/hero/hero-image.jpg" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Location />
        <Reviews />
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}

export default App
