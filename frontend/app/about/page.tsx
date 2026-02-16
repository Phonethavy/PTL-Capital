'use client';

import Image from 'next/image';
// import { Globe, Target, TrendingUp, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center -mt-20">
        <Image
          src="/about.jpg"
          alt="About PTL Capital"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">About Us</h1>
          <p className="text-xl md:text-2xl drop-shadow-lg">Leading the way in strategic investments</p>
        </div>
      </section>

      {/* Investment Asia Focus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/globe.jpg"
                alt="Investment Asia Focus"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Investment Asia Focus</h2>
              <p className="text-gray-600 mb-4">
                As a Hong Kong-based investment company, we are positioned at the heart of Asia's financial hub. Our strategic location provides unparalleled access to the region's most dynamic markets and emerging opportunities.
              </p>
              <p className="text-gray-600 mb-4">
                We leverage our deep understanding of Asian markets, combined with our global network and expertise, to identify and capitalize on investment opportunities that offer superior risk-adjusted returns.
              </p>
              <p className="text-gray-600">
                Our focus extends across key sectors including technology, healthcare, financial services, and sustainable infrastructure, where we see the greatest potential for long-term value creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laser Mid-Market Focus */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Laser Mid-Market Focus</h2>
              <p className="text-gray-600 mb-4">
                Our investment strategy is laser-focused on mid-market companies demonstrating exceptional growth potential. This segment often represents the sweet spot of opportunity – companies large enough to have proven business models yet nimble enough to scale rapidly.
              </p>
              <p className="text-gray-600 mb-4">
                We specialize in identifying overlooked market leaders at this critical inflection point, where strategic capital and operational expertise can unlock transformational value. Our hands-on approach and sector specialization enable us to help these companies navigate growth challenges and seize market opportunities.
              </p>
              <p className="text-gray-600">
                By concentrating our efforts on this segment, we maintain deep expertise while ensuring each investment receives the attention and resources needed to succeed.
              </p>
            </div>
          
          </div>
        </div>
      </section>

      {/* Exclusively Driven */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/chart.jpg"
                alt="Exclusively Driven"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Exclusively Driven</h2>
              <p className="text-gray-600 mb-4">
                We are exclusively driven by a commitment to generating superior risk-adjusted returns while maintaining the highest standards of integrity and transparency. Our investment philosophy is grounded in rigorous fundamental analysis and a disciplined approach to capital allocation.
              </p>
              <p className="text-gray-600 mb-4">
                Every decision we make is guided by a long-term perspective and a focus on sustainable value creation. We believe that aligning our interests with those of our portfolio companies and stakeholders is essential to achieving enduring success.
              </p>
              <p className="text-gray-600">
                This exclusive focus ensures that we remain nimble, decisive, and deeply engaged with each investment, rather than spreading our resources too thin across disparate opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Investment Philosophy</h2>
              <p className="text-gray-600 mb-4">
                Our investment philosophy is built on four core pillars that guide every decision we make:
              </p>
              <ul className="space-y-3 text-gray-600 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Deep Due Diligence:</strong> We conduct comprehensive analysis of market dynamics, competitive positioning, and management capabilities before making any investment.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Active Partnership:</strong> We work closely with management teams to drive operational improvements and strategic initiatives.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Risk Management:</strong> We employ rigorous risk assessment and monitoring processes to protect and enhance value.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Long-term Value:</strong> We focus on sustainable growth and value creation over multiple business cycles.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/coins.jpg"
                alt="Investment Philosophy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8">
            Discover how we can help drive your business forward
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
