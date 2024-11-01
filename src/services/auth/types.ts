export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials extends LoginCredentials {
    name: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface User {
    id: string;
    email: string;
    name: string;
}