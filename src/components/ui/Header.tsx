import { ThemeType } from "@/types";
import { ChevronRight, Pin, X, Menu } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import SignInButton from "./SigninButton";
import { usePathname, useRouter } from "next/navigation";

// Navigation items configuration for easier maintenance
const NAV_ITEMS = [
  { path: "/discover", label: "Discover" },
  { path: "/how-it-works", label: "How it works" }
] as const;

interface HeaderProps {
  theme: ThemeType;
  isOpenSigninModal: boolean;
  setIsOpenSigninModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ theme, isOpenSigninModal, setIsOpenSigninModal }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  // Memoized function to check if page is active
  const isPageActive = useCallback((currentPagePath: string) => pathname === currentPagePath, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  console.log(isOpenSigninModal,"isOpenSigninModal");
  
  const handleNavigation = useCallback((path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  }, [router]);

  // Reusable navigation link component for desktop
  const DesktopNavLink = ({ item }: { item: (typeof NAV_ITEMS)[number] }) => (
    <button
      onClick={() => handleNavigation(item.path)}
      className={`relative group font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-3 py-2 ${
        isPageActive(item.path) 
          ? 'text-gray-900' 
          : 'text-gray-600 hover:text-gray-900'
      }`}
      style={{ 
        '--tw-ring-color': theme.primary,
        color: isPageActive(item.path) ? theme.primary : undefined
      } as React.CSSProperties}
    >
      {item.label}
      <span 
        className={`absolute -bottom-1 left-3 right-3 h-0.5 transition-all duration-300 ${
          isPageActive(item.path) 
            ? 'scale-x-100 opacity-100' 
            : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
        }`}
        style={{ backgroundColor: theme.primary }}
      />
    </button>
  );

  // Reusable navigation link component for mobile
  const MobileNavLink = ({ item }: { item: (typeof NAV_ITEMS)[number] }) => {
    const active = isPageActive(item.path);
    return (
      <button
        onClick={() => handleNavigation(item.path)}
        className={`w-full text-left font-medium py-4 px-4 rounded-xl transition-all duration-200 flex items-center justify-between group ${
          active 
            ? 'translate-x-2 shadow-sm' 
            : 'hover:translate-x-2 hover:bg-gray-50'
        }`}
        style={{
          backgroundColor: active ? `${theme.primary}10` : undefined,
          color: active ? theme.primary : 'rgb(75, 85, 99)'
        }}
      >
        <span>{item.label}</span>
        <ChevronRight 
          className={`h-4 w-4 transition-all duration-200 ${
            active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`} 
          style={{ color: active ? theme.primary : undefined }}
        />
      </button>
    );
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 group cursor-pointer select-none"
              onClick={() => handleNavigation('/')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNavigation('/')}
            >
              <div
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: theme.primary }}
              >
                <Pin className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </div>
              <span
                className="text-xl lg:text-2xl font-bold transition-all duration-300 group-hover:scale-105"
                style={{ color: theme.primary }}
              >
                ThriftPin
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
              {NAV_ITEMS.map((item) => (
                <DesktopNavLink key={item.path} item={item} />
              ))}
              <div className="ml-4">
                <SignInButton 
                  pageTheme={theme} 
                  isOpen={isOpenSigninModal} 
                  setIsOpen={setIsOpenSigninModal}
                />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative z-50 p-2 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ 
                '--tw-ring-color': theme.primary
              } as React.CSSProperties}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-gray-700" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-700" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg border-b border-gray-100 shadow-2xl transition-all duration-300 ease-out ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto max-h-screen' 
              : 'opacity-0 -translate-y-4 pointer-events-none max-h-0'
          }`}
          style={{ minHeight: isMobileMenuOpen ? '100vh' : '0' }}
        >
          <div className="px-4 sm:px-6 py-8">
            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <MobileNavLink key={item.path} item={item} />
              ))}
              
              {/* Mobile Sign In Button */}
              <div className="pt-8 mt-8 border-t border-gray-100">
                <SignInButton 
                  pageTheme={theme} 
                  isOpen={isOpenSigninModal} 
                  setIsOpen={setIsOpenSigninModal}
                />
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Header;