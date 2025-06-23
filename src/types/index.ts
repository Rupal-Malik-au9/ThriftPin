// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  pinterestConnected: boolean;
}

// Pinterest Board types
export interface PinterestBoard {
  id: string;
  name: string;
  description?: string;
  url: string;
  pins: Pin[];
  coverImage: string;
  style: StyleTag[];
}

export interface Pin {
  id: string;
  title: string;
  imageUrl: string;
  sourceUrl?: string;
  description?: string;
}

// Style and preferences
export type StyleTag = 
  | 'boho' 
  | 'vintage' 
  | 'minimal' 
  | 'artsy' 
  | 'cottagecore' 
  | 'grunge' 
  | 'modern' 
  | 'romantic' 
  | 'gothic' 
  | 'streetwear';

export interface UserPreferences {
  priceRange: {
    min: number;
    max: number;
  };
  styleTags: StyleTag[];
  size?: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  message?: string;
}

// Thrifter types
export interface Thrifter {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  totalReviews: number;
  specialties: StyleTag[];
  bio: string;
  verified: boolean;
  responseTime: string; // e.g., "Usually responds within 2 hours"
}

// Order and offer types
export interface ThriftOffer {
  id: string;
  thrifterId: string;
  thrifter: Thrifter;
  boardId: string;
  priceRange: {
    min: number;
    max: number;
  };
  estimatedItems: string[];
  deliveryTime: string;
  message: string;
  createdAt: Date;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
}

export interface Order {
  id: string;
  userId: string;
  thrifterId: string;
  thrifter: Thrifter;
  boardId: string;
  board: PinterestBoard;
  offer: ThriftOffer;
  status: 'pending_payment' | 'paid' | 'preparing' | 'shipped' | 'delivered' | 'completed' | 'cancelled';
  paymentStatus: 'partial' | 'full' | 'refunded';
  totalAmount: number;
  paidAmount: number;
  createdAt: Date;
  shippedAt?: Date;
  deliveredAt?: Date;
  trackingNumber?: string;
}

// Rating and review types
export interface Review {
  id: string;
  orderId: string;
  userId: string;
  thrifterId: string;
  rating: number; // 1-5
  comment?: string;
  images?: string[];
  createdAt: Date;
}

// Board submission types
export interface BoardSubmission {
  id: string;
  userId: string;
  boardUrl: string;
  preferences: UserPreferences;
  status: 'processing' | 'active' | 'matched' | 'completed';
  board?: PinterestBoard;
  offers: ThriftOffer[];
  createdAt: Date;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Mock data helpers
export interface MockData {
  users: User[];
  thrifters: Thrifter[];
  boards: PinterestBoard[];
  offers: ThriftOffer[];
  orders: Order[];
  reviews: Review[];
}