export const INITIAL_BUSINESS = {
  id: "umaiyaal-botique",
  slug: "umaiyaal-botique",
  name: "Umaiyaal Botique",
  branch: "Main Studio",
  category: "Women's Boutique & Designer Clothing",
  ownerName: "Umaiyaal Botique",
  email: "contact@umaiyaalbotique.com",
  phone: "+91 98421 23456",
  plan: "Pro Enterprise",
  monthlyScanLimit: 5000,
  logoUrl: "/logo.png",
  bannerUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
  tagline: "Exclusive Designer Sarees, Chudi Sets, Kurtis, Shawls & Fashion Jewellery",
  address: "Theni Main Road, Tamil Nadu",
  googlePlaceUrl: "https://g.page/r/CSkwyUzjxg-pEBM/review",
  verified: true,
  rating: 4.9,
  totalReviews: 2450,
  status: "ACTIVE",
  createdAt: "2019-01-10"
};

export const INITIAL_MERCHANTS_LIST = [
  INITIAL_BUSINESS
];

// Product & Services Catalogue for Umaiyaal Botique (Exact Client Categories & Items)
export const UMAIYAAL_SERVICE_CATEGORIES = [
  {
    id: 'cat_sarees',
    categoryName: 'Sarees Collection',
    categoryDesc: 'Handcrafted drapes, pure silks, intricate cut-work & festive celebration sarees',
    iconName: 'Sparkles',
    items: [
      { id: 'fancy-cotton-sarees', name: 'Fancy Cotton Sarees', badge: 'Daily & Casual', desc: 'Lightweight, breathable fancy cotton sarees with designer borders.' },
      { id: 'soft-silk-sarees', name: 'Soft Silk Sarees', badge: 'Best Seller', desc: 'Pure feather-soft silk sarees with rich pallu and contrasting blouse.' },
      { id: 'cotton-sarees', name: 'Cotton Sarees', badge: 'Traditional', desc: 'Authentic pure cotton sarees with classic woven motifs and temple borders.' },
      { id: 'cut-work-sarees', name: 'Cut Work Sarees', badge: 'Trending', desc: 'Artisanal laser & handcrafted cut work detailing along borders and pallu.' },
      { id: 'embroidery-work-sarees', name: 'Embroidery Work Sarees', badge: 'Grand Occasion', desc: 'Delicate thread, sequin, and zari embroidery crafted on premium fabrics.' },
      { id: 'raw-silk-sarees', name: 'Raw Silk Sarees', badge: 'Heritage', desc: 'Rich textured pure raw silk sarees radiating royal traditional luster.' },
      { id: 'party-wear-sarees', name: 'Party Wear Sarees', badge: 'Glamour', desc: 'Contemporary designer party sarees with modern drapes and glamorous sheen.' },
      { id: 'tassure-silk-sarees', name: 'Tassure Silk Sarees', badge: 'Luxury', desc: 'Exclusive natural textured Tussar/Tassure silk sarees with artistic prints.' }
    ]
  },
  {
    id: 'cat_chudi_coord',
    categoryName: 'Chudi & Co-ord Sets',
    categoryDesc: 'Festive grand chudis, breezy Mul cotton daily wear & modern chic co-ords',
    iconName: 'Shirt',
    items: [
      { id: 'coord-sets', name: 'Co-ord Sets', badge: 'Top Trending', desc: 'Chic matching 2-piece & 3-piece western and ethnic co-ordinated sets.' },
      { id: 'festive-chudi-sets', name: 'Festive Chudi Sets', badge: 'Popular', desc: 'Richly embellished festive chudi sets complete with ornate heavy dupattas.' },
      { id: 'mul-cotton-chudi-sets', name: 'Mul Cotton Chudi Sets', badge: 'Super Comfort', desc: 'Feather-light 100% Mul cotton chudi sets crafted for effortless all-day wear.' }
    ]
  },
  {
    id: 'cat_dresses_kurtis',
    categoryName: 'Kurtis & Maxi Dresses',
    categoryDesc: 'Elegant occasion maxis, flared anarkalis & classy office wear kurtis',
    iconName: 'Crown',
    items: [
      { id: 'maxi-dress', name: 'Maxi Dress', badge: 'Flowy & Elegant', desc: 'Graceful floor-length designer maxi dresses and Indo-western ethnic gowns.' },
      { id: 'kurtis', name: 'Kurtis', badge: 'Daily & Office', desc: 'A-line, flared, and straight-cut designer kurtis with comfortable cuts.' }
    ]
  },
  {
    id: 'cat_bottom_wear',
    categoryName: 'Pants & Bottom Wear',
    categoryDesc: '4-way super stretch leggings, palazzo pants & tailored cotton trousers',
    iconName: 'Layers',
    items: [
      { id: 'leggings', name: 'Leggings', badge: '4-Way Stretch', desc: 'Premium bio-washed super stretch leggings available in 50+ vibrant shades.' },
      { id: 'palazo-pants', name: 'Palazo Pants', badge: 'Breezy Fit', desc: 'Flared comfortable palazzo pants with elasticated waistbands and rich fall.' },
      { id: 'cotton-straight-pants', name: 'Cotton Straight Pants', badge: 'Formal & Chic', desc: 'Tailored 100% cotton straight-cut pants with pocket detailing for kurtis.' },
      { id: 'shimmer-leggings', name: 'Shimmer Leggings', badge: 'Party Special', desc: 'Dazzling metallic shimmer leggings crafted for festive tunics and parties.' }
    ]
  },
  {
    id: 'cat_shawls_dupattas',
    categoryName: 'Shawls & Dupattas',
    categoryDesc: 'Chiffon, pure cotton, handcrafted embroidery & lustrous silk shawls',
    iconName: 'Feather',
    items: [
      { id: 'chiffon-shawls', name: 'Chiffon Shawls', badge: 'Light & Flowy', desc: 'Featherweight flowy chiffon shawls with neat picot and tasseled hemlines.' },
      { id: 'embroidery-shawls', name: 'Embroidery Shawls', badge: 'Artisanal', desc: 'Intricate floral and geometric hand-embroidery work on premium stoles.' },
      { id: 'cotton-shawls', name: 'Cotton Shawls', badge: 'Pure Comfort', desc: 'Breathable pure cotton dupattas and daily stoles with traditional block prints.' },
      { id: 'silk-shawls', name: 'Silk Shawls', badge: 'Royal Touch', desc: 'Lustrous festive silk shawls and stoles with opulent golden zari borders.' }
    ]
  },
  {
    id: 'cat_essentials_jewellery',
    categoryName: 'Jewellery & Essentials',
    categoryDesc: 'Antique artificial jewellery, maternity wear, comfort nightwear & innerwear',
    iconName: 'Gem',
    items: [
      { id: 'artificial-jewellery', name: 'Artificial Jewellery Items', badge: 'Antique & Bridal', desc: 'Kundan, matte gold, temple design necklaces, jhumkas, and matching bangles.' },
      { id: 'maternity-wears', name: 'Maternity Wears', badge: 'Mother Care', desc: 'Thoughtfully designed maternity dresses & tops with discreet feeding zips.' },
      { id: 'nightwears', name: 'Nightwear’s', badge: 'Ultra Soft', desc: 'Comfortable pure cotton nighties, pajama sets, and lounge kaftans.' },
      { id: 'inner-wears', name: 'Inner Wears', badge: 'Daily Essential', desc: 'High-comfort, skin-friendly cotton innerwear crafted for all-day breathability.' }
    ]
  }
];

