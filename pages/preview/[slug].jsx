import fs from 'fs';
import path from 'path';

// ─── Industry Themes ──────────────────────────────────────────────────────────

const INDUSTRY_THEMES = {
  barbershop: {
    primary: '#0d1b2a',
    accent: '#c9a84c',
    accentLight: '#e8cc8a',
    bg: '#060e18',
    card: '#111d2b',
    textColor: '#ffffff',
    heroGradient: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 50%, #0d1b2a 100%)',
    services: [
      { icon: '✂️', name: 'Classic Haircut', desc: 'Precision cuts styled to perfection for any occasion.' },
      { icon: '🪒', name: 'Hot Towel Shave', desc: 'Traditional straight-razor shave with hot towel treatment.' },
      { icon: '🧔', name: 'Beard Trim & Shape', desc: 'Sharp lines and professional beard grooming.' },
      { icon: '🎨', name: 'Hair Coloring', desc: 'Full color, highlights, and grey blending services.' },
      { icon: '👦', name: "Kids' Cuts", desc: 'Patient, fun haircuts for children of all ages.' },
      { icon: '💈', name: 'Line-Up & Edge', desc: 'Crisp edges and clean necklines every time.' },
    ],
    tagline: 'Premium Cuts. Classic Style.',
    heroHeadline: 'Where Every Cut\nTells a Story',
    heroSub: 'Expert barbers. Premium products. A cut above the rest.',
    cta: 'Book Your Appointment',
    hours: 'Tue – Sat &nbsp;|&nbsp; 9am – 7pm',
    badge: '💈 Old School Craft, Modern Precision',
    stats: [{ n: '2,400+', label: 'Happy Clients' }, { n: '11 yrs', label: 'In Business' }, { n: '4.9 ★', label: 'Google Rating' }],
    testimonials: [
      { name: 'James W.', stars: 5, text: "Best barbershop in Charlotte. Walked in looking rough, walked out looking sharp. Won't go anywhere else." },
      { name: 'Carlos M.', stars: 5, text: 'Got a fade and beard trim — both were on point. Super clean shop, great vibes. Highly recommend.' },
      { name: 'Tyler B.', stars: 5, text: 'My go-to spot. They always remember how I like my cut and never rush. Worth every penny.' },
    ],
    whyUs: ['No appointment needed — walk-ins welcome', 'Premium Wahl & Andis tools only', 'Serving Charlotte for over a decade', 'Child & senior friendly'],
    emoji: '✂️',
  },
  'hair salon': {
    primary: '#1a0a2e',
    accent: '#d44ab8',
    accentLight: '#f09de0',
    bg: '#0d0618',
    card: '#1c0d2e',
    textColor: '#ffffff',
    heroGradient: 'linear-gradient(135deg, #1a0a2e 0%, #3d1060 50%, #1a0a2e 100%)',
    services: [
      { icon: '✂️', name: 'Haircut & Styling', desc: 'Precision cuts and blowouts tailored to your face shape.' },
      { icon: '🎨', name: 'Color & Highlights', desc: 'Balayage, ombré, full color — we make heads turn.' },
      { icon: '💨', name: 'Blowout', desc: 'Silky smooth blowouts that last all week.' },
      { icon: '👰', name: 'Bridal Packages', desc: 'Look stunning on your most important day.' },
      { icon: '✨', name: 'Keratin Treatment', desc: 'Frizz-free, glossy hair for up to 6 months.' },
      { icon: '💇', name: 'Extensions', desc: 'Natural-looking length and volume added in hours.' },
    ],
    tagline: 'Where Beauty Begins.',
    heroHeadline: 'Your Best Hair\nStarts Here',
    heroSub: 'Expert stylists. Luxury treatments. Results that speak for themselves.',
    cta: 'Book Your Appointment',
    hours: 'Tue – Sat &nbsp;|&nbsp; 9am – 7pm',
    badge: '✨ Premium Salon Experience',
    stats: [{ n: '1,800+', label: 'Happy Clients' }, { n: '9 yrs', label: 'In Business' }, { n: '4.9 ★', label: 'Google Rating' }],
    testimonials: [
      { name: 'Ashley R.', stars: 5, text: 'I asked for a complete transformation and left absolutely obsessed. My color looks so natural and the cut is perfect.' },
      { name: 'Priya N.', stars: 5, text: 'Best balayage in Charlotte, hands down. She really listened to what I wanted and delivered exactly that.' },
      { name: 'Morgan S.', stars: 5, text: 'Got a keratin treatment here and my hair has never been smoother. Worth every dollar!' },
    ],
    whyUs: ['Aveda & Olaplex certified products', 'Free color consultations', 'Complimentary conditioning treatment', 'Easy online booking'],
    emoji: '💇',
  },
  salon: {
    primary: '#1a0a2e',
    accent: '#d44ab8',
    accentLight: '#f09de0',
    bg: '#0d0618',
    card: '#1c0d2e',
    textColor: '#ffffff',
    heroGradient: 'linear-gradient(135deg, #1a0a2e 0%, #3d1060 50%, #1a0a2e 100%)',
    services: [
      { icon: '✂️', name: 'Haircut & Styling', desc: 'Precision cuts and blowouts tailored to your face shape.' },
      { icon: '🎨', name: 'Color & Highlights', desc: 'Balayage, ombré, full color — we make heads turn.' },
      { icon: '💨', name: 'Blowout', desc: 'Silky smooth blowouts that last all week.' },
      { icon: '👰', name: 'Bridal Packages', desc: 'Look stunning on your most important day.' },
      { icon: '✨', name: 'Keratin Treatment', desc: 'Frizz-free, glossy hair for up to 6 months.' },
      { icon: '💇', name: 'Extensions', desc: 'Natural-looking length and volume added in hours.' },
    ],
    tagline: 'Where Beauty Begins.',
    heroHeadline: 'Your Best Hair\nStarts Here',
    heroSub: 'Expert stylists. Luxury treatments. Results that speak for themselves.',
    cta: 'Book Your Appointment',
    hours: 'Tue – Sat &nbsp;|&nbsp; 9am – 7pm',
    badge: '✨ Premium Salon Experience',
    stats: [{ n: '1,800+', label: 'Happy Clients' }, { n: '9 yrs', label: 'In Business' }, { n: '4.9 ★', label: 'Google Rating' }],
    testimonials: [
      { name: 'Ashley R.', stars: 5, text: 'I asked for a complete transformation and left absolutely obsessed. My color looks so natural and the cut is perfect.' },
      { name: 'Priya N.', stars: 5, text: 'Best balayage in Charlotte, hands down. She really listened to what I wanted and delivered exactly that.' },
      { name: 'Morgan S.', stars: 5, text: 'Got a keratin treatment here and my hair has never been smoother. Worth every dollar!' },
    ],
    whyUs: ['Aveda & Olaplex certified products', 'Free color consultations', 'Complimentary conditioning treatment', 'Easy online booking'],
    emoji: '💇',
  },
  restaurant: {
    primary: '#1a0500',
    accent: '#e8a04a',
    accentLight: '#f5cc8a',
    bg: '#0d0200',
    card: '#1f0a02',
    textColor: '#ffffff',
    heroGradient: 'linear-gradient(135deg, #2d0a00 0%, #4a1800 50%, #1a0500 100%)',
    services: [
      { icon: '🍽️', name: 'Dine-In', desc: 'Warm, inviting atmosphere for a memorable meal.' },
      { icon: '📦', name: 'Takeout & Delivery', desc: 'Fresh food delivered hot, right to your door.' },
      { icon: '🎉', name: 'Catering', desc: 'Corporate events, weddings, and private parties.' },
      { icon: '🥂', name: 'Private Events', desc: 'Reserve our space for your special occasion.' },
      { icon: '⭐', name: 'Daily Specials', desc: "Fresh seasonal dishes you won't find on the menu." },
      { icon: '🍺', name: 'Happy Hour', desc: 'Daily deals on drinks and appetizers.' },
    ],
    tagline: 'Fresh Food. Warm Atmosphere.',
    heroHeadline: 'Food That Brings\nPeople Together',
    heroSub: 'Made from scratch. Served with heart. Every single day.',
    cta: 'Reserve a Table',
    hours: 'Mon – Sun &nbsp;|&nbsp; 11am – 10pm',
    badge: '🌟 Locally Owned & Loved',
    stats: [{ n: '10K+', label: 'Meals Served' }, { n: '7 yrs', label: 'In Business' }, { n: '4.8 ★', label: 'Google Rating' }],
    testimonials: [
      { name: 'Denise T.', stars: 5, text: "This place is our family's go-to. The food is consistently amazing and the staff feels like family. Love it." },
      { name: 'Brian P.', stars: 5, text: "Had their catering for our company lunch — everyone was raving. Best decision I've made all year." },
      { name: 'Lisa H.', stars: 5, text: 'Cozy atmosphere, incredible food, and a portion size that actually fills you up. This is a gem.' },
    ],
    whyUs: ['100% fresh, locally sourced ingredients', 'Gluten-free & vegan options available', 'Private event space for up to 60 guests', 'Online reservations & easy catering quotes'],
    emoji: '🍽️',
  },
  plumber: {
    primary: '#0a1e30',
    accent: '#00b4d8',
    accentLight: '#72d7ed',
    bg: '#050f1a',
    card: '#0d1f30',
    textColor: '#ffffff',
    heroGradient: 'linear-gradient(135deg, #0a1e30 0%, #0d3a58 50%, #0a1e30 100%)',
    services: [
      { icon: '🚿', name: 'Drain Cleaning', desc: 'Fast, thorough drain clearing — no mess, no stress.' },
      { icon: '🔧', name: 'Pipe Repair', desc: 'Expert leak detection and pipe replacement.' },
      { icon: '🌡️', name: 'Water Heater', desc: 'Same-day water heater repair and installation.' },
      { icon: '🚨', name: 'Emergency Service', desc: '24/7 emergency plumbing — we answer every call.' },
      { icon: '🏠', name: 'Bathroom Remodel', desc: 'Full fixture upgrades and bathroom plumbing.' },
      { icon: '🔍', name: 'Leak Detection', desc: 'Advanced camera inspection to find hidden leaks.' },
    ],
    tagline: '24/7 Reliable Plumbing.',
    heroHeadline: 'Fast Fixes.\nZero Headaches.',
    heroSub: 'Licensed plumbers on call 24/7. Same-day service, upfront pricing.',
    cta: 'Call for Immediate Help',
    hours: '24 / 7 &nbsp;|&nbsp; Emergency Service Available',
    badge: '🛡️ Licensed, Bonded & Insured',
    stats: [{ n: '3,200+', label: 'Jobs Completed' }, { n: '14 yrs', label: 'In Business' }, { n: '4.9 ★', label: 'Google Rating' }],
    testimonials: [
      { name: 'Rick D.', stars: 5, text: 'Pipe burst at midnight. They were at my house within an hour and had it fixed by 2am. Absolute lifesavers.' },
      { name: 'Karen S.', stars: 5, text: 'Honest, fast, and priced fairly. They found a hidden leak in 20 minutes that another plumber missed entirely.' },
      { name: 'Tom G.', stars: 5, text: 'Used them twice now — always professional, always on time, and they clean up after themselves. 10/10.' },
    ],
    whyUs: ['Flat-rate pricing — no surprise bills', 'Same-day and emergency service', 'All work backed by a 1-year guarantee', '100% licensed & insured technicians'],
    emoji: '🔧',
  },
  plumbing: {
    primary: '#0a1e30',
    accent: '#00b4d8',
    accentLight: '#72d7ed',
    bg: '#050f1a',
    card: '#0d1f30',
    textColor: '#ffffff',
    heroGradient: 'linear-gradient(135deg, #0a1e30 0%, #0d3a58 50%, #0a1e30 100%)',
    services: [
      { icon: '🚿', name: 'Drain Cleaning', desc: 'Fast, thorough drain clearing — no mess, no stress.' },
      { icon: '🔧', name: 'Pipe Repair', desc: 'Expert leak detection and pipe replacement.' },
      { icon: '🌡️', name: 'Water Heater', desc: 'Same-day water heater repair and installation.' },
      { icon: '🚨', name: 'Emergency Service', desc: '24/7 emergency plumbing — we answer every call.' },
      { icon: '🏠', name: 'Bathroom Remodel', desc: 'Full fixture upgrades and bathroom plumbing.' },
      { icon: '🔍', name: 'Leak Detection', desc: 'Advanced camera inspection to find hidden leaks.' },
    ],
    tagline: '24/7 Reliable Plumbing.',
    heroHeadline: 'Fast Fixes.\nZero Headaches.',
    heroSub: 'Licensed plumbers on call 24/7. Same-day service, upfront pricing.',
    cta: 'Call for Immediate Help',
    hours: '24 / 7 &nbsp;|&nbsp; Emergency Service Available',
    badge: '🛡️ Licensed, Bonded & Insured',
    stats: [{ n: '3,200+', label: 'Jobs Completed' }, { n: '14 yrs', label: 'In Business' }, { n: '4.9 ★', label: 'Google Rating' }],
    testimonials: [
      { name: 'Rick D.', stars: 5, text: 'Pipe burst at midnight. They were at my house within an hour and had it fixed by 2am. Absolute lifesavers.' },
      { name: 'Karen S.', stars: 5, text: 'Honest, fast, and priced fairly. They found a hidden leak in 20 minutes that another plumber missed entirely.' },
      { name: 'Tom G.', stars: 5, text: 'Used them twice now — always professional, always on time, and they clean up after themselves. 10/10.' },
    ],
    whyUs: ['Flat-rate pricing — no surprise bills', 'Same-day and emergency service', 'All work backed by a 1-year guarantee', '100% licensed & insured technicians'],
    emoji: '🔧',
  },
  hvac: {
    primary: '#081c1a',
    accent: '#06d6a0',
    accentLight: '#7ef5d6',
    bg: '#040e0d',
    card: '#0c2220',
    textColor: '#ffffff',
    heroGradient: 'linear-gradient(135deg, #081c1a 0%, #0d3530 50%, #081c1a 100%)',
    services: [
      { icon: '❄️', name: 'AC Installation', desc: 'Energy-efficient systems installed right the first time.' },
      { icon: '🔥', name: 'Heating Service', desc: 'Furnace repair, tune-ups, and full replacements.' },
      { icon: '🌀', name: 'Duct Cleaning', desc: 'Cleaner air, better efficiency, lower bills.' },
      { icon: '📋', name: 'Maintenance Plans', desc: 'Scheduled tune-ups to keep your system running.' },
      { icon: '🚨', name: '24/7 Emergency', desc: "No heat or AC? We'll be there fast." },
      { icon: '💨', name: 'Indoor Air Quality', desc: 'Filtration and humidification for healthier air.' },
    ],
    tagline: 'Your Comfort is Our Priority.',
    heroHeadline: 'Stay Cool in Summer.\nWarm All Winter.',
    heroSub: 'Expert HVAC service with same-day availability and transparent pricing.',
    cta: 'Schedule Service',
    hours: 'Mon – Fri 7am – 7pm &nbsp;|&nbsp; 24/7 Emergency',
    badge: '🛡️ NATE Certified Technicians',
    stats: [{ n: '4,100+', label: 'Systems Serviced' }, { n: '16 yrs', label: 'In Business' }, { n: '4.9 ★', label: 'Google Rating' }],
    testimonials: [
      { name: 'Linda M.', stars: 5, text: 'AC went out in July and they had a tech at my house within 3 hours. Fixed on the spot. Amazing service.' },
      { name: 'Steve J.', stars: 5, text: 'Got a new HVAC system installed — great price, clean installation, and they walked me through everything.' },
      { name: 'Angela P.', stars: 5, text: 'The maintenance plan is 100% worth it. My energy bills dropped and the system runs perfectly.' },
    ],
    whyUs: ['NATE certified, licensed & insured', 'Same-day service available', 'Financing options for new systems', 'All work guaranteed — 100%'],
    emoji: '❄️',
  },
  dentist: {
    primary: '#f0f8ff',
    accent: '#1a6bb5',
    accentLight: '#4a9fd4',
    bg: '#e8f4fd',
    card: '#ffffff',
    textColor: '#1a2e3a',
    heroGradient: 'linear-gradient(135deg, #1a4a6b 0%, #1a6bb5 50%, #0d3a58 100%)',
    services: [
      { icon: '🦷', name: 'General Dentistry', desc: 'Cleanings, exams, fillings, and preventive care.' },
      { icon: '✨', name: 'Teeth Whitening', desc: 'Professional whitening for a brilliant smile.' },
      { icon: '😬', name: 'Invisalign', desc: 'Straighter teeth without metal braces.' },
      { icon: '🚨', name: 'Emergency Care', desc: 'Same-day emergency appointments available.' },
      { icon: '👶', name: 'Pediatric Dentistry', desc: 'Gentle, patient care for children of all ages.' },
      { icon: '😁', name: 'Cosmetic Dentistry', desc: 'Veneers, bonding, and full smile makeovers.' },
    ],
    tagline: 'Beautiful Smiles. Gentle Care.',
    heroHeadline: 'A Smile You\'ll\nLove to Show Off',
    heroSub: 'Comfortable, modern dentistry for the whole family. No anxiety, no surprises.',
    cta: 'Book an Appointment',
    hours: 'Mon – Fri &nbsp;|&nbsp; 8am – 5pm',
    badge: '🦷 Accepting New Patients',
    stats: [{ n: '3,600+', label: 'Happy Patients' }, { n: '13 yrs', label: 'In Practice' }, { n: '4.9 ★', label: 'Google Rating' }],
    testimonials: [
      { name: 'Rachel T.', stars: 5, text: "I've always been terrified of dentists. This office completely changed that. Kind, patient, and virtually painless." },
      { name: 'Mark C.', stars: 5, text: 'Got veneers done here — the result is stunning. I smile in photos now, which I never did before.' },
      { name: 'Cynthia B.', stars: 5, text: 'Best dental office I have ever visited. Clean, modern, and the entire staff is genuinely warm and caring.' },
    ],
    whyUs: ['Sedation options for anxious patients', 'Digital X-rays — 90% less radiation', 'Most insurance plans accepted', 'Flexible payment plans available'],
    emoji: '🦷',
  },
  'auto repair': {
    primary: '#111111',
    accent: '#ff5722',
    accentLight: '#ff8a65',
    bg: '#080808',
    card: '#181818',
    textColor: '#ffffff',
    heroGradient: 'linear-gradient(135deg, #1a0800 0%, #2d1200 50%, #111111 100%)',
    services: [
      { icon: '🔧', name: 'Oil Change', desc: 'Quick full-synthetic or conventional oil change service.' },
      { icon: '🛑', name: 'Brake Service', desc: 'Pad replacement, rotor resurfacing, and brake flush.' },
      { icon: '💻', name: 'Engine Diagnostics', desc: 'Advanced computer diagnostics for any check engine light.' },
      { icon: '🔄', name: 'Tire Rotation', desc: 'Extend tire life with regular rotations and balancing.' },
      { icon: '❄️', name: 'AC Service', desc: 'Full AC recharge, leak detection, and compressor repair.' },
      { icon: '⚙️', name: 'Transmission', desc: 'Fluid flush, rebuild, and full transmission replacement.' },
    ],
    tagline: 'Expert Auto Care You Can Trust.',
    heroHeadline: 'Done Right.\nDone on Time.',
    heroSub: 'Honest diagnostics, fair pricing, and repairs backed by a guarantee.',
    cta: 'Schedule Service',
    hours: 'Mon – Sat &nbsp;|&nbsp; 8am – 6pm',
    badge: '🛡️ ASE Certified Mechanics',
    stats: [{ n: '5,000+', label: 'Vehicles Repaired' }, { n: '12 yrs', label: 'In Business' }, { n: '4.9 ★', label: 'Google Rating' }],
    testimonials: [
      { name: 'Marcus T.', stars: 5, text: 'Finally an honest mechanic. Quoted me $200 less than the dealership for the same job. And they finished ahead of schedule.' },
      { name: 'Sandra K.', stars: 5, text: "My check engine light had been on for weeks. They diagnosed it in 45 minutes and fixed it same day. I'm a customer for life." },
      { name: 'David R.', stars: 5, text: 'Quick oil change, no upselling pressure, fair price. I sent my wife here too and she had the same great experience.' },
    ],
    whyUs: ['ASE certified mechanics on every job', 'Free multi-point inspection with service', '12-month / 12,000 mile warranty', 'Loaner vehicles available'],
    emoji: '🔩',
  },
  landscaping: {
    primary: '#0a1a0a',
    accent: '#7cb518',
    accentLight: '#b2e05a',
    bg: '#050d05',
    card: '#0f1f0f',
    textColor: '#ffffff',
    heroGradient: 'linear-gradient(135deg, #0a1a0a 0%, #143d14 50%, #0a1a0a 100%)',
    services: [
      { icon: '🌿', name: 'Lawn Mowing', desc: 'Weekly and bi-weekly mowing for a perfectly manicured lawn.' },
      { icon: '🎨', name: 'Landscape Design', desc: 'Custom design plans to transform your outdoor space.' },
      { icon: '🌳', name: 'Tree Trimming', desc: 'Professional pruning, shaping, and hazard tree removal.' },
      { icon: '🍂', name: 'Mulching', desc: 'Fresh mulch installation for a clean, polished look.' },
      { icon: '💧', name: 'Irrigation', desc: 'Smart irrigation systems that save water and money.' },
      { icon: '🍃', name: 'Seasonal Cleanup', desc: 'Spring and fall cleanup to keep your property pristine.' },
    ],
    tagline: 'Beautiful Outdoor Spaces.',
    heroHeadline: 'The Yard Your\nNeighbors Will Envy',
    heroSub: 'Professional lawn care and landscaping that makes your property shine.',
    cta: 'Get a Free Estimate',
    hours: 'Mon – Sat &nbsp;|&nbsp; 7am – 6pm',
    badge: '🌿 Licensed & Fully Insured',
    stats: [{ n: '800+', label: 'Properties Served' }, { n: '10 yrs', label: 'In Business' }, { n: '4.8 ★', label: 'Google Rating' }],
    testimonials: [
      { name: 'Patricia H.', stars: 5, text: 'My yard has never looked better. They transformed a patchy mess into a beautiful lawn in just a few weeks.' },
      { name: 'Robert N.', stars: 5, text: 'Reliable, professional, and they actually show up when they say they will. My HOA stopped sending me letters.' },
      { name: 'Diana F.', stars: 5, text: 'The design consultation was free and the results were incredible. Totally exceeded my expectations.' },
    ],
    whyUs: ['Free on-site design consultations', 'Eco-friendly products available', 'Satisfaction guaranteed on every visit', 'Serving the greater Charlotte area'],
    emoji: '🌿',
  },
  'cleaning service': {
    primary: '#06101e',
    accent: '#4adae8',
    accentLight: '#90edf5',
    bg: '#030810',
    card: '#0a1628',
    textColor: '#ffffff',
    heroGradient: 'linear-gradient(135deg, #06101e 0%, #0a2240 50%, #06101e 100%)',
    services: [
      { icon: '🏠', name: 'Residential Cleaning', desc: 'Regular home cleaning that keeps your space immaculate.' },
      { icon: '🧹', name: 'Deep Clean', desc: 'Top-to-bottom deep cleaning for a truly fresh start.' },
      { icon: '📦', name: 'Move-In / Move-Out', desc: 'Spotless cleaning so you get your deposit back.' },
      { icon: '🏢', name: 'Commercial Cleaning', desc: 'Office and commercial space cleaning on your schedule.' },
      { icon: '🔨', name: 'Post-Construction', desc: 'Dust, debris, and residue removal after renovations.' },
      { icon: '🔄', name: 'Recurring Service', desc: 'Weekly, bi-weekly, and monthly plans available.' },
    ],
    tagline: 'Spotless Every Time.',
    heroHeadline: 'Life\'s Too Short\nto Clean Your Own House',
    heroSub: 'Professional, eco-friendly cleaning services with a 100% satisfaction guarantee.',
    cta: 'Get a Free Quote',
    hours: 'Mon – Sat &nbsp;|&nbsp; 8am – 5pm',
    badge: '✅ Background-Checked & Bonded',
    stats: [{ n: '1,200+', label: 'Homes Cleaned' }, { n: '8 yrs', label: 'In Business' }, { n: '4.9 ★', label: 'Google Rating' }],
    testimonials: [
      { name: 'Jennifer M.', stars: 5, text: 'I have a toddler and two dogs — my house is a disaster zone. After their deep clean it looked like I moved in yesterday.' },
      { name: 'Paul W.', stars: 5, text: 'Professional, thorough, and they never miss anything. I have them come every two weeks and it is the best money I spend.' },
      { name: 'Sofia R.', stars: 5, text: "Used them for a move-out clean and got my full deposit back. They're worth every penny." },
    ],
    whyUs: ['All cleaners background-checked & bonded', 'Eco-friendly, non-toxic products', '100% satisfaction guarantee', 'Flexible scheduling — weekends available'],
    emoji: '🧹',
  },
};

