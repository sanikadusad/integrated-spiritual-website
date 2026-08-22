import { Shield, MessageCircle, Users2, Smile, ShieldCheck, UserPlus, BookPlus, CalendarPlus, FileText, Send } from 'lucide-react';

import DashboardSidebar from '@/components/DashboardSidebar/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import DashStatCard from '../DashStatCard';
import { adminNavSections } from './adminNavConfig';
import './AdminDashboardPage.css';

const services = [
  { name: 'Backend API', status: 'Operational' },
  { name: 'Database', status: 'Operational' },
  { name: 'AI Service', status: 'Operational' },
  { name: 'Notification Service', status: 'Operational' },
  { name: 'Payment Service', status: 'Operational' },
  { name: 'Storage Service', status: 'Operational' },
];

const aiMetrics = [
  { label: 'Total Conversations', value: '1,340', change: '+23%', icon: MessageCircle },
  { label: 'Resource Utilization', value: '87%', change: '+14%', icon: Users2 },
  { label: 'User Satisfaction', value: '4.8/5', change: '+8%', icon: Smile },
  { label: 'Response Accuracy', value: '92%', change: '+6%', icon: ShieldCheck },
];
const recentActivities = [
  { id: '1', text: 'New user registered', meta: 'Aarav Sharma joined the platform', time: '10m ago', icon: UserPlus },
  { id: '2', text: 'New course added', meta: '"Mindfulness & Meditation" was published', time: '1h ago', icon: BookPlus },
  { id: '3', text: 'Event created', meta: '"Inner Peace Workshop" event created', time: '2h ago', icon: CalendarPlus },
  { id: '4', text: 'New content published', meta: '"The Power of Awareness" article published', time: '3h ago', icon: FileText },
];

const quickActions = [
  { label: 'Add User', meta: 'Create new user', icon: UserPlus },
  { label: 'Create Course', meta: 'Add new course', icon: BookPlus },
  { label: 'Create Event', meta: 'Schedule new event', icon: CalendarPlus },
  { label: 'Publish Content', meta: 'Add new content', icon: FileText },
  { label: 'Send Notification', meta: 'Send announcement', icon: Send },
];

const AdminDashboardPage = () => {
  return (
    <div className="dash-layout">
      <DashboardSidebar portalLabel="ADMIN PORTAL" sections={adminNavSections} />

      <main className="dash-main">
        <DashboardHeader
          title="Admin Dashboard"
          subtitle="Here's what's happening across your platform."
        />

        <div className="dash-stats-grid">
          <DashStatCard label="Total Users" value="128" meta="+12% this month" />
          <DashStatCard label="Active Users" value="94" meta="+8% this month" />
          <DashStatCard label="Course Enrollments" value="215" meta="+15% this month" />
          <DashStatCard label="Upcoming Events" value="6" meta="+2% this month" />
        </div>

        <div className="admin-widgets-grid">
  <div className="admin-widget-card">
    <h3 className="admin-widget-title">User Growth</h3>
    <p className="admin-widget-subtext">New users and active users, last 6 months.</p>
    <div className="admin-growth-placeholder">
      <p>Trending upward — new signups outpacing last period</p>
    </div>
  </div>

  <div className="admin-widget-card">
    <h3 className="admin-widget-title">Platform Engagement</h3>
    <p className="admin-widget-subtext">2,347 total activities this month.</p>
    <div className="admin-growth-placeholder">
      <p>Meditation 29% · Courses 38% · Community 18% · Other 15%</p>
    </div>
  </div>

  <div className="admin-widget-card">
    <h3 className="admin-widget-title">
      <span className="admin-widget-icon-badge"><Shield size={16} /></span>
      System Health
    </h3>
    <p className="admin-widget-subtext">All services running smoothly</p>

    <ul className="admin-service-list">
      {services.map((service) => (
        <li key={service.name} className="admin-service-row">
          <span>{service.name}</span>
          <span className="admin-service-status">
            <span className="admin-status-dot" /> {service.status}
          </span>
        </li>
      ))}
    </ul>

    <div className="admin-widget-footer-row">
      <span className="admin-status-caption">All systems operational</span>
      <a href="#" className="dash-widget-link">View System Logs →</a>
    </div>
  </div>

  <div className="admin-widget-card">
    <h3 className="admin-widget-title">Recent Activities</h3>
    <ul className="admin-activity-list">
      {recentActivities.map((activity) => (
        <li key={activity.id} className="admin-activity-row">
          <span className="admin-widget-icon-badge"><activity.icon size={16} /></span>
          <div className="admin-activity-info">
            <p className="admin-activity-text">{activity.text}</p>
            <p className="admin-activity-meta">{activity.meta}</p>
          </div>
          <span className="admin-activity-time">{activity.time}</span>
        </li>
      ))}
    </ul>
    <a href="#" className="dash-widget-link">View all activities →</a>
  </div>

  <div className="admin-widget-card">
    <div className="dash-widget-header-row">
      <h3 className="admin-widget-title">AI Analytics Overview</h3>
      <span className="admin-widget-period">This Month ⌄</span>
    </div>

    <ul className="admin-metric-list">
      {aiMetrics.map((metric) => (
        <li key={metric.label} className="admin-metric-row">
          <span className="admin-metric-icon"><metric.icon size={16} /></span>
          <div className="admin-metric-info">
            <p className="admin-metric-label">{metric.label}</p>
            <p className="admin-metric-value">{metric.value}</p>
          </div>
          <span className="admin-metric-change">↑ {metric.change}<br /><small>vs last month</small></span>
        </li>
      ))}
    </ul>

    <a href="#" className="dash-widget-link">View full analytics →</a>
  </div>

  <div className="admin-widget-card">
    <h3 className="admin-widget-title">Quick Actions</h3>
    <p className="admin-widget-subtext">Manage your platform efficiently</p>
    <ul className="admin-action-list">
      {quickActions.map((action) => (
        <li key={action.label} className="admin-action-row">
          <span className="admin-widget-icon-badge"><action.icon size={16} /></span>
          <div className="admin-activity-info">
            <p className="admin-activity-text">{action.label}</p>
            <p className="admin-activity-meta">{action.meta}</p>
          </div>
          <span className="dash-widget-link">→</span>
        </li>
      ))}
    </ul>
    </div>
</div>
      </main>
    </div>
  );
};
export default AdminDashboardPage;