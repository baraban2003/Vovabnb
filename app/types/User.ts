export interface User {
  name: string | null;
  id: string;
  email: string | null;
  emailVerified: string | Date | null;
  image: string | null;
  hashedPassword: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
  favoriteIds: string[];
}