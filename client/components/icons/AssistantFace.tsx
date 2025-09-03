import { useId } from "react";

type AssistantFaceIconProps = {
  size?: number;
  className?: string;
};

export default function AssistantFaceIcon({ size = 24, className }: AssistantFaceIconProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `g${uid}`;
  const clipLeft = `cl${uid}`;
  const clipRight = `cr${uid}`;
  const stroke = 2.2;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4AA8FF" />
          <stop offset="45%" stopColor="#C55CFF" />
          <stop offset="75%" stopColor="#FF7ED4" />
          <stop offset="100%" stopColor="#79DC67" />
        </linearGradient>

        {/* Clip paths for white lower-half eyes */}
        <clipPath id={clipLeft}>
          <circle cx="8.7" cy="12.8" r="2.4" />
        </clipPath>
        <clipPath id={clipRight}>
          <circle cx="15.3" cy="12.8" r="2.4" />
        </clipPath>
      </defs>

      {/* Face outline (slightly oval) */}
      <ellipse cx="12" cy="12.5" rx="9" ry="8.5" stroke={`url(#${gradId})`} strokeWidth={stroke} />

      {/* Stem */}
      <path d="M12 3.2c1.2 0 2.2-.6 2.6-1.8" stroke={`url(#${gradId})`} strokeWidth={stroke} strokeLinecap="round" />

      {/* Brows */}
      <path d="M6 9.2c1.6.7 3.6.7 5.1 0" stroke={`url(#${gradId})`} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M12.9 9.2c1.6.7 3.6.7 5.1 0" stroke={`url(#${gradId})`} strokeWidth={stroke} strokeLinecap="round" />

      {/* Eyes */}
      <circle cx="8.7" cy="12.8" r="2.4" stroke={`url(#${gradId})`} strokeWidth={stroke} />
      <circle cx="15.3" cy="12.8" r="2.4" stroke={`url(#${gradId})`} strokeWidth={stroke} />
      {/* White lower halves */}
      <g clipPath={`url(#${clipLeft})`}>
        <rect x="6.2" y="12.6" width="5" height="3" fill="#FFFFFF" />
      </g>
      <g clipPath={`url(#${clipRight})`}>
        <rect x="12.8" y="12.6" width="5" height="3" fill="#FFFFFF" />
      </g>
    </svg>
  );
}


