"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pin,
  Mail,
  Lock,
  Eye,
  EyeOff,
  X,
  Sparkles,
  Heart,
  Star,
} from "lucide-react";
import { colorThemes } from "@/lib/utils";
import GoogleIcon from "@/components/ui/icons/GoogleIcon";
import FloatingBackground from "@/components/ui/FloatingBackground";
import { ThemeType } from "@/types";

const SignInButton = ({ pageTheme, isOpen, setIsOpen }: { pageTheme: ThemeType, isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  // Cycle through themes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTheme((prev) => (prev + 1) % colorThemes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const theme = colorThemes[currentTheme];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic here
    console.log("Google sign in clicked");
  };

  return (
    <div className="flex md:items-center md:justify-center justify-start items-start pl-3 md:pl-0 z-[60]">
      {/* Button to open modal */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className="rounded-full border-2 hover:scale-105 transition-transform hover:!bg-white"
        style={{ color: pageTheme.primary, borderColor: pageTheme.primary }}
      >
        Sign In
      </Button>
      {/* Modal Overlay */}
  {isOpen && (
  <>
    {/* Prevent body scroll */}
    <style jsx global>{`
      body {
        overflow: hidden;
        position: fixed;
        width: 100%;
        height: 100%;
      }
    `}</style>
    
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300 !h-screen">
      {/* Mobile-first responsive container */}
      <div className="relative w-full h-full sm:h-auto sm:max-w-md sm:w-full transition-all duration-1000 ease-in-out overflow-y-auto sm:overflow-visible mb-auto my-auto max-h-screen">
        {/* Mobile: Full screen container, Desktop: Modal container */}
        <div 
          className="min-h-full sm:min-h-0 sm:m-4 flex items-center justify-center p-4 sm:p-0 rounded-md"
          style={{
            background: `linear-gradient(135deg, ${theme.background}, white, ${theme.accent})`,
          }}
        >
          {/* Floating Background */}
          <FloatingBackground theme={theme} />

          <Card className="relative w-full max-w-sm sm:max-w-md border-0 shadow-2xl rounded-t-3xl sm:rounded-3xl overflow-hidden backdrop-blur-sm bg-white/95 sm:mt-0 mb-4 sm:mb-0">
            {/* Close Button - Enhanced for mobile */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 touch-manipulation"
            >
              <X className="h-5 w-5 sm:h-4 sm:w-4 text-gray-600" />
            </button>
            <CardHeader className="text-center pb-2 sm:pb-6 pt-2 sm:pt-8 sm:px-6">
              {/* Logo - Responsive sizing */}
              <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: theme.primary }}
                >
                  <Pin className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <span
                  className="text-xl sm:text-2xl font-bold transition-all duration-1000"
                  style={{ color: theme.primary }}
                >
                  ThriftPin
                </span>
              </div>

              {/* Animated Badge - Responsive */}
              <div
                className="inline-flex items-center rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4 animate-pulse"
                style={{ backgroundColor: theme.accent }}
              >
                <Sparkles
                  className="h-3 w-3 sm:h-4 sm:w-4 mr-2 animate-spin"
                  style={{ color: theme.primary }}
                />
                <span
                  className="font-medium text-xs sm:text-sm"
                  style={{ color: theme.text }}
                >
                  Pinterest Dreams → Thrift Reality
                </span>
              </div>

              <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {isSignUp ? "Join ThriftPin" : "Welcome Back"}
              </CardTitle>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                {isSignUp
                  ? "Start your sustainable style journey today"
                  : "Sign in to discover your perfect thrift matches"}
              </p>
            </CardHeader>

            <CardContent className="px-4 sm:px-8 pb-6 sm:pb-8">
              {/* Google Sign In Button - Mobile optimized */}
              <Button
                onClick={handleGoogleSignIn}
                variant="outline"
                className="w-full mb-4 sm:mb-6 h-12 sm:h-12 rounded-full border-2 hover:scale-105 active:scale-95 transition-all duration-300 bg-white hover:bg-gray-50 shadow-md touch-manipulation"
                style={{ borderColor: theme.primary }}
              >
                <GoogleIcon />
                <span className="ml-3 font-semibold text-sm sm:text-base text-gray-700">
                  Continue with Google
                </span>
              </Button>

              {/* Divider */}
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">
                    or continue with email
                  </span>
                </div>
              </div>

              {/* Email/Password Form - Mobile optimized spacing */}
              <div className="space-y-3 sm:space-y-4">
                {isSignUp && (
                  <div className="relative group">
                    <div
                      className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center transition-all duration-300"
                      style={{ color: theme.primary }}
                    >
                      <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3 rounded-full border-2 border-gray-200 focus:border-current focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm sm:text-base touch-manipulation"
                      style={{
                        borderColor: theme.primary,
                        fontSize: '16px', // Prevents zoom on iOS
                        ...({
                          "--tw-ring-color": theme.primary,
                        } as React.CSSProperties & Record<string, string>),
                      }}
                      required={isSignUp}
                    />
                  </div>
                )}

                <div className="relative group">
                  <div
                    className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center transition-all duration-300"
                    style={{ color: theme.primary }}
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3 rounded-full border-2 border-gray-200 focus:border-current focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm sm:text-base touch-manipulation"
                    style={{
                      borderColor: theme.primary,
                      fontSize: '16px', // Prevents zoom on iOS
                      ...({
                        "--tw-ring-color": theme.primary,
                      } as React.CSSProperties & Record<string, string>),
                    }}
                    required
                  />
                </div>

                <div className="relative group">
                  <div
                    className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center transition-all duration-300"
                    style={{ color: theme.primary }}
                  >
                    <Lock className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 sm:pl-12 pr-12 py-3 sm:py-3 rounded-full border-2 border-gray-200 focus:border-current focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm sm:text-base touch-manipulation"
                    style={{
                      borderColor: theme.primary,
                      fontSize: '16px', // Prevents zoom on iOS
                      ...({
                        "--tw-ring-color": theme.primary,
                      } as React.CSSProperties & Record<string, string>),
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors touch-manipulation"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
                    ) : (
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </button>
                </div>

                {isSignUp && (
                  <div className="relative group">
                    <div
                      className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center transition-all duration-300"
                      style={{ color: theme.primary }}
                    >
                      <Lock className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3 rounded-full border-2 border-gray-200 focus:border-current focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm sm:text-base touch-manipulation"
                      style={{
                        borderColor: theme.primary,
                        fontSize: '16px', // Prevents zoom on iOS
                        ...({
                          "--tw-ring-color": theme.primary,
                        } as React.CSSProperties & Record<string, string>),
                      }}
                      required={isSignUp}
                    />
                  </div>
                )}

                {!isSignUp && (
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-xs sm:text-sm font-medium transition-colors duration-200 hover:underline touch-manipulation"
                      style={{ color: theme.primary }}
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <Button
                  onClick={handleSubmit}
                  className="w-full py-3 sm:py-3 rounded-full text-white font-semibold text-base sm:text-lg transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl touch-manipulation"
                  style={{ backgroundColor: theme.primary }}
                >
                  <Star className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {isSignUp ? "Create Account" : "Sign In"}
                  <Sparkles className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>

              {/* Switch between Sign In/Sign Up */}
              <div className="text-center mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
                <p className="text-sm sm:text-base text-gray-600">
                  {isSignUp
                    ? "Already have an account?"
                    : "Don't have an account?"}
                  <button
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="ml-2 font-semibold transition-colors duration-200 hover:underline touch-manipulation"
                    style={{ color: theme.primary }}
                  >
                    {isSignUp ? "Sign In" : "Sign Up"}
                  </button>
                </p>
              </div>

              {/* Terms and Privacy for Sign Up */}
              {isSignUp && (
                <p className="text-xs text-gray-500 text-center mt-3 sm:mt-4 leading-relaxed px-2">
                  By creating an account, you agree to our{" "}
                  <button
                    className="underline transition-colors duration-200 touch-manipulation"
                    style={{ color: theme.primary }}
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    className="underline transition-colors duration-200 touch-manipulation"
                    style={{ color: theme.primary }}
                  >
                    Privacy Policy
                  </button>
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </>
)}
    </div>
  );
}
export default SignInButton