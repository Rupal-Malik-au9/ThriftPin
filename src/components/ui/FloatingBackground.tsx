import { ThemeType } from "@/types";

// Floating Background Component
const FloatingBackground = ({ theme }: {theme:ThemeType}) => (
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
);

export default FloatingBackground;