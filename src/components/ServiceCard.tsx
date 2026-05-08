import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Service } from '../data/mockData';

interface Props {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        to={`/service/${service.id}`}
        className="group block bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 card-hover"
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-medium text-gray-700 dark:text-gray-200">
            {service.category}
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={service.studentAvatar}
              alt={service.studentName}
              className="w-8 h-8 rounded-full object-cover ring-2 ring-white dark:ring-gray-900"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {service.studentName}
            </span>
          </div>

          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
            {service.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="font-medium text-gray-700 dark:text-gray-200">{service.rating}</span>
                <span>({service.reviews})</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {service.deliveryTime}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500 dark:text-gray-400">From</span>
              <p className="font-bold text-gray-900 dark:text-white">${service.price}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
