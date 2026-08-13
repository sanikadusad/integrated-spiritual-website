import { useAuth } from '@/hooks/useAuth';
import './MentorDashboardPage.css';

interface AssignedUser {
  id: string;
  name: string;
  lastActive: string;
  progress: string;
}

const assignedUsers: AssignedUser[] = [
  { id: '1', name: 'Aarav Sharma', lastActive: '2 hours ago', progress: '3/5 sessions completed' },
  { id: '2', name: 'Priya Nair', lastActive: 'Yesterday', progress: '1/5 sessions completed' },
  { id: '3', name: 'Rohan Mehta', lastActive: '3 days ago', progress: '5/5 sessions completed' },
];

const MentorDashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="mentor-dashboard">
      <div className="mentor-dashboard-header">
        <h1>Welcome, {user?.name}</h1>
        <p>Here's an overview of your mentorship activity.</p>
      </div>

      <div className="mentor-overview-grid">
        <div className="mentor-overview-card">
          <p className="mentor-overview-value">{assignedUsers.length}</p>
          <p className="mentor-overview-label">Assigned Users</p>
        </div>
        <div className="mentor-overview-card">
          <p className="mentor-overview-value">2</p>
          <p className="mentor-overview-label">Sessions This Week</p>
        </div>
        <div className="mentor-overview-card">
          <p className="mentor-overview-value">4.8</p>
          <p className="mentor-overview-label">Average Rating</p>
        </div>
      </div>

      <div className="mentor-section">
        <h2>Assigned Users</h2>
        <div className="mentor-users-list">
          {assignedUsers.map((assignedUser) => (
            <div key={assignedUser.id} className="mentor-user-row">
              <div>
                <p className="mentor-user-name">{assignedUser.name}</p>
                <p className="mentor-user-meta">{assignedUser.progress}</p>
              </div>
              <p className="mentor-user-meta">{assignedUser.lastActive}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mentor-section">
        <h2>Profile</h2>
        <p className="mentor-section-placeholder">
          Profile management (bio, specialization, availability) will be built here.
        </p>
      </div>
    </div>
  );
};

export default MentorDashboardPage;