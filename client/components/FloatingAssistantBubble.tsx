export default function FloatingAssistantBubble() {
  return (
    <div className="sticky bottom-20 z-40 flex justify-end pr-4">
      <button
        onClick={() => window.open('/chat-demo', '_blank')}
        className="rounded-full p-[2px] bg-gradient-to-br from-primary-400 via-fuchsia-400 to-blue-400 shadow-[0_8px_20px_-8px_rgba(80,0,127,0.35)]"
        aria-label="Abrir asistente"
      >
        <div className="rounded-full bg-white dark:bg-neutral-900 w-12 h-12 flex items-center justify-center">
          <div className="relative">
            <div className="w-6 h-6 bg-gradient-to-br from-primary-400 via-fuchsia-400 to-blue-400 rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-white">
                <path fill="currentColor" d="M12 2l1.76 3.76L18 7.5l-3.24 1.74L12 13l-2.76-3.76L6 7.5l4.24-1.74L12 2z" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}


