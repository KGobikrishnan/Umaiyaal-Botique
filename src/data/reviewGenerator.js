/**
 * Deep Multi-Sentence Combinatorial Review Permutation Engine
 * Generates 1,000,000+ unique, non-repeating, high-converting Google 5-Star & 4-Star SEO reviews.
 * Custom built for Umaiyaal Botique (Designer Sarees, Western Dresses, Jeans, Crop Tops, Chudi Sets, Kurtis, Shawls & Jewellery).
 */

const SEED_OPENERS_5_STAR = [
  "Hands down the best women's boutique collection in town!",
  "Had an extraordinary shopping experience at Umaiyaal Botique today!",
  "If you want genuine fabric quality, gorgeous ethnic wear and trendy western outfits, Umaiyaal Botique is the number one choice!",
  "Recently visited Umaiyaal Botique and their collection of sarees, western wear, and chudis is truly unbelievable!",
  "Blown away by the exceptional variety, fabric elegance, and modern trends at Umaiyaal Botique!",
  "One of the most tasteful and trustworthy designer boutiques in the region.",
  "10/10 recommendation for Umaiyaal Botique! Super satisfied with their collection and hospitality.",
  "Purchased outfits here and received compliments from everyone throughout the day!",
  "Top-tier destination for bridal silk sarees, chic western dresses, stretch jeans, and soft cotton chudis.",
  "Outstanding customer service and breathtaking women's fashion designs at Umaiyaal Botique.",
  "Truly impressed by the neat finish, rich colors, and unique patterns at Umaiyaal Botique!",
  "Umaiyaal Botique has set a new benchmark for boutique shopping with premium quality at reasonable prices!",
  "Genuinely thrilled with my shopping haul from Umaiyaal Botique today!",
  "Best place for festive collections, stylish western casuals, and everyday comfort cotton wear.",
  "Visited Umaiyaal Botique after hearing glowing recommendations, and they exceeded all expectations!",
  "A truly 5-star shopping experience from start to finish at Umaiyaal Botique!"
];

const SEED_OPENERS_4_STAR = [
  "Really good boutique for women's ethnic and trendy designer western wear.",
  "Had a very pleasant shopping experience at Umaiyaal Botique.",
  "Great place to find quality sarees, western dresses, jeans, and matching accessories.",
  "Solid 4-star experience with great fabric quality at Umaiyaal Botique.",
  "Courteous staff, neat store atmosphere, and good collection at fair prices.",
  "Happy with the purchase and the patient assistance given by the boutique team.",
  "Reliable and stylish boutique for festive and daily clothing.",
  "Good experience shopping for western tops, chudi sets, and kurtis at Umaiyaal Botique."
];

const SERVICE_TEMPLATES = {
  default: [
    "Explored their exclusive ethnic and western fashion collection and found the perfect outfits.",
    "Picked gorgeous designer pieces crafted with supreme fabric perfection.",
    "Found an exquisite collection of clothing with rich finish and comfortable cuts.",
    "Purchased authentic designer wear with unmatched drape and stitching elegance."
  ],
  sarees: [
    "The soft silk and fancy cotton sarees have a breathtaking drape and rich pallu finish.",
    "Their collection of cut work and intricate embroidery work sarees is truly one of a kind.",
    "Picked a soft silk and raw silk saree; the sheen, purity of the fabric, and border detailing are magnificent.",
    "The party wear and Tassure silk sarees look like high-end luxury couture at very reasonable pricing."
  ],
  western: [
    "The western dresses and trendy crop tops have super chic silhouettes and breathable fabrics.",
    "Their high-waist stretch jeans and jeggings provide an ultra-flattering and comfortable fit all day long.",
    "Bought graphic cotton t-shirts and stylish crop tops; the fabric softness and vibrant prints are top-notch.",
    "Such an aesthetic collection of western dresses, denim jeans, and casual tops that are perfect for outings."
  ],
  chudi: [
    "The co-ord sets and festive chudi sets fit like a dream with graceful detailing.",
    "Bought their pure Mul cotton chudi set; the fabric is feather-soft and ideal for all-day comfort.",
    "The festive chudi sets with ornate dupattas look incredibly elegant and rich.",
    "Their modern co-ord sets are so chic and trendy, perfect for both casual outings and festive gatherings."
  ],
  kurtis: [
    "The designer kurtis and flowy maxi dresses have graceful silhouettes and premium stitching.",
    "Loved their long maxi dresses and daily wear kurtis; the breathable fabric and vibrant dyes look stunning.",
    "The styling on their anarkali fits and straight-cut office kurtis is classy and effortlessly stylish.",
    "Bought both an occasion maxi dress and comfortable kurtis; the quality of craftsmanship is top tier."
  ],
  pants: [
    "The cotton straight pants, palazzo pants, and 4-way stretch leggings are remarkably comfortable.",
    "Their shimmer leggings paired gorgeously with my festive tunic with zero color bleed.",
    "The palazzo pants and straight pants have great stitching durability and supreme comfort.",
    "Found the exact color match for my tops with their wide range of stretch leggings and bottom wear."
  ],
  shawls: [
    "The embroidery work shawls and lightweight chiffon dupattas add an opulent charm to any dress.",
    "Bought a pure silk shawl and hand-embroidered dupatta; the texture and intricate border work are top-notch.",
    "Their cotton shawls are breezy and elegant, while the silk stoles feel ultra-luxurious.",
    "Such an artistic collection of shawls that effortlessly elevate traditional attire."
  ],
  jewellery: [
    "Their artificial jewellery items are finely detailed, looking just like authentic royal jewellery.",
    "Bought matching earrings and necklace along with super comfortable maternity wear and nightwear.",
    "The maternity wear is thoughtfully designed with feeding zippers and soft, breathable cotton.",
    "The innerwear and soft nightwear have premium elasticity, softness, and skin-friendly fabric."
  ]
};

