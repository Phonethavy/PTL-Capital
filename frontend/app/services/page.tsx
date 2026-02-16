'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center -mt-20">
        <Image
          src="/sevice.png"
          alt="Our Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">Our Service</h1>
          <p className="text-xl md:text-2xl drop-shadow-lg">Our Portfolio of Companies</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Portfolio of Companies</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We invest in exceptional businesses across various sectors, providing strategic capital and operational expertise to drive growth and value creation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sample Investment Cards */}
            {[
              {
                name: 'PTL Capital',
                description: 'Strategic Investment Management and Financial Advisory Services',
                status: 'Active',
              },
              {
                name: 'PTL Capital',
                description: 'Technology Solutions and Digital Transformation Services',
                status: 'Active',
              },
              {
                name: 'PTL Capital',
                description: 'Real Estate Development and Property Management',
                status: 'Active',
              },
              {
                name: 'PTL Capital',
                description: 'Healthcare and Life Sciences Investment',
                status: 'Active',
              },
              {
                name: 'PTL Capital',
                description: 'Sustainable Infrastructure and Renewable Energy',
                status: 'Active',
              },
              {
                name: 'PTL Capital',
                description: 'Financial Technology and Digital Banking Solutions',
                status: 'Active',
              },
              {
                name: 'PTL Capital',
                description: 'E-commerce and Retail Innovation',
                status: 'Active',
              },
              {
                name: 'PTL Capital',
                description: 'Logistics and Supply Chain Management',
                status: 'Active',
              },
              {
                name: 'PTL Capital',
                description: 'Educational Technology and Learning Platforms',
                status: 'Active',
              },
              {
                name: 'PTL Capital',
                description: 'Manufacturing and Industrial Automation',
                status: 'Closed',
              },
              {
                name: 'PTL Capital',
                description: 'Hospitality and Tourism Services',
                status: 'Active',
              },
              {
                name: 'PTL Capital',
                description: 'Agritech and Food Technology Solutions',
                status: 'Active',
              },
            ].map((investment, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{investment.name}</h3>
                  <p className="text-gray-600 mb-4">{investment.description}</p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm font-semibold ${
                        investment.status === 'Active'
                          ? 'text-green-600'
                          : 'text-gray-500'
                      }`}
                    >
                      {investment.status}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investment Sectors</h2>
            <p className="text-gray-600">
              We focus on high-growth sectors with strong fundamentals
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Technology',
              'Healthcare',
              'Financial Services',
              'Real Estate',
              'Infrastructure',
              'E-commerce',
              'Manufacturing',
              'Education',
            ].map((sector, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{sector}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Portfolio?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn more about our investment approach and how we can help your business grow
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
