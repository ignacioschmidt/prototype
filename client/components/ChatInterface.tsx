import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import StatusBar from "./StatusBar";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatInterfaceProps {
  agentLabel: string;
  agentType: "transferencias" | "inversiones" | "promociones" | "prestamos";
  initialMessage?: string;
  onClose: () => void;
}

export default function ChatInterface({ 
  agentLabel, 
  agentType, 
  initialMessage, 
  onClose 
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const avatarText: Record<typeof agentType, string> = {
    transferencias: "TA",
    inversiones: "AI",
    promociones: "PA",
    prestamos: "PR",
  };

  const agentResponses: Record<typeof agentType, string[]> = {
    transferencias: [
      "Perfecto, puedo ayudarte con la transferencia. ¿A qué contacto querés enviar los $20.000?",
      "Te muestro las opciones disponibles para transferir dinero de forma rápida y segura.",
      "¿Preferís hacer la transferencia ahora o programarla para más tarde?"
    ],
    inversiones: [
      "Excelente idea crear un frasco de inversión. Te ayudo a configurar tu frasco a 7 días.",
      "Con el monto de tu tarjeta podés generar buenos rendimientos. ¿Querés que calculemos las ganancias?",
      "Te muestro las mejores opciones de inversión para tu perfil."
    ],
    promociones: [
      "¡Te muestro las mejores promociones cerca tuyo! Encontré varias ofertas interesantes.",
      "Hay promociones exclusivas de Naranja X en tu zona. ¿Qué tipo de productos te interesan más?",
      "Te filtro las promos por categoría: súper, ropa, electro, gastronomía. ¿Cuál preferís?"
    ],
    prestamos: [
      "Entiendo que algo del préstamo no te convenció. ¿Fue el monto que te ofrecimos o la tasa de interés?",
      "Te ayudo a encontrar mejores condiciones. ¿Querés revisar otras opciones de monto o tasa?",
      "¿Preferís que ajustemos el monto del préstamo o buscamos una tasa más conveniente para vos?"
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (initialMessage) {
      // Add initial user message
      const userMessage: Message = {
        id: Date.now().toString(),
        text: initialMessage,
        isUser: true,
        timestamp: new Date()
      };
      setMessages([userMessage]);

      // Simulate agent typing and response
      setTimeout(() => {
        setIsTyping(true);
      }, 500);

      setTimeout(() => {
        setIsTyping(false);
        const responses = agentResponses[agentType];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const agentMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: randomResponse,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, agentMessage]);
      }, 2000);
    }
  }, [initialMessage, agentType]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage("");

    // Simulate agent response
    setTimeout(() => {
      setIsTyping(true);
    }, 500);

    setTimeout(() => {
      setIsTyping(false);
      const responses = agentResponses[agentType];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, agentMessage]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="mobile-container bg-white dark:bg-neutral-900 min-h-screen flex flex-col">
      {/* Status Bar */}
      <div className="pt-2">
        <StatusBar />
      </div>

      {/* Header */}
      <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
          </button>
          
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-primary-200 text-primary-700 border border-primary-200 dark:bg-primary-900/30 dark:text-primary-200 dark:border-primary-900 rounded-full flex items-center justify-center text-sm font-semibold">
              {avatarText[agentType]}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">Asistente</span>
                <Badge variant="outline" className="capitalize border-primary-300 text-primary-700 bg-primary-100 dark:text-primary-200 dark:border-primary-800 dark:bg-primary-900/20 text-xs">
                  {agentLabel}
                </Badge>
              </div>
              <div className="text-sm text-green-600 dark:text-green-400">En línea</div>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.isUser
                  ? 'bg-primary-500 text-white rounded-br-md'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-bl-md'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <div className={`text-xs mt-1 ${
                message.isUser 
                  ? 'text-primary-100' 
                  : 'text-neutral-500 dark:text-neutral-400'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl rounded-bl-md px-4 py-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 px-4 py-4">
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <textarea
              ref={inputRef}
              rows={1}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Escribe tu mensaje..."
              className="w-full resize-none bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-2xl px-4 py-3 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent min-h-[48px] max-h-32"
              style={{
                height: 'auto',
                minHeight: '48px'
              }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = target.scrollHeight + 'px';
              }}
            />
          </div>
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            size="icon"
            className="rounded-xl bg-primary-500 hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed h-12 w-12"
          >
            <Send className="h-5 w-5" />
            <span className="sr-only">Enviar</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
