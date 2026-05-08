import { motion } from 'framer-motion';
import {
  Plus, Search, Star, Bookmark, MessageSquare, DollarSign,
  Users, Clock, Filter, ChevronRight
} from 'lucide-react';
import { students } from '../data/mockData';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const recentHires = [
  { id: '1', name: 'Priya Sharma', task: 'Website Redesign', status: 'In Progress', amount: 350, avatar: students[0].avatar },
  { id: '2', name: 'Alex Chen', task: 'Promo Video', status: 'Completed', amount: 250, avatar: students[1].avatar },
  { id: '3', name: 'Sarah Williams', task: 'Logo Design', status: 'Completed', amount: 120, avatar: students[2].avatar },
];

const messages = [
  { id: '1', name: 'Priya Sharma', message: 'Just finished the homepage mockup, check it out!', time: '10 min ago', avatar: students[0].avatar, unread: true },
  { id: '2', name: 'Alex Chen', message: 'Video is exported and ready for review.', time: '2 hours ago', avatar: students[1].avatar, unread: false },
  { id: '3', name: 'David Kim', message: 'Available for the photoshoot next Tuesday?', time: '1 day ago', avatar: students[5].avatar, unread: false },
];

export default function ClientDashboard() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-display font-bold text-gray-900 dark:text-white">Client Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Manage your projects and find talent.</p>
          </div>
          <Link to="/marketplace" className="btn-primary text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" /> Post a Job
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Active Projects', value: '3', icon: Clock, color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
            { label: 'Total Spent', value: '$2,450', icon: DollarSign, color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
            { label: 'Freelancers Hired', value: '8', icon: Users, color: 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400' },
            { label: 'Saved', value: '12', icon: Bookmark, color: 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' },
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2 space-y-6">
            {/* Browse Students */}
            <AnimatedSection>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Browse Students</h3>
                  <Link to="/marketplace" className="text-sm text-primary-600 dark:text-primary-400 font-medium flex items-center gap-1">
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="flex gap-3 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by skill or name..."
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                    />
                  </div>
                  <button className="p-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <Filter className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {students.slice(0, 4).map((s) => (
                    <div key={s.id} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                      <img src={s.avatar} alt={s.name} className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 dark:text-white text-sm truncate">{s.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{s.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="flex items-center gap-0.5 text-xs">
                            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                            {s.rating}
                          </span>
                          <span className="text-xs text-gray-400">${s.hourlyRate}/hr</span>
                        </div>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-primary-500 transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Recent Hires */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Recent Hires</h3>
                <div className="space-y-3">
                  {recentHires.map((hire) => (
                    <div key={hire.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                      <div className="flex items-center gap-3">
                        <img src={hire.avatar} alt={hire.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white text-sm">{hire.name}</p>
                          <p className="text-xs text-gray-500">{hire.task}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
                          hire.status === 'Completed'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        }`}>
                          {hire.status}
                        </span>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mt-1">${hire.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Messages */}
            <AnimatedSection>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Messages
                  </h3>
                  <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                    1 new
                  </span>
                </div>
                <div className="space-y-3">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`p-3 rounded-lg ${msg.unread ? 'bg-primary-50/50 dark:bg-primary-950/30' : ''}`}>
                      <div className="flex items-start gap-3">
                        <img src={msg.avatar} alt={msg.name} className="w-9 h-9 rounded-full object-cover" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-gray-900 dark:text-white text-sm">{msg.name}</p>
                            <span className="text-xs text-gray-400">{msg.time}</span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">{msg.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Budget */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Budget Overview</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Monthly Budget', spent: 1200, total: 2000 },
                    { label: 'Project Fund', spent: 850, total: 1500 },
                  ].map((budget) => (
                    <div key={budget.label}>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-400">{budget.label}</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          ${budget.spent} / ${budget.total}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                          style={{ width: `${(budget.spent / budget.total) * 100}%` }}
                        />
                      </div>
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
