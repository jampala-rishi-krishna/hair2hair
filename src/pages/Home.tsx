import { useState, useEffect } from 'react';
import { Crown, Sparkles, Scissors, Handshake as HandshakeIcon, Check, Star, ChevronLeft, ChevronRight, ArrowRight, Award, Users, Heart, Phone, Moon, Droplets, Dumbbell, Bike, Activity } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import GoogleReviews from '../components/GoogleReviews';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Rediscover Confidence with Natural Hair Restoration",
      subtitle: 'Personalized Non-Surgical Hair Replacement for Men & Women',
      image: '/Data/gallery/Cover photo 1.png',
      cta: 'Book Free Consultation',
      secondaryCta: 'View Transformations'
    },
    {
      title: 'Expert Hair Replacement for Men',
      subtitle: 'Skin base, lace systems, and full coverage options',
      image: '/Data/gallery/cover photo 2.png',
      cta: 'Book Free Consultation',
      secondaryCta: 'View Transformations'
    },
    {
      title: 'Wholesale Solutions for Studios & Salons',
      subtitle: 'Quality products at competitive prices',
      image: '/Data/gallery/cover photo 3.png',
      cta: 'Book Free Consultation',
      secondaryCta: 'View Transformations'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: Crown,
      title: 'Hair Patches & Toppers',
      description: 'Natural coverage for thinning areas',
      link: '/women#patches',
    },
    {
      icon: Sparkles,
      title: 'Premium Wigs',
      description: 'Full transformation solutions - World Wide Delivery Available',
      link: '/women#wigs',
    },
    {
      icon: Scissors,
      title: 'Hair Extensions',
      description: 'Add length and volume instantly',
      link: '/women#extensions',
    },
    {
      icon: HandshakeIcon,
      title: 'Wholesale Solutions',
      description: 'Bulk orders for professionals',
      link: '/wholesale',
    },
  ];

  const benefits = [
    'Instant transformation',
    'Non-surgical & painless',
    'Customizable to your needs',
    'Durable & reusable',
    'Boost self-esteem',
  ];

  const stats = [
    { number: '15+', label: 'Years of Expertise', icon: Award },
    { number: '1000+', label: 'Transformations', icon: Users },
    { number: '100%', label: 'Satisfaction Rate', icon: Heart },
  ];


  const transformationImages = [
    {
      image: '/Data/home_page1.png',
      caption: 'H2H Hair Replacement Solutions'
    },
    {
      image: '/Data/home_page3.jpg',
      caption: 'Hair System & Patch Options'
    },
    {
      image: '/Data/main_img1.jpeg',
      caption: 'Hair 2 Hair Studio Services'
    },
  ];


  


  const whyChooseUs = [
    { title: 'Expert Team', description: '15+ years of experience in hair solutions' },
    { title: 'Premium Quality', description: 'Only the finest materials and craftsmanship' },
    { title: 'Personalized Solutions', description: 'Custom-tailored to your unique needs' },
    { title: 'Aftercare Support', description: 'Comprehensive maintenance guidance' },
    { title: 'Discreet Consultations', description: 'Private and confidential service' },
    { title: 'Transparent Pricing', description: 'No hidden costs or surprises' },
  ];


  return (
    <div className="min-h-screen">
      <div className="relative h-[85vh] sm:h-[90vh] lg:h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-no-repeat bg-top bg-cover"
              style={{ 
                backgroundImage: `url(${encodeURI(slide.image)})`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-6xl px-4 py-8 sm:py-0">
                <h2
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-serif mb-4 sm:mb-6 leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 text-gray-100 font-light max-w-4xl mx-auto px-2">{slide.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center items-center">
                  <Button href="/booking" size="lg" className="bg-gradient-to-r from-[#C19A6B] to-[#D4AF37] text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 px-6 sm:px-8 md:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto">
                    {slide.cta}
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                  <a href="/gallery" className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm sm:text-base font-medium underline underline-offset-4 decoration-white/50 hover:decoration-white transition-colors duration-300 px-4 py-2">
                    {slide.secondaryCta}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-white/30 transition"
        >
          <ChevronLeft className="text-white" size={20} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-white/30 transition"
        >
          <ChevronRight className="text-white" size={20} />
        </button>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-[#C19A6B] scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-[#111] text-gray-300 py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-center">
          <span className="text-[#D4AF37] font-semibold">15+ Years Experience</span>
          <span className="text-gray-600">•</span>
          <span className="text-[#D4AF37] font-semibold">1000+ Clients</span>
          <span className="text-gray-600">•</span>
          <span>Hyderabad, Khammam, Kothagudem, Dilsukhnagar</span>
        </div>
      </div>

      <section className="py-10 bg-[#fffaf6]" aria-labelledby="h2h-locations">
        <div className="max-w-7xl mx-auto px-4">
          <h1 id="h2h-locations" className="text-3xl sm:text-4xl font-serif text-center text-[#8B1538] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Non-Surgical Hair Replacement in Hyderabad &amp; Khammam
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-7">
            Visit an H2H studio in Dilsukhnagar, Hyderabad or Khammam. Customers travelling from Kukatpally should contact the team to confirm service and appointment availability before visiting.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <a href="/locations/dilsukhnagar/" className="block rounded-xl border border-[#ead9c8] bg-white p-6 hover:shadow-lg transition"><h2 className="text-xl font-semibold text-[#8B1538] mb-2">Dilsukhnagar, Hyderabad</h2><p className="text-gray-600">Hair patches, hair systems, wigs and private fitting consultations at the listed Hyderabad studio.</p><span className="inline-block mt-4 font-semibold text-[#8B1538]">Studio details →</span></a>
            <a href="/locations/khammam/" className="block rounded-xl border border-[#ead9c8] bg-white p-6 hover:shadow-lg transition"><h2 className="text-xl font-semibold text-[#8B1538] mb-2">Khammam</h2><p className="text-gray-600">Non-surgical hair replacement consultations, hair systems, wigs and aftercare information.</p><span className="inline-block mt-4 font-semibold text-[#8B1538]">Studio details →</span></a>
            <a href="/areas/kukatpally/" className="block rounded-xl border border-[#ead9c8] bg-white p-6 hover:shadow-lg transition"><h2 className="text-xl font-semibold text-[#8B1538] mb-2">Information for Kukatpally customers</h2><p className="text-gray-600">H2H does not list a physical branch in Kukatpally. Read travel and appointment information.</p><span className="inline-block mt-4 font-semibold text-[#8B1538]">Location information →</span></a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#222] to-[#333] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#C19A6B] to-[#D4AF37] rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#C19A6B] mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-base sm:text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-serif text-center text-[#222] mb-8 sm:mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Premium Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} hover className="p-6 sm:p-8 text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#C19A6B] to-[#D4AF37] rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#222]">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{service.description}</p>
                <a href={service.link} className="text-[#C19A6B] font-semibold hover:text-[#D4AF37] transition flex items-center justify-center gap-2 text-sm sm:text-base">
                  Learn More <ArrowRight size={14} />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <section className="py-12 sm:py-16 bg-gradient-to-br from-brand-cream to-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-serif mb-4 sm:mb-6 text-brand-primary"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Why Choose Hair Patches & Wigs?
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-brand-primary rounded-full flex items-center justify-center">
                      <Check className="text-white" size={14} />
                    </div>
                    <p className="text-base sm:text-lg text-gray-800">{benefit}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-700 leading-relaxed">
                Hair patches and wigs offer a quick and reliable solution for hair loss without the need for surgery. They are
                tailored to fit your unique style and comfort, ensuring a natural appearance. With proper care, they can be
                reused multiple times, making them a cost-effective choice. Designed for everyday wear, they're lightweight,
                breathable, and easy to maintain. Most importantly, they help restore confidence by giving you back control
                over your look.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/Data/Gemini_Generated_Image_d69vind69vind69v.png"
                alt="Happy client transformation"
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={encodeURI('/Data/gallery/brand outlet.png')}
                alt="Hair 2 Hair Studio Franchise Outlets Across India"
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover object-center"
              />
            </div>
            <div>
              <h2
                className="text-3xl sm:text-4xl font-serif mb-4 sm:mb-6 text-brand-primary"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Join Hair2Hair Studio Franchise
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Join Hair2Hair Studio and build your success with a proven, profitable business model in the rapidly growing hair and beauty industry. With over 15 years of expertise, Hair2Hair Studio offers complete franchise support including training, marketing, CRM, and operational guidance.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                The industry is growing at 35% annually, making now the perfect time to invest. Enjoy low setup costs, high returns, and a break-even period of just 6–12 months. We provide full assistance in site setup, interiors, and customer management, along with continuous digital marketing and R&D support.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                As a franchise partner, you'll offer premium hair replacement, salon, and spa services using Hair2Hair Studio's exclusive range of products, all under a strong and fast-growing brand trusted by thousands of happy clients.
              </p>
              <Button href="/contact" size="lg" className="bg-gradient-to-r from-[#C19A6B] to-[#D4AF37] text-white hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Learn More About Franchising
              </Button>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl font-serif text-center mb-12 text-brand-primary"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6 text-center" hover>
                <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-cream rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-brand-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unrestricted Living Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-[#8B1538] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Enjoy Unrestricted Living with Our Easy-to-Wear Hair Patches
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              It feels exactly like your natural hair. When you wear our advanced hair patches, you can
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sleep Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex h-48 items-center justify-center rounded-xl mb-4 bg-gradient-to-br from-[#fff8ef] to-[#f1e2d7]" aria-hidden="true">
                  {(() => { const Icon = Moon; return <Icon className="text-[#8B1538]" size={64} strokeWidth={1.5} />; })()}
                </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sleep</h3>
                <p className="text-gray-600 text-sm">Comfortable all night</p>
              </div>
            </div>
            
            {/* Shower Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex h-48 items-center justify-center rounded-xl mb-4 bg-gradient-to-br from-[#fff8ef] to-[#f1e2d7]" aria-hidden="true">
                  {(() => { const Icon = Droplets; return <Icon className="text-[#8B1538]" size={64} strokeWidth={1.5} />; })()}
                </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Shower</h3>
                <p className="text-gray-600 text-sm">Water-resistant design</p>
              </div>
            </div>
            
            {/* Workout Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex h-48 items-center justify-center rounded-xl mb-4 bg-gradient-to-br from-[#fff8ef] to-[#f1e2d7]" aria-hidden="true">
                  {(() => { const Icon = Dumbbell; return <Icon className="text-[#8B1538]" size={64} strokeWidth={1.5} />; })()}
                </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Workout</h3>
                <p className="text-gray-600 text-sm">Stay active with confidence</p>
              </div>
            </div>
            
            {/* Ride Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex h-48 items-center justify-center rounded-xl mb-4 bg-gradient-to-br from-[#fff8ef] to-[#f1e2d7]" aria-hidden="true">
                  {(() => { const Icon = Bike; return <Icon className="text-[#8B1538]" size={64} strokeWidth={1.5} />; })()}
                </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Ride</h3>
                <p className="text-gray-600 text-sm">Adventure without limits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hair Loss Common Problems Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-serif text-center text-[#222] mb-8 sm:mb-16" style={{ fontFamily: 'Playfair Display, serif' }}>
            Hair Loss (Common Problems)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Thinning Crown */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="flex h-48 items-center justify-center rounded-xl mb-4 bg-gradient-to-br from-[#fff8ef] to-[#f1e2d7]" aria-hidden="true">
                  {(() => { const Icon = Crown; return <Icon className="text-[#8B1538]" size={64} strokeWidth={1.5} />; })()}
                </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Thinning Crown</h3>
              <p className="text-gray-600 text-sm">Gradual hair loss at the crown area</p>
            </div>
            
            {/* All Over Thinning */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="flex h-48 items-center justify-center rounded-xl mb-4 bg-gradient-to-br from-[#fff8ef] to-[#f1e2d7]" aria-hidden="true">
                  {(() => { const Icon = Users; return <Icon className="text-[#8B1538]" size={64} strokeWidth={1.5} />; })()}
                </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">All Over Thinning</h3>
              <p className="text-gray-600 text-sm">General hair thinning across the scalp</p>
            </div>
            
            {/* Hair Fall */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="flex h-48 items-center justify-center rounded-xl mb-4 bg-gradient-to-br from-[#fff8ef] to-[#f1e2d7]" aria-hidden="true">
                  {(() => { const Icon = Activity; return <Icon className="text-[#8B1538]" size={64} strokeWidth={1.5} />; })()}
                </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hair Fall</h3>
              <p className="text-gray-600 text-sm">Excessive hair shedding and loss</p>
            </div>
            
            {/* Thin Hair */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="flex h-48 items-center justify-center rounded-xl mb-4 bg-gradient-to-br from-[#fff8ef] to-[#f1e2d7]" aria-hidden="true">
                  {(() => { const Icon = Sparkles; return <Icon className="text-[#8B1538]" size={64} strokeWidth={1.5} />; })()}
                </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Thin Hair</h3>
              <p className="text-gray-600 text-sm">Lack of volume and density</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-serif text-center text-[#222] mb-8 sm:mb-16" style={{ fontFamily: 'Playfair Display, serif' }}>
            H2H Hair Solutions & Studio Showcase
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {transformationImages.map((item, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.caption} 
                    className="w-full h-64 sm:h-72 md:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center font-semibold text-sm sm:text-base px-2">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-[#8B1538] to-[#A0153E] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div id="google-reviews" className="bg-gradient-to-r from-[#8B1538] to-[#A0153E] rounded-2xl p-8 text-white">
            <h2 className="text-3xl sm:text-4xl font-serif text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              What Our Clients Say
            </h2>
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Customer feedback</h3>
              <p id="review-summary" className="text-lg text-white/90">Loading reviews...</p>
            </div>
            <div id="reviews-container" className="flex gap-6 flex-wrap justify-center items-start mb-8"></div>
            <div className="text-center">
              <a
                href="https://share.google/r8DPpoClZQkq3dS7W"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#8B1538] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                See All Google Reviews →
              </a>
            </div>
          </div>
        </div>
        <GoogleReviews />
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-r from-[#C19A6B] to-[#D4AF37] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Transform Your Look?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90">
            Book a consultation today and discover the perfect hair solution for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button href="/booking" size="lg" className="bg-white text-[#C19A6B] hover:bg-gray-100 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto">
              Book Free Consultation
            </Button>
            <Button
              href={`https://wa.me/918121999243?text=${encodeURIComponent('Hi! I would like to know more about your hair solutions.')}`}
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
            >
              WhatsApp Us
            </Button>
          </div>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-white/80">
            <div className="flex items-center justify-center gap-2">
              <Award className="text-white" size={16} />
              <span className="text-sm sm:text-base">15+ Years Experience</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="text-white" size={16} />
              <span className="text-sm sm:text-base">1000+ Happy Clients</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Heart className="text-white" size={16} />
              <span className="text-sm sm:text-base">100% Satisfaction</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/918121999243?text=${encodeURIComponent('Hi! I would like to know more about your hair solutions.')}`}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center w-14 h-14"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with us on WhatsApp"
        >
          <Phone size={24} />
        </a>
      </div>
      
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-3xl sm:text-4xl font-serif text-center mb-6 sm:mb-8 text-brand-primary"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Choose Your Concern
          </h2>
          <form id="home-contact-form" action="https://api.web3forms.com/submit" method="POST" className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <input type="hidden" name="access_key" value="675b3c24-8999-426b-819b-29bc8e789cc7" />
            <input type="hidden" name="subject" value="New Website Enquiry - Choose Your Concern" />
            <input type="hidden" name="from_name" value="Hair 2 Hair Studio Website" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />
            <div className="md:col-span-2">
              <select name="concern" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary text-gray-700 text-sm sm:text-base">
                <option value="hair-replacement">Hair Replacement</option>
                <option value="hair-extensions">Hair Extensions</option>
                <option value="wigs">Wigs</option>
                <option value="others">Others</option>
              </select>
            </div>
            <input name="name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary text-gray-700 text-sm sm:text-base" placeholder="Name" />
            <input name="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary text-gray-700 text-sm sm:text-base" placeholder="Email" type="email" />
            <input name="phone" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary text-gray-700 text-sm sm:text-base" placeholder="Phone" type="tel" />
            <textarea name="message" className="md:col-span-2 w-full border border-gray-300 rounded-lg px-4 py-3 h-24 sm:h-28 focus:outline-none focus:ring-2 focus:ring-brand-primary text-gray-700 text-sm sm:text-base" placeholder="Message" />
            <div className="md:col-span-2 flex justify-center">
              <button type="submit" className="px-6 sm:px-8 py-3 rounded-lg bg-brand-primary text-white hover:bg-brand-accent transition shadow-md opacity-100 text-sm sm:text-base font-semibold">
                Send Message
              </button>
            </div>
          </form>
          
        </div>
      </section>
    </div>
  );
}
