import { Search, Bell, ChevronDown } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import './DashboardHeader.css';

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}

const DashboardHeader = ({ title, subtitle }: DashboardHeaderProps) => {
  const { user } = useAuth();

  return (
    <div className="dash-header">
      <div>
        <h1 className="dash-header-title">{title}</h1>
        <p className="dash-header-subtitle">{subtitle}</p>
      </div>

      <div className="dash-header-actions">
        <div className="dash-header-search">
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>
        <button className="dash-header-icon-btn" aria-label="Notifications">
          <Bell size={20} />
        </button>
        <div className="dash-header-profile">
          <div className="dash-header-avatar">{user?.name?.[0]?.toUpperCase()}</div>
          <span>{user?.name}</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;