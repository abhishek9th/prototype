import { motion } from 'framer-motion';
import { DollarSign, Star, Briefcase, TrendingUp, Bell, CreditCard as Edit3, Upload, Clock, CheckCircle, MoreVertical } from 'lucide-react';
import { students } from '../data/mockData';
import AnimatedSection from '../components/AnimatedSection';

const student = students[0];

const activeGigs = [
  { id: '1', title: 'E-commerce Website Redesign', client: 'TechStart Inc.', deadline: '3 days', progress: 75, budget: 450 },
  { id: '2', title: 'Mobile App Landing Page', client: 'AppLab Studio', deadline: '5 days', progress: 40, budget: 200 },
  { id: '3', title: 'Dashboard UI Design', client: 'DataViz Co.', deadline: '7 days', progress: 15, budget: 350 },
];

const notifications = [
  { id: '1', text: 'New message from TechStart Inc.', time: '5 min ago', unread: true },
  { id: '2', text: 'You received a 5-star review!', time: '1 hour ago', unread: true },
  { id: '3', text: 'Payment of $450 received', time: '2 hours ago', unread: false },
  { id: '4', text: 'New project invitation', time: '1 day ago', unread: false },
];

export default function StudentDashboard() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1 space-y-6">
            <AnimatedSection>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-primary-100 dark:ring-primary-900/50"
                    />
                    <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-green-400 border-3 border-white dark:border-gray-900" />
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{student.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{student.title}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{student.university}</p>
                </div>

                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">{student.rating}</span>
                  <span className="text-sm text-gray-500">({student.reviews} reviews)</span>
                </div>

                <div className="flex gap-2 mb-6">
                  <button className="flex-1 btn-primary text-sm !py-2.5 flex items-center justify-center gap-2">
                    <Edit3 className="w-4 h-4" /> Edit Profile
                  </button>
                  <button className="flex-1 btn-outline text-sm !py-2.5 flex items-center justify-center gap-2">
                    <Upload className="w-4 h-4" /> Portfolio
                  </button>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {student.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Notifications */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Bell className="w-4 h-4" /> Notifications
                  </h3>
                  <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                    2 new
                  </span>
                </div>
                <div className="space-y-3">
                  {notifications.map((n) => (
                    <div key={n.id} className={`p-3 rounded-lg text-sm ${n.unread ? 'bg-primary-50/50 dark:bg-primary-950/30' : ''}`}>
                      <p className={`${n.unread ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                        {n.text}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Total Earnings', value: `$${student.earnings.toLocaleString()}`, icon: DollarSign, color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
                { label: 'Completed', value: student.completedGigs.toString(), icon: CheckCircle, color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
                { label: 'Active Gigs', value: '3', icon: Briefcase, color: 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400' },
                { label: 'This Month', value: '+18%', icon: TrendingUp, color: 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800"
                >
                  <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Active Gigs */}
            <AnimatedSection>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Active Gigs</h3>
                <div className="space-y-4">
                  {activeGigs.map((gig) => (
                    <div key={gig.id} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{gig.title}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{gig.client}</p>
                        </div>
                        <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                          <Clock className="w-3.5 h-3.5" /> {gig.deadline} left
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">${gig.budget}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-500"
                          style={{ width: `${gig.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5">{gig.progress}% complete</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Portfolio */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Portfolio</h3>
                  <button className="text-sm text-primary-600 dark:text-primary-400 font-medium hover:underline">
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {student.portfolio.map((img, i) => (
                    <div key={i} className="aspect-video rounded-xl overflow-hidden">
                      <img src={img} alt={`Portfolio ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
