'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Users, Target, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white -mt-20">
        <Image
          src="/hd1.png"
          alt="Vientiane Cityscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-2xl">PTL CAPITAL</h1>
          <p className="text-2xl md:text-3xl mb-10 text-white font-light drop-shadow-lg">
            The Gateway to ASEAN Growth
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/30 transition font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Get Started
            <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-3">10</div>
              <div className="text-gray-600 font-medium">Active Investments</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-3">2004</div>
              <div className="text-gray-600 font-medium">Year Founded</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-3">15+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-3">20+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Stats Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About & Stats Overview</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                PTL Capital is a distinguished investment company with a strategic focus on high-growth markets across the Asia-Pacific region. Since our establishment in 2004, we have been dedicated to identifying and nurturing exceptional investment opportunities.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Our comprehensive approach combines deep market expertise, rigorous analysis, and long-term value creation to deliver superior returns for our stakeholders.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
              >
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg flex items-center justify-center h-24 hover:shadow-lg transition-shadow">
                <div className="text-gray-400 font-semibold">Client {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Investments Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Investments</h2>
            <p className="text-gray-600 text-lg">
              We invest in businesses that are reshaping industries and creating lasting value
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">PTL Capital</h3>
                  <p className="text-gray-600 mb-4">
                    Strategic Investment Management and Financial Services
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-semibold">Active</span>
                    <Link href="/services" className="text-blue-600 hover:text-blue-700">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View All Investments
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Team Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Teams</h2>
            <p className="text-gray-600 text-lg">
              Meet the experienced professionals driving our success
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Chanthone Sitthixay', position: 'Founder of PTL Holding' },
              { name: 'Khamone Sitthixay', position: 'Deputy CEO' },
              { name: 'Victor Rattanavong', position: 'Chief Investment Officer' },
              { name: 'Chanthone Sitthixay', position: 'Founder of PTL Holding' },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-gray-300 to-gray-400"></div>
                <div className="p-6 text-center">
                  <h3 className="font-bold mb-1 text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/team"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
            >
              View Full Team
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">News</h2>
            <p className="text-gray-600 text-lg">
              Stay updated with our latest announcements and insights
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Gateway to ASEAN Growth', date: 'March 15, 2024' },
              { title: 'Investment Strategy Update', date: 'March 10, 2024' },
              { title: 'Market Insights Q1 2024', date: 'March 5, 2024' },
            ].map((news, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">
                    Exploring new opportunities in the ASEAN region...
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PTL Holding Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Link 
                href="https://www.ptlholding.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mb-6 inline-block cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/PTLholding.png" 
                  alt="PTL Holding Logo" 
                  width={200} 
                  height={20}
                  className="w-30 h-auto"
                />
              </Link>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">PTL Holding</h2>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                PTL Holding serves as the umbrella organization for our diverse portfolio of investments and business ventures. Our integrated approach enables us to leverage synergies across different sectors while maintaining focused expertise in each domain.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Through PTL Holding, we provide strategic guidance, operational support, and access to our extensive network of partners and resources.
              </p>
            </div>
            <Link 
              href="https://www.ptlholding.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative h-[320px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer block"
            >
              <Image
                src="/town.png"
                alt="PTL Holding Building"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

