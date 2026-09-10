import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'cattle-trough-heavy-45',
    name: 'Heavy-Duty Cattle Feeding Trough (4.5m)',
    afrikaansName: 'Swaardiens Beeskrip (4.5m)',
    category: 'cattle',
    shortDesc: 'Reinforced high-capacity feed trough engineered for beef herds, feedlots, and dairy operations.',
    description: 'Constructed with heavy-gauge hot-rolled structural steel tubing and ultra-durable, high-density UV-stabilized polymer lining. Built with a broad, tip-resistant skid base to allow easy towing across camps without ground digging or structural deformation.',
    dimensions: '4500mm (L) x 850mm (W) x 620mm (H)',
    capacity: 'Approx. 950 Liters / 30-35 Cattle',
    suitableFor: 'Adult Cattle, Bulls, Dairy Cows, Weaners',
    material: 'Heavy Galvanized/Painted Tubular Steel Frame + Food-Grade UV-Trough',
    featured: true,
    image: './products/cattle-trough.jpg',
    specs: {
      length: '4.5 meters',
      width: '850 mm',
      depth: '420 mm trough depth',
      steelFrame: '48mm x 2.5mm Round / Square Tubing with gusseted feet',
      troughMaterial: 'UV-Stabilized High Impact Polymer with curved anti-spill lip',
      drainPlug: true,
      skids: true
    }
  },
  {
    id: 'cattle-trough-standard-30',
    name: 'Standard Cattle Feeding Trough (3.0m)',
    afrikaansName: 'Standaard Beeskrip (3.0m)',
    category: 'cattle',
    shortDesc: 'Versatile, easy-to-relocate feed trough ideal for kraals, weaning camps, and smallholdings.',
    description: 'Designed for quick relocation and daily feeding. Rounded trough interior prevents feed buildup in corners, eliminating mold and feed waste while ensuring tongue and mouth safety.',
    dimensions: '3000mm (L) x 800mm (W) x 600mm (H)',
    capacity: 'Approx. 620 Liters / 18-22 Cattle',
    suitableFor: 'Cattle, Large Calves, Feedlots',
    material: 'Reinforced Steel Frame + High-Strength Trough Liner',
    featured: false,
    image: './products/cattle-trough.jpg',
    specs: {
      length: '3.0 meters',
      width: '800 mm',
      depth: '400 mm',
      steelFrame: 'Solid welded tubular frame with central brace',
      troughMaterial: 'Corrosion-proof agricultural polymer',
      drainPlug: true,
      skids: true
    }
  },
  {
    id: 'sheep-trough-premium-30',
    name: 'Sheep & Small Stock Feeding Trough (3.0m)',
    afrikaansName: 'Skaap- & Kleinveekrip (3.0m)',
    category: 'sheep',
    shortDesc: 'Anti-waste low-profile trough designed specifically for sheep, goats, and lambs.',
    description: 'Engineered at optimal shoulder height for sheep to feed comfortably without stepping into the feed. The specialized inward-curved lip stops animals from flicking grain or pellets onto the soil, significantly reducing feed costs.',
    dimensions: '3000mm (L) x 480mm (W) x 380mm (H)',
    capacity: 'Approx. 280 Liters / 24-30 Sheep',
    suitableFor: 'Sheep, Goats, Lambs, Rams',
    material: 'Galvanized Steel Chassis + Impact-Grade Polymer',
    featured: true,
    image: './products/sheep-trough.jpg',
    specs: {
      length: '3.0 meters',
      width: '480 mm',
      depth: '260 mm',
      steelFrame: 'Lightweight yet rigid structural steel framing with ground runners',
      troughMaterial: 'Smooth non-porous polymer, effortless power-washing',
      drainPlug: true,
      skids: true
    }
  },
  {
    id: 'sheep-trough-highcap-45',
    name: 'High-Capacity Sheep Feed & Lick Trough (4.5m)',
    afrikaansName: 'Groot Skaapkrip (4.5m)',
    category: 'sheep',
    shortDesc: 'Extended length trough for larger flocks, pasture supplementation, and wool sheep.',
    description: 'Accommodates up to 45 sheep simultaneously. Equipped with dual-end lifting handles and reinforced base runners to slide across paddocks effortlessly with a bakkie or quad bike.',
    dimensions: '4500mm (L) x 500mm (W) x 400mm (H)',
    capacity: 'Approx. 440 Liters / 40-45 Sheep',
    suitableFor: 'Sheep Flocks, Boer Goats, Feedlot Finishing',
    material: 'Tubular Steel + Anti-UV Composite',
    featured: false,
    image: './products/sheep-trough.jpg',
    specs: {
      length: '4.5 meters',
      width: '500 mm',
      depth: '280 mm',
      steelFrame: 'Heavy duty 38mm frame with dual cross-struts',
      troughMaterial: 'UV8 stabilized weather-shield liner',
      drainPlug: true,
      skids: true
    }
  },
  {
    id: 'water-trough-automatic',
    name: 'Automatic Float-Valve Water Trough (500L)',
    afrikaansName: 'Outomatiese Waterkrip met Vlotterklep (500L)',
    category: 'water',
    shortDesc: 'Reliable freshwater reservoir with steel-shielded valve box to prevent livestock tampering.',
    description: 'Ensures constant clean water pressure. Features a lockable heavy steel guard over the brass float valve preventing cattle from chewing or kicking the supply mechanism. Complete with brass drain plug for quick flushing.',
    dimensions: '2200mm (L) x 700mm (W) x 550mm (H)',
    capacity: '500 Liters / Continuous Auto-Fill',
    suitableFor: 'Mixed Herds, Cattle, Sheep, Horses',
    material: 'Reinforced Steel Base + Heavy Polymer Tank + Stainless/Brass Valve Guard',
    featured: true,
    image: './products/cattle-trough.jpg',
    specs: {
      length: '2.2 meters',
      width: '700 mm',
      depth: '500 mm',
      steelFrame: 'Integrated low-center-of-gravity ballast frame',
      troughMaterial: 'Algae-resistant, food-safe high-grade polymer',
      drainPlug: true,
      skids: true
    }
  },
  {
    id: 'mineral-lick-feeder',
    name: 'Circular Weatherproof Lick & Mineral Feeder',
    afrikaansName: 'Ronde Weerbestande Likkrip',
    category: 'lick',
    shortDesc: 'Round lick trough with rotating rain canopy to protect valuable dry licks, urea, and blocks.',
    description: 'Guards mineral supplements against soaking summer rains and dust storms. The freely rotating weather vane hood automatically turns its back to wind and rain, keeping mineral powder and lick blocks bone dry.',
    dimensions: '1200mm (Diameter) x 1150mm (H)',
    capacity: '120kg Mineral Powder / Block Feeder',
    suitableFor: 'Cattle, Sheep, Goats, Winter Lick Supplementation',
    material: 'Galvanized Base + Weather-Vane Hood',
    featured: false,
    image: './products/sheep-trough.jpg',
    specs: {
      length: '1.2m diameter',
      width: '1.2m diameter',
      depth: '250mm trough depth',
      steelFrame: 'Wide-spread triangular non-tipping base',
      troughMaterial: 'Salt and urea corrosion-proof polymer basin',
      drainPlug: true,
      skids: false
    }
  },
  {
    id: 'custom-farm-solutions',
    name: 'Custom Agricultural Fabrication & Sizing',
    afrikaansName: 'Pasgemaakte Plaas Vervaardiging & Krippe',
    category: 'custom',
    shortDesc: 'Bespoke dimensions, custom kraal configurations, and mobile feed trailers.',
    description: 'Every South African farm has unique terrain and herd numbers. We fabricate custom trough lengths, specialized fence-line waterers, mobile camp feeders, and multi-tier calf feeding stations built to your exact specifications.',
    dimensions: 'Custom built to farmer requirements',
    capacity: 'Customizable up to 2,500 Liters',
    suitableFor: 'Feedlots, Stud Breeders, Custom Kraals',
    material: 'Heavy structural steel, hot-dip galvanizing available upon request',
    featured: true,
    image: './products/cattle-trough.jpg',
    specs: {
      length: 'Custom (2m to 12m+)',
      width: 'Custom specification',
      depth: 'Tailored for target livestock',
      steelFrame: 'Custom heavy wall steel tubing',
      troughMaterial: 'Polymer or steel plate options',
      drainPlug: true,
      skids: true
    }
  }
];

