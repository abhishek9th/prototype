import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, ArrowLeft, CheckCircle, MessageSquare, Share2, Heart } from 'lucide-react';
import { services } from '../data/mockData';
import ServiceCard from '../components/ServiceCard';
import { useState } from 'react';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);
  const [selectedPackage, setSelectedPackage] = useState(1);

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Service not found</h2>
          <Link to="/marketplace" className="text-primary-600 dark:text-primary-400 hover:underline">
            Back to marketplace
          </Link>
        </div>
      </div>
    );
  }

  const similarServices = services.filter((s) => s.category === service.category && s.id !== service.id);

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/marketplace" className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Marketplace
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-3">
                      {service.category}
                    </span>
                    <h1 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h1>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-primary-500 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                  <img src={service.studentAvatar} alt={service.studentName} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{service.studentName}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        {service.rating} ({service.reviews} reviews)
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.deliveryTime} delivery
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">About This Service</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.longDescription}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Reviews */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-100 dark:border-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Reviews</h2>
              <div className="space-y-6">
                {[
                  { name: 'Jordan Lee', time: '2 weeks ago', text: 'Incredible work! Delivered exactly what I asked for and communicated throughout the process.', rating: 5 },
                  { name: 'Taylor Smith', time: '1 month ago', text: 'Great quality and fast delivery. Would definitely hire again for future projects.', rating: 5 },
                  { name: 'Casey Brown', time: '2 months ago', text: 'Very professional approach. Understood the brief perfectly and added creative touches.', rating: 4 },
                ].map((review, i) => (
                  <div key={i} className="pb-6 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-700 dark:text-primary-300 font-semibold text-sm">
                          {review.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white text-sm">{review.name}</p>
                          <p className="text-xs text-gray-500">{review.time}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-13 leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Pricing */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              >
                <div className="flex border-b border-gray-100 dark:border-gray-800">
                  {service.packages.map((pkg, i) => (
                    <button
                      key={pkg.name}
                      onClick={() => setSelectedPackage(i)}
                      className={`flex-1 py-3 text-sm font-medium transition-colors ${
                        selectedPackage === i
                          ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                          : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {pkg.name}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${service.packages[selectedPackage].price}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.packages[selectedPackage].delivery}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.packages[selectedPackage].features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full btn-primary">
                    Continue (${service.packages[selectedPackage].price})
                  </button>
                  <button className="w-full mt-3 flex items-center justify-center gap-2 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <MessageSquare className="w-4 h-4" /> Contact Seller
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Similar Services */}
        {similarServices.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">Similar Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarServices.map((s, i) => (
                <ServiceCard key={s.id} service={s} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
