// src/stores/sessionStore.ts

import { writable } from "svelte/store";

/**
 * Creates a session store for managing client session data.
 * @template T - The type of the session state.
 * @param initialState - The initial session state.
 * @returns A store with session management features.
 */
export function createSessionStore<T>(initialState: T) {
  const { subscribe, set, update } = writable<T>(initialState);

  return {
    /**
     * Subscribe to session state changes.
     * @param callback - A function to call when the session state changes.
     */
    subscribe,

    /**
     * Update the session state with a new value.
     * @param newState - The new session state.
     */
    setSession: (newState: T) => {
      set(newState);
      sessionStorage.setItem("session", JSON.stringify(newState));
    },

    /**
     * Reset the session state to the initial value.
     */
    resetSession: () => {
      set(initialState);
      sessionStorage.setItem("session", JSON.stringify(initialState));
    },

    /**
     * Initialize the session from sessionStorage if available.
     */
    loadSession: () => {
      const storedSession = sessionStorage.getItem("session");
      if (storedSession) {
        set(JSON.parse(storedSession));
      } else {
        sessionStorage.setItem("session", JSON.stringify(initialState));
      }
    },
  };
}

/* USAGE
// src/stores/userSession.ts
import { createSessionStore } from './sessionStore';

// Define a session store for user authentication.
export const userSession = createSessionStore<{ id: string; name: string | null; loggedIn: boolean }>({
  id: '',
  name: null,
  loggedIn: false,
});

// Initialize session state from sessionStorage when the app loads.
userSession.loadSession();

---

<!-- src/routes/Login.svelte -->
<script lang="ts">
  import { userSession } from '../stores/userSession';

  let username: string = '';
  let userId: string = '';

  const login = () => {
    // Set session details after login.
    userSession.setSession({ id: userId, name: username, loggedIn: true });
  };

  const logout = () => {
    userSession.resetSession(); // Clear session details.
  };
</script>

<div>
  <h2>Login</h2>
  <input type="text" bind:value={username} placeholder="Enter your name" />
  <input type="text" bind:value={userId} placeholder="Enter your ID" />
  <button on:click={login}>Login</button>

  <h2>Session Info</h2>
  <p>
    {$userSession.loggedIn
      ? `Logged in as: ${$userSession.name} (ID: ${$userSession.id})`
      : "Not logged in"}
  </p>

  <button on:click={logout}>Logout</button>
</div>


Features for Session Handling
Persistent Session: sessionStorage ensures the session persists within a browser tab.
Reactive Store: Automatically updates the Svelte components using $userSession.
Session Management: Supports login, logout, and reset functionalities.
Notes
You can extend this session store for JWT-based sessions, adding a method to decode and validate tokens.
Replace sessionStorage with localStorage if you need sessions to persist beyond the browser tab (e.g., for "remember me" functionality).
Ensure sensitive data isn't stored in sessionStorage or localStorage to avoid security risks. Use encrypted cookies or server-side sessions for sensitive information.


*/
