import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { Badge } from "./ui/badge";
import { Send, Sparkles } from "lucide-react";

type AgentType = "transferencias" | "inversiones" | "promociones" | "prestamos";

type ChatTriggerCardProps = {
  titleText?: string; // main body sentence
  titleRich?: React.ReactNode; // optional rich title with highlights
  defaultMessage?: string; // prefilled chat message
  agentLabel?: string; // e.g., "agente de transferencias"
  agentType?: AgentType;
  onStartChat?: (message: string) => void;
};

export default function ChatTriggerCard({
  titleText,
  titleRich,
  defaultMessage,
  agentLabel = "agente de transferencias",
  agentType = "transferencias",
  onStartChat,
}: ChatTriggerCardProps) {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [message, setMessage] = useState(
    defaultMessage ?? "Enviar $20.000 pesos a Marta",
  );
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Auto-resize the textarea to fit content height
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = `${el.scrollHeight}px`;
  }, [message]);

  function handleStart() {
    const text = message.trim();
    if (!text) return;

    if (onStartChat) {
      onStartChat(text);
    } else {
      // Navigate to chat with agent type and initial message
      const params = new URLSearchParams({
        agent: agentType,
        message: text
      });
      navigate(`/chat?${params.toString()}`);
    }
  }

  const agentStyles: Record<AgentType, string> = {
    transferencias:
      "bg-primary-50 text-foreground border-primary-200 dark:bg-primary-900/20 dark:text-neutral-100 dark:border-primary-800",
    inversiones:
      "bg-primary-50 text-foreground border-primary-200 dark:bg-primary-900/20 dark:text-neutral-100 dark:border-primary-800",
    promociones:
      "bg-primary-50 text-foreground border-primary-200 dark:bg-primary-900/20 dark:text-neutral-100 dark:border-primary-800",
    prestamos:
      "bg-primary-50 text-foreground border-primary-200 dark:bg-primary-900/20 dark:text-neutral-100 dark:border-primary-800",
  };

  const avatarStyles: Record<AgentType, string> = {
    transferencias: "bg-primary-200 text-primary-700 border-primary-200 dark:bg-primary-900/30 dark:text-primary-200 dark:border-primary-1000",
    inversiones: "bg-primary-200 text-primary-700 border-primary-200 dark:bg-primary-900/30 dark:text-primary-200 dark:border-primary-900",
    promociones: "bg-primary-200 text-primary-700 border-primary-200 dark:bg-primary-900/30 dark:text-primary-200 dark:border-primary-900",
    prestamos: "bg-primary-200 text-primary-700 border-primary-200 dark:bg-primary-900/30 dark:text-primary-200 dark:border-primary-900",
  };

  const badgeStyles: Record<AgentType, string> = {
    transferencias: "border-primary-300 text-primary-700 bg-primary-100 dark:text-primary-200 dark:border-primary-800 dark:bg-primary-900/20",
    inversiones: "border-primary-300 text-primary-700 bg-primary-100 dark:text-primary-200 dark:border-primary-800 dark:bg-primary-900/20",
    promociones: "border-primary-300 text-primary-700 bg-primary-100 dark:text-primary-200 dark:border-primary-800 dark:bg-primary-900/20",
    prestamos: "border-primary-300 text-primary-700 bg-primary-100 dark:text-primary-200 dark:border-primary-800 dark:bg-primary-900/20",
  };

  const accentButton: Record<AgentType, string> = {
    transferencias: "bg-primary-500 hover:bg-primary-600",
    inversiones: "bg-primary-500 hover:bg-primary-600",
    promociones: "bg-primary-500 hover:bg-primary-600",
    prestamos: "bg-primary-500 hover:bg-primary-600",
  };

  const avatarText: Record<AgentType, string> = {
    transferencias: "TA",
    inversiones: "AI",
    promociones: "PA",
    prestamos: "PR",
  };

  return (
    <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-primary-400 via-fuchsia-400 to-blue-400 shadow-[0_8px_20px_-12px_rgba(80,0,127,0.35)] overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-24 bg-gradient-to-br from-primary-400/15 via-fuchsia-400/15 to-blue-400/15 blur-2xl opacity-30" />

      <Card className={`${agentStyles[agentType]} rounded-[calc(1.5rem-1px)] bg-white/95 dark:bg-neutral-950/25 border border-white/10 dark:border-white/5 backdrop-blur-sm`}
      >
        <CardContent className="p-5 sm:p-6">
          <div className="space-y-4">
            {/* Agent header */}
            <div className="flex items-center gap-2">
              <div className={`h-7 w-7 rounded-full border flex items-center justify-center text-[10px] font-semibold ${avatarStyles[agentType]}`}>{avatarText[agentType]}</div>
              <Badge variant="outline" className={`capitalize ${badgeStyles[agentType]}`}>{agentLabel}</Badge>
              <Sparkles className="h-4 w-4 text-primary-500/70 opacity-60" />
            </div>

          {/* Body text resembling the reference card */}
          {titleRich ? (
            <div className="text-lg sm:text-xl leading-relaxed text-foreground dark:text-neutral-200">{titleRich}</div>
          ) : titleText ? (
            <p className="text-lg sm:text-xl leading-relaxed text-foreground dark:text-neutral-200">{titleText}</p>
          ) : (
            <p className="text-lg sm:text-xl leading-relaxed text-foreground dark:text-neutral-200">
              <span className="text-foreground/80 dark:text-neutral-300">Muchos</span>{" "}
              <span className="underline decoration-primary-600 dark:decoration-primary-400 decoration-2 underline-offset-4">Martes</span>{" "}
              <span className="text-foreground/80 dark:text-neutral-300">le</span>{" "}
              <span className="underline decoration-primary-600 dark:decoration-primary-400 decoration-2 underline-offset-4">transferis</span>{" "}
              <span className="underline decoration-primary-600 dark:decoration-primary-400 decoration-2 underline-offset-4">$20.000</span>{" "}
              <span className="text-foreground/80 dark:text-neutral-300">pesos a</span>{" "}
              <span className="underline decoration-primary-600 dark:decoration-primary-400 decoration-2 underline-offset-4">Marta</span>
            </p>
          )}

            {/* Editable prefilled bubble (auto-resize) */}
            <div className="flex items-end gap-3">
              <div className="flex-1">
                <div className="rounded-2xl bg-background/70 dark:bg-neutral-800/70 border border-input/80 dark:border-neutral-600 px-3 py-2 backdrop-blur">
                  <textarea
                    ref={textareaRef}
                    rows={1}
                    aria-label="Mensaje del chat"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleStart();
                      }
                    }}
                    className="w-full resize-none bg-transparent outline-none text-foreground placeholder:text-muted-foreground leading-6 min-h-0"
                    placeholder="Escribe tu mensaje"
                  />
                </div>
              </div>
              <Button onClick={handleStart} size="icon" className={`rounded-xl ${accentButton[agentType]}`}>
                <Send className="h-5 w-5" />
                <span className="sr-only">Enviar</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