// Flat list of all 24 specific client services for selection and card rendering
export const UMAIYAAL_SERVICES = UMAIYAAL_SERVICE_CATEGORIES.flatMap(cat => 
  cat.items.map(item => ({
    id: item.id,
    name: item.name,
    category: cat.categoryName,
    badge: item.badge,
    desc: item.desc,
    iconName: cat.iconName,
    color: cat.id === 'cat_sarees' ? 'from-rose-500 to-pink-600' :
           cat.id === 'cat_chudi_coord' ? 'from-purple-600 to-pink-500' :
           cat.id === 'cat_dresses_kurtis' ? 'from-amber-500 to-rose-500' :
           cat.id === 'cat_bottom_wear' ? 'from-emerald-600 to-teal-600' :
           cat.id === 'cat_shawls_dupattas' ? 'from-violet-600 to-purple-600' :
           'from-fuchsia-500 to-rose-600'
  }))
);

export const FEATURE_TAGS = [
  { id: "fabric_quality", title: "Fabric & Material Quality", desc: "Pure soft fabrics & long-lasting finish", iconName: "Sparkles", defaultSelected: true },
  { id: "collection_variety", title: "Unique Collections", desc: "Huge range of sarees, chudis & sets", iconName: "Crown", defaultSelected: true },
  { id: "fitting_stitching", title: "Perfect Fit & Comfort", desc: "Flattering cuts, pure comfort & neat finish", iconName: "Shirt", defaultSelected: true },
  { id: "jewellery_matching", title: "Matching Accessories", desc: "Gorgeous artificial jewellery & shawls", iconName: "Gem", defaultSelected: false },
  { id: "best_pricing", title: "Best Affordable Pricing", desc: "Budget friendly with premium luxury look", iconName: "DollarSign", defaultSelected: false },
  { id: "customer_service", title: "Warm Hospitality", desc: "Helpful, patient staff & quick assistance", iconName: "Heart", defaultSelected: false },
  { id: "latest_trends", title: "Trending Fashion", desc: "Modern co-ords, party sarees & trendy kurtis", iconName: "Flame", defaultSelected: false },
  { id: "trusted_boutique", title: "Trusted Boutique", desc: "25,000+ satisfied customers", iconName: "ThumbsUp", defaultSelected: false }
];

