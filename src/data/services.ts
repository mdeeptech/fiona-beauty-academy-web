export interface Service {
  slug: string;
  category: string;
  name: string;
  price: string;
  description?: string;
}

export const services: Service[] = [
  // FACIALS
  { slug: 'facial-anti-aging', category: 'FACIALS', name: 'Anti-aging Facial', price: '₹2,200–₹3,000' },
  { slug: 'facial-tanning', category: 'FACIALS', name: 'Tanning & De-Pigmentation', price: '₹2,000' },
  { slug: 'facial-tightening', category: 'FACIALS', name: 'Face Tightening & Lifting', price: '₹1,600' },
  { slug: 'facial-glow', category: 'FACIALS', name: 'Glow Facial / Brightening', price: '₹1,200–₹1,800' },
  { slug: 'facial-gold', category: 'FACIALS', name: 'Gold Facial', price: '₹2,200' },
  { slug: 'facial-silver', category: 'FACIALS', name: 'Silver Facial', price: '₹2,200' },
  { slug: 'facial-skin-lightening', category: 'FACIALS', name: 'Skin Lightening', price: '₹2,500' },
  { slug: 'facial-sensitive', category: 'FACIALS', name: 'Sensitive Skin Facial', price: '₹3,000' },
  { slug: 'facial-lotus', category: 'FACIALS', name: 'Lotus Facial', price: '₹1,200' },
  { slug: 'facial-herbal', category: 'FACIALS', name: 'Herbal Facial', price: '₹1,000' },
  { slug: 'facial-medi', category: 'FACIALS', name: 'Medi Facial (Skin Q)', price: '₹1,400' },
  { slug: 'facial-four-in-one', category: 'FACIALS', name: '4 in 1 Facial', price: '₹3,500' },
  { slug: 'skin-hydra-dermabrasion', category: 'FACIALS', name: 'Hydra Dermabrasion', price: '₹4,500–₹5,500' },
  { slug: 'skin-ionisation-organic', category: 'FACIALS', name: 'Ionisation Organic Facial', price: '₹1,500' },
  { slug: 'skin-acne', category: 'FACIALS', name: 'Acne Treatment (Grades 1–3)', price: '₹1,500–₹2,000' },
  { slug: 'skin-japanese-gold', category: 'FACIALS', name: 'Japanese Metallic Therapy (Gold)', price: '₹3,000' },
  { slug: 'skin-japanese-silver', category: 'FACIALS', name: 'Japanese Foil Treatment (Silver)', price: '₹3,000' },

  // CLEAN-UPS & MASSAGES
  { slug: 'massage-herbal', category: 'CLEAN-UPS & MASSAGES', name: 'Herbal Clean-Up', price: '₹500' },
  { slug: 'massage-detox', category: 'CLEAN-UPS & MASSAGES', name: 'Detox Clean-Up', price: '₹800' },
  { slug: 'massage-aesthetic', category: 'CLEAN-UPS & MASSAGES', name: 'Aesthetic Clean-Up', price: '₹1,000' },
  { slug: 'massage-organic', category: 'CLEAN-UPS & MASSAGES', name: 'Organic Clean-Up', price: '₹1,500' },
  { slug: 'massage-hydra', category: 'CLEAN-UPS & MASSAGES', name: 'Hydra Clean-Up', price: '₹2,000' },
  { slug: 'massage-detan', category: 'CLEAN-UPS & MASSAGES', name: 'De-Tan Clean-Up', price: '₹800' },
  { slug: 'massage-detan-express', category: 'CLEAN-UPS & MASSAGES', name: 'De-Tan (Express)', price: '₹450' },
  { slug: 'skin-isopropyl', category: 'CLEAN-UPS & MASSAGES', name: 'Isopropyl Treatment', price: '₹1,500' },
  { slug: 'skin-french-paraffin', category: 'CLEAN-UPS & MASSAGES', name: 'French Paraffin Treatment', price: '₹2,000' },
  { slug: 'skin-detoxification', category: 'CLEAN-UPS & MASSAGES', name: 'Skin Detoxification', price: '₹3,000' },
  { slug: 'skin-iodine', category: 'CLEAN-UPS & MASSAGES', name: 'Iodine Treatment', price: '₹1,500' },
  { slug: 'massage-basic', category: 'CLEAN-UPS & MASSAGES', name: 'Basic Massage', price: '₹800' },
  { slug: 'massage-swedish', category: 'CLEAN-UPS & MASSAGES', name: 'Swedish Massage', price: '₹1,000' },
  { slug: 'massage-quinics', category: 'CLEAN-UPS & MASSAGES', name: 'Quinics Massage', price: '₹1,000' },
  { slug: 'massage-dr-jacquet', category: 'CLEAN-UPS & MASSAGES', name: 'Dr. Jacquet Massage', price: '₹1,000' },
  { slug: 'massage-emerald', category: 'CLEAN-UPS & MASSAGES', name: 'Emerald Massage', price: '₹1,000' },
  { slug: 'massage-medor', category: 'CLEAN-UPS & MASSAGES', name: 'Medor Massage', price: '₹1,000' },
  { slug: 'massage-lymphatic', category: 'CLEAN-UPS & MASSAGES', name: 'Lymphatic Drainage Massage', price: '₹1,200' },

  // MAKEUP
  { slug: 'makeup-day', category: 'MAKEUP', name: 'Day Make-Up (Light)', price: '₹1,700' },
  { slug: 'makeup-night', category: 'MAKEUP', name: 'Night Make-Up (Light)', price: '₹2,000' },
  { slug: 'makeup-party', category: 'MAKEUP', name: 'Party Look Make-Up', price: '₹1,700' },
  { slug: 'makeup-wedding', category: 'MAKEUP', name: 'Wedding Party Look Make-Up', price: '₹3,200' },
  { slug: 'makeup-bridal', category: 'MAKEUP', name: 'Bridal Make-Up', price: '₹8,000' },

  // THREADING
  { slug: 'threading-forehead', category: 'THREADING', name: 'Forehead', price: '₹40' },
  { slug: 'threading-upper', category: 'THREADING', name: 'Upper Lips', price: '₹20' },
  { slug: 'threading-lower', category: 'THREADING', name: 'Lower Lips', price: '₹20' },
  { slug: 'threading-forehead-touchup', category: 'THREADING', name: 'Forehead Touch-Up', price: '₹20' },
  { slug: 'threading-full', category: 'THREADING', name: 'Full Face', price: '₹150' },

  // MANICURE & PEDICURE
  { slug: 'mani-regular', category: 'MANICURE & PEDICURE', name: 'Regular Manicure', price: '₹700' },
  { slug: 'mani-premium', category: 'MANICURE & PEDICURE', name: 'Premium Manicure', price: '₹1,200' },
  { slug: 'pedi-regular', category: 'MANICURE & PEDICURE', name: 'Regular Pedicure', price: '₹1,200' },
  { slug: 'pedi-premium', category: 'MANICURE & PEDICURE', name: 'Premium Pedicure', price: '₹1,700' },

  // WAXING
  { slug: 'waxing-full-arms', category: 'WAXING', name: 'Full Arms', price: '₹800' },
  { slug: 'waxing-armpits', category: 'WAXING', name: 'Armpits', price: '₹600' },
  { slug: 'waxing-half-legs', category: 'WAXING', name: 'Half Legs', price: '₹800' },
  { slug: 'waxing-full-legs', category: 'WAXING', name: 'Full Legs', price: '₹1,000' },
  { slug: 'waxing-neck', category: 'WAXING', name: 'Neck Area', price: '₹400' },
  { slug: 'waxing-back', category: 'WAXING', name: 'Back (Blouse Area)', price: '₹600' },
  { slug: 'waxing-belly', category: 'WAXING', name: 'Belly', price: '₹600' },
  { slug: 'waxing-full-face', category: 'WAXING', name: 'Full Face', price: '₹500' },

  // HAIR SERVICES
  { slug: 'hair-cut-basic', category: 'HAIR SERVICES', name: 'Hair Cut (Basic)', price: '₹700' },
  { slug: 'hair-cut-advanced', category: 'HAIR SERVICES', name: 'Hair Cut (Advanced)', price: '₹1,000' },
  { slug: 'hair-kids', category: 'HAIR SERVICES', name: 'Kids Hair Cut', price: '₹500' },
  { slug: 'hair-shampoo', category: 'HAIR SERVICES', name: 'Shampoo + Conditioning + Blow Dry', price: '₹650' },
  { slug: 'hair-deep-cond', category: 'HAIR SERVICES', name: 'Deep Conditioning', price: '₹750' },
  { slug: 'hair-massage', category: 'HAIR SERVICES', name: 'Head Massage', price: '₹700' },
  { slug: 'hair-blowdry', category: 'HAIR SERVICES', name: 'Blow Dry Setting', price: '₹750' },
  { slug: 'hair-temp-straight', category: 'HAIR SERVICES', name: 'Temporary Straightening', price: '₹800 onwards' },
  { slug: 'hair-temp-curl', category: 'HAIR SERVICES', name: 'Temporary Curls', price: '₹800' },
  { slug: 'hair-wash', category: 'HAIR SERVICES', name: 'Hair Wash', price: '₹350' },
  { slug: 'hair-root-touchup', category: 'HAIR SERVICES', name: 'Hair Root Touch-Up', price: '₹1,300' },
  { slug: 'hair-spa', category: 'HAIR SERVICES', name: 'Regular Hair Spa', price: '₹800' },
  { slug: 'hair-dandruff', category: 'HAIR SERVICES', name: 'Dandruff Treatment', price: '₹1,500' },
  { slug: 'hair-loss', category: 'HAIR SERVICES', name: 'Hair Loss Treatment', price: '₹1,800' },

  // HAIR TREATMENTS
  { slug: 'treat-straightening', category: 'HAIR TREATMENTS', name: 'Hair Straightening', price: '₹4,000 onwards' },
  { slug: 'treat-smoothing', category: 'HAIR TREATMENTS', name: 'Hair Smoothing', price: '₹4,000' },
  { slug: 'treat-keratin', category: 'HAIR TREATMENTS', name: 'Keratin Treatment', price: '₹4,500' },
  { slug: 'treat-botox', category: 'HAIR TREATMENTS', name: 'Brazilian Hair Botox', price: '₹6,000' },
  { slug: 'treat-nano', category: 'HAIR TREATMENTS', name: 'Nanoplastia', price: '₹5,500' },
  { slug: 'treat-kera-smooth', category: 'HAIR TREATMENTS', name: 'Kera Smoothing', price: '₹5,999' },
  { slug: 'treat-boto-smooth', category: 'HAIR TREATMENTS', name: 'Boto Smoothing', price: '₹6,000' },
  { slug: 'treat-straight-therapy', category: 'HAIR TREATMENTS', name: 'Straight Therapy', price: '₹9,999' },
  { slug: 'treat-rebonding', category: 'HAIR TREATMENTS', name: 'Rebonding', price: '₹5,999' },
  { slug: 'treat-global-color', category: 'HAIR TREATMENTS', name: 'Global Hair Colour', price: '₹3,500 onwards' },
  { slug: 'treat-highlights', category: 'HAIR TREATMENTS', name: 'Hair Highlights (Full)', price: '₹2,499' },
  { slug: 'treat-highlights-streak', category: 'HAIR TREATMENTS', name: 'Highlights (Per Streak)', price: '₹250' },

  // HAIR RITUALS
  { slug: 'ritual-bond', category: 'HAIR RITUALS', name: 'Hair Bond Filler Ritual', price: '₹1,800' },
];

