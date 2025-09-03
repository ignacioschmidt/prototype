import StatusBar from "./StatusBar";
import BottomNavigation from "./BottomNavigation";
import AccountCards from "./AccountCards";
import FeaturesGrid from "./FeaturesGrid";
import BenefitsSection from "./BenefitsSection";
import NewsSection from "./NewsSection";
import ChatTriggerCard from "./ChatTriggerCard";
// Removed ChatTriggerCarousel from home
import FloatingAssistantBubble from "./FloatingAssistantBubble";

function UserHeader() {
  return (
    <div className="px-4 py-3 flex items-center justify-between">
      {/* Greeting */}
      <div>
        <h1 className="text-xl font-normal text-black">
          Hola, Aquiles
        </h1>
      </div>
      
      {/* Action buttons */}
      <div className="flex items-center space-x-3">
        {/* Store/Marketplace button */}
        <button className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
          <svg className="w-6 h-6 fill-primary-500" viewBox="0 0 24 24">
            <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
          </svg>
        </button>
        
        {/* Notifications button */}
        <button className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
          <svg className="w-6 h-6 fill-primary-500" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="mobile-container bg-neutral-50 min-h-screen relative">
      {/* Status Bar */}
      <div className="pt-2">
        <StatusBar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 pb-20 overflow-y-auto">
        {/* User Header */}
        <UserHeader />
        
        {/* Account Cards Section */}
        <div className="mb-6">
          <AccountCards />
        </div>
        
        {/* Features Grid Section */}
        <div className="mb-8">
          <FeaturesGrid />
        </div>
        
        {/* Benefits Section */}
        <div className="mb-8">
          <BenefitsSection />
        </div>

        {/* News Section */}
        <div className="mb-6">
          <NewsSection />
        </div>
        
        {/* Extra padding for bottom navigation */}
        <div className="h-4"></div>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNavigation />

      {/* Floating assistant bubble */}
      <FloatingAssistantBubble />
    </div>
  );
}
