'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isAboutPage = pathname === '/about';
  const isServicesPage = pathname === '/services';
  const isTeamPage = pathname === '/team';
  const isContactPage = pathname === '/contact';
  const isTransparentHeader = isHomePage || isAboutPage || isServicesPage || isTeamPage || isContactPage;

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isTransparentHeader 
        ? 'bg-gradient-to-b from-black/30 to-transparent' 
        : 'bg-white/95 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/ban1.png" 
              alt="PTL Capital Logo" 
              width={120}
              height={40}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`hover:scale-105 transition-all duration-200 relative group ${
                isTransparentHeader
                  ? isActive('/') 
                    ? 'text-white font-semibold' 
                    : 'text-white/90 hover:text-white'
                  : isActive('/') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span>Home</span>
              <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                isTransparentHeader ? 'bg-white' : 'bg-blue-600'
              } ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/about" 
              className={`hover:scale-105 transition-all duration-200 relative group ${
                isTransparentHeader
                  ? isActive('/about') 
                    ? 'text-white font-semibold' 
                    : 'text-white/90 hover:text-white'
                  : isActive('/about') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span>About Us</span>
              <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                isTransparentHeader ? 'bg-white' : 'bg-blue-600'
              } ${
                isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/services" 
              className={`hover:scale-105 transition-all duration-200 relative group ${
                isTransparentHeader
                  ? isActive('/services') 
                    ? 'text-white font-semibold' 
                    : 'text-white/90 hover:text-white'
                  : isActive('/services') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span>Our Service</span>
              <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                isTransparentHeader ? 'bg-white' : 'bg-blue-600'
              } ${
                isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/team" 
              className={`hover:scale-105 transition-all duration-200 relative group ${
                isTransparentHeader
                  ? isActive('/team') 
                    ? 'text-white font-semibold' 
                    : 'text-white/90 hover:text-white'
                  : isActive('/team') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span>Team</span>
              <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                isTransparentHeader ? 'bg-white' : 'bg-blue-600'
              } ${
                isActive('/team') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/contact" 
              className={`hover:scale-105 transition-all duration-200 relative group ${
                isTransparentHeader
                  ? isActive('/contact') 
                    ? 'text-white font-semibold' 
                    : 'text-white/90 hover:text-white'
                  : isActive('/contact') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span>Contact</span>
              <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                isTransparentHeader ? 'bg-white' : 'bg-blue-600'
              } ${
                isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isTransparentHeader ? 'text-white' : 'text-gray-700'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/') 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/about') 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/services') 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Service
              </Link>
              <Link
                href="/team"
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/team') 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/contact"
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/contact') 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/admin"
                className="text-white bg-blue-600 hover:bg-blue-700 font-semibold px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
