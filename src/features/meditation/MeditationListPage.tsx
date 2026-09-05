import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Video as VideoIcon } from 'lucide-react';
import DashboardSidebar from '@/components/DashboardSidebar/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import { userNavSections } from '@/features/dashboard/userNavConfig';
import { getCategories, getMeditations, type MeditationCategory, type Meditation } from './meditationService';
import './MeditationListPage.css';

const formatDuration = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  return `${minutes} min`;
};

const MeditationListPage = () => {
  const [categories, setCategories] = useState<MeditationCategory[]>([]);
  const [meditations, setMeditations] = useState<Meditation[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories().then(setCategories).catch(() => {});
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getMeditations(activeCategory ?? undefined)
      .then(setMeditations)
      .finally(() => setIsLoading(false));
  }, [activeCategory]);

  return (
    <div className="dash-layout">
      <DashboardSidebar portalLabel="MY SPACE" sections={userNavSections} homePath="/dashboard" />

      <main className="dash-main">
        <DashboardHeader title="Meditation" subtitle="Find a moment of stillness." />

        <div className="med-category-tabs">
          <button
            className={activeCategory === null ? 'med-tab med-tab-active' : 'med-tab'}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={activeCategory === category.id ? 'med-tab med-tab-active' : 'med-tab'}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {isLoading ? (
          <p className="admin-widget-subtext">Loading...</p>
        ) : meditations.length === 0 ? (
          <p className="admin-widget-subtext">No meditations found in this category yet.</p>
        ) : (
          <div className="med-grid">
            {meditations.map((meditation) => (
              <Link key={meditation.id} to={`/dashboard/meditation/${meditation.id}`} className="med-card">
                <div className="med-card-icon">
                  {meditation.media_type === 'video' ? <VideoIcon size={20} /> : <Play size={20} />}
                </div>
                <h3 className="med-card-title">{meditation.title}</h3>
                <p className="med-card-meta">
                  {meditation.category_name || 'Uncategorized'} · {formatDuration(meditation.duration_seconds)}
                </p>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default MeditationListPage;