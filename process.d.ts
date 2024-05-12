declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_API_PROD?: string;
    NEXT_PUBLIC_API_DEV?: string;
    NEXTAUTH_URL?: string;
    NEXTAUTH_SECRET?: string;
  }
}
