# Blink Dashboard - User Authentication & Workspace Detection

## Task 1.2: Add Login Button to Main Website

**Description:** Add a "Dashboard" or "Sign In" button to the main Blink website header.

**Acceptance Criteria:**

- [x] Add login button to website header
- [x] Button links to `/dashboard` route
- [x] Style matches existing website design
- [x] Responsive design for mobile/desktop
- [ ] Update navigation to show login state (if user is signed in)

**Files to Modify:**

- `apps/blink-website/src/components/Header.tsx`
- `apps/blink-website/src/app/app.tsx` (add dashboard route)

**Design Requirements:**

- Use existing blue gradient theme
- Position: Top right of header
- Text: "Dashboard" or "Sign In"

---

## Task 1.3: Create Dashboard App Structure

**Description:** Set up a new React app for the dashboard with routing and basic layout.

**Acceptance Criteria:**

- [x] Create new app: `apps/blink-dashboard` (Already created but named blink-account instead)
- [x] Set up React Router.
- [x] Add routes: `/`, `/auth/callback`, `/dashboard`

**Routes:**

- `/` - Landing page with "Sign in with Slack"
- `/auth/callback` - Handle Slack OAuth callback
- `/dashboard` - Main dashboard (protected route)

---

## Task 1.4: Backend - Add Identity OAuth Endpoint

**Description:** Create new Lambda function to handle Slack OAuth for dashboard (separate from app installation).

**Acceptance Criteria:**

- [ ] Create new Lambda: `slack-identity-oauth-handler.ts`
- [ ] Use identity scopes: `identity.basic`, `identity.team`, `identity.email`
- [ ] Different redirect URI from app installation
- [ ] Store user sessions (DynamoDB or JWT)
- [ ] Add CORS configuration for dashboard domain
- [ ] Add error handling and logging

**Files to Create:**

- `apps/blink-slack-app/src/lambdas/slack-identity-oauth-handler.ts`
- `apps/blink-slack-app/src/services/user-session.service.ts`
- `apps/blink-slack-app/src/repositories/user-session.repository.ts`

**Serverless Config:**

```yaml
# Add to serverless.yml
functions:
  slackIdentityOAuthHandler:
    handler: src/lambdas/slack-identity-oauth-handler.handler
    events:
      - http:
          path: identity/oauth/slack
          method: get
          cors: true
      - http:
          path: identity/oauth/slack/callback
          method: get
          cors: true
```

**Environment Variables:**

- `DASHBOARD_REDIRECT_URI`
- `DASHBOARD_DOMAIN` (for CORS)

---

## Task 1.5: Backend - Add User Info API

**Description:** Create API endpoint to get user information and workspace Blink installation status.

**Acceptance Criteria:**

- [ ] Create endpoint: `GET /api/user/me`
- [ ] Authenticate using session token/JWT
- [ ] Return user info: name, email, team info
- [ ] Check if user's workspace has Blink installed
- [ ] Return installation status and basic workspace info
- [ ] Handle error cases (invalid token, team not found)

**API Response:**

```typescript
interface UserInfoResponse {
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  workspace: {
    id: string;
    name: string;
    domain?: string;
  };
  blinkInstallation: {
    isInstalled: boolean;
    installedAt?: string;
    currentPlan?: 'free' | 'pro';
  };
}
```

**Files to Create:**

- `apps/blink-slack-app/src/lambdas/user-info-handler.ts`
- `apps/blink-slack-app/src/services/installation-check.service.ts`

---

## Task 1.6: Frontend - Implement Slack OAuth Flow

**Description:** Implement "Sign in with Slack" functionality in the dashboard app.

**Acceptance Criteria:**

- [ ] Create landing page with "Sign in with Slack" button
- [ ] Implement OAuth initiation (redirect to Slack)
- [ ] Handle OAuth callback and extract tokens
- [ ] Store authentication state (localStorage/cookies)
- [ ] Implement protected route wrapper
- [ ] Add loading states and error handling
- [ ] Redirect to dashboard after successful auth

**Files to Create:**

- `apps/blink-dashboard/src/pages/LandingPage.tsx`
- `apps/blink-dashboard/src/pages/AuthCallbackPage.tsx`
- `apps/blink-dashboard/src/services/auth.service.ts`
- `apps/blink-dashboard/src/hooks/useAuth.ts`
- `apps/blink-dashboard/src/components/ProtectedRoute.tsx`

**Auth Service Interface:**

```typescript
interface AuthService {
  signInWithSlack(): void;
  handleCallback(code: string): Promise<void>;
  getCurrentUser(): Promise<UserInfoResponse>;
  signOut(): void;
  isAuthenticated(): boolean;
}
```

---

## Task 1.7: Frontend - Create Dashboard Page

**Description:** Create the main dashboard page showing user info and Blink installation status.

**Acceptance Criteria:**

- [ ] Show user profile info (name, email, avatar)
- [ ] Display workspace information
- [ ] Show Blink installation status clearly
- [ ] If Blink not installed, show "Install Blink" button/link
- [ ] If Blink installed, show success message
- [ ] Add sign out functionality
- [ ] Handle loading and error states
- [ ] Responsive design matching main website

**Files to Create:**

- `apps/blink-dashboard/src/pages/DashboardPage.tsx`
- `apps/blink-dashboard/src/components/UserProfile.tsx`
- `apps/blink-dashboard/src/components/WorkspaceStatus.tsx`
- `apps/blink-dashboard/src/components/BlinkInstallationCard.tsx`

**UI Components:**

- User avatar and info card
- Workspace status card
- Installation status with appropriate icons/colors
- Call-to-action buttons

---

## Task 1.8: Integration & Testing

**Description:** Connect frontend and backend, add error handling, and test the complete flow.

**Acceptance Criteria:**

- [ ] Configure API endpoints in dashboard app
- [ ] Add proper error handling and user feedback
- [ ] Test complete OAuth flow end-to-end
- [ ] Test installation detection accuracy
- [ ] Add loading spinners and error messages
- [ ] Configure deployment for dashboard app
- [ ] Update main website links to dashboard
- [ ] Test on mobile devices

**Testing Scenarios:**

- [ ] User with Blink installed signs in
- [ ] User without Blink installed signs in
- [ ] OAuth errors and edge cases
- [ ] Network errors and API failures
- [ ] Mobile responsiveness

---

## Technical Notes

**Authentication Flow:**

1. User clicks "Sign in with Slack" on dashboard
2. Redirect to Slack OAuth with identity scopes
3. Slack redirects back with code
4. Exchange code for user token
5. Store session and redirect to dashboard
6. Dashboard fetches user info and installation status

**Security Considerations:**

- Use HTTPS for all OAuth redirects
- Validate OAuth state parameter
- Secure session storage
- CORS configuration
- Rate limiting on API endpoints

**Deployment:**

- Dashboard app: Static hosting (Vercel/Netlify)
- Backend APIs: AWS Lambda (existing setup)
- Environment-specific configurations
