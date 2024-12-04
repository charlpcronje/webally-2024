  // src/lib/Auth.ts
  import { user } from './User';
  
  export class Auth {
    private static instance: Auth;
  
    private constructor() {}
  
    public static getInstance(): Auth {
      if (!Auth.instance) {
        Auth.instance = new Auth();
      }
      return Auth.instance;
    }
  
    hasRole(roles: string): boolean {
      if (!user.role) return false;
      return roles.split(',').some(role => user.role === role.trim());
    }
  
    valueOf(): boolean {
      return user.isLoggedIn();
    }
  }
  
  export const auth = Auth.getInstance();