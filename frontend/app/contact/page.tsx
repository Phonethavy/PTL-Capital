'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center -mt-20">
        <Image
          src="/contract.png"
          alt="Contact Us"
          fill
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">Contact Us</h1>
          <p className="text-xl md:text-2xl drop-shadow-lg">Get in touch with our team</p>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Career</h2>
              <p className="text-gray-600 mb-4">
                Join our dynamic team and be part of a leading investment company shaping the future of business across the ASEAN region. We're always looking for talented professionals who share our passion for excellence and innovation.
              </p>
              <p className="text-gray-600 mb-6">
                At PTL Capital, we offer a collaborative environment, competitive compensation, and opportunities for professional growth. Whether you're experienced in finance, operations, or technology, we have positions that can help you advance your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Current Openings</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Full Time Positions */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-6">Full Time</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b">
                  <h4 className="font-semibold mb-2">Investment Analyst</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Analyze investment opportunities and support deal execution
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Location: Hong Kong</span>
                    <button className="text-blue-600 hover:text-blue-700">Apply →</button>
                  </div>
                </div>
                <div className="pb-4 border-b">
                  <h4 className="font-semibold mb-2">Portfolio Manager</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Oversee portfolio companies and drive value creation
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Location: Hong Kong</span>
                    <button className="text-blue-600 hover:text-blue-700">Apply →</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Internship Positions */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-6">Internship</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b">
                  <h4 className="font-semibold mb-2">Investment Intern</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Gain hands-on experience in investment analysis
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Location: Hong Kong</span>
                    <button className="text-blue-600 hover:text-blue-700">Apply →</button>
                  </div>
                </div>
                <div className="pb-4 border-b">
                  <h4 className="font-semibold mb-2">Operations Intern</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Support operations and administrative functions
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Location: Hong Kong</span>
                    <button className="text-blue-600 hover:text-blue-700">Apply →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Full Time</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1234567890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>

            {/* Map and Contact Info */}
            <div>
              <div className="bg-gray-200 h-96 rounded-lg mb-6 flex items-center justify-center">
                <MapPin size={48} className="text-gray-400" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-600">123 Business Street, Central District</p>
                    <p className="text-gray-600">Hong Kong</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600">+852 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">info@ptlcapital.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Presence</h2>
          
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Locations</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-blue-600" />
                    <span>Hong Kong</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-blue-600" />
                    <span>Singapore</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-blue-600" />
                    <span>Bangkok</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <Globe className="text-gray-400" size={64} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Globe({ size, className }: { size: number; className: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
