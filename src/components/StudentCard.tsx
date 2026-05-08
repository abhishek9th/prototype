import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Student } from '../data/mockData';

interface Props {
  student: Student;
  index?: number;
}

export default function StudentCard({ student, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        to={`/marketplace`}
        className="group block bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 card-hover text-center"
      >
        <div className="relative inline-block mb-4">
          <img
            src={student.avatar}
            alt={student.name}
            className="w-20 h-20 rounded-full object-cover ring-4 ring-gray-100 dark:ring-gray-800 group-hover:ring-primary-100 dark:group-hover:ring-primary-900 transition-all"
          />
          <div
            className={`absolute bottom-0 right-0 w-5 h-5 rounded-full border-3 border-white dark:border-gray-900 ${
              student.availability === 'available' ? 'bg-green-400' : student.availability === 'busy' ? 'bg-amber-400' : 'bg-gray-400'
            }`}
          />
        </div>

        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{student.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{student.title}</p>

        <div className="flex items-center justify-center gap-1 mb-4 text-sm">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="font-medium text-gray-700 dark:text-gray-200">{student.rating}</span>
          <span className="text-gray-400">({student.reviews} reviews)</span>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {student.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
          <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            <MapPin className="w-3.5 h-3.5" />
            {student.university}
          </span>
          <span className="font-bold text-primary-600 dark:text-primary-400">${student.hourlyRate}/hr</span>
        </div>
      </Link>
    </motion.div>
  );
}
