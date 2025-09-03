import AssistantFaceIcon from "./icons/AssistantFace";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "./ui/drawer";
import ChatTriggerCarousel from "./ChatTriggerCarousel";
export default function FloatingAssistantBubble() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          className="fixed bottom-20 right-1/2 translate-x-[180px] md:translate-x-[195px] z-40 rounded-full p-[2px] bg-gradient-to-br from-primary-400 via-fuchsia-400 to-blue-400 shadow-[0_8px_20px_-8px_rgba(80,0,127,0.35)]"
          aria-label="Abrir asistente"
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
            <span className="sr-only">Asistente</span>
          </div>
        </button>
      </DrawerTrigger>
      <DrawerContent className="pb-6">
        <DrawerHeader>
          <DrawerTitle>Asistente</DrawerTitle>
          <DrawerDescription>Explorá acciones rápidas</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-4">
          <ChatTriggerCarousel />
        </div>
      </DrawerContent>
    </Drawer>
  );
}