export const NEGATIVE_ISSUE_TAGS = [
  { id: "size_fitting", label: "👗 Size or Fitting Issue" },
  { id: "stock_availability", label: "📦 Color / Design Out of Stock" },
  { id: "fabric_feel", label: "🧵 Fabric or Material Query" },
  { id: "staff_response", label: "💬 Staff Assistance / Hospitality" },
  { id: "billing_pricing", label: "💳 Pricing or Billing Query" },
  { id: "exchange_query", label: "🔄 Exchange or Return Assistance" }
];

export const INITIAL_FEEDBACK_ENTRIES = [
  {
    id: "FB-1001",
    merchantId: "umaiyaal-botique",
    customerName: "Sneha Ramakrishnan",
    contactInfo: "+91 98401 54321",
    contactType: "phone",
    sentiment: "NEEDS_ATTENTION",
    rating: 2,
    issues: ["Size or Fitting Issue"],
    comment: "Bought a festive chudi set, wanted an exchange for one size up. Staff was polite.",
    status: "NEW",
    priority: "HIGH",
    touchpoint: "Billing Counter (QR-01)",
    createdAt: "2026-08-20T11:30:00Z",
    notes: [
      { id: "n1", author: "Umaiyaal Botique Manager", text: "Customer contacted and size exchanged smoothly.", timestamp: "2026-08-20T12:00:00Z" }
    ]
  }
];

export const INITIAL_QR_STANDS = [
  {
    id: "QR-01",
    merchantId: "umaiyaal-botique",
    name: "Umaiyaal Botique Reception Counter",
    location: "Main Boutique Lounge",
    scans: 1240,
    goodCount: 1180,
    convertedReviews: 920,
    negativeInterceptions: 15,
    active: true,
    createdAt: "2026-01-15"
  }
];

export const INITIAL_ANALYTICS_DATA = {
  totalScans: 2840,
  totalPositiveConversions: 2450,
  totalNegativeInterceptions: 28,
  averageRating: 4.9,
  conversionRate: 86.3
};

// Fallback dynamic generator
export const getMerchantBySlugOrFallback = (slug, existingList = INITIAL_MERCHANTS_LIST) => {
  if (!slug || slug === 'umaiyaal-botique' || slug === 'umaiyaal' || slug === 'barani-cars') return INITIAL_BUSINESS;
  
  const normalized = slug.toLowerCase().trim();
  const found = existingList.find(m => m.slug.toLowerCase() === normalized || m.id.toLowerCase() === normalized);
  if (found) return found;

  const formattedName = normalized
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    id: `m-custom-${normalized}`,
    slug: normalized,
    name: formattedName,
    branch: "Main Studio",
    category: "Women's Boutique & Designer Clothing",
    ownerName: "Manager",
    email: `contact@${normalized.replace(/[^a-z0-9]/g, '')}.com`,
    phone: "+91 98421 23456",
    plan: "Pro Enterprise",
    monthlyScanLimit: 5000,
    logoUrl: "/logo.png",
    bannerUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    tagline: `Welcome to ${formattedName}! Scan to share your 5-star experience.`,
    address: "Theni Main Road, Tamil Nadu",
    googlePlaceUrl: `https://maps.google.com/?q=${encodeURIComponent(formattedName + ' Boutique')}`,
    verified: true,
    rating: 4.9,
    totalReviews: 1200,
    status: "ACTIVE",
    createdAt: new Date().toISOString().split('T')[0]
  };
};

import { generateSmartReviewSuite } from './reviewGenerator';

// Client-side AI Review Generator customized for Umaiyaal Botique
export const generateClientSideAiReview = ({
  businessName = "Umaiyaal Botique",
  businessCategory = "Women's Boutique & Designer Clothing",
  selectedServices = [],
  tags = [],
  customerComment = "",
  rating = 5,
  tone = "seo"
}) => {
  return generateSmartReviewSuite({
    businessName,
    businessCategory,
    selectedServices,
    tags,
    customerComment,
    rating,
    tone
  });
};
