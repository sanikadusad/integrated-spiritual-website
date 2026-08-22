import { NavLink } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import logo from '@/assets/logo.png';
import './DashboardSidebar.css';

interface NavItem {
  label: string;
  icon: LucideIcon;
  path: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

interface DashboardSidebarProps {
  portalLabel: string;
  sections: NavSection[];
}

const DashboardSidebar = ({ portalLabel, sections }: DashboardSidebarProps) => {
  return (
    <aside className="dash-sidebar">
      <img src={logo} alt="" className="dash-sidebar-logo" />

      {sections.map((section) => (
        <div key={section.title} className="dash-sidebar-section">
          <p className="dash-sidebar-section-title">{section.title}</p>
          {section.items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'dash-sidebar-link dash-sidebar-link-active' : 'dash-sidebar-link'
              }
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      ))}

      
    </aside>
  );
};

export default DashboardSidebar;