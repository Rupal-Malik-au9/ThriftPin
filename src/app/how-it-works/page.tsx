"use client"
import { useState, useEffect, Key } from "react";
import {
  Sparkles,
  CheckCircle,
  Clock,
  Eye,
  Palette,
  X,
  RefreshCw,
  Search,
  Heart,
  ShoppingBag,
  Upload,
  Users,
  DollarSign,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

// Mock data for role-specific steps
const seekerSteps = [
  {
    number: "01",
    title: "Share Your Pinterest Board",
    description: "Simply paste the URL of your favorite Pinterest fashion board. Our curators will analyze your aesthetic preferences and style inspirations.",
    details: [
      "Works with any public Pinterest board",
      "AI analyzes your style patterns and preferences",
      "Complete privacy - we only view public pins"
    ],
    timeline: "2 minutes",
    icon: Search,
    color: "#8B5CF6"
  },
  {
    number: "02",
    title: "Browse Curated Proposals",
    description: "Receive personalized surprise box proposals from expert thrift curators who've handpicked items matching your Pinterest aesthetic.",
    details: [
      "Multiple proposals from different curators",
      "See photos and descriptions of each item",
      "Compare prices and curator ratings"
    ],
    timeline: "1-2 days",
    icon: Heart,
    color: "#EC4899"
  },
  {
    number: "03",
    title: "Approve & Receive",
    description: "Choose your favorite proposal and get ready for your sustainable fashion surprise! Items are carefully packaged and shipped directly to you.",
    details: [
      "7-day return policy for any items",
      "Eco-friendly packaging included",
      "Track your package from curator to doorstep"
    ],
    timeline: "3-5 days",
    icon: ShoppingBag,
    color: "#10B981"
  }
];

const curatorSteps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Set up your curator profile showcasing your expertise in vintage fashion, specific brands, or unique style aesthetics.",
    details: [
      "Upload portfolio of your best thrift finds",
      "Set your specialization areas and brands",
      "Complete verification process"
    ],
    timeline: "10 minutes",
    icon: Users,
    color: "#F59E0B"
  },
  {
    number: "02",
    title: "Browse Seeker Boards",
    description: "Explore Pinterest boards from fashion seekers and create personalized surprise box proposals based on their style preferences.",
    details: [
      "AI-powered style matching suggestions",
      "Access to seeker's size and budget preferences",
      "Tools to create compelling proposals"
    ],
    timeline: "30-60 minutes per proposal",
    icon: Upload,
    color: "#3B82F6"
  },
  {
    number: "03",
    title: "Earn & Build Reputation",
    description: "Get paid for approved proposals and build your reputation as a trusted style curator in the ThriftPin community.",
    details: [
      "Competitive commission on all sales",
      "Rating system builds your curator status",
      "Access to premium seekers as you grow"
    ],
    timeline: "Ongoing",
    icon: DollarSign,
    color: "#059669"
  }
];

const colorThemes = [
  {
    primary: "#8B5CF6",
    accent: "#F3F4F6",
    background: "#EDE9FE",
    text: "#1F2937"
  },
  {
    primary: "#EC4899",
    accent: "#FDF2F8",
    background: "#FCE7F3",
    text: "#1F2937"
  },
  {
    primary: "#10B981",
    accent: "#ECFDF5",
    background: "#D1FAE5",
    text: "#1F2937"
  }
];

// Role Selection Modal Component
type RoleSelectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelectRole: (role: 'seeker' | 'curator') => void;
};

