'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Pin, Star, ArrowRight, Users, Sparkles, Eye, Zap, Gift, Search } from "lucide-react"
import { styleCollections } from "@/data/mockData"
import Link from "next/link"
import Image from "next/image"


// Color themes
const colorThemes = [
  {
    name: 'red',
    primary: 'rgb(220, 38, 38)', // red-600
    primaryHover: 'rgb(185, 28, 28)', // red-700
    background: 'rgb(254, 242, 242)', // red-50
    accent: 'rgb(254, 226, 226)', // red-100
    accentDark: 'rgb(252, 165, 165)', // red-200
    text: 'rgb(127, 29, 29)', // red-800
  },
  {
    name: 'purple',
    primary: 'rgb(147, 51, 234)', // purple-600
    primaryHover: 'rgb(126, 34, 206)', // purple-700
    background: 'rgb(250, 245, 255)', // purple-50
    accent: 'rgb(243, 232, 255)', // purple-100
    accentDark: 'rgb(221, 214, 254)', // purple-200
    text: 'rgb(88, 28, 135)', // purple-800
  },
  {
    name: 'blue',
    primary: 'rgb(37, 99, 235)', // blue-600
    primaryHover: 'rgb(29, 78, 216)', // blue-700
    background: 'rgb(239, 246, 255)', // blue-50
    accent: 'rgb(219, 234, 254)', // blue-100
    accentDark: 'rgb(191, 219, 254)', // blue-200
    text: 'rgb(30, 64, 175)', // blue-800
  },
  {
    name: 'green',
    primary: 'rgb(34, 197, 94)', // green-500
    primaryHover: 'rgb(22, 163, 74)', // green-600
    background: 'rgb(240, 253, 244)', // green-50
    accent: 'rgb(220, 252, 231)', // green-100
    accentDark: 'rgb(187, 247, 208)', // green-200
    text: 'rgb(22, 101, 52)', // green-800
  },
  {
    name: 'orange',
    primary: 'rgb(234, 88, 12)', // orange-600
    primaryHover: 'rgb(194, 65, 12)', // orange-700
    background: 'rgb(255, 247, 237)', // orange-50
    accent: 'rgb(254, 215, 170)', // orange-100
    accentDark: 'rgb(253, 186, 116)', // orange-200
    text: 'rgb(154, 52, 18)', // orange-800
  }
]

// Floating Background Component
const FloatingBackground = ({ theme }:any) => (
  <div className="fixed inset-0 pointer-events-none transition-all duration-1000 ease-in-out">
    <div 
      className="absolute top-10 left-10 w-16 h-16 rounded-full animate-pulse opacity-60 transition-all duration-1000"
      style={{ backgroundColor: theme.accent }}
    ></div>
    <div 
      className="absolute top-32 right-20 w-12 h-12 rounded-full animate-bounce opacity-40 transition-all duration-1000"
      style={{ backgroundColor: theme.accentDark }}
    ></div>
    <div 
      className="absolute bottom-40 left-16 w-20 h-20 rounded-full animate-pulse opacity-50 transition-all duration-1000"
      style={{ backgroundColor: theme.background }}
    ></div>
    <div 
      className="absolute top-60 left-1/3 w-8 h-8 rounded-full animate-ping opacity-30 transition-all duration-1000"
      style={{ backgroundColor: theme.accentDark }}
    ></div>
    <div 
      className="absolute bottom-20 right-32 w-14 h-14 rounded-full animate-bounce opacity-40 transition-all duration-1000"
      style={{ backgroundColor: theme.accent }}
    ></div>
  </div>
)

// Header Component
const Header = ({ theme }:any) => (
  <header className="z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 transition-all duration-1000">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3 group cursor-pointer">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
          style={{ backgroundColor: theme.primary }}
        >
          <Pin className="h-7 w-7 text-white" />
        </div>
        <span 
          className="text-2xl font-bold text-gray-800 group-hover:transition-colors transition-all duration-300"
          style={{ color: `${theme.primary}` }}
        >
          ThriftPin
        </span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <Link 
          href="#discover" 
          className="text-gray-600 hover:transition-colors font-medium transition-all duration-300"
          style={{ '--hover-color': theme.primary } as any}
          onMouseEnter={(e) => (e.target as HTMLElement).style.color = theme.primary}
          onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(75, 85, 99)'}
        >
          Discover
        </Link>
        <Link 
          href="#how-it-works" 
          className="text-gray-600 hover:transition-colors font-medium transition-all duration-300"
          onMouseEnter={(e) => (e.target as HTMLElement).style.color = theme.primary}
          onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(75, 85, 99)'}
        >
          How it works
        </Link>
        <Button variant="outline" className="rounded-full border-2 hover:scale-105 transition-transform"
          style={{color:theme.primary,borderColor:theme.primary} as any}
        >
          Sign In
        </Button>
      </nav>
    </div>
  </header>
)

