"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pin,
  Sparkles,
  CheckCircle,
  Clock,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { ThemeType } from "@/types";
import { colorThemes } from "@/lib/utils";
import { detailedSteps } from "@/data/mockData";
import Footer from "@/components/ui/Footer";
import FloatingBackground from "@/components/ui/FloatingBackground";
import CTASection from "@/components/ui/CTASection";

// Header Component
const Header = ({ theme }: { theme: ThemeType }) => (
  <header className="z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 transition-all duration-1000">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
          style={{ backgroundColor: theme.primary }}
        >
          <Pin className="h-7 w-7 text-white" />
        </div>
        <span
          className="text-2xl font-bold text-gray-800 group-hover:transition-colors transition-all duration-300"
          style={{ color: theme.primary }}
        >
          ThriftPin
        </span>
      </Link>
      <nav className="hidden md:flex items-center space-x-8">
        <Link
          href="/#discover"
          className="text-gray-600 hover:transition-colors font-medium transition-all duration-300"
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.color = theme.primary)
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.color = "rgb(75, 85, 99)")
          }
        >
          Discover
        </Link>
        <Link
          href="/how-it-works"
          className="font-medium transition-all duration-300"
          style={{ color: theme.primary }}
        >
          How it works
        </Link>
        <Link href="/signin">
          <Button
            variant="outline"
            className="rounded-full border-2 hover:scale-105 transition-transform"
            style={{ color: theme.primary, borderColor: theme.primary }}
          >
            Sign In
          </Button>
        </Link>
      </nav>
    </div>
  </header>
);

// Hero Section
const HeroSection = ({ theme }: { theme: ThemeType }) => (
  <section
    className="relative pt-20 pb-16 transition-all duration-1000 ease-in-out px-16"
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
    <div className="max-w-7xl mx-auto px-6">
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
            Step-by-Step Guide
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          <span className="inline-block">How</span>
          <span
            className="block animate-bounce transition-all duration-1000"
            style={{ color: theme.primary }}
          >
            ThriftPin
          </span>
          <span className="inline-block">Works</span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your Pinterest fashion inspiration into sustainable style treasures 
          through our simple, magical process
        </p>
      </div>
    </div>
  </section>
);

// Detailed Steps Section
const DetailedStepsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-20">
          {detailedSteps.map((step, index) => (
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
                <Card className="group transition-all duration-500 border-0 rounded-3xl overflow-hidden transform hover:scale-105 shadow-2xl">
                  <div
                    className="h-80 flex items-center justify-center transition-all duration-1000"
                    style={{
                      background: `linear-gradient(to bottom right, ${step.color}, ${step.color}dd)`,
                    }}
                  >
                    <step.icon className="h-24 w-24 text-white/80" />
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = ({ theme }: { theme: ThemeType }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do thrifters access my Pinterest board?",
      answer: "You simply share the public URL of your Pinterest board. Thrifters can view your pins to understand your style, but they cannot access any private information or interact with your Pinterest account directly."
    },
    {
      question: "What if I don't like the items in my surprise box?",
      answer: "We offer a 7-day return policy for all items. You can return any pieces that don't fit or match your style for a full refund. Our goal is 100% satisfaction with your thrift discoveries."
    },
    {
      question: "How do you ensure item quality and authenticity?",
      answer: "All our thrifter curators are verified experts who inspect items for quality, authenticity, and condition. Each item is photographed and described in detail before being included in your box proposal."
    },
    {
      question: "Can I communicate with my thrifter?",
      answer: "Yes! Once you approve a proposal, you can message your thrifter through our platform. Many pinners build ongoing relationships with their favorite curators for future boxes."
    },
    {
      question: "How much does ThriftPin cost?",
      answer: "ThriftPin is free to use! You only pay for the items you choose to purchase. Thrifters set their own prices, and you can see the total cost before approving any surprise box proposal."
    },
    {
      question: "What sizes and styles do you accommodate?",
      answer: "We work with sizes XS through 3XL and accommodate all style preferences - from minimalist to maximalist, vintage to contemporary, casual to formal. Our diverse network of thrifters specializes in different aesthetics."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about the ThriftPin process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 border-0 rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-gray-900 group-hover:text-gray-700">
                    {faq.question}
                  </CardTitle>
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
              </CardHeader>
              {openFAQ === index && (
                <CardContent className="pt-0 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main How It Works Page Component
export default function HowItWorksPage() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());

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

  const theme = colorThemes[currentTheme];

  return (
    <div className="min-h-screen bg-white overflow-hidden transition-all duration-1000 ease-in-out">
      <FloatingBackground theme={theme} />
      <Header theme={theme} />
      <HeroSection theme={theme} />
      <DetailedStepsSection />
      <FAQSection theme={theme} />
      <CTASection theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}