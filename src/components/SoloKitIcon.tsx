'use client';

export function SoloKitIcon({ className = 'w-10 h-10' }: { className?: string }) {
  const DARK_BLUE = '#0A1C3E';
  const ORANGE = '#F47920';

  return (
    <div
      className={`${className} flex items-center justify-center shadow-sm`}
      style={{ backgroundColor: DARK_BLUE, borderRadius: '22%', padding: '8%' }}
    >
      <div className="w-full h-full bg-white relative" style={{ borderRadius: '16%', padding: '6%' }}>
        <div className="w-full h-full grid grid-cols-2" style={{ gap: '6%' }}>
          <div style={{ backgroundColor: DARK_BLUE, borderRadius: '35%' }} className="w-full h-full" />
          <div style={{ backgroundColor: DARK_BLUE, borderRadius: '35%' }} className="w-full h-full" />
          <div style={{ backgroundColor: ORANGE, borderRadius: '35%' }} className="w-full h-full" />
          <div style={{ backgroundColor: DARK_BLUE, borderRadius: '35%' }} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