// Hero Section Component
const HeroSection = ({ theme }:any) => (
  <section 
    className="relative pt-20 pb-32 transition-all duration-1000 ease-in-out"
    style={{ 
      background: `linear-gradient(to bottom right, ${theme.background}, white, ${theme.background})` 
    }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-4xl mx-auto">
        
        {/* Animated Badge */}
        <div 
          className="inline-flex items-center rounded-full px-6 py-3 mb-8 animate-pulse transition-all duration-1000"
          style={{ backgroundColor: theme.accent }}
        >
          <Sparkles 
            className="h-5 w-5 mr-2 animate-spin transition-all duration-1000" 
            style={{ color: theme.primary }}
          />
          <span 
            className="font-semibold transition-all duration-1000"
            style={{ color: theme.text }}
          >
            Your Pinterest Board → Curated Thrift Magic
          </span>
        </div>
        
        {/* Main Headline with Animation */}
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          <span className="inline-block animate-pulse">Turn Your</span>
          <span 
            className="block animate-bounce transition-all duration-1000"
            style={{ color: theme.primary }}
          >
            Pinterest Dreams
          </span>
          <span className="inline-block">Into Sustainable Style</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Connect your Pinterest fashion board with expert thrifters who understand your aesthetic. 
          Get surprise boxes of pre-loved treasures that match your pins perfectly.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="text-white rounded-full px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            style={{ backgroundColor: theme.primary } as any}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = theme.primaryHover}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = theme.primary}
          >
            <Pin className="mr-3 h-6 w-6" />
            Link Your Pinterest Board
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-10 py-4 text-lg font-semibold border-2 hover:scale-105 transition-all duration-300 bg-white hover:!bg-white"
           style={{ color: theme.primary, borderColor: theme.primary} as any}
            >
            Become a Thrifter
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
          <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
            <Users 
              className="h-5 w-5 mr-2 transition-all duration-1000"
              style={{ color: theme.primary }}
            />
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
)

// Pinterest Discovery Section Component
const PinterestDiscoverySection = ({ theme }:any) => (
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
          Your Pinterest board isn't just a collection—it's your personal style DNA. 
          ThriftPin reads between your pins to understand what makes your heart skip a beat.
        </p>
      </div>

      {/* Pinterest Flow Animation */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          {[
            {
              icon: Search,
              title: "Browse & Pin Like Always",
              description: "Keep discovering and saving the outfits, colors, and vibes that inspire you. Every pin adds to your style fingerprint."
            },
            {
              icon: Zap,
              title: "AI Reads Your Aesthetic",
              description: "Our visual intelligence analyzes your board's colors, patterns, silhouettes, and vibes to understand your unique taste."
            },
            {
              icon: Heart,
              title: "Thrifters Fall in Love",
              description: "Expert thrifters browse your board, get inspired by your style, and hunt for pieces that match your Pinterest dreams."
            }
          ].map((item, index) => (
            <div key={index} className="group">
              <div 
                className="flex items-start space-x-4 p-6 rounded-2xl hover:transition-all duration-300 cursor-pointer"
                style={{}}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = theme.background}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
              >
                <div 
                  className="w-14 h-14 px-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-1000"
                  style={{ backgroundColor: theme.primary }}
                >
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pinterest Board Mockup */}
        <div className="relative">
          <div className="bg-gray-50 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <div className="grid grid-cols-3 gap-4">
              {[1,2,3,4,5,6,7,8,9].map((i) => (
                <div key={i} className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-105 ${i % 3 === 0 ? 'row-span-2' : ''}`}>
                  <div 
                    className={`${i % 3 === 0 ? 'h-32' : 'h-20'} flex items-center justify-center transition-all duration-1000`}
                    style={{
                      background: i % 4 === 0 ? `linear-gradient(to bottom right, ${theme.accentDark}, ${theme.primary})` :
                                 i % 4 === 1 ? `linear-gradient(to bottom right, ${theme.accent}, ${theme.accentDark})` :
                                 i % 4 === 2 ? `linear-gradient(to bottom right, ${theme.background}, ${theme.accent})` :
                                 `linear-gradient(to bottom right, ${theme.accentDark}, ${theme.accent})`
                    }}
                  >
                    <Pin className="h-6 w-6 text-white/70" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Floating Connection Line */}
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
              <div 
                className="w-16 h-1 rounded-full animate-pulse transition-all duration-1000"
                style={{ backgroundColor: theme.primary }}
              ></div>
              <div 
                className="w-4 h-4 rounded-full absolute -right-2 -top-1.5 animate-ping transition-all duration-1000"
                style={{ backgroundColor: theme.primary }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// How It Works Section Component
const HowItWorksSection = ({ theme }:any) => {
  const steps = [
    {
      icon: Pin,
      title: "Link Your Board",
      description: "Share your Pinterest board URL and tell us your size, budget, and style preferences.",
      color: theme.primary,
      delay: "0s"
    },
    {
      icon: Eye,
      title: "Thrifters Discover You",
      description: "Expert thrifters browse your board and get inspired by your unique aesthetic.",
      color: 'rgb(147, 51, 234)', // purple-600
      delay: "0s"
    },
    {
      icon: Gift,
      title: "Receive Curated Offers",
      description: "Get personalized surprise box proposals from thrifters who love your style.",
      color: 'rgb(236, 72, 153)', // pink-500
      delay: "0s"
    },
    {
      icon: Star,
      title: "Unbox & Rate",
      description: "Approve a thrifter, receive your surprise box, and rate your experience.",
      color: 'rgb(234, 88, 12)', // orange-600
      delay: "0s"
    }
  ]

  return (
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
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl overflow-hidden transform hover:-translate-y-2 flex flex-col" style={{animationDelay: step.delay}}>
              <CardHeader className="text-center pb-4 items-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{ backgroundColor: step.color }}
                >
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
  )
}

// Collections Showcase Component
const CollectionsShowcase = ({ theme }:any) => (
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
                <p className="text-sm text-gray-500 mb-4 italic">"{collection.boardStyle}"</p>
                <div className="flex flex-wrap gap-2">
                  {collection.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-sm rounded-full font-medium transition-all duration-1000"
                      style={{ 
                        backgroundColor: theme.accent,
                        color: theme.text
                      }}
                    >
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
)

// CTA Section Component
const CTASection = ({ theme }:any) => (
  <section 
    className="py-24 text-white relative overflow-hidden transition-all duration-1000 ease-in-out"
    style={{ 
      background: `linear-gradient(to bottom right, ${theme.primary}, ${theme.primaryHover}, ${theme.primary})` 
    }}
  >
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
        Join thousands of Pinterest lovers who've discovered their perfect thrift matches. 
        Your dream wardrobe is just one board link away.
      </p>
      <Button 
        size="lg" 
        className="bg-white rounded-full px-12 py-4 text-xl font-bold transform hover:scale-110 transition-all duration-300 shadow-2xl hover:bg-gray-100"
        style={{ color: theme.primary }}
      >
        <Pin className="mr-3 h-6 w-6" />
        Start Your Style Journey
        <Sparkles className="ml-3 h-6 w-6" />
      </Button>
    </div>
  </section>
)

// Footer Component
const Footer = ({ theme }:any) => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-1000"
              style={{ backgroundColor: theme.primary }}
            >
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
)

// Main Landing Page Component
export default function LandingPage() {
  const [currentTheme, setCurrentTheme] = useState(0)
  const [lastScrollTime, setLastScrollTime] = useState(Date.now())

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now()
      if (now - lastScrollTime > 5000) { // 7.5 seconds
        setCurrentTheme((prev) => (prev + 1) % colorThemes.length)
        setLastScrollTime(now)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      // clearInterval(interval)
    }
  }, [lastScrollTime])

  const theme = colorThemes[currentTheme]

  return (
    <div className="min-h-screen bg-white overflow-hidden transition-all duration-1000 ease-in-out">
      {/* Floating Elements Background */}
      <FloatingBackground theme={theme} />

      {/* Header */}
      <Header theme={theme} />

      {/* Hero Section */}
      <HeroSection theme={theme} />

      {/* Pinterest Discovery Section */}
      <PinterestDiscoverySection theme={theme} />

      {/* How ThriftPin Works */}
      <HowItWorksSection theme={theme} />

      {/* Curated Collections Showcase */}
      <CollectionsShowcase theme={theme} />

      {/* CTA Section */}
      <CTASection theme={theme} />

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  )
}