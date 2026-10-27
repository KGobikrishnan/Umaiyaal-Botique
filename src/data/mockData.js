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
  googlePlaceUrl: "https://g.page/r/Cb1zt1msXsX9EBM/review",
  verified: true,
  rating: 4.9,
  totalReviews: 2450,
  status: "ACTIVE",
  createdAt: "2019-01-10"
};

export const INITIAL_MERCHANTS_LIST = [
  INITIAL_BUSINESS
];

// Product & Services Catalogue for Umaiyaal Botique
export const UMAIYAAL_SERVICES = [
  {
    id: 'sarees_collection',
    name: 'Exclusive Sarees Collection',
    category: 'Sarees & Traditional Drapes',
    badge: 'Popular',
    desc: 'Soft silk, Fancy cotton, Cut work, Hand embroidery, Raw silk, Party wear & Tassure silk sarees.',
    iconName: 'Sparkles',
    color: 'from-rose-500 to-pink-600',
    tags: ['Soft Silk Sarees', 'Fancy Cotton Sarees', 'Cut Work Sarees', 'Embroidery Work Sarees', 'Party Wear Sarees', 'Tassure Silk Sarees']
  },
  {
    id: 'chudi_coord_sets',
    name: 'Co-ord Sets & Chudi Sets',
    category: 'Ethnic & Modern Sets',
    badge: 'Best Seller',
    desc: 'Trendy co-ord sets, festive grand chudi sets, and breathable Mul cotton daily chudi sets.',
    iconName: 'Shirt',
    color: 'from-purple-600 to-pink-500',
    tags: ['Co-ord Sets', 'Festive Chudi Sets', 'Mul Cotton Chudi Sets']
  },
  {
    id: 'kurtis_maxi_dress',
    name: 'Kurtis & Maxi Dresses',
    category: 'Casual & Occasion Wear',
    badge: 'Trending',
    desc: 'Designer flared kurtis, straight-cut office kurtis, flowy maxi gowns & ethnic long dresses.',
    iconName: 'Crown',
    color: 'from-amber-500 to-rose-500',
    tags: ['Designer Kurtis', 'Flowy Maxi Dresses', 'Daily Wear Kurtis', 'Anarkali Fits']
  },
  {
    id: 'pants_leggings',
    name: 'Leggings & Bottom Wear',
    category: 'Comfort Bottoms',
    badge: 'Essential',
    desc: '4-way stretch leggings, palazzo pants, cotton straight pants, and dazzling shimmer leggings.',
    iconName: 'Layers',
    color: 'from-emerald-600 to-teal-600',
    tags: ['Super Stretch Leggings', 'Palazzo Pants', 'Cotton Straight Pants', 'Shimmer Party Leggings']
  },
  {
    id: 'designer_shawls',
    name: 'Shawls & Dupattas',
    category: 'Dupattas & Shawls',
    badge: 'Artisan',
    desc: 'Lightweight chiffon shawls, rich embroidery work shawls, pure cotton shawls & rich silk shawls.',
    iconName: 'Feather',
    color: 'from-violet-600 to-purple-600',
    tags: ['Chiffon Shawls', 'Embroidery Shawls', 'Cotton Shawls', 'Pure Silk Shawls']
  },
  {
    id: 'jewellery_nightwear_inner',
    name: 'Jewellery, Maternity & Innerwear',
    category: 'Accessories & Comfort',
    badge: 'Must Have',
    desc: 'Statement artificial jewellery, comfortable maternity outfits, soft nightwear & daily innerwear.',
    iconName: 'Gem',
    color: 'from-fuchsia-500 to-rose-600',
    tags: ['Artificial Jewellery', 'Maternity Wears', 'Comfort Nightwear', 'Premium Innerwear']
  }
];

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

// Fallback dynamic generator so ANY slug returns Umaiyaal Botique or formatted store profile
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
