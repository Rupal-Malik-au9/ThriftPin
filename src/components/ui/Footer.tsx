import { ThemeType } from "@/types";
import { Pin } from "lucide-react";

const Footer = ({ theme }: { theme: ThemeType }) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
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
              Where Pinterest inspiration meets sustainable fashion. Turning your
              style dreams into eco-friendly reality.
            </p>
          </div>

          {/* For Pinners Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">For Pinners</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Link Your Board
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Style Matching
                </a>
              </li>
            </ul>
          </div>

          {/* For Thrifters Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">For Thrifters</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Join as Curator
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Thrifter Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ThriftPin. Sustainable style, Pinterest-inspired.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;