import StatCard from './StatCard';
import './AdminDashboardPage.css';

const AdminDashboardPage = () => {
  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Platform overview and key metrics.</p>
      </div>

      <div className="admin-dashboard-grid">
        <StatCard label="Total Users" value="128" />
        <StatCard label="Active Users (30d)" value="94" />
        <StatCard label="Course Enrollments" value="215" />
        <StatCard label="Upcoming Events" value="6" />
        <StatCard label="Donations This Month" value="₹42,500" />
        <StatCard label="Revenue This Month" value="₹1,18,200" />
        <StatCard label="AI Chatbot Usage" value="1,340 msgs" />
      </div>
    </div>
  );
};

export default AdminDashboardPage;