interface ToastProps { message: string; visible: boolean }

export default function Toast({ message, visible }: ToastProps) {
  return (
    <div className={`fixed bottom-6 right-6 z-50 text-sm px-5 py-3.5 rounded transition-all duration-300 pointer-events-none max-w-xs text-white ${visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
         style={{ background: '#181818', border: '1px solid rgba(245,130,13,0.35)', boxShadow: '0 8px 28px rgba(0,0,0,0.6)', fontFamily: 'Inter, sans-serif' }}
         role="status" aria-live="polite">
      {message}
    </div>
  )
}
