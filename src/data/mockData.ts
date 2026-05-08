export interface Student {
  id: string;
  name: string;
  avatar: string;
  title: string;
  skills: string[];
  rating: number;
  reviews: number;
  hourlyRate: number;
  description: string;
  portfolio: string[];
  university: string;
  availability: 'available' | 'busy' | 'offline';
  completedGigs: number;
  earnings: number;
}

export interface Service {
  id: string;
  studentId: string;
  studentName: string;
  studentAvatar: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  rating: number;
  reviews: number;
  price: number;
  deliveryTime: string;
  tags: string[];
  image: string;
  packages: { name: string; price: number; delivery: string; features: string[] }[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}

export const categories: Category[] = [
  { id: '1', name: 'Graphic Design', icon: 'Palette', count: 156 },
  { id: '2', name: 'Web Development', icon: 'Code', count: 203 },
  { id: '3', name: 'Video Editing', icon: 'Video', count: 98 },
  { id: '4', name: 'Content Writing', icon: 'PenTool', count: 134 },
  { id: '5', name: 'Photography', icon: 'Camera', count: 87 },
  { id: '6', name: 'Tutoring', icon: 'BookOpen', count: 245 },
  { id: '7', name: 'Social Media', icon: 'Share2', count: 112 },
  { id: '8', name: 'Data Analysis', icon: 'BarChart3', count: 76 },
];

export const students: Student[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    title: 'Full-Stack Developer & UI Designer',
    skills: ['React', 'Node.js', 'Figma', 'TypeScript'],
    rating: 4.9,
    reviews: 47,
    hourlyRate: 25,
    description: 'Passionate CS student specializing in modern web applications with 2+ years of freelance experience.',
    portfolio: ['https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600'],
    university: 'IIT Delhi',
    availability: 'available',
    completedGigs: 52,
    earnings: 4800,
  },
  {
    id: '2',
    name: 'Alex Chen',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    title: 'Video Editor & Motion Designer',
    skills: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Blender'],
    rating: 4.8,
    reviews: 32,
    hourlyRate: 30,
    description: 'Film studies student creating cinematic content for brands and creators.',
    portfolio: ['https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600'],
    university: 'NYU Tisch',
    availability: 'available',
    completedGigs: 38,
    earnings: 3600,
  },
  {
    id: '3',
    name: 'Sarah Williams',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    title: 'Graphic Designer & Brand Strategist',
    skills: ['Illustrator', 'Photoshop', 'Brand Identity', 'Typography'],
    rating: 4.9,
    reviews: 56,
    hourlyRate: 22,
    description: 'Design student turning ideas into visual stories that captivate audiences.',
    portfolio: ['https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600'],
    university: 'Parsons School of Design',
    availability: 'busy',
    completedGigs: 64,
    earnings: 5200,
  },
  {
    id: '4',
    name: 'Marcus Johnson',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    title: 'Content Writer & SEO Specialist',
    skills: ['Blog Writing', 'SEO', 'Copywriting', 'Research'],
    rating: 4.7,
    reviews: 28,
    hourlyRate: 18,
    description: 'English major crafting compelling content that ranks and converts.',
    portfolio: ['https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600'],
    university: 'Columbia University',
    availability: 'available',
    completedGigs: 31,
    earnings: 2100,
  },
  {
    id: '5',
    name: 'Aisha Patel',
    avatar: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    title: 'Social Media Manager & Strategist',
    skills: ['Instagram', 'TikTok', 'Analytics', 'Content Strategy'],
    rating: 4.8,
    reviews: 41,
    hourlyRate: 20,
    description: 'Marketing student helping brands grow their social presence organically.',
    portfolio: ['https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600'],
    university: 'Wharton School',
    availability: 'available',
    completedGigs: 45,
    earnings: 3400,
  },
  {
    id: '6',
    name: 'David Kim',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    title: 'Photographer & Visual Storyteller',
    skills: ['Portrait', 'Product Photography', 'Lightroom', 'Event Coverage'],
    rating: 4.9,
    reviews: 63,
    hourlyRate: 35,
    description: 'Fine arts student capturing moments that tell powerful stories.',
    portfolio: ['https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600'],
    university: 'RISD',
    availability: 'available',
    completedGigs: 71,
    earnings: 7200,
  },
];

