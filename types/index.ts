export type SafeUser = {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  emailVerified: string | null;
  createdAt: string; // Ensure createdAt is always a string
  updatedAt: string; // Ensure updatedAt is always a string
  hashedPassword: string | null;
  favoriteIds: string[];
};
