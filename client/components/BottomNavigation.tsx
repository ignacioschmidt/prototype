import { useState } from "react";

interface TabProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

function Tab({ label, icon, isActive = false, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center w-12 h-14 space-y-1"
    >
      {/* Tab indicator */}
      {isActive && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-primary-500 rounded-b-sm"></div>
      )}
      
      {/* Icon container */}
      <div className="w-6 h-6 flex items-center justify-center">
        {icon}
      </div>
      
      {/* Label */}
      <span
        className={`text-xs font-semibold uppercase tracking-wider ${
          isActive ? "text-primary-500" : "text-neutral-700"
        }`}
        style={{ fontSize: "9px", lineHeight: "12px" }}
      >
        {label}
      </span>
    </button>
  );
}

function QRButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-16 h-14"
    >
      <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4z"/>
          <rect x="13" y="13" width="2" height="2"/>
          <rect x="15" y="15" width="2" height="2"/>
          <rect x="13" y="17" width="2" height="2"/>
          <rect x="15" y="19" width="2" height="2"/>
          <rect x="17" y="13" width="2" height="2"/>
          <rect x="19" y="15" width="2" height="2"/>
          <rect x="17" y="17" width="2" height="2"/>
          <rect x="19" y="19" width="2" height="2"/>
        </svg>
      </div>
    </button>
  );
}

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      id: "home",
      label: "INICIO",
      icon: (
        <svg className={`w-6 h-6 ${activeTab === "home" ? "fill-primary-500" : "fill-neutral-700"}`} viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
    },
    {
      id: "accounts",
      label: "CUENTAS",
      icon: (
        <svg className={`w-6 h-6 ${activeTab === "accounts" ? "fill-primary-500" : "fill-neutral-700"}`} viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
    },
    {
      id: "cards",
      label: "TARJETAS",
      icon: (
        <svg className={`w-6 h-6 ${activeTab === "cards" ? "fill-primary-500" : "fill-neutral-700"}`} viewBox="0 0 24 24">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      ),
    },
    {
      id: "more",
      label: "MÁS",
      icon: (
        <svg className={`w-6 h-6 ${activeTab === "more" ? "fill-primary-500" : "fill-neutral-700"}`} viewBox="0 0 24 24">
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-14 bg-white shadow-lg rounded-t-2xl">
      <div className="flex items-center justify-center h-full px-5">
        <div className="flex items-center justify-between w-full max-w-sm">
          {/* First two tabs */}
          {tabs.slice(0, 2).map((tab) => (
            <Tab
              key={tab.id}
              {...tab}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
          
          {/* QR Button in center */}
          <QRButton onClick={() => console.log("QR clicked")} />
          
          {/* Last two tabs */}
          {tabs.slice(2).map((tab) => (
            <Tab
              key={tab.id}
              {...tab}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
