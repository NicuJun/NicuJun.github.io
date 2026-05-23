interface XsLogoProps {
  size?: number
  className?: string
}

export default function XsLogo({ size = 48, className = '' }: XsLogoProps) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 120 108" fill="none"
         xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="xs-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#f5d020" />
          <stop offset="45%"  stopColor="#f5820d" />
          <stop offset="100%" stopColor="#e03000" />
        </linearGradient>
      </defs>
      <path d="M8 8 L52 60 M52 8 L8 60" stroke="url(#xs-grad)" strokeWidth="18"
            strokeLinecap="round" strokeLinejoin="round" />
      <path d="M112 22 C112 22 72 18 68 36 C64 52 108 52 106 68 C104 84 66 88 58 100"
            stroke="url(#xs-grad)" strokeWidth="16" strokeLinecap="round"
            strokeLinejoin="round" fill="none" />
    </svg>
  )
}
