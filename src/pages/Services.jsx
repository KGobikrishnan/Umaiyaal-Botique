import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Shirt, 
  Gem, 
  Crown, 
  Layers, 
  Feather, 
  MessageCircle, 
  Star, 
  Phone, 
  MapPin, 
  Clock, 
  Award, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Heart
} from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';

const SERVICES_DATA = [
  {
    id: 'sarees-collection',
    iconKey: 'sarees',
    name: 'Exclusive Sarees Collection',
    badge: 'Popular',
    description: 'Breathtaking drape, authentic soft silk, fancy cotton, hand cut-work, embroidery, and opulent Tassure silk sarees.',
    highlights: [
      'Soft Silk & Pure Raw Silk Sarees',
      'Fancy Cotton & Mul Cotton Sarees',
      'Cut Work & Embroidery Work Sarees',
      'Party Wear & Tassure Silk Sarees'
    ]
  },
  {
    id: 'co-ord-chudi-sets',
    iconKey: 'chudi',
    name: 'Co-ord Sets & Chudi Sets',
    badge: 'Best Seller',
    description: 'Chic modern co-ord sets, festive grand chudi sets, and breathable daily Mul cotton chudi sets tailored to perfection.',
    highlights: [
      'Trendy Western & Indo-Western Co-ord Sets',
      'Festive Grand Chudi Sets with Dupatta',
      'Breathable Mul Cotton Daily Chudi Sets',
      'Comfortable cuts & premium stitching'
    ]
  },
  {
    id: 'kurtis-maxi-dresses',
    iconKey: 'kurtis',
    name: 'Kurtis & Maxi Dresses',
    badge: 'Trending',
    description: 'Flared anarkalis, straight-cut office kurtis, flowy designer maxi gowns, and everyday ethnic dresses with artistic prints.',
    highlights: [
      'Flowy Floor-Length Maxi Dresses',
      'Designer Flared & A-Line Kurtis',
      'Straight Office Wear Cotton Kurtis',
      'Vibrant colorfast dyes & soft fabrics'
    ]
  },
  {
    id: 'bottom-wear-leggings',
    iconKey: 'pants',
    name: 'Leggings, Palazzos & Pants',
    badge: 'Essential',
    description: '4-way super stretch leggings, wide-leg palazzo pants, tailored cotton straight pants, and dazzling shimmer leggings.',
    highlights: [
      '4-Way Stretch Bio-Washed Leggings',
      'Pleated & Printed Palazzo Pants',
      'Cotton Straight Office Trousers',
      'Festive Shimmer & Metallic Leggings'
    ]
  },
  {
    id: 'shawls-dupattas',
    iconKey: 'shawls',
    name: 'Designer Shawls & Dupattas',
    badge: 'Artisan',
    description: 'Graceful lightweight chiffon shawls, rich heavy embroidery work shawls, pure cotton dupattas, and luxurious silk stoles.',
    highlights: [
      'Chiffon & Georgette Flowy Shawls',
      'Handcrafted Embroidery Work Shawls',
      'Pure Cotton Everyday Dupattas',
      'Lustrous Silk Festive Stoles'
    ]
  },
  {
    id: 'jewellery-maternity-inner',
    iconKey: 'jewellery',
    name: 'Jewellery, Maternity & Innerwear',
    badge: 'Complete Care',
    description: 'Handpicked artificial jewellery, feeding-friendly soft maternity wear, premium cotton nightwear, and daily innerwear.',
    highlights: [
      'Antique & Kundan Artificial Jewellery',
      'Feeding-Friendly Soft Maternity Outfits',
      'Breathable Nightwear & Loungewear',
      'Skin-Friendly Premium Innerwear'
    ]
  }
];

