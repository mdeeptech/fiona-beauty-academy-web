export interface Course {
  slug: string;
  title: string;
  category: string;
  duration: string;
  price: number;
  registration?: number;
  installmentsAvailable?: boolean;
  overview: string;
  curriculum: string[];
  careerOpportunities?: string[];
  image: string;
}

export const courses: Course[] = [
  {
    slug: 'master-diploma-cosmetology',
    title: 'Master Diploma in Cosmetology, Aesthetic Science & Salon Management',
    category: 'Cosmetology',
    duration: '12 months',
    price: 148750,
    registration: 20000,
    installmentsAvailable: true,
    overview: 'An extensive 12-month program covering all aspects of beauty, hair, makeup, skin, aesthetics, cosmetology, and wellness. Designed to turn passion into a successful career.',
    curriculum: [
      'Hair Styling: Blow-drying, Ironing, Crimping, Tongs, One-length cuts, V cuts, U cuts, Layer cuts, Bob, Quick layering, Blended elevation, Gradation',
      'Hair Chemical: Straightening, Colour, Highlights, Keratin, Botox, Nanoplastia, Rebonding',
      'Makeup: Bridal makeup, Party makeup, High-fashion demonstrations, Product knowledge, Draping, Client handling, Communication, Social media',
      'Skin / Beauty: Anatomy, Physiology, Skin types, Skin disorders, Acne, Pigmentation, Threading, Waxing, Manicure, Pedicure, Cleanups, Basic facials, Skin analysis, Aroma, Advanced facial, Massage',
      'Aesthetics: High frequency, Ultrasonic, RF, LED, Hydra Derma Brassion',
      'Peels: Glycolic / AHA, Salicylic, Kojic, Lactic, Vitamin C',
      'Hair Science / Trichology: Hair anatomy, Hair fall treatments, Scalp therapies'
    ],
    careerOpportunities: [
      'Salon Professional',
      'Aesthetician / Skin Therapist',
      'Hair Stylist & Color Expert',
      'Makeup Artist',
      'Salon Manager',
      'Entrepreneur',
      'Own Salon',
      'Academy'
    ],
    image: '/courses/Cosmetology Training at Fiona Beauty Academy.png'
  },
  {
    slug: 'advance-diploma-skin-hair',
    title: 'Advance Diploma in Skin and Hair (Cosmetology L-1)',
    category: 'Cosmetology',
    duration: '7 months',
    price: 72000,
    overview: 'A comprehensive 7-month program focused on advanced skin and hair techniques to elevate your career in beauty.',
    curriculum: [
      'Advanced Skin Care Techniques',
      'Hair Cutting and Styling',
      'Chemical Hair Treatments',
      'Basic Makeup Application',
      'Salon Client Management'
    ],
    image: '/courses/Beauty Academy Skin and Hair Training.png'
  },
  {
    slug: 'diploma-skin-personal-beauty',
    title: 'Diploma in Skin and Personal Beauty (Skin Culture)',
    category: 'Skin & Aesthetics',
    duration: '3 months',
    price: 33200,
    overview: 'Specialized 3-month training focused purely on skin care, treatments, and personal beauty enhancements.',
    curriculum: [
      'Skin Anatomy and Physiology',
      'Facials and Cleanups',
      'Skin Treatments',
      'Personal Beauty Enhancement'
    ],
    image: '/courses/Diploma in Skin and Personal Beauty (Skin Culture).png'
  },
  {
    slug: 'diploma-hair-dressing',
    title: 'Diploma in Hair Dressing & Styling',
    category: 'Hair',
    duration: '4 months',
    price: 48600,
    overview: 'Master the art of hair styling, cutting, and chemical treatments in this 4-month intensive diploma.',
    curriculum: [
      'Classic and Advanced Haircuts',
      'Blow Drying and Styling',
      'Hair Coloring Techniques',
      'Chemical Treatments'
    ],
    image: '/courses/Diploma in Hair Dressing & Styling.png'
  },
  {
    slug: 'professional-makeup-hair',
    title: 'Professional Course in Make-up Artistry & Hair Styling',
    category: 'Makeup',
    duration: '20 days',
    price: 25000,
    overview: 'Fast-track 20-day intensive course focusing on high-demand professional makeup and hair styling techniques.',
    curriculum: [
      'Bridal and Party Makeup',
      'High-Fashion Makeup',
      'Creative Hair Styling',
      'Product Knowledge'
    ],
    image: '/courses/professional course in makeup artistry.png'
  },
  {
    slug: 'beauty-express',
    title: 'Beauty Express',
    category: 'Express Programs',
    duration: '1 month',
    price: 8098,
    overview: 'A quick entry into the beauty industry covering essential services in a 1-month focused program.',
    curriculum: [
      'Manicure and Pedicure',
      'Waxing and Threading',
      'Basic Facials',
      'Hygiene and Safety'
    ],
    image: '/courses/Beauty express.png'
  },
  {
    slug: 'basic-tattoo',
    title: 'Basic Tattoo Course',
    category: 'Tattoo',
    duration: '3 months',
    price: 38000,
    overview: 'Learn the fundamentals of tattooing, hygiene, and basic design over 3 months.',
    curriculum: [
      'Tattoo Equipment and Setup',
      'Hygiene and Sterilization',
      'Basic Linework and Shading',
      'Stencil Application'
    ],
    image: '/courses/Fiona Academy Basic Tattoo Course.png'
  },
  {
    slug: 'advanced-tattoo',
    title: 'Advanced Tattoo Course',
    category: 'Tattoo',
    duration: '6 months',
    price: 76000,
    overview: 'Master complex tattoo artistry, shading, color work, and large-scale designs in 6 months. Includes everything in the 3-month Basic Tattoo Course.',
    curriculum: [
      'Advanced Shading and Coloring',
      'Portrait and Realism',
      'Custom Design Creation',
      'Client Consultation'
    ],
    image: '/courses/Advanced Tattoo Course Academy Banner.png'
  },
  {
    slug: 'introductory-hair-dressing-styling',
    title: 'Introductory Course for Hair Dressing & Styling',
    category: 'Hair',
    duration: '24 days',
    price: 19000,
    overview: 'An introductory course in hair dressing and styling.',
    curriculum: ['Hair Dressing', 'Hair Styling'],
    image: '/courses/Diploma in Hair Dressing & Styling.png'
  },
  {
    slug: 'hair-chemical',
    title: 'Hair Chemical',
    category: 'Hair',
    duration: '1 month',
    price: 28000,
    overview: 'Training in professional hair chemical services.',
    curriculum: ['Hair Chemical Treatments'],
    image: '/courses/Beauty Academy Skin and Hair Training.png'
  },
  {
    slug: 'introductory-skin-care',
    title: 'Introductory Course for Skin Care',
    category: 'Skin & Aesthetics',
    duration: '3 days',
    price: 8100,
    overview: 'An introductory course in skin care.',
    curriculum: ['Skin Care'],
    image: '/courses/Diploma in Skin and Personal Beauty (Skin Culture).png'
  },
  {
    slug: 'facial-massages-therapist',
    title: 'Facial Massages Therapist',
    category: 'Skin & Aesthetics',
    duration: '5 days',
    price: 24300,
    overview: 'Training in facial massage techniques.',
    curriculum: ['Facial Massage Techniques'],
    image: '/courses/Diploma in Skin and Personal Beauty (Skin Culture).png'
  },
  {
    slug: 'skin-aesthetics-treatments',
    title: 'Skin Aesthetics & Skin Care Treatments',
    category: 'Skin & Aesthetics',
    duration: '10 days',
    price: 40500,
    overview: 'Training in skin aesthetics and skin care treatments.',
    curriculum: ['Skin Aesthetics', 'Skin Care Treatments'],
    image: '/courses/Diploma in Skin and Personal Beauty (Skin Culture).png'
  },
  {
    slug: 'art-of-henna-design',
    title: 'Art of Henna Design',
    category: 'Makeup',
    duration: '1 month',
    price: 4720,
    overview: 'Learn the art of henna design.',
    curriculum: ['Henna Design'],
    image: '/courses/professional course in makeup artistry.png'
  }
];
