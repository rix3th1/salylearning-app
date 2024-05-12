export const API =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_DEV
    : process.env.NEXT_PUBLIC_API_PROD;
