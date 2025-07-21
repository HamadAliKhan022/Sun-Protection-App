import React, { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const features = [
    {
      title: "Broad Spectrum Protection",
      description: "Offers SPF 50+ with UVA/UVB protection to shield your skin from harmful rays.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Water Resistant",
      description: "Stay protected for up to 80 minutes in water or during intense workouts.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Non-Greasy Formula",
      description: "Quick-absorbing and lightweight formula that leaves no residue behind.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Skin-Nourishing Ingredients",
      description: "Enriched with aloe vera and vitamin E for hydration and skin health.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      name: "Sophia R.",
      role: "Outdoor Enthusiast",
      quote: "This sunscreen has become a staple in my hiking kit. Lightweight and effective!",
      avatar: "https://placehold.co/100x100 ",
    },
    {
      name: "David M.",
      role: "Swimmer",
      quote: "Perfect for long hours in the pool. No eye irritation and lasts all day.",
      avatar: "https://placehold.co/100x100 ",
    },
    {
      name: "Lena T.",
      role: "Skincare Lover",
      quote: "I love how it blends with my skin. My face feels protected and nourished.",
      avatar: "https://placehold.co/100x100 ",
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Ultimate Sun Protection for Every Adventure
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Stay safe under the sun with our advanced SPF 50+ sunscreen. Lightweight, water-resistant, and perfect for every skin type.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              Buy Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://placehold.co/500x500 "
              alt="Sunscreen bottle"
              className="w-64 h-64 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Sunscreen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-indigo-600">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Info Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Product Details</h2>
          <div className="flex justify-center mb-6">
            <button
              className={`px-6 py-2 font-medium rounded-t-lg transition-colors duration-300 ${
                activeTab === "overview"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`px-6 py-2 font-medium rounded-t-lg transition-colors duration-300 ${
                activeTab === "ingredients"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </button>
            <button
              className={`px-6 py-2 font-medium rounded-t-lg transition-colors duration-300 ${
                activeTab === "usage"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("usage")}
            >
              How to Use
            </button>
          </div>
          <div className="bg-white p-6 rounded-b-lg shadow-md">
            {activeTab === "overview" && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Product Overview</h3>
                <p className="text-gray-600">
                  Our sunscreen is formulated to provide maximum protection while maintaining a lightweight and comfortable feel.
                  Whether you're hiking, swimming, or just enjoying a day out, this sunscreen keeps your skin safe and nourished.
                </p>
              </div>
            )}
            {activeTab === "ingredients" && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Key Ingredients</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Zinc Oxide - Natural UV blocker</li>
                  <li>Aloe Vera - Soothing and hydrating</li>
                  <li>Vitamin E - Antioxidant-rich skin nourishment</li>
                  <li>Green Tea Extract - Anti-inflammatory properties</li>
                  <li>Shea Butter - Deep moisturization</li>
                </ul>
              </div>
            )}
            {activeTab === "usage" && (
              <div>
                <h3 className="text-xl font-semibold mb-2">How to Use</h3>
                <p className="text-gray-600">
                  Apply generously 15 minutes before sun exposure. Reapply every 2 hours or after swimming, sweating, or towel drying.
                  For best results, use daily and combine with protective clothing and shade.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Skin Today</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Don't let the sun damage your skin. Try our premium sunscreen and enjoy the outdoors with confidence.
          </p>
          <button className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300">
            Get Yours Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">SunGuard Pro</h3>
              <p className="text-gray-400">Premium sun protection for your active lifestyle.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; 2025 Hamad Ali Khan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;