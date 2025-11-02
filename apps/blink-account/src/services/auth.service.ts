// Frontend-only Slack OAuth service
// This will be replaced with backend integration in Task 1.4

const SLACK_CLIENT_ID = import.meta.env.VITE_SLACK_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
const SLACK_OAUTH_URL = 'https://slack.com/oauth/v2/authorize';

export interface SlackUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  teamId: string;
  teamName: string;
}

class AuthService {
  private readonly STORAGE_KEY = 'slack_user';

  // Initiate Slack OAuth flow
  signInWithSlack(): void {
    const state = this.generateState();
    sessionStorage.setItem('oauth_state', state);

    const params = new URLSearchParams({
      client_id: SLACK_CLIENT_ID,
      user_scope: 'identity.basic,identity.avatar',
      redirect_uri: REDIRECT_URI,
      state: state,
    });

    globalThis.location.href = `${SLACK_OAUTH_URL}?${params.toString()}`;
  }

  // Handle OAuth callback - extract user info from URL
  async handleCallback(code: string, state: string): Promise<SlackUser> {
    // Verify state
    const savedState = sessionStorage.getItem('oauth_state');
    if (state !== savedState) {
      throw new Error('Invalid OAuth state');
    }
    sessionStorage.removeItem('oauth_state');

    // In a real implementation, we'd exchange the code for a token on the backend
    // For now, we'll use Slack's userinfo endpoint directly with the code
    // Note: This is a simplified demo flow - production should use backend

    try {
      // Since we can't exchange the code without backend, we'll use mock data
      // In Task 1.4, this will be replaced with actual backend API calls
      const mockUser: SlackUser = {
        id: 'U' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        name: 'Demo User',
        email: 'demo@example.com',
        avatar: 'https://i.pravatar.cc/150?img=1',
        teamId: 'T' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        teamName: 'Demo Workspace',
      };

      this.setUser(mockUser);
      return mockUser;
    } catch (error) {
      console.error('Auth callback error:', error);
      throw new Error('Authentication failed');
    }
  }

  // Store user in localStorage
  setUser(user: SlackUser): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }

  // Get current user from localStorage
  getCurrentUser(): SlackUser | null {
    const userJson = localStorage.getItem(this.STORAGE_KEY);
    if (!userJson) return null;

    try {
      return JSON.parse(userJson) as SlackUser;
    } catch {
      return null;
    }
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  // Sign out
  signOut(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  // Generate random state for OAuth security
  private generateState(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
}

export const authService = new AuthService();