export const Services = () => {
  const whatsappBookingUrl = "https://wa.me/919842123456?text=Hi%20Umaiyaal%20Botique,%20I%20would%20like%20to%20enquire%20about%20your%20latest%20boutique%20collections.";

  return (
    <div className="min-h-screen bg-[#0e0714] text-gray-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#ec4899] selection:text-white pb-20">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Collections & Services | Umaiyaal Botique - Exclusive Designer Clothing</title>
        <meta 
          name="description" 
          content="Explore Umaiyaal Botique's exclusive designer collection: Soft silk sarees, cotton chudi sets, co-ord sets, kurtis, maxi dresses, shawls, leggings & artificial jewellery." 
        />
        <meta name="keywords" content="Umaiyaal Botique, designer sarees, soft silk sarees, chudi sets, co-ord sets, kurtis, maxi dresses, shawls, artificial jewellery, maternity wear" />
      </Helmet>

      {/* Navigation Header Bar */}
      <header className="sticky top-0 z-40 bg-[#0e0714]/90 backdrop-blur-md border-b border-[#2a1338]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ec4899] to-[#9333ea] flex items-center justify-center font-black text-white text-xl font-['Outfit'] shadow-[0_0_15px_rgba(236,72,153,0.4)]">
              U
            </div>
            <div>
              <span className="text-xl font-extrabold text-white tracking-wider font-['Outfit'] uppercase block leading-none">
                Umaiyaal <span className="text-[#ec4899]">Botique</span>
              </span>
              <span className="text-[10px] tracking-widest text-pink-300/70 font-semibold uppercase">
                Designer Studio • Est. 2019
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-4 text-sm font-medium">
            <Link 
              to="/services" 
              className="px-3.5 py-1.5 rounded-lg text-[#ec4899] bg-[#ec4899]/10 border border-[#ec4899]/30 font-semibold"
            >
              Collections
            </Link>
            <Link 
              to="/reviews" 
              className="px-3.5 py-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-[#1a0f24] transition-colors"
            >
              Reviews
            </Link>
            <a 
              href={whatsappBookingUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ec4899] to-[#9333ea] text-white font-semibold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Enquiry
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#231030]">
        {/* Glow ambient background orbs */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#ec4899]/20 via-[#9333ea]/25 to-transparent blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-[#ec4899]/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e0e2e] border border-[#3b1d54] mb-6 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#ec4899] animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-pink-200">
              Exclusive Women's Designer Boutique
            </span>
          </div>

          {/* Primary SEO Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-['Outfit'] mb-6 max-w-4xl mx-auto leading-tight sm:leading-none">
            Elegance & Style at <span className="bg-gradient-to-r from-[#ec4899] via-[#d946ef] to-[#a855f7] text-transparent bg-clip-text">Umaiyaal Botique</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-pink-100/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover exquisite sarees, graceful chudi sets, trendy co-ord sets, airy kurtis, matching designer shawls, and statement fashion jewellery.
          </p>

          {/* Trust stats counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-[#2a1338]">
            <div className="p-4 rounded-xl bg-[#170a24]/80 border border-[#2d143f]">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#ec4899] font-['Outfit']">25,000+</div>
              <div className="text-xs text-pink-200/70 font-medium mt-1">Happy Customers</div>
            </div>
            <div className="p-4 rounded-xl bg-[#170a24]/80 border border-[#2d143f]">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-['Outfit']">4.9 ★</div>
              <div className="text-xs text-pink-200/70 font-medium mt-1">Google Rating</div>
            </div>
            <div className="p-4 rounded-xl bg-[#170a24]/80 border border-[#2d143f]">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-300 font-['Outfit']">100+</div>
              <div className="text-xs text-pink-200/70 font-medium mt-1">New Weekly Arrivals</div>
            </div>
            <div className="p-4 rounded-xl bg-[#170a24]/80 border border-[#2d143f]">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-['Outfit']">100%</div>
              <div className="text-xs text-pink-200/70 font-medium mt-1">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ec4899] mb-3">
            <Crown className="w-4 h-4" />
            Curated Collections
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight mb-3">
            Our Collections & Services
          </h2>
          <p className="text-base sm:text-lg text-pink-100/70 max-w-xl mx-auto">
            From regal silk sarees and festive grand sets to comfortable daily wear, maternity essentials, and artificial jewellery.
          </p>
        </div>

        {/* 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Workshop Highlights & Quality Promise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-gradient-to-b from-[#1c0c2c] to-[#12071d] border border-[#36184d] p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ec4899]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[#ec4899] text-xs font-bold tracking-widest uppercase mb-2 block">
                Why Women Love Umaiyaal Botique
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mb-4">
                Pure Fabrics, Designer Cuts & Thoughtful Styling
              </h3>
              <p className="text-pink-100/70 text-sm sm:text-base leading-relaxed mb-6">
                Every woman deserves to feel radiant and confident. At Umaiyaal Botique, we hand-curate every fabric with supreme attention to weave purity, soft touch, skin-friendly dyes, and timeless ethnic patterns.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ec4899]" />
                  <span>Premium soft silk & pure cottons</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ec4899]" />
                  <span>Flawless tailoring & neat finishing</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ec4899]" />
                  <span>Trendy festive & everyday wear</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ec4899]" />
                  <span>Air-conditioned boutique shopping</span>
                </div>
              </div>
            </div>

            <div className="bg-[#170a24] p-6 sm:p-8 rounded-2xl border border-[#331749] flex flex-col justify-between text-center lg:text-left">
              <div>
                <h4 className="text-xl font-bold text-white mb-2 font-['Outfit']">Looking for the perfect outfit?</h4>
                <p className="text-pink-100/70 text-sm mb-6">
                  Visit our studio on Theni Main Road or chat with our boutique stylists directly on WhatsApp to explore our catalog.
                </p>
                <div className="space-y-2.5 text-xs sm:text-sm text-pink-100/80 mb-6">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-pink-100/80">
                    <MapPin className="w-4 h-4 text-[#ec4899]" />
                    <span>Theni Main Road, Tamil Nadu</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-pink-100/80">
                    <Clock className="w-4 h-4 text-[#ec4899]" />
                    <span>Open Mon – Sun: 9:30 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#ec4899] to-[#9333ea] hover:opacity-95 transition-opacity shadow-lg shadow-[#ec4899]/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <Link
                  to="/reviews"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-pink-200 bg-[#220e36] hover:bg-[#2e1349] border border-[#441c66] transition-colors"
                >
                  <span>Customer Reviews</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-[#231030] text-center text-xs text-pink-200/50">
        <p>© {new Date().getFullYear()} Umaiyaal Botique. Redefining women's ethnic & designer fashion in Tamil Nadu.</p>
      </footer>
    </div>
  );
};

export default Services;
