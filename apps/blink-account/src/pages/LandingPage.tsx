import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth.service';

export function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // If already authenticated, redirect to dashboard
    if (authService.isAuthenticated()) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSignIn = () => {
    authService.signInWithSlack();
  };

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
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
          Blink Account
        </h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Sign in to manage your Blink messages
        </p>
        <button
          onClick={handleSignIn}
          style={{
            width: '100%',
            padding: '12px 24px',
            background: '#5865F2',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Sign in with Slack
        </button>
      </div>
    </div>
  );
}
