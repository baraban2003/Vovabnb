export type SafeUser = {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  emailVerified: string | null;
  createdAt: string;
  updatedAt: string | null;
  hashedPassword: string | null;
  favoriteIds: string[];
};
