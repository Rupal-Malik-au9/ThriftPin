"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Heart, 
  User, 
  Mail, 
  Lock, 
  MapPin, 
  Sparkles, 
  CheckCircle,
  TrendingUp,
  ShoppingBag,
  Star,
  Pin,
  Camera,
  Bell,
  Settings,
  Home
} from "lucide-react";

// Sample data from the discover page
const likedItems = [
  { id: 1, title: "Vintage Denim Jacket", category: "Jackets", price: "$35", style: ["vintage", "casual"] },
  { id: 4, title: "Boho Maxi Skirt", category: "Skirts", price: "$22", style: ["boho", "flowing"] },
  { id: 2, title: "Retro Floral Dress", category: "Dresses", price: "$28", style: ["retro", "floral"] }
];

const steps = [
  "welcome",
  "signup", 
  "style-analysis",
  "profile-setup",
  "preferences",
  "first-collection",
  "dashboard"
];

export default function ThriftOnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    location: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    nextStep();
  };

  const currentStepName = steps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center py-20"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-12 h-12 border-4 border-purple-200 border-t-purple-500 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600">Creating your personalized experience...</p>
              </div>
            </motion.div>
          )}

          {!isLoading && (
            <>
              {/* Step 1: Welcome */}
              {currentStepName === "welcome" && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl mb-6"
                  >
                    🎉
                  </motion.div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Welcome to Your Thrift Journey!
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    We noticed you hearted {likedItems.length} amazing items! Let's create your account 
                    and build a personalized thrift experience just for you.
                  </p>
                  
                  <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg max-w-md mx-auto">
                    <h3 className="font-semibold text-gray-800 mb-3">Your Selected Items:</h3>
                    {likedItems.map(item => (
                      <div key={item.id} className="flex items-center gap-3 mb-2">
                        <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                        <span className="text-sm text-gray-700">{item.title} - {item.price}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextStep}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-2xl shadow-lg font-medium text-lg flex items-center gap-2 mx-auto"
                  >
                    Let's Get Started <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </motion.div>
              )}

              {/* Step 2: Sign Up */}
              {currentStepName === "signup" && (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="max-w-md mx-auto"
                >
                  <div className="text-center mb-8">
                    <User className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
                    <p className="text-gray-600 mt-2">Join the sustainable fashion community</p>
                  </div>

                  <form onSubmit={handleSignUp} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="password"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Create a password"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location (Optional)
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            value={formData.location}
                            onChange={(e) => setFormData({...formData, location: e.target.value})}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="City, State"
                          />
                        </div>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium mt-6 shadow-lg"
                    >
                      Create Account
                    </motion.button>
                  </form>
                </motion.div>
              )}

              {/* Step 3: Style Analysis */}
              {currentStepName === "style-analysis" && (
                <motion.div
                  key="analysis"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                    className="text-6xl mb-6"
                  >
                    🔮
                  </motion.div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Analyzing Your Style...
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Our AI is studying your liked items to understand your unique fashion taste
                  </p>

                  <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
                    <h3 className="font-semibold text-gray-800 mb-4">Style Analysis Results:</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-purple-50 rounded-xl p-4">
                        <Sparkles className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                        <h4 className="font-medium text-purple-900">Style Preference</h4>
                        <p className="text-sm text-purple-700 mt-1">Vintage Boho</p>
                      </div>
                      <div className="bg-pink-50 rounded-xl p-4">
                        <TrendingUp className="h-8 w-8 text-pink-500 mx-auto mb-2" />
                        <h4 className="font-medium text-pink-900">Price Range</h4>
                        <p className="text-sm text-pink-700 mt-1">$20 - $40</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4">
                        <ShoppingBag className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                        <h4 className="font-medium text-blue-900">Categories</h4>
                        <p className="text-sm text-blue-700 mt-1">Dresses, Skirts</p>
                      </div>
                    </div>

                    <div className="text-left">
                      <p className="text-sm text-gray-600 mb-2"><strong>Keywords detected:</strong></p>
                      <div className="flex flex-wrap gap-2">
                        {["Vintage", "Boho", "Floral", "Flowing", "Retro", "Casual"].map(tag => (
                          <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={nextStep}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-2xl shadow-lg font-medium text-lg flex items-center gap-2 mx-auto mt-8"
                  >
                    Perfect! Continue <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </motion.div>
              )}

              {/* Step 4: Profile Setup */}
              {currentStepName === "profile-setup" && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="text-center mb-8">
                    <Camera className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900">Complete Your Profile</h2>
                    <p className="text-gray-600 mt-2">Help others discover your amazing finds</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          {formData.name.charAt(0) || "U"}
                        </div>
                        <button className="absolute -bottom-1 -right-1 bg-white rounded-full p-2 shadow-lg border">
                          <Camera className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{formData.name || "User"}</h3>
                        <p className="text-gray-600">@{formData.name.toLowerCase().replace(" ", "") || "username"}</p>
                        {formData.location && (
                          <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                            <MapPin className="h-3 w-3" /> {formData.location}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Bio (Optional)
                        </label>
                        <textarea
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
                          rows="3"
                          placeholder="Tell others about your thrift style..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Favorite Thrift Categories
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {["Vintage", "Boho", "Minimalist", "Y2K", "Cottagecore", "Streetwear"].map(style => (
                            <button
                              key={style}
                              className="px-3 py-2 border border-purple-200 text-purple-700 rounded-full text-sm hover:bg-purple-50 transition-colors"
                            >
                              {style}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      onClick={nextStep}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium mt-6 shadow-lg"
                    >
                      Continue to Preferences
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Preferences */}
              {currentStepName === "preferences" && (
                <motion.div
                  key="preferences"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="text-center mb-8">
                    <Settings className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900">Set Your Preferences</h2>
                    <p className="text-gray-600 mt-2">Customize your thrift discovery experience</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Notifications</h3>
                      <div className="space-y-3">
                        {[
                          { label: "New items matching your style", icon: Bell, enabled: true },
                          { label: "Price drops on liked items", icon: TrendingUp, enabled: true },
                          { label: "Weekly style inspiration", icon: Sparkles, enabled: false }
                        ].map((pref, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-3">
                              <pref.icon className="h-5 w-5 text-gray-500" />
                              <span className="text-gray-700">{pref.label}</span>
                            </div>
                            <div className={`w-12 h-6 rounded-full transition-colors ${
                              pref.enabled ? 'bg-purple-500' : 'bg-gray-300'
                            }`}>
                              <div className={`w-5 h-5 bg-white rounded-full mt-0.5 transition-transform ${
                                pref.enabled ? 'translate-x-6' : 'translate-x-0.5'
                              }`} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Discovery Settings</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-50 rounded-xl">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Search Radius
                          </label>
                          <select className="w-full border border-gray-200 rounded-lg px-3 py-2">
                            <option>Within 25 miles</option>
                            <option>Within 50 miles</option>
                            <option>Within 100 miles</option>
                            <option>Nationwide</option>
                          </select>
                        </div>
                        
                        <div className="p-3 bg-gray-50 rounded-xl">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Max Price Range
                          </label>
                          <input 
                            type="range" 
                            min="10" 
                            max="100" 
                            defaultValue="40"
                            className="w-full"
                          />
                          <div className="flex justify-between text-sm text-gray-500 mt-1">
                            <span>$10</span>
                            <span>$40</span>
                            <span>$100+</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      onClick={nextStep}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium shadow-lg"
                    >
                      Save Preferences
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 6: First Collection */}
              {currentStepName === "first-collection" && (
                <motion.div
                  key="collection"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="max-w-3xl mx-auto"
                >
                  <div className="text-center mb-8">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-6xl mb-4"
                    >
                      📌
                    </motion.div>
                    <h2 className="text-3xl font-bold text-gray-900">Your First Collection!</h2>
                    <p className="text-gray-600 mt-2">We've created your first collection with the items you loved</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                        <Pin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">My Boho Vintage Style</h3>
                        <p className="text-gray-600">{likedItems.length} items • Created just now</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {likedItems.map(item => (
                        <div key={item.id} className="border border-gray-200 rounded-xl p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                              👕
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{item.title}</h4>
                              <p className="text-sm text-gray-600">{item.price}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-blue-900">Collection Created!</h4>
                          <p className="text-sm text-blue-700 mt-1">
                            You can now track these items, get notified of similar finds, and share your collection with friends.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={nextStep}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-2xl shadow-lg font-medium text-lg flex items-center gap-2 mx-auto"
                  >
                    Explore Dashboard <Home className="h-5 w-5" />
                  </motion.button>
                </motion.div>
              )}

              {/* Step 7: Dashboard Preview */}
              {currentStepName === "dashboard" && (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="text-center mb-8">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-6xl mb-4"
                    >
                      🎉
                    </motion.div>
                    <h2 className="text-3xl font-bold text-gray-900">Welcome to Your Dashboard!</h2>
                    <p className="text-gray-600 mt-2">Your personalized thrift discovery hub is ready</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <Star className="h-8 w-8 text-yellow-500" />
                        <h3 className="text-lg font-semibold text-gray-900">For You</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">Discover new items matching your boho vintage style</p>
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3">
                        <p className="text-sm text-orange-800">12 new items found!</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <Pin className="h-8 w-8 text-purple-500" />
                        <h3 className="text-lg font-semibold text-gray-900">Collections</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">Organize and track your favorite finds</p>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3">
                        <p className="text-sm text-purple-800">1 collection • 3 items</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <Bell className="h-8 w-8 text-blue-500" />
                        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">Stay updated on your favorite items</p>
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3">
                        <p className="text-sm text-blue-800">All set up!</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-2xl shadow-lg font-medium text-lg"
                    >
                      Start Exploring! 🚀
                    </motion.button>
                    <p className="text-gray-500 text-sm mt-4">
                      Your personalized thrift journey begins now
                    </p>
                  </div>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}