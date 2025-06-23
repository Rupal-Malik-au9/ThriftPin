import { Thrifter, PinterestBoard, ThriftOffer, StyleTag, User, Order, Review } from '@/types'

export const mockUsers: User[] = [
  {
    id: 'user1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b727566d?w=150&h=150&fit=crop&crop=face',
    pinterestConnected: true,
  },
]

export const mockThrifters: Thrifter[] = [
  {
    id: 'thrifter1',
    name: 'Maya Patel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 4.9,
    totalReviews: 127,
    specialties: ['boho', 'vintage', 'artsy'],
    bio: 'Vintage curator with 8+ years of thrifting experience. I specialize in boho-chic and artistic pieces from the 70s-90s.',
    verified: true,
    responseTime: 'Usually responds within 2 hours',
  },
  {
    id: 'thrifter2',
    name: 'Alex Chen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 4.8,
    totalReviews: 89,
    specialties: ['minimal', 'modern', 'streetwear'],
    bio: 'Minimalist fashion enthusiast. I find clean, contemporary pieces that make a statement through simplicity.',
    verified: true,
    responseTime: 'Usually responds within 4 hours',
  },
  {
    id: 'thrifter3',
    name: 'Luna Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 4.7,
    totalReviews: 203,
    specialties: ['romantic', 'cottagecore', 'vintage'],
    bio: 'Romantic vintage lover with an eye for delicate details. I curate dreamy pieces perfect for cottagecore aesthetics.',
    verified: true,
    responseTime: 'Usually responds within 1 hour',
  },
  {
    id: 'thrifter4',
    name: 'Jordan Smith',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    rating: 4.6,
    totalReviews: 156,
    specialties: ['grunge', 'gothic', 'streetwear'],
    bio: 'Alternative fashion specialist. I hunt for unique grunge and gothic pieces that tell a story.',
    verified: false,
    responseTime: 'Usually responds within 6 hours',
  },
]

export const mockPins = [
  {
    id: 'pin1',
    title: 'Bohemian Maxi Dress',
    imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop',
    sourceUrl: 'https://pinterest.com/pin/123',
    description: 'Flowy boho dress perfect for summer festivals',
  },
  {
    id: 'pin2',
    title: 'Vintage Denim Jacket',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop',
    sourceUrl: 'https://pinterest.com/pin/124',
    description: 'Classic 90s denim jacket with distressed details',
  },
  {
    id: 'pin3',
    title: 'Artsy Statement Earrings',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop',
    sourceUrl: 'https://pinterest.com/pin/125',
    description: 'Handmade ceramic earrings with artistic flair',
  },
  {
    id: 'pin4',
    title: 'Vintage Band Tee',
    imageUrl: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=600&fit=crop',
    sourceUrl: 'https://pinterest.com/pin/126',
    description: 'Authentic vintage band t-shirt from the 80s',
  },
  {
    id: 'pin5',
    title: 'Boho Layered Necklaces',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop',
    sourceUrl: 'https://pinterest.com/pin/127',
    description: 'Layered gold necklaces with natural stones',
  },
  {
    id: 'pin6',
    title: 'Vintage High-Waisted Jeans',
    imageUrl: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=600&fit=crop',
    sourceUrl: 'https://pinterest.com/pin/128',
    description: 'Perfect vintage mom jeans with high waist',
  },
]

export const mockBoards: PinterestBoard[] = [
  {
    id: 'board1',
    name: 'My Boho Style',
    description: 'Bohemian fashion inspiration for everyday looks',
    url: 'https://pinterest.com/sarah/my-boho-style',
    pins: mockPins.slice(0, 4),
    coverImage: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop',
    style: ['boho', 'vintage', 'artsy'],
  },
  {
    id: 'board2',
    name: 'Minimalist Wardrobe',
    description: 'Clean, simple pieces for a capsule wardrobe',
    url: 'https://pinterest.com/sarah/minimalist-wardrobe',
    pins: mockPins.slice(1, 5),
    coverImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop',
    style: ['minimal', 'modern'],
  },
]

export const mockOffers: ThriftOffer[] = [
  {
    id: 'offer1',
    thrifterId: 'thrifter1',
    thrifter: mockThrifters[0],
    boardId: 'board1',
    priceRange: { min: 2500, max: 4000 },
    estimatedItems: ['Vintage maxi dress', 'Boho jewelry set', 'Denim jacket', 'Artistic scarf'],
    deliveryTime: '5-7 days',
    message: "I love your boho aesthetic! I've found some amazing vintage pieces that would perfectly match your Pinterest board. Expect earthy tones and flowy fabrics.",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    status: 'pending',
  },
  {
    id: 'offer2',
    thrifterId: 'thrifter3',
    thrifter: mockThrifters[2],
    boardId: 'board1',
    priceRange: { min: 3000, max: 4500 },
    estimatedItems: ['Romantic blouse', 'Vintage skirt', 'Delicate accessories', 'Cottagecore cardigan'],
    deliveryTime: '3-5 days',
    message: "Your board screams romantic cottagecore! I have some dreamy pieces with lace details and floral patterns that would be perfect for you.",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    status: 'pending',
  },
]

export const mockOrders: Order[] = [
  {
    id: 'order1',
    userId: 'user1',
    thrifterId: 'thrifter1',
    thrifter: mockThrifters[0],
    boardId: 'board1',
    board: mockBoards[0],
    offer: mockOffers[0],
    status: 'shipped',
    paymentStatus: 'partial',
    totalAmount: 3500,
    paidAmount: 1750,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    shippedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    trackingNumber: 'TH123456789IN',
  },
]

