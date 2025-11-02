import { useNavigate } from 'react-router-dom';

export function DashboardPage() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <header
        style={{
          background: 'white',
          padding: '1rem 2rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '1.5rem', color: '#333', margin: 0 }}>
          Blink Account
        </h1>
        <button
          onClick={handleSignOut}
          style={{
            padding: '8px 16px',
            background: '#f0f0f0',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Sign Out
        </button>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
          Welcome back!
        </h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Manage your Blink messages and settings
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                marginBottom: '0.5rem',
                color: '#333',
              }}
            >
              Messages
            </h3>
            <p
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#5865F2',
                margin: '1rem 0',
              }}
            >
              0
            </p>
            <p style={{ color: '#666', fontSize: '14px' }}>Active messages</p>
          </div>

          <div
            style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                marginBottom: '0.5rem',
                color: '#333',
              }}
            >
              Settings
            </h3>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '1rem' }}>
              Configure message expiration and preferences
            </p>
          </div>

          <div
            style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                marginBottom: '0.5rem',
                color: '#333',
              }}
            >
              Workspace
            </h3>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '1rem' }}>
              Connected to your Slack workspace
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: '2rem',
            padding: '1rem',
            background: '#e3f2fd',
            border: '1px solid #90caf9',
            borderRadius: '8px',
            color: '#1565c0',
          }}
        >
          <strong>Note:</strong> Full authentication will be implemented in Task
          1.4
        </div>
      </main>
    </div>
  );
}
