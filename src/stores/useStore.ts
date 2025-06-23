import { create } from 'zustand'
import { User, PinterestBoard, ThriftOffer, Order, Thrifter, BoardSubmission, UserPreferences } from '@/types'
import { mockUsers, mockBoards, mockOffers, mockOrders, mockThrifters } from '@/data/mockData'

interface AppState {
  // User state
  currentUser: User | null
  isAuthenticated: boolean
  
  // Board state
  linkedBoards: PinterestBoard[]
  activeBoard: PinterestBoard | null
  boardSubmissions: BoardSubmission[]
  
  // Offers state
  offers: ThriftOffer[]
  
  // Orders state
  orders: Order[]
  
  // Thrifter state (for thrifter dashboard)
  isThrifterMode: boolean
  availableBoards: BoardSubmission[]
  
  // Actions
  setCurrentUser: (user: User | null) => void
  linkBoard: (board: PinterestBoard, preferences: UserPreferences) => void
  setActiveBoard: (board: PinterestBoard | null) => void
  addOffer: (offer: ThriftOffer) => void
  acceptOffer: (offerId: string) => void
  declineOffer: (offerId: string) => void
  updateOrderStatus: (orderId: string, status: Order['status']) => void
  toggleThrifterMode: () => void
  submitBoardOffer: (boardId: string, offer: Omit<ThriftOffer, 'id' | 'createdAt' | 'status'>) => void
}

export const useStore = create<AppState>((set, get) => ({
  // Initial state
  currentUser: mockUsers[0], // For demo purposes, start logged in
  isAuthenticated: true,
  linkedBoards: mockBoards,
  activeBoard: null,
  boardSubmissions: [
    {
      id: 'submission1',
      userId: 'user1',
      boardUrl: mockBoards[0].url,
      preferences: {
        priceRange: { min: 2000, max: 5000 },
        styleTags: ['boho', 'vintage'],
        size: 'M',
        message: 'Looking for unique pieces that match my boho aesthetic!',
      },
      status: 'active',
      board: mockBoards[0],
      offers: mockOffers,
      createdAt: new Date(),
    },
  ],
  offers: mockOffers,
  orders: mockOrders,
  isThrifterMode: false,
  availableBoards: [
    {
      id: 'submission1',
      userId: 'user1',
      boardUrl: mockBoards[0].url,
      preferences: {
        priceRange: { min: 2000, max: 5000 },
        styleTags: ['boho', 'vintage'],
        size: 'M',
        message: 'Looking for unique pieces that match my boho aesthetic!',
      },
      status: 'active',
      board: mockBoards[0],
      offers: [],
      createdAt: new Date(),
    },
  ],

  // Actions
  setCurrentUser: (user) => set({ currentUser: user, isAuthenticated: !!user }),
  
  linkBoard: (board, preferences) => set((state) => {
    const newSubmission: BoardSubmission = {
      id: `submission_${Date.now()}`,
      userId: state.currentUser?.id || '',
      boardUrl: board.url,
      preferences,
      status: 'processing',
      board,
      offers: [],
      createdAt: new Date(),
    }
    
    return {
      linkedBoards: [...state.linkedBoards, board],
      boardSubmissions: [...state.boardSubmissions, newSubmission],
    }
  }),
  
  setActiveBoard: (board) => set({ activeBoard: board }),
  
  addOffer: (offer) => set((state) => ({
    offers: [...state.offers, { ...offer, id: `offer_${Date.now()}`, createdAt: new Date(), status: 'pending' }],
  })),
  
  acceptOffer: (offerId) => set((state) => {
    const offer = state.offers.find(o => o.id === offerId)
    if (!offer) return state
    
    // Create new order
    const newOrder: Order = {
      id: `order_${Date.now()}`,
      userId: state.currentUser?.id || '',
      thrifterId: offer.thrifterId,
      thrifter: offer.thrifter,
      boardId: offer.boardId,
      board: state.linkedBoards.find(b => b.id === offer.boardId) || mockBoards[0],
      offer,
      status: 'pending_payment',
      paymentStatus: 'partial',
      totalAmount: (offer.priceRange.min + offer.priceRange.max) / 2,
      paidAmount: 0,
      createdAt: new Date(),
    }
    
    return {
      offers: state.offers.map(o => o.id === offerId ? { ...o, status: 'accepted' as const } : o),
      orders: [...state.orders, newOrder],
    }
  }),
  
  declineOffer: (offerId) => set((state) => ({
    offers: state.offers.map(o => o.id === offerId ? { ...o, status: 'declined' as const } : o),
  })),
  
  updateOrderStatus: (orderId, status) => set((state) => ({
    orders: state.orders.map(o => o.id === orderId ? { ...o, status } : o),
  })),
  
  toggleThrifterMode: () => set((state) => ({ isThrifterMode: !state.isThrifterMode })),
  
  submitBoardOffer: (boardId, offerData) => set((state) => {
    const thrifter = mockThrifters.find(t => t.id === offerData.thrifterId)
    if (!thrifter) return state
    
    const newOffer: ThriftOffer = {
      ...offerData,
      thrifter,
      id: `offer_${Date.now()}`,
      createdAt: new Date(),
      status: 'pending',
    }
    
    return {
      offers: [...state.offers, newOffer],
      availableBoards: state.availableBoards.map(board => 
        board.id === boardId 
          ? { ...board, offers: [...board.offers, newOffer] }
          : board
      ),
    }
  }),
}))

// Selectors for easier access to computed values
export const useCurrentUser = () => useStore(state => state.currentUser)
export const useActiveBoard = () => useStore(state => state.activeBoard)
export const useOffersForBoard = (boardId: string) => 
  useStore(state => state.offers.filter(offer => offer.boardId === boardId))
export const useUserOrders = () => 
  useStore(state => state.orders.filter(order => order.userId === state.currentUser?.id))
export const useThrifterOrders = (thrifterId: string) =>
  useStore(state => state.orders.filter(order => order.thrifterId === thrifterId))