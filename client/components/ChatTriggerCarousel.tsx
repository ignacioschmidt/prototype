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
                  <span className="text-foreground/80 dark:text-neutral-300">Muchos</span>{" "}
                  <span className="underline decoration-primary-600 dark:decoration-primary-400 decoration-2 underline-offset-4">Martes</span>{" "}
                  <span className="text-foreground/80 dark:text-neutral-300">le</span>{" "}
                  <span className="underline decoration-primary-600 dark:decoration-primary-400 decoration-2 underline-offset-4">transferis</span>{" "}
                  <span className="underline decoration-primary-600 dark:decoration-primary-400 decoration-2 underline-offset-4">$20.000</span>{" "}
                  <span className="text-foreground/80 dark:text-neutral-300">pesos a</span>{" "}
                  <span className="underline decoration-primary-600 dark:decoration-primary-400 decoration-2 underline-offset-4">Marta</span>
                </>
              }
              defaultMessage="Enviar $20.000 pesos a Marta"
            />
          </CarouselItem>
          <CarouselItem>
            <ChatTriggerCard
              agentLabel="agente de inversiones"
              agentType="inversiones"
              titleRich={
                <>
                  <span className="text-foreground/80 dark:text-neutral-300">En</span>{" "}
                  <span className="underline decoration-primary-600 dark:decoration-primary-400 decoration-2 underline-offset-4">8 días</span>{" "}
                  <span className="text-foreground/80 dark:text-neutral-300">se te vence tu</span>{" "}
                  <span className="underline decoration-primary-600 dark:decoration-primary-400 decoration-2 underline-offset-4">tarjeta</span>
                </>
              }
              defaultMessage="Crear un frasco a 7 días por el total adeudado de mi tarjeta"
            />
          </CarouselItem>
          <CarouselItem>
            <ChatTriggerCard
              agentLabel="agente de préstamos"
              titleText="No terminaste de sacar tu préstamo, queremos ayudarte"
              defaultMessage="Algo del préstamo no me convenció"
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


