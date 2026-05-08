import { motion } from 'framer-motion';
import {
  GraduationCap, Briefcase, Heart, Target, Lightbulb, Globe,
  TrendingUp, Users, ArrowRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              <Target className="w-4 h-4" /> Our Mission
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 max-w-4xl mx-auto text-balance">
              Empowering Students to Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
                Real Careers
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We believe every student has talent worth sharing. Rent-a-Skill bridges the gap between academic learning and professional opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="rounded-3xl shadow-xl"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Our Vision</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  We envision a world where every student can monetize their skills while still in school, building a professional portfolio and financial independence. By connecting student talent with local businesses and individuals, we create a win-win ecosystem that drives economic opportunity.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Lightbulb, text: 'Transform academic skills into real-world value' },
                    { icon: Globe, text: 'Create accessible opportunities regardless of background' },
                    { icon: TrendingUp, text: 'Bridge the gap between education and employment' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problem & Innovation */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                The Problem We Solve
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 h-full">
                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">For Students</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  <li>Limited job opportunities that fit academic schedules</li>
                  <li>No platform to showcase skills learned in college</li>
                  <li>Financial pressure without flexible earning options</li>
                  <li>Lack of real-world portfolio to show employers</li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mb-5">
                  <Briefcase className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">For Businesses</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  <li>Expensive agencies for simple tasks</li>
                  <li>Difficulty finding affordable, skilled talent</li>
                  <li>Long hiring processes for short-term needs</li>
                  <li>Limited access to fresh creative perspectives</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Innovative */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Why We Are Different
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Unlike traditional freelance platforms, we are purpose-built for the student ecosystem.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Student-First Design', desc: 'Built around academic schedules, campus communities, and student pricing models.', icon: GraduationCap },
              { title: 'Verified Talent', desc: 'University-verified profiles ensure quality and trust for every engagement.', icon: Target },
              { title: 'Micro-Gig Friendly', desc: 'Perfect for quick tasks — no long-term commitment required from either side.', icon: Lightbulb },
              { title: 'Mentorship Layer', desc: 'Senior students and alumni can mentor juniors, creating a growth pipeline.', icon: Users },
              { title: 'Local Focus', desc: 'Connect with talent in your area for in-person collaboration when needed.', icon: Globe },
              { title: 'Impact Driven', desc: 'Every gig completed contributes to SDG goals and student empowerment.', icon: Heart },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 h-full hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-900 dark:to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold text-white text-center mb-12">Market Opportunity</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 200, suffix: 'M+', label: 'Students Worldwide' },
              { value: 455, suffix: 'B', label: 'Gig Economy Market' },
              { value: 73, suffix: '%', label: 'Students Want Flexible Work' },
              { value: 42, suffix: '%', label: 'SMBs Need Affordable Talent' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div>
                  <p className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-primary-200 text-sm">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Goals */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                UN Sustainable Development Goals
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our platform directly contributes to three key SDGs through student empowerment.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                sdg: 'SDG 4',
                title: 'Quality Education',
                desc: 'Bridging theory and practice by giving students real projects that complement their education. Learn by doing, earn while learning.',
                color: 'from-blue-500 to-blue-600',
                bg: 'bg-blue-50 dark:bg-blue-900/20',
              },
              {
                icon: Briefcase,
                sdg: 'SDG 8',
                title: 'Decent Work & Economic Growth',
                desc: 'Creating dignified, flexible work opportunities for students that respect their academic commitments while building economic independence.',
                color: 'from-secondary-500 to-secondary-600',
                bg: 'bg-secondary-50 dark:bg-secondary-900/20',
              },
              {
                icon: Heart,
                sdg: 'SDG 10',
                title: 'Reduced Inequalities',
                desc: 'Democratizing access to professional opportunities regardless of socioeconomic background, geography, or institutional prestige.',
                color: 'from-accent-500 to-accent-600',
                bg: 'bg-accent-50 dark:bg-accent-900/20',
              },
            ].map((sdg, i) => (
              <AnimatedSection key={sdg.sdg} delay={i * 0.15}>
                <div className={`relative overflow-hidden rounded-2xl ${sdg.bg} p-8 h-full border border-gray-100 dark:border-gray-800`}>
                  <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${sdg.color} items-center justify-center mb-5`}>
                    <sdg.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">{sdg.sdg}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{sdg.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{sdg.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Join the Movement
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
              Whether you are a student with skills to share or a business looking for fresh talent, there is a place for you here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="btn-primary inline-flex items-center justify-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/marketplace" className="btn-outline inline-flex items-center justify-center gap-2">
                Explore Marketplace
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
