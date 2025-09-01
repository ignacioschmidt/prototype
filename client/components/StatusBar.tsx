export default function StatusBar() {
  return (
    <div className="flex justify-between items-center w-full h-6 px-4 bg-transparent">
      {/* Left side - Time */}
      <div className="text-sm font-medium text-neutral-800">
        9:41
      </div>
      
      {/* Right side - Status icons */}
      <div className="flex items-center space-x-1">
        {/* Signal */}
        <div className="flex space-x-px">
          <div className="w-1 h-2 bg-neutral-500 rounded-sm"></div>
          <div className="w-1 h-3 bg-neutral-500 rounded-sm"></div>
          <div className="w-1 h-4 bg-neutral-500 rounded-sm"></div>
          <div className="w-1 h-4 bg-neutral-500 rounded-sm"></div>
        </div>
        
        {/* Wifi */}
        <div className="w-4 h-3 ml-2">
          <svg viewBox="0 0 18 14" className="w-full h-full fill-neutral-500">
            <path d="M9 14C9.55 14 10 13.55 10 13C10 12.45 9.55 12 9 12C8.45 12 8 12.45 8 13C8 13.55 8.45 14 9 14ZM9 10C10.1 10 11 10.9 11 12H7C7 10.9 7.9 10 9 10ZM9 6C11.76 6 14 8.24 14 11H16C16 7.13 12.87 4 9 4S2 7.13 2 11H4C4 8.24 6.24 6 9 6Z"/>
          </svg>
        </div>
        
        {/* Battery */}
        <div className="w-6 h-3 ml-2 relative">
          <div className="w-5 h-3 border border-neutral-500 rounded-sm">
            <div className="w-4 h-2 bg-neutral-500 rounded-sm m-px"></div>
          </div>
          <div className="w-px h-1 bg-neutral-500 absolute -right-px top-1"></div>
        </div>
      </div>
    </div>
  );
}
