'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-400">PTL</span> Capital
            </div>
            <p className="text-sm mb-4">
              Leading investment company focusing on strategic investments and comprehensive
              investment management services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition">
                  Our Service
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-blue-400 transition">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>info@ptlcapital.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>123 Business Street, Financial District, City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PTL Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