export const mensServices: Service[] = [
  { slug: 'men-haircut', category: 'GROOMING', name: 'Hair Cut', price: '₹350' },
  { slug: 'men-beard-trim', category: 'GROOMING', name: 'Beard Trim', price: '₹150' },
  { slug: 'men-shaving', category: 'GROOMING', name: 'Shaving', price: '₹150' },
  { slug: 'men-hair-colour', category: 'COLOUR & HIGHLIGHTS', name: 'Hair Colour', price: '₹1,000' },
  { slug: 'men-ammonia-free-colour', category: 'COLOUR & HIGHLIGHTS', name: 'Ammonia Free Colour', price: '₹1,300' },
  { slug: 'men-beard-colour', category: 'COLOUR & HIGHLIGHTS', name: 'Beard Colour', price: '₹350' },
  { slug: 'men-moustache-colour', category: 'COLOUR & HIGHLIGHTS', name: 'Moustache Colour', price: '₹100' },
  { slug: 'men-highlights', category: 'COLOUR & HIGHLIGHTS', name: 'Highlights', price: '₹2,000 onwards' },
  { slug: 'men-crown-highlights', category: 'COLOUR & HIGHLIGHTS', name: 'Crown Highlights', price: '₹1,500' },
  { slug: 'men-funky-colour', category: 'COLOUR & HIGHLIGHTS', name: 'Funky / Crazy Colour', price: '₹3,000 onwards' },
  { slug: 'men-ghost-roots', category: 'COLOUR & HIGHLIGHTS', name: 'Ghost Roots Colour', price: '₹3,000' },
  { slug: 'men-smoothening', category: 'HAIR TREATMENTS', name: 'Hair Smoothening', price: '₹2,500' },
  { slug: 'men-straightening', category: 'HAIR TREATMENTS', name: 'Hair Straightening', price: '₹2,500' },
  { slug: 'men-keratin', category: 'HAIR TREATMENTS', name: 'Keratin Treatment', price: '₹3,000' },
  { slug: 'men-botox', category: 'HAIR TREATMENTS', name: 'Botox Treatment', price: '₹3,500' },
  { slug: 'men-nanoplastia', category: 'HAIR TREATMENTS', name: 'Nano Plastia', price: '₹3,500' },
  { slug: 'men-perming-curls', category: 'HAIR TREATMENTS', name: 'Perming Curls', price: '₹3,000' },
  { slug: 'men-plex', category: 'HAIR TREATMENTS', name: 'Plex Treatment', price: '₹1,000' },
  { slug: 'men-oil-massage', category: 'SPA & SCALP CARE', name: 'Hair Oil Massage', price: '₹500' },
  { slug: 'men-basic-spa', category: 'SPA & SCALP CARE', name: 'Basic Hair Spa', price: '₹700 onwards' },
  { slug: 'men-hydrating-spa', category: 'SPA & SCALP CARE', name: 'Hydrating Spa', price: '₹800 onwards' },
  { slug: 'men-rejuvenating-spa', category: 'SPA & SCALP CARE', name: 'Rejuvenating Spa', price: '₹800 onwards' },
  { slug: 'men-kanpeki-rituals', category: 'SPA & SCALP CARE', name: 'Kanpeki Rituals', price: '₹1,200 onwards' },
  { slug: 'men-hair-fall', category: 'SPA & SCALP CARE', name: 'Hair Fall Treatment', price: '₹1,800' },
  { slug: 'men-dandruff', category: 'SPA & SCALP CARE', name: 'Dandruff Treatment', price: '₹1,500' },
];
