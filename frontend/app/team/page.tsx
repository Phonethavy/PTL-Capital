'use client';

import Image from 'next/image';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Chanthone Sitthixay',
      position: 'Founder of PTL Holding',
      bio: 'Visionary leader with over 20 years of experience in strategic investments and business development across the ASEAN region.',
    },
    {
      name: 'Khamone Sitthixay',
      position: 'Deputy CEO',
      bio: 'Strategic executive specializing in operational excellence and portfolio management with deep expertise in Asian markets.',
    },
    {
      name: 'Victor Rattanavong',
      position: 'Chief Investment Officer',
      bio: 'Investment expert with a proven track record in identifying high-growth opportunities and driving value creation.',
    },
    {
      name: 'Chanthone Sitthixay',
      position: 'Founder of PTL Holding',
      bio: 'Experienced finance professional focused on corporate strategy and financial planning.',
    },
    {
      name: 'Khamone Sitthixay',
      position: 'Deputy CEO',
      bio: 'Technology and innovation specialist driving digital transformation initiatives.',
    },
    {
      name: 'Victor Rattanavong',
      position: 'Chief Investment Officer',
      bio: 'Investment professional with expertise in due diligence and deal structuring.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center -mt-20">
        <Image
          src="/team.png"
          alt="Our Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">Our Team</h1>
          <p className="text-xl md:text-2xl drop-shadow-lg">Meet the experts behind our success</p>
        </div>
      </section>

      {/* Team Profiles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team Profiles</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team brings together decades of experience in investment management, strategic planning, and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-80 bg-gradient-to-br from-gray-300 to-gray-400"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Profile */}
          <div className="grid md:grid-cols-2 gap-12 items-start bg-gray-50 p-8 rounded-lg">
            <div className="h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg"></div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Chanthone Sitthixay</h2>
              <p className="text-blue-600 text-xl mb-6">Founder of PTL Holding</p>
              <p className="text-gray-600 mb-4">
                Mr. Chanthone Sitthixay is a seasoned entrepreneur and investor with a distinguished track record in building and scaling businesses across Southeast Asia. As the founder of PTL Holding, he has been instrumental in establishing a diversified portfolio of investments spanning multiple industries.
              </p>
              <p className="text-gray-600 mb-4">
                With over two decades of experience in corporate finance and strategic investments, Mr. Sitthixay has developed deep expertise in identifying emerging market opportunities and executing complex transactions. His leadership style emphasizes long-term value creation, operational excellence, and sustainable growth.
              </p>
              <p className="text-gray-600 mb-4">
                Under his guidance, PTL Holding has established itself as a leading investment firm in the region, known for its disciplined approach to capital allocation and commitment to partnering with exceptional management teams.
              </p>
              <p className="text-gray-600">
                Mr. Sitthixay holds advanced degrees in business and finance and is actively involved in various industry associations and advisory boards.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Our Team</h3>
                <div className="grid grid-cols-4 gap-4">
                  {teamMembers.slice(0, 4).map((member, index) => (
                    <div key={index} className="text-center">
                      <div className="h-24 w-24 mx-auto bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mb-2"></div>
                      <p className="text-sm font-semibold">{member.name}</p>
                      <p className="text-xs text-gray-600">{member.position}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-8">
            We're always looking for talented professionals to join our growing team
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View Opportunities
          </a>
        </div>
      </section>
    </div>
  );
}