const RoleSelectionModal = ({ isOpen, onClose, onSelectRole }: RoleSelectionModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-0 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          <h2 className="text-3xl font-bold mb-2 text-center">
            Who are you on ThriftPin?
          </h2>
          <p className="text-lg text-center text-purple-100">
            Are you here to discover thrifted treasures or to curate and share them?
          </p>
        </div>
        
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Seeker Option */}
            <button
              onClick={() => onSelectRole('seeker')}
              className="group p-6 rounded-2xl border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:scale-105 text-left"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 group-hover:bg-purple-200 mb-4 mx-auto transition-colors">
                <Eye className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                {`I'm a Seeker 👀`}
              </h3>
              <p className="text-gray-600 text-center">
                I want to browse & find unique thrift treasures curated just for my style
              </p>
            </button>

            {/* Curator Option */}
            <button
              onClick={() => onSelectRole('curator')}
              className="group p-6 rounded-2xl border-2 border-gray-200 hover:border-pink-300 transition-all duration-300 hover:shadow-lg hover:scale-105 text-left"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-pink-100 group-hover:bg-pink-200 mb-4 mx-auto transition-colors">
                <Palette className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                {`I'm a Curator 🎨`}
              </h3>
              <p className="text-gray-600 text-center">
                I want to list and share my curated thrift finds with fashion seekers
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Role Toggle Component
const RoleToggle = ({
  currentRole,
  onRoleChange,
}: {
  currentRole: 'seeker' | 'curator';
  onRoleChange: () => void;
}) => {
  return (
    <div className="fixed top-24 right-6 z-40">
      <div className="bg-white rounded-full shadow-lg border border-gray-200 px-4 py-2 flex items-center gap-2">
        <span className="text-sm text-gray-600 font-medium">
          {currentRole === 'seeker' ? 'I am a Seeker' : 'I am a Curator'}
        </span>
        <button
          onClick={onRoleChange}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
          title="Switch Role View"
        >
          <RefreshCw className="h-4 w-4 text-gray-600 group-hover:rotate-180 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

// Hero Section
const HeroSection = ({
  theme,
  currentRole,
}: {
  theme: { primary: string; accent: string; background: string; text: string };
  currentRole: 'seeker' | 'curator';
}) => {
  const roleContent: {
    seeker: { badge: string; title: string[]; subtitle: string };
    curator: { badge: string; title: string[]; subtitle: string };
  } = {
    seeker: {
      badge: "For Fashion Seekers",
      title: ["Discover Your", "Perfect Style", "Match"],
      subtitle: "Transform your Pinterest inspiration into curated thrift treasures delivered to your doorstep"
    },
    curator: {
      badge: "For Style Curators",
      title: ["Share Your", "Thrift Expertise", "& Earn"],
      subtitle: "Turn your eye for vintage fashion into income by curating personalized style boxes for seekers"
    }
  };

  const content = roleContent[currentRole];

  return (
    <section
      className="relative pt-20 pb-16 transition-all duration-1000 ease-in-out px-6"
      style={{
        background: `linear-gradient(to bottom right, ${theme.background}, white, ${theme.background})`,
      }}
    >
       <Link
      href="/"
      className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
    >
      <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
      Back to Home
    </Link>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
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
              {content.badge}
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            {content.title.map((line: string, index: Key | null | undefined) => (
              <span 
                key={index} 
                className={`block ${index === 1 ? 'animate-bounce transition-all duration-1000' : ''}`} 
                style={index === 1 ? { color: theme.primary } : {}}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.primary}dd)` }}
            >
              {currentRole === 'seeker' ? 'Start Finding Treasures' : 'Become a Curator'}
            </button>
            <button className="px-8 py-4 rounded-full font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Detailed Steps Section
const DetailedStepsSection = ({ currentRole }: { currentRole: 'seeker' | 'curator' }) => {
  const steps = currentRole === 'seeker' ? seekerSteps : curatorSteps;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            How It Works for {currentRole === 'seeker' ? 'Seekers' : 'Curators'}
          </h2>
          <p className="text-xl text-gray-600">
            {currentRole === 'seeker' 
              ? 'Your journey from Pinterest inspiration to sustainable style' 
              : 'Your path to becoming a successful style curator'
            }
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div
                    className="text-6xl font-bold opacity-20"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </div>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <CheckCircle
                        className="h-5 w-5 flex-shrink-0"
                        style={{ color: step.color }}
                      />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-500">Timeline: {step.timeline}</span>
                </div>
              </div>

              {/* Visual */}
              <div className="lg:w-1/2">
                <div className="group transition-all duration-500 border-0 rounded-3xl overflow-hidden transform hover:scale-105 shadow-2xl bg-white">
                  <div
                    className="h-80 flex items-center justify-center transition-all duration-1000"
                    style={{
                      background: `linear-gradient(to bottom right, ${step.color}, ${step.color}dd)`,
                    }}
                  >
                    <step.icon className="h-24 w-24 text-white opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = ({
  theme,
  currentRole,
}: {
  theme: { primary: string; accent: string; background: string; text: string };
  currentRole: 'seeker' | 'curator';
}) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const seekerFaqs = [
    {
      question: "How do curators access my Pinterest board?",
      answer: "You simply share the public URL of your Pinterest board. Curators can view your pins to understand your style, but they cannot access any private information or interact with your Pinterest account directly."
    },
    {
      question: `What if I don't like the items in my surprise box?`,
      answer: "We offer a 7-day return policy for all items. You can return any pieces that don't fit or match your style for a full refund. Our goal is 100% satisfaction with your thrift discoveries."
    },
    {
      question: "How much does ThriftPin cost?",
      answer: "ThriftPin is free to use! You only pay for the items you choose to purchase. Curators set their own prices, and you can see the total cost before approving any surprise box proposal."
    },
    {
      question: "How are items authenticated?",
      answer: "All our curators are verified experts who inspect items for quality, authenticity, and condition. Each item is photographed and described in detail before being included in your box proposal."
    }
  ];

  const curatorFaqs = [
    {
      question: "How much can I earn as a curator?",
      answer: "Earnings vary based on your activity level and expertise. Top curators earn $500-2000 monthly. You keep 70% of each sale, with higher percentages available as you build your reputation."
    },
    {
      question: "What qualifications do I need?",
      answer: "No formal qualifications required! We look for passion for fashion, knowledge of brands and vintage pieces, and an eye for style. Complete our curator assessment to get started."
    },
    {
      question: "How do I get paid?",
      answer: "Payments are processed weekly via PayPal, Venmo, or direct deposit. You're paid within 3 business days after a seeker approves and receives their box."
    },
    {
      question: "What support do I get as a curator?",
      answer: "We provide styling guides, trend reports, photography tips, and access to a community of curators. Plus, our AI suggests matches between your expertise and seeker preferences."
    }
  ];

  const faqs = currentRole === 'seeker' ? seekerFaqs : curatorFaqs;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            {currentRole === 'seeker' ? 'Seeker' : 'Curator'} FAQ
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about {currentRole === 'seeker' ? 'finding your perfect style' : 'becoming a successful curator'}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group transition-all duration-300 border-0 rounded-2xl overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-md"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl text-gray-900 group-hover:text-gray-700 font-semibold">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openFAQ === index ? 'rotate-45' : ''
                    }`}
                    style={{ backgroundColor: theme.accent }}
                  >
                    <span className="text-xl font-bold" style={{ color: theme.primary }}>
                      +
                    </span>
                  </div>
                </div>
              </div>
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = ({
  theme,
  currentRole,
}: {
  theme: { primary: string; accent: string; background: string; text: string };
  currentRole: 'seeker' | 'curator';
}) => {
  const ctaContent = {
    seeker: {
      title: "Ready to Discover Your Style?",
      subtitle: "Join thousands of fashion lovers who've transformed their Pinterest boards into real wardrobes",
      buttonText: "Start Your Style Journey",
      stats: [
        { number: "10K+", label: "Happy Seekers" },
        { number: "50K+", label: "Items Curated" },
        { number: "98%", label: "Satisfaction Rate" }
      ]
    },
    curator: {
      title: "Ready to Share Your Expertise?",
      subtitle: "Turn your passion for thrift fashion into a thriving side business with flexible hours",
      buttonText: "Become a Curator",
      stats: [
        { number: "500+", label: "Active Curators" },
        { number: "$1,200", label: "Avg Monthly Earnings" },
        { number: "4.8★", label: "Curator Rating" }
      ]
    }
  };

  const content = ctaContent[currentRole];

  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.background})` }}
      ></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
          
          <button 
            className="px-12 py-4 rounded-full font-bold text-white text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 mb-16"
            style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.primary}dd)` }}
          >
            {content.buttonText}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.stats.map((stat: { number: string,label:string}, index: Key | null | undefined) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: theme.primary }}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Component
export default function HowItWorksEnhanced() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());
  const [showRoleModal, setShowRoleModal] = useState(true);
  const [currentRole, setCurrentRole] = useState<'seeker' | 'curator'>('seeker');

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime > 5000) {
        setCurrentTheme((prev) => (prev + 1) % colorThemes.length);
        setLastScrollTime(now);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTime]);

  const handleRoleSelection = (role: 'seeker' | 'curator') => {
    setCurrentRole(role);
    setShowRoleModal(false);
  };

  const handleRoleToggle = () => {
    setCurrentRole(prev => prev === 'seeker' ? 'curator' : 'seeker');
  };

  const theme = colorThemes[currentTheme];

  return (
    <div className="min-h-screen bg-white overflow-hidden transition-all duration-1000 ease-in-out">
      <RoleSelectionModal
        isOpen={showRoleModal}
        onClose={() => setShowRoleModal(false)}
        onSelectRole={handleRoleSelection}
      />
      
      {!showRoleModal && (
        <RoleToggle
          currentRole={currentRole}
          onRoleChange={handleRoleToggle}
        />
      )}

      <HeroSection theme={theme} currentRole={currentRole} />
      <DetailedStepsSection currentRole={currentRole} />
      <FAQSection theme={theme} currentRole={currentRole} />
      <CTASection theme={theme} currentRole={currentRole} />
    </div>
  );
}