export const services: Service[] = [
  {
    id: '1',
    studentId: '1',
    studentName: 'Priya Sharma',
    studentAvatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    title: 'Modern Website Development with React',
    category: 'Web Development',
    description: 'I will build a responsive, modern website using React and Tailwind CSS.',
    longDescription: 'I specialize in building high-performance web applications using React, TypeScript, and modern CSS frameworks. Whether you need a landing page, e-commerce site, or complex web app, I deliver clean code with pixel-perfect designs. Every project includes responsive design, SEO optimization, and cross-browser compatibility.',
    rating: 4.9,
    reviews: 47,
    price: 150,
    deliveryTime: '5 days',
    tags: ['React', 'Tailwind', 'Responsive', 'TypeScript'],
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
    packages: [
      { name: 'Basic', price: 150, delivery: '5 days', features: ['Single page', 'Responsive design', '2 revisions', 'Source code'] },
      { name: 'Standard', price: 350, delivery: '7 days', features: ['Up to 5 pages', 'Responsive design', '5 revisions', 'Source code', 'SEO optimization'] },
      { name: 'Premium', price: 600, delivery: '14 days', features: ['Full web app', 'Responsive design', 'Unlimited revisions', 'Source code', 'SEO', 'Backend integration'] },
    ],
  },
  {
    id: '2',
    studentId: '2',
    studentName: 'Alex Chen',
    studentAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    title: 'Professional Video Editing & Motion Graphics',
    category: 'Video Editing',
    description: 'I will edit your videos with professional transitions and effects.',
    longDescription: 'From raw footage to polished content — I transform your video ideas into cinematic experiences. Specializing in YouTube content, social media reels, corporate videos, and promotional materials. I use industry-standard tools and modern editing techniques to deliver engaging videos that captivate your audience.',
    rating: 4.8,
    reviews: 32,
    price: 100,
    deliveryTime: '3 days',
    tags: ['Video Editing', 'Motion Graphics', 'Color Grading', 'SFX'],
    image: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=600',
    packages: [
      { name: 'Basic', price: 100, delivery: '3 days', features: ['Up to 5 min', 'Basic cuts & transitions', 'Background music', '1 revision'] },
      { name: 'Standard', price: 250, delivery: '5 days', features: ['Up to 15 min', 'Advanced editing', 'Motion graphics', 'Color grading', '3 revisions'] },
      { name: 'Premium', price: 500, delivery: '7 days', features: ['Up to 30 min', 'Full production', 'Custom animations', 'Sound design', 'Unlimited revisions'] },
    ],
  },
  {
    id: '3',
    studentId: '3',
    studentName: 'Sarah Williams',
    studentAvatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    title: 'Brand Identity & Logo Design',
    category: 'Graphic Design',
    description: 'I will create a unique brand identity that tells your story.',
    longDescription: 'Your brand deserves a visual identity that stands out. I create comprehensive brand packages including logos, color palettes, typography systems, and brand guidelines. Every design is crafted with intention — combining aesthetics with strategy to help your brand connect with its audience.',
    rating: 4.9,
    reviews: 56,
    price: 120,
    deliveryTime: '4 days',
    tags: ['Logo Design', 'Branding', 'Typography', 'Visual Identity'],
    image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600',
    packages: [
      { name: 'Basic', price: 120, delivery: '4 days', features: ['3 logo concepts', '2 revisions', 'PNG & SVG files', 'Color palette'] },
      { name: 'Standard', price: 280, delivery: '6 days', features: ['5 logo concepts', '5 revisions', 'All file formats', 'Brand guide', 'Business card design'] },
      { name: 'Premium', price: 500, delivery: '10 days', features: ['Full brand identity', 'Unlimited revisions', 'Stationery design', 'Social media kit', 'Brand guidelines doc'] },
    ],
  },
  {
    id: '4',
    studentId: '4',
    studentName: 'Marcus Johnson',
    studentAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    title: 'SEO Blog Writing & Content Strategy',
    category: 'Content Writing',
    description: 'I will write engaging, SEO-optimized blog posts that drive traffic.',
    longDescription: 'Words have power — and the right words at the right time can transform your business. I research, write, and optimize content that ranks on search engines while genuinely helping your readers. From blog posts to whitepapers, I deliver well-researched content that establishes your authority.',
    rating: 4.7,
    reviews: 28,
    price: 50,
    deliveryTime: '2 days',
    tags: ['SEO', 'Blog Writing', 'Copywriting', 'Research'],
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600',
    packages: [
      { name: 'Basic', price: 50, delivery: '2 days', features: ['1000 words', 'SEO optimized', '1 revision', 'Topic research'] },
      { name: 'Standard', price: 120, delivery: '3 days', features: ['2500 words', 'SEO optimized', '3 revisions', 'Keyword research', 'Meta description'] },
      { name: 'Premium', price: 250, delivery: '5 days', features: ['5000 words', 'Full content strategy', 'Unlimited revisions', 'Images sourced', 'Internal linking plan'] },
    ],
  },
  {
    id: '5',
    studentId: '5',
    studentName: 'Aisha Patel',
    studentAvatar: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    title: 'Social Media Management & Growth',
    category: 'Social Media',
    description: 'I will manage and grow your social media presence organically.',
    longDescription: 'Social media is more than just posting — it is about building a community. I create data-driven social media strategies that grow your following, increase engagement, and drive real business results. From content calendars to analytics reports, I handle your entire social presence.',
    rating: 4.8,
    reviews: 41,
    price: 200,
    deliveryTime: '7 days',
    tags: ['Instagram', 'TikTok', 'Strategy', 'Analytics'],
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
    packages: [
      { name: 'Basic', price: 200, delivery: '7 days', features: ['1 platform', '12 posts/month', 'Content calendar', 'Basic analytics'] },
      { name: 'Standard', price: 400, delivery: '7 days', features: ['2 platforms', '20 posts/month', 'Content creation', 'Engagement management', 'Monthly report'] },
      { name: 'Premium', price: 700, delivery: '7 days', features: ['3 platforms', '30 posts/month', 'Full management', 'Ad campaigns', 'Influencer outreach', 'Weekly reports'] },
    ],
  },
  {
    id: '6',
    studentId: '6',
    studentName: 'David Kim',
    studentAvatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    title: 'Professional Photography & Retouching',
    category: 'Photography',
    description: 'I will capture stunning photos for your brand or event.',
    longDescription: 'Every image tells a story. Whether it is product photography, event coverage, or portrait sessions, I bring a creative eye and technical expertise to every shoot. Post-production includes professional color grading, retouching, and delivery in multiple formats optimized for web and print.',
    rating: 4.9,
    reviews: 63,
    price: 180,
    deliveryTime: '3 days',
    tags: ['Photography', 'Retouching', 'Product Shots', 'Events'],
    image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600',
    packages: [
      { name: 'Basic', price: 180, delivery: '3 days', features: ['1 hour shoot', '20 edited photos', 'Digital delivery', 'Basic retouching'] },
      { name: 'Standard', price: 350, delivery: '5 days', features: ['2 hour shoot', '50 edited photos', 'Advanced retouching', 'Print-ready files', 'Online gallery'] },
      { name: 'Premium', price: 600, delivery: '7 days', features: ['Full day shoot', '100+ edited photos', 'Premium retouching', 'All formats', 'Commercial license'] },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rachel Foster',
    role: 'Startup Founder',
    avatar: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Found an amazing developer through Rent-a-Skill who built our MVP in just two weeks. The quality was exceptional and the price was unbeatable.',
    rating: 5,
  },
  {
    id: '2',
    name: 'James Mitchell',
    role: 'Small Business Owner',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'The student who designed our brand identity understood our vision perfectly. Professional work at a fraction of agency prices.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Zhang',
    role: 'Marketing Director',
    avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'We hire student content creators regularly through this platform. Fresh perspectives and incredible dedication every single time.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Daniel Okafor',
    role: 'Product Manager, Lumen Labs',
    avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Hired a student designer for our onboarding flow and the conversion rate jumped 22% in three weeks. Easily our best freelance hire of the year.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Sofia Reyes',
    role: 'E-commerce Owner',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'My Shopify store needed a refresh and the student I worked with delivered ahead of schedule. Communication was clear, revisions were quick, prices were fair.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Arjun Mehta',
    role: 'Indie Game Developer',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'The motion designer I found here did pixel-perfect animations for our trailer in four days. The energy and ownership these students bring is unmatched.',
    rating: 5,
  },
  {
    id: '7',
    name: 'Hannah Müller',
    role: 'Non-Profit Coordinator',
    avatar: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'We needed a website for our literacy program on a shoestring budget. The team here matched us with a CS student who built something beautiful.',
    rating: 5,
  },
  {
    id: '8',
    name: 'Marcus Liu',
    role: 'Agency Creative Lead',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'I keep coming back. The talent pool keeps surprising me, and the project tracking on the dashboard makes managing freelancers actually pleasant.',
    rating: 5,
  },
  {
    id: '9',
    name: 'Priya Iyer',
    role: 'YouTuber, 480K subscribers',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'My editor got slammed with finals so I tried Rent-a-Skill. Got matched with a film student in 30 minutes who matched my style on the first try.',
    rating: 5,
  },
  {
    id: '10',
    name: 'Tom Beckett',
    role: 'CTO, FinTrack',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Hired three students part-time to push out a feature backlog before our seed round. Code reviews were clean, sprints were on time. Incredible value.',
    rating: 5,
  },
  {
    id: '11',
    name: 'Isabella Romano',
    role: 'Boutique Owner',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'A photography student shot our spring lookbook for half what I expected to pay, and the images outperformed agency work we used last season.',
    rating: 5,
  },
  {
    id: '12',
    name: 'Kenji Watanabe',
    role: 'SaaS Founder',
    avatar: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Booked a content writer for a 20-post SEO sprint. Three months later we are ranking on page one for two of our target keywords. Real ROI.',
    rating: 5,
  },
  {
    id: '13',
    name: 'Olivia Brennan',
    role: 'Wedding Planner',
    avatar: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'I needed a fast turnaround on save-the-date designs. The student delivered five concepts in 36 hours and they were all stunning. Booked her again immediately.',
    rating: 5,
  },
  {
    id: '14',
    name: 'Ahmed Hassan',
    role: 'Real Estate Broker',
    avatar: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Got drone-style property reels edited in two days. Listings now look like luxury campaigns. Clients literally ask which agency I work with.',
    rating: 5,
  },
  {
    id: '15',
    name: 'Lena Hoffmann',
    role: 'D2C Brand Manager',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Our social engagement tripled after hiring a student social media manager through here. She actually understood Gen Z because she is Gen Z.',
    rating: 5,
  },
];

export const stats = [
  { label: 'Active Students', value: 2500 },
  { label: 'Completed Projects', value: 8400 },
  { label: 'Happy Clients', value: 1800 },
  { label: 'Universities', value: 120 },
];
