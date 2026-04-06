import { ShieldCheck, Star, Sparkles, History, Award, CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header - Matches Contact Page Theme */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          About <span className="text-red-500">Us</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Trusted Fireworks Dealer in Hosur since 2005, bringing joy and color to your celebrations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column: Our Story */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <History className="text-red-500" />
            Our Story
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-red-500 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Established in <span className="font-bold text-red-600">2005</span>, Divya Crackers has been lighting up celebrations across Hosur and beyond for nearly two decades.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What started as a small fireworks shop has grown into one of the most trusted names in the fireworks industry. We believe every celebration deserves a spectacular and safe finish, which is why we only partner with the best in the business.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Value: Quality */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Quality</h3>
                <p className="text-gray-600">Only the finest products sourced from certified and top-tier manufacturers.</p>
              </div>
            </div>

            {/* Value: Safety */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Safety</h3>
                <p className="text-gray-600">Strict safety standards in storage and handling to ensure a worry-free celebration.</p>
              </div>
            </div>

            {/* Value: Variety */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Variety</h3>
                <p className="text-gray-600">500+ products across 15+ categories to suit every budget and taste.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Authorized Dealers */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Authorized Dealers</h2>
          <p className="text-gray-600 mb-8">
            We are proud authorized dealers for two of India's most renowned fireworks manufacturers, ensuring you get 100% genuine products.
          </p>

          <div className="space-y-6">
            {/* Dealer 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-yellow-500 relative overflow-hidden group">
              <div className="absolute top-[-10px] right-[-10px] opacity-10 group-hover:rotate-12 transition-transform">
                <Star size={100} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Standard Fireworks</h3>
                <p className="text-red-500 font-semibold mb-3 uppercase tracking-wider text-sm">India's Leading Brand</p>
                <p className="text-gray-600 leading-relaxed">
                  Known globally for their innovation and safety, Standard Fireworks provides the gold standard in pyrotechnics.
                </p>
              </div>
            </div>

            {/* Dealer 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-orange-500 relative overflow-hidden group">
              <div className="absolute top-[-10px] right-[-10px] opacity-10 group-hover:rotate-12 transition-transform">
                <Award size={100} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Ellis Fireworks</h3>
                <p className="text-red-500 font-semibold mb-3 uppercase tracking-wider text-sm">Premium Quality</p>
                <p className="text-gray-600 leading-relaxed">
                  Specializing in vibrant colors and premium display shots that make every event unforgettable.
                </p>
              </div>
            </div>
          </div>

          {/* Matches the 'Quick Order' box style from Contact Page */}
          <div className="mt-8 bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-red-100">
            <h3 className="font-semibold text-xl text-gray-800 mb-3">Visit Our Store</h3>
            <p className="text-gray-600 mb-6">
              Experience the magic in person. Our shop is open all year round to help you find the perfect fireworks for your occasion.
            </p>
            <div className="flex items-center gap-4 text-gray-700">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Star className="text-yellow-500" size={20} />
              </div>
              <span className="font-medium">Open 365 Days a Year</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}