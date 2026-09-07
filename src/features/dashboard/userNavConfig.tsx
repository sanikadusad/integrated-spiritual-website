import { Home, UserPen, Flower2, LayoutGrid, Smile, BookOpen, Users, Calendar, HandHeart, HeartHandshake, Sparkles, UserCog, Settings } from 'lucide-react';

export const userNavSections = [
  {
    title: 'MY SPACE',
    items: [
      { label: 'Dashboard', icon: Home, path: '/dashboard' },
      { label: 'My Journey', icon: UserPen, path: '/dashboard/journey', soon: true },
    ],
  },
  {
    title: 'PRACTICE',
    items: [
      { label: 'Meditation', icon: Flower2, path: '/dashboard/meditation' },
      { label: 'Daily Sadhana', icon: LayoutGrid, path: '/dashboard/sadhana', soon: true },
      { label: 'Mood Tracking', icon: Smile, path: '/dashboard/mood', soon: true },
    ],
  },
  {
    title: 'LEARNING',
    items: [{ label: 'Courses', icon: BookOpen, path: '/dashboard/courses' }],
  },
  {
    title: 'CONNECT',
    items: [
      { label: 'Community', icon: Users, path: '/dashboard/community', soon: true },
      { label: 'Events', icon: Calendar, path: '/dashboard/events', soon: true },
    ],
  },
  {
    title: 'GIVING',
    items: [
      { label: 'Donations', icon: HandHeart, path: '/dashboard/donations', soon: true },
      { label: 'Volunteer', icon: HeartHandshake, path: '/dashboard/volunteer', soon: true },
    ],
  },
  {
    title: 'AI',
    items: [{ label: 'AI Guide', icon: Sparkles, path: '/dashboard/ai-guide', soon: true }],
  },
  {
    title: 'ACCOUNT',
    items: [
      { label: 'Profile', icon: UserCog, path: '/dashboard/profile' },
      { label: 'Settings', icon: Settings, path: '/dashboard/settings', soon: true },
    ],
  },
];