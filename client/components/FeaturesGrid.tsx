interface FeatureCardProps {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  onClick?: () => void;
}

function FeatureCard({ icon, label, badge, onClick }: FeatureCardProps) {
  return (
    <button
      onClick={onClick}
      className="relative bg-white border border-neutral-300/70 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center min-h-[104px] w-[76px] hover:shadow-md transition-shadow"
    >
      {/* New badge */}
      {badge && (
        <div className="absolute -top-2 -left-2 bg-secondary-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
          {badge}
        </div>
      )}
      
      {/* Icon */}
      <div className="w-15 h-13 flex items-center justify-center mb-2">
        {icon}
      </div>
      
      {/* Label */}
      <span className="text-xs text-neutral-800 text-center font-normal leading-tight">
        {label}
      </span>
    </button>
  );
}

export default function FeaturesGrid() {
  const features = [
    {
      id: "card",
      icon: (
        <div className="w-15 h-13 flex items-center justify-center">
          {/* Naranja Card Icon */}
          <div className="relative">
            <div className="w-6 h-4 bg-primary-100 rounded-sm transform rotate-45"></div>
            <div className="absolute inset-0 w-6 h-4 bg-primary-500 rounded-sm"></div>
          </div>
        </div>
      ),
      label: "Tarjeta Naranja",
      onClick: () => console.log("Card clicked"),
    },
    {
      id: "loans",
      icon: (
        <div className="w-15 h-13 flex items-center justify-center">
          {/* Money/Coins Icon */}
          <div className="relative">
            <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-yellow-600"></div>
            <div className="absolute -right-1 -bottom-1 w-4 h-4 bg-yellow-300 rounded-full border-2 border-yellow-500"></div>
            <div className="absolute -right-2 -top-1 w-3 h-6 bg-primary-100 rounded-sm"></div>
          </div>
        </div>
      ),
      label: "Préstamos",
      onClick: () => console.log("Loans clicked"),
    },
    {
      id: "transport",
      icon: (
        <div className="w-15 h-13 flex items-center justify-center">
          {/* Transport Card Icon */}
          <div className="relative">
            <div className="w-8 h-6 bg-primary-100 rounded border border-primary-500"></div>
            <div className="absolute top-1 left-1 w-2 h-2 bg-primary-500 rounded-full"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></div>
            <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-primary-500"></div>
          </div>
        </div>
      ),
      label: "Recargar transporte",
      onClick: () => console.log("Transport clicked"),
    },
    {
      id: "collections",
      icon: (
        <div className="w-15 h-13 flex items-center justify-center">
          {/* Cash Register Icon */}
          <div className="relative">
            <div className="w-6 h-6 border-2 border-primary-500 rounded"></div>
            <div className="absolute top-0 right-0 w-2 h-1 border border-primary-500 rounded-sm"></div>
            <div className="absolute bottom-0 left-1 right-1 h-0.5 border-t border-primary-500"></div>
            <div className="absolute top-2 left-1 w-2 h-0.5 border-t border-primary-500"></div>
          </div>
        </div>
      ),
      label: "Cobros",
      onClick: () => console.log("Collections clicked"),
    },
    {
      id: "services",
      icon: (
        <div className="w-15 h-13 flex items-center justify-center">
          {/* Invoice/Bill Icon */}
          <div className="relative">
            <div className="w-5 h-7 bg-white border border-primary-500 rounded-sm"></div>
            <div className="absolute top-1 left-1 right-1 h-0.5 bg-primary-500"></div>
            <div className="absolute top-2 left-1 right-1 h-0.5 bg-primary-500"></div>
            <div className="absolute top-3 left-1 right-1 h-0.5 bg-primary-500"></div>
            <div className="absolute top-4 left-1 w-3 h-0.5 bg-primary-500"></div>
          </div>
        </div>
      ),
      label: "Pagar servicios",
      onClick: () => console.log("Services clicked"),
    },
    {
      id: "send-money",
      icon: (
        <div className="w-15 h-13 flex items-center justify-center">
          {/* Money Transfer Icon */}
          <div className="relative">
            <div className="w-6 h-4 bg-primary-100 rounded-sm"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-4 h-4 fill-primary-500" viewBox="0 0 24 24">
                <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
              </svg>
            </div>
          </div>
        </div>
      ),
      label: "Enviar pesos",
      onClick: () => console.log("Send money clicked"),
    },
    {
      id: "goals",
      icon: (
        <div className="w-15 h-13 flex items-center justify-center">
          {/* Target/Goals Icon */}
          <div className="relative">
            <div className="w-6 h-6 border-2 border-primary-500 rounded-full"></div>
            <div className="absolute inset-2 border border-primary-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-primary-500 rounded-full"></div>
          </div>
        </div>
      ),
      label: "Tus metas",
      badge: "NUEVO",
      onClick: () => console.log("Goals clicked"),
    },
    {
      id: "insurance",
      icon: (
        <div className="w-15 h-13 flex items-center justify-center">
          {/* Shield/Insurance Icon */}
          <div className="relative">
            <div className="w-5 h-6 bg-primary-100 rounded-t-full"></div>
            <div className="absolute inset-0 w-5 h-6 border border-primary-500 rounded-t-full"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-primary-500"></div>
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-0.5 w-2 h-0.5 bg-primary-500"></div>
          </div>
        </div>
      ),
      label: "Seguros",
      onClick: () => console.log("Insurance clicked"),
    },
  ];

  return (
    <div className="px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-medium text-neutral-800">Tus atajos</h2>
        <button className="text-sm font-medium text-primary-500 hover:text-primary-600">
          Conocer más
        </button>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            label={feature.label}
            badge={feature.badge}
            onClick={feature.onClick}
          />
        ))}
      </div>
    </div>
  );
}
