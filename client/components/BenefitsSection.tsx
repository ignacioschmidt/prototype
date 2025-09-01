interface BenefitCardProps {
  title: string;
  description: string;
  logo: React.ReactNode;
  onClick?: () => void;
}

function BenefitCard({ title, description, logo, onClick }: BenefitCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-neutral-300/70 rounded-2xl p-4 shadow-sm min-w-[140px] h-[136px] flex flex-col justify-between hover:shadow-md transition-shadow"
    >
      {/* Logo */}
      <div className="w-full h-8 flex items-center justify-start mb-2">
        {logo}
      </div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-base font-semibold text-neutral-800 text-left leading-5 mb-1">
          {title}
        </h3>
      </div>
      
      {/* Description */}
      <div className="text-left">
        <p className="text-xs text-neutral-800 leading-4">
          {description}
        </p>
      </div>
    </button>
  );
}

function FootballBenefitCard() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm min-w-[296px] h-[96px] flex items-center space-x-4">
      {/* Football Icon */}
      <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
        <div className="relative w-12 h-12">
          {/* Football */}
          <div className="w-12 h-12 bg-blue-400 rounded-full relative overflow-hidden">
            {/* Football pattern */}
            <div className="absolute inset-2 border border-white rounded-full"></div>
            <div className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-2 left-6 w-2 h-0.5 bg-white"></div>
            <div className="absolute bottom-2 right-6 w-2 h-0.5 bg-white"></div>
            {/* Grass effect */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-green-400"></div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-neutral-800 mb-2">
          Hacé el aguante
        </h3>
        <p className="text-sm text-neutral-800 leading-4">
          Somos sponsors de la Liga Profesional de Fútbol Argentino.
        </p>
      </div>
    </div>
  );
}

export default function BenefitsSection() {
  const benefits = [
    {
      id: "sell-more",
      title: "Vendé más cobrá fácil",
      description: "Solo por hoy.",
      logo: (
        <div className="flex items-center">
          {/* Naranja Logo simplified */}
          <div className="flex space-x-1">
            <div className="w-2 h-4 bg-secondary-500 rounded-sm"></div>
            <div className="w-1 h-3 bg-secondary-500 rounded-sm"></div>
            <div className="w-2 h-4 bg-secondary-500 rounded-sm"></div>
            <div className="w-1 h-2 bg-secondary-500 rounded-sm"></div>
          </div>
        </div>
      ),
      onClick: () => console.log("Sell more clicked"),
    },
    {
      id: "installments",
      title: "3 cuotas sin interés",
      description: "Todas las tarjetas.",
      logo: (
        <div className="flex items-center space-x-1">
          {/* Naranja X logo simplified */}
          <div className="flex space-x-px">
            <div className="w-1 h-4 bg-secondary-500"></div>
            <div className="w-2 h-3 bg-secondary-500"></div>
            <div className="w-1 h-4 bg-secondary-500"></div>
          </div>
          <div className="w-2 h-4 bg-primary-500 ml-1"></div>
        </div>
      ),
      onClick: () => console.log("Installments clicked"),
    },
    {
      id: "more-benefits",
      title: "3 cuotas sin interés",
      description: "Solo por hoy.",
      logo: (
        <div className="flex items-center space-x-1">
          {/* Naranja X logo simplified */}
          <div className="flex space-x-px">
            <div className="w-1 h-4 bg-secondary-500"></div>
            <div className="w-2 h-3 bg-secondary-500"></div>
            <div className="w-1 h-4 bg-secondary-500"></div>
          </div>
          <div className="w-2 h-4 bg-primary-500 ml-1"></div>
        </div>
      ),
      onClick: () => console.log("More benefits clicked"),
    },
  ];

  return (
    <div className="space-y-4">
      {/* Hacé más con Naranja X section */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-medium text-neutral-800">Hacé más con Naranja X</h2>
        </div>
        
        {/* Horizontal scrollable benefits */}
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              logo={benefit.logo}
              onClick={benefit.onClick}
            />
          ))}
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center space-x-2 mt-2">
          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full"></div>
        </div>
      </div>

      {/* Football sponsorship card */}
      <div className="px-4">
        <FootballBenefitCard />
      </div>
      
      {/* Tus beneficios section */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-medium text-neutral-800">Tus beneficios</h2>
          <button className="text-sm font-medium text-primary-500 hover:text-primary-600">
            Conocer más
          </button>
        </div>
        
        {/* Benefits grid */}
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {benefits.map((benefit) => (
            <BenefitCard
              key={`benefits-${benefit.id}`}
              title={benefit.title}
              description={benefit.description}
              logo={benefit.logo}
              onClick={benefit.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