export const COMPANY_DETAILS = {
  name: 'Van Wyk Krippe',
  tagline: 'Livestock Solutions',
  subheading: 'Durable, reliable feeding and water troughs built for South African farms.',
  motto: 'Livestock solutions you can rely on.',
  address: 'No. 32 9de Weg, Industria, Kroonstad, 9499, South Africa',
  primaryPhone: '078 364 4383',
  primaryPhoneClean: '27783644383',
  contacts: [
    {
      name: 'Frans van Wyk',
      title: 'Sales & Client Relations',
      phone: '078 364-4383',
      cleanPhone: '27783644383',
      whatsappMessage: 'Goeiedag Frans, ek stel belang in Van Wyk Krippe vir my plaas.'
    },
    {
      name: 'Steven',
      title: 'Technical & Dispatch',
      phone: '081 088 3945',
      cleanPhone: '27810883945',
      whatsappMessage: 'Goeiedag Steven, ek benodig inligting rakende Van Wyk Krippe aflewering en pryse.'
    }
  ],
  email: 'admin@vanwykkrippe.co.za',
  values: [
    {
      emoji: '🌾',
      title: 'Strong. Practical. Reliable.',
      desc: 'Tested under the harshest African sun, freezing Free State winters, and intense animal pressure.'
    },
    {
      emoji: '🐄',
      title: 'Made for livestock.',
      desc: 'Engineered with safe rolled edges, ergonomic heights, and zero toxic chemical coatings.'
    },
    {
      emoji: '🤎',
      title: 'Built for the people who work the land.',
      desc: 'Low maintenance, easy to move, simple to clean, and constructed to last for generations.'
    }
  ],
  pillars: [
    {
      id: 'quality',
      title: 'Quality Products',
      subtitle: 'Gehalte Produkte',
      icon: 'ShieldCheck',
      desc: 'Only the highest grade UV-stabilized liners and structural steel framing are selected. Guaranteed not to crack or rot.'
    },
    {
      id: 'practical',
      title: 'Practical Solutions',
      subtitle: 'Praktiese Oplossings',
      icon: 'Wrench',
      desc: 'Towing skids, rounded corners for easy shoveling and cleaning, and quick-drain brass outlets for fast hygiene.'
    },
    {
      id: 'construction',
      title: 'Strong Construction',
      subtitle: 'Sterk Konstruksie',
      icon: 'Hammer',
      desc: 'Heavy-gauge steel tubing, reinforced stress points, and anti-tipping wide stance that resists heavy bulls.'
    },
    {
      id: 'farm',
      title: 'Built for the Farm',
      subtitle: 'Gebou vir die Plaas',
      icon: 'Sprout',
      desc: 'Designed by people who understand the reality of farming — practical tools that save feed and conserve water.'
    }
  ]
};
