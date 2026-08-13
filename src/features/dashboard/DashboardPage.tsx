import { useAuth } from '@/hooks/useAuth';
import DailyQuoteWidget from './widgets/DailyQuoteWidget';
import MeditationWidget from './widgets/MeditationWidget';
import AIRecommendationWidget from './widgets/AIRecommendationWidget';
import MoodWidget from './widgets/MoodWidget';
import ChallengeWidget from './widgets/ChallengeWidget';
import GuruMessageWidget from './widgets/GuruMessageWidget';
import PrayerReminderWidget from './widgets/PrayerReminderWidget';
import RecentActivityWidget from './widgets/RecentActivityWidget';
import CommunityUpdatesWidget from './widgets/CommunityUpdatesWidget';
import UpcomingEventsWidget from './widgets/UpcomingEventsWidget';
import './DashboardPage.css';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back, {user?.name}</h1>
        <p>Here's what's happening on your spiritual journey today.</p>
      </div>

      <div className="dashboard-grid">
        <DailyQuoteWidget />
        <MeditationWidget />
        <MoodWidget />
        <ChallengeWidget />
        <GuruMessageWidget />
        <PrayerReminderWidget />
        <AIRecommendationWidget />
        <RecentActivityWidget />
        <CommunityUpdatesWidget />
        <UpcomingEventsWidget />
      </div>
    </div>
  );
};

export default DashboardPage;