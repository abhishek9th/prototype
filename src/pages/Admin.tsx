import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  LogOut,
  Users,
  Briefcase,
  DollarSign,
  TrendingUp,
  Search,
  Star,
  CheckCircle2,
  Trash2,
  Activity,
  Zap,
} from 'lucide-react';
import { students, services } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

const ADMIN_USER = 'aditising01';
const ADMIN_PASS = 'Abcd@1234';
const STORAGE_KEY = 'aditi_admin_authed';

function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    setTimeout(() => {
      if (username.trim() === ADMIN_USER && password === ADMIN_PASS) {
        sessionStorage.setItem(STORAGE_KEY, '1');
        onSuccess();
      } else {
        setError('Invalid credentials. Please try again.');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.4),transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-md mx-4"
      >
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-500 items-center justify-center mb-4 shadow-lg shadow-primary-600/30">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
              Admin Portal
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Restricted access. Authorized personnel only.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  autoComplete="username"
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                  className="w-full pl-12 pr-12 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-300 text-sm"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary flex items-center justify-center gap-2 !py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-block w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              ) : (
                <>
                  Sign In to Dashboard <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500">
            Protected area. All sign-in attempts are logged.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const { dark, toggle } = useTheme();
  const [query, setQuery] = useState('');

  const totalEarnings = students.reduce((sum, s) => sum + s.earnings, 0);
  const totalGigs = students.reduce((sum, s) => sum + s.completedGigs, 0);
  const avgRating = (
    students.reduce((sum, s) => sum + s.rating, 0) / students.length
  ).toFixed(2);

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.university.toLowerCase().includes(query.toLowerCase())
  );

  const stats = [
    {
      label: 'Total Users',
      value: students.length.toString(),
      sub: '+12% this month',
      icon: Users,
      color: 'bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400',
    },
    {
      label: 'Active Services',
      value: services.length.toString(),
      sub: 'Across all categories',
      icon: Briefcase,
      color: 'bg-accent-100 dark:bg-accent-900/40 text-accent-600 dark:text-accent-400',
    },
    {
      label: 'Platform Revenue',
      value: `$${totalEarnings.toLocaleString()}`,
      sub: '+24% vs last month',
      icon: DollarSign,
      color: 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400',
    },
    {
      label: 'Avg Rating',
      value: avgRating,
      sub: `${totalGigs} gigs completed`,
      icon: TrendingUp,
      color: 'bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400',
    },
  ];

  const recentActivity = [
    { id: 1, text: 'New service "Modern Website Development" submitted for review', time: '2 min ago', type: 'pending' },
    { id: 2, text: 'User Priya Sharma upgraded to Pro tier', time: '14 min ago', type: 'success' },
    { id: 3, text: 'Payout of $1,240 processed for 6 students', time: '1 hour ago', type: 'success' },
    { id: 4, text: 'Reported review on "Brand Identity & Logo Design"', time: '3 hours ago', type: 'warning' },
    { id: 5, text: 'New client account: TechStart Inc.', time: '5 hours ago', type: 'success' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <header className="sticky top-0 z-40 glass border-b border-gray-200/60 dark:border-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-600/30">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-gray-900 dark:text-white leading-tight">
                Admin Console
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight flex items-center gap-1">
                <Zap className="w-3 h-3" /> Rent-a-Skill
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="px-3 py-2 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {dark ? 'Light' : 'Dark'} mode
            </button>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              {ADMIN_USER}
            </span>
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white">
            Welcome back, Admin
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Here is what is happening on the platform today.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800"
            >
              <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gray-100 dark:border-gray-800">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Manage Users</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {filteredStudents.length} of {students.length} shown
                </p>
              </div>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search users..."
                  className="pl-10 pr-3 py-2 w-full sm:w-64 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr className="text-left text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    <th className="px-6 py-3 font-medium">User</th>
                    <th className="px-6 py-3 font-medium hidden md:table-cell">University</th>
                    <th className="px-6 py-3 font-medium">Rating</th>
                    <th className="px-6 py-3 font-medium hidden md:table-cell">Earnings</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-6 py-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {filteredStudents.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-10 text-center text-gray-400 dark:text-gray-500">
                        No users match your search.
                      </td>
                    </tr>
                  ) : (
                    filteredStudents.map((s) => (
                      <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={s.avatar}
                              alt={s.name}
                              className="w-9 h-9 rounded-full object-cover"
                            />
                            <div className="min-w-0">
                              <p className="font-medium text-gray-900 dark:text-white truncate">{s.name}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[180px]">
                                {s.title}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-300 hidden md:table-cell">
                          {s.university}
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1 text-gray-900 dark:text-white">
                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                            <span className="font-medium">{s.rating}</span>
                            <span className="text-xs text-gray-400">({s.reviews})</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white hidden md:table-cell">
                          ${s.earnings.toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                              s.availability === 'available'
                                ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300'
                                : s.availability === 'busy'
                                ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                s.availability === 'available'
                                  ? 'bg-green-500'
                                  : s.availability === 'busy'
                                  ? 'bg-amber-500'
                                  : 'bg-gray-400'
                              }`}
                            />
                            {s.availability}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="inline-flex items-center gap-1">
                            <button
                              className="p-1.5 rounded-lg text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950/40 transition-colors"
                              title="Approve"
                            >
                              <CheckCircle2 className="w-4 h-4" />
                            </button>
                            <button
                              className="p-1.5 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                              title="Remove"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-5">
              <Activity className="w-4 h-4" /> Recent Activity
            </h3>
            <ul className="space-y-4">
              {recentActivity.map((item) => (
                <li key={item.id} className="flex gap-3">
                  <span
                    className={`mt-1.5 w-2 h-2 shrink-0 rounded-full ${
                      item.type === 'success'
                        ? 'bg-green-500'
                        : item.type === 'warning'
                        ? 'bg-amber-500'
                        : 'bg-primary-500'
                    }`}
                  />
                  <div className="min-w-0">
                    <p className="text-sm text-gray-700 dark:text-gray-200 leading-snug">{item.text}</p>
                    <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-semibold text-gray-900 dark:text-white">Service Listings</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Review and moderate active gigs on the marketplace.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800/50">
                <tr className="text-left text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  <th className="px-6 py-3 font-medium">Service</th>
                  <th className="px-6 py-3 font-medium hidden md:table-cell">Provider</th>
                  <th className="px-6 py-3 font-medium hidden lg:table-cell">Category</th>
                  <th className="px-6 py-3 font-medium">Price</th>
                  <th className="px-6 py-3 font-medium hidden md:table-cell">Reviews</th>
                  <th className="px-6 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {services.map((s) => (
                  <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900 dark:text-white truncate max-w-[260px]">{s.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[260px]">{s.description}</p>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300 hidden md:table-cell">
                      {s.studentName}
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <span className="px-2.5 py-1 bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                        {s.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      ${s.price}
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        {s.rating} <span className="text-xs text-gray-400">({s.reviews})</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex items-center gap-1">
                        <button
                          className="p-1.5 rounded-lg text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950/40 transition-colors"
                          title="Approve"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                          title="Remove"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-500 pt-4">
          Rent-a-Skill Admin Console &middot; Internal use only
        </p>
      </main>
    </div>
  );
}

export default function Admin() {
  const [authed, setAuthed] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  });

  useEffect(() => {
    if (authed) {
      document.title = 'Admin Console — Rent-a-Skill';
    } else {
      document.title = 'Admin Login — Rent-a-Skill';
    }
  }, [authed]);

  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setAuthed(false);
  };

  return authed ? (
    <AdminDashboard onLogout={handleLogout} />
  ) : (
    <AdminLogin onSuccess={() => setAuthed(true)} />
  );
}
