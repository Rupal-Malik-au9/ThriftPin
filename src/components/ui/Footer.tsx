import { ThemeType } from "@/types";
import { Link, Pin } from "lucide-react";

// Footer Component
const Footer = ({ theme }: {theme: ThemeType}) => (
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
            Where Pinterest inspiration meets sustainable fashion. Turning your
            style dreams into eco-friendly reality.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">For Pinners</h4>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Link Your Board
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Style Matching
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">For Thrifters</h4>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Join as Curator
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Thrifter Guidelines
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Success Stories
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; 2025 ThriftPin. Sustainable style, Pinterest-inspired.</p>
      </div>
    </div>
  </footer>
);

export default Footer;