export const mockReviews: Review[] = [
  {
    id: 'review1',
    orderId: 'order1',
    userId: 'user1',
    thrifterId: 'thrifter1',
    rating: 5,
    comment: 'Absolutely love everything Maya curated for me! The vintage denim jacket is my new favorite piece, and the boho accessories are perfect. She really understood my style from my Pinterest board.',
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop',
    ],
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
]

// Helper functions for mock data
export function getMockThrifterById(id: string): Thrifter | undefined {
  return mockThrifters.find(thrifter => thrifter.id === id)
}

export function getMockBoardById(id: string): PinterestBoard | undefined {
  return mockBoards.find(board => board.id === id)
}

export function getMockOffersForBoard(boardId: string): ThriftOffer[] {
  return mockOffers.filter(offer => offer.boardId === boardId)
}

export function getMockOrderById(id: string): Order | undefined {
  return mockOrders.find(order => order.id === id)
}

export const styleCollections = [
  {
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    title: "Cottagecore Dreams",
    curator: "Emma K.",
    rating: "4.9",
    tags: ["Floral", "Vintage", "Romantic"],
    boardStyle: "Soft pastels, flowing fabrics, vintage florals"
  },
  {
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop",
    title: "Dark Academia Vibes",
    curator: "Alex M.",
    rating: "4.8",
    tags: ["Academic", "Vintage", "Sophisticated"],
    boardStyle: "Tweed blazers, vintage books, autumn colors"
  },
  {
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=450&fit=crop",
    title: "Y2K Revival",
    curator: "Zoe L.",
    rating: "4.7",
    tags: ["Y2K", "Bold", "Nostalgic"],
    boardStyle: "Metallic textures, bold prints, 2000s nostalgia"
  },
  {
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=550&fit=crop",
    title: "Minimalist Chic",
    curator: "Sam R.",
    rating: "5.0",
    tags: ["Minimal", "Clean", "Modern"],
    boardStyle: "Clean lines, neutral tones, quality basics"
  },
  {
    image: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=400&h=480&fit=crop",
    title: "Desi Fusion Magic",
    curator: "Priya S.",
    rating: "4.8",
    tags: ["Indian", "Traditional", "Contemporary"],
    boardStyle: "Kurtas with jeans, oxidized jewelry, vibrant prints"
  },
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
    title: "Gen Z Chaos",
    curator: "Riley X.",
    rating: "4.6",
    tags: ["GenZ", "Eclectic", "Statement"],
    boardStyle: "Mix-match patterns, oversized fits, neon accents"
  },
  {
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
    title: "90s Grunge Revival",
    curator: "Casey J.",
    rating: "4.7",
    tags: ["90s", "Grunge", "Alternative"],
    boardStyle: "Flannel shirts, combat boots, distressed denim"
  },
  {
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=550&fit=crop",
    title: "Americana Classic",
    curator: "Jake M.",
    rating: "4.5",
    tags: ["American", "Classic", "Casual"],
    boardStyle: "Denim on denim, varsity jackets, vintage band tees"
  },
  {
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&h=480&fit=crop",
    title: "Soft Girl Aesthetic",
    curator: "Mia C.",
    rating: "4.9",
    tags: ["SoftGirl", "Kawaii", "Pastel"],
    boardStyle: "Pastel hoodies, heart accessories, cute patterns"
  },
  {
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=600&fit=crop",
    title: "Gothic Romance",
    curator: "Raven K.",
    rating: "4.6",
    tags: ["Gothic", "Dark", "Romantic"],
    boardStyle: "Black lace, velvet textures, silver accessories"
  },
  {
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=580&fit=crop",
    title: "Streetwear Supreme",
    curator: "Tyler K.",
    rating: "4.8",
    tags: ["Streetwear", "Urban", "Hypebeast"],
    boardStyle: "Oversized hoodies, chunky sneakers, bucket hats"
  },
  {
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=500&fit=crop",
    title: "Ethereal Fairy",
    curator: "Sage L.",
    rating: "4.9",
    tags: ["Fairycore", "Whimsical", "Natural"],
    boardStyle: "Flowing fabrics, nature motifs, delicate details"
  },
  {
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=480&fit=crop",
    title: "Cottagecore Academia",
    curator: "Willow G.",
    rating: "4.8",
    tags: ["Academia", "Cottagecore", "Scholarly"],
    boardStyle: "Cardigans, books, warm browns, cozy textures"
  },
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=550&fit=crop",
    title: "Art Hoe Vintage",
    curator: "Indie A.",
    rating: "4.7",
    tags: ["ArtHoe", "Vintage", "Creative"],
    boardStyle: "Thrifted tees, vintage jeans, artistic prints"
  },
  {
    image: "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?w=400&h=500&fit=crop",
    title: "Royal Indian Elegance",
    curator: "Maharani D.",
    rating: "4.9",
    tags: ["Indian", "Royal", "Elegant"],
    boardStyle: "Heavy silk lehengas, gold jewelry, rich colors"
  },
  {
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=580&fit=crop",
    title: "California Surf Vibes",
    curator: "Ocean B.",
    rating: "4.6",
    tags: ["Surf", "Casual", "Beachy"],
    boardStyle: "Flowy tops, denim shorts, natural textures"
  },
  {
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=450&fit=crop",
    title: "Southern Belle Charm",
    curator: "Magnolia S.",
    rating: "4.7",
    tags: ["Southern", "Classic", "Feminine"],
    boardStyle: "Sundresses, pearls, sweet pastels, florals"
  }
];
