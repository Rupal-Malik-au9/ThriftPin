import { ThemeType } from "@/types";
import { Pin, Sparkles } from "lucide-react";
import { Button } from "./button";

// CTA Section Component
const CTASection = ({ theme }: {theme: ThemeType}) => (
  <section
    className="py-24 text-white relative overflow-hidden transition-all duration-1000 ease-in-out"
    style={{
      background: `linear-gradient(to bottom right, ${theme.primary}, ${theme.primaryHover}, ${theme.primary})`,
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
        {`Join thousands of Pinterest lovers who've discovered their perfect
        thrift matches. Your dream wardrobe is just one board link away.`}
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
);

export default CTASection;