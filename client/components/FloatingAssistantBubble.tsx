import AssistantFaceIcon from "./icons/AssistantFace";
import { useState } from "react";
export default function FloatingAssistantBubble() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <button
      onClick={() => window.open('/chat-demo', '_blank')}
      className="fixed bottom-20 right-1/2 translate-x-[180px] md:translate-x-[195px] z-40 rounded-full p-[2px] bg-gradient-to-br from-primary-400 via-fuchsia-400 to-blue-400 shadow-[0_8px_20px_-8px_rgba(80,0,127,0.35)]"
      aria-label="Abrir asistente"
    >
      <div className="rounded-full bg-white dark:bg-neutral-900 w-12 h-12 flex items-center justify-center overflow-hidden">
        {/* Prefer provided SVG asset; show fallback only if image fails */}
        <img
          src="/asistant.svg"
          alt="Asistente"
          className="w-8 h-8 block"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
        />
        {!imageLoaded && <AssistantFaceIcon size={20} />}
        <span className="sr-only">Asistente</span>
      </div>
    </button>
  );
}


