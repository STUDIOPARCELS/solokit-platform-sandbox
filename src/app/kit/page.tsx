import { headers } from 'next/headers';

export default async function KitHome() {
  const headersList = await headers();
  const slug = headersList.get('x-kit-slug') || 'unknown';

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      background: '#faf7f2',
      color: '#1c1c1c',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3px',
          width: '24px',
          height: '24px',
          margin: '0 auto 1.5rem',
        }}>
          <span style={{ background: '#1a2744', borderRadius: '3px' }} />
          <span style={{ background: '#b5432a', borderRadius: '3px' }} />
          <span style={{ background: '#2d6b4f', borderRadius: '3px' }} />
          <span style={{ background: '#1a2744', borderRadius: '3px' }} />
        </div>
        <h1 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: '2rem',
          fontWeight: 300,
          marginBottom: '0.5rem',
        }}>
          {slug}.solokit.app
        </h1>
        <p style={{ color: 'rgba(28,28,28,0.4)', fontSize: '0.875rem' }}>
          This kit is being set up. Check back soon.
        </p>
      </div>
    </main>
  );
}
