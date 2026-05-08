import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search, ArrowRight, CheckCircle, Star, Users, Briefcase, GraduationCap,
  Palette, Code, Video, PenTool, Camera, BookOpen, Share2, BarChart3,
  Shield, Rocket, Heart
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';
import StudentCard from '../components/StudentCard';
import { students, testimonials, stats, categories } from '../data/mockData';
import { useState } from 'react';

const iconMap: Record<string, React.ElementType> = {
  Palette, Code, Video, PenTool, Camera, BookOpen, Share2, BarChart3,
};

const howItWorks = [
  { step: '01', title: 'Browse & Discover', desc: 'Explore student profiles and services across various skill categories.', icon: Search },
  { step: '02', title: 'Hire with Confidence', desc: 'Review portfolios, ratings, and connect with verified student talent.', icon: Shield },
  { step: '03', title: 'Get Results', desc: 'Receive quality work on time with our secure delivery system.', icon: Rocket },
];

export default function Landing() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-200/30 dark:bg-secondary-900/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
                Student Skills On Demand
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 text-balance">
                Turn Student Talent Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
                  Opportunity
                </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
                Connect with skilled university students ready to deliver professional-quality work at affordable prices. From design to development, find your perfect match.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/marketplace" className="btn-primary inline-flex items-center justify-center gap-2">
                  Hire Talent <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/login" className="btn-outline inline-flex items-center justify-center gap-2">
                  Start Earning
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-500" /> No platform fees
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-500" /> Verified students
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Students collaborating"
                  className="rounded-3xl shadow-2xl shadow-primary-900/10"
                />
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-100 dark:bg-secondary-900/50 flex items-center justify-center">
                      <Users className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">2,500+</p>
                      <p className="text-xs text-gray-500">Active Students</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="font-bold text-gray-900 dark:text-white">4.9</span>
                    <span className="text-xs text-gray-500">Avg Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 lg:mt-16 max-w-2xl mx-auto lg:mx-0"
          >
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for skills... e.g. Web Development, Logo Design"
                className="w-full pl-14 pr-36 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white shadow-lg shadow-gray-900/5 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
              />
              <Link
                to="/marketplace"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl text-sm transition-colors"
              >
                Search
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Popular Categories
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Discover skilled students across diverse categories ready to bring your ideas to life.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Briefcase;
              return (
                <AnimatedSection key={cat.id} delay={i * 0.05}>
                  <Link
                    to="/marketplace"
                    className="group flex flex-col items-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-3 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white text-sm text-center">{cat.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cat.count} services</span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                How It Works
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Getting started is simple. Find the right student for your project in three easy steps.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <div className="relative text-center p-8">
                  <div className="inline-flex w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/50 items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="absolute top-6 right-8 text-5xl font-bold text-gray-100 dark:text-gray-800 font-display">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Students */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  Featured Freelancers
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Top-rated students delivering exceptional results.
                </p>
              </div>
              <Link to="/marketplace" className="hidden sm:inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:gap-3 transition-all">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.slice(0, 6).map((student, i) => (
              <StudentCard key={student.id} student={student} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-900 dark:to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
                    <AnimatedCounter target={stat.value} />
                  </p>
                  <p className="text-primary-200 text-sm font-medium">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                What People Say
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Hear from businesses and clients who found their perfect match.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.1}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white text-sm">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Aligned with Global Goals
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Rent-a-Skill contributes to sustainable development by empowering students and creating economic opportunity.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: GraduationCap, title: 'Quality Education', desc: 'Providing real-world experience that complements academic learning.', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
              { icon: Briefcase, title: 'Decent Work & Growth', desc: 'Creating accessible employment opportunities for students worldwide.', color: 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400' },
              { icon: Heart, title: 'Reduced Inequalities', desc: 'Bridging the gap between talent and opportunity regardless of background.', color: 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400' },
            ].map((sdg, i) => (
              <AnimatedSection key={sdg.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <div className={`w-14 h-14 rounded-2xl ${sdg.color} flex items-center justify-center mb-5`}>
                    <sdg.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{sdg.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{sdg.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl gradient-hero p-12 lg:p-16 text-center text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-primary-100 mb-8 max-w-lg mx-auto">
                  Join thousands of students and businesses already using Rent-a-Skill to connect, collaborate, and grow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/login" className="px-8 py-3.5 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                    Get Started Free
                  </Link>
                  <Link to="/marketplace" className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                    Browse Marketplace
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
