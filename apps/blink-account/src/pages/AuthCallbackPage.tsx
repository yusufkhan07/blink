import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth.service';

export function AuthCallbackPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const params = new URLSearchParams(globalThis.location.search);
      const code = params.get('code');
      const state = params.get('state');
      const errorParam = params.get('error');

      if (errorParam) {
        setError('Authentication was cancelled or failed');
        setTimeout(() => navigate('/'), 3000);
        return;
      }

      if (!code || !state) {
        setError('Invalid callback parameters');
        setTimeout(() => navigate('/'), 3000);
        return;
      }

      try {
        await authService.handleCallback(code, state);
        navigate('/dashboard');
      } catch (err) {
        console.error('Auth error:', err);
        setError('Authentication failed. Please try again.');
        setTimeout(() => navigate('/'), 3000);
      }
    };

    handleOAuthCallback();
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '3rem',
          borderRadius: '12px',
          maxWidth: '400px',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        }}
      >
        {error ? (
          <>
            <div
              style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                color: '#d32f2f',
              }}
            >
              ✕
            </div>
            <h2
              style={{
                fontSize: '1.5rem',
                marginBottom: '0.5rem',
                color: '#d32f2f',
              }}
            >
              Authentication Error
            </h2>
            <p style={{ color: '#666' }}>{error}</p>
            <p
              style={{ color: '#999', fontSize: '0.875rem', marginTop: '1rem' }}
            >
              Redirecting...
            </p>
          </>
        ) : (
          <>
            <div
              style={{
                width: '60px',
                height: '60px',
                border: '4px solid #e0e0e0',
                borderTop: '4px solid #5865F2',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 1.5rem',
              }}
            />
            <h2
              style={{
                fontSize: '1.5rem',
                marginBottom: '0.5rem',
                color: '#333',
              }}
            >
              Signing you in...
            </h2>
            <p style={{ color: '#666' }}>Please wait</p>
          </>
        )}
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}
