'use client'

import { Button } from "@/components/ui/button"
import { styleCollections } from "@/data/mockData"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Pin, Star, ArrowRight, Users, Sparkles, Eye, Zap, Gift, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Floating Elements Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-red-100 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-red-200 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-40 left-16 w-20 h-20 bg-red-50 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-60 left-1/3 w-8 h-8 bg-red-300 rounded-full animate-ping opacity-30"></div>
        <div className="absolute bottom-20 right-32 w-14 h-14 bg-red-100 rounded-full animate-bounce opacity-40"></div>
      </div>

      {/* Header */}
      <header className="z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Pin className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">ThriftPin</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#discover" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
              Discover
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
              How it works
            </Link>
            <Button variant="outline" className="rounded-full border-2 hover:scale-105 transition-transform">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Animated Badge */}
            <div className="inline-flex items-center bg-red-100 rounded-full px-6 py-3 mb-8 animate-pulse">
              <Sparkles className="h-5 w-5 text-red-600 mr-2 animate-spin" />
              <span className="text-red-700 font-semibold">Your Pinterest Board → Curated Thrift Magic</span>
            </div>
            
            {/* Main Headline with Animation */}
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="inline-block animate-pulse">Turn Your</span>
              <span className="text-red-600 block animate-bounce">Pinterest Dreams</span>
              <span className="inline-block">Into Sustainable Style</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect your Pinterest fashion board with expert thrifters who understand your aesthetic. 
              Get surprise boxes of pre-loved treasures that match your pins perfectly.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <Pin className="mr-3 h-6 w-6" />
                Link Your Pinterest Board
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 py-4 text-lg font-semibold border-2 hover:scale-105 transition-all duration-300">
                Become a Thrifter
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
              <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
                <Users className="h-5 w-5 mr-2 text-red-600" />
                <span className="font-medium">1,200+ Happy Pinners</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
                <Star className="h-5 w-5 mr-2 text-yellow-500 fill-current" />
                <span className="font-medium">4.9/5 Perfect Matches</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pinterest Discovery Section */}
      <section id="discover" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gray-100 rounded-full px-6 py-2 mb-6">
              <Eye className="h-5 w-5 text-gray-600 mr-2" />
              <span className="text-gray-700 font-medium">Visual Discovery Magic</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Every Pin Tells Your Style Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {`Your Pinterest board isn't just a collection—it's your personal style DNA. 
              ThriftPin reads between your pins to understand what makes your heart skip a beat.`}
            </p>
          </div>

          {/* Pinterest Flow Animation */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-red-50 transition-all duration-300 cursor-pointer">
                  <div className="w-14 h-14 px-4 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Search className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Browse & Pin Like Always</h3>
                    <p className="text-gray-600 text-lg">Keep discovering and saving the outfits, colors, and vibes that inspire you. Every pin adds to your style fingerprint.</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-red-50 transition-all duration-300 cursor-pointer">
                  <div className="w-14 h-14 px-4 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Reads Your Aesthetic</h3>
                    <p className="text-gray-600 text-lg">{`Our visual intelligence analyzes your board's colors, patterns, silhouettes, and vibes to understand your unique taste.`}</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-red-50 transition-all duration-300 cursor-pointer">
                  <div className="w-14 h-14 px-4 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thrifters Fall in Love</h3>
                    <p className="text-gray-600 text-lg">Expert thrifters browse your board, get inspired by your style, and hunt for pieces that match your Pinterest dreams.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pinterest Board Mockup */}
            <div className="relative">
              <div className="bg-gray-50 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="grid grid-cols-3 gap-4">
                  {[1,2,3,4,5,6,7,8,9].map((i) => (
                    <div key={i} className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-105 ${i % 3 === 0 ? 'row-span-2' : ''}`}>
                      <div className={`bg-gradient-to-br ${
                        i % 4 === 0 ? 'from-pink-200 to-red-300' :
                        i % 4 === 1 ? 'from-purple-200 to-pink-300' :
                        i % 4 === 2 ? 'from-orange-200 to-red-300' :
                        'from-red-200 to-pink-300'
                      } ${i % 3 === 0 ? 'h-32' : 'h-20'} flex items-center justify-center`}>
                        <Pin className="h-6 w-6 text-white/70" />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Floating Connection Line */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                  <div className="w-16 h-1 bg-red-600 rounded-full animate-pulse"></div>
                  <div className="w-4 h-4 bg-red-600 rounded-full absolute -right-2 -top-1.5 animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How ThriftPin Works */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              From Pin to Perfect Find
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four magical steps to transform your Pinterest inspiration into sustainable style treasures
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Pin,
                title: "Link Your Board",
                description: "Share your Pinterest board URL and tell us your size, budget, and style preferences.",
                color: "bg-red-600",
                delay: "0s"
              },
              {
                icon: Eye,
                title: "Thrifters Discover You",
                description: "Expert thrifters browse your board and get inspired by your unique aesthetic.",
                color: "bg-purple-600",
                delay: "0s"
              },
              {
                icon: Gift,
                title: "Receive Curated Offers",
                description: "Get personalized surprise box proposals from thrifters who love your style.",
                color: "bg-pink-600",
                delay: "0s"
              },
              {
                icon: Star,
                title: "Unbox & Rate",
                description: "Approve a thrifter, receive your surprise box, and rate your experience.",
                color: "bg-orange-600",
                delay: "0s"
              }
            ].map((step, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl overflow-hidden transform hover:-translate-y-2 flex flex-col" style={{animationDelay: step.delay}}>
                <CardHeader className="text-center pb-4 items-center">
                  <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-full px-4 py-1 inline-block mb-4 w-fit">
                    <span className="text-gray-600 font-semibold text-sm">Step {index + 1}</span>
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Collections Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Real Boards, Real Magic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Pinterest boards transform into perfectly curated thrift boxes
            </p>
          </div>
          
          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {styleCollections.map((collection, index) => (
              <div key={index} className="break-inside-avoid">
                <Card className="group transition-all duration-500 border-0 rounded-3xl overflow-hidden transform hover:scale-105 !shadow-none">
                  <div className="relative overflow-hidden">
                    <Image
                      alt="Collection Image"
                      src={collection.image}
                      width={400}
                      height={500}
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold">{collection.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{collection.title}</h3>
                    <p className="text-gray-600 mb-3">Curated by {collection.curator}</p>
                    <p className="text-sm text-gray-500 mb-4 italic">{`"${collection.boardStyle}"`}</p>
                    <div className="flex flex-wrap gap-2">
                      {collection.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-red-500 to-pink-600 text-white relative overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Turn Pins into Treasures?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            {`Join thousands of Pinterest lovers who've discovered their perfect thrift matches. 
            Your dream wardrobe is just one board link away.`}
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-12 py-4 text-xl font-bold transform hover:scale-110 transition-all duration-300 shadow-2xl">
            <Pin className="mr-3 h-6 w-6" />
            Start Your Style Journey
            <Sparkles className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Pin className="h-7 w-7 text-white" />
                </div>
                <span className="text-2xl font-bold">ThriftPin</span>
              </div>
              <p className="text-gray-400 text-lg max-w-md">
                Where Pinterest inspiration meets sustainable fashion. 
                Turning your style dreams into eco-friendly reality.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">For Pinners</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Link Your Board</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Style Matching</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">For Thrifters</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Join as Curator</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Thrifter Guidelines</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Success Stories</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ThriftPin. Sustainable style, Pinterest-inspired.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}