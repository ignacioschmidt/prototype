import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StatusBar from "../components/StatusBar";
import ChatTriggerCard from "../components/ChatTriggerCard";
import AssistantFaceIcon from "../components/icons/AssistantFace";
import { 
  Drawer, 
  DrawerContent, 
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription 
} from "../components/ui/drawer";

interface PromotionCardProps {
  title: string;
  subtitle: string;
  category: string;
  image: string;
  badge?: string;
  isActive?: boolean;
}

function PromotionCard({ title, subtitle, category, image, badge, isActive = false }: PromotionCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm min-w-[280px] overflow-hidden">
      {/* Image section with mango character */}
      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
        {/* Supermarket background */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-gray-100 via-white to-gray-100"></div>
          {/* Freezer shelves effect */}
          <div className="absolute top-8 left-4 right-4 h-16 bg-white/50 rounded"></div>
          <div className="absolute top-28 left-4 right-4 h-16 bg-white/50 rounded"></div>
        </div>
        
        {/* Mango character */}
        <div className="relative z-10 w-20 h-24">
          {/* Mango body */}
          <div className="w-16 h-20 bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 rounded-full relative mx-auto">
            {/* Mango leaf */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-green-400 rounded-full rotate-12"></div>
            
            {/* Eyes */}
            <div className="absolute top-6 left-3 w-3 h-3 bg-white rounded-full">
              <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-black rounded-full"></div>
            </div>
            <div className="absolute top-6 right-3 w-3 h-3 bg-white rounded-full">
              <div className="absolute top-0.5 right-0.5 w-2 h-2 bg-black rounded-full"></div>
            </div>
            
            {/* Mouth */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-black rounded-full"></div>
            
            {/* Sparkle */}
            <div className="absolute -top-1 -right-1 w-3 h-3">
              <div className="absolute top-1 left-1 w-1 h-1 bg-yellow-200 rounded-full"></div>
              <div className="absolute top-0 left-1.5 w-0.5 h-2 bg-yellow-200"></div>
              <div className="absolute top-1 left-0.5 w-2 h-0.5 bg-yellow-200"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-4 space-y-3">
        <div>
          <div className="text-sm font-medium text-gray-600 mb-1">Martes</div>
          <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
        
        <div className="text-sm font-medium text-gray-900">{category}</div>
        
        {badge && (
          <div className="inline-flex items-center px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
            <span className="w-4 h-4 bg-white text-orange-500 rounded-full flex items-center justify-center text-xs font-bold mr-2">NX</span>
            {badge}
          </div>
        )}
      </div>
    </div>
  );
}

function PromocionesFloatingBubble() {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          className="fixed bottom-20 right-1/2 translate-x-[180px] md:translate-x-[195px] z-40 rounded-full p-[2px] bg-gradient-to-br from-primary-400 via-fuchsia-400 to-blue-400 shadow-[0_8px_20px_-8px_rgba(80,0,127,0.35)] relative"
          aria-label="Abrir asistente de promociones"
        >
          <div className="rounded-full bg-white dark:bg-neutral-900 w-12 h-12 flex items-center justify-center overflow-hidden">
            <img
              src="/asistant.svg"
              alt="Asistente"
              className="w-8 h-8 block"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(false)}
            />
            {!imageLoaded && <AssistantFaceIcon size={20} />}
            <span className="sr-only">Asistente de promociones</span>
          </div>
          
          {/* Red notification dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-neutral-900 flex items-center justify-center pointer-events-none">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </button>
      </DrawerTrigger>
      <DrawerContent className="pb-6">
        <DrawerHeader>
          <DrawerTitle>Asistente de promociones</DrawerTitle>
          <DrawerDescription>Descubrí las mejores ofertas</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-4">
          <ChatTriggerCard
            titleRich={
              <span>
                Tenemos <span className="underline decoration-primary-600 dark:decoration-primary-400">promos</span> cerca <span className="underline decoration-primary-600 dark:decoration-primary-400">tuyo</span>!
              </span>
            }
            defaultMessage="Mostrame qué promos puedo aprovechar"
            agentLabel="agente de promociones"
            agentType="promociones"
            onStartChat={(message) => {
              console.log("Starting promotions chat:", message);
              // Here you would handle the chat initiation
            }}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default function Promociones() {
  const navigate = useNavigate();

  const promotions = [
    {
      title: "25% OFF + 3 cuotas cero interés Plan Z",
      subtitle: "Tope: $10.000 - Exclusivo online",
      category: "Súper",
      image: "/placeholder.svg",
      badge: "Crédito"
    },
    {
      title: "15% OFF en toda la tienda",
      subtitle: "Válido hasta fin de mes",
      category: "Ropa",
      image: "/placeholder.svg",
      badge: "Crédito"
    },
    {
      title: "2x1 en productos seleccionados",
      subtitle: "Oferta limitada por stock",
      category: "Electro",
      image: "/placeholder.svg",
      badge: "Crédito"
    }
  ];

  return (
    <div className="mobile-container bg-gray-50 min-h-screen">
      {/* Status Bar */}
      <div className="pt-2">
        <StatusBar />
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center"
          >
            <ArrowLeft className="w-6 h-6 text-primary-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Promociones</h1>
          <div className="w-10"></div>
        </div>

        {/* Location */}
        <div className="flex items-center mb-4">
          <div className="w-5 h-5 flex items-center justify-center mr-2">
            <div className="w-3 h-3 bg-primary-600 rounded-full relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-primary-600 rounded-t-full"></div>
            </div>
          </div>
          <span className="text-primary-600 font-medium">San Isidro, Buenos Aires</span>
        </div>

        {/* Search bar */}
        <div className="relative flex items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar"
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white"
            />
          </div>
          <button className="ml-3 w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
            <SlidersHorizontal className="w-5 h-5 text-primary-600" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 pt-6">
        {/* Promotions carousel */}
        <div className="px-4 mb-6">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {promotions.map((promotion, index) => (
              <PromotionCard
                key={index}
                title={promotion.title}
                subtitle={promotion.subtitle}
                category={promotion.category}
                image={promotion.image}
                badge={promotion.badge}
                isActive={index === 0}
              />
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center space-x-2 mt-4">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Nearby promotions section */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Promociones cercanas</h2>
            <button className="text-sm font-medium text-primary-600">Conocer más</button>
          </div>

          {/* Promotion item */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="text-center text-gray-600 mb-2">Todos los días</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">14 cuotas cero interés</div>
              <div className="text-sm text-gray-600">En productos seleccionados</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating promotions assistant bubble */}
      <PromocionesFloatingBubble />
    </div>
  );
}