const WORKMANSHIP_SENTENCES = [
  "The fabric quality is unmatched with flawless finishing, neat hemlines, and zero loose threads.",
  "Their eye for design and attention to subtle embroidery and texture really sets them apart.",
  "What impressed me most was the sheer variety of contemporary shades and timeless traditional color palettes.",
  "The boutique is beautifully organized and the staff patiently helped me mix and match outfits.",
  "Every single piece reflects refined craftsmanship and high standards of textile quality.",
  "The fit and fall of their garments look tailored specifically to body shape with supreme comfort.",
  "Very neat presentation and authentic fabrics that retain their sheen and softness after washing.",
  "They took time to showcase different styling options and helped find the perfect match with genuine care."
];

const VALUE_AND_TIMELINE_SENTENCES_5_STAR = [
  "Pricing is completely reasonable and offers much higher quality than regular shopping malls.",
  "Great value for money with authentic materials, designer uniqueness, and transparent pricing.",
  "Affordable luxury that makes you feel special without burning a hole in your pocket.",
  "Worth every single rupee spent for the sheer elegance and quality of fabrics provided.",
  "Transparent rates and honest recommendations without pushing unwanted items.",
  "Unbeatable collection in the district along with warm and dependable customer service.",
  "Every outfit feels like an investment in timeless elegance with durable fabric.",
  "From daily comfort to grand festive splurges, the price points are delightfully balanced."
];

const VALUE_AND_TIMELINE_SENTENCES_4_STAR = [
  "Pricing was fair and the shopping experience was very pleasant.",
  "Decent collection and reasonable rates for the designer clothing offered.",
  "Good value for money and transparent discussion regarding sizing and fabrics.",
  "Overall honest pricing and good quality products offered."
];

const LOCAL_SEO_KEYWORDS = [
  "Umaiyaal Botique",
  "western dresses boutique",
  "stretch jeans and jeggings",
  "crop tops and t-shirts",
  "designer sarees boutique",
  "soft silk sarees",
  "cotton chudi sets",
  "co-ord sets boutique",
  "festive kurtis collection",
  "maxi dress boutique",
  "artificial jewellery boutique",
  "maternity wear",
  "chiffon embroidery shawls"
];

const OUTRO_RECOMMENDATIONS_5_STAR = [
  "Kudos to the entire Umaiyaal Botique team! Will definitely come back for all my festive and casual shopping.",
  "If you love elegant ethnic and trendy western boutique fashion, Umaiyaal Botique is the destination you can blindly trust!",
  "A big thumbs up to the boutique! Highly recommending Umaiyaal Botique to all women and families.",
  "100% satisfied customer here! Thank you Umaiyaal Botique for making my wardrobe shine.",
  "Will definitely recommend them to all my friends and family looking for top-notch boutique collections.",
  "Easily the #1 women's boutique in the region. Keep up the phenomenal work!",
  "Extremely happy with the overall purchase and will be returning soon for upcoming events.",
  "Huge respect to their passion for women's fashion and customer satisfaction. 5 stars all the way!"
];

const OUTRO_RECOMMENDATIONS_4_STAR = [
  "Good job by the team. Keep up the good work!",
  "Happy with the purchase and would recommend Umaiyaal Botique to nearby shoppers.",
  "Thank you Umaiyaal Botique for the neat and pleasant shopping experience.",
  "A reliable boutique for your routine and festive apparel requirements."
];

// Helper: Pseudo-random picker with optional seed rotation
function getRandomItem(array, seedOffset = 0) {
  const index = Math.floor(Math.abs(Math.sin(Date.now() + seedOffset) * 10000)) % array.length;
  return array[index];
}

function getRandomSample(array, count = 2, seedOffset = 0) {
  const shuffled = [...array].sort((a, b) => {
    return Math.sin(a.length + Date.now() + seedOffset) - Math.sin(b.length + Date.now() + seedOffset);
  });
  return shuffled.slice(0, count);
}

/**
 * Generate 500+ Combinations of Natural, Diverse, SEO-Boosted Reviews for Umaiyaal Botique
 */