const DEFAULT_THEME = {
  primary: '#0d1b2a',
  accent: '#c9a84c',
  accentLight: '#e8cc8a',
  bg: '#060e18',
  card: '#111d2b',
  textColor: '#ffffff',
  heroGradient: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 50%, #0d1b2a 100%)',
  services: [
    { icon: '⭐', name: 'Professional Services', desc: 'Top-quality work delivered on time, every time.' },
    { icon: '💬', name: 'Free Consultation', desc: 'Talk to an expert before you commit to anything.' },
    { icon: '🎯', name: 'Custom Solutions', desc: 'Every project is tailored to your exact needs.' },
    { icon: '✅', name: 'Quality Guaranteed', desc: 'We stand behind every job we do.' },
    { icon: '⚡', name: 'Fast Turnaround', desc: 'Efficient service without cutting corners.' },
    { icon: '🤝', name: 'Honest Pricing', desc: 'Transparent quotes — no hidden fees, ever.' },
  ],
  tagline: 'Quality You Can Trust.',
  heroHeadline: 'Local Experts.\nExceptional Results.',
  heroSub: 'Serving our community with pride, professionalism, and a commitment to excellence.',
  cta: 'Contact Us Today',
  hours: 'Mon – Fri &nbsp;|&nbsp; 9am – 5pm',
  badge: '🛡️ Locally Owned & Operated',
  stats: [{ n: '500+', label: 'Happy Clients' }, { n: '8 yrs', label: 'In Business' }, { n: '4.9 ★', label: 'Google Rating' }],
  testimonials: [
    { name: 'Michael R.', stars: 5, text: "Outstanding service from start to finish. They really care about doing the job right. I won't go anywhere else." },
    { name: 'Laura T.', stars: 5, text: 'Fast, professional, and the price was exactly what they quoted. Refreshing to work with an honest local business.' },
    { name: 'Kevin B.', stars: 5, text: 'Highly recommend! They went above and beyond to make sure I was satisfied. Great team.' },
  ],
  whyUs: ['Locally owned and community focused', 'Fully licensed and insured', 'Satisfaction guaranteed on every job', 'Free estimates — no obligation'],
  emoji: '🏢',
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function PreviewPage({ config, error }) {
  if (error) {
    return (
      <div style={{ fontFamily: 'Arial', textAlign: 'center', padding: '80px 20px', color: '#666', background: '#f9f9f9', minHeight: '100vh' }}>
        <h1 style={{ color: '#333' }}>Preview not found</h1>
        <p style={{ marginTop: '12px' }}>{error}</p>
      </div>
    );
  }

  const industryKey = (config.industry || '').toLowerCase();
  const theme = INDUSTRY_THEMES[industryKey] || DEFAULT_THEME;
  const isDark = theme.textColor === '#ffffff';
  const phone = config.phone || '';
  const phoneDigits = phone.replace(/\D/g, '');
  const companyName = config.company || 'Your Business';
  const location = config.location || '';

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');

    :root {
      --accent: ${theme.accent};
      --accent-light: ${theme.accentLight};
      --bg: ${theme.bg};
      --primary: ${theme.primary};
      --card: ${theme.card};
      --text: ${theme.textColor};
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Inter', -apple-system, sans-serif;
      font-size: 16px;
      line-height: 1.6;
      overflow-x: hidden;
    }

    /* ── Preview Banner ── */
    .preview-banner {
      background: linear-gradient(90deg, var(--accent), var(--accent-light), var(--accent));
      background-size: 200% 100%;
      animation: shimmer 3s ease infinite;
      color: #000;
      text-align: center;
      padding: 11px 20px;
      font-family: 'Inter', sans-serif;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      position: relative;
      z-index: 100;
    }
    @keyframes shimmer {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* ── Nav ── */
    .nav {
      position: sticky;
      top: 0;
      z-index: 90;
      background: ${isDark ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.92)'};
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'};
      padding: 0 32px;
      height: 66px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-logo {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 1.15rem;
      color: var(--text);
      letter-spacing: -0.3px;
    }
    .nav-logo span { color: var(--accent); }
    .nav-phone {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .nav-cta {
      background: var(--accent);
      color: #000 !important;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 0.82rem;
      padding: 10px 22px;
      border-radius: 50px;
      text-decoration: none;
      letter-spacing: 0.3px;
      transition: transform 0.15s, opacity 0.15s;
      white-space: nowrap;
    }
    .nav-cta:hover { transform: translateY(-1px); opacity: 0.9; }

    /* ── Hero ── */
    .hero {
      min-height: 92vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
      padding: 80px 24px 100px;
      overflow: hidden;
      background: ${theme.heroGradient};
    }
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(circle at 20% 80%, ${theme.accent}18 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, ${theme.accentLight}12 0%, transparent 50%);
      pointer-events: none;
    }
    .hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff' opacity='0.04'/%3E%3C/svg%3E");
      pointer-events: none;
    }
    .hero-inner { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: ${theme.accent}22;
      border: 1px solid ${theme.accent}55;
      color: var(--accent-light);
      padding: 8px 20px;
      border-radius: 50px;
      font-family: 'Inter', sans-serif;
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      margin-bottom: 28px;
    }
    .hero-stars {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 24px;
      font-size: 0.85rem;
      opacity: 0.85;
    }
    .hero-stars .stars { color: #fbbf24; font-size: 1rem; letter-spacing: 1px; }
    .hero h1 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 900;
      font-size: clamp(2.8rem, 8vw, 5.5rem);
      line-height: 1.05;
      letter-spacing: -1.5px;
      color: #ffffff;
      margin-bottom: 22px;
      white-space: pre-line;
    }
    .hero h1 em {
      font-style: normal;
      color: var(--accent);
    }
    .hero-sub {
      font-size: clamp(1rem, 2.5vw, 1.2rem);
      opacity: 0.75;
      max-width: 560px;
      margin: 0 auto 40px;
      font-weight: 400;
      line-height: 1.7;
    }
    .hero-btns {
      display: flex;
      gap: 14px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--accent);
      color: #000 !important;
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 0.95rem;
      padding: 16px 36px;
      border-radius: 50px;
      text-decoration: none;
      letter-spacing: 0.3px;
      transition: transform 0.15s, box-shadow 0.15s;
      box-shadow: 0 8px 32px ${theme.accent}44;
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px ${theme.accent}66; }
    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: transparent;
      color: #ffffff !important;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 0.95rem;
      padding: 15px 32px;
      border-radius: 50px;
      text-decoration: none;
      border: 2px solid rgba(255,255,255,0.35);
      transition: border-color 0.15s, background 0.15s;
    }
    .btn-secondary:hover { border-color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.07); }
    .hero-location {
      margin-top: 36px;
      font-size: 0.88rem;
      opacity: 0.55;
    }

    /* ── Stats Strip ── */
    .stats-strip {
      background: ${isDark ? '#000000' : '#f8f9fa'};
      border-top: 1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'};
      border-bottom: 1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'};
      padding: 36px 24px;
    }
    .stats-inner {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      gap: 0;
    }
    .stat {
      flex: 1;
      text-align: center;
      padding: 0 32px;
      position: relative;
    }
    .stat + .stat::before {
      content: '';
      position: absolute;
      left: 0;
      top: 15%;
      height: 70%;
      width: 1px;
      background: ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'};
    }
    .stat-n {
      font-family: 'Montserrat', sans-serif;
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--accent);
      line-height: 1;
      letter-spacing: -1px;
    }
    .stat-label {
      font-size: 0.8rem;
      opacity: 0.6;
      margin-top: 5px;
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    /* ── Section ── */
    .section {
      padding: 96px 24px;
      max-width: 1100px;
      margin: 0 auto;
    }
    .section-tag {
      font-family: 'Inter', sans-serif;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 12px;
    }
    .section-title {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: clamp(1.8rem, 4vw, 2.6rem);
      line-height: 1.15;
      letter-spacing: -0.5px;
      margin-bottom: 14px;
    }
    .section-sub {
      font-size: 1rem;
      opacity: 0.6;
      max-width: 540px;
      line-height: 1.7;
      margin-bottom: 52px;
    }

    /* ── Services Grid ── */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }
    .service-card {
      background: var(--card);
      border: 1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'};
      border-radius: 16px;
      padding: 28px 28px 24px;
      transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
      position: relative;
      overflow: hidden;
    }
    .service-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, ${theme.accent}66, transparent);
      opacity: 0;
      transition: opacity 0.2s;
    }
    .service-card:hover {
      transform: translateY(-4px);
      border-color: ${theme.accent}44;
      box-shadow: 0 16px 48px ${theme.accent}18;
    }
    .service-card:hover::before { opacity: 1; }
    .service-icon {
      font-size: 2rem;
      margin-bottom: 14px;
      display: block;
    }
    .service-name {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 8px;
      color: var(--text);
    }
    .service-desc {
      font-size: 0.88rem;
      opacity: 0.6;
      line-height: 1.6;
    }

    /* ── Why Us ── */
    .why-section {
      background: ${isDark ? theme.primary + 'cc' : '#f0f4f8'};
      padding: 96px 24px;
      border-top: 1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
      border-bottom: 1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
    }
    .why-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }
    .why-checklist { list-style: none; display: flex; flex-direction: column; gap: 16px; }
    .why-checklist li {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      font-size: 1rem;
      line-height: 1.5;
    }
    .check-icon {
      width: 24px;
      height: 24px;
      min-width: 24px;
      background: ${theme.accent}22;
      border: 1px solid ${theme.accent}55;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--accent);
      font-size: 0.75rem;
      font-weight: 700;
      margin-top: 1px;
    }

    /* ── Testimonials ── */
    .testimonials-bg {
      padding: 96px 24px;
    }
    .testimonials-grid {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-top: 52px;
    }
    .review-card {
      background: var(--card);
      border: 1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'};
      border-radius: 16px;
      padding: 28px;
    }
    .review-stars { color: #fbbf24; font-size: 1.1rem; letter-spacing: 2px; margin-bottom: 14px; }
    .review-text {
      font-size: 0.95rem;
      line-height: 1.7;
      opacity: 0.8;
      margin-bottom: 20px;
      font-style: italic;
    }
    .review-text::before { content: '\\201C'; }
    .review-text::after { content: '\\201D'; }
    .review-author {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .review-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, ${theme.accent}44, ${theme.accent}22);
      border: 2px solid ${theme.accent}44;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 0.85rem;
      color: var(--accent);
    }
    .review-name {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 0.88rem;
    }
    .review-source {
      font-size: 0.72rem;
      opacity: 0.45;
      margin-top: 1px;
    }

    /* ── CTA Section ── */
    .cta-section {
      background: ${theme.heroGradient};
      padding: 100px 24px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .cta-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff' opacity='0.04'/%3E%3C/svg%3E");
    }
    .cta-inner { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; }
    .cta-section h2 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 900;
      font-size: clamp(2rem, 5vw, 3.2rem);
      color: #ffffff;
      margin-bottom: 14px;
      letter-spacing: -0.5px;
      line-height: 1.1;
    }
    .cta-section p {
      font-size: 1.05rem;
      opacity: 0.75;
      max-width: 480px;
      margin: 0 auto 36px;
      line-height: 1.7;
    }
    .cta-phone {
      display: block;
      font-family: 'Montserrat', sans-serif;
      font-weight: 900;
      font-size: clamp(2rem, 5vw, 3rem);
      color: var(--accent);
      text-decoration: none;
      letter-spacing: -0.5px;
      margin-bottom: 28px;
      transition: opacity 0.15s;
    }
    .cta-phone:hover { opacity: 0.85; }
    .cta-hours {
      font-size: 0.85rem;
      opacity: 0.5;
      margin-top: 16px;
    }

    /* ── Footer ── */
    .footer {
      background: #000000;
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 28px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
    }
    .footer-left {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 0.88rem;
      color: #ffffff;
    }
    .footer-right {
      font-size: 0.72rem;
      color: rgba(255,255,255,0.3);
    }
    .footer-right a {
      color: var(--accent);
      text-decoration: none;
      font-weight: 600;
    }

    /* ── Responsive ── */
    @media (max-width: 720px) {
      .why-inner { grid-template-columns: 1fr; gap: 40px; }
      .stat-n { font-size: 1.8rem; }
      .stats-inner { gap: 0; }
      .stat { padding: 0 16px; }
      .nav { padding: 0 16px; }
      .nav-logo { font-size: 1rem; }
      .footer { flex-direction: column; text-align: center; }
    }
    @media (max-width: 480px) {
      .hero { min-height: 85vh; }
      .hero h1 { letter-spacing: -0.5px; }
      .hero-btns { flex-direction: column; align-items: center; }
      .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
    }
  `;

  const heroLines = theme.heroHeadline.split('\n');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* Preview Banner */}
      <div className="preview-banner">
        🚀 Free Preview — Built by Maverick Innovations · maverickinnovates.com
      </div>

      {/* Nav */}
      <nav className="nav">
        <div className="nav-logo">
          {companyName.split(' ').slice(0, 2).join(' ')}{' '}
          <span>{companyName.split(' ').slice(2).join(' ')}</span>
        </div>
        <div className="nav-phone">
          {phone && (
            <a href={`tel:${phoneDigits}`} className="nav-cta">
              📞 {phone}
            </a>
          )}
          {!phone && (
            <a href="#contact" className="nav-cta">Get in Touch</a>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-stars">
            <span className="stars">★★★★★</span>
            <span>4.9 · 200+ Google Reviews</span>
          </div>
          <div className="hero-badge">{theme.badge}</div>
          <h1>
            {heroLines.map((line, i) => (
              <span key={i}>
                {i === 0 ? line : <em>{line}</em>}
                {i < heroLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="hero-sub">{theme.heroSub}</p>
          <div className="hero-btns">
            {phone ? (
              <a href={`tel:${phoneDigits}`} className="btn-primary">📞 {theme.cta}</a>
            ) : (
              <a href="#contact" className="btn-primary">{theme.cta}</a>
            )}
            <a href="#services" className="btn-secondary">View Services ↓</a>
          </div>
          {location && <p className="hero-location">📍 Serving {location}</p>}
        </div>
      </section>

      {/* Stats */}
      <div className="stats-strip">
        <div className="stats-inner">
          {theme.stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-n">{s.n}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div id="services" className="section">
        <div className="section-tag">What We Offer</div>
        <div className="section-title">Our Services</div>
        <p className="section-sub">
          Everything you need, handled by experts who take pride in their work.
        </p>
        <div className="services-grid">
          {theme.services.map((s) => (
            <div key={s.name} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <div className="service-name">{s.name}</div>
              <div className="service-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-section">
        <div className="why-inner">
          <div>
            <div className="section-tag">Why Choose Us</div>
            <div className="section-title" style={{ marginBottom: '16px' }}>
              The {location.split(' ')[0] || 'Local'} Team<br />
              <em style={{ fontStyle: 'normal', color: theme.accent }}>You Can Count On</em>
            </div>
            <p style={{ opacity: 0.65, lineHeight: 1.7, maxWidth: '440px' }}>
              {theme.tagline} We treat every customer like family and every job like it has our name on it — because it does.
            </p>
          </div>
          <ul className="why-checklist">
            {theme.whyUs.map((item) => (
              <li key={item}>
                <div className="check-icon">✓</div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-bg">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-tag">What Clients Say</div>
          <div className="section-title">Real Reviews. Real Results.</div>
        </div>
        <div className="testimonials-grid">
          {theme.testimonials.map((r) => (
            <div key={r.name} className="review-card">
              <div className="review-stars">{'★'.repeat(r.stars)}</div>
              <p className="review-text">{r.text}</p>
              <div className="review-author">
                <div className="review-avatar">{r.name[0]}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-source">Google Review · {location || 'Local Customer'}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section" id="contact">
        <div className="cta-inner">
          <h2>Ready to Get Started?</h2>
          <p>
            Give us a call or stop by. We're always happy to help.
          </p>
          {phone ? (
            <a href={`tel:${phoneDigits}`} className="cta-phone">{phone}</a>
          ) : (
            <span className="cta-phone" style={{ cursor: 'default' }}>Call Us Today</span>
          )}
          {phone && (
            <a href={`tel:${phoneDigits}`} className="btn-primary" style={{ display: 'inline-flex' }}>
              📞 {theme.cta}
            </a>
          )}
          {!phone && (
            <a href="https://maverickinnovates.com" className="btn-primary" style={{ display: 'inline-flex' }}>
              Contact Us
            </a>
          )}
          <p className="cta-hours" dangerouslySetInnerHTML={{ __html: theme.hours }} />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">{companyName}{location ? ` · ${location}` : ''}</div>
        <div className="footer-right">
          Preview built by{' '}
          <a href="https://maverickinnovates.com" target="_blank" rel="noopener noreferrer">
            Maverick Innovations
          </a>
        </div>
      </footer>
    </>
  );
}

// ─── Data Fetching ────────────────────────────────────────────────────────────

export async function getServerSideProps({ params }) {
  const { slug } = params;

  if (!/^[a-z0-9-]+$/.test(slug || '')) {
    return { props: { config: {}, error: 'Invalid preview URL.' } };
  }

  try {
    const previewsDir = path.join(process.cwd(), 'previews');
    const filePath = path.join(previewsDir, `${slug}.json`);

    if (!fs.existsSync(filePath)) {
      return { props: { config: {}, error: `Preview "${slug}" not found. The link may have expired.` } };
    }

    const raw = fs.readFileSync(filePath, 'utf8');
    const config = JSON.parse(raw);

    return { props: { config, error: null } };
  } catch (e) {
    return { props: { config: {}, error: 'Failed to load preview.' } };
  }
}
