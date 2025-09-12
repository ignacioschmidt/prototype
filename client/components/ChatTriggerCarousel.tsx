import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "./ui/carousel";
import ChatTriggerCard from "./ChatTriggerCard";
import { useEffect, useState } from "react";

export default function ChatTriggerCarousel() {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    setSnapCount(api.scrollSnapList().length);
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{ loop: false, align: "start", dragFree: false }}
        className="px-4"
      >
        <CarouselContent>
          <CarouselItem>
            <ChatTriggerCard
              agentLabel="agente de transferencias"
              agentType="transferencias"
              titleRich={
                <>
                  <span className="text-foreground/80 dark:text-neutral-300">Vi que los</span>{" "}
                  <span className="underline decoration-primary-600 dark:decoration-primary-400 decoration-2 underline-offset-4">martes</span>{" "}
                  <span className="text-foreground/80 dark:text-neutral-300">le</span>{" "}
                  <span className="underline decoration-primary-600 dark:decoration-primary-400 decoration-2 underline-offset-4">transferis</span>{" "}
                  <span className="text-foreground/80 dark:text-neutral-300">a</span>{" "}
                  <span className="underline decoration-primary-600 dark:decoration-primary-400 decoration-2 underline-offset-4">Marta</span>
                </>
              }
              defaultMessage="Hacé una transferencia"
            />
          </CarouselItem>
          <CarouselItem>
            <ChatTriggerCard
              agentLabel="agente de inversiones"
              agentType="inversiones"
              titleRich={
                <>
                  <span className="text-foreground/80 dark:text-neutral-300">Tu</span>{" "}
                  <span className="underline decoration-primary-600 dark:decoration-primary-400 decoration-2 underline-offset-4">tarjeta</span>{" "}
                  <span className="text-foreground/80 dark:text-neutral-300">vence en</span>{" "}
                  <span className="underline decoration-primary-600 dark:decoration-primary-400 decoration-2 underline-offset-4">8 días</span>
                </>
              }
              defaultMessage="Armame un frasco que me rinda antes de pagar"
            />
          </CarouselItem>
          <CarouselItem>
            <ChatTriggerCard
              agentLabel="agente de préstamos"
              agentType="prestamos"
              titleText="Quedaste a mitad de tu solicitud de préstamo"
              defaultMessage="Quiero ver si hay una mejor opción"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
      </Carousel>
      <div className="mt-2 flex items-center justify-center gap-2">
        {Array.from({ length: snapCount }).map((_, i) => (
          <button
            key={i}
            aria-label={`Ir al slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={
              "h-1.5 w-1.5 rounded-full transition-colors " +
              (selectedIndex === i ? "bg-neutral-800" : "bg-neutral-300")
            }
          />
        ))}
      </div>
    </div>
  );
}