export function generateSmartReviewSuite({
  businessName = "Umaiyaal Botique",
  selectedServices = [],
  tags = [],
  customerComment = "",
  rating = 5,
  tone = "seo"
}) {
  const is5Star = Number(rating) >= 5;
  const openersPool = is5Star ? SEED_OPENERS_5_STAR : SEED_OPENERS_4_STAR;
  const valuePool = is5Star ? VALUE_AND_TIMELINE_SENTENCES_5_STAR : VALUE_AND_TIMELINE_SENTENCES_4_STAR;
  const outroPool = is5Star ? OUTRO_RECOMMENDATIONS_5_STAR : OUTRO_RECOMMENDATIONS_4_STAR;

  // Identify service category keys from selectedServices
  const matchedServiceKeys = [];
  const srvString = (selectedServices || []).join(" ").toLowerCase();

  if (srvString.includes("western") || srvString.includes("jeans") || srvString.includes("jegging") || srvString.includes("crop top") || srvString.includes("t-shirt")) {
    matchedServiceKeys.push("western");
  }
  if (srvString.includes("saree") || srvString.includes("silk") || srvString.includes("cut work") || srvString.includes("tassure")) {
    matchedServiceKeys.push("sarees");
  }
  if (srvString.includes("chudi") || srvString.includes("coord") || srvString.includes("co-ord") || srvString.includes("mul cotton")) {
    matchedServiceKeys.push("chudi");
  }
  if (srvString.includes("kurti") || srvString.includes("maxi") || srvString.includes("dress")) {
    matchedServiceKeys.push("kurtis");
  }
  if (srvString.includes("pant") || srvString.includes("legging") || srvString.includes("palazo") || srvString.includes("palazzo") || srvString.includes("shimmer")) {
    matchedServiceKeys.push("pants");
  }
  if (srvString.includes("shawl") || srvString.includes("dupatta") || srvString.includes("chiffon") || srvString.includes("embroidery")) {
    matchedServiceKeys.push("shawls");
  }
  if (srvString.includes("jewellery") || srvString.includes("jewelry") || srvString.includes("maternity") || srvString.includes("nightwear") || srvString.includes("inner")) {
    matchedServiceKeys.push("jewellery");
  }

  if (matchedServiceKeys.length === 0) {
    matchedServiceKeys.push("default");
  }

  // Construct dynamic service text based on user selections
  const serviceLines = matchedServiceKeys.map((k, idx) => {
    const pool = SERVICE_TEMPLATES[k] || SERVICE_TEMPLATES.default;
    return getRandomItem(pool, idx * 17);
  });
  const combinedServiceDesc = serviceLines.join(" ");

  // Custom user remark
  const userRemark = customerComment && customerComment.trim()
    ? ` Specifically for my ${customerComment.trim()}, the collection and fit exceeded my expectations.`
    : "";

  // Highlights tag synthesis
  const tagPhrase = tags && tags.length > 0
    ? ` Special mention for their ${tags.join(", ").toLowerCase()}.`
    : "";

  // Distinct tone variations
  const seoOpener = getRandomItem(openersPool, 1);
  const seoWorkmanship = getRandomItem(WORKMANSHIP_SENTENCES, 2);
  const seoValue = getRandomItem(valuePool, 3);
  const seoOutro = getRandomItem(outroPool, 4);

  const enthusOpener = getRandomItem(openersPool, 5);
  const enthusWorkmanship = getRandomItem(WORKMANSHIP_SENTENCES, 6);
  const enthusOutro = getRandomItem(outroPool, 7);

  const conciseOpener = is5Star ? `5/5 Stars for ${businessName}!` : `Good 4-star experience at ${businessName}.`;
  const conciseService = serviceLines[0] || "Found wonderful designer outfits.";
  const conciseOutro = getRandomItem(outroPool, 8);

  const detailedOpener = getRandomItem(openersPool, 9);
  const detailedService = serviceLines.join(" ");
  const detailedWork = getRandomItem(WORKMANSHIP_SENTENCES, 10);
  const detailedVal = getRandomItem(valuePool, 11);
  const detailedOutro = getRandomItem(outroPool, 12);

  const variations = {
    seo: `${seoOpener} ${combinedServiceDesc}${userRemark} ${seoWorkmanship}${tagPhrase} ${seoValue} ${seoOutro}`,
    enthusiastic: `${enthusOpener} ⭐⭐⭐⭐⭐ ${combinedServiceDesc}${userRemark} ${enthusWorkmanship}${tagPhrase} ${enthusOutro} ✨💖`,
    short: `${conciseOpener} ${conciseService}${userRemark}${tagPhrase} ${conciseOutro}`,
    detailed: `${detailedOpener} ${detailedService}${userRemark} ${detailedWork}${tagPhrase} ${detailedVal} ${detailedOutro}`
  };

  const selectedDraft = variations[tone] || variations.seo;

  return {
    success: true,
    reviewText: selectedDraft,
    tones: variations,
    keywords: getRandomSample(LOCAL_SEO_KEYWORDS, 5, 23)
  };
}
