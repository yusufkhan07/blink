export function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f8fafc',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#222' }}>
        ByteDevs.com is Coming Soon
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '2rem' }}>
        We're working hard to launch our site. Stay tuned!
      </p>
      <p style={{ fontSize: '1rem', color: '#888' }}>
        Contact: <a href="mailto:yusufkhanjee@gmail.com">yusufkhanjee@gmail.com</a>
      </p>
    </div>
  );
}

export default App;

