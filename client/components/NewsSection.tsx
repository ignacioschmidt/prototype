interface NewsCardProps {
  title: string;
  description: string;
  badge?: string;
  image: React.ReactNode;
  onClick?: () => void;
}

function NewsCard({ title, description, badge, image, onClick }: NewsCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-2xl shadow-sm w-full h-[200px] relative overflow-hidden hover:shadow-md transition-shadow"
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-8 right-4 bg-secondary-600 text-white text-xs font-semibold px-2 py-0.5 rounded-lg z-10">
          {badge}
        </div>
      )}
      
      {/* Image container */}
      <div className="absolute left-4 top-4 w-35 h-42 bg-white rounded overflow-hidden">
        {image}
      </div>
      
      {/* Content */}
      <div className="absolute right-4 top-14 w-35 text-left">
        <h3 className="text-xl font-semibold text-neutral-800 leading-6 mb-3">
          {title}
        </h3>
        <p className="text-sm text-neutral-800 leading-4">
          {description}
        </p>
      </div>
    </button>
  );
}

function AccountSummaryCard() {
  return (
    <div className="bg-white border border-neutral-300/70 rounded-2xl p-4 shadow-sm flex items-center space-x-2">
      {/* Text content */}
      <div className="flex-1">
        <p className="text-xs text-neutral-800 mb-1">Último resumen:</p>
        <h3 className="text-xl font-semibold text-neutral-800 leading-6 mb-2">
          Tu estado de cuenta
        </h3>
        <div className="bg-blue-200 text-blue-600 text-xs font-normal px-1 py-0.5 rounded inline-block">
          Ya está disponible
        </div>
      </div>
      
      {/* Action button */}
      <div className="flex flex-col items-center">
        <button className="bg-primary-500 text-white text-base font-medium px-6 py-3.5 rounded-2xl hover:bg-primary-600 transition-colors">
          Ver
        </button>
      </div>
    </div>
  );
}

function NixiAssistantCard() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center space-x-4">
      {/* Nixi Avatar */}
      <div className="w-14 h-16 flex-shrink-0">
        <div className="relative w-14 h-16">
          {/* Simplified Nixi character */}
          <div className="w-14 h-16 bg-gradient-to-b from-purple-100 to-purple-200 rounded-full relative overflow-hidden">
            {/* Face */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              {/* Eyes */}
              <div className="flex space-x-2">
                <div className="w-1 h-1 bg-neutral-800 rounded-full"></div>
                <div className="w-1 h-1 bg-neutral-800 rounded-full"></div>
              </div>
              {/* Smile */}
              <div className="w-3 h-1 border-b border-neutral-800 rounded-full mt-1 mx-auto"></div>
            </div>
            {/* Hair/Decoration */}
            <div className="absolute top-1 left-2 w-2 h-2 bg-secondary-500 rounded-full"></div>
            <div className="absolute top-2 right-3 w-1 h-1 bg-secondary-500 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-neutral-800 mb-2">
          Conocé a Nixi
        </h3>
        <p className="text-sm text-neutral-800 leading-4">
          Tu asistente virtual que te ayuda las 24hs.
        </p>
      </div>
    </div>
  );
}

export default function NewsSection() {
  const newsImage = (
    <div className="w-full h-full relative bg-gradient-to-br from-primary-100 to-secondary-100">
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-2 h-6 bg-green-400 rounded rotate-12"></div>
      <div className="absolute top-2 right-6 w-3 h-3 bg-red-300 rounded-full rotate-45"></div>
      <div className="absolute bottom-2 right-2 w-2 h-8 bg-green-400 rounded -rotate-12"></div>
      <div className="absolute bottom-4 left-2 w-2 h-6 bg-green-400 rounded rotate-12"></div>
      
      {/* Central graphic */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-12 bg-primary-200 rounded opacity-60"></div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Account Summary Card */}
      <div className="px-4">
        <AccountSummaryCard />
      </div>

      {/* News Section */}
      <div className="px-4">
        <h2 className="text-base font-medium text-neutral-800 mb-4">
          Novedades para vos
        </h2>
        
        <NewsCard
          title="Campaña de noviembre"
          description="Descubrí todas las promociones y beneficios exclusivos de este mes."
          badge="LIMITADO"
          image={newsImage}
          onClick={() => console.log("News clicked")}
        />
      </div>

      {/* Nixi Assistant Card */}
      <div className="px-4">
        <NixiAssistantCard />
      </div>
    </div>
  );
}
