import { useNavigate, useSearchParams } from "react-router-dom";
import ChatInterface from "../components/ChatInterface";

export default function Chat() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const agentType = (searchParams.get("agent") as "transferencias" | "inversiones" | "promociones" | "prestamos") || "transferencias";
  const initialMessage = searchParams.get("message") || "";
  
  const agentLabels = {
    transferencias: "agente de transferencias",
    inversiones: "agente de inversiones", 
    promociones: "agente de promociones",
    prestamos: "agente de préstamos"
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <ChatInterface
      agentLabel={agentLabels[agentType]}
      agentType={agentType}
      initialMessage={initialMessage}
      onClose={handleClose}
    />
  );
}
