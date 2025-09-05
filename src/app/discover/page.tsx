"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, Pin, Sparkles, TrendingUp, Eye, ShoppingBag, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const thriftItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop&crop=center",
    price: "$35",
    pinned: true,
    category: "Jackets",
    likes: 124,
    views: 892,
  },
  {
    id: 2,
    title: "Retro Floral Dress",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop&crop=center",
    price: "$28",
    pinned: false,
    category: "Dresses",
    likes: 89,
    views: 654,
  },
  {
    id: 3,
    title: "Classic Leather Bag",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center",
    price: "$40",
    pinned: false,
    category: "Bags",
    likes: 156,
    views: 1023,
  },
  {
    id: 4,
    title: "Boho Maxi Skirt",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=400&h=500&fit=crop&crop=center",
    price: "$22",
    pinned: true,
    category: "Skirts",
    likes: 203,
    views: 1456,
  },
  {
    id: 5,
    title: "Oversized Wool Sweater",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&crop=center",
    price: "$32",
    pinned: false,
    category: "Sweaters",
    likes: 78,
    views: 432,
  },
  {
    id: 6,
    title: "High-Waisted Mom Jeans",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop&crop=center",
    price: "$38",
    pinned: false,
    category: "Jeans",
    likes: 167,
    views: 987,
  }
];

const categories = ["All", "Jackets", "Dresses", "Bags", "Skirts", "Sweaters", "Jeans"];

export default function DiscoverPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedItems, setLikedItems] = useState(new Set());
  const [showStartPinning, setShowStartPinning] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<null | typeof thriftItems[0]>(null);
  const router = useRouter();
  const filteredItems = thriftItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleHeartClick = (itemId:number) => {
    setLikedItems(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(itemId)) {
        newLiked.delete(itemId);
      } else {
        newLiked.add(itemId);
      }
      return newLiked;
    });
  };

