import { Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { AuthCallbackPage } from '../pages/AuthCallbackPage';
import { DashboardPage } from '../pages/DashboardPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* TODO: do we need this component? Remove if not needed */}
      <Route path="/auth/callback" element={<AuthCallbackPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
