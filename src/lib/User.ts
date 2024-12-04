// src/lib/User.ts
export class User {
    private static instance: User;

    id: number | null = null;
    name: string | null = null;
    surname: string | null = null;
    age: number | null = null;
    gender: string | null = null;
    email: string | null = null;
    password: string | null = null;
    avatar: string | null = null;
    website: string | null = null;
    blog: string | null = null;
    cv: string | null = null;
    github: string | null = null;
    linkedin: string | null = null;
    mobile: string | null = null;
    role: string | null = null;

    private constructor() { }

    public static getInstance(): User {
        if (!User.instance) {
            User.instance = new User();
        }
        return User.instance;
    }

    update(userData: Partial<User>) {
        Object.assign(this, userData);
    }

    clear() {
        Object.keys(this).forEach(key => {
            if (typeof this[key] !== 'function') {
                this[key] = null;
            }
        });
    }

    isLoggedIn(): boolean {
        return !!this.id;
    }
}

export const user = User.getInstance();