export const BASE_URL = {
  development: "http://localhost:3000",
  preview: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
  production: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
}[process.env.NEXT_PUBLIC_VERCEL_ENV || "development"] as string;