const handleStartPinning = () => {
  setShowStartPinning(true);

  const likedItemsList = Array.from(likedItems)
    .map(id => thriftItems.find(item => item.id === id)?.title)
    .filter(Boolean);

  if (likedItemsList.length > 0) {
    alert(`🎉 Taking you to sign-up!\n\nYour ${likedItemsList.length} liked items will be saved:\n• ${likedItemsList.join('\n• ')}\n\nAfter signing up, you'll be able to:\n✓ Save items to collections\n✓ Get notified of similar finds\n✓ Connect with sellers\n✓ Build your thrift profile`);
  } else {
    alert("🎉 Taking you to sign-up!\n\nAfter creating your account, you'll be able to:\n✓ Save items you love\n✓ Get personalized recommendations\n✓ Follow your favorite sellers\n✓ Build thrift collections");
  }

  // Redirect immediately (your spinner stays visible while navigation happens)
  router.push("/onboard");
};

  const handleItemDetailModalOpen = (itemId:number) => {
    const item = thriftItems.find(item => item.id === itemId);
    if (item) setSelectedItem(item);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 text-6xl opacity-10 pointer-events-none hidden lg:block"
      >
        👗
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-40 left-10 text-4xl opacity-10 pointer-events-none hidden lg:block"
      >
        👜
      </motion.div>

      {/* Hero Section */}
      <section className="text-center mb-12 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
          >
            Discover Your Next
            <motion.span
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="inline-block ml-3"
            >
              ✨
            </motion.span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mt-2"
          >
            Thrift Treasure
          </motion.h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Browse curated thrift finds inspired by your Pinterest style. Every pin
          brings you closer to your dream wardrobe.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center gap-8 mt-8 text-sm text-gray-500"
        >
          <div className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4" />
            <span>1.2K items discovered today</span>
          </div>
          <div className="flex items-center gap-1">
            <Sparkles className="h-4 w-4" />
            <span>95% sustainability score</span>
          </div>
        </motion.div>
      </section>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative max-w-lg mx-auto"
        >
          <input
            type="text"
            placeholder="Search thrift finds..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border-2 border-gray-200 px-5 py-3 pl-12 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition-all duration-200"
          />
          <Search className="absolute top-3.5 left-4 h-5 w-5 text-gray-400" />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center gap-2 flex-wrap"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-purple-300 hover:text-purple-600"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Thrift Items Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <AnimatePresence mode="wait">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setHoveredItem(item.id as number)}
              onHoverEnd={() => setHoveredItem(null)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-gray-800 px-4 py-2 rounded-full font-medium shadow-lg"
                    onClick={()=>handleItemDetailModalOpen(item.id)}
                  >
                    <Eye className="h-4 w-4 inline mr-2" />
                    Quick View
                  </motion.button>
                </motion.div>

                {/* Pinned Badge - moved to top right corner */}
                {item.pinned && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-full shadow-lg"
                    title="Pinned item - highly recommended!"
                  >
                    <Pin className="h-4 w-4" />
                  </motion.div>
                )}

                {/* Stats */}
                <div className="absolute bottom-3 left-3 flex gap-2 text-white text-xs">
                  <span className="bg-black bg-opacity-50 px-2 py-1 rounded-full">
                    👀 {item.views}
                  </span>
                  <span className="bg-black bg-opacity-50 px-2 py-1 rounded-full">
                    💕 {item.likes}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-800 text-lg">{item.title}</h3>
                      {item.pinned && (
                        <div className="flex items-center gap-1 bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs border border-blue-200">
                          <Pin className="h-3 w-3" />
                          <span>Pinned</span>
                        </div>
                      )}
                    </div>
                    <p className="text-purple-600 font-bold text-lg">{item.price}</p>
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full mt-1">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Heart Button with Tooltip */}
                  <div className="relative group/heart">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleHeartClick(item.id)}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Heart
                        className={`h-5 w-5 transition-colors duration-200 ${
                          likedItems.has(item.id)
                            ? "text-red-500 fill-red-500"
                            : "text-gray-400 hover:text-red-500"
                        }`}
                      />
                    </motion.button>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/heart:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {likedItems.has(item.id) ? "Remove from favorites" : "Add to favorites"}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center relative"
      >
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 mb-8">
          <motion.h2
            animate={{ 
              backgroundPosition: ["0%", "100%", "0%"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
            style={{ backgroundSize: "200%" }}
          >
            Ready to Start Your Thrift Journey?
          </motion.h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Join thousands of fashion lovers discovering unique pieces and building sustainable wardrobes.
          </p>
          
          <AnimatePresence>
            {!showStartPinning ? (
              <motion.button
                key="start-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartPinning}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-lg"
              >
                <ShoppingBag className="h-5 w-5" />
                Start Pinning Thrift Finds
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            ) : (
              <motion.div
                key="success-animation"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-2xl shadow-lg font-medium text-lg"
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ✨
                </motion.span>
                Getting Ready...
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Floating Hearts Animation */}
      <AnimatePresence>
        {Array.from(likedItems).map((itemId) => (
          <motion.div
            key={`heart-${itemId}`}
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: -100
            }}
            transition={{ duration: 1.5 }}
            className="fixed top-1/2 left-1/2 pointer-events-none z-50"
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>
       {/* ================== MODAL ================== */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl max-w-lg w-full shadow-xl overflow-hidden relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>

              {/* Image */}
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-64 object-cover"
                width={400}
                height={256}
              />

              {/* Details */}
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-bold text-gray-800">{selectedItem.title}</h2>
                <p className="text-purple-600 text-xl font-semibold">{selectedItem.price}</p>
                <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                  {selectedItem.category}
                </span>

                <div className="flex gap-4 mt-3 text-sm text-gray-500">
                  <span>👀 {selectedItem.views} views</span>
                  <span>💕 {selectedItem.likes} likes</span>
                </div>

                {/* Actions */}
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleHeartClick(selectedItem.id)}
                    className="flex-1 bg-pink-500 text-white py-2 rounded-xl font-medium hover:bg-pink-600 transition"
                  >
                    {likedItems.has(selectedItem.id) ? "❤️ Liked" : "🤍 Like"}
                  </button>
                  <button className="flex-1 bg-purple-600 text-white py-2 rounded-xl font-medium hover:bg-purple-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}