import ChatTriggerCarousel from "@/components/ChatTriggerCarousel";

export default function ChatDemo() {
  return (
    <div className="mobile-container bg-neutral-50 min-h-screen relative">
      <div className="pt-6 pb-10 px-4">
        <h1 className="text-lg font-medium text-neutral-900 mb-4">Demo de chat</h1>
        <ChatTriggerCarousel />
      </div>
    </div>
  );
}


